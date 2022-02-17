
import React,{useState,useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add'
import PostAddIcon from '@material-ui/icons/PostAdd';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import {Modal,TextField, Typography, IconButton ,Select, FormControl, InputLabel } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';
import  {districtList} from './District'


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


  



function ShoolAndHealthProgram(props) {
    const [data, setData] = useState([])
    const classes = useStyles();
    // const districts = districtList()
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEditor, setModalEditor] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    
    const [Intervetion,setIntervetion] = useState({
      District: " ",
      ImpactArea: " ",
      InterventionName: " ",
      NumberOfBeneficiaries: '',
      PartnerName: " ",
      id: ''

      

})




    // handle input data function
    const handleChange = e => {
        const {name,value} = e.target;
        setIntervetion(prevState => ({
          ...prevState,
          [name]:value
        }))
        
        
      }
      //insert data into the table
      const modalInsertFunction = () => {
        setModalInsert(!modalInsert);
      }
  
      //edit data into the data
  
      const modalEditFunction = () => {
        setModalEditor(!modalEditor);
      }

      //delete function
      const modalDeleteFunction = () => {
        setModalDelete(!modalDelete);
      }

      //edit data selection 

      const selectIntervetion =(InterventionName,caso) => {
        setIntervetion(InterventionName);
        (caso ==="Edit")? modalEditFunction()
        :
        modalDeleteFunction()
      }

    
    
    const columns = [
        {title:"Intervention",field:"InterventionName"},
        {title:"Impact Area",field:"ImpactArea"},
        {title:"Target Beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"PartnerName"},
        {title:"District",field:"District"},
        
        
    ]
    //  getting an url
    const baseUrl = "http://127.0.0.1:8000/api/intervetions/";
    // getting data from api method

    const intervetionGet = async() => {
      await axios.get(baseUrl)
      .then(respose =>{
        setData(respose.data);
        
      })

    }

    

    

    useEffect(() =>{
      intervetionGet()
      
    },[])

    // adding form data into the table

    const addIntervetionPost = async () => {
        await axios.post(baseUrl,Intervetion)
        .then(respose => {
          setData(data.concat(respose.data));
          modalInsertFunction();
  
        })}

        // updating data inthe table
       const updateUrl = "http://127.0.0.1:8000/api/intervetion/"
        const addIntervetionPut = async () => {
          await axios.put(updateUrl + Intervetion.id + "/",Intervetion)
          .then(respose => {
            var dataUpdate = data;
            dataUpdate.map(InterventionName => {
              if(InterventionName.id ===Intervetion.id){
                InterventionName.District = Intervetion.District;
                InterventionName.ImpactArea = Intervetion.ImpactArea;
                InterventionName.InterventionName = Intervetion.InterventionName;
                InterventionName.NumberOfBeneficiaries = Intervetion.NumberOfBeneficiaries;
                InterventionName.PartnerName = Intervetion.PartnerName;
                
              }
            });
            setData(dataUpdate)
            modalEditFunction();
    
          }).catch(error =>{
            console.log(error);
          })
        }

       
        const addIntervetionDelete = async () => {
          await axios.delete(updateUrl + Intervetion.id + "/")
          .then(respose => {
            setData(data.filter(InterventionName => InterventionName.id!==Intervetion.id));
            modalDeleteFunction();
            }).catch(error=>{
              console.log(error)
            })
        }

  

    const dataInsert =(
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  }}>
                    Add School And Health intervention</h3>
  
  
          <TextField className={classes.inputMaterial} 
          
          label="intervetion" 
          placeholder='Enter Intervetion Name'
          name='InterventionName'
          type = 'text'
          
          value={Intervetion.InterventionName}
          onChange={handleChange}
          />
          <br/>

          <TextField className={classes.inputMaterial} 
        
          label="Impacted Area" 
          placeholder='Enter Impacted Area'
          name='ImpactArea'
          type = "text"
          value={Intervetion.ImpactArea}
          onChange={handleChange}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          
          label="Target Beneficiaries"
          placeholder='Enter Number of Beneficiaries'
          name='NumberOfBeneficiaries'
          type="number" min="0"
          value={Intervetion.NumberOfBeneficiaries}
          onChange={handleChange}
  
           />
          <br/>
          <TextField className={classes.inputMaterial} 
        
          label="Partners" 
          placeholder='Enter Partner'
          name='PartnerName'
          type = "text"
          value={Intervetion.PartnerName}
          onChange={handleChange}
          />
          <br/>
        
        
                
        <FormControl required className={classes.inputMaterial}>
        <InputLabel>District</InputLabel>
        <Select
          native
          onChange={handleChange}
          // value={Intervetion.District}
          name="District"
          inputProps={{
            id: 'district-native-required',
          }}
        
        >
          <option aria-label="District" value="" />
          <option value="Zomba">Zomba</option>
          <option value="Thyolo">Thyolo</option>
          <option value="Salima">Salima</option>
          <option value="Rumphi">Rumphi</option>
          <option value="Phalombe">Phalombe</option>
          <option value="Ntchisi">Ntchisi</option>
          <option value="Ntcheu">Ntcheu</option>
          <option value="Nsanje">Nsanje</option>
          <option value="Nkhatabay">Nkhatabay</option>
          <option value="Nkhotakota">Nkhotakota</option>
          <option value="Neno">Neno</option>
          <option value="Mzimba">Mzimba</option>
          <option value="Mwanza">Mwanza</option>
          <option value="Mulanje">Mulanje</option>
          <option value="Mchinji">Mchinji</option>
          <option value="Mangochi">Mangochi</option>
          <option value="Machinga">Machinga</option>
          <option value="Lilongwe">Lilongwe</option>
          <option value="Likoma">Likoma</option>
          <option value="Kasungu">Kasungu</option>
          <option value="Karonga">Karonga</option>
          <option value="Dowa">Dowa</option>
          <option value="Dedza">Dedza</option>
          <option value="Chitipa">Chitipa</option>
          <option value="Chiradzulu">Chiradzulu</option>
          <option value="Chikwawa">Chikwawa</option>
          <option value="Blantyre">Blantyre</option>
          <option value="Balaka">Balaka</option>
        </Select>
        </FormControl>
          <br/>
          <diV align="right">
            <Button color='primary' onClick ={() =>addIntervetionPost()}>Insert</Button>
            <Button onClick={()=>modalInsertFunction()}>Cancel</Button>
          </diV>
        
        </div>
  
      )

      const bodyDelete =(
        <div className={classes.modal}>
        <p>Do you want to delete <b>{Intervetion&&Intervetion.InterventionName}</b>?</p>

         <div align="right">
           <Button color="secondary" onClick={() => addIntervetionDelete()}>YES</Button>
           <Button onClick={() => modalDeleteFunction() }>NO</Button>
         </div>

        </div>
      )

      // editting form
      const dataEdit =(
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  color:'blueviolet'}}>
                    Edit School And Health intervetion</h3>
  
  
          <TextField className={classes.inputMaterial} 
          label="intervetion" 
          placeholder='Enter Intervetion Name'
          name='InterventionName'
          onChange={handleChange}
          value={Intervetion&&Intervetion.InterventionName}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Impacted Area" 
          placeholder='Enter Impacted Area'
          name='ImpactArea'
          onChange={handleChange}
          value={Intervetion&&Intervetion.ImpactArea}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Target Beneficiaries"
          placeholder='Enter Number of Beneficiaries'
          name='NumberOfBeneficiaries'
          onChange={handleChange}
          value={Intervetion&&Intervetion.NumberOfBeneficiaries}
  
           />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Partners" 
          placeholder='Enter Partner'
          name='PartnerName'
          onChange={handleChange}
          value={Intervetion&&Intervetion.PartnerName}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="District" 
          placeholder='Enter District'
          name='District'
          onChange={handleChange}
          value={Intervetion&&Intervetion.District}
          />
          <br/>
          <diV align="right">
            <Button color='primary' onClick={() => addIntervetionPut()}>Edit</Button>
            <Button onClick={()=>modalEditFunction()}>Cancel</Button>
          </diV>
        
        </div>
  
      )

    
    return (
        <div>
    

       
        <Typography variant='h3' gutterBottom>School Health and Nutrition</Typography>
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
            exportButton:true,
            actionsColumnIndex: -1
            
        }}
        actions={[
          {
            icon:Edit,
            tooltip: 'Edit ',
            onClick: (event,rowData) => selectIntervetion(rowData, "Edit")
          },
          {
            icon:Delete,
            tooltip:'delete',
            onClick: (event, rowData) => selectIntervetion(rowData,'delete'),
            iconProps: { color:"red" }
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
     {dataEdit} 

    </Modal>

    <Modal
    open={modalDelete}
    onClose={modalDeleteFunction}
    >
     {bodyDelete} 

    </Modal>

        </div>
            
    )
}

export default ShoolAndHealthProgram
