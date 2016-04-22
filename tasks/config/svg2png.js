// https://github.com/dbushell/grunt-svg2png

module.exports = function(grunt) {

  grunt.config.set('svg2png', {
    dist: {
      files: [{
        expand: false,
        flatten: true,
        cwd: 'src/images/bg/',
        src: ['*.svg'],
        dest: 'build/images/bg/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-svg2png');
};
