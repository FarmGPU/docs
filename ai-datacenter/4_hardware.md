---
sidebar_position: 4
---

# Hardware and Component Specialization

> The hardware foundation of AI data centers differs significantly from traditional facilities, driven by the need for massive parallel processing, high-bandwidth memory access, and extremely fast inter-component communication.

## A. Processing Power: CPU vs. GPU, TPU, and Custom AI Accelerators

Traditional data centers primarily rely on **Central Processing Units (CPUs)** (e.g., Intel Xeon, AMD EPYC):
- General-purpose processors
- Optimized for sequential or moderate parallelism
- Suitable for OS management, business apps, database queries, and network traffic

AI-focused data centers are dominated by **specialized accelerators** for massively parallel computations:

* **Graphics Processing Units (GPUs):**
  - E.g., NVIDIA H100, B100, GB200 series
  - Thousands of compute cores for parallel operations
  - Power-intensive (700W–1200W+ per chip)
* **Tensor Processing Units (TPUs):**
  - Google's custom ASICs for ML workloads (TensorFlow, JAX)
  - Optimized for performance per watt and TCO
  - Used extensively in Google Cloud
* **Other Custom Silicon (ASICs/NPUs):**
  - AWS Trainium/Inferentia, Microsoft Maia, Meta MTIA
  - Startups: Cerebras, SambaNova, etc.
  - Neural Processing Units (NPUs) for real-time processing

:::info
AI accelerators are designed for matrix multiplication and tensor operations fundamental to deep learning.
:::

## B. Memory Architectures: DRAM vs. HBM, Capacity, Bandwidth, and Cost

Traditional servers use **DDR DRAM** (DDR4/DDR5):
- Large capacities (hundreds of GBs to several TBs)
- Cost-effective for general workloads
- DRAM can be ~40% of server BOM

AI accelerators require **High Bandwidth Memory (HBM):**
- Stacked-die architecture (multiple DRAM dies vertically)
- Connected via TSVs directly to the accelerator chip
- Provides multi-terabyte/sec bandwidth
- More expensive per GB, lower capacity per stack
- HBM is a major cost driver for AI accelerators

> "AI servers still employ large amounts of standard DDR DRAM (e.g., 2TB on an NVIDIA DGX H100), but its cost contribution is much smaller than HBM."

## C. Server Design: Form Factors, Density, and AI-Specific Configurations

Traditional data centers:
- Standard rackmount servers (1U/2U, 19-inch racks)
- Blade servers for density
- Emphasis on standardization, maintenance, maximizing server count within power/cooling limits

AI servers:
- Larger form factors (e.g., NVIDIA DGX H100 = 8U)
- Accommodate multiple high-power accelerators, large heatsinks/cold plates, complex power delivery
- Heavier systems require higher load-rated racks
- Custom server/rack designs (e.g., Microsoft Ares for Maia chips)
- Goal: maximize accelerator density and high-speed communication efficiency

:::tip
The primary design goal for AI servers is maximizing accelerator density and the efficiency of the high-speed communication fabric.
:::

## D. Networking Hardware: High-Speed Interconnects, Switches, NICs

Traditional data centers:
- Ethernet (1–100 Gbps)
- Hierarchical network (ToR, aggregation, core switches)
- Standard NICs for connectivity

AI data centers:
- Focus on backend/scale-out fabric for accelerator interconnect
- Must provide extremely high bandwidth and low latency
- Key technologies:
  * **InfiniBand:**
    - High bandwidth (400–800 Gbps/port), low latency, native RDMA
    - Proven for HPC/AI, but concerns about scalability, cost, vendor lock-in
  * **High-Speed Ethernet with RoCE:**
    - 400/800 Gbps, RDMA over Converged Ethernet
    - Relies on PFC/ECN for lossless behavior
    - Broader ecosystem, lower cost, better interoperability
    - Performance gap with InfiniBand is narrowing
  * **Proprietary Scale-Up Interconnects:**
    - E.g., NVIDIA NVLink, Google ICI, AWS NeuronLink
    - Extremely high bandwidth within/between nodes (e.g., NVLink: 900 GB/s per H100 GPU)
    - Crucial for parallelism strategies (tensor parallelism)
- Requires high-radix switches, SmartNICs/DPUs, and costly optical transceivers

> "The cost and complexity of optical transceivers for high-speed links are significant economic factors."

## E. Storage Systems: Performance vs. Capacity Needs

Traditional data center storage:
- Focus on capacity, reliability, cost-effectiveness
- DAS, NAS, SAN; mix of HDDs and SSDs

AI workloads:
- Require high throughput and IOPS to keep accelerators fed
- Key technologies:
  * **NVMe SSDs:** Fast local storage or high-performance networked tiers
  * **Parallel File Systems:** Lustre, IBM Spectrum Scale for high aggregate bandwidth
  * **High-Performance Networked Storage:** Scale-out NAS with NVMe and high-speed networks
- Capacity is important, but performance is the primary focus

---

## Comparative Hardware Specifications

| Feature | Traditional DC Server (High-Volume 2U CPU) | AI DC Server (NVIDIA DGX H100) |
| :---- | :---- | :---- |
| **Primary Processor(s)** | 2 x CPU (Intel Xeon/AMD EPYC) | 2 x CPU (Intel Xeon Scalable) |
| **Accelerator(s)** | None / Optional low-power GPU | 8 x NVIDIA H100 GPU |
| **System Memory (Type/Capacity)** | DDR4/DDR5, 512GB–2TB | DDR5, 2TB |
| **Accelerator Memory (Type/Capacity/Bandwidth)** | N/A | HBM3, 80GB per GPU / 640GB total, 3.35 TB/s per GPU / 26.8 TB/s total |
| **Networking (Backend)** | 10/25/100 Gbps Ethernet | 8 x 400 Gbps InfiniBand/Ethernet |
| **Storage (Primary Type)** | SAS/SATA SSDs, HDDs (DAS/NAS/SAN) | NVMe SSDs (e.g., 4 x 1.92TB OS, 2 x 3.84TB Cache) |
| **Power Density (Typical Rack)** | 5–20 kW | ~70 kW (for DGX H100 system) |
| **Cooling (Typical)** | Air Cooling (CRAC/CRAH) | Air-cooled option exists, but high-density clusters often require Liquid Cooling (DLC) |

---

## Key Takeaways

- AI data centers are built around specialized, high-density, high-bandwidth hardware.
- Accelerators (GPUs, TPUs, custom ASICs) and HBM are the main cost and performance drivers.
- Server and rack designs are dictated by the needs of accelerators and cooling, not by standardization.
- Networking and storage must keep pace with the data demands of large-scale distributed training.
- The economic and physical realities of AI hardware are reshaping the entire data center ecosystem.