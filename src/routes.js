import React from "react";
import { Routes, Route } from "react-router-dom";

import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";

import Course from "./Course/Course.jsx";
import CourseList from "./Course/CourseList.jsx";
import PlayVideo from "./Course/PlayVideo.jsx";
import App from "./components/App.js";

const auth = new Auth();

const handleAuthentication = (location) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="/callback"
          element={<Callback onRedirectCallback={handleAuthentication} />}
        />
        <Route path="/" element={<Course />} />
      </Route>
      <Route path="/courselist" element={<CourseList />} />
      <Route path="/playvideo/:linkk" element={<PlayVideo />} />
    </Routes>
  );
};

export default AppRoutes;
