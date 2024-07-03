import {ImageSourcePropType} from 'react-native';
import images from '../assets';

export interface DataType {
  cardId: number;
  name: string;
  number: string;
  exp: string;
  cvv: string;
  type: string;
  brandImage: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
}

const data: DataType[] = [
  {
    cardId: 1,
    name: 'Chitraket Savani',
    number: '1234 5678 9101 1121',
    exp: '12/29',
    cvv: '123',
    type: 'mastercard',
    brandImage: images.visa,
    backgroundImage: images.cardBg,
  },
  {
    cardId: 2,
    name: 'Chitraket Savani',
    number: '1234 5678 9101 1111',
    exp: '12/29',
    cvv: '123',
    type: 'visa',
    brandImage: images.visa,
    backgroundImage: images.cardBg1,
  },
  {
    cardId: 3,
    name: 'Chitraket Savani',
    number: '1234 5678 9101 1131',
    exp: '12/29',
    cvv: '123',
    type: 'visa',
    brandImage: images.visa,
    backgroundImage: images.cardBg2,
  },
  {
    cardId: 4,
    name: 'Chitraket Savani',
    number: '1234 5678 9101 1141',
    exp: '12/29',
    cvv: '123',
    type: 'visa',
    brandImage: images.visa,
    backgroundImage: images.cardBg3,
  },
];

export {data};
