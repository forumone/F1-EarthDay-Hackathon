// https://github.com/JamieMason/grunt-imageoptim

module.exports = function(grunt) {

  grunt.config.set('imageoptim', {
    dist: {
      options: {
        jpegMini: false,
        imageAlpha: true,
        quitAfter: true
      },
      src: ['src/images'],
      dest: 'build/images'
    }
  });

  grunt.loadNpmTasks('grunt-imageoptim');
};
