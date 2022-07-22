import React, { useState } from 'react'
import data from './data'
import Faq from './Faq'
import style from './faqs.module.css'



export default function Faqs() {


const [faqs, setFaqs] = useState(data)

  return (
    <main className={style.container}>
        <section className={style.faqs}>
        <h2>FAQs</h2>
        {faqs.map(faq =><Faq key={faq.id} {...faq}/>)}
        </section>

    </main>
  )
}
