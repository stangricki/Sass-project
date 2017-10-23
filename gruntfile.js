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
  	},

  	watch: {
	    scripts: {
	        files: ['style.scss'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    }
	},
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'app/css/*.css',
                    'app/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './app'
            }
        }
    }

  });
  // Load the plugins tasks
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ["sass", "imagemin", "browserSync","watch"]);
};