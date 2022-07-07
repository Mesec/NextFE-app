import type { NextPage } from 'next'
import axios from 'axios'
import styles from '../styles/Home.module.css'

const Home: NextPage = ():JSX.Element => {
  const testFunction =():void=> {
    axios.get('http://localhost:4000/user')
    .then(res => {
      console.log(res)
    })
  }

  return (
    <div className={styles.container}>
      <h1>tests</h1>
      <button onClick={testFunction}>API CALL TEST</button>
    </div>
  )
}

export default Home
