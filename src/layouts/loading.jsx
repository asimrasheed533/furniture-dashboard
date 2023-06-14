import { DotLoader } from "react-spinners";

export default function Loading({ dashboard }) {
  return (
    <div
      className="container__main__content__listing"
      style={
        dashboard
          ? { justifyContent: "center", alignItems: "center" }
          : { justifyContent: "center", alignItems: "center", height: "100vh" }
      }
    >
      <DotLoader color="#2659b0" />
    </div>
  );
}
