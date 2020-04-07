import React from 'react';
import './Modal.css';

function Modal({companyName}) {
    return (
        <>
        <div className="Modal">
            </div>
        <div className="AddStockForm">
    <h2>Add {companyName} to my stocks</h2>
            <div>
                <h4>Company Name :</h4>
                <span>{companyName}</span>
            </div>
            <div>
                <h4>No. of Shares :</h4>
                <input type='text' placeholder='No. of Shares' />
            </div>
            <div>
                <h4>Buy Price :</h4>
                <input type='number' placeholder='Buying price' />
            </div>
            <div>
                <h4>Buy Date :</h4>
                <input type='date' />
            </div>
            
                <button className='AddStockFormBtn'> Add </button>
            
            
            
        
        </div>
        </>
    )
}

export default Modal;
