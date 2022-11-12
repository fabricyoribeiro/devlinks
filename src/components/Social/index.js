import './social.css'

export function Social({url, children}){
  return(
    <a className='social' href={url} target='_blank' rel='noopener noreferrer'>  
      {children}
    </a>
  )
}