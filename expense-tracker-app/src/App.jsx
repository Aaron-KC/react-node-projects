import Header from './components/Header'
import Balance from './components/Balance'
import Chart from './components/Chart'
import Transactions from './components/Transactions'
import New from './components/New'
import './App.css'
import { MyContextProvider } from './context/MyContext'

function App() {

  return (
    <>
    <MyContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <Chart />
        <Transactions />
        <New />
      </div>
    </MyContextProvider>
    </>
  )
}

export default App
