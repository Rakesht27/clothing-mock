import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({title, items, id}) => (
    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className='preview'>
            {items.filter((item,idx)=> idx < 4)
            .map(({id, ...OtherItems}) => (
                <CollectionItem key={id} {...OtherItems}  />
            ))}

        </div>
    </div>
)

export default CollectionPreview;