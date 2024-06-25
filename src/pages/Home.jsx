import Navbar from "../components/Navbar"
import Form from "../components/Form";
import Dashboard from "../components/Dashboard"
import ListGroup from "../components/ListGroup"
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container p-5">
                <h1 className="text-center">
                    RECORD YOUR FINANCIALS
                </h1>
                <Form />
                <Dashboard />
                <ListGroup />
            </div>

        </>
    )
}

export default Home
