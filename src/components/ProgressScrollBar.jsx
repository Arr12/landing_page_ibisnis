import React from "react";
import styled from "styled-components";

function ProgressScrollBar ({ scroll }) {
    return <div style={{ position: "fixed", background : "linear-gradient(to right, red " + scroll + ", transparent 0)", width: "100%", height: "5px", zIndex: '50'}}></div>
}

export default ProgressScrollBar