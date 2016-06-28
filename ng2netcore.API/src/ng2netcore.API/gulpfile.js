/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
(function(gulp,buildtools,chalk,concat ){
  'use strict';

    buildtools.createTasks(gulp);



    gulp.task('default', function () {
        // place code for your default task here
        // console.log(chalk.green(JSON.stringify(buildtools.getApp('testApp1'))));
        // console.log(chalk.cyan(JSON.stringify(buildtools.getModule('testModule1'))));

        // var testModule = buildtools.getModule('testModule1');
        // return gulp.src([testModule.src +"*.js",testModule.src +"**/*.js"])
        //       .pipe(concat(testModule.name +".js"))
        //       .pipe(gulp.dest( './wwwroot/dist/' ));



    })
    var paths = {};
    paths.webroot = "wwwroot/";
    paths.npmSrc = "./node_modules/";
    paths.npmLibs = paths.webroot + "lib/npmlibs/";
    gulp.task("copy-deps:systemjs", function () {
        return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
             .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
    });
    gulp.task("copy-deps:angular2", function () {
        return gulp.src(paths.npmSrc + '/angular2/bundles/**/*.js', { base: paths.npmSrc + '/angular2/bundles/' })
             .pipe(gulp.dest(paths.npmLibs + '/angular2/'));
    });
    gulp.task("copy-deps:es6-shim", function () {
        return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
             .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
    });
    gulp.task("copy-deps:es6-promise", function () {
        return gulp.src(paths.npmSrc + '/es6-promise/dist/**/*.*', { base: paths.npmSrc + '/es6-promise/dist/' })
             .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));
    });
    gulp.task("copy-deps:rxjs", function () {
        return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*', { base: paths.npmSrc + '/rxjs/bundles/' })
             .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
    });
    gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:es6-promise']);

})(require('gulp'),require('./buildtools/buildtools.js'),require('chalk'),require('gulp-concat'));
