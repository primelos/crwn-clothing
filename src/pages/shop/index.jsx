import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collections-overview/collections.overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
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

class ShopPage extends Component {
  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");

    //      using firebase observable style object
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     console.log("collectionsMap", collectionsMap);
    //     this.setState({ loading: false });
    //   }
    // );
    //      OR using a Promise
    // collectionRef.get().then(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   console.log("snapshot", collectionsMap);
    //   updateCollections(collectionsMap)
    //   this.setState({ loading: false })
    // })
    //      OR using Fetch .... it was very nested
    // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-fbe5a/databases/(default)/documents/collections`)
    // .then(res => res.json())
    // .then(collections => console.log('test',collections.documents))
  }

  

  render() {
    const { match } = this.props;
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
}



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
