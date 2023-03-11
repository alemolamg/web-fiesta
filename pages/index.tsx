import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/src/components/Card'
import Form from '@/src/components/Form'
import { motion, useTransform, useScroll } from "framer-motion";
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <>
      <Head>
        <title>AlemolAMG</title>
        <meta name="description" content="Fiesta de cumpleaños #25el25" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <div className='bg-blue-600 text-center'>
          <h1 className='text-4xl py-3'>#25el25 by Alemol AMG</h1>
        </div>

        <div className='lg:mx-6'>

          <motion.div className='mx-5 my-2 px-3 py-2 text-justify'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Por mi cumpleaños voy a celebrar una fiesta de cumpleaños en Lucena y otra en Málaga.
            La idea es poder compartir con vosotros, mis amigos; este dia tan especial, el cual coincide tanto el 25 de mi edad como el 25 del dia que lo celebro.
            Para más detalles podeis contactar por info@alemolamg.com y por telegram con: @AlemolAMG
          </motion.div>

          {/* Tarjetas para el cumpleaños */}
          <motion.div className={`py-3 my-2 grid sm:grid-cols-2 content-evenly`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Card
              titulo="Fiesta Málaga 18 de Marzo"
              description="El cumpleaños se celebra en Málaga durante el día 18. Empezaremos la noche con una parada en el bar El Colmao."
              className={`${styles.tarjetaMalaga}`}
            ></Card>
            <Card
              titulo="Fiesta Lucena 25 de Marzo"
              description="Preparate para la fiesta el día 25 de marzo. Habrá un local donde reunirnos, beber, comer, bailar y ¡saltar!
            Se va a poner una barra libre durante 2 horas."
              className={`${styles.tarjetaLucena}`}
            ></Card>
          </motion.div>

          {/* Formulario */}
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
            }}>
            <Form></Form>
          </motion.div>


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


        </div>
      </main>
    </>
  )
}
