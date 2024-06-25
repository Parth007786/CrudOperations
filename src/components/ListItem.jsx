import { useContext } from "react"
import TransactionsContext from "../providers/TransContext"

const ListItem = ({ transaction }) => {
    const { deleteTransactions, editTransaction } = useContext(TransactionsContext);

    return (
        <li className={
            transaction.amount > 0
                ? "list-group-item bg-success text-light"
                : "list-group-item bg-danger text-light"
        }>
            <h3>
                {transaction.text}:{transaction.amount}
            </h3>
            <span className="float-end">
                <button onClick={() => editTransaction(transaction)} className="btn btn-sm btn-outline-light mx-1">
                    Edit
                </button>
                <button onClick={() => deleteTransactions(transaction.id)}
                    className="btn btn-sm btn-outline text-light mx-1">
                    Delete
                </button>
            </span>
        </li>
    )
}

export default ListItem
