
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TravelGuide from './pages/TravelGuide';
import ResultsPage from './pages/ResultsPage';
import Cities from './pages/Cities';
import Nav from './assets/Nav/Nav';
import { useEffect, useState } from "react";
import { supabase } from './supabaseClient'; // Adjust the path if necessary

function App() {
  // const [restaurants, setRestaurants] = useState([]);

  //   useEffect(() => {
  //     getRestaurant();
  //   }, []);

  //   async function getRestaurant() {
  //     const { data, error } = await supabase.from("restaurants").select();
  //     if (error) {
  //       console.error("Error fetching data:", error);
  //     } else {
  //       setRestaurants(data);
  //     }
  //   }
  return (
    // <RouterProvider router={router}/>
    <BrowserRouter>
    {/* <Router> */}
      <Nav />
      <Routes> 
        {/* make routes lowercase add - */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
  );
}

export default App
