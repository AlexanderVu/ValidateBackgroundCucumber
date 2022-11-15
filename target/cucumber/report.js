$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SkyBlueBG.feature");
formatter.feature({
  "line": 2,
  "name": "Change background color functionality validation",
  "description": "",
  "id": "change-background-color-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Backgroundtest"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sky Blue Background",
  "description": "",
  "id": "change-background-color-functionality-validation;sky-blue-background",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "\"\u003ccolor1\u003e\" button exist",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"\u003cbgColor\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "change-background-color-functionality-validation;sky-blue-background;",
  "rows": [
    {
      "cells": [
        "color1",
        "button",
        "bgColor"
      ],
      "line": 10,
      "id": "change-background-color-functionality-validation;sky-blue-background;;1"
    },
    {
      "cells": [
        "skyblue",
        "skyblue",
        "skyblue"
      ],
      "line": 11,
      "id": "change-background-color-functionality-validation;sky-blue-background;;2"
    },
    {
      "cells": [
        "white",
        "white",
        "white"
      ],
      "line": 12,
      "id": "change-background-color-functionality-validation;sky-blue-background;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3615361900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Sky Blue Background",
  "description": "",
  "id": "change-background-color-functionality-validation;sky-blue-background;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Backgroundtest"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "\"skyblue\" button exist",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"skyblue\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"skyblue\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "skyblue",
      "offset": 1
    }
  ],
  "location": "BackgroundStepsDefinition.button_exist(String)"
});
formatter.result({
  "duration": 759553700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skyblue",
      "offset": 16
    }
  ],
  "location": "BackgroundStepsDefinition.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 81106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skyblue",
      "offset": 37
    }
  ],
  "location": "BackgroundStepsDefinition.the_background_color_will_change_to_sky_blue(String)"
});
formatter.result({
  "duration": 58329900,
  "status": "passed"
});
formatter.after({
  "duration": 739109600,
  "status": "passed"
});
formatter.before({
  "duration": 1565057900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sky Blue Background",
  "description": "",
  "id": "change-background-color-functionality-validation;sky-blue-background;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Backgroundtest"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "\"white\" button exist",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"white\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"white\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 1
    }
  ],
  "location": "BackgroundStepsDefinition.button_exist(String)"
});
formatter.result({
  "duration": 539803700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 16
    }
  ],
  "location": "BackgroundStepsDefinition.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 124379800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 37
    }
  ],
  "location": "BackgroundStepsDefinition.the_background_color_will_change_to_sky_blue(String)"
});
formatter.result({
  "duration": 86095400,
  "status": "passed"
});
formatter.after({
  "duration": 798143900,
  "status": "passed"
});
});