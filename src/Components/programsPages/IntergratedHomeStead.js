
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';

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

export default IntergratedHomeStead;
