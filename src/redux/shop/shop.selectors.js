import { createSelector } from "reselect";

// import memoize from 'lodash.memoize'

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
    // Code needed when  (line 4 and 23) when the shop_data was a array
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );
