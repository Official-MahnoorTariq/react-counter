import { useState } from "react";

export default function Counter({count, setCount }) {
    // let count = 10;

    return(
        <>
          <p className="count">{count}</p>
        </>
    );
}