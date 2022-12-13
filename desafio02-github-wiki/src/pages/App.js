import gitlogo from '../assets/logo-github.png'
import { Container } from './styles';
import  Input  from '../components/Input'
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import { api } from '../services/api'

function App() {

  const [ currentRepo, setCurrentRepo] = useState('');
  const [ repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    
    const {data} = await api.get(`repos/${currentRepo}`)
    
    if(data.id){
      if(!(repos.find(repo => repo.id === data.id))){
        setRepos(prev => [...prev,data]);
        setCurrentRepo('')
        return
      }else{
        setCurrentRepo('')
        alert('Repositório Já Pertence a Lista')
      }
    }else{
      alert('Repositório não Encontrado')
    }
  }

  const handleRemoveRepo = (ident) => {

    const result = repos.filter(repo => repo.id !== ident)
    
    setRepos(result)
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="Logo GitHub"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}></Button>
      {repos.map( repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={ repo }/> )}
     
    </Container>
  );
}

export default App;
