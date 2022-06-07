import './App.css';
import { FaBeer } from 'react-icons/fa';
import Inputs from './components/Inputs';


function App() {
  return (
    <div className="mx-auto max-w-screen-md bg-gradient-to-br from-cyan-900 to-cyan-200 h-fit shadow-xl shadow-gray-600 mt-4 py-5 px-32">
      <Inputs />
    </div>
  );
}

export default App;
