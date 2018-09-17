
var gulp = require("gulp");
var babel = require("gulp-babel");//es6转es5
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
gulp.task('jsTask',function(){
	gulp.src('js/*')
		.pipe(babel({presets:['es2015']}))
		.pipe(uglify())
		.pipe(gulp.dest('dest/js'))
});
gulp.task('cssTask',function(){
	gulp.src('css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dest/css'))
});
gulp.task('default',['jsTask','cssTask']);


