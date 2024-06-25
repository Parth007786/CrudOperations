import { useContext } from "react";
import ListItem from "./ListItem";
import TransactionsContext from "../providers/TransContext";

const ListGroup = () => {
    const { transactions } = useContext(TransactionsContext);

    return (
        <div className="card p-3 my-2">
            <h1 className="text-secondary">All transactions : </h1>
            <ul className="list-group my-2">
                {transactions.map((transaction) => (
                    <ListItem key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    );
};

export default ListGroup;
