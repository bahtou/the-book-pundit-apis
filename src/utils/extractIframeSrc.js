const htmlparser = require('htmlparser2');


async function extractIframeSrc(data) {
  return new Promise((resolve, reject) => {
    const parser = new htmlparser.Parser({
      onopentag(name, attribs) {
        if (name === 'iframe') {
          resolve(attribs.src);
        }
      }
    }, {decodeEntities: true});
    parser.write(data);
    parser.end();
  });
}


module.exports = extractIframeSrc;
