'use strict';

var React = require("react");
var Box$Test = require("./Box.bs.js");
var Name$Test = require("./Name.bs.js");

function App(Props) {
  return React.createElement("div", {
              className: "App",
              style: {
                textAlign: "center"
              }
            }, React.createElement(React.StrictMode, {
                  children: React.createElement(Name$Test.make, {
                        name: "Phakkhamat"
                      })
                }), React.createElement("div", {
                  className: "line"
                }, React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    }), React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    }), React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    })), React.createElement("div", undefined, React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    }), React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    }), React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    })), React.createElement("div", undefined, React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    }), React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    }), React.createElement(React.StrictMode, {
                      children: React.createElement(Box$Test.make, {})
                    })));
}

var make = App;

exports.make = make;
/* react Not a pure module */
