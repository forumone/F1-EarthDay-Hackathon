module.exports = function (grunt) {
  grunt.registerTask('compileScripts', [
    'modernizr',
    'ngtemplates',
    'ngAnnotate',
  ]);
};
