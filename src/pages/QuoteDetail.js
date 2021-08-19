import { Fragment } from "react";
import { Route, useParams } from "react-router-dom"
import Comments from '../components/comments/Comments'

const QuoteDetail = props =>{
    const params = useParams()
    console.log(params);
return <Fragment>
    <h1>QuoteDetail</h1>
    <p>{params.quoteId}</p>
    <Route path={`/quotes/${params.quoteId}/comments`}>
    <Comments />
    </Route>
</Fragment>
}

export default QuoteDetail