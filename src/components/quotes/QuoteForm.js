import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntered, setIsEntered] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const authorIsValid = enteredAuthor.length !== 0;
    const inpTextIsValid = enteredText.length !== 0;
    let formIsValid = false;

    if (authorIsValid && inpTextIsValid) {
      formIsValid = true;
    }

    if (formIsValid) {
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
  }

  const formFocusHandler = () => {
    setIsEntered(true);
  };

  const finishedFocus = () => {
    setIsEntered(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntered}
        message={() => "Are you Sure ? All data Will Be Lost"}
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishedFocus}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
