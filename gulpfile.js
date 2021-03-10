const {src, dest, watch} = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("gulp-cssnano");

function style() {
    return src("./scss/**/{*.scss,_*.scss}")
       .pipe(sass().on('error', sass.logError))
       .pipe(postcss([autoprefixer()]))
       .pipe(cssnano())
       .pipe(dest("./css"));
}

exports.default = function() {
    watch("./scss/**/{*.scss,_*.scss}", style);
}