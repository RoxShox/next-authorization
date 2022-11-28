import Script from 'next/script';
import React, { useEffect, useRef, useState } from 'react';
import gapi from '../../helpers/gapi';
const GoogleBtn = ({setState}) => {
    const btn = useRef()
    return (
        <>  
            <Script src="https://accounts.google.com/gsi/client" onReady={() => gapi(google, btn.current, setState)}/>
            <div id='googleBtn' ref={btn}></div>
        </>
    );
}

export default GoogleBtn;
