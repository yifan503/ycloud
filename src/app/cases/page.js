'use client'

import { useState } from 'react'
import styles from './cases.module.css'
import TypeImage from './typesImage'

export default function CasesPage() {

    const [showDetail, setShow] = useState(false)

    const handleclick = () => {
        setShow(true)
    }

    const closeDetail = () => {
        setShow(false)
    }

    return (
        <>
            <div className={styles.title}>精选现场案例</div>
            <div className={styles.galleryContainer}>
                <TypeImage cb={handleclick} src='/image/qxhy_gate.JPG' title='清溪花园别墅299号' year='2012' project='全屋定制、橱柜、木饰面' />
                <TypeImage cb={handleclick} src='/image/cupboard.png' title='玫瑰园别墅' year='2013' project='全屋定制' />
                <TypeImage cb={handleclick} src='/image/cupboard.png' title='西郊庄园别墅' year='2015' project='衣帽间、橱柜、书柜、双开门' />
                <TypeImage cb={handleclick} src='/image/cupboard_type.png' title='金虹别墅' year='2017' project='酒柜、书柜、木饰面' />
            </div>
            {showDetail && <div className={styles.bg} onClick={closeDetail}>
                <img className={styles.detail_img} src='/image/qxhy_gate.JPG' alt='img' />
            </div>}
        </>
    )
}