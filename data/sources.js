"use strict";

window.BATTERY_SOURCES = [
  {
    id: "doe-basics",
    title: "DOE Explains... Batteries",
    publisher: "U.S. Department of Energy",
    year: "n.d.",
    accessed: "2026-07-11",
    url: "https://www.energy.gov/science/doe-explainsbatteries",
    scope: {
      zh: "电池基本组成、电子与离子路径，以及充放电的入门解释。",
      en: "Introductory explanation of cell components, electron and ion paths, and charge/discharge."
    },
    conditions: {
      zh: "概念性教育资料，不提供可直接用于产品比较的性能数据。",
      en: "Conceptual educational material; it does not provide product-comparison specifications."
    }
  },
  {
    id: "iea-ev-2026",
    title: "Global EV Outlook 2026 — Electric Vehicle Batteries",
    publisher: "International Energy Agency",
    year: "2026",
    accessed: "2026-07-11",
    url: "https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries",
    scope: {
      zh: "电动车电池部署、市场规模和化学体系趋势。",
      en: "EV battery deployment, market scale, and chemistry trends."
    },
    conditions: {
      zh: "行业统计与情景分析；不代表单一电芯或车型性能。",
      en: "Industry statistics and scenarios; not specifications for a particular cell or vehicle."
    }
  },
  {
    id: "manthiram-2017",
    title: "An Outlook on Lithium Ion Battery Technology",
    publisher: "Nature Communications",
    year: "2017",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1038/s41467-017-00757-2",
    scope: {
      zh: "锂离子电池材料、性能边界和发展路线综述。",
      en: "Review of lithium-ion materials, performance boundaries, and development routes."
    },
    conditions: {
      zh: "综述中的数值来自不同研究，比较时必须关注电极载量、倍率和温度。",
      en: "Values combine different studies; electrode loading, rate, and temperature must be considered."
    }
  },
  {
    id: "schmuch-2018",
    title: "Performance and Cost of Materials for Lithium-Based Rechargeable Automotive Batteries",
    publisher: "Nature Energy",
    year: "2018",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1038/s41560-018-0107-2",
    scope: {
      zh: "汽车用锂电正负极材料的容量、能量和成本边界。",
      en: "Capacity, energy, and cost boundaries of automotive lithium-battery materials."
    },
    conditions: {
      zh: "材料级与电芯级性能不同；系统结构会进一步降低电池包比能量。",
      en: "Material- and cell-level performance differ; pack hardware further reduces specific energy."
    }
  },
  {
    id: "janek-2016",
    title: "A Solid Future for Battery Development",
    publisher: "Nature Energy",
    year: "2016",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1038/nenergy.2016.141",
    scope: {
      zh: "全固态电池的离子电导、界面和锂金属负极挑战。",
      en: "Ionic conductivity, interface, and lithium-metal challenges in all-solid-state batteries."
    },
    conditions: {
      zh: "讨论技术潜力与研究瓶颈，不等同于量产产品规格。",
      en: "Discusses potential and research bottlenecks, not production-cell specifications."
    }
  },
  {
    id: "hwang-2017",
    title: "Sodium-Ion Batteries: Present and Future",
    publisher: "Chemical Society Reviews",
    year: "2017",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1039/C6CS00776G",
    scope: {
      zh: "钠离子正极、硬碳负极和电解质路线综述。",
      en: "Review of sodium-ion cathodes, hard-carbon anodes, and electrolytes."
    },
    conditions: {
      zh: "实验室材料结果不能直接代表当前量产电芯。",
      en: "Laboratory material results do not directly represent current production cells."
    }
  },
  {
    id: "obrovac-2014",
    title: "Alloy Negative Electrodes for Li-Ion Batteries",
    publisher: "Chemical Reviews",
    year: "2014",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1021/cr500207g",
    scope: {
      zh: "硅等合金负极的高容量、体积变化和失效机理。",
      en: "High capacity, volume change, and failure mechanisms of alloy anodes such as silicon."
    },
    conditions: {
      zh: "理论容量、半电池结果和全电芯结果不可直接等同。",
      en: "Theoretical capacity, half-cell data, and full-cell data are not directly equivalent."
    }
  },
  {
    id: "doe-safety-2024",
    title: "National Blueprint for Lithium Batteries — Safety Strategy",
    publisher: "U.S. Department of Energy",
    year: "2024",
    accessed: "2026-07-11",
    url: "https://www.energy.gov/sites/default/files/2024-05/EED_2827_FIG_SafetyStrategy%20240505v2.pdf",
    scope: {
      zh: "锂电安全、滥用条件、热传播和固态路线的系统背景。",
      en: "System context for lithium-battery safety, abuse, propagation, and solid-state routes."
    },
    conditions: {
      zh: "安全表现高度依赖电芯设计、SOC、测试方法和系统防护。",
      en: "Safety depends strongly on cell design, SOC, test method, and system safeguards."
    }
  },
  {
    id: "catl-naxtra-2026",
    title: "CATL and CHANGAN Launch a Mass-Production Sodium-Ion Passenger Vehicle",
    publisher: "CATL",
    year: "2026",
    accessed: "2026-07-11",
    url: "https://www.catl.com/en/news/6720.html",
    scope: {
      zh: "Naxtra 钠离子乘用车导入、厂商公布比能量与低温性能。",
      en: "Naxtra passenger-vehicle introduction and manufacturer-stated energy and cold-weather performance."
    },
    conditions: {
      zh: "属于制造商公告；175 Wh/kg、低温保持率和续航需要结合独立测试与整车条件阅读。",
      en: "Manufacturer announcement; 175 Wh/kg, cold retention, and range require independent testing and vehicle context."
    }
  },
  {
    id: "catl-qilin-2022",
    title: "CATL Launches Qilin Battery, Establishes CTP 3.0",
    publisher: "CATL",
    year: "2022",
    accessed: "2026-07-11",
    url: "https://www.catl.com/en/news/6091.html",
    scope: {
      zh: "CTP 结构集成、空间利用率和冷却设计的厂商说明。",
      en: "Manufacturer explanation of CTP integration, space use, and cooling design."
    },
    conditions: {
      zh: "CTP 是电池包架构，不是正极化学体系；产品指标为厂商数据。",
      en: "CTP is a pack architecture, not a cathode chemistry; product figures are manufacturer data."
    }
  },
  {
    id: "tarascon-2001",
    title: "Issues and Challenges Facing Rechargeable Lithium Batteries",
    publisher: "Nature",
    year: "2001",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1038/35104644",
    scope: {
      zh: "可充锂电池的材料、反应和工程取舍基础。",
      en: "Foundational material, reaction, and engineering trade-offs in rechargeable lithium batteries."
    },
    conditions: {
      zh: "经典综述用于解释机理；产业成熟度需结合更新资料。",
      en: "A classic review for mechanisms; industry maturity requires newer sources."
    }
  },
  {
    id: "seh-2016-lisulfur",
    title: "Designing High-Energy Lithium-Sulfur Batteries",
    publisher: "Chemical Society Reviews",
    year: "2016",
    accessed: "2026-07-11",
    url: "https://doi.org/10.1039/C5CS00410A",
    scope: {
      zh: "锂硫电池的硫正极、穿梭效应和高能量设计条件。",
      en: "Sulfur cathodes, shuttle effects, and high-energy design conditions in lithium-sulfur batteries."
    },
    conditions: {
      zh: "高理论比能量不代表高实际电芯比能量；电解液用量和硫载量非常关键。",
      en: "High theoretical energy does not guarantee high cell energy; electrolyte amount and sulfur loading are critical."
    }
  }
];
