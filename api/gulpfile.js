const spawn = require("child_process").spawn;

const del = require("del");
const gulp = require("gulp");
const batch = require("gulp-batch")
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");

let node;

gulp.task("server", function () {
  if (node) node.kill();

  console.log("Launching server");
  node = spawn("node", ["--harmony", "--inspect=0.0.0.0:9229", "../dist/api/src"], {stdio: "inherit"})
  node.on("close", function (code) {
    if (code === 8) {
      console.log("Error detected, waiting for changes...");
    }
  });

});

gulp.task("default", ["server"], function () {
  watch('../dist/**/*.js', batch(function (events, done) {
    gulp.start('server', done);
  }));
});

process.on("exit", function () {
  if (node) node.kill()
});
