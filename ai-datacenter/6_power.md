---
sidebar_position: 6
---

# Power and Electrical

> The explosive growth of AI training and inference is rewriting data‑center fundamentals, forcing a clear split between “AI‑ready” plants and legacy, general‑purpose facilities. Power‑hungry neural workloads are driving unprecedented industry acceleration and tightening supply across every electrical component tier, from high‑voltage transformers to rack‑level distribution.

---

## Compute & Rack Density

- **Traditional:** General‑purpose racks historically averaged **≤ 10 kW** of IT load and were cooled with room‑level air handlers.
- **AI:** NVIDIA’s Blackwell GB200 NVL72 cabinet packs **72 GPUs and ≈ 110 kW** into a single rack—a ten‑fold jump over legacy norms and far beyond industry forecasts. Blackwell also mandates direct‑to‑chip liquid cooling, setting a de‑facto baseline for next‑generation AI halls.

---

## Cooling Architecture

- Air becomes uneconomic beyond ~30 kW per rack.
- AI clusters shift to warm‑water cooling loops and immersion options.
- Copper is kept ultra‑short so GPUs can stay tightly coupled for NVLink traffic.
- Operators unable to retrofit liquid lines—Meta’s low‑density “H‑building,” for example—have demolished structures mid‑build and restarted with AI‑ready blueprints.

---

## Power Delivery & Redundancy

| Element                | Traditional (Cloud / Enterprise) | AI‑Focused                                    |
|------------------------|-----------------------------------|-----------------------------------------------|
| Rack load              | ≤ 10 kW typical                   | 40 – 110 kW +                                 |
| Utilization            | 50 – 70 % (bursty)                | 80 % + sustained during AI training           |
| UPS topology           | 2N or catcher at room scale       | In‑rack Li‑ion BBUs & 48 V busbars            |
| Generators / substations | Buildings of tens of MW          | Campuses ≥ 100 MW with on‑site HV substations |

Traditional Tier III plants rely on centralized UPS rooms; AI halls push capacity to the edge, adopting paired busways with dual tap‑offs while preserving concurrent maintainability.

---

## Economic & Design Ripple Effects

- High‑density AI pods multiply capital outlays for transformers, switchgear and liquid manifolds, but the GPU’s share of CapEx now dwarfs facility steel.
- Vendors of busways, MV gear and liquid‑cooling skids see demand spikes, while low‑density floor‑space models lose relevance.
- Power availability—not real estate—becomes the gating factor: **100 MW AI campuses consume electricity equivalent to ~200 k U.S. homes each year.**

---

:::tip
AI workloads break every comfortable design assumption: they compress a decade of density road‑maps into a single GPU generation and shift value from square‑foot economics to megawatt orchestration. Sites that cannot deliver liquid‑cooled, 100 kW racks with > 80 % utilization—and the substations to feed them—risk obsolescence in the generative‑AI race.
:::
