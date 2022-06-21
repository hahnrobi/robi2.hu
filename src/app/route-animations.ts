import {trigger, transition, style, query, group, animateChild, animate, keyframes, sequence} from '@angular/animations';

export const blurer = trigger('routeAnimations', [
    transition('* <=> *', [
        query(":enter, :leave", [
            style({
                position: "absolute",
                width: "100%",
                height: "100%",
                left: '0'
                //opacity: 0,
                //filter: "blur(20px)"
            })
        ], {optional: true}),
        query(':enter', [
            animate('200ms ease',
                style({
                    left: 0
                })
            )
        ], {optional: true}),
        query(':leave', [
          animate('200ms ease',
              style({
                  left: '100%'
              })
          )
      ], {optional: true})
    ])
])

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> 404', [
        query(':enter, :leave', [
          style({
              position: 'absolute',
              width: '100%'
            })
        ], {optional: true}),
        query(':enter', [
          style({ transform: 'scale(0)' })
        ], {optional: true}),
        sequence([
          query(':enter', [
              animate('300ms ease-out', style({ transform: 'scale(1)' }))
          ]),
        ]),
      ]),
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
            position: 'absolute',
            transform: 'translateX(0)'
          })
      ], {optional: true}),
      query(':enter', [
        style({ transform: 'translateX(-100vw)' })
      ], {optional: true}),
      sequence([
        query(':leave', [
            animate('400ms cubic-bezier(0.33, 1, 0.68, 1)', style({ transform: 'translateX(100vw)', opacity: 0 }))
        ], {optional: true}),
        query(':enter', [
            animate('500ms cubic-bezier(0.33, 1, 0.68, 1)', style({ transform: 'translateX(0)' }))
        ], {optional: true}),
      ]),
    ])
  ]);