import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/src/components/Card'
import Form from '@/src/components/Form'
import { motion, useTransform, useScroll } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  console.log(`
   ###    ##       ######## ##     ##  #######  ##       
  ## ##   ##       ##       ###   ### ##     ## ##       
 ##   ##  ##       ##       #### #### ##     ## ##       
##     ## ##       ######   ## ### ## ##     ## ##       
######### ##       ##       ##     ## ##     ## ##       
##     ## ##       ##       ##     ## ##     ## ##       
##     ## ######## ######## ##     ##  #######  ######## 
`)

  return (
    <>
      <Head>
        <title>AlemolAMG</title>
        <meta name="description" content="Fiesta de cumpleaños #25el25" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <div className={`${styles.headerBar}`}>
          <h1 className='text-3xl md:text-5xl py-3'>#25el25 by Alemol AMG</h1>
        </div>

        <div className={`${styles.vistaIndex} `}>  {/* md:mx-12 lg:mx-24 */}

          <motion.div className='mx-5 my-2 px-3 py-2 text-justify'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.7,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Por mi cumpleaños voy a celebrar una fiesta de cumpleaños en Málaga y en Lucena.
            La idea es poder compartir con vosotros este dia tan especial, el cual coincide tanto el 25 de mi nueva edad como el 25 del dia que la cumplo.
            Para más detalles podeis contactar por telegram con: @AlemolAMG
          </motion.div>

          {/* Tarjetas para el cumpleaños */}
          <motion.div className={`py-3 my-2 grid sm:grid-cols-1 content-evenly`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.7,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Card
              titulo="Fiesta Lucena - 25 de Marzo"
              description="Preparate para la fiesta el día 25 de marzo. Habrá un local donde reunirnos, beber, comer, bailar y ¡saltar!
            Empezará sobre las 18:00 con una merienda mas celebración; la cual se alargará hasta la noche, donde emperazá la marcha nocturna.
            Ubicación del local: Ctra. de Rute, 13, 14900 Lucena, Córdoba."
              className={`${styles.tarjetaMalaga}`}
            ></Card>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.7,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
            <Form></Form>
          </motion.div>

          {/* Añadimos un mapa */}
          <motion.div
            className='mb-5 pb-2 flex justify-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.7,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01]
              }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.0348890529026!2d-4.474678449190985!3d37.41265024058493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d779ed1f8d4a7%3A0x8b6b860e5a8703b!2sConstrucciones%20y%20Contratas%20Cabello%20S.L.!5e0!3m2!1ses!2ses!4v1679345038284!5m2!1ses!2ses"
              width="90%" height="200px" style={{ border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='content-center pt-3'></iframe>
            </motion.div>

        </div>
      </main>
    </>
  )
}
