// Generated by CoffeeScript 1.9.3
(function() {
  var exec, gulp;

  gulp = require('gulp');

  exec = require('child_process').exec;

  gulp.task('sync', function() {
    return exec('task/qrsync task/build.json', function(err, stdout, stdinfo) {
      console.log(stdout);
      return console.log(stdinfo);
    });
  });

}).call(this);

//# sourceMappingURL=sync.js.map