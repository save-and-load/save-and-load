import React, { useState, useEffect } from 'react';
import {dbService} from "fBase";
import Univ from "components/Univ.js";
import UnivFactory from "components/UnivFactory";

const Univs = () => {
    const [univList, setUnivList] = useState([]);

    useEffect(() => {
        dbService.collection("univ")
            .orderBy("id", "asc")
            .onSnapshot((snapshot) => {
                const univArray = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setUnivList(univArray);
            })
    }, []);


    return (
        <div>
            <h2>대학 밥 사기 리스트 적는 곳</h2>
            <a href={process.env.REACT_APP_FOLDER}>지금은 여기로..</a>
            <div style={{ marginTop: 30 }}>
                {univList.map(univ =>
                    <Univ key={univ.id}
                          univObj={univ}
                    />
                )}
            </div>
            {/*
                <UnivFactory />
            */}
        </div>
    );
};

export default Univs;