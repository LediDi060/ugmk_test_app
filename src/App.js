import React , {lazy} from 'react'
import { Route, Routes } from "react-router-dom";
import Details from "./pages/details/Details";

// Pages
const Main = lazy(() => import("./pages/main/Main"))
const Page404 = lazy(() => import("./pages/system/404"));
const Page500 = lazy(() => import("./pages/system/500"));

const App = () => {
    return <Routes>
        <Route
            path="/"
            element={
                <React.Suspense fallback={<>Загрузка...</>}>
                    <Main />
                </React.Suspense>
            }
        />
        <Route
            path="details/:factoryId/:monthNumber"
            element = {
            <React.Suspense fallback={<>Загрузка...</>}>
                <Details />
            </React.Suspense>
            }
        />
        <Route exact path="/404" element={Page404} />
        <Route exact path="/500" element={Page500} />
    </Routes>
}

export default  App