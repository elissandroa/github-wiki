import { useState } from 'react';
import gitlogo from '../assets/github.png';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api';

import {Container} from './styles'


export default function App() {

const [currentRepo, setCurrentRepo] = useState('');  
const [repos, setRepos] = useState([]);

function handleRemoveRepo(deleteRepo){
     setRepos(repos.filter(repos => repos.id !== deleteRepo.id));
}


const handleSearchRepo = async () => {
  const isEmpty = currentRepo === '';
  if(!isEmpty){
  const {data} = await api.get(`repos/${currentRepo}`)
   
  if(data.id){
    
    const isExist = repos.find(repo => repo.id === data.id);
    


    if(!isExist && !isEmpty){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
    } 
  } 
  alert('Repositório já cadastrado')
}
}


  return (
    <Container>
       <img src={gitlogo} width={72} height={72} alt='Logo GitHub'/>
       <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
       <Button onClick={handleSearchRepo}/> 
       {repos.map(repo => <ItemRepo  repo={repo} handleRemoveRepo={() => handleRemoveRepo(repo)}/>)}
      
    </Container>
    );
}


