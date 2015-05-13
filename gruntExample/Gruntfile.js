module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ["nodemon", "watch"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: "index.js"
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: "src/css/**/*.css",
        tasks: ["autoprefixer"]
      },
      html: {
        files: "./**/*.html",
        tasks: []
      }
    },
    autoprefixer: {
      dev: {
        expand: true,
        flatten: true,
        src: "src/css/**/*.css",
        dest: "build/css/"
      }
    }
  });

  grunt.registerTask("default", ["autoprefixer", "concurrent"]);
}
