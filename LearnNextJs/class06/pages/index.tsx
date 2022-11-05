import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from '../components/button/Button'
import CardItem from '../components/cardItem/CardItem'
import Footer from '../components/footer/Footer'
import StudentsList from '../components/studentsList/StudentList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
     <StudentsList/>
     {/* <hr/> */}
 
     {/* <Button color="red" buttonTitle="index Button" data="something"  />
    
     <CardItem showTitle={true} data="data to card item"/>

     <Footer/> */}
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
