import { useEffect,useState } from "react";
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [users, setUsers] = useState([])
 useEffect(()=> {
  axios.get('http://localhost:3001/getUsers')
  .then(users => setUsers(users.data))
  .catch(err => console.log(err))
 }, [])

  return (
    <>
      <div className='W-100 vh-100 d-flex justify-content-center align-iteams-center '>
        <div className='w-50'>
       <table className='table  table-dark  table-bordered'>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Age
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
             return <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            })
          }
        </tbody>
       </table>
       </div>
      </div>
     
    </>
  )
}

export default App