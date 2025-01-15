import { useContext, useEffect, useState } from "react";
import { Context } from "../lib/context_provider";
import {
    Routes,
    Route,
} from "react-router-dom";
import Loading from "../components/loading";
import Navigation from "../components/navigation";
import { tabs } from "../constants/constants";
import Spacer from "../components/spacer";
import Footer from "../components/footer/footer";

const AppRoutes = () => {
    const { user, theme } = useContext(Context);
    const [loading, setLoading] = useState(false)
    return (
        <div style={{ backgroundColor: theme.background }}>
            <div className="mx-auto max-w-[1280px] p-4 min-h-[100vh]" >
                <Navigation tabs={tabs}>
                </Navigation>
                <Spacer height="20px"></Spacer>
                {
                    loading ?
                        <Loading loading={loading}></Loading>
                        :
                        <Routes>
                            {tabs.map((tab) => {
                                return (
                                    <Route path={`/${tab.route}`} element={tab.component}>
                                    </Route>
                                )
                            })}
                        </Routes>
                }
                <Footer/>

            </div>
        </div>
    )
}

export default AppRoutes;