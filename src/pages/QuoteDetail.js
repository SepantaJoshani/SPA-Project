import { Fragment } from "react";
import { useParams } from "react-router-dom"

const QuoteDetail = props =>{
    const params = useParams()
    console.log(params);
return <Fragment>
    <h1>QuoteDetail</h1>
    <p>{params.quoteId}</p>
</Fragment>
}

export default QuoteDetail