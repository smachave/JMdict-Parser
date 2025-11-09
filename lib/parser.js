"use strict";

var fs = require('fs');
var xml2js = require('xml2js');
var escape = require('xml-escape');
var program = require('commander');
var _console = console,
  log = _console.log;
var XML_IGNORE = '<>"';
program.arguments('<file>').action(function (file) {
  var xmlParser = new xml2js.Parser();
  function setupDict() {
    return new Promise(function (resolve, reject) {
      fs.readFile(file, function (err, rawData) {
        if (err) {
          log(err);
          process.exit(1);
        }
        var data = escape(rawData.toString(), XML_IGNORE);
        xmlParser.parseString(data, function (parseError, obj) {
          if (parseError) reject(parseError);else resolve(obj.JMdict.entry);
        });
      });
    });
  }
  var outputFilename = "".concat(file, ".json");
  setupDict().then(function (dictionary) {
    fs.writeFileSync(outputFilename, JSON.stringify(dictionary), 'utf8');
  });
});
program.parse(process.argv);