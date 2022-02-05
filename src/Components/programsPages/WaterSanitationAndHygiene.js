

import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import axios from 'axios';
import {Modal,TextField, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


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


function WaterSinitationAndHygiene() {
  const classes = useStyles();
    const [data, setData] = useState([])
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [WaterSanitationIntervention, setWaterSanitationIntervention] = useState({
      District: " ",
      ImpactedArea: " ",
      IntervetionName: " ",
      NumberOfBeneficiaries: " ",
      Partners: " ",
      id: ""

    })
    const columns = [
        {title:"Intervention",field:"IntervetionName"},
        {title:"Impact area",field:"ImpactedArea"},
        {title:"Target beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"Partners"},
        {title:"District",field:"District"}
        
    ]

    const baseUrl = "http://127.0.0.1:8000/api/WSHIntervetions/?format=json";
    // getting data from the api 
    const WaterSanitationAndHygieneGet =async() => {
      await axios.get(baseUrl)
      .then(response => {
        setData(response.data)
        console.log(response.data)
      }) 

    }
    useEffect(() =>{
        WaterSanitationAndHygieneGet();
     
    },[])

        // handle input data function
        const handleChange = e => {
          const {name,value} = e.target;
          setWaterSanitationIntervention(prevState => ({
            ...prevState,
            [name]:value
      
          }))
          console.log(WaterSanitationIntervention)
          
        }
        // posting data into database through api

      const interventionPost = async() => {
        await axios.post(baseUrl,WaterSanitationIntervention)
        .then(response => {
          setData(data.concat(response.data))
          interventionModalInsert ();
        })
      } 
      //updating data function
      const baseUrlUpdate = "http://127.0.0.1:8000/api/WSHIntervetion/"
      const interventionPut = async() => {
        
        await axios.put(baseUrlUpdate + WaterSanitationIntervention.id + "/",WaterSanitationIntervention)
        .then(response => {
          var dataUpdate = data;
          dataUpdate.map(IntervetionName => {
            if(IntervetionName.id === WaterSanitationIntervention.id){
              IntervetionName.IntervetionName = WaterSanitationIntervention.IntervetionName;
              IntervetionName.ImpactedArea = WaterSanitationIntervention.ImpactedArea;
              IntervetionName.NumberOfBeneficiaries = WaterSanitationIntervention.NumberOfBeneficiaries;
              IntervetionName.Partners = WaterSanitationIntervention.Partners;
              IntervetionName.District = WaterSanitationIntervention.District;



            }
          })
          setData(dataUpdate)
          interventionModalEdit()
        }).catch(error =>{
          console.log(error)
        })
        
      } 
      

     //inserting data
    const interventionModalInsert =() => {
      setModalInsert(!modalInsert);
    }

    // select intervetion

    const selectWaterSanitationIntervention = (IntervetionName,caso) => {
      setWaterSanitationIntervention(IntervetionName);
      (caso ==="Edit")? interventionModalEdit()
      :
      interventionModalDelete()

    }

    //intervention delete



    const IntervetionDelete = async () => {
      await axios.delete(baseUrlUpdate  + WaterSanitationIntervention.id + "/")
      .then(respose => {
        setData(data.filter(InterventionName => InterventionName.id!==WaterSanitationIntervention.id));
        interventionModalDelete();
        }).catch(error=>{
          console.log(error)
        })
    }

    //editting data in the api

    const interventionModalEdit =() => {
      setModalEdit(!modalEdit);
    }
    const interventionModalDelete =() => {
      
      setModalDelete(!modalDelete);
    }

    const bodyDelete =(
      <div className={classes.modal}>
      <p>Do you want to delete <b>{WaterSanitationIntervention&&WaterSanitationIntervention.InterventionName}</b>?</p>

       <div align="right">
         <Button color="secondary" onClick={() => IntervetionDelete()}>YES</Button>
         <Button onClick={() => interventionModalDelete()}>NO</Button>
       </div>

      </div>
    )

    // adding data form

    const bodyDataInsert =(
      <div className={classes.modal}>
        <h3 
        style={{fontWeight:'bold',
                textAlign:"center",
                }}>
                  Add Water Sanitation And Hygiene Intervention</h3>

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
        name='District'
        onChange={handleChange}
        />
        <br/>
        <diV align="right">
          <Button color='primary' onClick={() => interventionPost()}>Insert</Button>
          <Button onClick={() => interventionModalInsert()}>Cancel</Button>
        </diV>
       
        </div>
         )

        //  body edit form

        const bodyDataEdit =(
          <div className={classes.modal}>
            <h3 
            style={{fontWeight:'bold',
                    textAlign:"center",
                    }}>
                     Edit Water Sanitation And Hygiene Intervention</h3>
    
            <TextField className={classes.inputMaterial} 
            label="intervetion" 
            placeholder='Enter Intervetion Name'
            name='IntervetionName'
            onChange={handleChange}
            value={WaterSanitationIntervention&&WaterSanitationIntervention.IntervetionName}

            />
            <br/>
            <TextField className={classes.inputMaterial} 
            label="Impacted Area" 
            placeholder='Enter Impacted Area'
            name='ImpactedArea'
            onChange={handleChange}
            value={WaterSanitationIntervention&&WaterSanitationIntervention.ImpactedArea}
            
            />
            <br/>
            <TextField className={classes.inputMaterial} 
            label="Target Beneficiaries"
            placeholder='Enter Number of Beneficiaries'
            name='NumberOfBeneficiaries'
            onChange={handleChange}
            value={WaterSanitationIntervention&&WaterSanitationIntervention.NumberOfBeneficiaries}
    
             />
            <br/>
            <TextField className={classes.inputMaterial} 
            label="Partners" 
            placeholder='Enter Partner'
            name='Partners'
            onChange={handleChange}
            value={WaterSanitationIntervention&&WaterSanitationIntervention.Partners}
            />
            <br/>
            <TextField className={classes.inputMaterial} 
            label="District" 
            placeholder='Enter District'
            name='District'
            onChange={handleChange}
            value={WaterSanitationIntervention&&WaterSanitationIntervention.District}
            />
            <br/>
            <diV align="right">
              <Button color='primary' onClick={() => interventionPut()}>Edit</Button>
              <Button onClick={() => interventionModalEdit()}>Cancel</Button>
            </diV>
           
            </div>
             )
      
    

  return (
    <div>
     
     <Typography variant='h3' gutterBottom>WATER SANITATION AND HYGIENE</Typography>
            <IconButton 
            onClick={()=>interventionModalInsert()}
            >
           <PostAddIcon/>
           </IconButton>
    
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
        onClick: (event,rowData) => selectWaterSanitationIntervention(rowData,"Edit")
      },
      {
        icon:Delete,
        tooltip:'delete',
        onClick:(event,rowData) => selectWaterSanitationIntervention(rowData,"Delete")
      }
    ]}
    />
    <Modal
    open={modalInsert}
    onClose={interventionModalInsert}
    >
      {bodyDataInsert}

    </Modal>

    <Modal
    open={modalEdit}
    onClose={interventionModalEdit}
    >
      {bodyDataEdit}

    </Modal>

    <Modal
    open={modalDelete}
    onClose={interventionModalDelete}
    >
      {bodyDelete}

    </Modal>

</div>

  );
}

export default WaterSinitationAndHygiene;
