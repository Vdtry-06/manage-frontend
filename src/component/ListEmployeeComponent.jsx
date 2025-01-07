import { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom";


export const ListEmployeeComponent = () => {

    // const dummData = [
    //     {
    //         "id": 1,
    //         "firstName": "Trong",
    //         "lastName": "Vuong",
    //         "email": "tfsffd@gmail.com"
    //     }, {
    //         "id": 2,
    //         "firstName": "Trong2",
    //         "lastName": "Vuong",
    //         "email": "lefdf1501@gmail.com"
    //     }, {
    //         "id": 3,
    //         "firstName": "Trong3",
    //         "lastName": "Vuong",
    //         "email": "tdfdn1701@gmail.com"
    //     }
    // ]

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then(() => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className="container">
        <br />
        <h2>List of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td> {employee.id}</td>
                            <td> {employee.firstName}</td>
                            <td> {employee.lastName}</td>
                            <td> {employee.email}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
