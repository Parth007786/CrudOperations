import { useState } from "react";
import { createContext } from "react"

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const [edit, setEdit] = useState({
        transaction: {},
        isEdit: false,
    });

    const deleteTransactions = (id) => {
        setTransactions(transactions.filter((item) => item.id !== id));
    };
    const addTransactions = (text, amount) => {
        setTransactions([
            { id: crypto.randomUUID(), text: text, amount: +amount },
            ...transactions,
        ]);
    };
    const editTransaction = (transaction) => {
        setEdit({
            transaction: transaction,
            isEdit: true,
        });
    };
    const updateTransaction = (updatedTransaction) => {
        setTransactions(
            transactions.map((item) =>
                item.id === updatedTransaction.id ? updatedTransaction : item
            )
        );
        setEdit({
            transaction: {},
            isEdit: false,
        });
    };


    return (
        <TransactionContext.Provider value={{
            transactions,
            edit,
            deleteTransactions,
            addTransactions,
            editTransaction,
            updateTransaction,
        }}>
            {children}

        </TransactionContext.Provider>
    );
};

export default TransactionContext;