// Code MovieReviews Here
import React from 'react'

let MovieReviews = (props) => { 

    return (
        <div className="review-list">
            {props.reviews.map(mov => 
                <div className="review" key={mov.headline}>
                    <h3>{mov.headline}</h3>
                    <h4>by: {mov.byline}</h4>
                </div>)}
            </div>
        )
}

export default MovieReviews