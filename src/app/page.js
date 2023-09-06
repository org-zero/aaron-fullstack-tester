import Image from 'next/image'
import styles from './page.module.css'
import Portfolio from './hack/Portfolio'; // Asegúrate de que la ruta sea correcta
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
      <Portfolio />
    
      </div>
    </main>
  )
}
