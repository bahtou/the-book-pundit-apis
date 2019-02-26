const endpoints = {

  GET_BOOK_REVIEWS: require('./getBookReviews'),
  GET_FULL_REVIEW: require('./getFullReview'),
  GET_IFRAME_SRC_REVIEWS: require('./getIframeSrcReviews'),
  SEARCH_BOOKS: require('./searchBooks')

};


module.exports = (name, params) => endpoints[name](params);
