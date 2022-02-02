
import React,{useState,useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import {Modal,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';

import MaterialTable from 'material-table'

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



function ShoolAndHealthProgram() {
    const [data, setData] = useState([])
    const classes = useStyles();
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEditor, setModalEditor] = useState(false);
    const [Intervetion,setIntervetion] = useState({
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
        setIntervetion(prevState => ({
          ...prevState,
          [name]:value
        }))
        console.log(Intervetion)
      }
      //insert data into the table
      const modalInsertFunction = () => {
        setModalInsert(!modalInsert);
      }
  
      //edit data into the data
  
      const modalEditFunction = () => {
        setModalEditor(!modalEditor);
      }
    
    
    const columns = [
        {title:"INTERVETION",field:"InterventionName"},
        {title:"Impact Area",field:"ImpactArea"},
        {title:"Target Beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"PartnerName"},
        {title:"District",field:"District"},
        
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/intervetions/?format=json")
        .then(resp =>resp.json())
        .then(resp => {
            console.log(resp);
            setData(resp)})
    },[])

    // adding form data into the table

    const addIntervetionPost = async () => {
        await axios.post("http://127.0.0.1:8000/api/intervetions/",Intervetion)
        .then(respose => {
          setData(data.concat(respose.data));
          modalInsertFunction();
  
        })}

    const dataInsert =(
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  color:'blueviolet'}}>
                    Add School And Health intervetion</h3>
  
  
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

    
    return (
        <div>
    

        <div style={{
        display:"flex", 
        justifyContent:'space-between',
        color:"white",
        backgroundColor:'blueviolet',
        padding: '10px'}}>
        <text style={{}}>SCHOOL HEALTH AND NUTRITION</text>
         <Button 
         style={{
           backgroundColor:'white',
           width: '15px',
           height: '20px',
          lineHeight: '16px'
         }}
         size="small"
         startIcon={<AddIcon/>}
        
         onClick={()=>modalInsertFunction()}
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

    {/* <Modal
    open={modalEditor}
    onClose={modalEditFunction}
    >
     {dataEditor} 

    </Modal> */}

        </div>
            
    )
}

export default ShoolAndHealthProgram
