import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //get array of items that we are trying to get
    //map the keys of collections ==mens/womens/hats/jackets
    //get value of collection object at the key
    collections => collections ? Object.keys(collections).map(key=>collections[key]) : []

)

//returns a function that takes state and runs through the method
//create selector is from reselect and allows us to selectively update state
//whatever uses this selector will need to pass state to the returned function
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null

)