
import './App.scss'

import React, { useEffect, useState } from 'react'

import EmployeAge from "./components/EmployeAge"
import EmployeSalary from "./components/EmployeSalary"


import { Chart as ChartJS, BarElement, Tooltip, Legend, LinearScale, CategoryScale, ArcElement } from 'chart.js'
import EmployeeTable from './components/EmployeTable'
import { useDispatch, useSelector } from 'react-redux'
import { FetchEmployes } from './redux/EmployeSlice'
import Loading from './components/Loading'

ChartJS.register(
  BarElement, Tooltip, Legend, LinearScale, CategoryScale, ArcElement
)

function App() {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.employe);
  const employe = JSON.parse(localStorage.getItem('data'));

  //-------- Now we fetch the all employes data
  useEffect(() => {
    if (!employe || employe?.length <= 0)
      dispatch(FetchEmployes());
    console.log('requests');
  }, [])

  //----------Mapping on the employe age data

  // labels: ['18-30', '31-45', '45-100'],
  let ageGrp1830 = 0, ageGrp3145 = 0, ageGrp45100 = 0;
  employe?.forEach(item => {
    if (item.employee_age >= 18 && item.employee_age <= 30) ageGrp1830++;
    else if (item.employee_age >= 31 && item.employee_age <= 45) ageGrp3145++;
    else ageGrp45100++;
  })
  const employeeAges = [ageGrp1830, ageGrp3145, ageGrp45100];

  console.log("employe data", employe);

  const [employes, setEmployees] = useState(employe || []);

  const handleDelete = (id) => {
    setEmployees(employes?.filter((emp) => emp.id !== id));
  };


  return (
    <>
      {loading && <Loading />}
      <main className="container">

        <div>
          <h1 className="text-highlight " style={{ marginTop: "8px" }}>Dashboard </h1>
          <h4>Get Your Empolyes Details</h4>
        </div>

        {/* barchart: to visulize the employe salaries  */}
        <section id="EmploySalary">

          {employe && <EmployeSalary employe={employe} />}
        </section>

        {/* Section to showing the table data, and age chart  */}
        <section className="flex" id="table-doughnut">


          {/* Section for the table  */}
          <section id="table-data" style={{ border: "2px solid salmon", borderRadius: '12px', padding: '5px', minWidth: '50%', margin: "5px", maxHeight: "340px", overflow: "auto" }}>
            <h2 style={{ textAlign: "center", margin: "5px" }}>Employee List</h2>
            <EmployeeTable employees={employes ? employes :(employe && employe)  } onDelete={handleDelete} />
          </section>

          
          {/* Next line and at end, showing Doughnut chart  */}
          <section id="EmployeAge" style={{ minWidth: '50%' }}>
            <h2 style={{ textAlign: "center", margin: "5px" }}>Employee Age Groups</h2>
            <EmployeAge employeeAges={employeeAges } />
          </section>


        </section>
      </main>
    </>
  )
}

export default App
