import {createSelector} from 'reselect'

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
    collections => collections[collectionUrlParam]

)