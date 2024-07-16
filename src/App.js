import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
