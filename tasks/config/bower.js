module.exports = function(grunt) {

  grunt.config.set('bower', {
    install : {
      options : {
        targetDir : 'build/vendor',
        layout : 'byComponent',
        install : true,
        verbose : false,
        cleanTargetDir : true,
        cleanBowerDir : false,
        bowerOptions : {},
        packageSpecific : {
          lodash : {
            files : [ 'dist/lodash.js' ]
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
};
