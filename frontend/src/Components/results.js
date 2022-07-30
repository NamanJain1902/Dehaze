import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Card from './card';
import "./home.css";
function results() {
  const downloadHandler = () => {
    console.log("download");
  }
  return (
    <>
    <center><h1>Results</h1></center>
    <strong><hr style={{margin:30, height: 4}} /></strong>
    <center><h3>Removed Cloud Layer from the band</h3></center>
    <div className="result">
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 1</h6></center></div>
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 2</h6></center></div>
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 3</h6></center></div>
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 4</h6></center></div>
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 5</h6></center></div>
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 6</h6></center></div>
      <div style={{display:'flex', flexDirection:'column'}}><Card /><center><h6>Band 7</h6></center></div>
       </div>
    <center><Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#2a3eb1", color: "white", marginBottom: 30 }}
              component={Link}
              to="/results"
              onClick={downloadHandler}
            >Download<GetAppRoundedIcon /></Button></center>
    <center><h3>Combined Band Image (RGB)</h3></center>
    <center><div style={{display:'flex', flexDirection:'column'}}><Card /><br /></div></center>
    <center><Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#2a3eb1", color: "white", marginBottom: 30 }}
              component={Link}
              to="/results"
              onClick={downloadHandler}
            >Download<GetAppRoundedIcon /></Button></center>
    </> )
}

export default results