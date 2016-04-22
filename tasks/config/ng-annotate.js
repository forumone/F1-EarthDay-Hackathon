module.exports = function(grunt) {

  grunt.config.set('ngAnnotate', {
    options : {
      singleQuotes : true,
    },
    app : {
      files : [ {
        expand : true,
        src : [ 'build/js/**/*.js' ]
      } ],
    },
  });

  grunt.loadNpmTasks('grunt-ng-annotate');
};