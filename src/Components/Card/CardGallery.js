import { useState} from 'react'
import CardList from './CardList'
import "./Card.css"


const CardGallery = () => {
    const [cards,setCards]=useState ([
        {image: "lotus.png", title:'Lotus', author: '', id:1},
        {image: "beach.png", title:'Beach', author: '', id:2},
        {image: "lake.png", title:'Lake', author: '', id:3},
    ])
        return (
        <div className='card-Container' >
        <CardList cards = {cards}/>
        </div>
    )
}

export default CardGallery
 











// function Card() {
//     const cards = ['card1','card2','card2']
//     return (
//             <li>
//   {
//     cards.map(card => <h> {card}</h>)
//   }
//         </li>
       
       
//     )
// }

// export default Card
