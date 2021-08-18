import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dave", text: "React Router " },
  { id: "q2", author: "Alex", text: "React Redux " },
];

const QuoteDetail = (props) => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);
  if (!quote) {
    return <p>Couldnt find the page </p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact >
      <div className='centered'>
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Comments </Link>
      </div>
      </Route>
      
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
