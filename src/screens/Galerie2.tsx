import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'src/assets/people03.png',
  'src/assets/people02.png',
  'src/assets/people01.png',
  'src/assets/bacg4.jpg',
  'src/assets/bacg3.jpg',
  'src/assets/bacg2.jpg',
  'src/assets/bacg1.jpg'
];

export const Slideshow2 = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.2}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}