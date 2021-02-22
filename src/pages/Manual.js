import React from 'react';
import {Button, Jumbotron} from "react-bootstrap";

const Manual = () => {
    const onButton = () => {
        window.alert("[S&L 홈페이지]\n미구현되었습니다.");
    };

    return (
        <div style={{margin: 10}}>
            <Jumbotron>
                <div>
                    <h2>
                        법전
                    </h2>
                    <br />
                </div>
                <div>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vRx68BvX4dmGzqE0bXthSyrtHHqGIJC29BRRX_Gy5OgJTycYUSgMyxdfbmiviP5F2uap63zAmEwNIkL/pub?embedded=true"
                            width={window.innerWidth / 1.2}
                            height={window.innerHeight / 1.5}
                            title="법전"
                    />
                    <br />
                    <Button variant="secondary"
                            onClick={onButton}>
                        수정 요청
                    </Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Manual;