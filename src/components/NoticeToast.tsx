"use client";

import useToastPreference from "@/hooks/useToastPreference";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

export default function InProgressToast() {
  const { isToastDismissed, dismissToast } = useToastPreference();

  useEffect(() => {
    const isDismissed = localStorage.getItem("toastDismissed");
    if (!isToastDismissed && !isDismissed) {
      toast("PDF version can be downloaded at the botom right", {
        duration: 25000,
        onDismiss: () => {
          dismissToast();
          localStorage.setItem("toastDismissed", "true");
        },
      });
    }
  }, [isToastDismissed, dismissToast]);

  return (
    <>
      <Toaster position="top-right" closeButton invert />
    </>
  );
}
