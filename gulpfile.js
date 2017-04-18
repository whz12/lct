// 引入gulp 工具
var gulp  = require('gulp')

// 引入 gulp-webserver 模块
var webserver = require('gulp-webserver')

// 引入http代理模块
var proxy = require('http-proxy-middleware')

// 引入 gulp-webpack 模块 及 name模块，实现JS CommonJS 模块化开发
var webpack = require('gulp-webpack')
var named = require('vinyl-named')

// 引入 sass 模块， 进行CSS预处理和模块化
var sass = require('gulp-sass')

// 配置server
gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: '10.9.157.25',
      port: 7000,
      directoryListing: {
        enable: true,
        path: './'
      },
      livereload: true,
      middleware: [
        proxy('/api/', {
          // target: 'https://m.lagou.com', //https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
          target: 'http://mobileway.lecuntao.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }),
        proxy('/api2/', {
          target: 'http://localhost:9000',
          changeOrigin: true,
          pathRewrite: {
            '^/api2': ''
          }
        })
      ]
    }))
})

// 配置gulp-webpack
gulp.task('packjs', function () {
  gulp.src([
    './src/scripts/app.js',
    './src/scripts/app-mine.js',
    './src/scripts/login.js',
    './src/scripts/classify.js'
    ])
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports-loader'
            // exclude:
          },
          {
            test: /\.string$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./build/scripts/'))
})

// 配置 sass
gulp.task('scss', function () {
  gulp.src([
    './src/style/app.scss',
    './src/style/mine.scss',
    './src/style/login.scss',
    './src/style/classify.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/style/'))
})

//copy html
gulp.task('copy-html', function () {
  gulp.src('./*.html')
    .pipe(gulp.dest('./build/'))
})

// 配置监听
gulp.task('watch', function () {
  gulp.watch('./src/style/**/*.scss', ['scss'])
  gulp.watch('./src/scripts/**/*.js', ['packjs'])
  gulp.watch('./src/scripts/**/*.string', ['packjs'])
})

gulp.task('default', ['scss', 'packjs', 'watch', 'webserver'], function () {
  console.log('server is running at http://localhost:7000');
})
