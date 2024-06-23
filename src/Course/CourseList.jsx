import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from "react";
import { Link } from "react-router-dom";
const CourseList = ()=>{
    
    const [modal, setModal] = useState(false);

    const [title, setTitle] = useState('');

    const handleClose = () => {
        setModal(false);
    }
    const handleShow = (value) => {
        console.log(value)
        setTitle(value)
        setModal(true);
    }
    const listt=[['Topic 1: Basics', "cctA8tkRY3M?si=ktRoAEt_cXg9El4W"], ['Topic 2: Grammar', "Cg7j6e4z05s?si=KYGQb5SSLUiXjDpI"], 
    ['Topic 3: Vocabulary Part 1', "0uoh6ACUyVw?si=_P5-oIG6_PtY3DzC"], ['Topic 4: Vocabulary Part 2', "5EfnT0eVYk8?si=K8884z-uAFXA8EZV"], 
    ['Topic 5: Grammar Part 2', "Vlk25QUC-2g?si=gAJbPrJHVZbewXky"], ['Topic 6: Phonetics & Pronunciation', "oZXQzub0yCQ?si=TjC4wKCN9LgWYZ4v"], 
    ['Topic 7: Phrases and Vocabulary', "6cl17ybXhIQ?si=JCVYlAZCGzz-1Wpr"], ['Topic 8: Vocabulary in Daily Life', "gUTJ2qkDIjQ?si=hFhx7aawELjld4pv"]]
    return( 
        <div>
            <h1>Topic Lists</h1>
            <hr />
            <ul>
            {listt.map((item) => ( 
                <Link to={`/playvideo/${encodeURIComponent(item[1])}`}>
                <li><h3 className="topics" style={{color: 'red'}}>{item[0]}</h3></li>
            </Link>
            ))}
                

            </ul>
            

        </div>
    )
}

export default CourseList