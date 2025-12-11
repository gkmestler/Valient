import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Statistics from '@/components/Statistics'
import AboutPE from '@/components/AboutPE'
import Leadership from '@/components/Leadership'
import Advisors from '@/components/Advisors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <AboutPE />
        <Leadership />
        <Advisors />
      </main>
      <Footer />
    </>
  )
}