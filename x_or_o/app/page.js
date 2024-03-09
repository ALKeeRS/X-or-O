"use client";

import { useEffect, useState } from 'react'
import Cells from './componant/Cells'
import styles from './page.module.css'


export default function Home() {
    const [cells , setCells]=useState(["","","","","","","","",""]);

    const winArr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const [go , setGo] = useState("circal"); 
    const [winMassage , setMassage] = useState (""); 

    useEffect(()=>{
        winArr.forEach((comps) =>{
            const circalWin =  comps.every(
                (cell) => cells[cell] === "circal" );
            const crossWin =  comps.every((cell)=> cells[cell] === "circal");
            if(circalWin){
                setMassage("circal win"); 
            }else if(crossWin){   
                setMassage("cross win");
            }
        })
    },[cells])

    return (
        <main className='container'>
            <div className="gamebord">
                {cells.map((cell , index)=>(
                    <Cells 
                        id={index}
                        go={go}
                        setGo={setGo} 
                        cells={cells} 
                        setCells={setCells}
                        cell={cell}
                        key={index} 
                        winMassage = {winMassage}
                    />
                ))}
            </div>
            <div>{winMassage}</div>
            {!winMassage &&  <div>  {`it is ${go} turn`} </div>}
        </main>
    )
}
