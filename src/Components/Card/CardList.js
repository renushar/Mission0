import React from 'react';
import '../Card/Card.css'


const CardList =({cards}) => {
    return (
      <card className= 'card-bg'> 
      {cards.map ((card) => (
    <div className = 'card-border'    
    key ={card.id}>
        <img src= {card.image}  alt ='' />
        <div className= 'title' style = {{ border: '1px solid #c5d8c5',margin: '0px'}} >
        {card.title} {card.author}
        </div>
    </div>
 ))}

      </card>  
    )
}

export default CardList
