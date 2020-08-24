import React, { useEffect, useRef } from 'react';
import './style.scss';

const Ads = () => {
    const adContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!adContainer.current) {
            return;
        }

        const s = document.createElement('script');
        s.src =
            'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        s.async = true;

        adContainer.current.appendChild(s);

        const s1 = document.createElement('script');

        s1.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`;

        adContainer.current.appendChild(s1);
    }, []);

    return (
        <div className='Ads' ref={adContainer}>
            <ins
                className='adsbygoogle'
                style={{ display: 'inline-block', height: 100, width: 300 }}
                data-ad-client='ca-pub-6410994282681966'
                data-ad-slot='7718000542'
            ></ins>
        </div>
    );
};

export default Ads;
