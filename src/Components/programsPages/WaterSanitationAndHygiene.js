

import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';

function WaterSinitationAndHygiene() {
    const [data, setData] = useState([])
    const columns = [
        {title:"INTERVETION",field:"IntervetionName"},
        {title:"Impact Area",field:"ImpactedArea"},
        {title:"Target Beneficiaries",field:"NumberOfBeneficiaries"},
        {title:"Partners",field:"Partners"},
        {title:"District",field:"District"}
        
    ]
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/WSHIntervetions/?format=json")
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


  );
}

export default WaterSinitationAndHygiene;
