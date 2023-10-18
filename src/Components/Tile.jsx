import React from 'react'

function Tile({className, value, onClick ,playerTurn}) {
    let howerClass = null;
    if(value == null && playerTurn != null){
        howerClass = `${playerTurn.toLowerCase()}-hover`;
    }
    return (
        <div 
        onClick={onClick}
        className={`tile ${className} ${howerClass}`
        }>
            {value}
        </div>
    )
}

export default Tile