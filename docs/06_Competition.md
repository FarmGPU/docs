# Competition

While large hyperscalers remain dominant, a new class of Neocloud providers, like FarmGPU, has emerged to offer leaner, more specialized, and cost-optimized solutions tailored for AI workloads. Semi-analysis suggests they could make up almost 50% of the AI compute market. This section outlines the competitive landscape and highlights FarmGPU's unique advantages as a Neocloud provider.

## Traditional Hyperscalers

**Examples:** AWS, Google Cloud, Microsoft Azure

These major cloud service providers offer a broad range of globally distributed services, including sophisticated GPU offerings. However, they often present significant drawbacks for AI/ML teams:

- **High Costs:** On-demand H100 instances on hyperscalers can be up to 6.5x more expensive than current market rates, making large-scale or long-duration training sessions prohibitively expensive.
- **Vendor Lock-In:** Complex, platform-specific solutions can make migrating workloads or switching providers a costly, technical challenge.
- **Limited Availability:** GPU quotas may fluctuate, creating resource bottlenecks and limiting experimentation or scaling for AI-driven initiatives.

## FarmGPU Differentiator

By focusing exclusively on GPU infrastructure for AI/ML, FarmGPU bypasses hyperscaler overhead, enabling pricing closer to true market rates. Our decentralized approach (via DePIN), combined with enterprise-grade data center standards, ensures reliable access to GPU resources without punitive vendor lock-in or unpredictable quotas.

|                           | **Hyperscalers (AWS, Azure, GCP)**                                                        | **FarmGPU**                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **GPU Pricing**           | On‑demand H100/H200 nodes priced 4 – 6 × above market; steep premiums for burst capacity. | Up to **70 % lower** hourly rates; deeper discounts on reserved and spot pools.                            |
| **Availability & Quotas** | Regional GPU caps and lengthy quota‑increase tickets slow experimentation.                | Elastic pool sized for AI first—no artificial quotas, instant scale‑up.                                    |
| **Platform Lock‑In**      | Proprietary APIs, managed services, and custom silicon make exit costly.                  | Open‑standards stack (Kubernetes, open storage, standard NICs); migrate in or out with minimal re‑tooling. |
| **AI Hardware Density**   | Air‑cooled halls limit rack power; mixed‑workload layouts restrict floor space.           | 45 – 130 kW liquid / immersion‑cooled racks purpose‑built for accelerators.                                |
| **TCO Transparency**      | Bundled egress, software and support fees obscure true training cost.                     | Simple, all‑in pricing—compute, storage, and network broken out clearly.                                   |
| **Sustainability**        | Average PUE ≈ 1.3–1.5; limited heat‑reuse deployments.                                    | PUE ≈ 1.1, waste‑heat recovery in micro‑edge pods, renewable PPAs under way.                               |
| **Specialized Support**   | Generic enterprise support teams; AI issues routed through multiple tiers.                | Direct line to NVIDIA / InfiniBand veterans and ML‑ops engineers.                                          |

## FarmGPU's Lean, GPU-Centric Model

FarmGPU delivers cost-effective, scalable, and high-performance GPU computing to AI developers, startups, and enterprises.

### Cost Optimization

- **Hardware Customization:** FarmGPU curates its servers' Bill of Materials (BOM) specifically for AI workloads. For example, we may select mid-level CPUs and right-size RAM for specific AI inference or fine-tuning workloads. We build systems from L6 (barebones) with customized AI servers from MSI, Gigabyte, and Supermicro, performing the system integration in-house.
- **Networking Efficiency:** We use cost-effective Ethernet switches for front-end traffic and implement efficient backend topologies—akin to a "virtual modular switch"—to reduce reliance on pricey optical transceivers. We might adopt a 2:1 oversubscription model for smaller clusters to minimize the number of expensive spine switches.
- **Storage Optimization:** We include the latest PCIe 5.0 NVMe SSDs in our AI servers and deploy a high-speed storage fabric in partnership with leading AI storage software vendors. This is still offered at a fraction of the cost of durable SSD cloud storage (e.g., AWS EBS).
- **Software Savings:** By avoiding costly, generic software packages (e.g., Nvidia AI Enterprise, Base Command Manager) that add minimal value to our specialized service model, FarmGPU keeps overhead low and passes those savings on to customers.

### Focus and Specialization

- **GPU-Centric Services:** FarmGPU focuses exclusively on high-performance GPU servers that are optimized for AI/ML workloads
- **Tailored Solutions:** Our narrow service scope lets us customize GPU configurations (including GPU type, memory, and networking) to match the exact needs of AI researchers and developers, from small-scale experiments to large training clusters.

### Operational Excellence

- **Software and Driver Optimization:** FarmGPU ensures every cluster is shipped with the correct drivers (GPU, InfiniBand) and scheduling software (e.g., Kubernetes) to maximize performance and user experience.
- **Reliability and Monitoring:** We run proactive monitoring across hardware and software layers to catch issues before they degrade performance or cause downtime. This includes real-time checks for typical GPU errors and silent data corruption.
- **Burn-In Testing:** Before a GPU node goes live, FarmGPU conducts thorough burn-in tests to identify potential hardware or software faults, ensuring higher reliability once it's available to customers.
- **Expert Knowledge:** Our team includes seasoned professionals with deep expertise in NVIDIA GPUs, InfiniBand, and advanced networking. This expertise significantly speeds up issue resolution and continuously allows us to refine performance optimizations.

### Value-Added Services

- **Optimized Kernels & Frameworks:** FarmGPU can integrate community-driven optimizations or provide specialized CUDA kernels for customers who want to push performance boundaries (e.g., large transformer models). Our platform is flexible enough to include new optimizations as they become available.
- **Custom hardware configurations:** We can test specific combinations of GPU, compute, memory bandwidth, and storage configurations specialized for each AI workload

## Security

### Security: Confidential Computing

FarmGPU is deploying the latest AMD CPUs leveraging AMD's Infinity Guard, a suite of hardware-based security features embedded in EPYC processors. Infinity Guard offers a multi-layered approach, starting from the CPU core and extending to the platform, to mitigate various attack vectors, including side-channel attacks and malicious hypervisors. Key features like core-level protections, a dedicated secure processor, hardware-validated boot, and Transparent Secure Memory Encryption (TSME) provide robust data protection without requiring application modifications. These features are also further enhanced with capabilities for securing virtualized environments, such as Secure Encrypted Virtualization (SEV), Secure Encrypted State (SEV-ES), Secure Nested Paging (SEV-SNP) and Secure Multi-Key Encryption (SMKE). The firmware to implement SEV is open source.

FarmGPU can offer enhanced data protection, create confidential computing environments for sensitive workloads, and maintain the flexibility and agility to deploy and manage secure environments quickly. These can be enabled through our bare metal deployment.

### Storage Security & Compliance

FarmGPU offers robust data protection and privacy measures for AI workloads, underpinned by ISO/IEC 27001 and ISO/IEC 27040 best practices. We secure data both in transit and at rest (through encryption) and can deploy private, isolated environments for especially sensitive workloads. Through continuous risk assessments, strict access controls, and proactive monitoring, FarmGPU ensures rapid detection and response to potential security incidents. This end-to-end protection and compliance focus makes FarmGPU a secure choice for mission-critical AI compute needs.