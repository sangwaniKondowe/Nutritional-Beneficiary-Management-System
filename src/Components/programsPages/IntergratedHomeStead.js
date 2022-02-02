
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';

function IntergratedHomeStead() {
    const [data, setData] = useState([])
    const columns = [
        {title:"INTERVETION",field:"IntervetionName"},
        {title:"Impact Area",field:"ImpactedArea"},
        {title:"Target Beneficiaries",field:"NumberOfBenefiaries"},
        {title:"Partners",field:"Partener"},
        {title:"District",field:"District"}
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/IHAIntervetions/?format=json")
        .then(resp =>resp.json())
        .then(resp => {
            console.log(resp);
            setData(resp)})
    },[])

  return (
    <div>

      
    <div style={{
    display:"flex", 
    justifyContent:'space-between',
    color:"white",
    backgroundColor:'blueviolet',
    padding: '10px'}}>
    <text style={{}}>INTERGRATED HOME STEAD AGRICULTURE</text>
     <Button 
     style={{
       backgroundColor:'white',
       width: '15px',
       height: '20px',
      lineHeight: '16px'
     }}
     size="small"
     startIcon={<AddIcon/>}
    
    //  onClick={()=>modalInsertFunction()}
     >Add</Button>
    

    </div>

   
    <MaterialTable title="Interventions"
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
        // onClick: (event,rowData) => selectIntervetion(rowData, "Edit")
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

export default IntergratedHomeStead;
