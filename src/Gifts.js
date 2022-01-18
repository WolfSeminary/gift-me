import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Gift from './Gift';

const Gifts = () => {
    const [gifts, setGifts] = useState([]);
    let { id } = useParams();
    let categoryId = id;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {
                gifts.filter(item => item.categoryID == categoryId || categoryId == null)
                    .map(g => <Gift key={g.id} gift={g} />)
            }
        </div>
    );
}

export default Gifts;