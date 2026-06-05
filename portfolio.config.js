window.PORTFOLIO = {
  filters: ["All", "Agent / Verification", "Product AI", "Robotics / Defense", "Graphics / Engine"],
  proofSignals: [
    { label: "Base", value: "cross-domain systems" },
    { label: "Differentiator", value: "agent failure proof" },
    { label: "Method", value: "build -> verify -> limits" },
    { label: "Evidence", value: "tests + metrics" },
  ],
  operatingPrinciples: [
    {
      title: "AI is directed, not obeyed",
      text:
        "AI에게 후보를 만들게 하되 latency, scope, security, testability 기준으로 직접 reject/accept합니다.",
    },
    {
      title: "Systems depth stays visible",
      text:
        "AI/agent 직무가 아니어도 제어 contract, geometry risk, benchmark 조건, data artifact를 먼저 설명할 수 있게 씁니다.",
    },
    {
      title: "Evidence closes the loop",
      text:
        "검증했다는 말 대신 실행 명령, 수치, 실패 조건, known limit을 남겨 면접에서 재현 가능한 설명으로 닫습니다.",
    },
  ],
  roleLenses: [
    {
      title: "AI / Agent Engineer",
      route: "HaltTrace -> LinguaCall -> LLM-First Robot Control",
      emphasis: "agent/tool boundary, contract tests, AI runtime productization",
      proof:
        "HaltTrace를 먼저 보여주고, AI가 실패하는 지점을 hook/router/trigger policy와 test로 어떻게 잡는지 설명합니다.",
    },
    {
      title: "Robotics / Defense / Systems",
      route: "LLM-First Robot Control -> ForgeXR -> GPU 3D Algorithm -> UE5 ITD Parser",
      emphasis: "control contract, data quality, geometry risk, performance measurement",
      proof:
        "AI를 전면에 세우기보다 제어 파라미터, dataset artifact, BVH/BVTT benchmark, engine mesh contract를 먼저 보여줍니다.",
    },
    {
      title: "Product AI Engineer",
      route: "LinguaCall -> HaltTrace -> ForgeXR",
      emphasis: "realtime UX, worker split, launch stack, operational evidence",
      proof:
        "사용자 경험 안에서 AI를 어떻게 연결하고, 비동기 처리와 운영 검증을 어디까지 닫았는지 보여줍니다.",
    },
  ],
  evidenceBoard: [
    {
      metric: "npm test 30/30",
      project: "HaltTrace",
      meaning: "observer-only dump workflow와 latest/explain/handoff CLI를 tests로 고정",
      repo: "https://github.com/FrogRim/halttrace",
    },
    {
      metric: "JSON compliance 100%",
      project: "LLM-First Robot Control",
      meaning: "자연어 출력을 설명문이 아니라 로봇 제어 contract로 제한",
      repo: "https://github.com/FrogRim/LLM-First-Robot-Control",
    },
    {
      metric: "task success 55.6%",
      project: "LLM-First Robot Control",
      meaning: "언어 기반 제어 파라미터 변환의 실제 task 성공률을 수치화",
      repo: "https://github.com/FrogRim/LLM-First-Robot-Control",
    },
    {
      metric: "847ms -> 126ms",
      project: "GPU 3D Algorithm",
      meaning: "brute force 충돌 감지 대비 BVTT traversal 성능 개선",
      repo: "https://github.com/FrogRim/GPU_3DAlgorithm",
    },
    {
      metric: "12,182 triangles",
      project: "GPU 3D Algorithm",
      meaning: "동일 scene 조건에서 충돌 후보 탐색 비용을 비교",
      repo: "https://github.com/FrogRim/GPU_3DAlgorithm",
    },
    {
      metric: "trainer smoke",
      project: "Robot Data Forge",
      meaning: "teleoperation trajectory를 HDF5 export와 trainer loader까지 통과시키는 artifact proof",
      repo: "https://github.com/FrogRim/ForgeXR",
    },
  ],
  stackGroups: [
    {
      label: "Agent reliability",
      items: ["TypeScript", "Node.js", "Hooks", "Dump CLI", "Contract Tests"],
      usedFor: "coding-agent 세션 관찰, Codex/Claude hook adapter, 로컬 failure triage와 handoff prompt",
    },
    {
      label: "Product AI runtime",
      items: ["React", "WebRTC", "OpenAI Realtime", "Worker Queue", "Supabase"],
      usedFor: "실시간 음성 UX, 세션 관리, 비동기 리포트 생성, launch stack 축소",
    },
    {
      label: "Robotics / data",
      items: ["Python", "FastAPI", "Isaac Lab", "OpenXR", "HDF5"],
      usedFor: "제어 contract, trajectory 수집, evaluator, curation, trainer smoke check",
    },
    {
      label: "Graphics / engine",
      items: ["C++", "OpenGL", "BVH/BVTT", "Unreal Engine", "UFactory"],
      usedFor: "충돌 감지 성능 측정, engine importer, geometry risk 분석",
    },
    {
      label: "Verification habits",
      items: ["Typecheck", "Unit Tests", "Smoke Tests", "Benchmarks", "Known Limits"],
      usedFor: "AI가 만든 후보를 설명 가능한 결과로 남기기 위한 최소 검증 루프",
    },
  ],
  caseStudies: [
    {
      title: "HaltTrace",
      domain: "Agent reliability / verification",
      repo: "https://github.com/FrogRim/halttrace",
      problem: "AI agent 세션이 hook/tool/runtime 경계에서 멈추면 원인 추적에 필요한 최근 맥락이 흩어집니다.",
      method:
        "Claude/Codex adapter에서 이벤트를 observer-only router로 모으고, trigger policy가 맞을 때만 로컬 Markdown dump를 남긴 뒤 latest/explain/handoff CLI로 소비합니다.",
      decision:
        "기본 halttrace CLI는 사용자용 failure automation entry로 두고, hook 실행은 halttrace-claude/halttrace-codex로 분리했습니다.",
      aiRecord:
        "AI에게 dump workflow가 자동 수리나 policy gate처럼 과장될 위험을 검토하게 한 뒤 no retry, no network, no provider dependency를 문서화했습니다.",
      evidence: "npm test 30/30, dump workflow tests, latest/explain/handoff, known limits",
    },
    {
      title: "LinguaCall",
      domain: "Product AI runtime",
      repo: "https://github.com/FrogRim/LinguaCall",
      problem: "말하기 연습은 실시간 턴 제어와 학습 리포트가 분리되면 실제 대화처럼 훈련하기 어렵습니다.",
      method:
        "브라우저는 WebRTC로 OpenAI Realtime에 직접 연결하고, API/worker는 인증, 세션, 결제, 리포트를 분리했습니다.",
      decision:
        "초기 SaaS-heavy 구성을 줄이고 Supabase/Toss/VPS 중심 launch stack으로 좁혀 MVP 검증 속도를 우선했습니다.",
      aiRecord:
        "AI에는 WebRTC 세션 후보, worker 분리 위험, launch smoke 관점을 지시했고 결과는 lint/typecheck/build/smoke로 검증합니다.",
      evidence: "PTT voice path, worker report split, launch smoke commands, scope reduction log",
    },
    {
      title: "GPU 3D Algorithm",
      domain: "Graphics / systems depth",
      repo: "https://github.com/FrogRim/GPU_3DAlgorithm",
      problem: "삼각형 쌍을 brute force로 비교하면 모델 크기에 따라 충돌 감지 비용이 급격히 증가합니다.",
      method:
        "AABB, BVH, BVTT를 직접 구현하고 동일 scene에서 brute force/BVH/BVTT 처리 시간을 비교했습니다.",
      decision:
        "정확도를 유지한 채 후보 쌍 탐색을 줄이는 방향으로 최적화하고, OpenGL 디버그 렌더링으로 결과를 확인했습니다.",
      aiRecord:
        "AI에는 공간 자료구조 설명과 benchmark 표 검토를 맡겼고, 복잡도/측정 조건/한계가 과장되지 않도록 수정했습니다.",
      evidence: "12,182 triangles, Brute Force 847ms -> BVTT 126ms, accuracy 100%",
    },
  ],
  projects: [
    {
      title: "HaltTrace",
      lenses: ["Agent / Verification"],
      year: "2026",
      status: "MVP",
      repo: "https://github.com/FrogRim/halttrace",
      description: "coding-agent 세션이 멈춘 뒤 로컬 dump를 deterministic triage와 handoff prompt로 바꾸는 failure automation tool.",
      problem: "agent 작업이 멈춘 뒤 최신 dump 경로, 원인 후보, 증거, 다음 체크, 다음 agent handoff가 손으로 흩어지는 문제",
      decision: "observer-only 원칙은 유지하고 latest/explain/handoff CLI를 추가해 dump 소비 workflow만 자동화",
      evidence: "npm test 30/30, dump workflow tests, no retry/network/provider dependency",
      stack: ["TypeScript", "Node.js", "Hooks", "Dump CLI", "Contract Tests"],
      language: "TypeScript",
      color: "#00e5ff",
    },
    {
      title: "LinguaCall",
      lenses: ["Product AI", "Agent / Verification"],
      year: "2026",
      status: "MVP",
      repo: "https://github.com/FrogRim/LinguaCall",
      description: "WebRTC 기반 실시간 AI 회화 연습과 비동기 학습 리포트 MVP.",
      problem: "실시간 음성 턴 제어와 학습 피드백 흐름이 분리되는 문제",
      decision: "WebRTC direct path + API/worker split + launch stack 축소",
      evidence: "PTT, worker report, smoke commands",
      stack: ["React", "TypeScript", "WebRTC", "OpenAI Realtime", "Supabase"],
      language: "TypeScript",
      color: "#00e5ff",
    },
    {
      title: "LLM-First Robot Control",
      lenses: ["Robotics / Defense", "Agent / Verification"],
      year: "2025-2026",
      status: "Thesis",
      repo: "https://github.com/FrogRim/LLM-First-Robot-Control",
      description: "자연어 명령을 물리 속성과 로봇 제어 파라미터로 구조화하는 연구.",
      problem: "사용자 언어와 로봇 제어 파라미터 사이의 간극",
      decision: "설명 텍스트가 아니라 JSON schema 기반 제어 출력으로 제한",
      evidence: "task success 55.6%, JSON compliance 100%",
      stack: ["Python", "Qwen2.5", "QLoRA", "DROID", "Genesis"],
      language: "Python",
      color: "#00ff88",
    },
    {
      title: "Robot Data Forge",
      lenses: ["Robotics / Defense", "Product AI"],
      year: "2026",
      status: "MVP-1",
      repo: "https://github.com/FrogRim/ForgeXR",
      description: "teleoperation trajectory를 학습 가능한 dataset artifact로 검증하는 파이프라인.",
      problem: "raw trajectory만으로는 학습 가능성 판단 불가",
      decision: "policy uplift보다 artifact proof를 MVP-1 목표로 고정",
      evidence: "curation manifest, HDF5 export, trainer smoke",
      stack: ["FastAPI", "Isaac Lab", "OpenXR", "HDF5", "SQLAlchemy"],
      language: "Python",
      color: "#00ff88",
    },
    {
      title: "GPU 3D Algorithm",
      lenses: ["Graphics / Engine", "Robotics / Defense"],
      year: "2024",
      status: "Solo",
      repo: "https://github.com/FrogRim/GPU_3DAlgorithm",
      description: "AABB/BVH/BVTT 기반 3D 충돌 감지 성능 비교와 OpenGL 시각화.",
      problem: "brute force collision detection의 비용 증가",
      decision: "BVTT traversal로 후보 쌍 탐색을 줄이고 정확도 유지",
      evidence: "847ms -> 126ms, accuracy 100%",
      stack: ["C++", "OpenGL", "AABB", "BVH", "BVTT"],
      language: "C++",
      color: "#ff4d8d",
    },
    {
      title: "UE5 ITD Parser Plugin",
      lenses: ["Graphics / Engine", "Robotics / Defense"],
      year: "2024",
      status: "Prototype",
      repo: "https://github.com/FrogRim/UE5-ITD-Parser",
      description: "ITD file과 Unreal Static Mesh pipeline 사이의 데이터 계약 차이를 분석한 plugin prototype.",
      problem: "외부 3D format과 realtime engine mesh contract의 불일치",
      decision: "완성 importer보다 UFactory extension point와 Non-Manifold risk 분석에 집중",
      evidence: "UFactory skeleton, geometry blocker notes",
      stack: ["C++", "Unreal Engine 5", "UFactory", "Static Mesh", "Geometry"],
      language: "C++",
      color: "#ff4d8d",
    },
  ],
  timeline: [
    {
      date: "2026",
      title: "Agent reliability와 product AI runtime",
      text: "HaltTrace와 LinguaCall을 통해 AI agent 실패 관찰, 실시간 음성 UX, worker 분리, 검증 명령을 공개 증거로 정리했습니다.",
    },
    {
      date: "2025",
      title: "LLM 기반 로봇 제어 contract",
      text: "언어 입력을 설명 텍스트가 아니라 제어 파라미터와 검증 가능한 JSON contract로 변환하는 문제를 다뤘습니다.",
    },
    {
      date: "2024",
      title: "그래픽스 알고리즘과 엔진 플러그인",
      text: "성능 측정, 엔진 확장, 비표준 3D 데이터 처리처럼 시스템 하부의 비용과 계약을 다뤘습니다.",
    },
  ],
};
