import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
        <input 
        className='tc pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder='Search Robot Friend' 
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;