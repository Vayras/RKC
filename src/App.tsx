import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navbar from './components/Navbar';
import Login  from './components/Login.tsx';

function App() {
  return (
    <div className={"bg-gray-100 w-full h-screen"}>
      <div className=''><Navbar /></div>

        <Login />
    </div>
  
  );
}

export default App;
