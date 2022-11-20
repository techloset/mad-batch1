import Head from 'next/head'
import Image from 'next/image'
import Counter from '../components/counter/Counter'
import Footer from '../components/footer/Footer'
import StudentsList from '../components/studentsList/StudentsList'
import styles from '../styles/Home.module.css'



export default function Home() {


  return (
    <div className={styles.container}>


{/* <Counter/> */}

{/* <Image
      // loader={myLoader}
      src="/abc.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
     */}

      {/* <StudentsList/> */}
        {/* <h1>
          Main Landing Page 
        </h1>

        <Counter/> */}

        {/* <Footer/> */}
    </div>
  )
}
