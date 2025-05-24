import { 
  trigger, 
  transition, 
  style, 
  animate, 
  query, 
  group, 
  keyframes,
  sequence
} from '@angular/animations';

export const mangaPageFlip = trigger('pageFlip', [
  transition('* <=> *', [
    sequence([
      // 1. Oculta inmediatamente la nueva página
      query(':enter', [
        style({
          opacity: 0,
          transform: 'rotateY(180deg)',
          zIndex: 1
        })
      ], { optional: true }),
      
      // 2. Anima la página actual
      query(':leave', [
        style({
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 2,
          backfaceVisibility: 'hidden'
        }),
        animate('800ms ease-in', keyframes([
          style({ transform: 'rotateY(0)', offset: 0 }),
          style({ transform: 'rotateY(-90deg)', offset: 0.5 }),
          style({ transform: 'rotateY(-180deg)', opacity: 0, offset: 1 })
        ]))
      ], { optional: true }),
      
      // 3. Muestra y anima la nueva página
      query(':enter', [
        animate('800ms ease-out', keyframes([
          style({ transform: 'rotateY(180deg)', opacity: 0, offset: 0 }),
          style({ transform: 'rotateY(90deg)', opacity: 1, offset: 0.5 }),
          style({ transform: 'rotateY(0)', opacity: 1, offset: 1 })
        ]))
      ], { optional: true })
    ])
  ])
]);