var assert = require('assert');
var forgot = require('./index');

describe('forgot', function() {
	it('should return what the function returns', function() {
		assert.equal(forgot(function() {
			return 1;
		}), 1);
	});

	it('should forget what the function throws', function() {
		assert.equal(forgot(function() {
			throw new Error('Crash!');
		}), undefined);
	});
});
