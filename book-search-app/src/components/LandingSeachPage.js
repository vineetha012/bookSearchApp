import React, { useState } from 'react'
import axios from 'axios'
import { BookCard } from './bookcard'
export const LanndingPage = () => {
    const [searchQueary, setSearchQueary] = useState('')
    const [booksData, setBooksData] = useState([])
    const searchHandler = async (e) => {
        e.preventDefault()
        if (searchHandler != "") {
            await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQueary}`).then((res) => {
                console.log(res.data.items)
                setBooksData(res.data.items)
            })

        }


    }
    console.log(booksData.length)
    return (
        <div>
            <div className='headerBackground'>
                <h1 className='header' >BOOK SEARCH</h1>
            </div>
            <form onClick={(e) => searchHandler(e)}>
                <div style={{margin:"auto"}}>
                    <input className='searchInput' type={'text'} placeholder="Search for a book" onChange={(e) => setSearchQueary(e.target.value)} />
                    <button className='submit' type='submit'>Search</button>
                </div>

            </form>
            <div style={{display:"flex" ,width:"100%"}}>
                
                {booksData.length > 0 ?
                    <div  className='cardcontainer'>
                        {
                            booksData.map((book, index) => {
                                return (
                                    <div key={index}>
                                        {/* {console.log(book.volumeInfo)} */}
                                        <BookCard book={book} />
                                    </div>
                                )
        
        
                            })
                        }
                    </div>
                    : <div style={{textAlign:"center",color:"white",margin:"auto"}}>Search A book</div>
                }
            </div>
        </div>
    )
}