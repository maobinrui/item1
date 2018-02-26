/*
* @Author: Marte
* @Date:   2018-01-27 16:38:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-01 16:43:05
*/
var gulp  =require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
//var concat = require("gulp-concat");
//var uglify = require("gulp-uglify");
//var minify = require("gulp-minify-css");
//var rename = require("gulp-rename");
gulp.task("copyhtml",function(){
    return gulp.src("src/html/*").pipe(gulp.dest("dist/html")).pipe(connect.reload());
})

gulp.task("copyjs",function(){
    return gulp.src("src/js/*").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})

gulp.task("copycss",function(){
    return gulp.src("src/css/**/*").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("mywatch",function(){
    gulp.watch("src/html/*.html",["copyhtml"]);
    gulp.watch("src/js/*.js",["copyjs"]);
    gulp.watch("src/css/**/*",["copycss"]);
})
gulp.task("server",function(){
    connect.server({
        port:8000,
        root:["dist"],  //选择服务器根目录
        livereload:true //开启服务器通知更新功能
    })
})
gulp.task("default",["copyhtml","copyjs","copycss","mywatch","server"]);









