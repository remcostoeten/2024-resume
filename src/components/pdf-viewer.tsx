import { memo } from 'react';

type TProps = {
  pdfUrl: string;
}

export const PDFViewer = memo(function PDFViewer({ pdfUrl }: TProps) {
  return (
    <div className="flex-1 overflow-auto print:overflow-visible">
      <div className="flex justify-center py-6 lg:py-0 print:py-0">
        <div className="relative print:m-0 rounded-lg shadow-lg print:shadow-none print:rounded-none" style={{ width: '210mm' }}>
          <iframe
            title="Remco Stoeten - Resume"
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            style={{ width: '210mm', height: '297mm', overflow: 'hidden' }}
            width="794"
            height="1123"
          />
        </div>
      </div>
    </div>
  );
});
