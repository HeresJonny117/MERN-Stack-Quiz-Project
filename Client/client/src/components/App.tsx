import React from "react";
import { Routes, Route } from "react-router-dom"
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";
import Landing from "./Landing.tsx";
import Results from "./Results.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Results" element={<Results />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
