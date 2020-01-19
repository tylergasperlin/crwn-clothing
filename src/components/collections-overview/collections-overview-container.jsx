import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop-selector'
import WithSpinner from '../with-spinner/with-spinner-component'
import CollectionsOverview from './collections-overview-component'
import {compose} from 'redux'

//container pattern is used to separate code into its own components
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

//pass collections overview into withspinner and get back collection overview withspinner which will pass into connect to give us isloading
//this was complex so we use compos
//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer