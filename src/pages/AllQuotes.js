import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: "q1", author: "Sepanta", text: "Watching Anime is Cool" },
  { id: "q2", author: "Amin", text: "Watching Anime is Terrible :D" },
];

const AllQuote = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuote;
