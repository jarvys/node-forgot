# node-forgot

> Forgot exceptions the function throws, just go on:)

## Install

```Bash
$ npm install forgot
```

## Usage

```javascript
var forgot = require('forgot');

console.log('Begin');
forgot(function() {
	throw new Error('Bomn!');
});
console.log('Finish');
```

