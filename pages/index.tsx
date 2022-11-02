import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OSM Building Completeness</title>
        <meta name="description" content="Website for research on OSM building completeness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          OSM Building Completeness
        </h1>

        <p className={styles.description}>
          This is the official site for <a href="https://ardieorden.github.io">Ardie Orden</a>&rsquo;s ongoing research project on data completeness of OSM building footprints.
        </p>

        <div className={styles.grid}>
          <a href="/results" className={styles.card}>
            <h2>2022 Results &rarr;</h2>
            <p>OSM data extracted on October 17, 2022.</p>
          </a>

          <a href="https://www.facebook.com/groups/osmph/posts/1437146823289358/" className={styles.card}>
            <h2>2021 Results &rarr;</h2>
            <p>OSM data extracted on May 21, 2021.</p>
          </a>

          <a href="https://mapthegap.thinkingmachin.es/" className={styles.card}>
            <h2>2020 Results &rarr;</h2>
            <p>OSM data extracted on June 13, 2020.</p>
          </a>

          <a href="https://zenodo.org/record/3923033/preview/3.%20Measuring%20OpenStreetMap%20building%20footprint%20completeness%20using%20human%20settlement%20layers.pdf" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>An explanation on the method of calculating the data completeness of OSM building footprints.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
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
      </footer>
    </div>
  )
}
