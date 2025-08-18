import React from "react";

const Blogs = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "-1px",
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://ur9blog.vercel.app/"
        title="UR9 Blog"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default Blogs;
