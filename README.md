# angular-focus

[![npm version](https://img.shields.io/npm/v/meanie-angular-focus.svg)](https://www.npmjs.com/package/meanie-angular-focus)
[![node dependencies](https://david-dm.org/meanie/angular-focus.svg)](https://david-dm.org/meanie/angular-focus)
[![github issues](https://img.shields.io/github/issues/meanie/angular-focus.svg)](https://github.com/meanie/angular-focus/issues)
[![codacy](https://img.shields.io/codacy/abcdefgh.svg)](https://www.codacy.com/app/meanie/angular-focus)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An Angular service to set focus on specific DOM elements for [Meanie](https://github.com/meanie/meanie) projects.

## Installation

Install using the [Meanie CLI](https://www.npmjs.com/package/meanie):
```shell
meanie install fontello
```

-- OR --

## Installation

You can install this package using `meanie`, `npm` or `bower`.

### meanie

```shell
meanie install angular-focus
```

Then add `Focus.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Focus.Service']);
```

### npm

```shell
npm install meanie-angular-focus
```

Then add as a dependency for your app:

```js
angular.module('App.MyModule', [require('meanie-angular-focus')]);
```

### bower

```shell
bower install meanie-angular-focus
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/meanie-angular-focus/release/meanie-angular-focus.js"></script>
```

Then add `Focus.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Focus.Service']);
```

## Usage
```js
angular.module('App.MyModule').controller('MyController', function($focus) {

  //Focus on element ID
  $focus('some-element-id');

  //Or focus on given DOM element
  $focus(someElement);
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-focus issue tracker](https://github.com/meanie/angular-focus/issues).

## Contributing

Pull requests are welcome! Please create them against the [dev branch](https://github.com/meanie/angular-focus/tree/dev) of the repository.

If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2016, [Adam Buczynski](http://adambuczynski.com)
