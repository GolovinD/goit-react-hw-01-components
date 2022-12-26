import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>   
            {items.map(items => (
                <tr key={items.id}>
                    <td>{items.type}</td>
                    <td>{items.amount}</td>                     
                    <td>{items.currency}</td>
                </tr>            
            ))} 
        </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;