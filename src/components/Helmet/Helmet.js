import React from "react";

const Helmet = (props) => {
  document.title = props.title + " - Simple IT ";
  return <div> {props.children} </div>;
};

export default Helmet;
