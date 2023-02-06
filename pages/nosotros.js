import Image from 'next/image'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA, tienda de música'}
    >
        <main className='contenedor'>
          <h1 className='heading'>Nosotros</h1>

          <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' width={1000} height={800} alt='imagen sobre nosotros' />

            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae a nostrum voluptatibus minus cum fugiat eligendi corporis libero quam amet incidunt odit magni saepe voluptas, ullam necessitatibus explicabo sit ipsa!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugiat similique debitis, suscipit architecto dicta accusantium quaerat ipsam dolores natus earum nostrum ullam perferendis deleniti magnam, enim quae corrupti voluptas?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatem eveniet unde incidunt perspiciatis, beatae fugit iusto in esse ea labore ad assumenda a delectus sequi sed officiis et cumque.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros