'use strict';

var React = require("react");
var RandomColorRe = require("bs-randomcolor/src/RandomColorRe.bs.js");

function Box(Props) {
  var color = RandomColorRe.randomColor(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  return React.createElement("h2", {
              style: {
                backgroundColor: color,
                display: "inline-flex",
                height: "50px",
                margin: "10px",
                width: "50px"
              }
            });
}

var make = Box;

var $$default = Box;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
