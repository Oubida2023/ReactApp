import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { Villes } from "./Data";
const Recherch=()=>{
    const [VD,setVD]=useState(Villes[0])
    const [VA,setVA]=useState(Villes[0])
    const dispatch = useDispatch()
    const Recherche=(e)=>{
        e.preventDefault()
        dispatch({type:"Recherch",Data:{VilleD:VD,VilleA:VA}})
    }

    return <form onSubmit={Recherche}>
        <label>Ville Depart</label><select onChange={e=>setVD(e.target.value)}>
            {Villes.map((v,i)=>{return <option key={i}>{v}</option>})}
        </select>
        <label>Ville Arrive</label><select onChange={e=>setVA(e.target.value)}>
            {Villes.map((v,i)=>{return <option key={i}>{v}</option>})}
        </select>
        <button type="submit">rechercher</button>

    </form>
}
export default Recherch