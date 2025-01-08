import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './component/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* http://localhost:3000 */}
            <Route path='/' element = {<ListEmployeeComponent/>}></Route>

            {/* http://localhost:3000/employees */}
            <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>

            {/* http://localhost:3000/add-employee */}
            <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>


            {/* http://localhost:3000/update-employee/1 */}
            <Route path='/update-employee/:id' element = {<EmployeeComponent/>}></Route>

            {/* http://localhost:3000/search-employee/search?keyword=n */}
            <Route path='/search-employee' element={<ListEmployeeComponent />} />

          </Routes>
          <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
