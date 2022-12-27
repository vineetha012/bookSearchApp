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
            <div style={{ backgroundColor: "rgb(180, 95, 15)" }}>
                <h1 className='header'>BOOK SEARCH</h1>
            </div>
            <form onClick={(e) => searchHandler(e)}>
                <div style={{margin:"auto",marginTop:"10px",marginBottom:"20px",width:"100%"}}>
                    <input className='searchInput' type={'text'} placeholder="Search for a book" onChange={(e) => setSearchQueary(e.target.value)} />
                    <button type='submit'>Search</button>
                </div>

            </form>
            <div className='cardcontainer'>
                {booksData.length > 0 ?
                    booksData.map((book, index) => {
                        return (
                            <div key={index}>
                                {/* {console.log(book.volumeInfo)} */}
                                <BookCard book={book} />
                            </div>
                        )


                    })

                    : <div>Search A book</div>
                }
            </div>
        </div>
    )
}