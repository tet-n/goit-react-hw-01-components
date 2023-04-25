import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import {
  Table,
  Thead,
  TheadRow,
  TheadData,
  Tbody,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <TheadRow>
          <TheadData>Type</TheadData>
          <TheadData>Amount</TheadData>
          <TheadData>Currency</TheadData>
        </TheadRow>
      </Thead>
      <Tbody>
        {items.map(({ id, amount, currency, type }) => (
          <Transaction
            key={id}
            amount={amount}
            currency={currency}
            type={type}
          />
        ))}
      </Tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
