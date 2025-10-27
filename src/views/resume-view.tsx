'use client'

import { useState, useEffect } from 'react';
import { Tooltip } from '@/components/ui/tooltip';
import { toast } from 'sonner';

type TTheme = 'light' | 'dark';

const CV_PATH = 'resume-remco-stoeten.pdf'

export default function ResumeView() {
  const [theme, setTheme] = useState<TTheme>('dark');
  const [pdfUrl] = useState<string>(CV_PATH);
  const [showCopied, setShowCopied] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem('theme') as TTheme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  function applyTheme(selectedTheme: TTheme) {
    const htmlElement = document.documentElement;

    if (selectedTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  function cycleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  function downloadPDF() {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = CV_PATH;
    link.click();
    toast.success('Resume downloaded');
  }

  async function shareLink() {
    const url = window.location.origin + pdfUrl;

    try {
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      toast.success('Resume link copied to clipboard');
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.error('Failed to copy resume link');
    }
  }

  function openEmail() {
    const email = 'remco@remco-stoeten.com';
    const subject = 'Resume Inquiry';
    const body = 'Hi Remco,\n\nI came across your resume and would like to discuss...';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoUrl;
    } catch (error) {
      console.error('Failed to open email:', error);
      window.open(mailtoUrl, '_blank');
      toast.error('Failed to open email');
    }
  }

  if (!mounted) {
    return (
      <div className="bg-background text-sm text-foreground antialiased print:m-0 print:bg-white min-h-screen">
        <div className="sticky top-0 z-40 hidden sm:block print:hidden">
          <div className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
              <div className="text-xs font-medium text-muted-foreground">Resume</div>
              <div className="flex items-center gap-2">
                <div className="size-8" />
                <div className="size-8" />
                <div className="size-8" />
                <div className="size-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-50 overflow-hidden rounded shadow-xl sm:mx-auto sm:mb-6 sm:mt-16 print:m-0 print:shadow-none" style={{ width: '210mm' }}>
          <iframe
            title="Remco Stoeten"
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            style={{ width: '210mm', overflow: 'hidden' }}
            width="794"
            height="2273"
          />
        </div>

     
        <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{ pointerEvents: 'none' }}>
          <ol tabIndex={-1} className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
        </div>

        <div id="dialog-root" />
      </div>
    );
  }

  return (
    <div className="bg-background text-sm text-foreground antialiased print:m-0 print:bg-white min-h-screen">
      <div className="sticky top-0 z-40 hidden sm:block print:hidden">
        <div className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
            <div className="text-xs font-medium text-muted-foreground">Resume</div>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <Tooltip content="Copy resume link">
                  <button
                    onClick={shareLink}
                    title="Copy resume link"
                    className={`inline-flex scale-100 items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground size-8 ${showCopied ? 'bg-green-600 text-white hover:bg-green-700' : ''}`}
                    aria-label="Copy resume link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z" />
                    </svg>
                  </button>
                </Tooltip>

                <div
                  className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-all duration-300 z-10 ${showCopied
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                >
                  Copied!
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-600 rotate-45" />
                </div>
              </div>

               <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
              >
                {showCopied && 'Resume link copied to clipboard'}
              </div>

              <Tooltip content="Download resume as PDF">
                <button
                  onClick={downloadPDF}
                  title="Download resume as PDF"
                  className="inline-flex scale-100 items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground size-8"
                  aria-label="Download resume as PDF"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
                  </svg>
                </button>
              </Tooltip>

              <Tooltip content="Send email">
                <button
                  onClick={openEmail}
                  title="Send email"
                  className="inline-flex scale-100 items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground size-8"
                  aria-label="Send email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32a8,8,0,0,0-8,8V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM32,200V57.34L126.15,136.69a8,8,0,0,0,3.7,1,8.22,8.22,0,0,0,3.7-1L228,57.32V200Z" />
                  </svg>
                </button>
              </Tooltip>

              <Tooltip content="Toggle theme">
                <button
                  onClick={cycleTheme}
                  title="Toggle theme"
                  className="inline-flex scale-100 items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground size-8"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-50 overflow-hidden rounded shadow-xl sm:mx-auto sm:mb-6 sm:mt-16 print:m-0 print:shadow-none" style={{ width: '210mm' }}>
        <iframe
          title="Remco Stoeten"
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          style={{ width: '210mm', overflow: 'hidden' }}
          width="794"
          height="2273"
        />
      </div>

      <div className="hidden justify-center py-10 opacity-50 sm:flex print:hidden">
        <a href="/" data-discover="true">
          <button className="inline-flex scale-100 items-center justify-center rounded-sm ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-8 px-4 space-x-1.5 text-xs font-normal">
            <span>Built with</span>
            <img src="/icon/light.svg" width="12" height="12" alt="Reactive Resume" className="rounded-sm" />
            <span>Reactive Resume</span>
          </button>
        </a>
      </div>

      <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{ pointerEvents: 'none' }}>
        <ol tabIndex={-1} className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
      </div>

      <div id="dialog-root" />
    </div>
  );
}