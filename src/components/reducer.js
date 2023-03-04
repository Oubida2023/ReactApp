import voyages from "./Data";
const InitialeState = {
    Voyages:voyages
}

const reducer=(state=InitialeState,action)=>{
    
    switch(action.type){
        case "Recherch":
            const voyagesR = voyages.filter((e)=>{return e.VilleDepart===action.Data.VilleD && e.VilleArrive===action.Data.VilleA})
            return {...state,Voyages:voyagesR}
        case "Add":
            return {...state,Voyages:state.Voyages.concat(action.Data)}
        case "Delete":
            let V = (state.Voyages).filter((v)=>{return v.Code!==Number(action.Data)})
            return {...state,Voyages:V}
    }
    return state

}
export default reducer;