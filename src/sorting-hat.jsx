import React, { useState, useEffect } from 'react';


function SortingHat () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [house, setHouse] = useState('');
    const [sorted, setSorted] = useState(false);
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", 'Hufflepuff'];

    const handleSubmit = () => {
        setFirstName(document.getElementById('firstName').value);
        setLastName(document.getElementById('lastName').value);
        setIsSubmitted(true);
    }

    const handleSort = () => {
        const houseIndex = Math.floor(Math.random() * houses.length)
        setHouse(houses[houseIndex]);
        setSorted(true);
    }

    return (
        <>
        <input type="text" id="firstName" placeholder="First Name"/>
        <input type="text" id="lastName" placeholder="Last Name"/>
        <button onClick={handleSubmit}>Submit</button>
        {isSubmitted && 
        <div>
        <p>PROF. MCGONAGALL: {lastName}, {firstName} !</p>
        <button onClick={handleSort}>Put on the Sorting Hat</button>
        </div>
        }
        {
            sorted &&
            <p>SORTING HAT: {house}</p>
        }
        </>
    )
}

export default SortingHat;