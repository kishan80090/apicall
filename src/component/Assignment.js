import React, { useState } from "react";
import axios from "axios";

function Assignment() {
    const [artworks, setArtworks] = useState([]);

    const fetchData = () => {
        const baseURL=`https://api.artic.edu/api/v1/artworks?page=1`;
        axios.get(baseURL).then((response) => {

                setArtworks(response.data); 
            })

            .catch(error => {

                console.error("Error fetching data");
            });
    };
    return (
        <div style={{ padding: '20px' }}>
            <h2>Artworks Table</h2>
            <button onClick={fetchData}>Art Load</button> 
            
            <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }} border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Place of Origin</th>
                        <th>Artist Display</th>
                        <th>Inscriptions</th>
                        <th>Date Start</th>
                        <th>Date End</th>
                    </tr>
                </thead>
                <tbody>
                    {artworks.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title || "N/A"}</td>
                            <td>{item.place_of_origin || "N/A"}</td>
                            <td>{item.artist_display || "N/A"}</td>
                            <td>{item.inscriptions || "N/A"}</td>
                            <td>{item.date_start || "N/A"}</td>
                            <td>{item.date_end || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Assignment;
