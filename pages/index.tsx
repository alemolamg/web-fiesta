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

  return (
    <>
      <Head>
        <title>AlemolAMG</title>
        <meta name="description" content="Fiesta de cumpleaños #25el25" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <div className={`${styles.headerBar}`}>
          <h1 className='text-4xl py-3'>#25el25 by Alemol AMG</h1>
        </div>

        <div className='lg:mx-6'>

          <motion.div className='mx-5 my-2 px-3 py-2 text-justify'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.7,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Por mi cumpleaños voy a celebrar una fiesta de cumpleaños en Lucena y otra en Málaga.
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
            {/* <Card
              titulo="Fiesta Málaga 18 de Marzo - Inscripción cierra hoy a las 23:00"
              description="El cumpleaños se celebra en Málaga durante el día 18. Empezaremos por la tarde con un plan de playa sobre las 17. Allí nos tomaremos una tarta o similar como 
              celebración del cumpleaños. Una vez terminados en la playa, sobre las 9 hasta las 11 se dejará tiempo para cambiarse y prepararse para salir por la noche. Se empezará por El Colmado, un chupito en el Alquimia 
              y por supuesto; el correspondiente aliento de dragón cumpleañero."
              className={`${styles.tarjetaMalaga}`}
            ></Card> */}
            <Card
              titulo="Fiesta Lucena 25 de Marzo"
              description="Preparate para la fiesta el día 25 de marzo. Habrá un local donde reunirnos, beber, comer, bailar y ¡saltar!
            Empezará sobre las 18:00 con una merienda mas celebración; la cual se alargará hasta la noche, donde emperazá la marcha nocturna."
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

        </div>
      </main>
    </>
  )
}
