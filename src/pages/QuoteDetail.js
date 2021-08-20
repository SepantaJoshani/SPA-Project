import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sepanta", text: "Watching Anime is Cool" },
  { id: "q2", author: "Amin", text: "Watching Anime is Terrible :D" },
];
const QuoteDetail = (props) => {
  const match=useRouteMatch()
  const params = useParams();
  console.log(match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

if(!quote){
    return <p>Data Not Found!</p>
}

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
    <Route path={match.path} exact>
    <div className="centered">
      <Link to={`${match.url}/comments`} className="btn--flat">
      Load Comments
      </Link>
     </div>
    </Route>
     
      <Route path={`${match.path}/comments`} >
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
