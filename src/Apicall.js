import React, { useState } from 'react';
import axios from 'axios';

function Apicall() {
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
    const [output, setOutput] = useState("");

    const show = () => {
        const baseURl = `https://kishan80090.github.io/dataonline/items.json`;
        axios.get(baseURl).then((response) => {
            console.log(response.data);
            let arr = response.data[0];
            let m = arr.menuBar;
            console.log(m[0]);

            let n = m.length;
            let outputtable = `<tr><td>${"Name"}</td></tr>\n`;
            for (let i = 0; i < n; i++) {
                console.log(m[i].title);
                outputtable += `<td>${m[i].title}</td>\n`;
            }
            outputtable = `<table border="1"><tr>${outputtable}</tr></table>`;
            setOutput(outputtable);
        })
        .catch((error) => {
            console.error("Error");
            setError("API call failed");
        });
    };

    return (
        <div>
            <center>
                <div
                    style={{
                        backgroundColor: "blue",
                        fontSize: "20px",
                        color: "white",
                        padding: "10px",
                        marginBottom: "20px"
                    }}
                    dangerouslySetInnerHTML={{ __html: output }}
                />
                <button
                    onClick={show}
                    style={{
                        backgroundColor: "red",
                        height: "50px",
                        fontSize: "15px",
                        color: "white",
                        marginTop: "20px",
                        borderRadius: "50px"
                    }}
                >
                    Click Here
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {image && (
                    <pre>{JSON.stringify(image, null, 2)}</pre>
                )}
            </center>
        </div>
    );
}

export default Apicall;
