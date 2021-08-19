import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sepanta", text: "Watching Anime is Cool" },
  { id: "q2", author: "Amin", text: "Watching Anime is Terrible :D" },
];
const QuoteDetail = (props) => {
  const params = useParams();
  console.log(params);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

if(!quote){
    return <p>Data Not Found!</p>
}

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
    <Route path={`/quotes/${params.quoteId}`} exact>
    <div className="centered">
      <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
      Load Comments
      </Link>
     </div>
    </Route>
     
      <Route path={`/quotes/${params.quoteId}/comments`} >
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
