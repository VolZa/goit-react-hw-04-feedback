import { PropTypes } from "prop-types";

import { Feedback } from "./Feedbacks.styled";


export const Feedbacks = ({onLeavefeedback}) => {
   return (
    <Feedback>
       <button onClick={() => { onLeavefeedback("good") }}>Good</button>
       <button onClick={() => { onLeavefeedback("neutral") }}>Neutral</button>
       <button onClick={() => { onLeavefeedback("bad") }}>Bad</button>
    </Feedback>
    );
    
}

// options={[good, neutral, bad]}
// onLeavefeedback={addFeedback}

Feedbacks.propTypes = {
   onLeavefeedback:  PropTypes.func.isRequired,
   options: PropTypes.array.isRequired,
 };