module.exports = function(grunt) {

  grunt.config.set('sync', {
    vendor : {
      files : [ {
        cwd : 'build/vendor',
        src : [ '**/*.css' ],
        dest : 'public/vendor/css',
        expand : true,
      } ]
    },
    build : {
      files : [ {
        cwd : 'build/css',
        src : '**/*.css' ,
        dest : 'public/css',
        expand : true,
      },
      {
        cwd : 'build/images',
        src : '**/*',
        dest : 'public/images',
        expand : true
      },
      {
        cwd : 'build/vendor',
        src : [ '**/*.js', '**/*.js.map' ],
        dest : 'public/vendor/js',
        expand : true,
      },
      {
        cwd : 'build/js',
        src : [ '**/*.js', '**/*.js.map' ],
        dest : 'public/js',
        expand : true,
      }],
      updateAndDelete : true
    },
    images : {
      files : [ {
        cwd : 'src/images',
        src : '**/*',
        dest : 'build/images',
        expand : true,
      } ]
    },
    data : {
      files : [ {
        cwd : 'src/data',
        src : '**/*',
        dest : 'public/data',
        expand : true,
      } ],
      updateAndDelete : true
    },
    source : {
      files : [ {
        cwd : 'src/sass',
        src : '**/*',
        dest : 'build/sass',
        expand : true
      },
      {
        cwd : 'src/images',
        src : '**/*',
        dest : 'build/images',
        expand : true
      },
      {
        cwd : 'src/js',
        src : '**/*',
        dest : 'build/js',
        expand : true,
      }],
      verbose : true,
      updateAndDelete : true
    }
  });

  grunt.loadNpmTasks('grunt-sync');
};
