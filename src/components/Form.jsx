import { useContext, useEffect, useState } from "react";
import TransactionsContext from "../providers/TransContext";

const Form = () => {
    const { addTransactions, edit, updateTransaction } = useContext(TransactionsContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        edit.isEdit
            ? updateTransaction({ id: edit.transaction.id, text, amount: +amount })
            : addTransactions(text, amount);
    };

    useEffect(() => {
        setText(edit.transaction.text);
        setAmount(edit.transaction.amount);
    }, [edit]);

    return (
        <div className="card p-3 my-2">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="transactionName" className="form-label">Transaction Name</label>
                    <input
                        type="text"
                        id="transactionName"
                        className="form-control w-100"
                        placeholder="Enter Transaction"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="transactionAmount" className="form-label">Transaction Amount</label>
                    <input
                        type="number"
                        id="transactionAmount"
                        className="form-control w-100"
                        placeholder="Enter Amount"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
};

export default Form;
