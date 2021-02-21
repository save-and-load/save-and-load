import React from 'react';

const Manual = () => {
    return (
        <div>
            <h2>법전</h2>
            <p>언젠가 보완할 듯?</p>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRx68BvX4dmGzqE0bXthSyrtHHqGIJC29BRRX_Gy5OgJTycYUSgMyxdfbmiviP5F2uap63zAmEwNIkL/pub?embedded=true"
                    width={window.innerWidth / 1.1}
                    height={window.innerHeight / 1.5}
                    title="법전"
            />
        </div>
    );
};

export default Manual;