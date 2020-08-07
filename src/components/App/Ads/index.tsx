import React from 'react';
import './style.scss';

const Ads = () => {
    return (
        <div className='Ads'>
            <script
                async
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
            ></script>

            <ins
                className='adsbygoogle'
                style={{ display: 'block' }}
                data-ad-client='ca-pub-6410994282681966'
                data-ad-slot='7718000542'
                data-ad-format='auto'
                data-full-width-responsive='true'
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
    );
};

export default Ads;
