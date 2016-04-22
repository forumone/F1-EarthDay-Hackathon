module.exports = function(grunt) {

  grunt.config.merge({
    sass_globbing : {
      gesso : {
        files : {
          '<%= pkg.themePath %>/sass/partials/sass-globbing/_variables.scss' : '<%= pkg.themePath %>/sass/partials/global/variables/**/*.scss',
          '<%= pkg.themePath %>/sass/partials/sass-globbing/_helpers.scss' : '<%= pkg.themePath %>/sass/partials/global/helpers/**/*.scss',
          '<%= pkg.themePath %>/sass/partials/sass-globbing/_extendables.scss' : '<%= pkg.themePath %>/sass/partials/global/extendables/**/*.scss',
          '<%= pkg.themePath %>/sass/partials/sass-globbing/_helper-classes.scss' : '<%= pkg.themePath %>/sass/partials/helper-classes/**/*.scss',
          '<%= pkg.themePath %>/sass/partials/sass-globbing/_layout.scss' : '<%= pkg.themePath %>/sass/partials/layout/**/*.scss',
          '<%= pkg.themePath %>/sass/partials/sass-globbing/_components.scss' : '<%= pkg.themePath %>/sass/partials/components/**/*.scss',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass-globbing');
}
