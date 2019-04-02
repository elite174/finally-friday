import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

export const Theme = React.memo(() => {
    const { store } = useContext(StoreContext);
    const cssVars = `
        .App{
            --primaryHue: ${store.colorStore.primary}
        }`;

    return (
        <style>
            {cssVars}
        </style>
    );
});