import {
  StatisticsList,
  StatisticLi,
  StatisticSpan,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StatisticsList>
      <StatisticLi>
        Good: <StatisticSpan>{good}</StatisticSpan>
      </StatisticLi>
      <StatisticLi>
        Neutral: <StatisticSpan>{neutral}</StatisticSpan>
      </StatisticLi>
      <StatisticLi>
        Bad: <StatisticSpan>{bad}</StatisticSpan>
      </StatisticLi>
      <StatisticLi>
        Total: <StatisticSpan>{total}</StatisticSpan>
      </StatisticLi>
      <StatisticLi>
        Positive feedback: <StatisticSpan>{positivePercentage}%</StatisticSpan>
      </StatisticLi>
    </StatisticsList>
  ) : (
    <Notification message="There is no feedback" />
  );
};
