# @meanie/angular-focus

[![npm version](https://img.shields.io/npm/v/@meanie/angular-focus.svg)](https://www.npmjs.com/package/@meanie/angular-focus)
[![node dependencies](https://david-dm.org/meanie/angular-focus.svg)](https://david-dm.org/meanie/angular-focus)
[![github issues](https://img.shields.io/github/issues/meanie/angular-focus.svg)](https://github.com/meanie/angular-focus/issues)
[![codacy](https://img.shields.io/codacy/da49d6526e424c3394826592b19d86e3.svg)](https://www.codacy.com/app/meanie/angular-focus)


An Angular service to set focus on specific DOM elements

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`:

```shell
#yarn
yarn add @meanie/angular-focus

#npm
npm install @meanie/angular-focus --save
```

Include the script `node_modules/@meanie/angular-focus/release/angular-focus.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/@meanie/angular-focus/release/angular-focus.js"></script>
```

Add `Focus.Service` as a dependency for your app.

## Usage
```js
angular.module('App.MyModule', [
  'Focus.Service'
]).controller('MyController', function($focus) {

  //Focus on element ID
  $focus('some-element-id');

  //Or focus on given DOM or jQuery/jQlite element
  $focus(someElement);

  //Focus after 250ms
  $focus(someElement, 250);

  //Focus and ensure element is selectable (e.g. for divs)
  $focus(someElement, 0, true);

  //Focus and select text of input field
  $focus(someElement, true); //OR
  $focus(someElement, 0, false, true);
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [@meanie/angular-focus issue tracker](https://github.com/meanie/angular-focus/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Credits

* Meanie logo designed by [Quan-Lin Sim](mailto:quan.lin.sim+meanie@gmail.com)

## License

(MIT License)

Copyright 2015-2017, [Adam Reis](https://adam.reis.nz)
