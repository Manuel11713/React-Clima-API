import React from 'react';
import PropTypes from 'prop-types';
const Error = (props)=>{
    return(
        <div className="container">
            <div className="card-panel  red darken-1">
                <span className="white-text"> Ambos campos son necesarios</span>
            </div>
        </div>
    )
}

Error.propTypes={
    mensaje: PropTypes.string.isRequired
}
export default Error;