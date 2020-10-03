import { getData } from './getData.js';

const generateItemPage = () => {

    const renderCard = (data) => {

        console.log('data: ', data);
    };

    if (location.hash && location.pathname.includes('card')) {
        getData.item(location.hash.slice(1), renderCard);
     }
};

export default generateItemPage;