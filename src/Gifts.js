import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Gift from './Gift';

const Gifts = () => {
    const [gifts, setGifts] = useState([]);
    let { id: categoryId } = useParams();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {
                gifts.filter(item => item.categoryID == categoryId || categoryId == null)
                    .map(item => <Gift key={item.id} gift={item} />)
            }
        </div>
    );
}

export default Gifts;
