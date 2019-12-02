import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item-component'
import './category-styles.scss'

//we have access to match since the Category page is within route in shop-component
const CategoryPage = ({match}) => {
    console.log(match.params.categoryId)
    return(
        <div className='category'>
            <h2>CATEGORY PAGE</h2>
        </div>

    )
}

export default CategoryPage;