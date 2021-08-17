
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: "q1", author: "Dave", text: "React Router " },
  { id: "q2", author: "Alex", text: "React Redux " },
];

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
