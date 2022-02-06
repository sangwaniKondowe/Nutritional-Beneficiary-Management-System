
import React,{useState,useEffect} from 'react';
import {Typography } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import axios from 'axios';
import MaterialTable from 'material-table';

function AdolescentNutritionBeneficiaries() {
    const [data, setData] = useState([])
    const columns = [
        { title:'Intervetion',field:'InterventionName'},
        { title:'Full Name',field:'FullName'},
        { title:'Gender',field:'Gender'},
        { title:'Date Of Birth',field:'DateOfBirth'},
        { title:'Nation ID Number',field:'NationlId'},
        { title:'Guardian',field:'Guardian'},
        { title:'Current Resident',field:'CurrentResident'},

        ]
    const baseUrl = "http://127.0.0.1:8000/api/adolescentBeneficiaries/"
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

      
    <Typography variant='h3' gutterBottom>Adolescent Nutrition Beneficiaries</Typography>

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

export default AdolescentNutritionBeneficiaries;
