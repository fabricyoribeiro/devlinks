import './home.css'

import { Social } from '../../components/Social'

import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

export default function Home(){
  return(
    <div className='home-container'>
      <h1>Fabricyo Ribeiro</h1>
      <span>Veja meus links 👇</span>

      <main className='links'>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Canal no youtube</p>
          </a>
        </section>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Canal no youtube</p>
          </a>
        </section>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Canal no youtube</p>
          </a>
        </section>

        <footer>
          <Social url='face'>
            <FaFacebook size={35} color='#FFF' />
          </Social>

          <Social url='face'>
            <FaInstagram size={35} color='#FFF' />
          </Social>
          
          <Social url='face'>
            <FaYoutube size={35} color='#FFF' />
          </Social>
        </footer>
      </main>
    </div>
  )
    
  
}