module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
    'sync:source',
		'compileScripts',
    'processImages',
    'compileStyles',
		'sync:vendor',
		'sync:build',
		'sync:data'
	]);
};
