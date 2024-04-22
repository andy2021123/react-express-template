import { Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "src/layout"
import Home from "./Home"
import NoPage from "./NoPage"
import Data from "./Data"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Data />} path="/data" exact />
          <Route element={<NoPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes