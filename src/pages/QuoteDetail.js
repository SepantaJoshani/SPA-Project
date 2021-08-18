import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dave", text: "React Router " },
  { id: "q2", author: "Alex", text: "React Redux " },
];

const QuoteDetail = (props) => {
  const params = useParams();
  const match=useRouteMatch()
  

  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);
  if (!quote) {
    return <p>Couldn t find the page </p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact >
      <div className='centered'>
        <Link className="btn--flat" to={`${match.url}/comments`}>Comments </Link>
      </div>
      </Route>
      
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
