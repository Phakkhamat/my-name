'use strict';

var React = require("react");
var App$Test = require("./App.bs.js");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$Test.make, {}), "root");

/*  Not a pure module */
