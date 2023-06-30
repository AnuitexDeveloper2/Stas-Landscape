import React, { useEffect } from "react";
import "./index.scss";

const Sidebar: React.FC = () => {
  useEffect(() => {
    const element = document.getElementById("sidebar");
    if (element) {
      const observer = new IntersectionObserver(
        function (entries: any) {
          if (entries[0].isIntersecting === true) {
            element.classList.add("animation");
          }
        },
        { threshold: [0] }
      );
      observer.observe(element);
    }
  }, []);
  return (
    <div className="sidebar-container" id="sidebar">
      Hello
    </div>
  );
};

export default Sidebar;
