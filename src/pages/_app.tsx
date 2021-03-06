import '../styles/global.scss'
import styles from'../styles/app.module.scss'

import { Header } from '../componentes/Header'
import { Player } from '../componentes/Player'

function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player/>
    </div>
  )
}

export default MyApp
