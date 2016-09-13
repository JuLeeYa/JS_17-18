module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  
    
    concat: {
  options: {
      separator: ';',
    },
    js: {
	    src: 'src/js/*.js',
	    dest: 'dest/js/script.main.js'
	  },
  css: {
    src: 'src/css/*.css',
    dest: 'dest/css/styles.css'
  }
},
 uglify: {
    my_target: {
      files: {
        'dest/js/script.min.js': ['dest/js/script.main.js']
      }
    }
  },
 cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'dest/css/style.min.css': ['dest/css/styles.css']
    }
  }
} 

});
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};


