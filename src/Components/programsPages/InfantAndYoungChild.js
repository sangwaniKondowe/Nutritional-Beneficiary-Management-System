

import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import {Modal,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import PostAddIcon from '@material-ui/icons/PostAdd';
import { IconButton, Typography } from '@material-ui/core'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,

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




function InfantAndYoungChild() {
    const [data, setData] = useState([])
    const classes = useStyles();
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEditor, setModalEditor] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [InfantIntervention,setInfantIntervention] = useState({
      District: "",
      ImpactedArea: "",
      IntervetionName: "",
      NumberOfBeneficiaries: "",
      id: "",
      partener: ""
    })



    const columns = [
        {title:"Intervention",field:"IntervetionName"},
        {title:"Impact area",field:"ImpactedArea"},
        {title:"Target beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"partener"},
        {title:"District",field:"District"}
        
    ]

     // handle input data function
     const handleChange = e => {
      const {name,value} = e.target;
      setInfantIntervention(prevState => ({
        ...prevState,
        [name]:value
      }))
      
    }
    //getting intervetion
    const BaseUrl = 'http://127.0.0.1:8000/api/IYCFintervetion/?format=json'

    const InfantAndYoungChildGet = async() =>{
      await axios.get(BaseUrl, InfantIntervention)
      .then(response =>{
        setData(data.concat(response.data));
        modalInsertFunction();


      })
    }
    useEffect(() =>{
      InfantAndYoungChildGet();
    },[])

    //inserting data into the table
    const modalInsertFunction = () => {
      setModalInsert(!modalInsert);
    }


    //inserting data interface
    const dataInsert =(
      <div className={classes.modal}>
        <h3 
        style={{fontWeight:'bold',
                textAlign:"center",
                color:'blueviolet'}}>
                  ADD INFANT AND YOUNG CHILD FEEDING</h3>


        <TextField className={classes.inputMaterial} 
        label="intervetion" 
        placeholder='Enter Intervetion Name'
        name='IntervetionName'
        onChange={handleChange}
        />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="Impacted Area" 
        placeholder='Enter Impacted Area'
        name='ImpactedArea'
        onChange={handleChange}
        />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="Target Beneficiaries"
        placeholder='Enter Number of Beneficiaries'
        name='NumberOfBeneficiaries'
        onChange={handleChange}

         />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="Partners" 
        placeholder='Enter Partner'
        name='partener'
        onChange={handleChange}
        />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="District" 
        placeholder='Enter District'
        name='District'
        onChange={handleChange}
        />
        <br/>
        <diV align="right">
          <Button color='primary' onClick ={() =>InfantAndYoungChildGet()}>Insert</Button>
          <Button onClick={()=>modalInsertFunction()}>Cancel</Button>
        </diV>
      
      </div>

    )

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

<Modal
    open={modalInsert}
    onClose={modalInsertFunction}
    >
     {dataInsert} 

    </Modal>
</div>

  );
}

export default InfantAndYoungChild;

