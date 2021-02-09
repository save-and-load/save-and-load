import React, { useState } from 'react';
import { Document, Page, Outline, pdfjs } from 'react-pdf'
import manualFile from "files/manualFile.pdf"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Manual = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    }

    const prevPage = () => {
        setPageNumber(num => Math.max(num - 1, 1));
    }

    const nextPage = () => {
        setPageNumber(num => Math.min(num + 1, numPages));
    }

    return (
        <div>
            <h2>법전</h2>
            <p>언젠가 보완할 듯?</p>
            <p>Page {pageNumber} of {numPages}</p>
            <button onClick={prevPage}>Prev Page</button>
            <button onClick={nextPage}>Next Page</button>
            <Document
                file={manualFile}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} scale={1.3} />
            </Document>
        </div>
    );
};

export default Manual;