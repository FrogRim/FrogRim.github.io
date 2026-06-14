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
      route: "Signature Harness -> HaltTrace -> LinguaCall",
      emphasis: "agent completion gating, observer-only failure capture, contract tests, AI runtime productization",
      proof:
        "Signature Harness로 에이전트의 '완료'를 Oracle 검증으로 게이트하고, HaltTrace로 실패 지점을 hook/router/trigger policy와 test로 어떻게 잡는지 보여줍니다.",
    },
    {
      title: "Robotics / Defense / Systems",
      route: "LLM-First Robot Control -> ForgeXR -> GPU 3D Algorithm -> UE5 ITD Parser",
      emphasis: "control contract, data trust layer, lineage, geometry risk, performance measurement",
      proof:
        "AI를 전면에 세우기보다 제어 파라미터, dataset artifact, UR lineage, BVH/BVTT benchmark, engine mesh contract를 먼저 보여줍니다.",
    },
    {
      title: "Product AI Engineer",
      route: "LinguaCall -> HaltTrace -> ForgeXR",
      emphasis: "Realtime GA voice UX, worker split, VPS deployment, operational evidence",
      proof:
        "사용자 경험 안에서 AI를 어떻게 연결하고, 비동기 처리와 운영 검증을 어디까지 닫았는지 보여줍니다.",
    },
  ],
  evidenceBoard: [
    {
      metric: "npm test 31/31",
      project: "HaltTrace",
      meaning: "observer-only dump workflow, latest/explain/handoff/doctor CLI, dump-analysis skill을 tests로 고정",
      repo: "https://github.com/FrogRim/halttrace",
    },
    {
      metric: "benchmark 23 / regression 5",
      project: "Signature Harness",
      meaning: "에이전트의 '완료'를 Oracle 검증·eval suite로 게이트하는 cross-agent goal-loop 하네스",
      repo: "https://github.com/FrogRim/signature-harness",
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
      metric: "MVP-1+ 4 adapters",
      project: "Robot Data Forge",
      meaning: "4개 robot embodiment adapter가 같은 trajectory contract, HDF5 export, trainer smoke gate를 통과",
      repo: "https://github.com/FrogRim/ForgeXR",
    },
  ],
  stackGroups: [
    {
      label: "Agent reliability",
      items: ["TypeScript", "Node.js", "Python", "Hooks", "Goal Loop", "Oracle Verification", "Dump CLI", "Contract Tests"],
      usedFor: "coding-agent 세션 관찰, Codex/Claude hook adapter, goal-loop 완료 검증, 로컬 failure triage와 handoff prompt",
    },
    {
      label: "Product AI runtime",
      items: ["React", "WebRTC", "OpenAI Realtime GA", "Worker Queue", "Docker", "VPS"],
      usedFor: "Realtime 음성 UX, ephemeral client secret, WebRTC SDP 교환, 비동기 리포트, VPS 포트폴리오 배포",
    },
    {
      label: "Robotics / data",
      items: ["Python", "FastAPI", "HDF5", "Trust Records", "Lineage", "Pytest"],
      usedFor: "robot data trust layer, curation manifest, UR file-backed lineage, policy A/B harness readiness",
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
        "Claude/Codex adapter에서 이벤트를 observer-only router로 모으고, trigger policy가 맞을 때만 로컬 Markdown dump를 남긴 뒤 latest/explain/handoff/doctor CLI와 dump-analysis skill로 소비합니다.",
      decision:
        "기본 halttrace CLI는 사용자용 failure automation entry로 두고, hook 실행은 halttrace-claude/halttrace-codex로 분리했습니다.",
      aiRecord:
        "AI에게 dump workflow가 자동 수리나 policy gate처럼 과장될 위험을 검토하게 한 뒤 no retry, no network, no provider dependency를 문서화했습니다.",
      evidence: "npm test 31/31, dump workflow + skill sync tests, latest/explain/handoff/doctor, known limits",
    },
    {
      title: "Signature Harness",
      domain: "Agent reliability / verification",
      repo: "https://github.com/FrogRim/signature-harness",
      problem:
        "에이전트가 '완료'를 선언하는 순간을 그대로 신뢰하면, 실제로 목표가 충족됐는지·중간에 hang이나 drift가 났는지 증거 없이 넘어가게 됩니다.",
      method:
        "목표를 Seed로 고정하고 Active Slice로 좁힌 뒤, 실행 trace·artifact·eval을 기록하고 Oracle 검증을 통과할 때만 완료로 닫습니다. Codex와 Claude Code에서 같은 작업 철학을 쓰도록 portable skill/runtime으로 묶었습니다.",
      decision:
        "범용 비서를 또 만들지 않고 1차 vertical을 'AI coding-agent completion auditor'로 좁혔습니다. 외부 runner의 hang artifact는 process를 직접 죽이지 않고 cleanup/reset 증거만 검수합니다.",
      aiRecord:
        "AI에 'host-level E2E 오케스트레이션을 증명했다'처럼 과장될 수 있는 표현을 검토하게 한 뒤, real sandbox adapter 미구현(fail-closed)과 host-level E2E 미검증을 README에 그대로 한계로 남겼습니다.",
      evidence: "benchmark 23 / regression 5 eval suite, run manifest·state·trace·replay·ledger, completion auditor hang/remediation gate, fail-closed sandbox",
    },
    {
      title: "LinguaCall",
      domain: "Product AI runtime",
      repo: "https://github.com/FrogRim/LinguaCall",
      problem: "실시간 AI 회화 MVP는 UI 데모만으로는 부족합니다. 브라우저 마이크 왕복, Realtime 세션 경계, 배포 가능한 런타임 동작까지 한 흐름으로 닫아야 합니다.",
      method:
        "API가 `/v1/realtime/client_secrets`에서 ephemeral client secret을 만들고, 웹 클라이언트가 `/v1/realtime/calls`로 WebRTC SDP를 보내 OpenAI Realtime GA 세션을 엽니다.",
      decision:
        "VPS 포트폴리오 배포에서는 AppInToss를 기본 web Docker 빌드에서 제외하고, 필요할 때만 `VITE_BUILD_APPINTOSS=true`로 켭니다.",
      aiRecord:
        "AI에는 Realtime GA 마이그레이션, 브라우저 마이크 왕복, 빌드 범위 축소를 검토하게 했고, 결과는 테스트·실제 브라우저 음성 검증·VPS 배포 증거로 확인했습니다.",
      evidence: "브라우저 마이크 왕복 확인, Realtime GA client secret/SDP 흐름, VITE_BUILD_APPINTOSS=false 기본, VPS 포트폴리오 데모 배포",
    },
    {
      title: "Robot Data Forge",
      domain: "Robotics data trust layer",
      repo: "https://github.com/FrogRim/ForgeXR",
      problem: "raw robot-action trajectory만 저장하면 학습 가능성, rejected reason, provenance, trainer compatibility를 설명하기 어렵습니다.",
      method:
        "trajectory를 normalized contract로 변환하고 evaluator, curation manifest, HDF5 export, trust record, trainer smoke까지 한 proof path로 묶었습니다.",
      decision:
        "HMD/OpenXR-first 데모를 제품 정체성에서 내리고, MVP-1은 dataset artifact proof로 제한했습니다. MVP-1+에서는 4개 embodiment adapter와 UR file-backed SHA-256 lineage를 추가했습니다.",
      aiRecord:
        "AI가 제안한 policy uplift 표현은 거절하고, MVP-2 harness_ready=true와 proof_eligible=false를 분리해 아직 학습 성능 개선을 주장하지 않도록 문서화했습니다.",
      evidence: "data trust proof 4 accepted/4 rejected, MVP-1+ 4 adapters, HDF5/trainer smoke, UR SHA-256 lineage, MVP-2 harness_ready=true/proof_eligible=false",
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
      description: "coding-agent 세션이 멈춘 뒤 로컬 dump를 deterministic triage, 상태 점검, handoff prompt로 바꾸는 failure automation tool.",
      problem: "agent 작업이 멈춘 뒤 최신 dump 경로, 원인 후보, 증거, 다음 체크, 다음 agent handoff가 손으로 흩어지는 문제",
      decision: "observer-only 원칙은 유지하고 latest/explain/handoff/doctor CLI를 추가해 dump 소비 workflow만 자동화",
      evidence: "npm test 31/31, dump workflow + skill sync tests, no retry/network/provider dependency",
      stack: ["TypeScript", "Node.js", "Hooks", "Dump CLI", "Agent Skills", "Contract Tests"],
      language: "TypeScript",
      color: "#00e5ff",
    },
    {
      title: "Signature Harness",
      lenses: ["Agent / Verification"],
      year: "2026",
      status: "MVP",
      repo: "https://github.com/FrogRim/signature-harness",
      description: "Codex·Claude Code 공용 goal-loop 하네스. 에이전트의 '완료'를 그대로 믿지 않고 trace·artifact·eval 증거가 Oracle 검증을 통과할 때만 완료로 닫는 cross-agent runtime.",
      problem: "에이전트가 '끝났다'고 선언해도 목표가 실제로 충족됐는지, 중간에 hang/drift가 났는지 증거 없이 믿게 되는 문제",
      decision: "Seed로 목표 고정 -> Active Slice로 범위 축소 -> 실행 증거 기록 -> Oracle 검증 통과 시에만 완료. completion auditor가 hang artifact를 감지해 remediation 게이트로 보냄",
      evidence: "benchmark 23 / regression 5 eval suite, run manifest·state·trace·replay·ledger, fail-closed sandbox",
      stack: ["Python", "Goal Loop", "Oracle Verification", "Eval Suite", "State Machine", "Permission Policy"],
      language: "Python",
      color: "#00e5ff",
    },
    {
      title: "LinguaCall",
      lenses: ["Product AI", "Agent / Verification"],
      year: "2026",
      status: "MVP",
      repo: "https://github.com/FrogRim/LinguaCall",
      description: "OpenAI Realtime GA·WebRTC 기반 실시간 AI 회화 연습 MVP. 비동기 학습 리포트와 VPS 포트폴리오 데모 배포까지 포함.",
      problem: "브라우저 마이크 왕복, Realtime 세션 경계, 배포 빌드 크기를 하나의 제품 흐름으로 닫는 문제",
      decision: "Realtime GA client secret/SDP 흐름 + API/worker 분리 + AppInToss opt-in 빌드",
      evidence: "브라우저 마이크 왕복, /v1/realtime/client_secrets, /v1/realtime/calls, VITE_BUILD_APPINTOSS=false, VPS 데모 배포",
      stack: ["React", "TypeScript", "WebRTC", "OpenAI Realtime GA", "Docker", "VPS"],
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
      status: "MVP-1+",
      repo: "https://github.com/FrogRim/ForgeXR",
      description: "robot-action trajectory를 replay/action-labelled, task-validated, trainer-loadable dataset artifact와 trust record로 바꾸는 data infrastructure.",
      problem: "raw trajectory만으로는 학습 가능성, rejected reason, provenance, trainer compatibility 판단 불가",
      decision: "HMD-first proof를 data trust layer로 reset하고 MVP-1 dataset artifact, MVP-1+ cross-embodiment adapter, UR file-backed lineage를 분리",
      evidence: "4 accepted/4 rejected, 4 adapters, HDF5/trainer smoke, UR SHA-256 lineage, MVP-2 harness_ready=true/proof_eligible=false",
      stack: ["FastAPI", "HDF5", "Curation", "Trust Records", "Lineage", "Pytest"],
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
      text: "HaltTrace, Signature Harness, LinguaCall, Robot Data Forge로 에이전트 실패 관측, 완료 검증, Realtime 음성 UX, 로봇 데이터 신뢰 계층 증거를 공개로 남겼습니다.",
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
