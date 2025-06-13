// import React from 'react'

// const App = () => {
//     return ( 
//     <div className='container'>
//         {/* <Navbar/> */}
//        {/* <Home/>  */}
//         {/* <Login/> */}
//         {/* <Footer/> */}
//         <CreateBlog/>

        

//     </div>
//      );
// }
 
// export default App




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './CreateBlog';
// import Navbar from './NavBar';
// import Footer from './Footer'   ;
// import Login from './Login-SignIn';
// import Home from './Home';
import Congrats from './Congrats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/congrats" element={<Congrats />} />
     
      </Routes>
    </Router>
  );
}

export default App;

