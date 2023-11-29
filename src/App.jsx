import '../src/styles/app.scss'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent'



function App() {
  return (
    <>
      <NavBarComponent/>
      <ItemListContainer greenting="Item 1"/>
      <ItemListContainer greenting="Item 2"/>
      <ItemListContainer greenting="Item 3"/>
    </>
  )
}

export default App
