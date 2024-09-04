import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navbar from './components/Navbar';
import SignUp  from './components/SignUp.tsx';

function App() {
  return (
    <div className={"bg-gray-100 w-full h-screen"}>
      <div className=''><Navbar /></div>

        <SignUp />
    </div>
  
  );
}

export default App;
