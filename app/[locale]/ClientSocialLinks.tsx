"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";

interface ClientSocialLinksProps {
  emailAriaLabel: string;
  instagramAriaLabel: string;
  githubAriaLabel: string;
  discordAriaLabel: string;
  discordTagLabel: string;
  copyTagLabel: string;
  copiedLabel: string;
}

export default function ClientSocialLinks({
  emailAriaLabel,
  instagramAriaLabel,
  githubAriaLabel,
  discordAriaLabel,
  discordTagLabel,
  copyTagLabel,
  copiedLabel,
}: ClientSocialLinksProps) {
  const [copied, setCopied] = useState(false);
  const discordTag = "max.sus";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discordTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-4 mt-1">
      {/* Email Link */}
      <Link
        href="mailto:max.schneebeli@gmail.com"
        className="transition-opacity hover:opacity-70"
        aria-label={emailAriaLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </Link>

      {/* GitHub Link */}
      <Link
        href="https://github.com/maxschnebli"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-70"
        aria-label={githubAriaLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </Link>

      {/* Instagram Link */}
      <Link
        href="https://instagram.com/max.schneebeli"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-70"
        aria-label={instagramAriaLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </Link>

      {/* Discord with Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="transition-opacity hover:opacity-70"
            aria-label={discordAriaLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4">
          <div className="flex flex-col">
            <p className="text-sm font-medium mb-2">
              {discordTagLabel}: <span className="font-bold">{discordTag}</span>
            </p>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              {copied ? copiedLabel : copyTagLabel}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
