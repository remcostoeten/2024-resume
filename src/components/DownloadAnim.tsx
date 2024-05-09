"use client";
import { useEffect, useState } from "react";

const DownloadPDFText: React.FC = () => {
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    setColor(document.body.classList.contains("dark") ? "#fff" : "#000");
  }, []);

  useEffect(() => {
    const fontSize =
      window.screen.width < 700 ? 32 : window.screen.width < 1200 ? 56 : 72;

    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src =
        "https://rawcdn.githack.com/akzhy/Vara/02d135d2864a976f6c70464aebee0f81647695c8/src/vara.min.js";
      script.onload = () => {
        const vara = new (window as any).Vara(
          "#container",
          "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
          [
            {
              text: "Download PDF here",
              fromCurrentPosition: { y: 0 },
              duration: 3000,
              fontSize: "16px",
            },
          ],
          {
            strokeWidth: 2,
            color: color,
            fontSize: fontSize,
            textAlign: "center",
          },
        );

        vara.ready(() => {
          let erase = false;
          vara.animationEnd(
            (
              i: string,
              o: {
                container: { style: { transition: string; opacity: string } };
              },
            ) => {
              if (i == "no_erase") erase = false;
              if (erase) {
                o.container.style.transition = "opacity 1s 1s";
                o.container.style.opacity = "0";
              }
            },
          );
          vara.get("Download PDF here").container.style.cursor = "pointer";
        });
      };
      document.body.appendChild(script);
    }, 6000);

    return () => clearTimeout(timer);
  }, [color]);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      const container = document.getElementById("container");
      if (container) {
        container.style.display = "none";
      }
    }, 15000);

    return () => clearTimeout(hideTimer);
  }, []);

  return <div className="no-print" id="container"></div>;
};

export default DownloadPDFText;
