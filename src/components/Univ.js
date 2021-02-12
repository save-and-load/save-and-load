import React, { useState } from "react";
import {dbService} from "../fBase";

const Univ = ({ univObj }) => {
    const [main, setMain] = useState(univObj.main);
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        setEditing(false);
        await dbService.collection("univ")
            .doc(univObj.id).update({main: main});
    }

    const onChange = (event) => {
        const {target: {value}, } = event;
        setMain(value);
    }

    return (
        <div>
            {
                editing ? (
                    <>
                        <h3>{univObj.id}</h3>
                        <form onSubmit={onSubmit}>
                            <button onSubmit={onSubmit}>수정</button>
                            <input type="text"
                                   value={main}
                                   onChange={onChange}
                                   placeholder="대표 학교"
                            />
                        </form>
                        {univObj.pass !== [] && univObj.pass
                            .map(obj => <h4>{obj}</h4>)}
                        {univObj.pre !== [] && univObj.pre
                            .map(obj => <h5>{obj}</h5>)}
                        <button onClick={toggleEditing}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h3>{univObj.id}</h3>
                        {univObj.main !== "" && <h4>확정: {univObj.main}</h4>}
                        {univObj.pass !== [] && univObj.pass
                            .map(obj => <h4>{obj}</h4>)}
                        {univObj.pre !== [] && univObj.pre
                            .map(obj => <h5>{obj}</h5>)}
                        <button onClick={toggleEditing}>Edit</button>
                    </>
                )
            }
        </div>
    );
}

export default Univ;