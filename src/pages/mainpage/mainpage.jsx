import React from "react";
import CoursesMainPage from "../../components/ShowCourses/CoursesMainPage";
import About from "../../components/aboutme/About";
import Info from "../../components/Info/Info";

const MainPage = () => {
  return (
    <div>
      <CoursesMainPage />
      <About />
      <Info />
    </div>
  );
};

export default MainPage;
