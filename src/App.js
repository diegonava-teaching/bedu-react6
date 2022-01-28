import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import NavBar from './components/NavBar';
import SubRoute from './components/SubRoute';
import DefaultSubRoute from './components/DefaultSubRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    //Entrance point of the router library
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Header color='red' />} />

        <Route path='body' element={<Body />}>
          <Route path=':id' element={<SubRoute />} />
          <Route path='default' element={<DefaultSubRoute />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* <Header />
      <Body /> */}
    </BrowserRouter>
  );
}

export default App;
