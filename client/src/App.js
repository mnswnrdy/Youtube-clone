import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Navbar from "./Components/NavBar/Navbar";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
import AllRoutes from "./Components/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChanel from "./Pages/Chanel/CreateEditChanel";
import { fetchAllChanel } from "./actions/chanelUser";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getAllVideo } from "./actions/video";
import { getAllwatchLater } from "./actions/watchLater";
import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllHistory } from "./actions/History";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };

  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  const [vidUploadPage, setVidUploadPage] = useState(false);

  return (
    <>
      <Router>
        {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage} />}
        {EditCreateChanelBtn && (
          <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
        )}
        <Navbar
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          toggleDrawer={toggleDrawer}
        />
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />
        <AllRoutes
          setVidUploadPage={setVidUploadPage}
          setEditCreateChanelBtn={setEditCreateChanelBtn}
        />
      </Router>
    </>
  );
}

export default App;
