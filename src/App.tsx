import React, { createContext, useEffect, useState } from "react";
import Homepage from "./screens/Homepage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About/About";
import Page404 from "./screens/Page404";
import Contact from "./screens/Contact/Contact";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import UserDetail from "./components/UserDetail";
import axios from "axios";

interface APIData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const API = "https://jsonplaceholder.typicode.com/posts";
export const APIContext = createContext<APIData[]>([]);

function App() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      const { data } = await axios.get(API);
      console.log(data);
      setAPIData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center">
      <APIContext.Provider value={APIData}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:userId" element={<UserDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </APIContext.Provider>
    </div>
  );
}

export default App;
