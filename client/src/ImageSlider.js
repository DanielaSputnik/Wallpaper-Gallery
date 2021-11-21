import React, {useState} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './FullViewSlider.css'

const ImageSlider = ({fullGallery, selectedImageIndex}) => {
    const [currentImage, setCurrentImage] = useState(selectedImageIndex)
    const length = fullGallery.length

    if (!Array.isArray(fullGallery) || fullGallery.length <= 0) {
        return null;
    }
    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }
    const nextImage = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }
    
    return (
        <div className='slider-window'>
            <button className='sld-L-arrow' onClick={prevImage}>
                <AiOutlineArrowLeft />
            </button>
            <button className='sld-R-arrow' onClick={nextImage} >
                <AiOutlineArrowRight />
            </button>
            
            {fullGallery.map((image, index) => {
                return (
                    <div className={index === currentImage ? 'slide active' : 'slide'} key={index}>
                        {index === currentImage && (<h4>{image.public_id}</h4>)}
                        {index === currentImage && (<img src={image.url} alt=''/>)}                                               
                    </div>
                )                
            })}
        </div>
    )
}

export default ImageSlider;
