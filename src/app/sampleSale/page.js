import Link from "next/link";
import Product from './product';
import styles from './sampleSale.module.css';

export default function SampleSale() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title_row}>
                    <img src='/image/sample.jpg' alt='table' className={styles.img} />
                    <div>
                        <h1>sample sale</h1>
                        <p>折扣价卖一些展品</p>
                    </div>
                </div>
                <div className={styles.eng_row}>
                    <h2 className={styles.eng_title} >For every space</h2>
                    <div className={styles.text}>我们的室内、户外和厨房系列，凭借意大利制造的传统工艺和多元设计视角，为客厅、餐厅、卧室、厨房以及各个过渡空间增添了丰富的色彩。</div>
                </div>
                <div className={styles.product_container}>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    )
}