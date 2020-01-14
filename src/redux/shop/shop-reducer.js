import SHOP_DATA from './shop-data'
import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
    collections: SHOP_DATA

}

const shopReducer = (state = INITIAL_STATE, action ) => {
    console.log(action.paload)

    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.paload
            }
        default:
            return state

        }
            

        
    }


export default shopReducer;