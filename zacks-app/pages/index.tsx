import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zack's NextJs Experiment</title>
        <meta name='keywords' content='crash course, nextjs, preact, typescript' />
      </Head>
      Welcome to Next Js
    </div>
  )
}

export default Home