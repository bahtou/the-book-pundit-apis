const htmlparser = require('htmlparser2');


async function extractReviewHREFs(data) {
  const hrefs = [];

  return new Promise((resolve, reject) => {
    const parser = new htmlparser.Parser({
      onopentag(name, attribs) {
        if (attribs.class === 'gr_more_link') {
          hrefs.push(attribs.href);
        }
      },
      onend() {
        resolve(hrefs);
      }
    }, {decodeEntities: true});
    parser.write(data);
    parser.end();
  });
}


module.exports = extractReviewHREFs;
