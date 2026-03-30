"use client";
import { useState } from "react";

export const CopyInstallButton = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="inline-flex items-center gap-3 py-3 px-4 rounded-lg border font-mono text-sm" style={{ background: "var(--sv-bg-card)", borderColor: "var(--sv-border)", color: "var(--sv-fg-secondary)" }}>
      <span style={{ color: "var(--sv-fg-muted)" }}>$</span>
      <code className="select-all">{command}</code>
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch {
            const ta = document.createElement('textarea');
            ta.value = command;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
            ta.remove();
          }
        }}
        aria-label={copied ? "Install command copied" : "Copy install command"}
        title={copied ? "Copied" : "Copy"}
        className="ml-2 inline-flex items-center justify-center p-1 rounded text-xs border"
        style={{ borderColor: "var(--sv-border)", color: "var(--sv-fg-secondary)", background: "transparent", width: 34, height: 30 }}
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#16a34a" }}><path d="M20 6L9 17l-5-5"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        )}
      </button>
    </div>
  );
};
