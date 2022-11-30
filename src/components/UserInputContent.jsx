import React, {useState} from 'react';
import axios from "axios";

/** function UserInputContent() {
    var [input, setInput] = useState({
        title: '',
        description: '',
        pictureURL: '',
        address: '',
    })

    function handleChange(event) {
        const{name, value} = event.target
    
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const newContent = {
            title: input.title,
            description: input.description,
            pictureURL: input.pictureURL,
            address: input.address
        }
        console.log(newContent);
        //post content to express server working as of 11/28/2022
        axios.post('http://localhost:3001/postContent', newContent)
<<<<<<< HEAD:src/components/UserInputContent.js
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
=======
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
>>>>>>> parent of 9ee2722 (UsreInputContent):src/components/UserInputContent.jsx
    }   

*/

function UserInputContent() {
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[pictureURL, setPictureURL] = useState('')
    const[address, setAddress] = useState('')

    const addNewContent = () => {
        axios.post('http://localhost:3001/addContent', {title, description, pictureURL, address})
    }



//Create the html to insert userContent:

    return ( 
    <div className='container'>
        <h1>Create Tourist Location</h1>
        <div className="">
<<<<<<< HEAD:src/components/UserInputContent.js
            <label htmlFor="">Location Title: </label><br></br>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} ></input>    
        </div>
        <div className="">
            <label htmlFor="">Location Description: </label><br></br>
            <input type="text" onChange={(e) => {setDescription(e.target.value)}} ></input>    
        </div>
        <div className="">
            <label htmlFor="">Location pictureURL: </label><br></br>
            <input type="text" onChange={(e) => {setPictureURL(e.target.value)}}></input>    
        </div>
        <div className="">
            <label htmlFor="">Location Address: </label> <br></br>
            <input type="text" onChange={(e) => {setAddress(e.target.value)}}></input>    
        </div>
        <button onClick={addNewContent}>Add Location</button>
=======
            <input onChange={handleChange} className="" name="title" value={input.title} autoComplete="off" placeholder="Tourist Title"></input>    
        </div>
        <div className="">
            <textarea onChange={handleChange} className="" name="description" value={input.description} autoComplete="off" placeholder="Tourist description"></textarea>    
        </div>
        <div className="">
            <input onChange={handleChange} className="" name="pictureURL" value={input.pictureURL} autoComplete="off" placeholder="PictureURL"></input>    
        </div>
        <div className="">
            <input onChange={handleChange} className="" name="address" value={input.address} autoComplete="off" placeholder="Address"></input>    
        </div>
        <button onClick={handleClick} className="">Add Location</button>
    </form>
>>>>>>> parent of 9ee2722 (UsreInputContent):src/components/UserInputContent.jsx
   </div>
    )
    }

export default UserInputContent;