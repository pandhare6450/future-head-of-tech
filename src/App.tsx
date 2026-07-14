import {
  Terminal,
  Activity,
  Code2,
  Database,
  BrainCircuit,
  Rocket,
  Award,
  ShieldAlert,
  CheckCircle2,
  Check,
  Layers,
  Users,
  Zap,
  Search,
  GitBranch,
  Clock,
  Sparkles,
  TrendingUp,
  Cpu,
  Bookmark,
  GraduationCap,
  Scale,
  ShieldCheck,
  Target
} from 'lucide-react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export default function App() {
  // Challenges Data
  const challenges = [
    {
      id: 'item-1',
      title: 'A. Meeting Release Deadlines',
      icon: Clock,
      status: 'In Progress',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      challenges: [
        'Some features exceed estimated timelines.',
        'Requirement changes during development affect sprint commitments.',
        'Cross-team dependencies delay deliveries.',
        'Bug fixing and production support impact planned work.'
      ],
      actions: [
        'Improved sprint planning and estimation discussions.',
        'Better prioritization based on business value.',
        'Frequent sprint progress reviews.',
        'Early blocker identification.'
      ],
      future: [
        'Milestone-based tracking for large features.',
        'AI-assisted estimation support.',
        'Better dependency planning.',
        'Introduce microservice architecture to separate common services (notifications, plan page updates, logs generation, etc.).',
        'Engineering KPI dashboard.'
      ],
      outcome: 'Better sprint predictability, higher on-time delivery, and reduced last-minute delays.'
    },
    {
      id: 'item-2',
      title: 'B. Moving Tasks to Upper Environments',
      icon: GitBranch,
      status: 'Action Taken',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      challenges: [
        'Delays in moving completed work to QA/UAT.',
        'Manual deployment coordination.',
        'Multiple developers involved during deployments.'
      ],
      actions: [
        'Standard deployment checklist.',
        'Improved release coordination.'
      ],
      future: [
        'Branch-based deployment instead of commit/file-based movement.',
        'Automated deployment validation.',
        'Rollback strategy.',
        'CI/CD improvements.'
      ],
      outcome: 'Faster releases, reduced deployment risk, and better traceability.'
    },
    {
      id: 'item-3',
      title: 'C. Task Distribution & Team Awareness',
      icon: Users,
      status: 'Improving',
      color: 'text-emerald-600 bg-emerald-55 border-emerald-200',
      challenges: [
        'Knowledge concentrated with individual developers.',
        'Limited visibility into ongoing work.',
        'Cross-functional awareness needs improvement.'
      ],
      actions: [
        'Regular technical discussions.',
        'Shared implementation approaches.',
        'Better collaboration during development.'
      ],
      future: [
        'Weekly architecture walkthroughs.',
        'Module ownership rotation.',
        'Internal engineering wiki.',
        'Better documentation.',
        'Cross-team mentoring.'
      ],
      outcome: 'Reduced dependency on individuals, easier onboarding, and better collaboration.'
    },
    {
      id: 'item-4',
      title: 'D. Impact Analysis',
      icon: ShieldAlert,
      status: 'Action Taken',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      challenges: [
        'Some edge cases are missed.',
        'Regression impacts discovered late.',
        'Cross-module dependencies are not always fully evaluated.'
      ],
      actions: [
        'Mandatory impact analysis.',
        'Stronger code review standards.'
      ],
      future: [
        'AI-assisted impact analysis.',
        'Dependency mapping.',
        'Standard engineering checklist.',
        'Architecture reviews for major changes.'
      ],
      outcome: 'Fewer production issues, better release confidence, and improved software quality.'
    },
    {
      id: 'item-5',
      title: 'E. Performance Testing',
      icon: Activity,
      status: 'Strategic',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      challenges: [
        'APIs are sometimes tested with limited datasets.',
        'Load testing isn\'t consistently performed.',
        'Production-scale scenarios are not always simulated.'
      ],
      actions: [
        'More focus on production-like datasets.',
        'Performance review for critical APIs.'
      ],
      future: [
        'Standard load-testing framework.',
        'Automated API benchmarking.',
        'Performance baseline before releases.',
        'Monitoring improvements.'
      ],
      outcome: 'Better scalability, faster APIs, and improved user experience.'
    }
  ]

  // Achievements Data
  const achievements = [
    {
      title: 'Memoization & Caching',
      description: 'Analyzed pages with infrequently changing data and implemented memoization/caching.',
      benefits: [
        'Faster page loads.',
        'Reduced database calls.',
        'Lower server load.'
      ],
      icon: Zap,
      gradient: 'from-amber-500/10 to-orange-500/5 border-amber-200 bg-white'
    },
    {
      title: 'Cross-Repository API Architecture',
      description: 'Created reusable APIs as a Single Source of Truth instead of duplicating business logic across repositories.',
      benefits: [
        'Consistent business logic.',
        'Less duplicate code.',
        'Easier maintenance.',
        'Faster development.'
      ],
      icon: Layers,
      gradient: 'from-blue-500/10 to-indigo-500/5 border-blue-200 bg-white'
    },
    {
      title: 'Modern UI Architecture',
      description: 'Introduced and promoted modern frontend technologies and reusable component standards.',
      benefits: [
        'Better user experience.',
        'Cleaner component structure.',
        'Faster UI development.',
        'Improved maintainability.'
      ],
      icon: Code2,
      details: ['Shadcn UI', 'AddonJS/AdonisJS', 'DSA-based implementation for ARI'],
      gradient: 'from-purple-500/10 to-pink-500/5 border-purple-200 bg-white'
    },
    {
      title: 'AI-Assisted Development',
      description: 'Integrated trusted AI tools with project-specific context to boost productivity.',
      benefits: [
        'Higher developer productivity.',
        'Better code consistency.',
        'Reduced repetitive work.'
      ],
      icon: BrainCircuit,
      details: ['Code Generation', 'Refactoring & Documentation', 'Edge Case Identification'],
      gradient: 'from-emerald-500/10 to-teal-500/5 border-emerald-200 bg-white'
    },
    {
      title: 'Real-Time Kafka Message Broker',
      description: 'Implemented Apache Kafka to establish a high-throughput, near real-time streaming and messaging pipeline.',
      benefits: [
        'Eliminated architectural dependencies on multi-level architectures like SQS and RabbitMQ.',
        'Achieved near real-time log generation with zero messaging latency.',
        'Decoupled system dependencies for faster and safer message consumption.'
      ],
      icon: Terminal,
      details: ['Apache Kafka', 'Real-time Logs', 'Decoupled Pipelines'],
      gradient: 'from-cyan-500/10 to-blue-500/5 border-cyan-200 bg-white'
    }
  ]

  // Database Strategy
  const dbStrategies = [
    {
      title: 'MongoDB Atlas Search',
      description: 'Implemented and evaluated MongoDB Atlas Search for scalable search capabilities.',
      items: ['Full-text search', 'Multi-field search', 'Auto-complete', 'Fuzzy search', 'Advanced filtering', 'Better search relevance'],
      value: 'Faster search, better user experience, reduced backend processing, and scalable search architecture.',
      icon: Search
    },
    {
      title: 'Advanced Aggregation Framework',
      description: 'Designed and optimized complex aggregation pipelines to handle heavy backend computations.',
      items: ['Multi-stage aggregations', 'Complex $lookup joins', 'Dynamic filtering', 'Conditional projections', 'Pagination', 'Data transformation'],
      value: 'Faster APIs, reduced database calls, cleaner backend code, and better scalability.',
      icon: Cpu
    },
    {
      title: 'Query Optimization',
      description: 'In-depth tuning of database read performance and restructuring database operations.',
      items: ['Query optimization', 'Aggregation tuning', 'Explain plan analysis', 'Projection optimization', 'Lookup optimization', 'Pipeline restructuring'],
      value: 'Lower database load, better API performance, and improved scalability.',
      icon: Activity
    },
    {
      title: 'Database Index Strategy',
      description: 'Established indexing best practices to guarantee high query efficiency.',
      items: ['Compound & Covering indexes', 'Partial & Sparse indexes', 'TTL & Text indexes', 'Atlas Search indexes', 'Redundant index cleanup', 'Index usage monitoring'],
      value: 'Faster queries, better read/write performance, and lower infrastructure cost.',
      icon: Bookmark
    },
    {
      title: 'Large Data Handling',
      description: 'Designed scalable architectures for massive datasets and archiving strategy.',
      items: ['Log archival strategy', 'Large collection optimization', 'Data lifecycle management', 'Performance monitoring', 'Scalable collection design'],
      value: 'Sustainable performance, better scalability, and reduced operational costs.',
      icon: Database
    }
  ]

  // AI Initiatives
  const aiInitiatives = [
    {
      title: 'AI-Based Jira Ticket Generation',
      status: 'In development',
      meta: 'Validated using dummy data',
      description: 'Automatically generates ARI tickets, booking tickets, root cause summaries, acceptance criteria, and suggested implementations.'
    },
    {
      title: 'AI-Based Impact Analysis',
      status: 'Planned',
      description: 'Automatically identifies impacted APIs, database collections, UI screens, background jobs, service dependencies, and regression risks.'
    },
    {
      title: 'AI Code Review Assistant',
      status: 'Planned',
      description: 'AI performs initial reviews checking for security issues, performance concerns, coding standards, null checks, edge cases, and best practices.'
    },
    {
      title: 'AI Test Case Generation',
      status: 'Planned',
      description: 'Automatically creates functional test cases, API scenarios, boundary conditions, invalid input cases, regression tests, and performance test scenarios.'
    },
    {
      title: 'AI Release Notes Generator',
      status: 'Planned',
      description: 'Automatically prepares feature summaries, bug fixes, breaking changes, and deployment notes.'
    },
    {
      title: 'AI Documentation Assistant',
      status: 'Planned',
      description: 'Generates API documentation, technical documentation, architecture notes, and developer guides.'
    },
    {
      title: 'AI Root Cause Analysis',
      status: 'Planned',
      description: 'Uses logs and monitoring data to suggest likely causes of issues before manual investigation.'
    },
    {
      title: 'AI Query Optimizer',
      status: 'Planned',
      description: 'Reviews MongoDB queries and suggests better indexes, aggregation improvements, and query optimizations.'
    }
  ]

  // Emerging Tech
  const emergingTech = [
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      useCases: ['Engineering knowledge assistant', 'API documentation search', 'Product documentation & business rules', 'Developer onboarding'],
      value: 'Faster knowledge access, reduced dependency on senior developers, and more accurate AI responses.',
      icon: BrainCircuit
    },
    {
      title: 'Model Context Protocol (MCP)',
      useCases: ['Jira & Git repositories integrations', 'Internal APIs & Documentation', 'Databases & CI/CD pipeline connectors'],
      value: 'AI interacts directly with engineering systems, leading to less manual work and smarter automation.',
      icon: Terminal
    }
  ]

  // Automation & Tech Adoption
  const automationRoadmap = [
    {
      title: 'Branch-Based Deployment',
      status: 'In Progress',
      description: 'Move complete feature branches across environments instead of individual commits/files.',
      benefits: ['Cleaner deployments', 'Better traceability', 'Easier rollback', 'Reduced release errors']
    },
    {
      title: 'Engineering Knowledge Portal',
      status: 'Planned',
      description: 'A centralized portal for architecture decisions, APIs, business rules, and best practices, integrated with AI search.',
      benefits: ['Consolidated knowledge', 'AI-powered search', 'Accelerated onboarding']
    },
    {
      title: 'Engineering Checklists',
      status: 'Planned',
      description: 'Standardize reviews before every release: impact analysis, security reviews, performance validation, and test coverage.',
      benefits: ['Guaranteed quality baseline', 'Consistent audit trail', 'Higher release confidence']
    }
  ]

  // Business Outcomes
  const outcomes = [
    { area: 'Delivery', impact: 'Faster, more predictable releases' },
    { area: 'Quality', impact: 'Fewer production defects and regressions' },
    { area: 'Productivity', impact: 'Higher developer efficiency through AI and automation' },
    { area: 'Performance', impact: 'Faster APIs and improved application scalability' },
    { area: 'Search', impact: 'Faster, more accurate search with MongoDB Atlas Search' },
    { area: 'Database', impact: 'Optimized queries, aggregations, and indexing for lower latency' },
    { area: 'Knowledge Sharing', impact: 'Reduced dependency on individual developers' },
    { area: 'Deployment', impact: 'Safer, faster, and more traceable releases' },
    { area: 'Innovation', impact: 'Adoption of AI, RAG, MCP, Golang, Rust, and modern engineering practices' },
    { area: 'Cost', impact: 'Lower rework, optimized infrastructure usage, and improved engineering efficiency' }
  ]

  // Strategic Goals
  const strategicGoals = [
    'Build an AI-enabled engineering organization.',
    'Standardize engineering processes across all repositories.',
    'Improve release quality through automation and AI-assisted reviews.',
    'Optimize MongoDB performance with advanced aggregation, indexing, and Atlas Search.',
    'Modernize the technology stack by evaluating Go and Rust where they provide measurable value.',
    'Strengthen engineering knowledge sharing to reduce key-person dependency.',
    'Establish performance, scalability, and security as core engineering standards.',
    'Invest in continuous upskilling to keep the team aligned with evolving technologies.'
  ]

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 font-sans selection:bg-purple-600 selection:text-white pb-16">
      
      {/* Upper Navigation & Branding Header */}
      <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2 rounded-lg text-white shadow-md shadow-purple-600/10">
              <Cpu className="size-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-indigo-800">
                Bakuun Engineering Update
              </span>
              <span className="ml-2 text-xs text-zinc-400 hidden sm:inline-block border-l border-zinc-200 pl-2">
                Tech Strategy &amp; Roadmap
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-purple-700 border-purple-200 bg-purple-50">
              Head of Technology Update
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8 border-b border-zinc-200/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 px-3 py-1 text-xs rounded-full">
            Engineering Strategy &amp; Roadmaps
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6 max-w-4xl mx-auto leading-tight">
            Engineering Update, Achievements &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              Future Roadmap
            </span>
          </h1>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Building an engineering organization that is <strong className="text-zinc-800 font-semibold">scalable, AI-enabled, quality-driven, and future-ready</strong>.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12 text-left">
            <div className="bg-white border border-zinc-200/80 rounded-xl p-5 hover:border-zinc-300 shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Predictability</span>
                <Clock className="text-amber-600 size-4" />
              </div>
              <div className="text-2xl font-bold text-zinc-850">Sprint Sync</div>
              <div className="text-xs text-zinc-500 mt-1">Improved predictability &amp; timelines</div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-xl p-5 hover:border-zinc-300 shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Database</span>
                <Database className="text-indigo-600 size-4" />
              </div>
              <div className="text-2xl font-bold text-zinc-850">Mongo Atlas</div>
              <div className="text-xs text-zinc-500 mt-1">Optimized query, search &amp; indexing</div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-xl p-5 hover:border-zinc-300 shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Dev Velocity</span>
                <BrainCircuit className="text-emerald-600 size-4" />
              </div>
              <div className="text-2xl font-bold text-zinc-850">AI Enabled</div>
              <div className="text-xs text-zinc-500 mt-1">Code review, analysis &amp; testing</div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-xl p-5 hover:border-zinc-300 shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Architecture</span>
                <Rocket className="text-purple-600 size-4" />
              </div>
              <div className="text-2xl font-bold text-zinc-850">Stack Modern</div>
              <div className="text-xs text-zinc-500 mt-1">Vite + React, Golang, Rust eval</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Tabs defaultValue="overview" className="space-y-8">
          
          {/* Navigation Tabs Bar */}
          <div className="flex justify-center border-b border-zinc-200 pb-2">
            <TabsList className="bg-zinc-100 border border-zinc-200 p-1 rounded-xl flex flex-wrap gap-1">
              <TabsTrigger value="overview" className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm">
                Overview &amp; Vision
              </TabsTrigger>
              <TabsTrigger value="challenges" className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm">
                Challenges
              </TabsTrigger>
              <TabsTrigger value="achievements" className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm">
                Achievements
              </TabsTrigger>
              <TabsTrigger value="database" className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm">
                Database &amp; Search
              </TabsTrigger>
              <TabsTrigger value="ai" className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm">
                AI Initiatives
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm">
                Roadmap &amp; Outcomes
              </TabsTrigger>
            </TabsList>
          </div>

          {/* OVERVIEW & VISION TAB */}
          <TabsContent value="overview" className="space-y-8 focus:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Vision Card */}
              <Card className="col-span-2 bg-white border border-zinc-200/80 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-zinc-950 flex items-center gap-2">
                    <Sparkles className="text-purple-600 size-5" />
                    Our Core Vision
                  </CardTitle>
                  <CardDescription className="text-zinc-500">
                    Established tenets for building a high-performing engineering group.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-zinc-600 leading-relaxed text-base">
                    The principal objective is to construct an engineering organization that is{' '}
                    <span className="text-purple-700 font-semibold underline decoration-purple-600/35 decoration-2 underline-offset-4">
                      scalable, AI-enabled, quality-driven, and future-ready
                    </span>
                    . We focus not only on delivering features but also on:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-3 bg-zinc-50/50 p-4 rounded-lg border border-zinc-100">
                      <div className="bg-purple-500/10 text-purple-600 p-2 rounded-md mt-0.5 animate-pulse">
                        <TrendingUp className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 text-sm">Developer Efficiency</h4>
                        <p className="text-xs text-zinc-500 mt-1">Enhancing productivity via automation, templates, and refined developer setups.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-zinc-50/50 p-4 rounded-lg border border-zinc-100">
                      <div className="bg-indigo-500/10 text-indigo-600 p-2 rounded-md mt-0.5">
                        <ShieldCheck className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 text-sm">Software Quality</h4>
                        <p className="text-xs text-zinc-500 mt-1">Rigorous code reviews, automated unit &amp; regression tests, and solid impact analyses.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-zinc-50/50 p-4 rounded-lg border border-zinc-100">
                      <div className="bg-emerald-500/10 text-emerald-600 p-2 rounded-md mt-0.5">
                        <Zap className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 text-sm">Modern Tech &amp; AI</h4>
                        <p className="text-xs text-zinc-500 mt-1">Leveraging AI code reviewer tools, Jira automation, RAG assistants, and optimized DB patterns.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-zinc-50/50 p-4 rounded-lg border border-zinc-100">
                      <div className="bg-cyan-500/10 text-cyan-600 p-2 rounded-md mt-0.5">
                        <GraduationCap className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 text-sm">Continuous Learning</h4>
                        <p className="text-xs text-zinc-500 mt-1">Upskilling on distributed system designs, Golang, Rust, RAG, and performance engineering.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Goals Quick List */}
              <Card className="bg-white border border-zinc-200/80 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-zinc-950 flex items-center gap-2">
                    <Target className="text-indigo-600 size-5" />
                    Strategic Goals
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-xs uppercase tracking-wider">
                    Next 12 Months
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                  {strategicGoals.map((goal, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-sm text-zinc-600">
                      <div className="mt-1 bg-indigo-50 text-indigo-600 p-0.5 rounded-full shrink-0">
                        <Check className="size-3" />
                      </div>
                      <span>{goal}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Closing Statement Panel */}
            <Card className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 border border-purple-100 shadow-xs">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-indigo-50 text-indigo-650 p-4 rounded-full shrink-0 border border-indigo-100">
                    <Award className="size-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-950 text-lg mb-2">Statement from the Head of Technology</h3>
                    <blockquote className="text-zinc-650 italic text-sm border-l-2 border-indigo-400 pl-4 py-1 leading-relaxed">
                      "As Head of Technology, my responsibility extends beyond delivering features. My goal is to establish a high-performing engineering organization that balances speed with quality, leverages AI to automate repetitive work, adopts modern technologies where they deliver clear business value, and builds scalable systems capable of supporting the company's growth."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CHALLENGES TAB */}
          <TabsContent value="challenges" className="space-y-6 focus:outline-none">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-bold text-zinc-950 flex items-center gap-2">
                  <ShieldAlert className="text-rose-600 size-5" />
                  Engineering Challenges &amp; Resolution Actions
                </h2>
                <p className="text-zinc-500 text-sm">
                  Click on each challenge area below to review the detailed challenges faced, actions taken, future roadmap, and outcomes.
                </p>
              </div>

              <Accordion className="w-full space-y-4" defaultValue={["item-1"]}>
                {challenges.map((item) => {
                  const IconComp = item.icon
                  return (
                    <AccordionItem
                      value={item.id}
                      key={item.id}
                      className="border border-zinc-200 bg-white rounded-xl overflow-hidden px-4 hover:border-zinc-300 transition-all shadow-sm"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg border ${item.color}`}>
                            <IconComp className="size-4" />
                          </div>
                          <span className="font-semibold text-zinc-800 text-sm sm:text-base text-left">
                            {item.title}
                          </span>
                          <Badge variant="secondary" className="ml-2 text-xs opacity-75 hidden sm:inline-block bg-zinc-100 text-zinc-800 border border-zinc-200">
                            {item.status}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          {/* Left Column: Challenges vs Actions */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-xs font-semibold text-rose-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <ShieldAlert className="size-3.5" /> Current Challenges
                              </h4>
                              <ul className="space-y-1.5">
                                {item.challenges.map((ch, idx) => (
                                  <li key={idx} className="text-sm text-zinc-650 flex items-start gap-2">
                                    <span className="text-rose-600 mt-1 shrink-0">•</span>
                                    <span>{ch}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <CheckCircle2 className="size-3.5" /> Actions Taken
                              </h4>
                              <ul className="space-y-1.5">
                                {item.actions.map((act, idx) => (
                                  <li key={idx} className="text-sm text-zinc-650 flex items-start gap-2">
                                    <span className="text-emerald-600 mt-1 shrink-0">✓</span>
                                    <span>{act}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column: Future Plan & Outcome */}
                          <div className="space-y-4">
                            <div className="bg-zinc-50/50 p-4 rounded-xl border border-zinc-100">
                              <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <Rocket className="size-3.5" /> Future Plan
                              </h4>
                              <ul className="space-y-1.5">
                                {item.future.map((fut, idx) => (
                                  <li key={idx} className="text-sm text-zinc-650 flex items-start gap-2">
                                    <span className="text-indigo-600 mt-1 shrink-0">→</span>
                                    <span>{fut}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 p-4 rounded-xl border border-purple-100">
                              <h4 className="text-xs font-semibold text-purple-700 uppercase tracking-widest mb-1.5">
                                Expected Outcome
                              </h4>
                              <p className="text-sm text-purple-900 font-medium">
                                {item.outcome}
                              </p>
                            </div>
                          </div>

                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </TabsContent>

          {/* ACHIEVEMENTS TAB */}
          <TabsContent value="achievements" className="space-y-6 focus:outline-none">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl font-bold text-zinc-950 flex items-center gap-2">
                <Award className="text-purple-600 size-5" />
                Engineering Improvements Delivered
              </h2>
              <p className="text-zinc-500 text-sm">
                A review of core engineering improvements deployed to production recently to optimize speed, logic consistency, and dev workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((ach, idx) => {
                const Icon = ach.icon
                return (
                  <Card key={idx} className={`bg-gradient-to-br ${ach.gradient} border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors`}>
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="p-2.5 bg-zinc-50 rounded-lg text-purple-600 shrink-0 border border-zinc-100">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-zinc-950 text-lg font-semibold">{ach.title}</CardTitle>
                        <CardDescription className="text-zinc-500 text-xs">{ach.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {ach.details && (
                        <div className="flex flex-wrap gap-2">
                          {ach.details.map((detail, dIdx) => (
                            <Badge key={dIdx} variant="secondary" className="bg-zinc-100 text-zinc-700 text-[10px] border border-zinc-200">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-purple-700 uppercase tracking-widest">Key Benefits:</h4>
                        <ul className="space-y-1.5">
                          {ach.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="text-sm text-zinc-650 flex items-start gap-2">
                              <span className="text-purple-600 mt-1 shrink-0">✔</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* DATABASE TAB */}
          <TabsContent value="database" className="space-y-8 focus:outline-none">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              
              {/* Left Column: List of Strategies */}
              <div className="flex-1 space-y-6 w-full">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-2xl font-bold text-zinc-950 flex items-center gap-2">
                    <Database className="text-indigo-600 size-5" />
                    Database &amp; Search Engineering Excellence
                  </h2>
                  <p className="text-zinc-500 text-sm">
                    Strategic practices and optimizations established to ensure database health, quick access speeds, and data scaling.
                  </p>
                </div>

                <div className="space-y-4">
                  {dbStrategies.map((strategy, idx) => {
                    const Icon = strategy.icon
                    return (
                      <Card key={idx} className="bg-white border border-zinc-200/80 shadow-sm">
                        <CardHeader className="flex flex-row items-center gap-3.5 pb-2">
                          <div className="p-2 bg-indigo-50 text-indigo-650 border border-indigo-100 rounded-lg shrink-0">
                            <Icon className="size-4" />
                          </div>
                          <CardTitle className="text-zinc-950 text-base font-semibold">{strategy.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-zinc-500 text-xs">{strategy.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {strategy.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex gap-1.5 items-center text-zinc-600">
                                <div className="size-1.5 bg-indigo-500 rounded-full" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 mt-2 text-xs">
                            <span className="font-semibold text-indigo-600">Business Value: </span>
                            <span className="text-zinc-650">{strategy.value}</span>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: Emerging Technologies & RAG */}
              <div className="w-full lg:w-96 space-y-6">
                <div className="bg-gradient-to-br from-indigo-50/50 via-white to-zinc-50 border border-zinc-200/80 rounded-2xl p-6 shadow-md space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
                    <BrainCircuit className="text-indigo-600 size-5" />
                    <h3 className="font-bold text-zinc-950 text-lg">Emerging Tech Spotlight</h3>
                  </div>

                  {emergingTech.map((tech, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-indigo-50 text-indigo-700 border border-indigo-100">{tech.title}</Badge>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Potential Use Cases</span>
                        <ul className="space-y-1 text-xs">
                          {tech.useCases.map((useCase, uIdx) => (
                            <li key={uIdx} className="text-zinc-600 flex items-start gap-1.5">
                              <span className="text-indigo-500">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100 text-xs">
                        <span className="font-semibold text-indigo-600">Value:</span>{' '}
                        <span className="text-zinc-500">{tech.value}</span>
                      </div>
                      {idx < emergingTech.length - 1 && <div className="border-t border-zinc-200 my-4" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </TabsContent>

          {/* AI INITIATIVES TAB */}
          <TabsContent value="ai" className="space-y-6 focus:outline-none">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl font-bold text-zinc-950 flex items-center gap-2">
                <BrainCircuit className="text-purple-600 size-5" />
                AI &amp; Emerging Technology Initiatives
              </h2>
              <p className="text-zinc-500 text-sm">
                Harnessing generative AI tools and specialized assistants to automate development workflows, review code, optimize queries, and generate documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiInitiatives.map((ai, idx) => {
                const isInDev = ai.status === 'In development'
                return (
                  <Card key={idx} className="bg-white border border-zinc-200/80 hover:border-zinc-300 transition-colors flex flex-col justify-between shadow-sm">
                    <CardHeader className="space-y-2 pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant={isInDev ? 'default' : 'outline'} className={isInDev ? 'bg-amber-600 text-white' : 'text-zinc-500 border-zinc-200'}>
                          {ai.status}
                        </Badge>
                        {ai.meta && (
                          <span className="text-[10px] text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {ai.meta}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-zinc-950 text-sm font-semibold">{ai.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-zinc-500 text-xs leading-relaxed">{ai.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* AI Training Highlight */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1.5">
                <h3 className="text-zinc-950 font-bold flex items-center gap-2">
                  <GraduationCap className="text-purple-600 size-5" />
                  Engineering &amp; AI Training Focus
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm max-w-2xl">
                  Ongoing curriculum targeting upskilling in Prompt Engineering, RAG implementation, Spanner, MongoDB optimizations, system designs, Golang, and Rust.
                </p>
              </div>
              <Badge className="bg-purple-50 text-purple-75 border border-purple-200 px-3 py-1 shrink-0">
                Skills Upskilling Plan
              </Badge>
            </div>
          </TabsContent>

          {/* ROADMAP & OUTCOMES TAB */}
          <TabsContent value="roadmap" className="space-y-8 focus:outline-none">
            
            {/* Visual Roadmap Section */}
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-zinc-950 flex items-center gap-2">
                  <Rocket className="text-cyan-600 size-5" />
                  AI Engineering Phase Roadmap
                </h2>
                <p className="text-zinc-500 text-sm">
                  Progression timeline for AI features, automation tools, and technology adoptions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                
                {/* Phase 1 */}
                <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl relative space-y-4 shadow-sm">
                  <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                    Phase 1 (Current)
                  </div>
                  <h3 className="font-bold text-zinc-950 text-lg">Foundation &amp; Scaffolding</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <CheckCircle2 className="text-emerald-600 size-4 shrink-0" />
                      <span>AI-assisted coding &amp; explanation</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <CheckCircle2 className="text-emerald-600 size-4 shrink-0" />
                      <span>AI Jira Ticket generator (ARI, bookings)</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <CheckCircle2 className="text-emerald-600 size-4 shrink-0" />
                      <span>Branch-based deployment (in-progress)</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <CheckCircle2 className="text-emerald-600 size-4 shrink-0" />
                      <span>RAG &amp; MCP research setup</span>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl relative space-y-4 shadow-sm">
                  <div className="absolute top-4 right-4 bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                    Phase 2 (Next Qtr)
                  </div>
                  <h3 className="font-bold text-zinc-950 text-lg">Intelligent Review &amp; Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <Clock className="text-indigo-600 size-4 shrink-0" />
                      <span>AI code review assistant</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <Clock className="text-indigo-600 size-4 shrink-0" />
                      <span>AI impact analysis (impacted APIs, DB)</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <Clock className="text-indigo-600 size-4 shrink-0" />
                      <span>AI-generated functional test cases</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <Clock className="text-indigo-600 size-4 shrink-0" />
                      <span>AI Release Notes &amp; Documentation</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-650 text-xs">
                      <Clock className="text-indigo-600 size-4 shrink-0" />
                      <span>AI query optimization tuning</span>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl relative space-y-4 shadow-sm">
                  <div className="absolute top-4 right-4 bg-purple-50 text-purple-700 border border-purple-200 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                    Phase 3 (Future)
                  </div>
                  <h3 className="font-bold text-zinc-950 text-lg">Autonomous Engineering</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Sparkles className="text-purple-600 size-4 shrink-0" />
                      <span>AI Engineering Copilot Integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Sparkles className="text-purple-600 size-4 shrink-0" />
                      <span>Engineering Knowledge Assistant</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Sparkles className="text-purple-600 size-4 shrink-0" />
                      <span>Predictive defect detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Sparkles className="text-purple-600 size-4 shrink-0" />
                      <span>Automated root cause analysis (logs)</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Sparkles className="text-purple-600 size-4 shrink-0" />
                      <span>Intelligent deployment recommendations</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Engineering Automation Roadmap & Technology Adoption */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Automation Roadmap */}
              <Card className="bg-white border border-zinc-200/80 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-955 text-base font-bold flex items-center gap-2">
                    <Terminal className="text-cyan-600 size-5" />
                    Engineering Automation Roadmap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {automationRoadmap.map((item, idx) => (
                    <div key={idx} className="space-y-1.5 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-zinc-800 text-xs sm:text-sm">{item.title}</span>
                        <Badge variant={item.status === 'In Progress' ? 'default' : 'outline'} className={item.status === 'In Progress' ? 'bg-amber-600 text-white border border-amber-500' : 'text-zinc-500 border-zinc-200'}>
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-zinc-500 text-xs">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.benefits.map((benefit, bIdx) => (
                          <Badge key={bIdx} variant="secondary" className="bg-white border border-zinc-150 text-[10px] text-zinc-500">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Technology Adoption */}
              <Card className="bg-white border border-zinc-200/80 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-955 text-base font-bold flex items-center gap-2">
                    <Rocket className="text-purple-600 size-5" />
                    Advanced Technology Adoption
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-zinc-950 flex items-center gap-2">
                        <span className="size-2 bg-emerald-500 rounded-full animate-ping" /> Golang
                      </h4>
                      <Badge variant="outline" className="text-emerald-700 border-emerald-200 bg-emerald-50 text-[10px]">
                        Evaluating for APIs
                      </Badge>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      Evaluate for high-concurrency APIs, message queue processing, background workers, and microservices.
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-zinc-150 text-xs">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Expected Benefits</span>
                      <span className="text-zinc-700 font-medium animate-none">High performance, efficient concurrency model, and lower infrastructure footprint.</span>
                    </div>
                  </div>

                  <div className="space-y-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-zinc-950 flex items-center gap-2">
                        <span className="size-2 bg-amber-500 rounded-full" /> Rust
                      </h4>
                      <Badge variant="outline" className="text-amber-700 border-amber-200 bg-amber-50 text-[10px]">
                        Evaluating for Workloads
                      </Badge>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      Evaluate for performance-critical components, memory-safe services, and high-throughput background workloads.
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-zinc-150 text-xs">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Expected Benefits</span>
                      <span className="text-zinc-700 font-medium">Excellent performance, guaranteed memory safety, and high-reliability systems.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Expected Business Outcomes Table */}
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-950 text-lg flex items-center gap-2">
                <Scale className="text-purple-650 size-5" />
                Expected Business Outcomes
              </h3>
              
              <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <Table>
                  <TableHeader className="bg-zinc-50">
                    <TableRow className="hover:bg-transparent border-zinc-200">
                      <TableHead className="text-zinc-700 font-semibold w-1/4">Engineering Area</TableHead>
                      <TableHead className="text-zinc-700 font-semibold">Projected Business Impact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {outcomes.map((row, idx) => (
                      <TableRow key={idx} className="hover:bg-zinc-50/50 border-zinc-200">
                        <TableCell className="font-semibold text-purple-700 text-xs sm:text-sm">{row.area}</TableCell>
                        <TableCell className="text-zinc-650 text-xs sm:text-sm">{row.impact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

          </TabsContent>

        </Tabs>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-400">
        <p>© 2026 Bakuun Engineering Organization. All rights reserved.</p>
        <p className="mt-1">Head of Technology Strategic Update &amp; Roadmap Plan.</p>
      </footer>

    </div>
  )
}
