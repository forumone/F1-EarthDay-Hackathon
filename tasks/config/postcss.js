module.exports = function(grunt) {
  var assets  = require('postcss-assets');

  grunt.config.merge({
    postcss : {
      theme : {
        options : {
          // map: {
          //   inline: false // save all sourcemaps as separate files...
          // },
          processors: [
            require('postcss-assets')(),
            require('autoprefixer')({
              browsers: '> 1%, last 3 versions',
              remove: false // don't remove outdated prefixes (there shouldn't be any, and this saves compile time)
            }),
          ]
        },
        src: 'build/css/*.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
}

