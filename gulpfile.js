var gulp        = require('gulp'),
	  browserSync = require('browser-sync'),
	  reload      = browserSync.reload;


gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("**/*.html").on("change", reload);
    gulp.watch("**/*.css").on("change", reload);
});

gulp.task('default', gulp.parallel('watch'));