var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'), 
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'), 
	pngquant = require('imagemin-pngquant'), 
	tinypng = require('gulp-tinypng'), 
	del = require('del'), 
	pug = require('gulp-pug'), 
    browserSync  = require('browser-sync'); 


gulp.task('tinypng', function () {
    gulp.src('src/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng('_yFpjOjLfxb02qJjVNOpqjF2g0eiNZwp1'))
        .pipe(gulp.dest('build/tinypng'));
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'src' // Директория для сервера 
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']); 
	gulp.watch('src/*.html', browserSync.reload); 
	gulp.watch('src/js/**/*.js', browserSync.reload);
	gulp.watch('src/css/**/*.css', browserSync.reload);
	gulp.watch('src/pug/**/*.pug', ['pug']); 
});

gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest('src'));
});


gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('./src/css/'));
});

// gulp.task('img', function() {
// 	return gulp.src('src/images/**/*') // Берем все изображения из src
// 		.pipe(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
// 			interlaced: true,
// 			progressive: true,
// 			svgoPlugins: [{removeViewBox: false}],
// 			use: [pngquant()]
// 		}))
// 		.pipe(gulp.dest('build/images')); // Выгружаем на продакшен
// });

gulp.task('build', ['clean', 'sass'], function() {

	var buildCss = gulp.src('src/css/**/*') // Переносим css в продакшен
	.pipe(gulp.dest('build/css'))

	var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('build/fonts'))

	var buildJs = gulp.src('src/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('build/js'))

	var buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('build'));

	var buildHtml = gulp.src('src/images/**/*') // Переносим TinyPng в продакшен
	.pipe(gulp.dest('build/images'));

});

gulp.task('clean', function() {
	return del.sync('build'); // Удаляем папку build перед сборкой
});

gulp.task('default', ['watch']);