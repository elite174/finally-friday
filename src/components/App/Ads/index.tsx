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

        const s2 = document.createElement('script');
        s2.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`;
        adContainer.current.appendChild(s2);
    }, []);

    return (
        <div className='Ads' ref={adContainer}>
            <div className='Ads-Item Ads-Item_top'>
                <ins
                    className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client='ca-pub-6410994282681966'
                    data-ad-slot='7718000542'
                    data-ad-format='auto'
                    data-full-width-responsive='true'
                ></ins>
            </div>
            <div className='Ads-Item Ads-Item_bottom'>
                <ins
                    className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client='ca-pub-6410994282681966'
                    data-ad-slot='5079969158'
                    data-ad-format='auto'
                    data-full-width-responsive='true'
                ></ins>
            </div>
        </div>
    );
};

export default Ads;
