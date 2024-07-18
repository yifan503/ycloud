import styles from './sampleSale.module.css';

export default function Product(props) {
    return <>
        <div className={styles.product}>
            <img src='/image/sample_item.jpg' alt='table' className={styles.item} />
            <div className={styles.product_title}>ABC系列床头柜</div>
            <p className={styles.product_description}>产地：意大利</p>
        </div>
    </>
}