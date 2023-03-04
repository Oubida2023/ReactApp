import { useDispatch } from "react-redux";
import React,{useState} from "react";
const GestionVoyages=()=>{
    const dispatch = useDispatch()
    const [Cod,setCod]=useState()
    const [VD,setVD]=useState()
    const [VA,setVA]=useState()
    const [DV,setDV]=useState()
    const [NP,setNP]=useState()
    const [Desc,setDesc]=useState()
    const [CodeDelete,setCodeDelete]=useState()
    let NewVoyage = {Code:Cod,VilleDepart:VD,
                        VilleArrive:VA,DateVoyage:DV,
                        NombreParticipant:NP,Description:Desc}
    const Ajouter=(a)=>{
        a.preventDefault()
        dispatch({type:"Add",Data:NewVoyage})
        
    }
    const Supprimer=(s)=>{
        s.preventDefault()
        dispatch({type:"Delete",Data:CodeDelete})
    }

    return <div>
        <form onSubmit={Ajouter}>
            <p>Code: 
                <input type="number" onChange={e=>setCod(e.target.value)} required />
            </p>
            <p>VilleDepart: 
                <input type="text" onChange={e=>setVD(e.target.value)} required />
            </p>
            <p>VilleArrive: 
                <input type="text" onChange={e=>setVA(e.target.value)} required />
            </p>
            <p>DateVoyage: 
                <input type="date" onChange={e=>setDV(e.target.value)} required />
            </p>
            <p>NombreParticipant: 
                <input type="number" onChange={e=>setNP(e.target.value)} required />
            </p>
            <p>Description: 
                <input type="text" onChange={e=>setDesc(e.target.value)} required />
            </p>
            <button type="submit">Ajouter</button>
        </form><br/><br/><br/>
        <form onSubmit={Supprimer}>
            <label>Code :</label> <input type="text" onChange={e=>setCodeDelete(e.target.value)} required />
            <button type="submit">Supprimer</button>
        </form>

    </div>
}
export default GestionVoyages