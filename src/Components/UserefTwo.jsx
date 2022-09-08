import React, { useEffect, useRef, useState } from 'react';

const UserefTwo = () => {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    }, []);
    console.log(count);
    return (
        <>
            <input type="text" value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <h1>{count.current}</h1>
        </>
    );
};

export default UserefTwo