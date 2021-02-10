import React, { useState } from "react";
import {dbService} from "fBase";

const UnivFactory = () => {
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(false);

    const onSubmit = async (event) => {
        if (name === "") {
            window.alert("이름을 제대로 작성해주세요.");
            return;
        }
        event.preventDefault();

        setEditing(false);
        const univObj = {
            id: name,
            main: null,
            pass: [],
            pre: [],
        }
        await dbService.collection("univ").add(univObj);
        setName("");
    }

    const onChange = (event) => {
        const {target: {value}, } = event;
        setName(value);
    }

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    return (
        <>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit}>
                            <input type="text"
                                   value={name}
                                   onChange={onChange}
                                   placeholder="이름을 입력해주세요."
                            />
                        </form>
                        <span onClick={toggleEditing}>취소</span>
                    </>
                ) : (
                    <span onClick={toggleEditing}>추가하기</span>
                )
            }
        </>
    );
}

export default UnivFactory;