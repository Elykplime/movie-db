import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, Favourites, Categories, NotFound, MovieDetails, SearchPage } from "../pages";
import Layout from "../layout/Layout";
import ShowsDetails from "../pages/ShowsDetails/ShowsDetails";

const PagesRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Homepage />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Route>
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/tv/:id" element={<ShowsDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default PagesRoutes;
