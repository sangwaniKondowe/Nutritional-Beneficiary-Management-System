
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import DialogPopup from './DialogPopup';
import {Modal,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
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






function AdolescentNutrition() {
    const [data, setData] = useState([])
    const classes = useStyles();


    const dataInsert =(
      <div className={classes.modal}>
        <h3>Add intervetion</h3>
        <TextField className={classes.inputMaterial} label="add intervetions"/>
        <br/>
        <diV align="right">
          <Button>Insert</Button>
          <Button>Cancel</Button>
        </diV>
    
      </div>
    )

    const columns = [
        {title:"INTERVETION",field:"IntervetionName"},
        {title:"IMPACT AREA",field:"ImpactedArea"},
        {title:"TARGET BENEFICiARIES",field:"NumberOfBeneficiaries"},
        {title:"PARTNERS",field:"Partners"},
        {title:"DISTRICT",field:"CurrentDistrict"}
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/adolescentIntervetions/?format=json")
        .then(resp =>resp.json())
        .then(resp => {
            
            setData(resp)})
    },[])

  return(
    <div>
    

    <div style={{
    display:"flex", 
    justifyContent:'space-between',
    color:"white",
    backgroundColor:'blueviolet',
    padding: '10px'}}>
    <text style={{}}>ADOLESCENT INTERVETIONS</text>
     <Button 
     style={{
       backgroundColor:'white',
       width: '15px',
       height: '20px',
      lineHeight: '16px'
     }}
     size="small"
     startIcon={<AddIcon/>}
    
     
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
        tooltip: 'Editor '
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

export default AdolescentNutrition;
