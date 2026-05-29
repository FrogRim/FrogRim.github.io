window.PORTFOLIO = {
  filters: ["All", "Realtime AI", "Robotics", "Graphics", "Engine", "Accessibility"],
  stack: [
    { name: "TypeScript / React / Vite", level: 90, color: "#00e5ff" },
    { name: "Python / FastAPI / Data Pipeline", level: 88, color: "#00ff88" },
    { name: "OpenAI Realtime API / LLM", level: 84, color: "#00ff88" },
    { name: "Isaac Sim / Isaac Lab / OpenXR", level: 82, color: "#ffd166" },
    { name: "C++ / Unreal Engine / OpenGL", level: 78, color: "#ff4d8d" },
    { name: "Flutter / Mobile Accessibility", level: 72, color: "#00e5ff" },
  ],
  projects: [
    {
      title: "LinguaCall",
      category: "Realtime AI",
      year: "2026",
      status: "MVP",
      repo: "https://github.com/FrogRim/LinguaCall",
      demo: "",
      description:
        "브라우저가 OpenAI Realtime API에 WebRTC로 직접 연결되는 실시간 AI 회화 연습 서비스.",
      role:
        "프론트엔드, 백엔드, 인증, 비동기 리포트 worker, 배포 구조까지 MVP 전 과정을 단독 설계했습니다.",
      evidence:
        "PTT 음성 제어, 번역, 단어 사전, GPT 기반 교정 리포트를 실시간 대화 흐름과 분리해 안정화했습니다.",
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
      demo: "",
      description:
        "자연어 명령에서 물리 속성을 추론하고 로봇 제어 파라미터로 변환하는 LLM-first 로봇 제어 시스템.",
      role:
        "데이터셋 구축, QLoRA 파인튜닝, JSON 제어 출력 구조화, Genesis 기반 비교 실험을 수행했습니다.",
      evidence:
        "제안 방식 성공률 55.6%, 물리 추론 정확도 66.7%, JSON 파싱/필수 필드/수치 범위 준수율 100%.",
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
      demo: "",
      description:
        "Quest/OpenXR/Isaac Lab teleoperation trajectory를 replay-verified dataset artifact로 변환하는 로봇 데이터 인프라.",
      role:
        "FastAPI backend, trajectory schema, evaluator, curation manifest, HDF5 export와 trainer smoke check를 설계했습니다.",
      evidence:
        "MVP-1 pipeline proof, accepted/rejected curation, dataset card, trainer loader smoke check까지 완료했습니다.",
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
      demo: "",
      description:
        "AABB 기반 BVH/BVTT를 직접 구현하고 OpenGL 시각화로 3D 충돌 감지 성능을 검증한 프로젝트.",
      role:
        "충돌 감지 알고리즘 설계, C++ 구현, OpenGL 디버그 렌더링, 성능 측정을 단독 수행했습니다.",
      evidence:
        "Brute Force 847ms 대비 BVTT 126ms, 약 85% 처리 시간 단축과 충돌 감지 정확도 100%를 기록했습니다.",
      stack: ["C++", "OpenGL", "AABB", "BVH", "BVTT"],
      language: "C++",
      color: "#ff4d8d",
    },
    {
      title: "UE5 ITD Parser Plugin",
      category: "Engine",
      year: "2024",
      status: "Plugin",
      repo: "https://github.com/FrogRim/UE5-ITD-Parser",
      demo: "",
      description:
        "3D 프린팅용 ITD 파일을 Unreal Engine 5에서 읽기 위한 UFactory 기반 커스텀 임포터 플러그인.",
      role:
        "파일 포맷 분석, 데이터 구조 설계, UFactory 임포터 골격, Static Mesh 변환 흐름 분석을 진행했습니다.",
      evidence:
        "비표준 메시 데이터와 엔진 렌더링 요구사항이 충돌하는 Non-Manifold 문제를 구조적으로 정리했습니다.",
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
      demo: "",
      description:
        "자폐 및 지적장애인을 위한 AI 기반 보완대체의사소통(AAC) 모바일 애플리케이션.",
      role:
        "Flutter 기반 프론트엔드와 접근성 중심 UI를 담당하고, AAC 입력 흐름과 TTS 사용 경험을 구성했습니다.",
      evidence:
        "한국형 손담 어휘 체계, 큰 버튼, 높은 대비, 즐겨찾기, AI 문장 추천과 TTS 흐름을 통합했습니다.",
      stack: ["Flutter", "Flask", "AWS", "PostgreSQL", "Transformers"],
      language: "Dart",
      color: "#00e5ff",
    },
  ],
  timeline: [
    {
      date: "2026",
      title: "실시간 AI 제품과 로봇 데이터 파이프라인",
      text:
        "LinguaCall과 Robot Data Forge를 통해 실시간 입력, 후처리, 데이터 품질 평가, 배포 검증을 하나의 시스템으로 묶었습니다.",
    },
    {
      date: "2025",
      title: "LLM 기반 로봇 제어와 접근성 AI",
      text:
        "LLM-first 로봇 제어와 Connect-AAC를 통해 언어 입력을 실제 제어 파라미터와 사용자 인터페이스로 연결했습니다.",
    },
    {
      date: "2024",
      title: "그래픽스 알고리즘과 엔진 플러그인",
      text:
        "GPU 3D Algorithm과 UE5 ITD Parser에서 성능 측정, 엔진 확장, 비표준 3D 데이터 처리 경험을 쌓았습니다.",
    },
  ],
};
