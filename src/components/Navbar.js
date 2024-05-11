import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navBar" id="navbar">
            <div className="left-content">
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <svg t="1699205489318" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3260" width="1.2rem" height="1.2rem"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#ffffff" p-id="3261"></path></svg>
                    目录
                </div>
                <div>
                    <svg t="1699205132959" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1.0rem" height="1.0rem">
                        <path d="M947.2 902.4L736 691.2c64-64 96-147.2 96-243.2 0-211.2-172.8-384-384-384S64 236.8 64 448s172.8 384 384 384c96 0 179.2-32 249.6-89.6l211.2 211.2c12.8 12.8 32 12.8 44.8 0s6.4-38.4-6.4-51.2zM128 448c0-179.2 140.8-320 320-320s320 140.8 320 320-140.8 320-320 320-320-140.8-320-320z" fill="#ffffff"></path>
                    </svg>
                    搜索
                </div>
            </div>
            <div className="center">
                <div className="title-text">Y NUVOLA</div>
                <div className="label-text">上海亿云高级全屋定制</div>
            </div>
            <div className="right-content">
                <Link href='/about' className='custom-link'>品牌介绍</Link>
                <Link href='/about' className='custom-link'>致电我们</Link>
                <Link href='/about' className='custom-link'>案例欣赏</Link>
                <Link href='/about' className='custom-link'>线下展厅</Link>
            </div>
        </nav>
    )
};
