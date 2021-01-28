import { useState, useEffect, useRef } from "react";
import moment from "moment"
import styles from "../../../styles/LinkForm.module.css";

const LinkForm = ({ setGeneratedLinks, setLastFormatTime }) => {

    const [input, setInput] = useState("");

      // 2
  const formatLink = (inputValue) => {
    if (inputValue.includes(",")) {
      let inputValueArr = inputValue.split(",")
      for (let i = 0; i < inputValueArr.length; i++) {
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

  const clearButtonClick = (e) => {
    setInput("")
    setGeneratedLinks([])

    e.preventDefault
  }

    return (
        <>
        <h1 className={styles.h1}>Batch Image Src Link Formatter For Google Drive</h1>
        <p className={styles.correctFormatExample}>Your link should be in a format like: <br />https://drive.google.com/file/d/1Pz_01i2itDW1QZmSMuHen3WZYAJJ3pTV/view?usp=sharing</p>
        <form onSubmit={(e) => formatLinksClick(e, input)} className={styles.form}>
          <input placeholder="https://" value={input} onChange={(e) => setInput(e.target.value)} className={styles.input} />
          <button className={styles.formatLinksButton} type="submit">Generate Link(s)</button>
          <button className={styles.clearButton} type="reset" onClick={(e) => clearButtonClick(e)}>Clear</button>
        </form>
        </>
    )
}

export default LinkForm;