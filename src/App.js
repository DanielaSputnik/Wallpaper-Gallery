import React, { useState } from 'react';
import './App.css';
import FullView from './FullView';
import ImageSlider from './ImageSlider';
import images from './api-mock2.json'
import images2 from './api-mock.json'
import StarRating from './StarRating';

const App = () => {
    const [imageList, setImageList] = useState(images.resources);
	const [nextImageList, setNextImageList] = useState(images2.resources);
	const [nextCursor, setNextCursor] = useState(true);
    const [toggleFullView, setToggleFullView] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')
    
    
    // TO USE WITH LIVE API:

	//useEffect(() => {
	//	const fetchData = async () => {
	//		const responseJson = await getImages();
	//		setImageList(responseJson.resources);
	//		setNextCursor(responseJson.next_cursor);
	//	};
	//	fetchData();
	//}, []);

	//const handleLoadMoreButtonClick = async () => {
	//	const responseJson = await getImages(nextCursor);
	//	setImageList((currentImageList) => [
	//		...currentImageList,
	//		...responseJson.resources,
	//	]);
	//	setNextCursor(responseJson.next_cursor);
	//};

    //TO USE WITH MOCK API:    
    
    const handleLoadMoreButtonClick = () => {
		setImageList((currentImageList) => [
			...currentImageList,
			...nextImageList,
        ]);
        setNextCursor(nextImageList.next_cursor)
	};

    const showFullSize = (e) => {
        e.preventDefault();
        setToggleFullView(true)
        setSelectedImage(e.target.id)
    }

    var imageIndex = imageList.findIndex(function(image){
        return image.asset_id === selectedImage        
    });

	return (
        <>
        <FullView trigger={toggleFullView}
                setTrigger={setToggleFullView}
        >
                <ImageSlider fullGallery={imageList}
                            selectedImageIndex={imageIndex}
                />            
        </FullView>
            <div className='title'>Skyrim Wallpaper Gallery</div>
        
		<div className='image-grid'>
            {imageList.map((image, index) => (
                <div className='image-view'
                    key={index}>
                        <img src={image.url} alt={image.public_id} loading="lazy" id={image.asset_id} onClick={showFullSize}></img>
                    <div className='image-footer'>
                        <h6>{image.public_id} </h6>
                        <StarRating rating={image.rating}/>
                    </div>
                </div>
			))}
        </div>
        
		<div className='footer'>
			{nextCursor && (
				<button className='load-more' onClick={handleLoadMoreButtonClick}>Load More</button>
			)}
		</div>
		
        </>
	);
};

            export default App;


