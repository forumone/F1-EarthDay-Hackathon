module.exports = function (grunt) {
	grunt.registerTask('processImages', [
    // 'newer:svg2png:dist', // Can't get this to work yet :(
    'svg2png',
    'newer:svgmin:dist',
    'newer:imageoptim:dist',
	]);

  grunt.loadNpmTasks('grunt-newer');
};
