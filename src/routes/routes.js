import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/context_provider";
import {
    Routes,
    Route,
} from "react-router-dom";
import Loading from "../components/loading";
import Navigation from "../components/navigation";
import { tabs } from "../utils/constants/recnroll";
import Spacer from "../components/spacer";
import Footer from "../components/footer/footer";
import Testimonials from "../components/testimonials/testimonials";
import { HoverImageText } from "../components/hoverImageText/hoverImageText";

const AppRoutes = () => {
    const { user, theme } = useContext(Context);
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <Navigation tabs={tabs}>
            </Navigation>
            <div className="min-h-[100vh]" >
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
            </div>
            <Footer/>

        </div>
    )
}

export default AppRoutes;