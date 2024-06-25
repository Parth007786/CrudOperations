import { useContext } from "react"
import TransactionsContext from "../providers/TransContext";
const Dashboard = () => {
    const { transactions } = useContext(TransactionsContext);
    const balance = transactions.reduce((p, c) => p + c.amount, 0)
    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((p, c) => p + c.amount, 0)
    const expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((p, c) => p + c.amount, 0)

    return (
        <div className="row g-3">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card p-3 bg-primary text-light">
                    <h3>Total Income :</h3>
                    <h1>{income}</h1>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card p-3 bg-primary text-light">
                    <h3>Total Expense :</h3>
                    <h1>{expense}</h1>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card p-3 bg-primary text-light">
                    <h3>Balance :</h3>
                    <h1>{balance}</h1>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
