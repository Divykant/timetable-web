import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Student from './Components/Student/Student';
import Faculty from './Components/Faculty/Faculty';
import Error from './Components/Error/Error';



function App() {

  const [user, setUser] = useState(null);
  // useEffect(()=>{
  //   const u =localStorage.getItem("user");
  //   u && JSON.parse(u) ? setUser(true) : setUser(false);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("user", user);

  // }, [user]);

  
  return (
    <>  
    <div >
      <Routes>
        {!user && (
          <Route exact path="/" element={<Home faculty_authentication={() => setUser(true)}/>}/>
        )}
        
        {user && (
          <>
          <Route path="/student" element={<Student/>}/>
          <Route path="/faculty" element={<Faculty/>}/>
          <Route element={<Error/>}/>
          </>
        )}
        
        {/* <Route path="*" element={ <Navigate to={user ? "/home" : "faculty"} />}/> */}
      </Routes>

       {/* <Home/> */}
       {/* <Faculty/>
       <Student/> */}
    </div>
    </>
  );
}

export default App;
