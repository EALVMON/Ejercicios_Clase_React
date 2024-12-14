import React, { useState, useEffect } from 'react';

function Mensaje({ texto }) {
    return (
        <div className='container'>
            <div className='row'>
                <h1>{texto}</h1>

            </div>
        </div>
    );
};
export default Mensaje;