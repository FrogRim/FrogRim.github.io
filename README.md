# FrogRim.github.io

Static GitHub Pages portfolio for [FrogRim](https://github.com/FrogRim).

The page positions the work as an AI-native, verification-driven systems portfolio: three representative stories for hiring conversations, role lenses, and public evidence for supporting repositories.

<p align="center">
  <a href="https://frogrim.github.io/">
    <img src="https://img.shields.io/badge/OPEN_PORTFOLIO-frogrim.github.io-00E5FF?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0B1017" alt="Open portfolio: frogrim.github.io" />
  </a>
</p>

```txt
> portfolio
https://frogrim.github.io/

> role
AI-native systems builder

> anchors
agent-verification | Realtime AI product | robot-control contract
```

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | static portfolio shell |
| `portfolio.config.js` | public project data, role lenses, evidence board |
| `app.js` | case studies, role lenses, evidence, filters, stack rendering |
| `styles.css` | dark terminal/system layout |
| `profile-readme.md` | source draft for `FrogRim/FrogRim` profile README |
| `.github/workflows/pages.yml` | GitHub Pages deployment workflow |

## Representative Stories

1. Agent Verification Stack: [HaltTrace](https://github.com/FrogRim/halttrace) + [Signature Harness](https://github.com/FrogRim/signature-harness)
2. [LinguaCall](https://github.com/FrogRim/LinguaCall)
3. [LLM-First-Robot-Control](https://github.com/FrogRim/LLM-First-Robot-Control)

## Supporting Repositories

1. [ForgeXR](https://github.com/FrogRim/ForgeXR): Robot Data Forge MVP-2 Rebase harness readiness
2. [GPU_3DAlgorithm](https://github.com/FrogRim/GPU_3DAlgorithm)
3. [UE5-ITD-Parser](https://github.com/FrogRim/UE5-ITD-Parser)

## Robot Data Forge Claim Boundary

ForgeXR now shows a stronger robotics data story than the previous MVP-1+ summary:

- MVP-1: learning-ready dataset artifact proof
- MVP-1+: cross-embodiment adapter lineage and UR file-backed recorded-log proof
- MVP-2 Rebase: policy A/B harness readiness with baseline/candidate HDF5 exports and schema-only rollout ingest

The portfolio intentionally does not claim policy uplift yet. Current public evidence is `harness_ready=true`, `rollout_ingest_contract_ready=true`, `learning_results_measured=false`, `learning_proven=false`, and `proof_eligible=false`.

## Local Check

```bash
python -m http.server 8080
```

Open `http://localhost:8080/`.
