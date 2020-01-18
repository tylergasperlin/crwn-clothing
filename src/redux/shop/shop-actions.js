import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase-utils';

//thunk is action creator that returns a function that returns the dispatch
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

//when redux thunk is enabled
//any time you attepmt to dispatch a function instead of an object
//the middleware will call that function with dispatch method itself as the first argument
export const fetchCollectionsStartAsync = () => {
    console.log('6699')

  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    console.log('1155')

    collectionRef
      .get()
      .then(snapshot => {
          console.log('3322')
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
