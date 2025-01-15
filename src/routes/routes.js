import { useContext, useEffect, useState } from "react";
import { Context } from "../lib/context_provider";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import Home from "./agnostic/home/home";
import Loading from "../components/loading";
import Navigation from "../components/navigation";
import { tabs } from "../constants/constants";
import Spacer from "../components/spacer";

const AppRoutes = () => {
    // Destructure User and Loading into Routes
    const { user, loading } = useContext(Context);
    return (
        <div>
            <div className="mx-auto max-w-[1280px] p-4 min-h-[100vh]" >
                <Navigation tabs={tabs}>
                </Navigation>
                <Spacer height="20px"></Spacer>
                {
                    loading ?
                        <Loading loading={loading}></Loading>
                        :
                        <Routes>
                            {/* Mapping routes from constants configuration */}
                            {tabs.map((tab) => {
                                return (
                                    <Route path={`/${tab.route}`} element={tab.component}>
                                    </Route>
                                )
                            })}
                        </Routes>
                }

            </div>
        </div>
    )
}

export default AppRoutes;