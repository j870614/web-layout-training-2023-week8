import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// 載入google font
import 'material-icons/iconfont/material-icons.css';
// 載入 swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 24,
    // mousewheel: true,
    loop: false,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
});