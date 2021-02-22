import React from 'react';
import {Jumbotron} from "react-bootstrap";

const Univs = () => {
    return (
        <div style={{margin: 10}}>
            <Jumbotron>
                <div>
                    <h2>
                        대학 밥 사기 리스트 적는 곳
                    </h2>
                    <br />
                </div>
                <div>
                    <iframe src="https://docs.google.com/spreadsheets/d/1z5-Ir6SVpyDSfC8bPVCu-8ngg1EgNHrz3ddZSOxxeLQ/edit?usp=sharing?gid=0&amp;range=A1:K20&amp;single=true&amp;widget=true&amp;headers=false"
                            width={window.innerWidth / 1.2}
                            height={window.innerHeight / 1.5}
                            title="대학 밥 사기 리스트 문서"
                    />
                    <br />
                </div>
            </Jumbotron>
        </div>
    );
};

export default Univs;