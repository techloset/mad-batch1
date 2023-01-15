import Head from 'next/head'
import Image from 'next/image'
import Todos from '../components/todos/Todos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>
          Firebase setup
        </h1>
        <Todos/>
    </div>
  )
}

