import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { ThemeToggle } from '@/components/theme-toggle';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agent Diva Docs',
  description: 'Agent Diva 的官方文档与开发指南',
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-page text-fg antialiased">
        <RootProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 flex min-h-0">{props.children}</main>
            <SiteFooter />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-header/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-accent-soft shadow-soft">
            <span className="text-lg leading-none text-accent">✦</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-fg-strong">
              Agent Diva
            </span>
            <span className="text-[11px] text-fg-muted">
              「神经元」多通道 AI 助手
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/docs"
            className="hidden items-center gap-2 rounded-full border-2 border-border bg-surface px-3 py-1.5 text-xs text-fg-muted shadow-soft hover:bg-surface-soft sm:flex"
          >
            <span aria-hidden>🔍</span>
            <span>搜索文档</span>
            <span className="rounded-md bg-chip px-1.5 py-0.5 text-[10px] text-fg-muted">
              ⌘K
            </span>
          </Link>

          <ThemeToggle />

          <a
            href="https://github.com/ProjectViVy/agent-diva"
            target="_blank"
            rel="noreferrer"
            className="hidden h-8 items-center rounded-full border-2 border-accent bg-accent px-3 text-xs font-medium text-accent-fg shadow-soft hover:bg-accent-strong sm:inline-flex"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t-2 border-border bg-footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-[11px] text-fg-muted sm:flex-row sm:items-center sm:justify-between sm:text-xs">
        <p>© {new Date().getFullYear()} Agent Diva. All rights reserved.</p>
        <p className="flex flex-wrap gap-2">
          <span>Powered by Fumadocs &amp; Next.js</span>
          <span>·</span>
          <a
            href="https://github.com/ProjectViVy/agent-diva"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-accent-strong underline-offset-2 hover:underline"
          >
            源码仓库
          </a>
        </p>
      </div>
    </footer>
  );
}

