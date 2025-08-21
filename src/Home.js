import search from './search.png';
import deleteIcon from './del.png';
import editIcon from './edit.png';
import logo from './logohcdc.png';
import addIcon from './add.png';
import './App.css';
import MenuItem from '@mui/material/MenuItem';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { useState, useEffect } from "react";
import * as React from 'react';






  


const lab = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
  ];

  const reason = [
    {
      value: 'Facebook',
      label: 'Facebook',
    },
    {
      value: 'Youtube',
      label: 'Youtube',
    },
    {
      value: 'Games',
      label: 'Games',
    },
  ];
  
const Home = () => {
    const [open,openchange]=useState(false);
    const functionopenpopup=()=>{
        openchange(true);
    }
    const closepopup=()=>{
        openchange(false);
    }

    
    let [sanctions, setSanctions] = useState([])

    useEffect(() => {
        getSanctions()
    }, [])


    let getSanctions = async () => {

        let response = await fetch('api/sanctions/')
        let data = await response.json()
        console.log ('DATA:', data)
        setSanctions(data)
    }

   

    return ( 
        
        <main class="table" id="student_table">
        <section class="table__header">
        <img src={logo} alt="Logo" className="logo" />
    <h1>List of Sanctioned Students</h1>
    
          <div class="input-group">
          <input type="search" placeholder="Search Data..."/>
          <img src={search} alt=""/>
          </div>
          
            </section>
            <section class="table__body">
                <table>
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Name</th>
                            <th> Date </th>
                            <th> Time </th>
                            <th> Subject & Section</th>
                            <th> Lab </th>
                            <th> Reason </th>
                            <th> Action </th>
                       
                                
            
         
       <th>  <button onClick={functionopenpopup} color="primary" variant="contained"><img src={addIcon} alt="Icon" /></button></th>
            <Dialog 
            // fullScreen 
            open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Sanctioned Student Info<IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>

                      
                      <TextField variant="outlined" label="Name"> {sanctions.map((sanction, index) => (
                     <span key={index}>{sanction.body}</span>
                ))}</TextField>

                     
                
     
   
    


        <TextField variant="outlined" label="Date"></TextField>
                      <TextField variant="outlined" label="Time"></TextField>
                      <TextField variant="outlined" label="Subject & Section"></TextField>
                      <TextField
          id="outlined-select-lab"
          select
          label="Lab"
          defaultValue="1"
         
        >
          {lab.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

  
    
        </TextField>

        <TextField
          id="outlined-select-reason"
          select
          label="Reason"
        
         
        >
          {reason.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

  
    
        </TextField>

                    
                    
       <Button
  style={{
    backgroundColor: '#2B3467',
    color: '#f8f9fa',
    fontSize: '1.5rem', // Increase the font size as needed
    borderRadius: '10px', // Adjust the border radius as needed
    fontWeight: 'bold',
  }}
  variant="contained"
>
  Submit
</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>
                {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
                </DialogActions>
            </Dialog>
                         
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1  </td>
                            <td> {sanctions.map((sanction, index) => (
                     <span key={index}>{sanction.name}</span>
                ))} </td>
                            <td> {sanctions.map((sanction, index) => (
                     <span key={index}>{sanction.date}</span>
                ))} </td>
                            <td> 2:34 PM </td>
                            <td> ADV 103-3B </td>
                            <td> 3 </td>
                            <td><p class="status cancelled">Facebook</p></td>
                            <td><button onClick={() => (1)}>  <img src={deleteIcon} alt="Icon" /> </button> </td>
            
                           
                            <td>  <button style={{ marginLeft: '10px' }} onClick={functionopenpopup}> <img src={editIcon} alt="Icon" /> </button></td>
                  
                         </tr>
    
                        
                       
    
                      
                       
                    </tbody>
                    </table>
        </section>
      </main>
     );
}
 
export default Home;