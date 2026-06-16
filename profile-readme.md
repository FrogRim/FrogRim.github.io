# FrogRim / 이강림

AI를 많이 쓰는 사람이 아니라, AI가 낸 결과를 시스템으로 구현하고 실패 지점을 검증 가능한 증거로 닫는 개발자입니다.

<p align="center">
  <a href="https://frogrim.github.io/">
    <img src="https://img.shields.io/badge/OPEN_FULL_PORTFOLIO-frogrim.github.io-00E5FF?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0B1017" alt="Open full portfolio: frogrim.github.io" />
  </a>
</p>

```txt
role      = AI-native systems builder
base      = cross-domain generalist with system-level proof
method    = frame problem -> build system -> verify failure modes -> document limits
anchors   = agent verification | Realtime AI product | robot control contract
portfolio = https://frogrim.github.io/
```

## How To Read My Work

| Lens | Read first | What I prove |
| --- | --- | --- |
| AI / Agent Engineer | Agent Verification Stack -> LinguaCall | agent failure capture, completion audit, contract test, AI 런타임 제품화 |
| Product AI Engineer | LinguaCall -> Agent Verification Stack -> ForgeXR | 실시간 UX, Realtime 세션 경계, worker 분리, 운영 가능한 launch stack |
| Robotics / Defense / Systems | LLM-First Robot Control -> ForgeXR -> GPU 3D Algorithm | 제어 contract, 데이터 품질, 성능 측정, geometry/system risk |

## Representative Stories

| Repository | Problem I framed | Decision I made | Verification |
| --- | --- | --- | --- |
| [Agent Verification Stack](https://github.com/FrogRim/halttrace) / [Signature Harness](https://github.com/FrogRim/signature-harness) | AI coding agent가 멈추거나 “완료”를 선언했을 때 그 결과를 어떻게 믿을지의 문제 | HaltTrace는 failure context를 observer-only로 남기고, Signature Harness는 Seed/Active Slice/Oracle 검증으로 완료 조건을 닫음 | HaltTrace npm test 31/31, Signature Harness benchmark 23 / regression 5, known limits |
| [LinguaCall](https://github.com/FrogRim/LinguaCall) | 실시간 AI 회화 MVP가 데모를 넘어 실제 브라우저 음성 왕복과 운영 배포까지 닫혀야 하는 문제 | OpenAI Realtime GA 방식으로 전환하고 `/v1/realtime/client_secrets`와 `/v1/realtime/calls` SDP flow를 분리, VPS portfolio build에서는 AppInToss를 기본 제외 | browser microphone round-trip confirmed, Realtime GA client secret/SDP flow, VITE_BUILD_APPINTOSS=false default, VPS portfolio demo deployed |
| [LLM-First Robot Control](https://github.com/FrogRim/LLM-First-Robot-Control) | “유리컵을 조심히” 같은 자연어 안의 물리 의도를 로봇 제어 파라미터로 바꾸는 문제 | LLM 출력을 자유 텍스트가 아니라 JSON control contract로 제한하고 Genesis simulation에서 Rule/RL baseline과 비교 | JSON compliance 100%, task success 55.6%, physical inference 66.7%, simulation-limited |

## Supporting Evidence

| Repository | What it adds |
| --- | --- |
| [Robot Data Forge](https://github.com/FrogRim/ForgeXR) | robot-action trajectory를 HDF5/trust record/UR lineage/policy A/B harness readiness로 닫는 data trust layer. 현재 증거는 `harness_ready=true`, `learning_proven=false` |
| [GPU 3D Algorithm](https://github.com/FrogRim/GPU_3DAlgorithm) | 12,182 triangles scene에서 brute force 847ms -> BVTT 126ms로 줄인 graphics/system benchmark |
| [UE5 ITD Parser Plugin](https://github.com/FrogRim/UE5-ITD-Parser) | 외부 3D format과 Unreal Static Mesh contract의 불일치를 분석한 engine plugin prototype |

## What I Optimize For

| Principle | What it means in my projects |
| --- | --- |
| AI is directed, not obeyed | AI에게 후보를 만들게 하되 latency, scope, security, testability 기준으로 직접 reject/accept합니다. |
| Systems depth stays visible | AI/agent 직무가 아니어도 제어 contract, geometry risk, benchmark 조건, data artifact를 먼저 설명할 수 있게 씁니다. |
| Evidence over claims | "검증했다"는 말 대신 실행 명령, 수치, 실패 조건, known limit을 남깁니다. |
| Same work, different lens | 한 프로젝트를 agent reliability, product AI, robotics/system engineering 관점에서 다르게 읽히게 정리합니다. |

## Stack By Problem Class

![TypeScript](https://img.shields.io/badge/TypeScript-0b1017?style=flat-square&logo=typescript&logoColor=00E5FF)
![React](https://img.shields.io/badge/React-0b1017?style=flat-square&logo=react&logoColor=00E5FF)
![Python](https://img.shields.io/badge/Python-0b1017?style=flat-square&logo=python&logoColor=00FF88)
![FastAPI](https://img.shields.io/badge/FastAPI-0b1017?style=flat-square&logo=fastapi&logoColor=00FF88)
![C++](https://img.shields.io/badge/C++-0b1017?style=flat-square&logo=cplusplus&logoColor=00E5FF)
![OpenAI](https://img.shields.io/badge/OpenAI_Realtime-0b1017?style=flat-square&logo=openai&logoColor=00FF88)
![Node.js](https://img.shields.io/badge/Node.js-0b1017?style=flat-square&logo=nodedotjs&logoColor=00FF88)
![Unreal Engine](https://img.shields.io/badge/Unreal_Engine-0b1017?style=flat-square&logo=unrealengine&logoColor=FFFFFF)
![OpenGL](https://img.shields.io/badge/OpenGL-0b1017?style=flat-square&logo=opengl&logoColor=FF4D8D)

## Contact

- Full portfolio: https://frogrim.github.io/
- Email: kangrim1025@gmail.com
