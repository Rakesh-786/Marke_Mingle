import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import API_CONFIG from '../config/api.js';


const Home = () => {
    const [featuredItems, setFeaturedItems] = useState()
    TabTitle("Home - Market Mingle");

    useEffect(() => {
        axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ITEMS}`)
            .then(res => setFeaturedItems(res.data))
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <Landing />
            <FeaturedCategories />
            <FeaturedItems items={featuredItems} />
        </Fragment>
    );
}

export default Home;