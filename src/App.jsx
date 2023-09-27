import './assets/style/main.scss'

import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Teaser } from './cmps/Teaser'
import { Comments } from './cmps/Comments'

export function App() {
  return (

    <section className='app'>
      <AppHeader />
      <main>
        <Hero />
        <Teaser />
        <Comments />
      </main>
      {/* <AppFooter /> */}
    </section>
  )
}
