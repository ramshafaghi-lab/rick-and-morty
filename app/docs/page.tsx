import React from 'react'
import Test from '../component/CharacterCard'

function onClick(a: number , b: number): number{
return a+b
}

const DocsPage = () => {

    // console.log(props)
  return (
    <div>
      <Test name='ali' age={24} hasChild ={true}  onClick={onClick}/>
    </div>
  )
}

export default DocsPage
