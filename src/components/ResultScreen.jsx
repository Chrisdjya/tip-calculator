import React, {useState, useEffect} from 'react';

 const ResultScreen = (props) => {
     const result = props.result;
     const [res, setRes] = useState(); 
     useEffect(() => setRes(result) , [result]);
     return (
         <div className="result">
             <p>{res}</p>
         </div>
     );
 }


 export default ResultScreen;






