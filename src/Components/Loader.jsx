import ReactPlayer from "react-player";
// import loadingvideo from "../assets/video/loadingvideo.mp4";
export const LoadingSpinner = () => {
  return (
    // <div className="bg-[#040a4b]">
    //   <ReactPlayer
    //     url={loadingvideo}
    //     loop={true}
    //     playsinline
    //     playing={true}
    //     width="100%"
    //     height="100vh"
    //     muted
    //     className="object-cover"
    //     config={{
    //       file: {
    //         attributes: {
    //           style: {
    //             objectFit: "cover",
    //             width: "100vw",
    //             height: "100vh",
    //           },
    //         },
    //       },
    //     }}
    //   />
    // </div>
    <div aria-label="Loading..." className="spinner-parent" role="status">
      <span className="loader"></span>
    </div>
  );
};
