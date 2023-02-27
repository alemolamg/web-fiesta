import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/src/components/Card'
import Form from '@/src/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AlemolAMG</title>
        <meta name="description" content="Fiesta de cumpleaños #25el25" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <div className='bg-blue-600 text-center'>
          <h1 className='text-3xl py-3'>#25el25 by Alemol AMG</h1>
        </div>

        <div className='lg:mx-5'>

        <div className='mx-3 my-2'>
          Por mi cumpleaños voy a celebrar una fiesta de cumpleaños en Lucena y otra en Málaga.
          La idea es poder compartir con vosotros, mis amigos; este dia tan especial, el cual coincide tanto el 25 de mi edad como el 25 del dia que lo celebro.
          Para más detalles podeis contactar por info@alemolamg.com y por telegram con: @AlemolAMG
          
        </div>

        {/* Tarjetas para el cumpleaños */}
        <div className='py-3 my-2 grid md:grid-cols-2 content-evenly '>
          <Card
            titulo="Fiesta Málaga 18 de Marzo"
            description="El cumpleaños se celebra en Málaga durante el día 18."
            className={`${styles.tarjetaMalaga}`}
          ></Card>
          <Card
            titulo="Fiesta Lucena 25 de Marzo"
            description="Preparate para la fiesta el día 25 de marzo. Abrá un local donde reunirnos, beber, comer, bailar y ¡saltar!
            Se va a poner una barra libre durante 2 horas."
            className={`${styles.tarjetaLucena}`}
          ></Card>
        </div>

        {/* Formulario */}
        {/* <div className=' bg-stone-400'>
          <h2 className='text-xl'>Formulario de Registro</h2>
          <div>
            <p className=''>Proximamente...</p>
          </div>
        </div> */}

        <div>
          <Form></Form>
        </div>


        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/favicon-Alemol.jpg"
            alt="Next.js Logo"
            width={180}
            height={180}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
          </div>
      </main>
    </>
  )
}
