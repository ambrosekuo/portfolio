import React from "react";
import "./Resume.css";
import pdfjsLib from "pdfjs-dist";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  ReactPDF
} from "react-pdf";

function Resume() {
  const pdfURL = "/assets/AmbroseKuoResume.pdf";
  let loadingPDF = pdfjsLib.getDocument(pdfURL);

  // Create styles
  const styles = {
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  };
  ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

  return (
    <div className="Resume">
      <PDFViewer>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default Resume;
