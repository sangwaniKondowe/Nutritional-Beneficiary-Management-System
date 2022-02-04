
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Modal,TextField, IconButton, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';

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






function AdolescentNutrition() {
    const [data, setData] = useState([]);
    const classes = useStyles();
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEditor, setModalEditor] = useState(false);
    const [IntervetionDetails,setIntervetionDetails] = useState({
      CurrentDistrict: " ",
      ImpactedArea: " ",
      IntervetionName: " ",
      NumberOfBeneficiaries: '',
      Partners: " ",
      id: ''

    })
    
    // handle input data function
    const handleChange = e => {
      const {name,value} = e.target;
      setIntervetionDetails(prevState => ({
        ...prevState,
        [name]:value
      }))
      console.log(IntervetionDetails)
    }
    //insert data into the table
    const modalInsertFunction = () => {
      setModalInsert(!modalInsert);
    }

    //edit data into the data

    const modalEditFunction = () => {
      setModalEditor(!modalEditor);
    }


    const dataInsert =(
      <div className={classes.modal}>
        <h3 
        style={{fontWeight:'bold',
                textAlign:"center",
                }}>
                  Add Adolescent Nutrition intervetion</h3>


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
        name='Partners'
        onChange={handleChange}
        />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="District" 
        placeholder='Enter District'
        name='CurrentDistrict'
        onChange={handleChange}
        />
        <br/>
        <diV align="right">
          <Button color='primary' onClick ={() =>addIntervetionPost()}>Insert</Button>
          <Button onClick={()=>modalInsertFunction()}>Cancel</Button>
        </diV>
      
      </div>

    )

//edit data with this function
const dataEditor =(
  <div className={classes.modal}>
    <h3 
    style={{fontWeight:'bold',
            textAlign:"center",
            color:'blue'}}>
              Edit Adolescent Nutrition intervetion</h3>


    <TextField className={classes.inputMaterial} 
    label="intervetion" 
    placeholder='Enter Intervetion Name'
    name='IntervetionName'
    onChange={handleChange}
    value ={IntervetionDetails&&IntervetionDetails.IntervetionName}
    />
    <br/>
    <TextField className={classes.inputMaterial} 
    label="Impacted Area" 
    placeholder='Enter Impacted Area'
    name='ImpactedArea'
    onChange={handleChange}
    value ={IntervetionDetails&&IntervetionDetails.ImpactedArea}
    />
    <br/>
    <TextField className={classes.inputMaterial} 
    label="Target Beneficiaries"
    placeholder='Enter Number of Beneficiaries'
    name='NumberOfBeneficiaries'
    onChange={handleChange}
    value ={IntervetionDetails&&IntervetionDetails.NumberOfBeneficiaries}

     />
    <br/>
    <TextField className={classes.inputMaterial} 
    label="Partners" 
    placeholder='Enter Partner'
    name='Partners'
    onChange={handleChange}
    value ={IntervetionDetails&&IntervetionDetails.Partners}
    />
    <br/>
    <TextField className={classes.inputMaterial} 
    label="District" 
    placeholder='Enter District'
    name='CurrentDistrict'
    onChange={handleChange}
    value ={IntervetionDetails&&IntervetionDetails.CurrentDistrict}
    />
    <br/>
    <diV align="right">
      <Button color='primary' onClick = {() => editIntervetion()}>Edit</Button>
      <Button onClick={()=>modalEditFunction()}>Cancel</Button>
    </diV>
  
  </div>



    )

    const columns = [
        {title:"Intervention",field:"IntervetionName"},
        {title:"Impact area",field:"ImpactedArea"},
        {title:"Target beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"Partners"},
        {title:"District",field:"CurrentDistrict"}
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/adolescentIntervetions/")
        .then(resp =>resp.json())
        .then(resp => {
           console.log(resp) 
            setData(resp)})
        .catch(error => console.log(error))
    },[])

    // adding form data into the table

    const addIntervetionPost = async () => {
      await axios.post("http://127.0.0.1:8000/api/adolescentIntervetions/",IntervetionDetails)
      .then(respose => {
        setData(data.concat(respose.data));
        modalInsertFunction();

      })}
      // editting
      
      const editIntervetion = async () => {
        await axios.put("http://127.0.0.1:8000/api/adolescentIntervetions" + "/",IntervetionDetails.id,IntervetionDetails)
        .then(respose => {
          var dataNueva = data;
          
    
          dataNueva.map(IntervetionName => {
            if(IntervetionName.id ===IntervetionDetails.id){
              IntervetionName.CurrentDistrict = IntervetionDetails.CurrentDistrict;
              IntervetionName.ImpactedArea = IntervetionDetails.ImpactedArea;
              IntervetionName.IntervetionName = IntervetionDetails.IntervetionName;
              IntervetionName.NumberOfBeneficiaries = IntervetionDetails.NumberOfBeneficiaries;
              IntervetionName.Partners = IntervetionDetails.Partners;
            }
          });

          setData(dataNueva);
          modalEditFunction();

          
  
        }).catch(error => {
          console.log(error)
        })
      }
      //select data 
    const selectIntervetion =(IntervetionName,caso)=>{
      setIntervetionDetails(IntervetionName);
      (caso=="Edit")&&modalEditFunction();

    }

  return(
    <div>
    

    <Typography variant='h3' gutterBottom>Adolescent Nutrition</Typography>
            <IconButton 
            onClick={()=>modalInsertFunction()}
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
        onClick: (event,rowData) => selectIntervetion(rowData, "Edit")
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

    <Modal
    open={modalEditor}
    onClose={modalEditFunction}
    >
     {dataEditor} 

    </Modal>


    
    </div>

  );
}

export default AdolescentNutrition;
