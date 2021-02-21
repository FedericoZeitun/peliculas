import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div>
            <p className="my-3 p-3 text-center text-red alert alert-danger">{mensaje}</p>
        </div> 
    );
}
 
export default Error;