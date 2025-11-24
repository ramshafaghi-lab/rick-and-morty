import React from 'react'
import  styled  from "./characterCard.module.css"
import Image from 'next/image';

function CharacterCard() {
  return (
    <div className={styled.chracterCard}>
      <div >
       
      </div>
       {data.map((data)=>(<p>{data.name}</p>)
            )}
    </div>
  )
}

export default CharacterCard ;
