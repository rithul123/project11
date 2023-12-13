import React from 'react'

const studentedit = () => {
    var [inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {
        const{name,value}=event.target
        setInputs(inputs)=({...input,[name]:value})
        console.log(inputs)
        if(props.method ==="put"){
            axios.put("https://localhost:3007/edit/"+inputs._id,input)
            .then(response=>{
                alert("record updated")
                window.location.reload()
            })
            .catch(err=>console.log(err))
            }
        }
    }
  return (
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

                                <TableRow key={pos}>
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
  )
}

export default studentedit
