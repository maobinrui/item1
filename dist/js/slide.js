/*
* @Author: Marte
* @Date:   2018-02-04 16:02:58
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 13:35:46
*/

'use strict';
//   var swiper = new Swiper ('.swiper-container1', {
//     loop: true, //循环
//     autoplay:true, //自动
//     navigation:{ //按钮
//         nextEl:'.swiper-button-next',
//         prevEl:'.swiper-button-prev',
//     },
//   })
//   swiper.el.onmouseover = function(){
//   swiper.autoplay.stop();
// }
//   swiper.el.onmouseleave = function(){
//   swiper.autoplay.start();
// }

// --------------------slide_small----------------------------
// var slide_small = new Swiper ('.swiper-container:nth-of-type(2)', {
        // pagination: '.swiper-pagination',
        // slidesPerView: 3,
        // paginationClickable: true,
        // spaceBetween: 30,
        // freeMode: true

        //   pagination: '.swiper-pagination',
        // paginationClickable: true,
        // slidesPerView: 5,
        // spaceBetween: 50,
        // breakpoints: {
        //     1024: {
        //         slidesPerView: 4,
        //         spaceBetween: 40
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 30
        //     },
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20
        //     },
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 10
        //     }
        // }


    // loop: true,
    // autoplay:true,
    // slidesPerview:'auto',
    // freeModeMomentum:true,
    // slidesPerView :'auto',

    // pagination: '.swiper-pagination',
     // slidesPerView: auto,
      // spaceBetween: 30,  距离
      // slidesPerGroup: 6,
      // loop: true,
      // loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    // slidesPerView: 4,
    // centeredSlides: true,
    // paginationClickable: true,
    // spaceBetween: 30,
    // navigation:{
    //     nextEl:'.swiper-button-next',
    //     prevEl:'.swiper-button-prev',
    // },
// })
//   slide_small.el.onmouseover = function(){
//   slide_small.autoplay.stop();
// }
//   slide_small.el.onmouseleave = function(){
//   slide_small.autoplay.start();
// }
//
//
var swiper = new Swiper('.swiper-container1', {
    pagination: '.swiper-p1',
    // direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true,

        loop: true, //循环
    autoplay:true, //自动
    navigation:{ //按钮
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

});
  swiper.el.onmouseover = function(){
  swiper.autoplay.stop();
}
  swiper.el.onmouseleave = function(){
  swiper.autoplay.start();
}

var swiper2 = new Swiper('.swiper-container2', {
    pagination: '.swiper-p2',
    // direction: 'vertical',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true,
    slidesPerGroup: 1,
    // loop: true, //循环
    // autoplay:true, //自动
    navigation:{ //按钮
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});
  swiper2.el.onmouseover = function(){
  swiper2.autoplay.stop();
}
  swiper2.el.onmouseleave = function(){
  swiper2.autoplay.start();
}
