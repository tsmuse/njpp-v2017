/*
 * Generated on 2017-04-30
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2017 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      sass:{
        files: ['<%= config.src %>/assets/sass/*.scss'],
        tasks: ['sass:dev']
      },
      autoprefixer: {
        files: ['<%= config.src %>/assets/to-prefix/*.css'],
        tasks: ['autoprefixer']
      },
      copy_images: {
        files: ['<%= config.src %>/assets/img/*.{png,jpg,svg}'],
        tasks: ['copy:images']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}/*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    copy: {
      normalizecss: {
        nonull: true,
        expand: true,
        flatten: true,
        filter: 'isFile',
        cwd: './node_modules/normalize.css/',
        src: '*.css',
        dest: '<%= config.dist %>/assets/css/'
      },
      images: {
        nonull: true,
        expand: true,
        filter: 'isFile',
        cwd: '<%= config.src %>/assets/img/',
        src: '*.{png,jpg,svg}',
        dest: '<%= config.dist %>/assets/img'
      }
    },
    // Now spits out it's files into src/assets/to-prefix
    // for autoprefixer to pick up and move to dist.
    // It's the only way to autoprefix while the server
    // is watching the dist/assets/css folder
    // this temp version can't be removed by clean before
    // assemble runs because it breaks watch if the folder doesn't exist.
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/sass',
          src: ['*.scss'],
          dest: '<%= config.src %>/assets/to-prefix',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/sass',
          src: ['*.scss'],
          dest: '<%= config.src %>/assets/to-prefix/',
          ext: '.css'
        }]
      }
    },
    // This has to pull the CSS from the src folder
    // otherwise it will loop endlessly while the server
    // is running
    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        map: true
      },
      //uggg I hate naming properties
      prod_css: {
        expand: true,
        flatten: true,
        cwd: '<%= config.src %>/assets/to-prefix/',
        src: ['*.css'],
        dest: '<%= config.dist %>/assets/css/'
      }
    },

    clean: ['<%= config.dist %>/**/*.{html,xml,css,map}']
  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass:dist',
    'autoprefixer',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
