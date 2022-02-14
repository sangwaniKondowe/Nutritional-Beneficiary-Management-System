import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import axios from 'axios';
import MaterialTable from 'material-table';
import React,{useState,useEffect} from 'react';
import {Typography } from '@material-ui/core';


function WaterSanitationAndHygienBeneficiaries() {
    const [data, setData] = useState([])
    const columns = [
        { title:'Intervetion',field:'InterventionName'},
        { title:'Full Name',field:'FullName'},
        { title:'Gender',field:'Gender'},
        { title:'Number Of Family Members',field:'NumberOfFamilyMembers'},
        { title:'Area',field:'Area'},
        { title:'Source Of Water',field:'SourceOfWater'},


        ]
    const baseUrl = "http://127.0.0.1:8000/api/WSHbeneficiaries/"
    const getBeneficiaries = async () => {
      await axios.get(baseUrl)
      .then(response => {
        let actualData = []
        for(let x = 0; x < response.data.length; x++){
              let obj = {...response.data[x], InterventionName: 
                response.data[x].InterventionName==null ? "no intervation" :
                 response.data[x].InterventionName .InterventionName}
              actualData.push(obj)
            }
         setData(actualData);
      })
    
        
    }
    useEffect(() => {
      getBeneficiaries();

    },[])

  return (
      <div>

      
    <Typography variant='h3' gutterBottom>Water Sanitation & Hygiene Beneficiaries</Typography>

    <MaterialTable
     columns={columns}
     data={data}
     title="Beneficiaries"
     options={{
      paging:false,
      exportButton:true,
      actionsColumnIndex: -1
      
  }}

  actions={[
    {
      icon:Edit,
      tooltip: 'Edit ',
      //onClick: (event,rowData) => selectIntervetion(rowData, "Edit")
    },
    {
      icon:Delete,
      tooltip:'delete'
    }
  ]}

    />
    
    </div>
  );
}

export default WaterSanitationAndHygienBeneficiaries;
