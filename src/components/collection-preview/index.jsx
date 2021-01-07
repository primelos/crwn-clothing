import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item'





const CollectionPreview = ({ title, items }) => {
  // console.log('arrays or topics', items);



  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((i, idx) => idx < 4)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
