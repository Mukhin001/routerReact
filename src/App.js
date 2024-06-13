import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./componets/header/Header";
import NavBar from "./componets/navbar/NavBar";
import Home from './componets/pages/Home';
import Main1 from './componets/pages/Main1';
import Main2 from './componets/pages/Main2';
import Main3 from './componets/pages/Main3';
import Main4 from './componets/pages/Main4';
import Footer from './componets/footer/Footer';


function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <NavBar />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/main1' element={<Main1 />}/>
                <Route path='/main2' element={<Main2 />}/>
                <Route path='/main3' element={<Main3 />}/>
                <Route path='/main4' element={<Main4 />}/>
            </Routes>

            <Footer />
        </Router>
    </div>
  );
}

export default App;
