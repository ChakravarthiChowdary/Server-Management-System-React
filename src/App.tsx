import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useAppSelector } from "./store/store";

function App() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <NavBar />
      <Routes>
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/registeraccount" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
