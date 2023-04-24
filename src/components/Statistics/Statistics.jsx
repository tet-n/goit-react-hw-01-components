import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Section, Title } from './Statistics.styled';
export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title className="title">{title}</Title>}
      <StatisticsList stats={stats} />
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
