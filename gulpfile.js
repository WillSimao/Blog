const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const unglify = require('gulp-uglify');
const connect = require('gulp-connect');

const paths = {
    html: {
        all: 'src/templates/**/*.html'
    },

    styles: {
        all: 'src/styles/**/*.scss',
        main: 'src/styles/main.scss'
    },

    scripts: {
        all: 'src/scripts/**/*.js',
        main: 'src/scripts/app.js'
    },

    img: {
        all: 'src/assets/img/**',
        dest: 'dist/img'
    },

    output: 'dist'

}

function server () {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 3000,
    });
}


function sentinel() {
    watch(paths.html.all, {ignoreInitial: false}, html);
    watch(paths.img.all, {ignoreInitial: false}, img);
    watch(paths.styles.all, {ignoreInitial: false}, styles);
    watch(paths.scripts.all, {ignoreInitial: false}, scripts);
}

function html () {
    return src(paths.html.all).pipe(dest(paths.output));
}

function img() {
    return src(paths.img.all)
        .pipe(dest(paths.img.dest));
}


function styles() {
    return src(paths.styles.main).pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(dest(paths.output)).pipe(connect.reload());
}

function scripts () {
    return browserify(paths.scripts.main).transform(babelify.configure({presets: ["@babel/preset-env"]})).bundle().pipe(source('bundle.js')).pipe(buffer()).pipe(unglify()).pipe(dest(paths.output)).pipe(connect.reload());
}



exports.default = parallel(server, sentinel);

