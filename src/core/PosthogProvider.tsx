"use client";
import { ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export default function Providers({ children }: { children: ReactNode }) {
  if (typeof window !== "undefined") {
    if (
      !process.env.NEXT_PUBLIC_POSTHOG_KEY ||
      !process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      console.error(
        "Environment variables NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST are not defined",
      );
    } else {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      });
    }
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
