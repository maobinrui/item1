/*
* @Author: Marte
* @Date:   2018-02-07 08:25:14
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 09:02:19
*/

'use strict';

$(document).ready(function() {
    $('.yiji').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).parent('li').siblings('li').removeClass('yiji');
            $(this).addClass('yiji');
            $(this).siblings('ul').slideDown(100).children('li');
            if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('yiji');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);

            }
        }else{
            //控制自身变成+号
            $(this).removeClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').slideUp(100);
            //控制自身子菜单变成+号
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').children('li').children('ul').slideUp(100);

            //控制同级菜单只保持一个是展开的（-号显示）
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
        }
    })
});