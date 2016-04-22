module.exports = function(grunt) {

  grunt.config.set('ngtemplates', {
    wildfireHazards : {
      cwd : 'src/js',
      src : '**/**.html',
      dest : 'build/js/templates.js',
      options : {
        htmlmin : '<%= htmlmin.wildfireHazards %>'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-angular-templates');
}
