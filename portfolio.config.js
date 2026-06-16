window.PORTFOLIO = {
  filters: ["All", "Agent / Verification", "Product AI", "Robotics / Defense", "Graphics / Engine"],
  proofSignals: [
    { label: "Position", value: "AI-native systems" },
    { label: "Anchor 01", value: "agent verification" },
    { label: "Anchor 02", value: "Realtime AI product" },
    { label: "Anchor 03", value: "robot control contract" },
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
      route: "Agent Verification Stack -> LinguaCall",
      emphasis: "agent completion gating, observer-only failure capture, contract tests, AI runtime productization",
      proof:
        "HaltTrace로 failure context를 남기고 Signature Harness로 '완료'를 Oracle 검증에 통과시켜, AI coding agent의 결과를 그냥 믿지 않는 개발 방식을 보여줍니다.",
    },
    {
      title: "Robotics / Defense / Systems",
      route: "LLM-First Robot Control -> ForgeXR -> GPU 3D Algorithm",
      emphasis: "control contract, data trust layer, UR lineage, policy A/B harness readiness, performance measurement",
      proof:
        "LLM을 챗봇이 아니라 JSON control contract로 제한하고, Robot Data Forge에서는 UR recorded-log lineage에서 baseline/candidate HDF5와 schema-only rollout ingest까지 닫아 시스템 사고를 보여줍니다.",
    },
    {
      title: "Product AI Engineer",
      route: "LinguaCall -> Agent Verification Stack -> ForgeXR",
      emphasis: "Realtime GA voice UX, worker split, VPS deployment, operational evidence",
      proof:
        "AI API 데모가 아니라 브라우저 음성 왕복, Realtime 세션 경계, worker 분리, 배포 제약까지 제품 흐름으로 닫은 경험을 보여줍니다.",
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
      metric: "MVP-2 harness ready",
      project: "Robot Data Forge",
      meaning: "UR recorded-log lineage에서 baseline 2 / candidate 1 HDF5, held-out suite manifest, schema-only rollout ingest contract를 생성",
      repo: "https://github.com/FrogRim/ForgeXR",
    },
    {
      metric: "learning_proven=false",
      project: "Robot Data Forge",
      meaning: "policy uplift를 과장하지 않고 harness_ready=true / proof_eligible=false claim boundary를 명시",
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
      items: ["Python", "FastAPI", "HDF5", "Trust Records", "UR Lineage", "Policy A/B Harness", "Pytest"],
      usedFor: "robot data trust layer, curation manifest, UR file-backed lineage, baseline/candidate HDF5 export, schema-only rollout ingest readiness",
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
      title: "Agent Verification Stack",
      domain: "Anchor 01 / Agent reliability",
      repo: "https://github.com/FrogRim/halttrace",
      links: [
        { label: "HaltTrace", href: "https://github.com/FrogRim/halttrace" },
        { label: "Signature Harness", href: "https://github.com/FrogRim/signature-harness" },
      ],
      problem:
        "AI로 프로젝트를 만드는 것이 쉬워질수록, 진짜 문제는 에이전트가 멈췄을 때 원인을 보존하고 '완료' 선언을 증거로 검증하는 것입니다.",
      method:
        "HaltTrace는 Claude/Codex hook event를 observer-only로 모아 latest/explain/handoff dump workflow를 만들고, Signature Harness는 Seed -> Active Slice -> trace/artifact/eval -> Oracle 검증으로 완료 조건을 닫습니다.",
      decision:
        "자동 수정, 자동 재시도, provider 의존성, host-level E2E 과장 표현은 넣지 않았습니다. failure capture와 completion audit의 책임을 분리해 fail-closed 한계를 명시했습니다.",
      aiRecord:
        "AI에게 '이 결과를 믿어도 되는가'보다 '어디서 실패했다고 주장하면 과장인가'를 검토하게 했고, README에는 no retry/network/provider dependency와 host-level 미검증 한계를 남겼습니다.",
      evidence:
        "HaltTrace npm test 31/31, Signature Harness benchmark 23 / regression 5, run manifest·state·trace·replay·ledger, known limits",
    },
    {
      title: "LinguaCall",
      domain: "Anchor 02 / Product AI runtime",
      repo: "https://github.com/FrogRim/LinguaCall",
      problem:
        "AI API를 붙인 화면만으로는 제품 경험이 되지 않습니다. 실시간 회화 MVP는 마이크 권한, WebRTC 왕복, Realtime 세션 경계, 배포 가능한 빌드까지 하나의 흐름으로 닫아야 합니다.",
      method:
        "API가 `/v1/realtime/client_secrets`에서 ephemeral client secret을 만들고, 웹 클라이언트가 `/v1/realtime/calls`로 WebRTC SDP를 보내 OpenAI Realtime GA 세션을 엽니다.",
      decision:
        "VPS 포트폴리오 배포에서는 AppInToss를 기본 web Docker 빌드에서 제외하고, 필요할 때만 `VITE_BUILD_APPINTOSS=true`로 켭니다.",
      aiRecord:
        "AI에는 Realtime GA 마이그레이션과 build scope 축소안을 검토하게 했고, 수락 여부는 실제 브라우저 음성 왕복, API endpoint, VPS 배포 제약으로 확인했습니다.",
      evidence: "브라우저 마이크 왕복 확인, Realtime GA client secret/SDP 흐름, VITE_BUILD_APPINTOSS=false 기본, VPS 포트폴리오 데모 배포",
    },
    {
      title: "LLM-First Robot Control",
      domain: "Anchor 03 / Robotics AI research",
      repo: "https://github.com/FrogRim/LLM-First-Robot-Control",
      problem:
        "자연어 명령에는 '유리컵을 조심히'처럼 재질, 취약성, 힘, 속도 제약이 암묵적으로 들어 있습니다. 문제는 이 의도를 자유 텍스트가 아니라 로봇 제어 파라미터로 바꾸는 것입니다.",
      method:
        "Qwen2.5-14B에 QLoRA를 적용해 물리 도메인 데이터로 적응시키고, 출력은 object analysis, estimated physics, control parameters를 포함한 JSON control contract로 제한했습니다. Genesis 시뮬레이션에서 Rule/RL baseline과 비교했습니다.",
      decision:
        "실제 로봇 완성이나 real-time feedback control로 주장하지 않고, simulation prototype과 control-contract evaluation으로 범위를 제한했습니다. 추론 지연은 30.5s -> 15.6s 최적화 후에도 한계로 남겼습니다.",
      aiRecord:
        "AI는 논문 구조와 baseline 비교 표현을 검토하는 데 사용했고, 최종 주장은 JSON 준수율, task success, 물리 추론 정확도, 실패 원인 분석처럼 방어 가능한 수치로 제한했습니다.",
      evidence:
        "JSON parsing/required/range compliance 100%, task success 55.6%, physical inference 66.7%, fragile object 6/9, inference 30.5s -> 15.6s",
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
      status: "MVP-2 Rebase",
      repo: "https://github.com/FrogRim/ForgeXR",
      description: "robot-action trajectory를 replay/action-labelled dataset artifact, UR recorded-log lineage, policy A/B harness input으로 바꾸는 robotics data trust layer.",
      problem: "raw trajectory만으로는 학습 가능성, rejected reason, provenance, trainer compatibility, policy A/B 평가 준비 상태를 판단할 수 없는 문제",
      decision: "HMD-first proof를 data trust layer로 reset하고, MVP-1 artifact proof -> MVP-1+ embodiment lineage -> MVP-2 UR policy A/B harness readiness로 claim boundary를 단계화",
      evidence: "harness_ready=true, baseline 2 / candidate 1 HDF5, rollout_ingest_contract_ready=true, lineage source 3 / projected artifacts 7, learning_proven=false",
      stack: ["FastAPI", "HDF5", "Curation", "Trust Records", "UR Lineage", "Policy A/B Harness", "Pytest"],
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
      text: "HaltTrace, Signature Harness, LinguaCall, Robot Data Forge로 에이전트 실패 관측, 완료 검증, Realtime 음성 UX, UR lineage 기반 로봇 데이터 신뢰 계층 증거를 공개로 남겼습니다.",
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
