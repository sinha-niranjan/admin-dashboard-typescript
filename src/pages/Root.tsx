import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Link
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          borderRadius: "10px",
          color: "green",
          fontSize: "20px",
          fontWeight: "700",
        }}
        to={"/admin/dashboard"}
      >
        Click Me{" "}
      </Link>
    </div>
  );
};

export default Root;
