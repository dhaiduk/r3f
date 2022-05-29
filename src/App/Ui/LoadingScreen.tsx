import * as React from "react";
//import { PageRules } from "./PageRules";
import loadingImg from "../Img/loading.jpg";
import ProgressBar from "../Ui/ProgressBar"


type Props = { onClose: () => void; loading: boolean; loadingProgress: number };

export const LoadingScreen = ({ onClose, loading, loadingProgress }: Props) => (
  <div
    style={{
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      zIndex: 2,
      backgroundImage:`url(${loadingImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      minHeight: "100vh",
    }}
  >
    {/*
    <PageRules />
    */}
    <div
      style={{
        width: "80vw",
        height: "40px",
        marginTop: "50vh",
        alignSelf: "center",
        color: "white",
      }}

      /*disabled={loading} for button*/
    >
      {/*
      {loading &&
        `loading ${(loadingProgress * 100).toFixed(0).padStart(3, " ")}% ...`}
      {!loading && "Start"} */}
      {loading? undefined : onClose()}
      {loading &&<ProgressBar bgcolor={"blue"} completed={loadingProgress * 100}></ProgressBar>}

    </div>

  </div>
);
