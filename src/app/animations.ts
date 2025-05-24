import { 
  trigger, 
  transition, 
  style, 
  animate, 
  query,
  group,
  keyframes
} from '@angular/animations';

export const mangaPageFlip = trigger('routeAnimations', [
  transition('* <=> *', [
    // Oculta ambas páginas inicialmente
    query(':enter, :leave', [
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        opacity: 0,
        backfaceVisibility: 'hidden'
      })
    ], { optional: true }),
    
    group([
      query(':leave', [
        animate('800ms ease-in', keyframes([
          style({ transform: 'rotateY(0)', opacity: 1, offset: 0 }),
          style({ transform: 'rotateY(-90deg)', offset: 0.5 }),
          style({ transform: 'rotateY(-180deg)', opacity: 0, offset: 1 })
        ]))
      ], { optional: true }),
      
      query(':enter', [
        animate('800ms 200ms ease-out', keyframes([
          style({ transform: 'rotateY(180deg)', opacity: 0, offset: 0 }),
          style({ transform: 'rotateY(90deg)', opacity: 0, offset: 0.49 }), // Mantiene oculto hasta el 49%
          style({ transform: 'rotateY(90deg)', opacity: 1, offset: 0.5 }), // Aparece justo a la mitad
          style({ transform: 'rotateY(0)', opacity: 1, offset: 1 })
        ]))
      ], { optional: true })
    ])
  ])
]);