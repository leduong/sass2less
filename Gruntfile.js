module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    scss2less: {
      convert: {
        options: {
          paths: ["./"]
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: '**/*.scss',
          dest: 'less',
          ext: '.less',
          rename: function(dest, src) {
            return dest + '/' + src.replace('_', ''); }
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-scss2less');

  // Default task(s).
  grunt.registerTask('default', ['scss2less:convert']);

};
