import VideoComponent from "../VideoComponents/VideoComponent";
export default function Singlecontent({ notice }) {
  return (
    <>
      {notice?.materials[0]?.materialtype === "Image" && (
        <img src={notice.materials[0].material} alt="" />
      )}
      {notice?.materials[0]?.materialtype === "Text" && (
        <pre>{notice.materials[0].material}</pre>
      )}
      {notice?.materials[0]?.materialtype === "Video" && (
        <VideoComponent notice={notice} />
      )}
      {/* <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <img
          src="https://i.ibb.co/dr0tvG7/The-World-Bank-Logo.png"
          alt=""
          style={{ width: "100px", borderRadius: "50%" }}
        />
      </div> */}
    </>
  );
}
