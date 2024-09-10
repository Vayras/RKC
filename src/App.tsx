import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navbar from './components/Navbar';
import {AppRoutes} from "./utils/routes.tsx";
import InfoBar from "./components/InfoBar.tsx";

function App() {
    return (
        <div className={"bg-gray-100 w-full min-h-screen"}>
            <div><Navbar />
                <InfoBar />
            </div>
            <AppRoutes />

        </div>
    );
}

export default App;
