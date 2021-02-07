'use strict';

var React = require("react");

function Name(Props) {
  var name = Props.name;
  return React.createElement("h1", {
              style: {
                borderBottomStyle: "solid",
                textAlign: "center",
                flex: "1",
                flexDirection: "column"
              }
            }, "Name :" + name);
}

var make = Name;

var $$default = Name;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
