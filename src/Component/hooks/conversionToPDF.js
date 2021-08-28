import React from "react";
import Button from "../Button/button";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function ConversionToPDF() {
  const div2PDF = () => {
    const input = document.getElementById("divToPrint");

    html2canvas(input).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
        floatPrecision: 16,
      });

      pdf.addImage(img, "JPEG", 5, 5, 200, 200);

      pdf.save("chart.pdf");
    });
  };

  return <Button onClick={div2PDF} label={"Export to PDF"} />;
}

export default ConversionToPDF;
