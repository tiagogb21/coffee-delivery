import { Outlet } from "react-router-dom"
import { Header } from "../components/Common/Header"

export const CommonLayout = () => {
    return (
        <div className="bg-background font-roboto">
            <Header />
            <Outlet />
        </div>
    )
}