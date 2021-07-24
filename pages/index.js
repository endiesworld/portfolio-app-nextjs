import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Homepage from './homePage' ;


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>emmanuel okoro</title>
        <meta name="description" content="emmanuel okoro portfolio app" />
      </Head>

      <main className='w-screen sm:mx-auto min-h-full '>
        <Homepage />
      </main>
    </div>
  )
}
