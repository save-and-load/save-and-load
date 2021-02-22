import React from "react";
import {Button, Jumbotron} from "react-bootstrap";

const Log = () => {
    return (
        <div style={{margin: 10}}>
            <Jumbotron>
                <div>
                    <h2>
                        업데이트 로그
                    </h2>
                    <br />
                </div>
                <div>
                    <ul>
                        <li>
                            <b>v1.0.1</b>
                            <ul>
                                <li>리다이랙팅을 수정했습니다.</li>
                                <li>법전 여백 크기를 조정했습니다.</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <b>v1.0 (2021/02/23)</b>
                            <ul>
                                <li>홈페이지 서비스가 배포되었습니다.</li>
                                <li>법전, 대학 확인 기능을 추가했습니다.</li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <Button variant="info">
                        아무 의미 없는 버튼
                    </Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Log;