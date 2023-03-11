import React, { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { initSnowSystem } from '../miscellaneous/snow/index.ts';

const Snow: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(!ref.current) {
            return;
        }
        initSnowSystem(ref.current);
    }, [ref]);
    return <div ref={ref}></div>
}

export default Snow;