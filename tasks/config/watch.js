module.exports = function(grunt) {

  grunt.config.set('watch', {
    assets: {
      options: {
        livereload: true
      },
      // Assets to watch:
      // files: ['src/data/**/*','src/js/**/*','src/images/**/*','!src/images/**/*.svg'],
      files: ['src/data/**/*','src/js/**/*'],
      // When assets are changed:
      tasks: ['compileAssets']
    },
    sass: {
      options: {
        livereload: true,
      },
      files : [ 'src/sass/**/*.scss', '!src/sass/partials/sass-globbing/**/*.scss' ],
      tasks : [
        // 'modernizr',
        'compileStyles',
        'sync:build',
      ],
    },
    svgs: {
      files : [ 'src/images/**/*.svg' ],
      tasks : [
        'processImages',
        'sync:images',
        'sync:build',
      ],
    },
    templates: {
      options: {
        livereload: true,
      },
      files: ['templates/**/*'],
      tasks: ['htmlbuild']
    }
  });

  grunt.loadNpmTasks('grunt-simple-watch');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
