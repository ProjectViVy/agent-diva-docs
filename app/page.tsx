import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex w-full justify-center bg-page">
      <div className="flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 lg:py-10">
        <section className="relative overflow-visible rounded-3xl border-2 border-border bg-surface shadow-soft">
          <div className="flex flex-col gap-6 px-5 py-6 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-8">
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-[13px] font-bold tracking-widest text-accent uppercase">
                AGENT DiVA
              </p>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-fg-strong sm:text-3xl">
                一个真正能做事的AI助手<br />
                极致高性能、轻量化，完美的UI交互
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                Agent Diva 是一个高性能 AI 助手框架，
                连接多种聊天平台与多家大模型提供商，并内置工具系统与会话记忆。
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/docs"
                  className="inline-flex items-center rounded-full border-2 border-accent bg-accent px-4 py-2 text-sm font-medium text-accent-fg shadow-soft hover:bg-accent-strong"
                >
                  开始阅读文档
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
                <Link
                  href="https://github.com/ProjectViVy/agent-diva"
                  target="_blank"
                  className="inline-flex items-center rounded-full border-2 border-border bg-surface px-4 py-2 text-sm text-fg-muted shadow-soft hover:bg-surface-soft"
                >
                  查看 GitHub 仓库
                </Link>
              </div>
            </div>

            {/* 人物悬浮于布局之上，无背景容器，尽量放大 */}
            <div className="relative flex min-h-[200px] flex-1 items-center justify-end sm:min-h-[280px] lg:min-h-[340px]">
              <div className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 sm:-right-6 lg:-right-10">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/diva.png`}
                  alt="Agent Diva"
                  width={512}
                  height={512}
                  className="h-auto w-[min(320px,75vw)] object-contain object-bottom drop-shadow-[0_12px_40px_rgba(0,0,0,0.15)] sm:w-[min(420px,50vw)] lg:w-[min(500px,42vw)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border-2 border-border bg-surface-soft p-4 text-sm shadow-soft">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
              Getting Started
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-fg">
              快速了解如何安装 Agent Diva、配置通道与 Provider，并跑通第一个会话。
            </p>
          </div>
          <div className="rounded-2xl border-2 border-border bg-surface-soft p-4 text-sm shadow-soft">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
              Architecture
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-fg">
              深入理解核心 crate（core / agent / providers / channels）的职责边界。
            </p>
          </div>
          <div className="rounded-2xl border-2 border-border bg-surface-soft p-4 text-sm shadow-soft">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
              Guides
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-fg">
              按场景的进阶指南，例如新增 Provider、接入新聊天平台或扩展工具系统。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

