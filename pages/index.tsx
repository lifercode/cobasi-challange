import type { NextPage } from 'next'
import Head from 'next/head'
import 'animate.css'

import Header from '../components/Home/Header'
import SectionDonate from '../components/Home/SectionDonate'
import SectionFeatured from '../components/Home/SectionFeatured'
import SectionTimeline from '../components/Home/SectionTimeline'
import SectionThanks from '../components/Home/SectionThanks'
import Footer from '../components/Home/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cobasi - Challenge</title>
        <meta name="description" content="Aniversário 36 anos" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <SectionFeatured />
        <SectionDonate />
        <SectionTimeline />
        <SectionThanks />
        <Footer />
      </main>
    </div>
  )
}

export default Home
