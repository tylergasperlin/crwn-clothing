import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview-component';
import CollectionPage from '../collection/collection-component';
import {createStructuredSelector} from 'reselect'

import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop-selector'
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner-component';
import { fetchCollectionsStartAsync} from '../../redux/shop/shop-actions'
//withspinner creates a component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
//match is a property of route (match location and history are available)
class ShopPage extends React.Component {

  //component did mount fires after the render!!
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    console.log(this.props)
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () =>dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
