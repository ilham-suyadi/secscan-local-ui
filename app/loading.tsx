import styles from './components/style/loading.module.css'

export default function loading(){
    return(
        <div className='h-screen flex justify-center items-center'>
            <div className={styles.loading}></div>
        </div>
    )
}