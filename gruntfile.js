module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'style.css': 'style.scss'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	}

  	watch: {
	    scripts: {
	        files: ['scss/*.scss'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    }
	}

  });
  // Load the plugins tasks
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ["sass", "imagemin","watch"]);
};