window.PORTFOLIO = {
  filters: ["All", "Realtime AI", "Robotics", "Graphics", "Engine", "Accessibility"],
  proofSignals: [
    { label: "Problem framing", value: "domain first" },
    { label: "Engineering judgment", value: "tradeoff logs" },
    { label: "AI usage", value: "directed + verified" },
    { label: "Evidence", value: "commands + limits" },
  ],
  operatingPrinciples: [
    {
      title: "Problem before implementation",
      text:
        "기능 목록보다 먼저 사용자가 겪는 지연, 데이터 품질, 제어 안정성, 입력 흐름 같은 문제를 정의합니다.",
    },
    {
      title: "AI is a reviewer and accelerator",
      text:
        "AI가 만든 코드를 그대로 붙이지 않고, 성능/보안/확장성 관점으로 지시하고 검증 가능한 결과만 남깁니다.",
    },
    {
      title: "Evidence over claims",
      text:
        "수치, 실행 명령, 실패한 선택지, 남은 한계를 같이 기록해서 면접에서 설명 가능한 상태로 만듭니다.",
    },
  ],
  stackGroups: [
    {
      label: "Core systems",
      items: ["TypeScript", "Python", "C++", "SQL", "CMake"],
      usedFor: "제품 API, 로봇 데이터 파이프라인, 그래픽스 알고리즘 구현",
    },
    {
      label: "Realtime AI",
      items: ["WebRTC", "OpenAI Realtime", "Worker Queue", "Supabase"],
      usedFor: "브라우저 음성 UX, 세션 관리, 비동기 리포트 생성",
    },
    {
      label: "Robotics data",
      items: ["FastAPI", "Isaac Lab", "OpenXR", "HDF5", "Pytest"],
      usedFor: "trajectory 수집, evaluator, curation, trainer smoke check",
    },
    {
      label: "Graphics / engine",
      items: ["OpenGL", "BVH/BVTT", "Unreal Engine", "UFactory"],
      usedFor: "충돌 감지 성능 측정, 엔진 importer, geometry risk 분석",
    },
  ],
  caseStudies: [
    {
      title: "LinguaCall",
      domain: "Realtime AI product",
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
      title: "Robot Data Forge",
      domain: "Robotics data infrastructure",
      repo: "https://github.com/FrogRim/ForgeXR",
      problem: "raw teleoperation trajectory만으로는 학습 가능한 데이터인지 판단할 수 없습니다.",
      method:
        "trajectory를 task outcome, data quality, curation manifest, HDF5 export, trainer loader smoke로 통과시킵니다.",
      decision:
        "정책 성능 향상은 MVP-2로 미루고, MVP-1은 학습 가능한 artifact를 만들 수 있는지에 집중했습니다.",
      aiRecord:
        "AI에는 evaluator edge case, schema drift, proof report 누락 여부를 검토하게 하고 pytest/compileall/proof audit로 확인합니다.",
      evidence: "MVP-1 proof, accepted/rejected manifests, dataset card, trainer loader smoke",
    },
    {
      title: "GPU 3D Algorithm",
      domain: "Graphics performance",
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
      title: "LinguaCall",
      category: "Realtime AI",
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
      category: "Robotics",
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
      category: "Robotics",
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
      category: "Graphics",
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
      category: "Engine",
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
    {
      title: "Connect-AAC",
      category: "Accessibility",
      year: "2025",
      status: "Team",
      repo: "https://github.com/FrogRim/Connect-AAC",
      description: "자폐 및 지적장애인을 위한 AI 기반 AAC 모바일 앱.",
      problem: "대화 상황에서 느린 입력과 부족한 표현 후보",
      decision: "큰 버튼, 높은 대비, 한국형 어휘, TTS를 우선한 Flutter UI",
      evidence: "AAC flow, accessibility UI, AI recommendation concept",
      stack: ["Flutter", "Flask", "AWS", "PostgreSQL", "Transformers"],
      language: "Dart",
      color: "#00e5ff",
    },
  ],
  timeline: [
    {
      date: "2026",
      title: "실시간 AI 제품과 로봇 데이터 파이프라인",
      text: "입력 지연, 후처리 분리, 데이터 품질 평가, 배포 검증을 제품/데이터 시스템으로 묶었습니다.",
    },
    {
      date: "2025",
      title: "LLM 기반 로봇 제어와 접근성 AI",
      text: "언어 입력을 설명 텍스트가 아니라 제어 파라미터와 사용자 인터페이스로 변환하는 문제를 다뤘습니다.",
    },
    {
      date: "2024",
      title: "그래픽스 알고리즘과 엔진 플러그인",
      text: "성능 측정, 엔진 확장, 비표준 3D 데이터 처리처럼 시스템 하부의 비용과 계약을 다뤘습니다.",
    },
  ],
};
