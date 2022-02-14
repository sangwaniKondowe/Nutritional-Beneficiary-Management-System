
import React,{useState,useEffect} from 'react';

import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import {makeStyles} from '@material-ui/core/styles'
import {Modal,TextField, Typography, IconButton } from '@material-ui/core'
import axios from 'axios';
import MaterialTable from 'material-table';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  },
  
    iconos:{
      cursor:'pointer'
    },
    inputMaterial:{
      width:'100%'
    }

  
}))




function HomeAndSchoolBeneficiaries() {
  const classes = useStyles();
    const [data, setData] = useState([])
    // const  [insert, setInsert] = useSate
    const columns = [
        { title:'Intervetion',field:'InterventionName:'},
        { title:'Full Name',field:'FullName'},
        { title:'Gender',field:'Gender'},
        { title:'Date Of Birth',field:'DateOfBirth'},
        { title:'Nation ID Number',field:'NationalId'},
        { title:'Class Level',field:'ClassLevel'},
        { title:'Name Of School',field:'NameOfSchool'}
        
      

    ]
    const baseUrl = "http://127.0.0.1:8000/api/beneficiaries/"
    const getBeneficiaries = async () => {
      await axios.get(baseUrl)
      .then(response => {
        let actualData = []
        for(let x = 0; x < response.data.length; x++){
              let obj = {...response.data[x], InterventionName: 
                response.data[x].InterventionName==null ? "no intervation" :
                 response.data[x].InterventionName.IntervetionName}
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

      
    <Typography variant='h3' gutterBottom>School Health and Nutrition Beneficiaries</Typography>

    {/* <IconButton 
          >
           <PostAddIcon/>
           </IconButton> */}

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

export default HomeAndSchoolBeneficiaries;
