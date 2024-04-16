import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setData(data.products))
    }, [])
   console.log(data)

     return (
        <div >
             {/* <div className="cards-block">
                 {data?.slice(0, 10).map((item) =>(
                 <div key={item.id} className="cards">
                    <img src={item.thumbnail} alt={item.thumbnail} className="cards-image" />
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <button>comprar</button>
                 </div>))}
             </div> */}
        </div>
    )
}

export default Cards