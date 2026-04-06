# CODEX Notes

## Current Project Location

`C:\Users\agares\OneDrive\0 求职\LLM_dialogue`

This repo is the **LLM dialogue / AI product / companion UX** version of the job-search website.

## Repo and Live Site

Repo:

- `Agaresd47/LLM_dialogue`

Live URLs:

- English: `https://agaresd47.github.io/LLM_dialogue/`
- Chinese: `https://agaresd47.github.io/LLM_dialogue/zh`

Deployment:

- GitHub Pages
- build source: `GitHub Actions`
- static export enabled in Next.js

Key deployment files:

- [next.config.ts](C:/Users/agares/OneDrive/0%20求职/LLM_dialogue/next.config.ts)
- [.github/workflows/deploy-pages.yml](C:/Users/agares/OneDrive/0%20求职/LLM_dialogue/.github/workflows/deploy-pages.yml)

## Positioning

This version is for roles where the site should foreground:

- conversational AI product
- AI companion / interaction quality
- Chinese dialogue evaluation
- assistant strategy
- multi-model behavioral comparison
- user-facing LLM product research

This is the version to use when the user wants the AI therapist / AI companion / dialogue-product-oriented personal site.

## Current Content Focus

The current narrative centers on two independent projects:

1. Chinese dialogue benchmark and companion assistant strategy
2. Chinese everyday-life multi-model assistant behavior study

The first project is intentionally linked to the public benchmark showcase repo:

- `https://github.com/Agaresd47/text-dialogue-benchmark-showcase`
- `https://agaresd47.github.io/text-dialogue-benchmark-showcase/`

This site does **not** need to fully explain every underlying research detail.
Its goal is to be a strong-enough hiring-facing website for AI product / dialogue roles.

## Main Content Files

- English content: [src/data/profile.json](C:/Users/agares/OneDrive/0%20求职/LLM_dialogue/src/data/profile.json)
- Chinese content: [src/data/profile.zh.json](C:/Users/agares/OneDrive/0%20求职/LLM_dialogue/src/data/profile.zh.json)

These files control:

- hero copy
- about text
- project framing
- research section
- toolkit section
- contact copy

## Main Routes

- English home: [src/app/page.tsx](C:/Users/agares/OneDrive/0%20求职/LLM_dialogue/src/app/page.tsx)
- Chinese home: [src/app/zh/page.tsx](C:/Users/agares/OneDrive/0%20求职/LLM_dialogue/src/app/zh/page.tsx)

## Important Local Context

This repo was split out into its own standalone site on 2026-04-06.

The current folder structure now intentionally keeps two separate website repos:

- `C:\Users\agares\OneDrive\0 求职\CV_multi_model`
- `C:\Users\agares\OneDrive\0 求职\LLM_dialogue`

Do not use `personal-site` as the canonical active repo for this version.
Do not merge this site back into the CV / technical site unless explicitly requested.

## Local Development

Use from repo root:

```powershell
npm install
npm run dev
```

Build check:

```powershell
npm run build
```

Known-good:

- local build succeeds
- static export succeeds
- `/` and `/zh` both export
- GitHub Pages deployment succeeds

## Important Local Node / npm Note

This machine **does have Node.js installed**, but in some Codex / PowerShell sessions the Node install directory is **not on `PATH`**.

Verified local binaries on 2026-04-06:

- `node.exe`: `C:\Program Files\nodejs\node.exe`
- `npm.cmd`: `C:\Program Files\nodejs\npm.cmd`
- `node -v` via absolute path: `v24.14.1`
- `npm -v` via absolute path: `11.11.0`

Observed failure mode in this repo:

- plain `npm run build` may fail with `npm is not recognized`
- plain `npm.cmd run build` may then fail with `node is not recognized`

Reliable workaround for future sessions:

```powershell
$env:Path='C:\Program Files\nodejs;' + $env:Path
& 'C:\Program Files\nodejs\npm.cmd' install
& 'C:\Program Files\nodejs\npm.cmd' run build
```

If `npm` is missing in terminal but Node is expected to be installed, check `C:\Program Files\nodejs` first before assuming the machine is not set up.

## Recommended Next Improvements

1. Tighten hero language for AI product / companion positioning.
2. Improve Chinese copy quality and naturalness.
3. Sharpen project cards around product insight, interaction strategy, and evaluation value.
4. Optionally add one short section such as `What I Study` or `What I Look For`.

## Important Note About Chinese Text

PowerShell may display mojibake even when the file itself is valid UTF-8.

Prefer:

- `Get-Content -Encoding utf8`
- or a UTF-8 aware editor

## Suggested Prompt For Future Sessions

Use something like:

`Open C:\Users\agares\OneDrive\0 求职\LLM_dialogue, read CODEX.md first, then continue refining the bilingual AI dialogue / AI product job-search site.`
