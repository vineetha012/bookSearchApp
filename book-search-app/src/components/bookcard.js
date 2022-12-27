import React, { useState } from "react";
import {Link} from 'react-router-dom'
export const BookCard = ({ book }) => {
    const [focus,setFocus]=useState(false)
    console.log(book.volumeInfo)
    let imagelink = book.volumeInfo.imageLinks
    let bgImage = book.volumeInfo.imageLinks.smallThumbnail
    let Author=(book.volumeInfo.authors)[0]
    let pageCount= book.volumeInfo.pageCount
    let ratingsCount=book.volumeInfo.ratingsCount
    let additionalInfo=book.volumeInfo.infoLink
    console.log(pageCount)
    console.log(imagelink ? "yes" : "no")
    const onhover=(e)=>{
        setFocus(!focus)
        console.log(e.target)
    }
    const offHover=(e)=>{
        setFocus(!focus)
    }
    return (
        <> <div style={{ }}>
            <a href={additionalInfo}>
            <div  onMouseEnter={(e)=>onhover(e)} onMouseLeave={(e)=>offHover(e)} className="card" style={{ backgroundImage: `url(${bgImage})` }} >
                <div className="textcontainer" >
                    <p className="title">{book.volumeInfo.title}</p>
                    <div className={focus?'focus':'nofocus'}>
                        <div style={{fontSize:"30px",color:"red",textAlign:"center",marginBottom:"10px"}}>{Author}</div>
                        <div style={{textAlign:"center",marginBottom:"10px"}}>PAGE COUNT :{pageCount}</div>
                        <div style={{textAlign:"center",marginBottom:"10px"}}>RATING:{ratingsCount}</div>
                    </div>
                </div>
                
            </div>
            </a>
            
        </div>


            {/* <div>{book.volumeInfo.title}</div> */}
        </>
    )
}