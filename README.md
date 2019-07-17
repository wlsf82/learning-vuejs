# Learning Vue.js

Sample Vue.js project based on the course [Learn Vue.js](https://www.codecademy.com/learn/learn-vue-js), from codecademy PRO.

## Percentage of completion

75%

## Takeaways

Bellow is a summary of some of the awesome things Vue can do:

* Make front-end code quicker to write — loading Vue in one line, mustache templates, built-in [**directives**](https://vuejs.org/v2/api/#Directives), and re-usable **components** make Vue easy to read and write
* Make front-end code easier to modify and fix — using readable mustache templates, using built-in heavily-tested [**directives**](https://vuejs.org/v2/api/#Directives), and consolidating repetitive code into components make Vue code less error-prone and easier to fix when errors do occur
* Make front-end apps fast and responsive — Vue’s use of a **Virtual DOM** makes site updates happen only when they need to and incredibly fast when they do

The app create during this part of the course is available through the following URL:

https://tweets-codecademy.s3.eu-central-1.amazonaws.com/index.html

## Vue app options object properties

Here’s a brief recap of the [Vue app options object properties](https://vuejs.org/v2/api/#Options-Data) we covered and the use cases for each.

* `data` - used for storing known dynamic values
* `computed` - used for computing dynamic values based on known dynamic values — can additionally specify a setter by specifying get and set functions — the setter will update other dynamic values when the computed value changes
* `watch` - used for performing functionality when a specified dynamic value changes
* `methods` - used for storing instance methods to be used throughout the app

## Vue forms

Here are some of the major takeaways from dealing with forms when using Vue.js:

* Form fields can be bound to Vue data using the `v-model` directive — how `v-model` is used depends on the type of field it is being added to
* Form event handlers can be added using `v-on:submit` and `v-on:reset`
* Modifiers can be used to add functionality to directives — most importantly preventing page reload on form submission using `v-on:submit.prevent` and cleaning up form field values using `.number` and `.trim`
* Form validation can be implemented by setting the value of the `disabled` attribute on a `<button>` to the value of a computed property using `v-bind`

The app create during this part of the course is available through the following URL:

https://ticket-box.s3.eu-central-1.amazonaws.com/index.html
