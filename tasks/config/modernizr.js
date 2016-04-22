module.exports = function(grunt) {

  grunt.config.set('modernizr', {
    dist: {
      // Avoid unnecessary builds (see Caching section below)
      "cache" : true,
      // Path to the build you're using for development.
      //"devFile" : false,
      // Path to save out the built file
      "dest" : "src/js/theme/modernizr-custom.js",
      "options": [
        "setClasses"
      ],
      "uglify": true,
      "parseFiles": true,
      "outputFile": "src/js/theme/modernizr-output.js",
      // By default, will crawl your project for references to Modernizr tests
      // Set to false to disable
      "crawl" : true,
      "files" : {
        "src": [
          "src/sass/**/*.{css,scss}",
        ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-modernizr');
};
