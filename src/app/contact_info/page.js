'use client'

import styles from './contact.module.css';

export default function ContactInfo() {

    return (
        <>
            <div className={styles.container}>
                <div>定制流程</div>
                <div>联系我们</div>
                <div>地址：</div>
                <div>电话：</div>
                <div>微信：</div>
            </div>
        </>
    )
}