import { Outlet } from "react-router-dom";
import { Stack } from "@carbon/react";

const Layout = () => {
    return (
       <div>
        <p>header</p>
        <Outlet/>
        <p>footer</p>
       </div>
    )
}
export default Layout;
