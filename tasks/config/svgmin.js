// https://github.com/sindresorhus/grunt-svgmin

module.exports = function(grunt) {

  grunt.config.set('svgmin', {
    options: {
      plugins: [
        { removeViewBox: true }, // remove the viewbox atribute from the SVG
        { removeUselessStrokeAndFill: true }, // remove Useless Strokes and Fills
        { removeEmptyAttrs: true }, // remove Empty Attributes from the SVG
      ]
    },
    dist: {
      expand: true,
      cwd: 'src/images/bg',
      src: ['*.svg'],
      dest: 'build/images/bg',
      ext: '.svg'
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');
};
