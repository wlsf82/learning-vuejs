# Learning Vue.js

Sample Vue.js project based on the course [Learn Vue.js](https://www.codecademy.com/learn/learn-vue-js), from codecademy PRO.

## Percentage of completion

50%

## Takeaways

Bellow is a summary of some of the awesome things Vue can do:

* Make front-end code quicker to write — loading Vue in one line, mustache templates, built-in [**directives**](https://vuejs.org/v2/api/#Directives), and re-usable **components** make Vue easy to read and write
* Make front-end code easier to modify and fix — using readable mustache templates, using built-in heavily-tested [**directives**](https://vuejs.org/v2/api/#Directives), and consolidating repetitive code into components make Vue code less error-prone and easier to fix when errors do occur
* Make front-end apps fast and responsive — Vue’s use of a **Virtual DOM** makes site updates happen only when they need to and incredibly fast when they do

## Vue app options object properties

Here’s a brief recap of the [Vue app options object properties](https://vuejs.org/v2/api/#Options-Data) we covered and the use cases for each.

* data - used for storing known dynamic values
* computed - used for computing dynamic values based on known dynamic values — can additionally specify a setter by specifying get and set functions — the setter will update other dynamic values when the computed value changes
* watch - used for performing functionality when a specified dynamic value changes
* methods - used for storing instance methods to be used throughout the app