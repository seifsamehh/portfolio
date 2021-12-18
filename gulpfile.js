const gulp = require('gulp');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');

gulp.task("assest", function() {
    return gulp.src("/project/*.css")
    .pipe(gulp.dest('dist/assests'))
})