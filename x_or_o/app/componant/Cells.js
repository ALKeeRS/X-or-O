
const Cells = ({go , setGo , id , cells , setCells , cell , winMassage})=> {
    const handelClick = (e)=>{

        const token = !! cells[id];
        if(winMassage){
            return
        }
        if(!token){
            
            if(go === "circal"){
                handel_Cell_Change("circal");
                setGo("cross")
            }else if (go === "cross"){
                handel_Cell_Change("cross");
                setGo("circal")
            }
        }
    }  
    const handel_Cell_Change = (cellToChange)=>{
        let copy_cell = [...cells];
        copy_cell[id]=cellToChange;
        setCells(copy_cell);
    }
  return (
    <div className="squre" onClick={handelClick}>
        <div className={cell}> {cell ? (cell ==="circal"? "O" :  "X"):""} </div>  
    </div>
  )
}
export default Cells;