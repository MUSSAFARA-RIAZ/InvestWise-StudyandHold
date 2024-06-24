import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Resources from './pages/Resources';
// import Google from './pages/Google';
import GoogleKDE from './pages/GoogleKDE';
import GooglePlotTime from './pages/GooglePlotTime';
import GooglePlotHistrogram from './pages/GooglePlotHistrogram';
import AppleKDE from './pages/AppleKDE';
import AppleHistrogram from './pages/AppleHistrogram';
import ApplePlotTime from './pages/AppleTimeplot';

function App() {
  return (
    <Router>
      {/* <Sidebar />  */}
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/resources" element={<Resources />} />
        <Route path='/google' element={<GoogleKDE/>}/>
        <Route path='/googleplottime' element={<GooglePlotTime/>}/>
        <Route path="/googlehistrogram" element={<GooglePlotHistrogram/>}/>
        <Route path="/apple" element={<AppleKDE/>}/>
        <Route path="/applehistrogram" element={<AppleHistrogram/>}/>
        <Route path="/applePlotTime" element={<ApplePlotTime/>}/>


      </Routes>
    </Router>
  );
}

export default App;
