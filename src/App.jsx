import '../src/styles/app.scss'
import { MainRouter } from './components/router/MainRouter'
import { CartProvider } from './context/cratContext'

function App() {
  return (
    <>
      <CartProvider>
        <MainRouter/>
      </CartProvider>
    </>
  )
}

export default App
