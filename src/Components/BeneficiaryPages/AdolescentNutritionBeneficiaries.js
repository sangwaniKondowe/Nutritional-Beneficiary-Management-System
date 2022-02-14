
import React,{useState,useEffect} from 'react';
import {Typography } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import axios from 'axios';
import MaterialTable from 'material-table';

function AdolescentNutritionBeneficiaries() {
    const [data, setData] = useState([])
    const columns = [
        { title:'Intervetion',field:'IntervertionName'},
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
      let actualData = []
        for(let x = 0; x < response.data.length; x++){
              let obj = {...response.data[x], IntervertionName: 
                response.data[x].IntervertionName==null ? "no intervation" :
                 response.data[x].IntervertionName .IntervetionName}
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

      
    <Typography variant='h3' gutterBottom>Adolescent Nutrition Beneficiaries</Typography>

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

export default AdolescentNutritionBeneficiaries;
