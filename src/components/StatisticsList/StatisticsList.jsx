import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomColor';
import { StatList, StatItem, Label, Percentage } from './StatisticsList.styled';

export function StatisticsList({ stats }) {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} bgColor={getRandomHexColor}>
          <Label>{label}</Label>
          <Percentage>{`${percentage}%`}</Percentage>
        </StatItem>
      ))}
    </StatList>
  );
}

StatisticsList.protoTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
