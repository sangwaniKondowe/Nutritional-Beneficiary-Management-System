
import { Box, colors, makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react'

import MaterialTable from 'material-table'



function ShoolAndHealthProgram() {
    const [data, setData] = useState([])
    const columns = [
        {title:"INTERVETION",field:"InterventionName"},
        {title:"Impact Area",field:"ImpactArea"},
        {title:"Target Beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"PartnerName"},
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/intervetions/?format=json")
        .then(resp =>resp.json())
        .then(resp => {
            console.log(resp);
            setData(resp)})
    },[])
    return (
        <MaterialTable title="Interventions"
        data={data}
        columns={columns}
        options={{
            paging:false,
            exportButton:true
        }}
        />
            
    )
}

export default ShoolAndHealthProgram
