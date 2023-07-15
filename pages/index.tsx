import Search from '@/src/components/Search/Search'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Search />
        <div className={styles.articles}>
          <div className={styles.article}>
              <h3>Title of the article</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eaque illo rem earum praesentium sapiente.
              </p>
              <span>Published at: 22nd July 2003</span> 
              <Link href={"/blog"}>Read more</Link>
          </div>
       
        </div>
    </>
  )
}