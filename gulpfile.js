const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function compileSass() {
    return gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function watchSass() {
    gulp.watch('styles/**/*.scss', compileSass);
}

gulp.task('sass', compileSass);
gulp.task('watch', watchSass);

gulp.task('default', gulp.series('sass', 'watch'));
