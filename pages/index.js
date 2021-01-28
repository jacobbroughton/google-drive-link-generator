import { useState, useEffect, useRef } from "react"
// import moment from "moment"
import LinkForm from "./components/LinkForm/LinkForm";
import LinkList from "./components/LinkList/LinkList";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [generatedLinks, setGeneratedLinks] = useState([])
  const [lastFormatTime, setLastFormatTime] = useState("")

  return (
    <div className={styles.container}>
      <Head>
        <title>Batch Image Src Link Formatter For Google Drive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LinkForm 
      setGeneratedLinks={setGeneratedLinks}
      setLastFormatTime={setLastFormatTime}
      />

      { generatedLinks.length !== 0 && 
        <LinkList 
        generatedLinks={generatedLinks}
        lastFormatTime={lastFormatTime}
        /> 
      }


    </div>
  )
}
