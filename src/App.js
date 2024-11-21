import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className='main d-flex'>
        <div className='sideWrapper'>
          <Sidebar />
        </div>

        <div className='content'>
          <Routes>
            <Route path='/' element={<DashBoard />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
