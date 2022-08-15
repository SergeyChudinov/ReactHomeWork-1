import React from "react";
import { Outlet } from "react-router-dom";
import AlignItemsList from './AlignItemsList';


const Loyout = () => {
    return (
        <>
            <header>
                <AlignItemsList/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <h1>Подвал сайта</h1>
            </footer>
        </>
    )
}
export default Loyout