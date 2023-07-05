// run 'gulp scripts' to generate stand alone scripts after updating 'after.js'

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var saveLicense = require('uglify-save-license');
var uglify = require('gulp-uglify');

//script paths
var jsFiles = ['scripts/license.js','after.js'],
    jsDest = 'scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('alternator.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('alternator.min.js'))
        .pipe(uglify({
            output: {
                comments: saveLicense
            }
        }))
        .pipe(gulp.dest(jsDest));
});