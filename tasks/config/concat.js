module.exports = function(grunt) {
  grunt.config.set('concat', {
    js: {
      src: ['src/js/config.js', 'src/js/index.js', 'src/js/**/*.js'],
      dest: 'public/js/app.js'
    },
    css: {
      src: ['src/css/**/*.css'],
      dest: 'public/css/app.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};