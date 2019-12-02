import {createSelector} from 'reselect'

const COLLECTION_ID_MAP = {
    //these correspond with tbe ids from the directory-reducer
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4, 
    men: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//returns a function that takes state and runs through the method
//create selector is from reselect and allows us to selectively update state
//whatever uses this selector will need to pass state to the returned function
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    //find collection id matching the url parameter of our collection id map
    collections => collections.find(
    collection => collection.id ===COLLECTION_ID_MAP[collectionUrlParam]
    )

)