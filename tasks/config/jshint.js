module.exports = function(grunt) {
  grunt.config.set('jshint', {
    beforeconcat: [ 'src/js/**/*.js' ]
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};