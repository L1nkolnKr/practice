import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";




export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyStars = ()=> <Rating value={1} onClick={x=>x}/>

export const ChangeRating = () => {

    const [rating, setRating] = useState<RatingValueType>(5);

    return <Rating value={rating} onClick={setRating}/>
}
