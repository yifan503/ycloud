'use client'

import { useState } from 'react'
import styles from './cases.module.css'
import TypeImage from './typesImage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';

import Slider from "react-slick";

export default function CasesPage() {

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <svg className={className} style={{ ...style, display: 'block' }} onClick={onClick} t="1724065022701" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8989" width="20" height="20"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#e6e6e6" p-id="8990"></path></svg>
        )
    }

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <svg className={className} style={{ ...style, display: 'block' }} onClick={onClick} t="1724065022701" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8989" width="20" height="20"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#e6e6e6" p-id="8990"></path></svg>
        )
    }


    const settings = {
        className: 'center-slider',
        centerMode: true,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        // rows: 1,
        variableWidth: true,
        focusOnSelect: true,
        // slidesToScroll: 3,
        // adaptiveHeight: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const settings2 = {
        className: 'center-slider',
        centerMode: true,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const settings_phone = {
        dots: true,
        dotsClass: styles.slick_dots,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [showDetail, setShow] = useState(false)

    const handleclick = () => {
        setShow(true)
    }

    const closeDetail = (e) => {
        if (e.target.classList.contains(styles.bg)) {
            setShow(false)

        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>精选现场案例</div>
                <div className={styles.row}>
                    <div className={styles.slide_container}>
                        <Slider {...settings}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img1.JPG?imageslim' alt='detail' className={styles.img} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img2.JPG?imageslim' alt='detail' className={styles.img} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img3.JPG?imageslim' alt='detail' className={styles.img} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img4.JPG?imageslim' alt='detail' className={styles.img} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img5.JPG?imageslim' alt='detail' className={styles.img} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img6.JPG?imageslim' alt='detail' className={styles.img} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img11.JPG?imageslim' alt='detail' className={styles.img} />
                        </Slider>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.slide_container}>
                        <Slider {...settings2}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img7.JPG?imageslim' alt='detail' className={styles.img2} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img8.JPG?imageslim' alt='detail' className={styles.img2} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img9.JPG?imageslim' alt='detail' className={styles.img2} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img10.JPG?imageslim' alt='detail' className={styles.img2} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img12.jpg?imageslim' alt='detail' className={styles.img2} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img13.jpg?imageslim' alt='detail' className={styles.img2} />
                            <img src='https://cdn.yiyunjiancai.com/cases/img14.jpg?imageslim' alt='detail' className={styles.img2} />
                        </Slider>
                    </div>
                </div>
                <div className={styles.slider_container}>
                    <Slider {...settings_phone}>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img1.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img2.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img3.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img4.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img5.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img6.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img11.JPG?imageslim' alt='detail' className={styles.img} />
                        </div>
                    </Slider>
                </div>
                <div className={styles.slider_container}>
                    <Slider {...settings_phone}>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img7.JPG?imageslim' alt='detail' className={styles.img2} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img8.JPG?imageslim' alt='detail' className={styles.img2} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img9.JPG?imageslim' alt='detail' className={styles.img2} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img10.JPG?imageslim' alt='detail' className={styles.img2} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img12.jpg?imageslim' alt='detail' className={styles.img2} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img13.jpg?imageslim' alt='detail' className={styles.img2} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='https://cdn.yiyunjiancai.com/cases/img14.jpg?imageslim' alt='detail' className={styles.img2} />
                        </div>
                    </Slider>
                </div>

                {/* <div className={styles.galleryContainer}>
                <TypeImage cb={handleclick} src='/image/qxhy_gate.JPG' title='清溪花园别墅299号' year='2012' project='全屋定制、橱柜、木饰面' />
                <TypeImage cb={handleclick} src='/image/cupboard.png' title='玫瑰园别墅' year='2013' project='全屋定制' />
                <TypeImage cb={handleclick} src='/image/cupboard.png' title='西郊庄园别墅' year='2015' project='衣帽间、橱柜、书柜、双开门' />
                <TypeImage cb={handleclick} src='/image/cabinet.jpg' title='金虹别墅' year='2017' project='酒柜、书柜、木饰面' />
            </div>
            {showDetail && <div className={styles.bg} onClick={closeDetail}>
                <div className={styles.slide_container} >
                    <Slider {...settings}>
                        <div >
                            <img className={styles.detail_img} src='/image/qxhy_gate.JPG' alt='img' />
                        </div>
                        <div>
                            <img className={styles.detail_img} src='/image/qxhy_gate.JPG' alt='img' />
                        </div>
                        <div>
                            <img className={styles.detail_img} src='/image/qxhy_gate.JPG' alt='img' />
                        </div>
                    </Slider>
                </div>
            </div>} */}
            </div>
        </>
    )
}