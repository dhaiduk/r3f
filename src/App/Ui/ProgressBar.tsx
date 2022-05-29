import * as React from "react";

const ProgressBar = (props: { bgcolor: any; completed: any }) => {
  const { bgcolor, completed } = props;
  return (
    <div
      style={{
        height: 20,
        width: "60%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${completed}%`,
          backgroundColor: bgcolor,
          borderRadius: "inherit",
          textAlign: "right",
        }}
      > {/*
        <span
          style={{ padding: 5, color: "white", fontWeight: "bold" }}
        >{`${completed}%`}</span>*/}
      </div>
    </div>
  );
};

export default ProgressBar;
