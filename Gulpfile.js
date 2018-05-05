'use strict'

const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
// const bourbon = require('node-bourbon')
// const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const gutil = require('gulp-util')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
let wpConf = require('./webpack.config.js')

var scriptsWatch = 'assets/scripts/**/*.js, assets/scripts/**/*.jsx'
var styles = [
  'assets/styles/application.scss'
]
var stylesWatch = 'assets/styles/**/*'

gulp.task('default', [
  'scripts',
  'styles'
], function () {
  return true
})

gulp.task('dev', [
  'scripts-dev-server',
  'scripts-watch',
  'styles',
  'styles-watch'
], function () {
  return true
})

gulp.task('scripts-dev-server', ['clean-scripts'], function (cb) {
  wpConf.devtool = 'source-map'
  wpConf.mode = 'development'

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(wpConf), {
    publicPath: wpConf.output.publicPath,
    contentBase: path.join(__dirname, '.tmp'),
    inline: true,
    hot: true,
    port: 8001,
    stats: {
      colors: true
    }
  }).listen(8001, '0.0.0.0', function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)
  })

  cb()
})

gulp.task('scripts', ['clean-scripts'], function (cb) {
  wpConf.mode = 'production'
  webpack(wpConf, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString({
    }))
    cb()
  })
})

gulp.task('scripts-watch', function () {
  gulp.watch(scriptsWatch, ['scripts'])
})

gulp.task('styles', ['clean-styles'], function () {
  if (typeof sass !== 'undefined') {
    gulp.src(styles)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('.tmp/styles'))
  }
})

gulp.task('styles-watch', function () {
  gulp.watch(stylesWatch, ['styles'])
})

gulp.task('clean', ['clean-scripts', 'clean-styles'], function (cb) {
  cb()
})

gulp.task('clean-scripts', [], function (cb) {
  del(['.tmp/scripts/**/*'])
    .then(function () { cb() })
    .catch(cb)
})

gulp.task('clean-styles', [], function (cb) {
  del(['.tmp/styles/**/*'])
    .then(function () { cb() })
    .catch(cb)
})
