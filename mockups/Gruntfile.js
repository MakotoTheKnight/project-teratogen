module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    distdir: 'dist',
    src: {
      less: ['src/less/styles.less']
    },
    clean: ['dist'],
    copy: {
      dev: {
        files: [
          { src: ['src/index.html'], dest: '<%= distdir %>/index.html' },
          { src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'], dest: '<%= distdir %>/js/bootstrap.min.js' },
          { src: ['bower_components/jquery/dist/jquery.min.map'], dest: '<%= distdir %>/js/jquery.min.map' },
          { src: ['bower_components/jquery/dist/jquery.min.js'], dest: '<%= distdir %>/js/jquery.min.js' },
          { expand: true, cwd: 'src/js/', src: ['*.js'], dest: '<%= distdir %>/js/', filter: 'isFile' },
          { expand: true, cwd: 'bower_components/bootstrap/fonts', src: ['*'], dest: '<%= distdir %>/fonts/', filter: 'isFile' }
        ]
      }
    },
    less: {
      dev: {
        options: {
          compile: true
        },
        files: {
          '<%= distdir %>/css/styles.css': ['<%= src.less %>']
        }
      }
    },
    watch: {
      files: 'src/**/*',
      tasks: ['clean', 'less', 'copy'],
      options: {
        debounceDelay: 500
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'less', 'copy']);
};
