import PageTable from './PageTable';
import React, { useState, useEffect } from 'react'

const Table = () => {
    const url="https://rocky-shelf-07371.herokuapp.com/"
    const [data3, setData3] = useState([]);
    useEffect(() => {
        fetch(url+"table").then(res => res.json()).then((res) => {
            console.log(res)
            setData3(res)
        })

    }, [])

    return (
        <div className='container-fluid pt-5'>
            <h2 className='text-center'>Overall Report with detailed comments</h2>


            <PageTable  data3={data3}/>
        </div>

    )
}

export default Table