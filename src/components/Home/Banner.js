import React from 'react';

const Banner = ({appName}) => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    {appName.toLowerCase()}
                </h1>
            </div>
            <p>A place to tag your photos</p>
        </div>
    );
}

export default Banner;