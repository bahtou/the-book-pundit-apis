const xmlParser = _require('utils/xmlParser');


async function parseBookIds(ctx, next) {
  const { reqId, state } = ctx;
  const { searchResults } = state;
  let parsedResults = {};
  let books = [];
  let bookReturns = [];

  logger.info({ reqId });

  parsedResults = await xmlParser(searchResults);

  if (!parsedResults.GoodreadsResponse.search.results.work) {
    logger.warn('--no books found', { reqId });
    ctx.state = { ...state, bookReturns: [] };
    return next();
  }

  books = parsedResults.GoodreadsResponse.search.results.work;

  const len = books.length;
  let i = 0;
  for (; i<len; i++) {
    const { original_publication_year, average_rating, text_reviews_count, best_book } = books[i];
    const { id, title, author, image_url } = best_book;

    bookReturns.push({
      publicationYear: original_publication_year,
      rating: average_rating,
      book_id: id,
      title,
      author,
      imageURL: image_url,
      numOfReviews: text_reviews_count
    });
  }

  logger.info({ reqId, bookReturnsLEN: bookReturns.length });
  ctx.state = { ...state, bookReturns };

  return next();
}

module.exports = parseBookIds;
