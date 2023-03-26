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
          <h1 className='text-3xl md:text-5xl py-3'>Alemol AMG</h1>
        </div>

        <div className={`${styles.vistaIndex} `}>  
          <motion.div className='mx-5 my-2 px-3 py-2 text-justify'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.7,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Web de Alemol, preparada para dar información. En proceso. Servirá como profolio.
          </motion.div>

        </div>
      </main>
    </>
  )
}
