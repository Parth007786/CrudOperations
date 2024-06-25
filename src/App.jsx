import Home from "./pages/Home"
import { TransactionProvider } from "./providers/TransContext"

const App = () => {
  return (
    <TransactionProvider>
      <Home />
    </TransactionProvider>
  )
}

export default App
