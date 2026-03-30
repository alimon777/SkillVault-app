import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CopyInstallButton } from "@/components/CopyInstallButton";

const GITHUB_GIT = 'https://github.com/alimon777/SkillVault-ext.git';
const GITHUB = 'https://github.com/alimon777/SkillVault-ext';
const MARKETPLACE = 'vscode:extension/alimonna.SkillVault';
const EXTENSION_ID = 'alimonna.SkillVault';
const INSTALL_CMD = `code --install-extension ${EXTENSION_ID}`;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl border-b" style={{ background: "var(--sv-bg-nav)", borderColor: "var(--sv-border)" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-lg" style={{ color: "var(--sv-accent)" }}>SkillVault</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hidden sm:block" style={{ color: "var(--sv-fg-secondary)" }}>Features</a>
            <a href="#how-it-works" className="text-sm hidden sm:block" style={{ color: "var(--sv-fg-secondary)" }}>How it Works</a>
            <a href="#install" className="text-sm hidden sm:block" style={{ color: "var(--sv-fg-secondary)" }}>Install</a>
            <ThemeToggle />
            <a
              href={GITHUB_GIT}
              target="_blank"
              rel="noopener noreferrer"
              className="sv-btn-primary flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-mono tracking-wide mb-8" style={{ background: "rgba(94,234,212,0.1)", color: "var(--sv-accent)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sv-accent)" }} />
            VS Code Extension · Open Source
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Your AI skills,
            <br />
            <span style={{ color: "var(--sv-accent)" }}>one vault.</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--sv-fg-secondary)" }}>
            Turn your GitHub repo into a structured library of AI instruction skills.
            Browse, apply, and manage — from the sidebar or through Copilot Chat with built-in MCP tools.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={MARKETPLACE}
              className="sv-btn-primary py-3 px-8 rounded-lg text-base"
            >
              Install Extension
            </a>
            <a
              href="#how-it-works"
              className="sv-btn-outline py-3 px-8 rounded-lg text-base font-medium border"
              style={{ borderColor: "var(--sv-border-strong)", color: "var(--sv-fg-secondary)" }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Sidebar Preview Mock */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden" style={{ background: "var(--sv-bg-card)", borderColor: "var(--sv-border)" }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--sv-border)", background: "var(--sv-bg-mock-bar)" }}>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-mono ml-3" style={{ color: "var(--sv-fg-muted)" }}>SkillVault — VS Code Sidebar</span>
            </div>
            {/* Mock sidebar */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span>🔐</span>
                <span className="font-semibold text-sm">SkillVault</span>
              </div>
              <div className="inline-block text-[11px] py-1 px-2.5 rounded-full mb-3" style={{ background: "rgba(94,234,212,0.15)", color: "var(--sv-accent)" }}>
                Connected to user/my-skills
              </div>
              <input
                type="text"
                placeholder="Search skills..."
                readOnly
                className="w-full py-1.5 px-3 rounded text-xs mb-3 border outline-none"
                style={{ background: "var(--sv-bg-input)", borderColor: "var(--sv-border)", color: "var(--sv-fg-muted)" }}
              />
              {/* Skill cards mock */}
              {[
                { name: "React Component Patterns", tags: ["react", "typescript"], ai: "copilot" },
                { name: "Python Type Hints", tags: ["python", "mypy"], ai: "claude" },
                { name: "API Error Handling", tags: ["fastapi", "rest"], ai: "cursor" },
              ].map((s) => (
                <div key={s.name} className="rounded-lg border p-3 mb-2 transition-colors" style={{ background: "var(--sv-bg-mock-card)", borderColor: "var(--sv-border)" }}>
                  <div className="font-semibold text-xs mb-1.5">{s.name}</div>
                  <div className="flex gap-1.5 mb-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] py-0.5 px-2 rounded-full" style={{ background: "rgba(94,234,212,0.1)", color: "var(--sv-accent)" }}>{t}</span>
                    ))}
                    <span className="text-[10px] py-0.5 px-2 rounded-full" style={{ background: "rgba(160,140,255,0.15)", color: "#a08cff" }}>{s.ai}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-[10px] py-1 px-3 rounded font-medium" style={{ background: "var(--sv-accent)", color: "#022c22" }}>Apply</button>
                    <button className="text-[10px] py-1 px-3 rounded font-medium border" style={{ borderColor: "var(--sv-border-strong)", color: "var(--sv-fg-muted)" }}>Preview</button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 mt-2 border-t text-[11px]" style={{ borderColor: "var(--sv-border)", color: "var(--sv-fg-muted)" }}>
                <span>3 skills · 1 source</span>
                <span>⟳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--sv-accent)" }}>Features</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything in one place.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "One-Click Apply", desc: "Browse skills in the sidebar, click Apply — the right instruction file is written to your workspace instantly." },
              { icon: "🔍", title: "Auto-Detect IDE", desc: "Copilot, Cursor, Claude Code, Windsurf, Cline — SkillVault detects your tool and writes to the correct file." },
              { icon: "🔗", title: "Git-Backed", desc: "Skills live in your GitHub repo with full version history. No proprietary storage, no lock-in." },
              { icon: "📦", title: "No Cloning", desc: "Fetches files on demand via GitHub API. Your extension stays lightweight — no local git state to manage." },
              { icon: "🤖", title: "MCP Chat Tools", desc: "11 language-model tools let you search, apply, create, and manage skills directly from Copilot Chat — no clicks needed." },
              { icon: "🔒", title: "Open Source (AGPL-3.0)", desc: "Free to use, fork, and contribute. Copyleft protects the ecosystem from closed-source exploitation." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border p-6 transition-colors hover:border-[var(--sv-accent)]" style={{ background: "var(--sv-bg-card)", borderColor: "var(--sv-border)" }}>
                <span className="text-2xl mb-4 block">{f.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sv-fg-secondary)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCP Tools */}
      <section className="py-24 px-6" style={{ background: "var(--sv-bg-card)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--sv-accent)" }}>AI Integration</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Talk to your vault.</h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--sv-fg-secondary)" }}>
              SkillVault exposes an MCP server with 11 tools — use them in Copilot Chat, Agent mode, or any compatible AI client.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { cmd: "#skillvault_search_skills", label: "Search skills by name, tag, or tech" },
              { cmd: "#skillvault_list_skills", label: "List all skills in your repo" },
              { cmd: "#skillvault_get_skill", label: "Fetch full content of a skill" },
              { cmd: "#skillvault_apply_skill", label: "Apply a skill to your workspace" },
              { cmd: "#skillvault_remove_applied", label: "Remove an applied skill" },
              { cmd: "#skillvault_list_applied", label: "Show active skills" },
              { cmd: "#skillvault_create_skill", label: "Create a new skill in your repo" },
              { cmd: "#skillvault_update_skill", label: "Update an existing skill" },
              { cmd: "#skillvault_delete_skill", label: "Delete a skill from your repo" },
              { cmd: "#skillvault_toggle_favorite", label: "Pin or unpin a favorite" },
              { cmd: "#skillvault_refresh_skills", label: "Refresh manifest from GitHub" },
            ].map((t) => (
              <div key={t.cmd} className="flex items-start gap-3 rounded-lg border p-4" style={{ background: "var(--sv-bg-mock-card)", borderColor: "var(--sv-border)" }}>
                <span className="shrink-0 mt-0.5 font-mono text-xs py-0.5 px-2 rounded" style={{ background: "rgba(94,234,212,0.12)", color: "var(--sv-accent)" }}>#</span>
                <div>
                  <code className="text-xs font-semibold block mb-1">{t.cmd.replace("#", "")}</code>
                  <span className="text-xs" style={{ color: "var(--sv-fg-muted)" }}>{t.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8" style={{ color: "var(--sv-fg-muted)" }}>
            All write operations require explicit user confirmation — human-in-the-loop by design.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6" style={{ background: "var(--sv-bg-card)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--sv-accent)" }}>How it Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Three steps. Sixty seconds.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Connect", desc: "Install the extension, authenticate with GitHub, and point to your skills repo." },
              { step: "02", title: "Browse", desc: "Your skills appear in the sidebar — searchable, tagged by tech stack and AI tool. Or ask Copilot Chat to find them." },
              { step: "03", title: "Apply", desc: "Click Apply in the sidebar or tell your AI assistant — the right instruction file is written to your workspace. Done." },
            ].map((s) => (
              <div key={s.step} className="text-center sm:text-left">
                <span className="font-mono text-4xl font-bold block mb-4" style={{ color: "var(--sv-accent)" }}>{s.step}</span>
                <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sv-fg-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported IDEs */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--sv-accent)" }}>Compatibility</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Works with your stack.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GitHub Copilot",
              "Cursor",
              "Claude Code",
              "Windsurf",
              "Cline",
            ].map((name) => (
              <div key={name} className="py-3 px-6 rounded-lg border text-sm font-medium" style={{ background: "var(--sv-bg-card)", borderColor: "var(--sv-border)", color: "var(--sv-fg-secondary)" }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill File Format */}
      <section className="py-24 px-6" style={{ background: "var(--sv-bg-card)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--sv-accent)" }}>Skill Format</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Just markdown.</h2>
            <p className="mt-4 text-base" style={{ color: "var(--sv-fg-secondary)" }}>Skills are markdown files with YAML frontmatter. No proprietary format.</p>
          </div>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--sv-border)" }}>
            <div className="px-4 py-2 border-b text-xs font-mono" style={{ background: "var(--sv-bg-mock-bar)", borderColor: "var(--sv-border)", color: "var(--sv-fg-muted)" }}>
              by-tech/react/component-patterns.md
            </div>
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto" style={{ background: "var(--sv-bg-code)", color: "var(--sv-fg-secondary)" }}>
{`---
name: "React component patterns"
tech: [react, typescript]
ai: [copilot, cursor, claude-code]
tags: [components, hooks]
version: "1.2"
updated: "2026-03-29"
---

# React Component Patterns
When writing React components:
- Always use functional components with TypeScript
- Define prop interfaces above the component
- Use custom hooks for shared logic`}
            </pre>
          </div>
        </div>
      </section>

      {/* Install CTA */}
      <section id="install" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to organize your AI skills?
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--sv-fg-secondary)" }}>
            Install from the VS Code Marketplace or build from source. Free and open source.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <a
              href={MARKETPLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="sv-btn-primary py-3 px-8 rounded-lg text-base"
            >
              Install Extension
            </a>
            <a
              href={GITHUB_GIT}
              target="_blank"
              rel="noopener noreferrer"
              className="sv-btn-outline py-3 px-8 rounded-lg text-base font-medium border"
              style={{ borderColor: "var(--sv-border-strong)", color: "var(--sv-fg-secondary)" }}
            >
              View on GitHub
            </a>
          </div>

          {/* Quick install command */}
          <CopyInstallButton command={INSTALL_CMD} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6" style={{ borderColor: "var(--sv-border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>🔐</span>
            <span className="font-semibold text-sm" style={{ color: "var(--sv-accent)" }}>SkillVault</span>
          </div>
          <span className="text-xs" style={{ color: "var(--sv-fg-muted)" }}>
            Built by <a href="https://alimon.in" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--sv-fg-secondary)" }}>Alimon N A</a> · AGPL-3.0
          </span>
            <div className="flex gap-4">
            <a href={GITHUB_GIT} target="_blank" rel="noopener noreferrer" className="text-xs" style={{ color: "var(--sv-fg-muted)" }}>GitHub</a>
            <a href={`${GITHUB}/issues`} target="_blank" rel="noopener noreferrer" className="text-xs" style={{ color: "var(--sv-fg-muted)" }}>Issues</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
