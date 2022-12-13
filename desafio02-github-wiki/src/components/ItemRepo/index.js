import React from 'react'

import { ItemContainer } from './styles'

function ItemRepo( {handleRemoveRepo,repo} ) {
  
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  } 

  return (
    <ItemContainer onClick={handleRemove}>
      <h3> {repo.name} </h3>
      <p> {repo.full_name}  </p>
      <a href={repo.html_url} target="_blank" rel="noreferrer"> Ver Repositório </a> <br/>
      <a href="#" className='remover' rel="noreferrer"> Remover </a>
      <hr />
    </ItemContainer>
  )
}


export default ItemRepo;