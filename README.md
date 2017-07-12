# Gulp Build
Some package:
```
var 
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'), 
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'), 
	pngquant = require('imagemin-pngquant'),
	tinypng = require('gulp-tinypng'), 
	del = require('del'),
	pug = require('gulp-pug'), 
	browserSync  = require('browser-sync'); 
```
Some command:
```
npm install  // download all package
gulp         // default task [watch]
gulp tinypng // compress image
gulp build   // delete folder /build/ - > dest files

```