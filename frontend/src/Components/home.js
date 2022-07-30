import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


import "./home.css";
const Home = () => {
  const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) 
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};
  return (
    <div style={{background: "#BFFFF0"}}>
      <center><h1>Let's get started!</h1></center>
      <strong><hr style={{margin:30, height: 4}} /></strong>
      <center><h3 style={{marginLeft: 30, marginRight: 30}}>Upload images from 7 bands of LANDSAT + Satelite and press the submit button once you are done</h3><br /><h5>(Images must be in TIFF Format**)</h5></center>
      <div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="material-icons">add_a_photo</i>
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
    </div>
    <center><Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#2a3eb1", color: "white" }}
              component={Link}
              to="/results"
            >Submit</Button></center>
</div>
  )
};

export default Home