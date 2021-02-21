import React from 'react';

const Univs = () => {
    return (
        <div>
            <h2>대학 밥 사기 리스트 적는 곳</h2>
            {
                /*
                <a href={process.env.REACT_APP_FOLDER}>지금은 여기로..</a>
                 */
            }
            <iframe
                src="https://docs.google.com/spreadsheets/d/1z5-Ir6SVpyDSfC8bPVCu-8ngg1EgNHrz3ddZSOxxeLQ/edit?usp=sharing?gid=0&amp;range=A1:K20&amp;single=true&amp;widget=true&amp;headers=false"
                width={window.innerWidth / 1.1}
                height={window.innerHeight / 1.5}
                title="대학 밥 사기 리스트 문서"
            />
        </div>
    );
};

export default Univs;