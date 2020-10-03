import generateSubCatalog from './generateSubCatalog.js';
import {getData} from './getData.js';

const COUNTER = 6;

const wishList = ['idd001', 'idd003', 'idd005', 'idd006', 'idd008'];

const generateGoodsPage = () => {
    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
        goodsList.textContent = '';
        if (!data.length) {
            const goods = document.querySelector('.goods');
            goods.textContent = location.search === '?wishlist' ? 'Your wishlist is empty :(' : 'Unfortunately, nothing was found :(';
        }


        data.forEach(item => {
            console.log('item: ', item);
                const { count, name: itemName, id, description, price, img: image} = item;

            goodsList.insertAdjacentHTML('afterbegin', `
            <li class="goods-list__item">
                <a class="goods-item__link" href="card.html#${id}">
                    <article class="goods-item">
                        <div class="goods-item__img">
                            <img src="${image[0]}"
                                ${image[1] ? `data-second-image="${image[1]}"` : ''}
                        </div>
                        ${count > COUNTER ? `<p class="goods-item__new">New!</p>` : ''}
                        ${!count ? `<p class="goods-item__new">OUT OF STOCK!</p>` : ''}
                        <h3 class="goods-item__header">${itemName}</h3>
                        <p class="goods-item__description">${description}</p>
                        <p class="goods-item__price">
                            <span class="goods-item__price-value">${price}</span>
                            <span class="goods-item__currency"> ₽</span>
                        </p>
                        ${count ? `<button class="btn btn-add-card" aria-label="Add to cart" data-idd="${id}"></button>` : ''}
                        
                    </article>
                </a>
            </li>
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