

import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { IconButton, Typography } from '@material-ui/core'

function InfantAndYoungChild() {
    const [data, setData] = useState([])
    const columns = [
        {title:"Intervention",field:"IntervetionName"},
        {title:"Impact area",field:"ImpactedArea"},
        {title:"Target beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"partener"},
        {title:"District",field:"District"}
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/IYCFintervetion/?format=json")
        .then(resp =>resp.json())
        .then(resp => {
            console.log(resp);
            setData(resp)})
    },[])

  return (
    <div>

    <Typography variant='h3' gutterBottom>Infant and Young Child Feeding</Typography>
            <IconButton 
           // onClick={()=>modalInsertFunction()}
            >
           <PostAddIcon/>
           </IconButton>


    <MaterialTable title="Program Intervention(s)"
    data={data}
    columns={columns}
    options={{
        paging:false,
        exportButton:true
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

export default InfantAndYoungChild;

