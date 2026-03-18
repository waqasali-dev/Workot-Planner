import React from 'react'

const Exercisetype = ({ id, type, setType, postselected = [] }) => {
    return (
        <p>
            {id}:
            <select className='type-dropdown' onChange={(e) => setType(e.target.value)}>
                {type.filter((type) => !postselected.includes(type)).map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </p>
    )
}

export default Exercisetype