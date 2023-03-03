import { useState } from 'react';
import heart from './svg/heart.svg';
import './Animal.css';
function Animal (props) {
    const {name,keyValue,pic} = props;
    const originalImageSize = 20;
    const maxImageSize = 50;
    const [imageSize,setImageSize] = useState(originalImageSize);
    const increaseImage = () => {
        setImageSize(imageSize >= maxImageSize ? originalImageSize : imageSize + 10);
    }
    return(
        <div className="animal" key={keyValue}>
            <img src={pic} alt={name} width={200} height={200}/>
            <img className="heart" src={heart} onClick={increaseImage} alt="heart" width={imageSize} height={imageSize}/>
        </div>
    )
}

export default Animal;