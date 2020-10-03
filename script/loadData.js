import { getData } from './getData.js';


const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd033',
        count: 2
    },
    {
        id: 'idd016',
        count: 5
    }
];

export const loadData = () => {



    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    // getData.catalog((data) => console.log(data));
    // getData.subCatalog('Декор',(data) => console.log(data));
};