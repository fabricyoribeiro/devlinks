import './networks.css'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'

export default function Networks(){
  return (
    <div className='admin-container'>
      <Header />

      <h1 className='title-social'>Suas redes sociais</h1>

      <form className='form'>
        <label>Link do Facebook</label>
        <Input 
          placeholder='Digite a url do facebook'
        />

        <label>Link do Instagram</label>
        <Input 
          placeholder='Digite a url do instagram'
        />

        <label>Link do Youtube</label>
        <Input 
          placeholder='Digite a url do youtube'
        />

        <button type='submit' className='btn-register'>
          Salvar links <MdAddLink size={24} color='#fff' />
        </button>
      </form>
    </div>
  )
}