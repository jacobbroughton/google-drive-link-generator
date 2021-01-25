import { useState, useEffect } from "react"
import moment from "moment"
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [input, setInput] = useState("");
  const [generatedLinks, setGeneratedLinks] = useState([])
  const [lastFormatTime, setLastFormatTime] = useState("")
  // Make a 'format' object, including formatted time and all


  // 2
  const formatLink = (inputValue) => {
    if(inputValue.includes(",")) {
      let inputValueArr = inputValue.split(",")
      for(let i = 0; i < inputValueArr.length; i++) {
        let inputValueChange1 = inputValueArr[i].replace("/file/d/", "/uc?id=");
        let inputValueChange2 = inputValueChange1.replace("/view?usp=sharing", "");
        let inputValueChange3 = inputValueChange2.replace("%20", "");
        setGeneratedLinks(generatedLinks => [...generatedLinks, inputValueChange3])
      }
    } else {
      let inputValueChange1 = inputValue.replace("/file/d/", "/uc?id=");
      let inputValueChange2 = inputValueChange1.replace("/view?usp=sharing", "");
      setGeneratedLinks([inputValueChange2])
    }

  }

  // 1
  const formatLinksClick = (e, inputValue) => {
    let newFormatTime = moment().format('LTS')
    
    setLastFormatTime(newFormatTime)
    setGeneratedLinks([])
    formatLink(inputValue)

    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Batch Image Src Link Formatter For Google Drive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.h1}>Batch Image Src Link Formatter For Google Drive</h1>
      <p className={styles.correctFormatExample}>Your link should be in a format like: <br/>https://drive.google.com/file/d/1Pz_01i2itDW1QZmSMuHen3WZYAJJ3pTV/view?usp=sharing</p>
      <form onSubmit={(e) => formatLinksClick(e, input)} className={styles.form}>
        <input placeholder="https://" value={input} onChange={(e) => setInput(e.target.value)} className={styles.input} />
        <button className={styles.formatLinksButton} type="submit">Generate Link(s)</button>
      </form>
      {
        generatedLinks.length >= 1 &&
        <p><strong>{generatedLinks.length}</strong>&nbsp; Links Formatted</p>
      }
      {
        lastFormatTime && <span className={styles.lastFormatSpan}>Last format: &nbsp;{lastFormatTime}</span>
      }
      
      <span className={styles.span}>
        {generatedLinks.map((generatedLink) => 
        <div className={styles.formattedLinkItem}>
          <img src={generatedLink} className={styles.formattedLinkImage} alt="Formatted Link Image"/>
          <p className={styles.generatedLink} >{generatedLink}</p>     
        </div> 
        )}
      </span>

    </div>
  )
}
