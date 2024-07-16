import styles from './cases.module.css'
import TypeImage from './typesImage'

export default function CasesPage() {
    return (
        <>
            <div className={styles.title}>精选现场案例</div>
            <div className={styles.galleryContainer}>
                <TypeImage src='/image/cupboard_type.png' title='清溪花园别墅299号' id='1' />
                <TypeImage src='/image/cupboard.png' title='西郊庄园别墅' />
                <TypeImage src='/image/cupboard_type.png' title='金虹别墅' />
            </div>
            <div className={styles.galleryContainer2}>
                <TypeImage src='/image/cupboard_type.png' title='御翠园别墅' />
                <TypeImage src='/image/cupboard.png' title='玫瑰园别墅' />
            </div>

        </>
    )
}