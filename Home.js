import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {


  return (
    <div>
      <Typography sx={{ margin:"2%",marginBottom:"0%" }} variant="h2" align="center">
        SKILLMATCH
      </Typography>
      <Typography sx={{ margin:"0%" }} variant="h5" align="center">
        Matching Skills With The Right Opportunities..!
  
      </Typography>
      <div>
        <ul className="ul">
          <li>
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employer/dashboard"style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
              Hire talent
            </Link>
            </Button>
          </li>
          <li>
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employee/feed"style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
              Get Job Now
            </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
