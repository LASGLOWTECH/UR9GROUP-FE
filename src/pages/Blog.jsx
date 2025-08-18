import React, { useRef, useEffect } from "react";

const Blogs = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleMessage = (event) => {
      // security check: only listen to messages from our blog domain
      if (event.origin !== "https://ur9blog.vercel.app") return;

      if (event.data.type === "open-link") {
        window.open(event.data.url, "_blank", "noopener,noreferrer");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

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
        ref={iframeRef}
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
