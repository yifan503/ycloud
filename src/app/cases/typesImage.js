import styles from './cases.module.css'

export default function TypeImage(props) {
    return (
        <div className={styles.img_container}>
            <img src={props.src} alt="table image" className={styles.image} />

        </div>
    )
}