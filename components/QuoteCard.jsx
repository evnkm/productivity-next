const QuoteCard = ({ quote }) => {
  return (
    <div className="quote_card mx-4">
      <p className="quote_text">{quote.text}</p>
      <p className="quote_author">- {quote.author}</p>
    </div>
  );
};

export default QuoteCard;
