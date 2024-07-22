import React from 'react';
import './CollectionPreview.scss'
import CollectionItemComponent from '../CollectionItem/CollectionItemComponent';

const CollectionPreviewComponent = ({data}) => {

    return(
        <div className='collection-preview'>
            <h1 className='title'>{data?.title}</h1>
            <div className='preview'>
               {
                data?.items?.filter((item, idx) => idx < 4).map(item =>  <CollectionItemComponent item={item} />)
               }
            </div>
        </div>
    )

}
export default CollectionPreviewComponent;