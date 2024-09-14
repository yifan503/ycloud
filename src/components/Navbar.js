'use client'

import Link from "next/link";
import styles from './Navbar.module.css'
import { useEffect, useRef, useState } from "react";

const MENUITEM = [
    // '家具展品出售 Sample Sale',
    '衣帽间定制',
    '柜体定制',
    '门类定制',
    '全屋定制'
]

const MENUITEM_PHONE = [
    // '家具展品出售',
    '衣帽间定制',
    '柜体定制',
    '门类定制',
    '全屋定制',
    '案例欣赏',
    '联系我们',
    // '线下展厅'
]

const MENUHREF = [
    // '/sampleSale',
    '/closet',
    '/cabinet',
    '/door',
    '/wholeHouse',
]

const MENUHREF_PHONE = [
    '/closet',
    '/cabinet',
    '/door',
    '/wholeHouse',
    '/cases',
    '/contact_info',
    // '/showroom'
]

export default function Navbar() {
    const [openSideBar, setSideBarOpen] = useState(false)
    const [phoneMenu, setPhoneMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const toggleRef = useRef(null)
    const toggleRef_phone = useRef(null)
    const menuRef = useRef(null)
    const searchRef = useRef(null)

    const handleMenuClick = () => {
        setSideBarOpen(!openSideBar)
    }

    const handlePhoneMenuCLick = () => {
        setPhoneMenuOpen(!phoneMenu)
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
        if (toggleRef_phone.current && !toggleRef_phone.current.contains(e.target)) {
            setPhoneMenuOpen(false)
        }
    }
    const togglePos = toggleRef.current?.getBoundingClientRect()
    const togglePos_phone = toggleRef_phone.current?.getBoundingClientRect()

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
                        <svg t="1699205489318" ref={toggleRef} className={styles.close} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3260" width="1.2rem" height="1.2rem"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#ffffff" p-id="3261"></path></svg>
                        目录
                        {
                            openSideBar &&
                            <ul className={styles.sidebar}>
                                <li className={styles.close}>
                                    <svg t="1724084076409" className={styles.close_icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7184" width="40" height="40"><path d="M512 1024C228.072727 1024 0 795.927273 0 512S228.072727 0 512 0s512 228.072727 512 512-228.072727 512-512 512z m0-46.545455c256 0 465.454545-209.454545 465.454545-465.454545S768 46.545455 512 46.545455 46.545455 256 46.545455 512s209.454545 465.454545 465.454545 465.454545z m0-514.327272l148.945455-148.945455c13.963636-13.963636 34.909091-13.963636 48.872727 0 13.963636 13.963636 13.963636 34.909091 0 48.872727L560.872727 512l148.945455 148.945455c13.963636 13.963636 13.963636 34.909091 0 48.872727-13.963636 13.963636-34.909091 13.963636-48.872727 0L512 560.872727l-148.945455 148.945455c-13.963636 13.963636-34.909091 13.963636-48.872727 0-13.963636-13.963636-13.963636-34.909091 0-48.872727l148.945455-148.945455-148.945455-148.945455c-13.963636-13.963636-13.963636-34.909091 0-48.872727 13.963636-13.963636 34.909091-13.963636 48.872727 0l148.945455 148.945455z" fill="#333333" p-id="7185"></path></svg>

                                </li>
                                {MENUITEM.map((item, index) =>
                                    <Link href={MENUHREF[index]} className={styles.custom_link2} key={item}>
                                        <li className={styles.sidebarItem} style={{ '--fade-delay': `${index * 100}ms` }} key={index}>{item}</li>
                                    </Link>
                                )}
                            </ul>
                        }
                        {
                            openSideBar && <div className={styles.back} />
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

            <nav className={styles.navBar_phone}>
                <div className={styles.title_phone}>
                    <Link href='/' style={{ textDecoration: 'none', color: 'aliceblue' }}><h1>YIYUN</h1></Link>
                </div>
                <div className={styles.icon} ref={toggleRef_phone} onClick={handlePhoneMenuCLick}>
                    <svg t="1699205489318" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3260" width="1.8rem" height="1.8rem"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#ffffff" p-id="3261"></path></svg>
                    {
                        phoneMenu &&
                        <ul className={styles.sidebar_phone} >
                            <li className={styles.close}>
                                <svg t="1724084076409" className={styles.close_icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7184" width="40" height="40"><path d="M512 1024C228.072727 1024 0 795.927273 0 512S228.072727 0 512 0s512 228.072727 512 512-228.072727 512-512 512z m0-46.545455c256 0 465.454545-209.454545 465.454545-465.454545S768 46.545455 512 46.545455 46.545455 256 46.545455 512s209.454545 465.454545 465.454545 465.454545z m0-514.327272l148.945455-148.945455c13.963636-13.963636 34.909091-13.963636 48.872727 0 13.963636 13.963636 13.963636 34.909091 0 48.872727L560.872727 512l148.945455 148.945455c13.963636 13.963636 13.963636 34.909091 0 48.872727-13.963636 13.963636-34.909091 13.963636-48.872727 0L512 560.872727l-148.945455 148.945455c-13.963636 13.963636-34.909091 13.963636-48.872727 0-13.963636-13.963636-13.963636-34.909091 0-48.872727l148.945455-148.945455-148.945455-148.945455c-13.963636-13.963636-13.963636-34.909091 0-48.872727 13.963636-13.963636 34.909091-13.963636 48.872727 0l148.945455 148.945455z" fill="#333333" p-id="7185"></path></svg>
                            </li>
                            {MENUITEM_PHONE.map((item, index) =>
                                <Link href={MENUHREF_PHONE[index]} className={styles.custom_link} key={item}>
                                    <li className={styles.sidebarItem_phone} style={{ '--fade-delay': `${index * 100}ms` }} key={index}>
                                        <span>{item}</span>
                                        <svg t="1725016644924" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13263" width="30" height="30"><path d="M615.978667 536.192a34.133333 34.133333 0 0 0 0-48.298667l-2.986667-2.986666a11.733333 11.733333 0 0 0-0.512-0.426667c-1.194667-1.109333-2.432-2.133333-3.413333-3.413333a49.066667 49.066667 0 0 0-2.773334-2.986667l-168.32-168.277333a12.8 12.8 0 0 0-18.090666 0l-18.090667 18.133333a12.8 12.8 0 0 0 0 18.090667l156.928 156.928a12.8 12.8 0 0 1 0 18.090666L401.792 677.973333a12.8 12.8 0 0 0 0 18.090667l18.090667 18.133333a12.8 12.8 0 0 0 18.090666 0l178.005334-178.005333z" fill="#515151" p-id="13264"></path></svg>
                                    </li>
                                </Link>
                            )}
                            <div className={styles.attachment}>
                                <div className={styles.intro}>
                                    <li>上海亿云 始于2003年</li>
                                    <li>别墅｜豪宅｜高端定制整体解决方案</li>
                                    <li>全品类配套一站式私人订制服务</li>
                                    {/* <li>联系电话：13901839676 梁先生</li> */}
                                </div>
                                <img src='https://cdn.yiyunjiancai.com/qr_code.jpg?imageslim' alt='qrcode' className={styles.qr} />

                            </div>


                        </ul>
                    }
                </div>

            </nav>

        </>
    )
};
