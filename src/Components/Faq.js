import React, { useState } from 'react'
import style from './faq.module.css'

export default function Faq({id,tittle,des}) {
  const [toggle , setToggle] = useState(true)
  return (
    <article className={style.faq}>
      <div>
      <h4>{tittle}</h4>
      <button onClick={()=>{setToggle(!toggle)}}>{toggle ? '-' : '+'}</button>
      </div>
      {toggle && <p>{des}</p>}
    </article>
  )
}
