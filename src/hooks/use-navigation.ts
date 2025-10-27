import { useCallback } from 'react';
import { toast } from 'sonner';
import { cfg } from '@/lib/cfg';

export function useNavigation(pdfUrl: string) {
  const downloadPDF = useCallback(() => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = cfg.RESUME_FILE;
    link.click();
    toast.success('Resume downloaded');
  }, [pdfUrl]);

  const shareLink = useCallback(async () => {
    const url = window.location.origin + '/' + pdfUrl;
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Resume link copied to clipboard');
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.error('Failed to copy resume link');
      return false;
    }
  }, [pdfUrl]);

  const openEmail = useCallback(() => {
    const email = cfg.EMAIL_ADDRESS;
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
  }, []);

  const openLinkedIn = useCallback(() => {
    window.open(cfg.LINKEDIN_URL, '_blank');
    toast.success('Opening LinkedIn profile');
  }, []);

  const openGitHub = useCallback(() => {
    window.open(cfg.GITHUB_URL, '_blank');
    toast.success('Opening GitHub profile');
  }, []);

  const openWebsite = useCallback(() => {
    window.open(cfg.WEBSITE_URL, '_blank');
    toast.success('Opening personal website');
  }, []);

  return {
    downloadPDF,
    shareLink,
    openEmail,
    openLinkedIn,
    openGitHub,
    openWebsite,
  };
}
