
(function(module ,_, moment, appDefinitions,concat,chalk,uglify){
  'use strict';

  module.exports = {
      getApp:_getApp,
      getModule:_getModule,
      createTasks:_createTasks
  };

  function _getApp(appName){

    return _.find(appDefinitions.applications,function(app){
      return app.name==appName;
    });
  }

  function _getModule(moduleName){
    return _.find(appDefinitions.modules,function(module){
      return module.name==moduleName;
    });
  }


  var MODULE_BUILD_SUFFIX='-buildmodule',
      APP_BUILD_SUFFIX='-appbuild',
      COMBINE_MODULE_SUFFIX='-combine',
      MODULES_PATH="./modules/",
      DIST_PATH="./wwwroot/dist/";


  function _createTasks(gulp){

      _.each(appDefinitions.modules,function(module){

        var _module = module;
        gulp.task(module.name+ MODULE_BUILD_SUFFIX, function () {
            //var testModule = buildtools.getModule(module.name);
            console.log(chalk.green(JSON.stringify(_module)));
            return gulp.src([_module.src +"*.js",_module.src +"**/*.js"])
            .pipe(concat(_module.name +".js"))
            .pipe(gulp.dest(MODULES_PATH));
        })

      });
      _.each(appDefinitions.applications,function(app){


        console.log(chalk.blue(app.name + APP_BUILD_SUFFIX));
          gulp.task(app.name + APP_BUILD_SUFFIX, [app.name+'_modules']);

          gulp.task(app.name+COMBINE_MODULE_SUFFIX,function(){
              var _module_files=[];
              _.each(app.modules, function(module){
                _module_files.push(MODULES_PATH+module+'.js');
              });


              return gulp.src(_module_files)
              .pipe(concat(app.name+'.js'))
              .pipe(gulp.dest(DIST_PATH));
          });


          var _mod_tasks = [];

          _.each(app.modules,function(module){

            _mod_tasks.push(module+MODULE_BUILD_SUFFIX)
          });
          _mod_tasks.push(app.name+COMBINE_MODULE_SUFFIX);

          gulp.task(app.name +'_modules', _mod_tasks)


    });




  }







})(module,require('underscore'),require('moment'),require('./appdef.json'),require('gulp-concat'),require('chalk'));
