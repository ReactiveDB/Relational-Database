const test = require('ava')
const { version } = require('../lib')

test('version should equal to package.json', t => {
  t.deepEqual(version, require('../package.json').version)
})
