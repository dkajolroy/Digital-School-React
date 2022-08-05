
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
