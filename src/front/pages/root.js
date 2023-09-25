import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

function Root() {
    return(
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root;