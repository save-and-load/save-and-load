import React, {useState} from 'react';
import {Button, Jumbotron} from "react-bootstrap";

const Home = () => {
    const [click, setClick] = useState(0);

    const onButton = () => {
        let message = "[S&L 홈페이지]\n" +
            (click >= 5 ? "그만하십쇼" : "ㅠㅠㅠㅠㅠ");
        window.alert(message);
        setClick((val) => val + 1);
    };

    return (
        <div style={{margin: 10}}>
            <Jumbotron>
                <div>
                    <h2>
                        Save & Load Team
                    </h2>
                </div>
                <div>
                    <p>
                        뭔가 많이 허전하죠?
                        <br />
                        개발자를 닦달하세요!
                    </p>
                    <Button onClick={onButton}>
                        개발자 나무라기
                    </Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Home;