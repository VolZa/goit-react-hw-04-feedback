import { StatisticS, Statistic } from "./Statistics.styled";

export const StatisticsFeedback = ({ statistic }) => {
console.log(statistic[0], statistic[1]);
   const stat=statistic[0];
   const good = stat[0];
   const neutral = stat[1];
   const bad = stat[2];
   const total = statistic[1];
   const positivePercentage = Math.round((good / total) * 100);

   
   return (
      <StatisticS>
         <Statistic>Good: {good}</Statistic>
         <Statistic>Neutral: {neutral}</Statistic>
         <Statistic>Bad: {bad}</Statistic>
         <Statistic>Total: {total}</Statistic>
         <Statistic>Positive feedback: {positivePercentage}%</Statistic>
      </StatisticS>  
   );
}
