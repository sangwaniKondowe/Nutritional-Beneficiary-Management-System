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
         setData(response.data);
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
