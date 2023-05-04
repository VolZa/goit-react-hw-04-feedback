import { useState } from "react";
import { Title } from "components/Title/Title";
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { Feedbacks } from "components/Feedbacks/Feedbacks";
import { StatisticsFeedback } from "components/Statistics/Statistics";

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

  const stat = [good, neutral, bad];
  //Краще:  total = good+neutral+bad,  але для пам'яті через .reduce
  const total = stat.reduce((sum, item) => {
    return sum + Number(item);
    }, 0);

  return (
    <Container>
      <GlobalStyle />

      <Title title="Please Leave feedback"/>
      <Feedbacks  options={[good, neutral, bad]}
                  onLeavefeedback={addFeedback}  
      />
      <Title title="Statistics" /> 
      {(total) === 0
        ? <p>No feedback given</p>
        : <StatisticsFeedback statistic={[stat, total]}> 
          </StatisticsFeedback>}   
    </Container>
  );
};
