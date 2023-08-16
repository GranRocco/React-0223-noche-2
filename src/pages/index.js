import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Products from '@/components/organisms/Products'
import About from '@/components/organisms/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>freghness</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap" rel="stylesheet"/>
      </Head>
      <header>
  
     </header>
      <main >
       
      </main>
      <section>
        <Products/>
              
      </section>
      <section>
        <About/>
              
      </section>
      
      <footer>
       
      </footer>
    </>
  )
}
