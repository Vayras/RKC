import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navbar from './components/Navbar';
import SignUp  from './components/SignUp.tsx';

function App() {
  return (
    <div>
      <div className=''><Navbar /></div>

        <SignUp />
    </div>
  
  );
}

export default App;
