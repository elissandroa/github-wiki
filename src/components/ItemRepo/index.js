import React from 'react'
import { ItemContainer } from './styles'


export default function ItemRepo({repo, handleRemoveRepo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blanck'>Ver repositório</a><br/>
        <button onClick={handleRemoveRepo} className='remover'>remover</button>
        <hr />
    </ItemContainer>
  )
}
