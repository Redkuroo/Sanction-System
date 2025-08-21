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
        
        <main className="table responsive-table" id="student_table">
          <section className="table__header responsive-header">
            <img src={logo} alt="Logo" className="logo" />
            <h1 style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', margin: '1rem 0' }}>List of Sanctioned Students</h1>
            <div className="input-group responsive-input-group">
              <input type="search" placeholder="Search Data..." style={{ fontSize: '1rem', padding: '0.5rem' }} />
              <img src={search} alt="" />
            </div>
          </section>
          <section className="table__body responsive-body">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Subject & Section</th>
                  <th>Lab</th>
                  <th>Reason</th>
                  <th>Action</th>
                  <th>
                    <button onClick={functionopenpopup} color="primary" variant="contained">
                      <img src={addIcon} alt="Icon" />
                    </button>
                  </th>
                  <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
                    <DialogTitle>
                      Sanctioned Student Info
                      <IconButton onClick={closepopup} style={{ float: 'right' }}>
                        <CloseIcon color="primary" />
                      </IconButton>
                    </DialogTitle>
                    <DialogContent>
                      <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="Name">
                          {sanctions.map((sanction, index) => (
                            <span key={index}>{sanction.body}</span>
                          ))}
                        </TextField>
                        <TextField variant="outlined" label="Date" />
                        <TextField variant="outlined" label="Time" />
                        <TextField variant="outlined" label="Subject & Section" />
                        <TextField id="outlined-select-lab" select label="Lab" defaultValue="1">
                          {lab.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField id="outlined-select-reason" select label="Reason">
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
                            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            width: '100%',
                            marginTop: '1rem',
                          }}
                          variant="contained"
                        >
                          Submit
                        </Button>
                      </Stack>
                    </DialogContent>
                    <DialogActions></DialogActions>
                  </Dialog>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {sanctions.map((sanction, index) => (
                      <span key={index}>{sanction.name}</span>
                    ))}
                  </td>
                  <td>
                    {sanctions.map((sanction, index) => (
                      <span key={index}>{sanction.date}</span>
                    ))}
                  </td>
                  <td>2:34 PM</td>
                  <td>ADV 103-3B</td>
                  <td>3</td>
                  <td>
                    <p className="status cancelled">Facebook</p>
                  </td>
                  <td>
                    <button onClick={() => (1)}>
                      <img src={deleteIcon} alt="Icon" />
                    </button>
                  </td>
                  <td>
                    <button style={{ marginLeft: '10px' }} onClick={functionopenpopup}>
                      <img src={editIcon} alt="Icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
  </main>
     );
}
 
export default Home;