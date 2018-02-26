/*
* @Author: Marte
* @Date:   2018-02-05 10:45:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 20:27:11
*/

'use strict';

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-p3',
    // direction: 'vertical',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true,
    slidesPerGroup: 1,
    // loop: true, //循环
    // autoplay:false, //自动
    // loop: true, //循环
    // autoplay:true, //自动
    // navigation:{ //按钮
    //     nextEl:'.swiper-button-next',
    //     prevEl:'.swiper-button-prev',
    // },
    navigation:{ //按钮
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});
