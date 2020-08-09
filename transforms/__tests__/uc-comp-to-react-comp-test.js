"use strict";


const defineTest = require("jscodeshift/dist/testUtils").defineTest;

[...Array(1).keys()].forEach((test) => {
  defineTest(
    __dirname,
    "uc-comp-to-react-comp",
    { flow: true },
    "uc-comp-to-react-comp/uc-comp-to-react-comp" + test
  );
});
