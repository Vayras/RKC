import { Routes, Route } from "react-router-dom";
import { Deals} from "../components/Deals.tsx";
import { CarouselDefault } from "../components/Carousel.tsx";
import { HomepageCard } from "../components/HomepageCard";
import { ProductPage } from "../components/ProductPage.tsx";
import SignUp from "../components/SignUp.tsx";
import Login from "../components/Login.tsx";
import SetupShop from "../components/SetupShop.tsx";
import ContactForm from "../components/ContactForm.tsx";
import AboutUs from "../components/AboutUs.tsx";
import Education from "../components/Education";
import ProductCollection from "../components/ProductCollection";

export const AppRoutes = () => (
    <Routes>
        <Route
            path="/"
            element={
                <div>
                    <CarouselDefault />
                    <HomepageCard />
                    <Deals />
                </div>
            }
        />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="setup" element={<SetupShop />} />
        <Route path="contact" element={<ContactForm />}/>
        <Route path="about" element={<AboutUs/>} />
        <Route path="education" element={<Education/>} />
        <Route path="/collection/:category" element={<ProductCollection/>} />
    </Routes>
);
