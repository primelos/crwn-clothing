// Selectors can compute derived data, allowing Redux to store the minimal possible state.
// Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
// Selectors are composable. They can be used as input to other selectors.

import { createSelector } from 'reselect'


const selectCart = state =>  state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartQuantity) =>
      accumalatedQuantity + cartQuantity.quantity,
    0
  )
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartQuantity) =>
      accumalatedQuantity + cartQuantity.quantity * cartQuantity.price, 0
  )
);