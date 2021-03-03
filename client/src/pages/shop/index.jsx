import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collections-overview/collections.overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
// import { updateCollections } from "../../redux/shop/shop.actions";
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded,
// } from "../../redux/shop/shop.selectors";
// import { createStructuredSelector } from 'reselect'

// import WithSpinner from "../../components/with-spinner"; 
// import { removeItem } from "../../redux/cart/cart.actions";



// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapshot = null;
  useEffect(() => {
    
   fetchCollectionsStart()

  });
  
  

  
    // const { loading } = this.state
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  
}



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
