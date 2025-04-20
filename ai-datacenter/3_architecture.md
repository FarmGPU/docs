---
sidebar_position: 3
---

# Architectural and Infrastructure Divergence

> The distinct requirements of AI workloads necessitate fundamental differences in data center architecture and physical infrastructure compared to traditional facilities. These differences manifest in physical layouts, power delivery systems, and, most notably, cooling technologies.

## A. Physical Layouts and Facility Design

Traditional data centers have historically been designed for **moderate power densities** (typically 5–15 kW/rack). Their layouts often prioritize:
- Maximizing usable floor space for standard server racks
- Accessibility
- General physical security
- Tiered reliability levels (e.g., Uptime Institute Tiers I–IV)

:::info
**AI-Focused Data Centers:**
:::
- Engineered for **extreme power densities** (commonly 40–120 kW/rack and beyond)
- Less physical floor space *per megawatt (MW)* of IT capacity
- Require substantial infrastructure for power delivery and heat removal
- Layouts integrate specialized cooling equipment (liquid distribution manifolds, CDUs) directly into or near rack rows
- High-speed interconnects (optical fiber, heavy copper for scale-up links like NVLink) influence rack positioning and cable routing

> "Meta demolished a data center building under construction because its older, lower-density design was deemed unsuitable for future AI requirements."

- New builds increasingly incorporate design flexibility for high-density AI deployments, often influenced by modular design principles (e.g., Open Compute Project)

## B. Power Infrastructure: Density, Delivery, and Redundancy

:::tip
**AI data centers require a fundamental rethinking of electrical infrastructure.**
:::

- **Traditional cloud data centers:** 15–20 kW/rack
- **AI systems:** 36 kW/rack (2023) → 50 kW/rack (2027), with leading-edge systems far exceeding this
- **Power utilization rates:**
  - AI training: often >80%
  - General cloud: 50–60%
  - Traditional enterprise: even lower
- **Campus-level power:**
  - Individual buildings: 40–100 MW
  - Large AI clusters: hundreds of MW, approaching gigawatt scale

> "A major constraint for AI data center expansion is the capacity of the existing electrical grid, including substations and high-voltage transformers, which often require significant upgrades and long lead times."

- **Redundancy:**
  - Traditional: strict adherence to Uptime Institute Tier standards (e.g., 2N for Tier IV)
  - AI: may use different topologies (e.g., N+1 for some components) to maximize efficiency, balancing redundancy with cost/complexity

---

## Key Takeaways

- AI workloads drive a shift to much higher rack power densities and specialized cooling.
- Facility layouts and electrical infrastructure must be reimagined for sustained, high-density operation.
- The ability to deliver and remove massive amounts of power and heat is now a primary design constraint.
- Flexibility and modularity are increasingly important for future-proofing data center builds.
- Grid and utility limitations are a major bottleneck for AI data center growth.