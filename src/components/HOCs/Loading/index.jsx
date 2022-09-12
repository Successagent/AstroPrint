import React, { useEffect, useState } from "react";
import OnImagesLoaded from "react-on-images-loaded";
import LoadingStyles from "./Loading.module.css";

function Loading(Page) {
  const HOC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const hideLoader = () => {
      setIsLoading(false);
    };

    // useEffect(() => {
    //   setTimeout(hideLoader, 5000);
    // });
    return (
      <>
        <div
          className={`${LoadingStyles.container} ${
            isLoading ? "" : LoadingStyles.hidden
          }`}
        >
          <div className={LoadingStyles.spinner}></div>
          <p>Loading...</p>
        </div>
        <OnImagesLoaded
          onLoaded={hideLoader}
          onTimeout={hideLoader}
          timeout={3000}
        >
          <Page />
        </OnImagesLoaded>
      </>
    );
  };
  return HOC;
}

export default Loading;
