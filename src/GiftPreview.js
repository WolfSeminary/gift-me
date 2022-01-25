import * as React from 'react';

const GiftPreview = ({ info }) => {
    return (<>
        {info.id}
        {info.name}
        {info.image}
    </>
    )
}
export default GiftPreview;