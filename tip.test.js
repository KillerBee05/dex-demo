const assert = require('assert');
const { tip } = require('./tip');

assert.deepStrictEqual(tip(100, 20), { tip: 20, total: 120 });
assert.deepStrictEqual(tip(48.5, 18), { tip: 8.73, total: 57.23 });
console.log('ok');
