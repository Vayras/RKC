import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navbar from './components/Navbar';
import {AppRoutes} from "./utils/routes.tsx";
import InfoBar from "./components/InfoBar.tsx";
import Footer from "./components/Footer";

function App() {
    return (
        <div className={"bg-gray-100 w-full min-h-screen relative"}>
            <div><Navbar />
                <InfoBar />
            </div>
            <AppRoutes />
            <div className="mt-5">
                <Footer />
            </div>

        </div>
    );
}

export default App;
