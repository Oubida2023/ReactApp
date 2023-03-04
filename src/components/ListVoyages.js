import React from "react";
import { useSelector } from "react-redux";
const ListVoyages=()=>{
    const voyages = useSelector(e=>e.Voyages)
    return <table border={1}>
        <thead>
            <tr>
                <th>Code</th>
                <th>VilleDepart</th>
                <th>VilleArrive</th>
                <th>DateVoyage</th>
                <th>NombreParticipant</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {voyages.map((e,i)=>{return <tr key={i}>
                <td>{e.Code}</td><td>{e.VilleDepart}</td><td>{e.VilleArrive}</td>
                <td>{e.DateVoyage}</td><td>{e.NombreParticipant}</td><td>{e.Description}</td>
            </tr>})}
        </tbody>
    </table>

}
export default ListVoyages;