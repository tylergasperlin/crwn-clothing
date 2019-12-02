import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item-component'
import './collection-styles.scss'

//we have access to match since the Collection page is within route in shop-component
const CollectionPage = ({match}) => {
    console.log(match.params.collectionId)
    return(
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>

    )
}

export default CollectionPage;