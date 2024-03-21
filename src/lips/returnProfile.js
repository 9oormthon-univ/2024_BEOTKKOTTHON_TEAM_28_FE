import blueberry from '../../assets/blueberry.png';
import cabbage from '../../assets/cabbage.png';
import carrot from '../../assets/carrot.png';
import cucumber from '../../assets/cucumber.png';
import strawberry from '../../assets/strawberry.png';
import tomato from '../../assets/tomato.png';

export const returnProfileImg = (img) => {
  switch (img) {
    case 'blueberry':
      return blueberry;
    case 'cabbage':
      return cabbage;
    case 'carrot':
      return carrot;
    case 'cucumber':
      return cucumber;
    case 'strawberry':
      return strawberry;
    default:
      return tomato;
  }
};
