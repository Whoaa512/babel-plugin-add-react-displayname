const pluginTester = require('babel-plugin-tester')
const babel = require('@babel/core')
const fs = require('fs')
const path = require('path')

const plugin = require('../../babel-plugin-add-react-displayname')
const pluginPath = path.join(__dirname, '../../babel-plugin-add-react-displayname')


const fixturesDir = path.join(__dirname, 'fixtures')

pluginTester({
  plugin,
  pluginName: 'add-react-displayname',
  pluginOptions: {'knownComponents': ['Component5a', 'Component5b', 'Component5c']},
  snapshot: true,
  babelOptions: {
    presets: ['@babel/preset-react', '@babel/preset-stage-0'],
    babelrc: false,
  },
  tests: {
    arrowFun: {
      fixture: path.join(fixturesDir, 'arrowFun', 'code.js'),
    },
    classComponents: {
      fixture: path.join(fixturesDir, 'classComponents', 'code.js'),
    },
    createClass: {
      fixture: path.join(fixturesDir, 'createClass', 'code.js'),
    },
    decorators: {
      babelOptions: {
        plugins: [
          '@babel/plugin-proposal-decorators',
        ],
      },
      fixture: path.join(fixturesDir, 'decorators', 'code.js'),
    },
    emptyReturn: {
      fixture: path.join(fixturesDir, 'emptyReturn', 'code.js'),
    },
    exportDefaultAnon: {
      fixture: path.join(fixturesDir, 'exportDefaultAnon', 'code.js'),
    },
    functionExpr: {
      fixture: path.join(fixturesDir, 'functionExpr', 'code.js'),
    },
    knownComponents: {
      fixture: path.join(fixturesDir, 'knownComponents', 'code.js'),
    },
    passThrough: {
      fixture: path.join(fixturesDir, 'passThrough', 'code.js'),
    },
  },
})
