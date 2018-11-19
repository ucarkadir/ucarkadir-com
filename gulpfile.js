const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const reload =  browserSync.reload


gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
        .pipe(sass()) // 
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
        
});

// creata a server watching files
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        notify: false,
        server: './src'
    });

    gulp.watch('src/scss/**/*.scss', ['sass']).on('change',reload);
    gulp.watch('src/*.html').on('change',reload);
});

gulp.task('default', ['serve']);