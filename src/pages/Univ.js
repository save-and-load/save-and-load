import React from 'react';

const Univ = () => {
    return (
        <div>
            <h2>대학 밥 사기 리스트 적는 곳</h2>
            <a href={process.env.REACT_APP_FOLDER}>지금은 여기로..</a>
        </div>
    );
};

export default Univ;