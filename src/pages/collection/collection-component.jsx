import React from 'react';
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item-component'
import {selectCollection} from '../../redux/shop/shop-selector'
import './collection-styles.scss'

//we have access to match since the Collection page is within route in shop-component
const CollectionPage = ({collection}) => {
    console.log(collection)
    return(
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>

    )
}

//ownprops is the props of the component we are wrapping in connect ==CollectionPage here
const mapStateToProps = (state, ownProps)=>({
    //this selector requires the a part of the state based on the url param 
    //select collection returns a function => then state is passed into the function
    collection: selectCollection(ownProps.match.params.collectionId)(state)


})

export default connect(mapStateToProps)(CollectionPage);