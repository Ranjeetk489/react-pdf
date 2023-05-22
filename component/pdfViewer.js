import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
const PdfViewer = ({ url = "https://postsales.s3.ap-south-1.amazonaws.com/student-doc/Passport%20Back_1684500620609.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3LCO45Q7TMD4KXHO%2F20230522%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230522T091744Z&X-Amz-Expires=86400&X-Amz-Signature=72bd71296eaf40c0bc0455d456dd95e6aa5f044bd099d74e6455582eb0c6c2c5&X-Amz-SignedHeaders=host", customStyle }) => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div style={customStyle ? customStyle : {
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '75vh',
            }}>
                <Viewer fileUrl={url} enableSmoothScroll={true} />
            </div>
        </Worker>
    )
}
export default PdfViewer
