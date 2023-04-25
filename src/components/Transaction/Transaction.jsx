import PropTypes from 'prop-types';
import { TBodyRow, TData } from './Transaction.styled';

export function Transaction({ type, amount, currency }) {
  return (
    <TBodyRow>
      <TData>{type}</TData>
      <TData>{amount}</TData>
      <TData>{currency}</TData>
    </TBodyRow>
  );
}

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
