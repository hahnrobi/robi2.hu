import {trigger, transition, style, query, group, animateChild, animate, keyframes} from '@angular/animations';

export const blurer = trigger('routeAnimations', [
    transition('* <=> *', [
        query(":enter, :leave", [
            style({
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                filter: "blur(20px)"
            })
        ], {optional: true}),
        query(':enter', [
            animate('200ms ease',
                style({
                    opacity: 1,
                    filter: "blur(0px)"
                })
            )
        ], {optional: true}),
        query(':leave', [
          animate('200ms ease',
              style({
                  opacity: 0,
                  filter: "blur(20px)"
              })
          )
      ], {optional: true})
    ])
])