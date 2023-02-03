import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      state('open', style({
        position: 'absolute',
        zIndex: '100',
        opacity: 1,
        height: '100vh',
        width: '100%',
        transform: 'scale(1)'
      })),
      state('close', style({
        position: 'absolute',
        zIndex: '100',
        height: '0px',
        opacity: 0

      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public showMenu = false;

}
