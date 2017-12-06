var gulp = require("gulp");
var sass = require("gulp-sass");
var sourceMaps = require("gulp-sourcemaps");
var bs = require("browser-sync");//浏览器同步
var uglify = require("gulp-uglify");//js压缩
var htmlmin = require("gulp-htmlmin");//html压缩
var reload = bs.reload; //浏览器重新加载

gulp.task("default", ['server'], function () {
	console.log("任务开始")
})
//监听js css html 变化
gulp.task("server", ["sass", "js", "htmlmin", "images", "font"], function () {
	bs.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./js/*.js', ['js']);
	gulp.watch('./*.html', ['htmlmin']);
	gulp.watch('./font/*.*', ['font']);
	gulp.watch('./images/*/*.*', ['images']);
});
gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe(reload({
			stream: true
		}))
})
gulp.task("js", function () {
	return gulp.src("./js/*.js")
		.pipe(sourceMaps.init())
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest("./dist/js"))
		.pipe(reload({
			 stream: true 
		}))
})
gulp.task('font', function () {
	return gulp.src('./font/*.*')
		.pipe(sourceMaps.init())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./dist/font'))
		.pipe(reload({
			stream: true
		}))
})
gulp.task("images", function () {
	return gulp.src("./images/**/*.*")
		.pipe(sourceMaps.init())
		.pipe(gulp.dest("./dist/images"))
		.pipe(reload({
			 stream: true
		 }))
})
gulp.task('htmlmin', function () {
	var options = {
		removeComments: true,//清除HTML注释
		collapseWhitespace: true,//压缩HTML
		collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	};
	return gulp.src('./*.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('./dist'))
		.pipe(reload({ 
			stream: true 
	}))
})