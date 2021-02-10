import React, { useState } from "react";

const Univ = ({ univObj }) => {
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    return (
        <div>
            {
                editing ? (
                    <>
                        <span onClick={toggleEditing}>Cancel</span>
                    </>
                ) : (
                    <>
                        <h3>{univObj.id}</h3>
                        {univObj.main !== null && <h4>확정: {univObj.main}</h4>}
                        {univObj.pass !== [] && univObj.pass
                            .map(obj => <h4>{obj}</h4>)}
                        {univObj.pre !== [] && univObj.pre
                            .map(obj => <h5>{obj}</h5>)}
                        <span onClick={toggleEditing}>Edit</span>
                    </>
                )
            }
        </div>
    );
}

export default Univ;