import React from 'react';
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from '../header/Header';
import Menu from '../menu/Menu';
import './layout.scss';

export default function Layout() {
const [openMenu, setOpenMenu] = useState(false)
return (
    <>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="sections">
        <Suspense fallback={<>...</>}>
        <Outlet />
        </Suspense>
        </div>
    </>
);
};