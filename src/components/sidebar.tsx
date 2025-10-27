import { memo } from 'react';
import { Tooltip } from '@/components/ui/tooltip';

interface SidebarProps {
  theme: 'light' | 'dark';
  showCopied: boolean;
  onShareLink: () => void;
  onDownloadPDF: () => void;
  onOpenEmail: () => void;
  onOpenGitHub: () => void;
  onOpenLinkedIn: () => void;
  onOpenWebsite: () => void;
  onCycleTheme: () => void;
}

export const Sidebar = memo(function Sidebar({
  theme,
  showCopied,
  onShareLink,
  onDownloadPDF,
  onOpenEmail,
  onOpenGitHub,
  onOpenLinkedIn,
  onOpenWebsite,
  onCycleTheme,
}: SidebarProps) {
  return (
    <div className="hidden lg:flex lg:w-16 lg:flex-col lg:border-r lg:border-border lg:bg-muted/30 lg:fixed lg:h-full print:hidden">
      <div className="flex flex-col items-center justify-center h-16 border-b border-border">
        <span className="text-lg font-bold text-primary">RS</span>
      </div>

      <nav className="flex-1 flex flex-col items-center justify-center space-y-6">
        <Tooltip content="Copy resume link">
          <button
            onClick={onShareLink}
            className={`p-3 rounded-lg transition-all ${showCopied ? 'bg-green-600 text-white' : 'hover:bg-secondary text-foreground'}`}
            aria-label="Copy resume link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z" />
            </svg>
          </button>
        </Tooltip>

        <Tooltip content="Download resume as PDF">
          <button
            onClick={onDownloadPDF}
            className="p-3 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Download resume"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
            </svg>
          </button>
        </Tooltip>

        <Tooltip content="Send email">
          <button
            onClick={onOpenEmail}
            className="p-3 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32a8,8,0,0,0-8,8V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM32,200V57.34L126.15,136.69a8,8,0,0,0,3.7,1,8.22,8.22,0,0,0,3.7-1L228,57.32V200Z" />
            </svg>
          </button>
        </Tooltip>

        <Tooltip content="GitHub">
          <button
            onClick={onOpenGitHub}
            className="p-3 rounded-lg hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" />
            </svg>
          </button>
        </Tooltip>

        <Tooltip content="LinkedIn">
          <button
            onClick={onOpenLinkedIn}
            className="p-3 rounded-lg hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Z" />
            </svg>
          </button>
        </Tooltip>

        <Tooltip content="Website">
          <button
            onClick={onOpenWebsite}
            className="p-3 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Website"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm87.65,56H171.29a48,48,0,0,0-86.58,0H40.35a88.11,88.11,0,1,1,0,32h44.36a48,48,0,0,0,86.58,0h44.36a88.11,88.11,0,1,1,0-32Z" />
            </svg>
          </button>
        </Tooltip>
      </nav>

      <div className="flex flex-col items-center justify-center h-16 border-t border-border">
        <Tooltip content={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
          <button
            onClick={onCycleTheme}
            className="p-3 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm67.88-96.12L168,132.49V104a8,8,0,0,0-16,0v40a8,8,0,0,0,3.56,6.66l32,21.33a8,8,0,1,0,8.88-13.32Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
              </svg>
            )}
          </button>
        </Tooltip>
      </div>
    </div>
  );
});
