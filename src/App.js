import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HelloWorld from './basicComponents/HelloWorld';

import './App.css';
import AllPurposeFooter from './basicComponents/AllPurposeFooter';
import SecondPage from './basicComponents/SecondPage';
import AllPurposeHeader from './basicComponents/AllPurposeHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllPurposeHeader />
      <Routes>
        <Route path='/' element={<HelloWorld />} />
        <Route path='/inputPage' element={<SecondPage />} />
      </Routes>  
        <AllPurposeFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
