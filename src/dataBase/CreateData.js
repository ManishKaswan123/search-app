import React, { useEffect } from "react";
import { faker } from '@faker-js/faker';

function DataSchema() {
    return {
        name: faker.commerce.productName(),
        brand: faker.company.name(),
        price: faker.commerce.price({ min: 500, max: 1000 }),
        discountPrice: faker.commerce.price({min: 100 , max: 490}),
        numberOfSells: faker.number.int({ min: 50, max: 1000 }),
        image: faker.image.urlLoremFlickr({ category: 'fashion' }),
        rating: faker.number.int({ min: 10, max: 100 })
    };
};


const generateDataSets = (count) => {
    const dataSets = [];
    for (let i = 0; i < count; i++)
        dataSets.push(DataSchema());
    return dataSets;
};

const saveDataToLocalStorage = (count) => {
    const dataSets = generateDataSets(count);
    localStorage.setItem('dataSets', JSON.stringify({dataSets}) , null, 2);
    console.log('Data saved to local storage.');
};

function CreateData() {
    const count = 100;
    useEffect(() => {
        saveDataToLocalStorage(count);
    }, []);

    return (
        <div>
        </div>
    );
};
  
  export default CreateData;