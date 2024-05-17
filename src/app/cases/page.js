import styles from './cases.module.css'
import TypeImage from './typesImage'

export default function CasesPage() {
    return (
        <>
            <div className={styles.galleryContainer}>
                <TypeImage src='/image/cupboard_type.png' />
                <TypeImage src='/image/cupboard.png' />
                <TypeImage src='/image/cupboard_type.png' />
            </div>

        </>
    )
}