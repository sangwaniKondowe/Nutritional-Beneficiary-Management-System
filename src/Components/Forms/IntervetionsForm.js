
// import { makeStyles, TextField } from '@material-ui/core';
// import React,{useSate,useEffect, useState} from 'react';

// // const useStyle  = makeStyles(theme => ({
    
// //     root: {
// //         '& .MuiFormControl-root':{
// //             width: '60%',
// //             height: '20%',
// //             margin: theme.spacing(2)
// //         }

// //     }
// // )})
    


// const initialValues = {

//     IntervetionName: '',
//     ImpactedArea: '',
//     NumberOfBenefiaries: '',
//     Partener: '',
//     District: ''
    
// }


// function IntervetionsForm() {
//     const {values, setValues} = useState(initialValues);
    
//   return (
//       <div className={classes.Content}>

    
//       <form className={classes.root}>
//           <TextField
//           className = {classes.textfield}
          
//           size='small'
//           variant = 'outlined'
//           label = 'Intervetion Name'
//           value={values.IntervetionName}
//           />

//         <TextField
//           variant = 'outlined'
//           label = 'Impacted Area'
//           value={values.ImpactedArea}
//           />
//           <TextField
//           variant = 'outlined'
//           label = 'Number Of Benefiaries'
//           value={values.NumberOfBenefiaries}
//           />
//           <TextField
//           variant = 'outlined'
//           label = 'Partener'
//           value={values.Partener}
//           />
//           <TextField
//           variant = 'outlined'
//           label = 'District'
//           value={values.District}
//           />
//       </form>
//       </div>

//   );
// }

// export default IntervetionsForm;
