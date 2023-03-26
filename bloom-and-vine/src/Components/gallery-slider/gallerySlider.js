import GalleryImage from './Components/galleryImage';
import './gallerySlider.css'
import { useState, useEffect } from 'react'
import ForwardArrow from '../../Images/forward_arrow.png'
import BackArrow from '../../Images/back_arrow.png'


// Use Homepage's IG Slider for reference

/*
    1) Left and Right Buttons
    2) Fetch data from gallery endpoints provided through props (galleryButtons)
    3) Pass data into GalleryImage component through props
    4) Figure out which elements to apply primary, secondary, or background class
*/


export default function GallerySlider (props) {

    return (
		<div>
            testing!
		</div>
    );
}
function UserReview(props) {
    const { review } = props;

    return (
        <div className='review-container'>
            <div className='review-text'>
                {review.message}
            </div>
            <div className='review-user'>
                - {review.user}
            </div>
        </div>
    )
}

const userReviews = [
    {
        'message': `"Such an exquisite day! Flowers were perfection."`,
        'user': "tanweddingsandevents"
    },
    {
        'message': `"You are just consistently turning out stunning work! Your talent fountain overfloweth!!!!"`,
        'user': 'Julie A. Anderson'
    },
    {
        'message': `"Honestly, the most beautiful arrangement and you could not have been more helpful!"`,
        'user': 'Lauren Deal'
    },
    {
        'message': `"Working with you has been the easiest part of planning our wedding!"`,
        'user': 'Cynthia Racquel'
    },
    {
        'message': `"Such a beautiful color palette and such an awesome vendor team!"`,
        'user': 'kendall_melissa_events'
    },
  ].map((userReview) => <UserReview review={userReview} />)

  
function getReviewDots(total) {
    let dot_display = []
    for (let i = 0; i < total; i++) {
        dot_display.push(
            <div className='review-dot' key={i}></div>
        )
    }

    return dot_display
}

function setCurrentDot(index) {
    const curIndex = index + 1 <= userReviews.length ? index + 1 : 1;
    const inactiveDots = document.querySelectorAll(`.review-dot:not(:nth-child(${curIndex}))`)
    const curDot = document.querySelector(`.review-dot:nth-child(${curIndex})`)

    for (let i = 0; i < inactiveDots.length; i++) {
        inactiveDots[i].style.backgroundColor = "#D9D9D9";
    }

    curDot.style.backgroundColor = "#A28598";
}

function ReviewBar() {
    const [curReview, setCurReview] = useState(userReviews[0])
    const [index, setIndex] = useState(0)
    
    const reviewDots = getReviewDots(userReviews.length)
        
    useEffect(() => {
        setCurrentDot(index)
        setCurReview(userReviews[index])
    }, [index])
        

    // Logic: Click left or right --> Increment/Decrement Index --> Display different review
    const onClickHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            index < userReviews.length - 1 ? setIndex(index => index + 1) : setIndex(0)
        }
        else if (button == 'back') {
            index > 0 ? setIndex(index => index - 1) : setIndex(userReviews.length - 1)
        }
    }

    return (
        <div className='review-slider'>
            <button className='backward-review-button' onClick={e => onClickHandler(e, 'back')}>
                <img className='back-button' src={BackArrow} />
            </button>
            <div className='current-review-display'>
                {curReview}
                <div className='review-dots'>
                    {reviewDots}
                </div>
            </div>
            <button className='forward-review-button' onClick={e => onClickHandler(e, 'forward')}>
                <img className='forward-button' src={ForwardArrow} />
            </button>
        </div>
    )
}