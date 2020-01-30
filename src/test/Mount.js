import React, { useState } from 'react';

const Mount = (props) => {
    const [text, setText ] = useState()

    return (
        <div>
            <p className="par">
                {props.text}
            </p>
        </div>
    )
}

export default Mount;