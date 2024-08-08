'use client'

import Link from "next/link";
import styles from './Navbar.module.css'
import { useEffect, useRef, useState } from "react";

const MENUITEM = [
    '家具展品出售 Sample Sale',
    '衣帽间定制',
    '柜体定制',
    '门类定制',
    '全屋定制'
]

const MENUHREF = [
    '/sampleSale',
    '/closet',
    '/cabinet',
    '/sampleSale',
    '/sampleSale',
]

export default function Navbar() {
    const [openSideBar, setSideBarOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const toggleRef = useRef(null)
    const menuRef = useRef(null)
    const searchRef = useRef(null)

    const handleMenuClick = () => {
        setSideBarOpen(!openSideBar)
    }

    const handleSearchClick = () => {
        setSearchOpen(!searchOpen)
    }

    const handleOutsideClick = e => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setSideBarOpen(false)
        }
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchOpen(false)
        }
    }
    const togglePos = toggleRef.current?.getBoundingClientRect()

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true)
        return () => {
            document.removeEventListener('click', handleOutsideClick, true)
        }
    }, [])
    return (
        <>
            <nav className={styles.navBar} id="navbar">
                <div className={styles.left_content}>
                    <div className={styles.left_text} style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                        ref={menuRef}
                        onClick={handleMenuClick}
                    >
                        <svg t="1699205489318" ref={toggleRef} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3260" width="1.2rem" height="1.2rem"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#ffffff" p-id="3261"></path></svg>
                        目录
                        {
                            openSideBar &&
                            <ul className={styles.sidebar} style={{ position: 'fixed', top: togglePos?.bottom || 0, left: togglePos?.left || 0 }}>
                                {MENUITEM.map((item, index) =>
                                    <Link href={MENUHREF[index]} className={styles.custom_link}>
                                        <li className={styles.sidebarItem} style={{ '--fade-delay': `${index * 100}ms` }} key={index}>{item}</li>
                                    </Link>
                                )}
                            </ul>
                        }
                    </div>
                    <div className={styles.left_text} ref={searchRef}>
                        <svg t="1699205132959" onClick={handleSearchClick} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1.0rem" height="1.0rem" style={{ transform: 'translateY(2px)', paddingRight: '5px' }}>
                            <path d="M947.2 902.4L736 691.2c64-64 96-147.2 96-243.2 0-211.2-172.8-384-384-384S64 236.8 64 448s172.8 384 384 384c96 0 179.2-32 249.6-89.6l211.2 211.2c12.8 12.8 32 12.8 44.8 0s6.4-38.4-6.4-51.2zM128 448c0-179.2 140.8-320 320-320s320 140.8 320 320-140.8 320-320 320-320-140.8-320-320z" fill="#ffffff"></path>
                        </svg>
                        {/* {searchOpen && <input className={styles.searchBar}></input>} */}
                        <input placeholder="搜索..." className={styles.searchBar} style={{
                            '--searchBar-width': searchOpen ? '200px' : '0',
                            '--searchBar-opacity': searchOpen ? '1' : '0',
                            '--searchBar-padding': searchOpen ? '2px' : '0'
                        }} />
                        {!searchOpen && <span onClick={handleSearchClick} >搜索</span>}
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.title_text}>
                        <Link href='/' style={{ textDecoration: 'none', color: 'aliceblue' }}>YIYUN</Link>
                    </div>
                    <div className={styles.label_text}>
                        <Link href='/' style={{ textDecoration: 'none', color: 'aliceblue' }}>上海亿云高端全屋定制</Link>
                    </div>

                </div>
                <div className={styles.right_content}>
                    {/* <Link href='/about' className={styles.custom_link}>公司介绍</Link> */}
                    <Link href='/contact_info' className={styles.custom_link}>联系我们</Link>
                    <Link href='/cases' className={styles.custom_link}>案例欣赏</Link>
                    <Link href='/showroom' className={styles.custom_link}>线下展厅</Link>
                </div>
            </nav >


        </>
    )
};
