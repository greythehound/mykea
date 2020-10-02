import generateSubCatalog from './generateSubCatalog.js';
import {getData} from './getData.js';

const wishList = ['idd001', 'idd003', 'idd005', 'idd006', 'idd008'];

const generateGoodsPage = () => {
    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
        goodsList.textContent = '';

        data.forEach(item => {
            goodsList.insertAdjacentHTML('afterbegin', `
                <li>${item.name}</li>
            `)
        })
    };

    if (location.pathname.includes('goods') && location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, generateCards);
            mainHeader.textContent = `Search: ${value}`;
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, generateCards);
            mainHeader.textContent = `Your wishlist`;
        } else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, generateCards);
            mainHeader.textContent = `${value}`;
        }
    }
};

export default generateGoodsPage;