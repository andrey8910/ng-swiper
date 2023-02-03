import {Component, OnInit} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { EffectFade, Swiper,  Navigation,
  Pagination,
  Scrollbar,
  A11y, } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade,Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit{

ngOnInit() {
}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
