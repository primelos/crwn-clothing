import React, { useEffect } from 'react'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import { firestore } from '../../firebase/firebase.utils'


const CollectionPage = ({ collection }) => {
  
  // for testing 
  // useEffect(() => {
  //   console.log('enter'); 
  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
  //   return () => {
  //     console.log('out');
  //     unsubscribeFromCollections()
  //   };
  // }, []);
  // console.log('collection',collection)
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
      
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }
);

export default connect(mapStateToProps)(CollectionPage)
