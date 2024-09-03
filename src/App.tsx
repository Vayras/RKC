import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navbar from './components/Navbar';
import { TopicsBar } from './components/TopicsBar';
import {CarouselDefault} from './components/Carousel';
import { Card } from './components/Card';
import { Deals } from './components/Deals';
import {ProductPage} from "./components/ProductPage.tsx";

function App() {
  return (
    <div>
      <div className=''><Navbar /></div>

      {/*<div className='min-h-[2px] w-screen bg-gray-400' />*/}
      {/*<TopicsBar />*/}
      {/*<CarouselDefault/>*/}
      {/*<Card />*/}
      {/*<Deals />*/}

      <ProductPage />
    </div>
  
  );
}

export default App;
