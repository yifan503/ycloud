'use client'

import ReactFullpage from '@fullpage/react-fullpage';

export default function ContactInfo() {

    const Fullpage = () => (
        <ReactFullpage
            //fullpage options
            licenseKey={'gplv3-license'}
            scrollingSpeed={700} /* Options here */
            credits={{ enabled: true, label: '', position: 'right' }}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <p>Section 1 (welcome to fullpage.js)</p>

                        </div>
                        <div className="section">
                            <p>Section 2</p>
                        </div>
                        <div className="section">
                            <p>Section 3</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );

    return (
        <>
            <Fullpage />
        </>
    )
}