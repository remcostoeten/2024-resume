'use client'

import { useState } from 'react';
import { cfg } from '@/lib/cfg';
import { useTheme } from '@/hooks/use-theme';
import { useNavigation } from '@/hooks/use-navigation';
import { Sidebar } from '@/components/sidebar';
import { PDFViewer } from '@/components/pdf-viewer';

export default function ResumeView() {
  const { theme, cycleTheme } = useTheme();
  const pdfUrl = cfg.RESUME_FILE;
  const nav = useNavigation(pdfUrl);
  const [showCopied, setShowCopied] = useState(false);

  async function handleShareLink() {
    const success = await nav.shareLink();
    if (success) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  }

  return (
    <div className="bg-background text-foreground antialiased print:m-0 print:bg-white min-h-screen flex" suppressHydrationWarning>
      <Sidebar
        theme={theme}
        showCopied={showCopied}
        onShareLink={handleShareLink}
        onDownloadPDF={nav.downloadPDF}
        onOpenEmail={nav.openEmail}
        onOpenGitHub={nav.openGitHub}
        onOpenLinkedIn={nav.openLinkedIn}
        onOpenWebsite={nav.openWebsite}
        onCycleTheme={cycleTheme}
      />

      <div className="flex flex-col flex-1 lg:ml-16 print:ml-0">
        <PDFViewer pdfUrl={pdfUrl} />
      </div>

      <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{ pointerEvents: 'none' }}>
        <ol tabIndex={-1} className="fixed top-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
      </div>

      <div id="dialog-root" />
    </div>
  );
}
