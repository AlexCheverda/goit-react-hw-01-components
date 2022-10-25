import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return  <table className='transaction_history'>
                <thead>
                    <tr>
                        <th className='head_table'>Type</th>
                        <th className='head_table'>Amount</th>
                        <th className='head_table'>Currency</th>
                    </tr>
                </thead>
            {items.map(({ type, amount, currency, id }) =>
                <tbody className='item_table' key={id}>
                    <tr>
                        <td className='data_table'>{type}</td>
                        <td className='data_table'>{amount}</td>
                        <td className='data_table'>{currency}</td>
                    </tr>
                </tbody>)}
            </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}