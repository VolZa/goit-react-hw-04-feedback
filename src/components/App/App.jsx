import { useState } from "react";
import { Title } from "components/Title/Title";
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { Feedbacks } from "components/Feedbacks/Feedbacks";

export const App = () => {
  // const [good, setGood] = useState([]);
  const [good, setGood] = useState([0]);
  const [neutral, setNeutral] = useState([0]);
  const [bad, setBad] = useState([0]);
  
  const addFeedback = (feedback) => {
    switch(feedback) {
      case 'good':
        setGood(prevState => Number(prevState) + 1);
        break;
      case 'neutral':
        setNeutral(prevState => Number(prevState) + 1);
        break;
      case 'bad':
        setBad(prevState => Number(prevState) + 1);
        break;
      default:
        break;
    }
  }
  countTotalFeedback = () => { 
    return good + neutral + bad;
  };

  const totalFeedbackCount  =this.countTotalFeedback();
  return (
    <Container>
      <GlobalStyle />

      <Title title="Please Leave feedback"/>
      <Feedbacks  options={[good, neutral, bad]}
                  onLeavefeedback={addFeedback}  
      />
      <Title title="Statistics" /> 
      {(totalFeedbackCount) === 0
        ? <p>No feedback given</p>
        : <StatisticsFeedback statistic={[good, neutral, bad]}
          total={totalFeedbackCount}
        > </StatisticsFeedback>}   
    </Container>
  );
};
