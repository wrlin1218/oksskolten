type Locale = 'ja' | 'en' | 'zh'

const dict = {
  'demo.defaultUser': { ja: 'Demo User', en: 'Demo User' },
  'demo.disabled': { ja: 'デモでは利用できません', en: 'Not available in demo' },
  'demo.aiDisabled': { ja: 'AI機能はセルフホスト版で利用できます', en: 'AI features require your own instance' },
  'demo.sampleArticle': { ja: 'サンプル記事', en: 'Sample Article' },
  'demo.sampleArticleBody': { ja: 'これはデモ用のサンプル記事です。', en: 'This is a sample article generated for the demo.' },
  'demo.chatReply': {
    ja: 'こんにちは！これは Oksskolten のデモ版です。\n\nチャット機能では、記事の内容について AI に質問したり、要約を依頼したりできます。セルフホスト版では以下のプロバイダーが利用可能です：\n\n- **Anthropic** (Claude)\n- **Google** (Gemini)\n- **OpenAI** (GPT)\n\n`docker compose up` で簡単にセットアップできます。ぜひお試しください！',
    en: 'Hi there! This is a demo of Oksskolten.\n\nThe chat feature lets you ask AI questions about articles, request summaries, and explore your reading list conversationally. In the self-hosted version, you can connect:\n\n- **Anthropic** (Claude)\n- **Google** (Gemini)\n- **OpenAI** (GPT)\n\nGet started with `docker compose up`. Give it a try!',
  },
  'demo.chatReply.recommend': {
    ja: '今日のおすすめはこちらです！\n\n1. [Allocation Optimizations in Go](/go.dev/blog/allocation-optimizations) — Go 1.26 のエスケープ解析の改善でヒープ割り当てが大幅に減少。パフォーマンスに興味があるなら必読です\n2. [Streaming AI Inference on Workers](/blog.cloudflare.com/workers-ai-streaming) — Cloudflare Workers で AI 推論をストリーミング実行する方法。エッジコンピューティングの最前線\n3. [What does it take to ship Rust in safety-critical?](/blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/) — 安全性が求められる領域で Rust を使うための課題と取り組み\n\nどれも読み応えがありますよ。気になる記事があればクリックして詳細を見てみてください！',
    en: 'Here are my top picks for today!\n\n1. [Allocation Optimizations in Go](/go.dev/blog/allocation-optimizations) — Go 1.26\'s escape analysis improvements significantly reduce heap allocations. A must-read if you care about performance\n2. [Streaming AI Inference on Workers](/blog.cloudflare.com/workers-ai-streaming) — How to run AI inference on Cloudflare Workers with streaming. Cutting-edge stuff\n3. [What does it take to ship Rust in safety-critical?](/blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/) — Challenges and approaches for using Rust in safety-critical domains\n\nAll great reads. Click on any article to dive deeper!',
  },
  'demo.chatReply.unread': {
    ja: '未読記事をチェックしてみました！面白そうなものをピックアップ：\n\n- [Experimental JSON v2 Package](/go.dev/blog/jsonv2-exp) — Go の新しい JSON パッケージ。既存の `encoding/json` の課題を解決するアプローチが興味深いです\n- [Multi-agent workflows often fail. Here\'s how to engineer ones that don\'t.](/github.blog/ai-and-ml/generative-ai/multi-agent-workflows-often-fail-heres-how-to-engineer-ones-that-dont/) — マルチエージェントの設計パターン。AI 開発者なら押さえておきたい\n- [Introducing Deno Sandbox](/deno.com/blog/introducing-deno-sandbox) — Deno のサンドボックス機能。セキュリティ面で注目\n\nまだ読んでいない記事が結構ありますね。時間があるときにぜひ！',
    en: 'I checked your unread articles! Here are some interesting picks:\n\n- [Experimental JSON v2 Package](/go.dev/blog/jsonv2-exp) — Go\'s new JSON package with a fresh approach to solving `encoding/json` pain points\n- [Multi-agent workflows often fail. Here\'s how to engineer ones that don\'t.](/github.blog/ai-and-ml/generative-ai/multi-agent-workflows-often-fail-heres-how-to-engineer-ones-that-dont/) — Design patterns for multi-agent systems. Essential for AI developers\n- [Introducing Deno Sandbox](/deno.com/blog/introducing-deno-sandbox) — Deno\'s sandboxing feature. Great for security-conscious developers\n\nYou have quite a few unread articles. Check them out when you have time!',
  },
  'demo.chatReply.trending': {
    ja: '最近のトレンドを分析してみました：\n\n**AI × 開発ツール** が熱いですね。[What\'s new with GitHub Copilot coding agent](/github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/) や [Streaming AI Inference on Workers](/blog.cloudflare.com/workers-ai-streaming) など、AI をインフラレベルで活用する動きが加速しています\n\n**ランタイム競争** も面白い展開です。[Deno 2.7](/deno.com/blog/v2.7) の Temporal API 対応、[Go 1.26](/go.dev/blog/go1.26) の最適化、[Rust 1.92](/blog.rust-lang.org/2025/12/11/Rust-1.92.0) のリリースと、各言語・ランタイムが着実に進化中\n\n**セキュリティ** 関連も目立ちます。[Cloudflare 2026 Internet Threat Report](/blog.cloudflare.com/2026-threat-report) や耐量子暗号の話題など\n\nフィードのラインナップが良いので、トレンドがよく見えますね！',
    en: 'Here\'s what\'s trending across your feeds:\n\n**AI × Developer Tools** is hot. [What\'s new with GitHub Copilot coding agent](/github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/) and [Streaming AI Inference on Workers](/blog.cloudflare.com/workers-ai-streaming) show AI being integrated at the infrastructure level\n\n**Runtime competition** is heating up. [Deno 2.7](/deno.com/blog/v2.7) with Temporal API, [Go 1.26](/go.dev/blog/go1.26) optimizations, [Rust 1.92](/blog.rust-lang.org/2025/12/11/Rust-1.92.0) — all evolving steadily\n\n**Security** is prominent too, with [Cloudflare 2026 Internet Threat Report](/blog.cloudflare.com/2026-threat-report) and post-quantum cryptography discussions\n\nYour feed lineup gives great visibility into what\'s happening!',
  },
  'demo.chatReply.surprise': {
    ja: '意外な一本をどうぞ：\n\n[Build a dinosaur runner game with Deno, pt. 1](/deno.com/blog/build-a-game-with-deno-1)\n\nDeno でブラウザの「恐竜ランゲーム」を作るチュートリアルです。普段インフラやバックエンドの記事が多い中で、こういう遊び心のある記事は新鮮ですよね。\n\nあとは [16 Years of Go](/go.dev/blog/16years) も意外と面白いです。16年の歴史を振り返ると、今では当たり前の機能がどういう経緯で入ったのかがわかります。\n\n息抜きにいかがですか？',
    en: 'Here\'s something unexpected:\n\n[Build a dinosaur runner game with Deno, pt. 1](/deno.com/blog/build-a-game-with-deno-1)\n\nA tutorial on building the browser\'s dinosaur runner game with Deno. A fun break from the usual infrastructure and backend articles.\n\nAlso, [16 Years of Go](/go.dev/blog/16years) is surprisingly interesting — looking back at 16 years of history shows how features we take for granted today came to be.\n\nPerfect for a change of pace!',
  },
  'demo.chatReply.digest': {
    ja: '今週のダイジェストをまとめました：\n\n## Go\n- [Go 1.26 is Released](/go.dev/blog/go1.26) — エスケープ解析の最適化やフェイクタイムによるテスト機能が追加\n- [Experimental JSON v2 Package](/go.dev/blog/jsonv2-exp) が登場\n\n## Cloudflare\n- [Welcome to AI Week 2025](/blog.cloudflare.com/welcome-to-ai-week-2025) — Workers での AI 推論ストリーミングが可能に\n- [Cloudflare Outage: February 20, 2026](/blog.cloudflare.com/cloudflare-outage-february-20-2026) — ポストモーテムが公開\n\n## Kubernetes\n- [Kubernetes v1.35 Sneak Peek](/kubernetes.io/blog/2025/11/26/kubernetes-v1-35-sneak-peek) — Mutable PV Node Affinity など\n- [Ingress-NGINX Retirement Plan](/kubernetes.io/blog/2025/11/11/ingress-nginx-retirement) が発表\n\n## Rust\n- [Announcing Rust 1.92.0](/blog.rust-lang.org/2025/12/11/Rust-1.92.0)\n- [What does it take to ship Rust in safety-critical?](/blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/) が話題\n\n## その他\n- [Deno Deploy is Generally Available](/deno.com/blog/deno-deploy-is-ga)\n- [Tailscale Services](/tailscale.com/blog/services-ga) が GA、[Peer Relays](/tailscale.com/blog/peer-relays-ga) も GA\n\n盛りだくさんの一週間でしたね！',
    en: 'Here\'s your weekly digest:\n\n## Go\n- [Go 1.26 is Released](/go.dev/blog/go1.26) — escape analysis optimizations and fake time testing\n- [Experimental JSON v2 Package](/go.dev/blog/jsonv2-exp) announced\n\n## Cloudflare\n- [Welcome to AI Week 2025](/blog.cloudflare.com/welcome-to-ai-week-2025) — streaming AI inference on Workers\n- [Cloudflare Outage: February 20, 2026](/blog.cloudflare.com/cloudflare-outage-february-20-2026) — postmortem published\n\n## Kubernetes\n- [Kubernetes v1.35 Sneak Peek](/kubernetes.io/blog/2025/11/26/kubernetes-v1-35-sneak-peek) — Mutable PV Node Affinity and more\n- [Ingress-NGINX Retirement Plan](/kubernetes.io/blog/2025/11/11/ingress-nginx-retirement) announced\n\n## Rust\n- [Announcing Rust 1.92.0](/blog.rust-lang.org/2025/12/11/Rust-1.92.0)\n- [What does it take to ship Rust in safety-critical?](/blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/) gaining attention\n\n## Other\n- [Deno Deploy is Generally Available](/deno.com/blog/deno-deploy-is-ga)\n- [Tailscale Services](/tailscale.com/blog/services-ga) and [Peer Relays](/tailscale.com/blog/peer-relays-ga) both reached GA\n\nBusy week!',
  },
  'demo.summaryReply': {
    ja: 'これはデモ版のため、実際の AI 要約は生成されません。セルフホスト版では Anthropic / Gemini / OpenAI を使ってワンクリックで記事を要約できます。',
    en: 'This is a demo, so actual AI summaries are not generated. In the self-hosted version, you can summarize articles with one click using Anthropic, Gemini, or OpenAI.',
  },
  'demo.translateReply': {
    ja: 'これはデモ版のため、実際の AI 翻訳は生成されません。セルフホスト版では 6 つの翻訳エンジン（Anthropic / Gemini / OpenAI / DeepL / Google Translate）から選択できます。',
    en: 'This is a demo, so actual AI translations are not generated. In the self-hosted version, you can choose from 6 translation engines including Anthropic, Gemini, OpenAI, DeepL, and Google Translate.',
  },
} as const

type DemoMessageKey = keyof typeof dict

const zhDict = {
  'demo.defaultUser': '演示用户',
  'demo.disabled': '演示模式不可用',
  'demo.aiDisabled': 'AI 功能需要自托管实例',
  'demo.sampleArticle': '示例文章',
  'demo.sampleArticleBody': '这是一篇为演示生成的示例文章。',
  'demo.chatReply': '你好！这是 Oksskolten 的演示版。\n\n聊天功能可以让你围绕文章内容向 AI 提问、请求总结，并用对话方式探索阅读列表。自托管版本可以连接以下提供商：\n\n- **Anthropic** (Claude)\n- **Google** (Gemini)\n- **OpenAI** (GPT)\n\n使用 `docker compose up` 即可快速开始。',
  'demo.chatReply.recommend': '今天推荐读这些：\n\n1. [Allocation Optimizations in Go](/go.dev/blog/allocation-optimizations) — Go 1.26 的逃逸分析改进显著减少堆分配，关注性能的话值得一读\n2. [Streaming AI Inference on Workers](/blog.cloudflare.com/workers-ai-streaming) — 在 Cloudflare Workers 上以流式方式运行 AI 推理，展示边缘计算的新方向\n3. [What does it take to ship Rust in safety-critical?](/blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/) — 在安全关键领域使用 Rust 的挑战与实践\n\n这些都很值得读。点击任意文章可以查看详情。',
  'demo.chatReply.unread': '我看了一下你的未读文章，挑出几篇可能有意思的：\n\n- [Experimental JSON v2 Package](/go.dev/blog/jsonv2-exp) — Go 新的 JSON 包，尝试解决 `encoding/json` 的一些痛点\n- [Multi-agent workflows often fail. Here\'s how to engineer ones that don\'t.](/github.blog/ai-and-ml/generative-ai/multi-agent-workflows-often-fail-heres-how-to-engineer-ones-that-dont/) — 多智能体系统设计模式，AI 开发者值得关注\n- [Introducing Deno Sandbox](/deno.com/blog/introducing-deno-sandbox) — Deno 的沙箱能力，适合关注安全的开发者\n\n未读文章还不少，有时间可以慢慢看。',
  'demo.chatReply.trending': '从你的订阅源看，最近这些方向比较热：\n\n**AI × 开发工具** 很活跃。[What\'s new with GitHub Copilot coding agent](/github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/) 和 [Streaming AI Inference on Workers](/blog.cloudflare.com/workers-ai-streaming) 都体现了 AI 正在更深地进入基础设施层。\n\n**运行时竞争** 也很有意思。Deno 2.7 支持 Temporal API、Go 1.26 做了优化、Rust 1.92 发布，各语言和运行时都在稳步推进。\n\n**安全** 相关内容也不少，包括 Cloudflare 威胁报告和后量子密码学话题。\n\n你的订阅源覆盖面不错，趋势看得很清楚。',
  'demo.chatReply.surprise': '推荐一篇不太一样的：\n\n[Build a dinosaur runner game with Deno, pt. 1](/deno.com/blog/build-a-game-with-deno-1)\n\n这是一篇用 Deno 构建浏览器“恐龙跑酷”游戏的教程。平时如果基础设施和后端文章看得多，这种轻松的实践内容会很换脑。\n\n另外 [16 Years of Go](/go.dev/blog/16years) 也挺有意思，回顾 16 年历史能看到很多今天习以为常的功能是如何形成的。',
  'demo.chatReply.digest': '这是本周摘要：\n\n## Go\n- [Go 1.26 is Released](/go.dev/blog/go1.26) — 带来逃逸分析优化和 fake time 测试能力\n- [Experimental JSON v2 Package](/go.dev/blog/jsonv2-exp) 发布\n\n## Cloudflare\n- [Welcome to AI Week 2025](/blog.cloudflare.com/welcome-to-ai-week-2025) — Workers 上的流式 AI 推理\n- [Cloudflare Outage: February 20, 2026](/blog.cloudflare.com/cloudflare-outage-february-20-2026) — 故障复盘发布\n\n## Kubernetes\n- [Kubernetes v1.35 Sneak Peek](/kubernetes.io/blog/2025/11/26/kubernetes-v1-35-sneak-peek) — 包含 Mutable PV Node Affinity 等内容\n- [Ingress-NGINX Retirement Plan](/kubernetes.io/blog/2025/11/11/ingress-nginx-retirement) 公布\n\n## Rust\n- [Announcing Rust 1.92.0](/blog.rust-lang.org/2025/12/11/Rust-1.92.0)\n- [What does it take to ship Rust in safety-critical?](/blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/) 受到关注\n\n## 其他\n- [Deno Deploy is Generally Available](/deno.com/blog/deno-deploy-is-ga)\n- [Tailscale Services](/tailscale.com/blog/services-ga) 和 [Peer Relays](/tailscale.com/blog/peer-relays-ga) 均已 GA\n\n这一周内容不少。',
  'demo.summaryReply': '这是演示版，因此不会生成真实 AI 总结。自托管版本可以使用 Anthropic / Gemini / OpenAI 一键总结文章。',
  'demo.translateReply': '这是演示版，因此不会生成真实 AI 翻译。自托管版本可以从 6 个翻译引擎中选择，包括 Anthropic / Gemini / OpenAI / DeepL / Google Translate。',
} satisfies Record<DemoMessageKey, string>

export function getLocale(): Locale {
  const v = localStorage.getItem('locale')
  return v === 'ja' || v === 'en' || v === 'zh' ? v : 'en'
}

export function dt(key: DemoMessageKey): string {
  const locale = getLocale()
  if (locale === 'zh') return zhDict[key]
  return dict[key][locale]
}

/** Simulate SSE-like streaming by emitting text in small chunks with delays. */
export function streamText(text: string, onChunk: (chunk: string) => void): Promise<void> {
  return new Promise(resolve => {
    // Split into small chunks (CJK vs latin)
    const locale = getLocale()
    const chunkSize = locale === 'ja' || locale === 'zh' ? 2 : 5
    const chunks: string[] = []
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize))
    }

    let idx = 0
    const interval = setInterval(() => {
      if (idx >= chunks.length) {
        clearInterval(interval)
        resolve()
        return
      }
      onChunk(chunks[idx])
      idx++
    }, 15) // 15ms per chunk → feels like fast streaming
  })
}
