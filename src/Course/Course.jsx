import React from "react";
import YoutubeEmbed from "../components/VideoPlay.jsx";
import "../components/style.css";
import { useNavigate } from "react-router-dom";
// import { Link } from '@react-navigation/native';
import { Link } from "react-router-dom";

const Course = (props) => {
  const navigate = useNavigate();
  let arr = [
    [
      "Marathi",
      "https://www.exoticindiaart.com/images/products/original/books-2016/nzk860.webp",
    ],
    [
      "Hindi",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifMzotfM3aqrcjPXsGugUI03yVGTkEvBM3w&usqp=CAU",
    ],
    [
      "Italian",
      "https://m.media-amazon.com/images/I/61-G1TWPa5L._AC_UF1000,1000_QL80_.jpg",
    ],
    [
      "French",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsJI_Dot4ChTyMt8_kpuhuFq7zqdK-aM_O7xfOKSHPi5vOTkJYfgcOuKrkfO6qO_3qQc&usqp=CAU",
    ],
  ];
  const handleClick = () => {
    navigate("/courselist");
  };
  return (
    <div className="main-container">
      <Link to='/language'>
      <button className="quizz">
        Quiz
      </button>
      </Link>
      
<div className="container">
      {/* <h1>Hellooooo</h1> */}

      {arr.map((item) => (
        <Link to="/courselist">
          <div className="minip">
            <div classNameName="mg">
              <div className="clr"></div>
            </div>
            <div
              className="av"
              style={{ backgroundImage: `url(${item[1]})` }}
            ></div>
            <div className="info">
              <name>{item[0]}</name>
              {/* <div>
                            369 he/him<br>
                            soccer player
                        </div> */}
            </div>
            <a className="plot" title="plot with jinkyu" href="/">
              view course
            </a>
          </div>
        </Link>
      ))}

      {/* <YoutubeEmbed embedId="videoseries?si=xrd-LHQ4bdiuXQeQ&amp;list=PLA2qUUcBFumm9SQYt14cyyr7flLsNm-Qu" /> */}
    </div>
    </div>
    
  );
};

export default Course;
