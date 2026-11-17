"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

type Props = {
  title: string;
  description: string;
  url: string;
  previewImage: string;
  linkedinPost?: string;
};

export default function LinkedInShare({ title, description, url, previewImage, linkedinPost }: Props) {
  const initialPost = linkedinPost?.trim() || `${title}\n\n${description}`;
  const [draft, setDraft] = useState(initialPost.includes(url) ? initialPost : `${initialPost}\n\n${url}`);
  const [status, setStatus] = useState<"idle" | "copied" | "copy-failed" | "popup-blocked">("idle");
  const [copying, setCopying] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const id = useId();
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  async function copyAndOpen() {
    setCopying(true);
    let linkedIn: Window | null = null;
    try {
      // Start copying while this document has focus, then reserve a tab during
      // the same click so an async clipboard wait does not trigger popup blocking.
      const copied = navigator.clipboard.writeText(draft);
      linkedIn = window.open("about:blank", "_blank");
      if (linkedIn) linkedIn.opener = null;
      await copied;
    } catch {
      linkedIn?.close();
      setCopying(false);
      setStatus("copy-failed");
      textarea.current?.focus();
      textarea.current?.select();
      return;
    }
    if (linkedIn && !linkedIn.closed) {
      linkedIn.location.replace(shareUrl);
      setStatus("copied");
    } else {
      setStatus("popup-blocked");
    }
    setCopying(false);
  }

  return (
    <>
      <button type="button" onClick={() => { setStatus("idle"); dialog.current?.showModal(); }} className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
        Share on LinkedIn
      </button>
      <dialog ref={dialog} aria-labelledby={`${id}-heading`} aria-describedby={`${id}-instructions`} className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border border-surface-200 bg-white p-0 text-surface-900 shadow-xl backdrop:bg-surface-900/60">
        <div className="flex max-h-[90dvh] flex-col">
          <div className="shrink-0 px-5 pt-5 sm:px-8 sm:pt-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id={`${id}-heading`} className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)]">Share on LinkedIn</h2>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close LinkedIn sharing" className="shrink-0 rounded-lg px-3 py-1 text-2xl text-surface-600 hover:bg-surface-100 focus-visible:outline-2 focus-visible:outline-blue-600">&times;</button>
          </div>
          <p id={`${id}-instructions`} className="mt-3 text-sm leading-relaxed text-surface-600">
            Edit your draft below. The button copies it and opens LinkedIn, where you can paste, make final edits, and publish.
          </p>
          </div>
          <div className="min-h-0 overflow-y-auto px-5 py-5 sm:px-8">
          <div className="flex items-center overflow-hidden rounded-xl border border-surface-200 bg-surface-50">
            <Image src={previewImage} alt={`Article preview: ${title}`} width={1200} height={630} unoptimized className="h-auto w-24 shrink-0 sm:w-40" />
            <div className="min-w-0 border-l border-surface-200 p-3 sm:p-4">
              <p className="text-xs text-surface-500">dweche.africa</p>
              <p className="mt-1 text-sm font-semibold">{title}</p>
            </div>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-surface-500">Article preview. LinkedIn loads its own preview from the link; its appearance may vary.</p>
          <label htmlFor={`${id}-draft`} className="mt-6 block text-sm font-semibold">Your post</label>
          <textarea ref={textarea} id={`${id}-draft`} value={draft} onChange={(event) => { setDraft(event.target.value); setStatus("idle"); }} rows={8} className="mt-2 block w-full resize-y rounded-xl border border-surface-300 p-4 text-base leading-relaxed focus:border-blue-600 focus:outline-2 focus:outline-blue-600" />
          <p className="mt-2 text-xs text-surface-500">{draft.length.toLocaleString()} characters · Edits stay in this dialog until you leave the page.</p>
          </div>
          <div className="shrink-0 border-t border-surface-200 px-5 py-4 sm:px-8">
          <div aria-live="polite" role="status" className="text-sm leading-relaxed">
            {status === "copied" && <p className="text-green-700">Copied! Paste your post into LinkedIn. Nothing has been published yet.</p>}
            {status === "popup-blocked" && <p className="text-surface-700">Your post was copied, but the browser blocked the new tab. Use Open LinkedIn below, then paste your post.</p>}
            {status === "copy-failed" && <p className="text-surface-700">Automatic copying was unavailable. Your draft is selected: copy it manually, then use Open LinkedIn below.</p>}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button type="button" onClick={copyAndOpen} disabled={copying || !draft.trim()} className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              {copying ? "Copying…" : "Copy post & open LinkedIn"}
            </button>
            {status !== "idle" && <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="px-2 py-3 text-sm font-semibold text-blue-600 underline underline-offset-4">Open LinkedIn <span className="sr-only">(opens a new tab)</span></a>}
          </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
