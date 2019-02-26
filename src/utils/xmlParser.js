const parser = require('fast-xml-parser');

// var defaultOptions = {
//   attributeNamePrefix : "@_",
//   attrNodeName: "@", //default is false
//   textNodeName : "#text",
//   ignoreAttributes : true,
//   cdataTagName: "CDATA", //default is false
//   cdataPositionChar: "\\c",
//   format: false,
//   indentBy: "  ",
//   supressEmptyNode: false,
//   tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),// default is a=>a
//   attrValueProcessor: a=> he.encode(a, {isAttributeValue: isAttribute, useNamedReferences: true})// default is a=>a
// };

async function xmlParser(data) {
  return new Promise((resolve, reject) => {
    const _parsed = parser.parse(data);
    resolve(_parsed);
  });
}


module.exports = xmlParser;
