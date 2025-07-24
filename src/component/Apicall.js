import React,{useState} from 'react';
import axios from 'axios';
function Apicall() {
    const[error,setError]=useState("");
    const[image,setImage]=useState("");
    const[output,setOutput]=useState("");
    const show=()=>{
        const baseURl=`https://kishan80090.github.io/dataonline/items.json`;
    axios.get(baseURl).then((response)=>{
        console.log(response.data)
        let arr=response.data[0];
        let m = arr.menuBar;
        console.log(m[0]);
        // setImage(response.data);
        let n = m.length;
            let outputtable = ``;`<tr><td>${"Name"}</td></tr>\n`;
            for (let i = 0; i <= n - 1; i++) {
                console.log(m[i].title);
                outputtable +=`<td>${m[i].title}</td>\n`
            }
            outputtable=`<table border="1"><tr>${outputtable}</tr></table>`;
            setOutput(outputtable);
            document.getElementById("dd").innerHTML=outputtable;
            // alert(outputtable);
    })
    .catch((Error)=>{
        console.error("Error");
        setError("Api call");
    });
    };
    return(
        <div ><center>
            <div style={{backgroundColor:"blue",fontSize:"20px",color:"white"}} id="dd"></div>
            <button onClick={show} style={{backgroundColor:"red",height:"50px",fontSize:"15px",
                color:"white",marginTop:"100px",borderRadius:"50px"}} >click here</button>
            {image &&(
                <pre>
                    {JSON.stringify(image,null,2)};
                </pre>
            )
            }
            </center>
        </div>
    )
}
export default Apicall;