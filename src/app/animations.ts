import {
  trigger, state, style, transition, animate, keyframes, AnimationEntryMetadata
} from '@angular/core';

export const routerTransition: AnimationEntryMetadata =
  trigger('routerTransition', [
    state('void', style({
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: '0'
    })),
    state('*', style({
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: '1'
    })),

    transition(':enter', [
      style({transform: 'translateX(-50%)', opacity: 0}),
      animate('0.8s ease-in-out', style({transform: 'translateX(0%)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('1s ease-out', style({transform: 'translateX(50%)', opacity: 0}))
    ])
  ]);
