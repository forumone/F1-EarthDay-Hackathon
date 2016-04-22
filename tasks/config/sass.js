module.exports = function(grunt) {

  grunt.config.merge({
    sass: {
      gesso: {
        files : [{
          expand : true,
          cwd : '<%= pkg.themePath %>/sass/',
          src : [ '**/*.scss' ],
          dest : 'build/css',
          ext : '.css'
        }],
        options : {
          sourceMap : true,
          outputStyle : 'nested',
          // includePaths : [ 'build/vendor' ],
          includePaths : [ 'bower_components' ],
          quiet : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
}
