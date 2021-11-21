import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ totalStars = 5, rating }) => {
    const Star = ({ selected = false, onSelect = f => f }) => (
        <FaStar color={selected ? '#ffa20d' : 'rgba(255, 255, 255, 0.444)'} onClick={onSelect} />
    );
    const createArray = length => [...Array(length)];
    const [selectedStars, setSelectedStars] = useState(rating);
    
    return (
        <div className = 'rating'>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={()=> setSelectedStars(i+1)}/>
            )
            )}
        </div> 
    )
}

export default StarRating
