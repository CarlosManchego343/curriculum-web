import { trigger, transition, style, animate, query, keyframes } from '@angular/animations';

export const mangaPageFlip = trigger('pageFlip', [
  transition('* <=> *', [
    query(':enter, :leave', style({
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      zIndex: 0
    }), { optional: true }),

    // Página que se voltea (lado derecho)
    query(':leave', [
      animate('1s ease-in', keyframes([
        style({ transform: 'rotateY(0) translateX(0)', 'transform-origin': 'right center', zIndex: 2, offset: 0 }),
        style({ 'box-shadow': '-15px 0 30px rgba(0,0,0,0.3)', offset: 0.3 }),
        style({ transform: 'rotateY(-150deg) translateX(-30%)', opacity: 0.7, offset: 0.8 }),
        style({ transform: 'rotateY(-180deg) translateX(-60%)', opacity: 0, zIndex: 0, offset: 1 })
      ]))
    ], { optional: true }),

    // Página nueva (lado izquierdo)
    query(':enter', [
      animate('1s 200ms ease-out', keyframes([
        style({ transform: 'rotateY(180deg) translateX(60%)', opacity: 0, zIndex: 1, offset: 0 }),
        style({ transform: 'rotateY(30deg) translateX(30%)', opacity: 0.5, offset: 0.5 }),
        style({ transform: 'rotateY(0) translateX(0)', opacity: 1, zIndex: 2, offset: 1 })
      ]))
    ], { optional: true })
  ])
]);