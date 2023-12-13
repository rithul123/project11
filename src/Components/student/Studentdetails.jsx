import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Studentdetails = () => {
    var [student, setStudent] = useState([]);
    var[update,setUpdate]=useState(false)
   useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then(response => {
        console.log("dkjhdg")
           setStudent(response.data)
           console.log(response.data)
    })
    .catch(err => console.log(err))
   },[])

   const updateValues=(rows)=>{
    setSelected(rows);
    setUpdate(true);
}
var result=
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Admission no</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Age</TableCell>
                            <TableCell >Course</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {student.map((row,pos) => {
                            return (

                                <TableRow key={pos}

                                >
                                    <TableCell >{row.Admno}</TableCell>
                                    <TableCell >{row.Name}</TableCell>
                                    <TableCell>{row.Age}</TableCell>
                                    <TableCell >{row.Course}</TableCell>
                                    <TableCell><EditIcon onclick={()=>updateValues(rows)}></EditIcon></TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    if (update)
    {
        result=<Studentedit data={selected} method='put'/>
    }
}

export default Studentdetails
