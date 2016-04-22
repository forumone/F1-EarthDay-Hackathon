module.exports = function(grunt) {
  grunt.config.set('uglify', {
    js : {
      options : {
        sourceMap : true,
        sourceMapIncludeSources : true,
        sourceMapRoot : '../src'
      },
      files : [{
        cwd : 'build',
        expand : true,
        src : require('../pipeline.js').jsFilesToInject,
        dest : 'build',
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};