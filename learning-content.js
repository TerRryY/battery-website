window.BATTERY_DEPTH_CONTENT = {
  labels: {
    zh: {
      chemistryTitle: "六种体系，一张表建立全局坐标。",
      chemistryNote: "以下为典型电芯级范围，不是单一产品规格。真实表现会随配方、电芯形态、SOC 窗口、温度和测试制度变化。",
      columns: ["体系", "简化电极反应", "典型电压", "电芯能量密度", "商业场景", "核心取舍"],
      ncmTitle: "NCM 不是一种固定配方。",
      ncmBody: "三个数字依次表示镍、钴、锰的大致摩尔比例。提高镍含量通常能增加可逆容量并减少钴用量，但也会降低热稳定性、加剧表面副反应，并提高制造与管理难度。",
      materialsTitle: "从晶体结构，到真实失效。",
      materialsBody: "同样是“锂离子电池”，离子通道、界面反应和热稳定性不同，会直接变成快充、寿命与安全差异。",
      mechanism: "机理", consequence: "性能后果", response: "工程应对",
      packTitle: "电池包不是放大版电芯。",
      packBody: "系统工程负责估算状态、搬走热量、承受载荷，并在异常传播前切断风险。",
      futureTitle: "成熟度比想象力更重要。",
      futureBody: "这里采用“量产 / 早期商业化 / 中试验证 / 实验室研究”四档教育性标记，不等同于正式 TRL 认证。",
      bottleneck: "关键瓶颈", approach: "正在解决", maturity: "成熟度",
      sourcesTitle: "参考资料与数据边界",
      sourcesBody: "数据用于建立数量级认知。商业产品名称只说明代表性应用，不代表同一产品在所有年份、市场和配置中使用相同化学体系。",
      openTerm: "查看术语解释"
    },
    en: {
      chemistryTitle: "Six chemistries, one shared frame of reference.",
      chemistryNote: "These are typical cell-level ranges, not product specifications. Results vary with formulation, cell format, SOC window, temperature, and test protocol.",
      columns: ["Chemistry", "Simplified electrode reaction", "Typical voltage", "Cell energy density", "Commercial context", "Main trade-off"],
      ncmTitle: "NCM is not one fixed formula.",
      ncmBody: "The three digits approximate the nickel, cobalt, and manganese molar ratio. More nickel usually raises reversible capacity and reduces cobalt use, but also weakens thermal stability, intensifies surface reactions, and makes manufacturing and control harder.",
      materialsTitle: "From crystal structure to real failure.",
      materialsBody: "Ion pathways, interface reactions, and thermal stability turn directly into differences in fast charging, lifetime, and safety.",
      mechanism: "Mechanism", consequence: "Performance consequence", response: "Engineering response",
      packTitle: "A pack is not a scaled-up cell.",
      packBody: "System engineering estimates state, removes heat, carries loads, and interrupts faults before they propagate.",
      futureTitle: "Maturity matters as much as possibility.",
      futureBody: "The labels mass production, early commercialization, pilot validation, and laboratory research are educational categories, not formal TRL certification.",
      bottleneck: "Main bottleneck", approach: "Engineering response", maturity: "Maturity",
      sourcesTitle: "References and data boundaries",
      sourcesBody: "Values establish orders of magnitude. Product names show representative applications; chemistry can vary by model year, market, and configuration.",
      openTerm: "Open term"
    }
  },
  chemistries: [
    {
      id: "nmc", name: "NCM / NCA",
      zh: ["LiMO₂ ⇌ Li₁₋ₓMO₂ + xLi⁺ + xe⁻", "约 3.6–3.7 V", "约 180–300 Wh/kg", "长续航电动车与高端便携设备；具体 NCM/NCA 配方随供应商和车型变化", "高比能换来更严格的热管理、制造控制与材料成本"],
      en: ["LiMO₂ ⇌ Li₁₋ₓMO₂ + xLi⁺ + xe⁻", "about 3.6–3.7 V", "about 180–300 Wh/kg", "Long-range EVs and premium portable devices; exact NCM/NCA formulation varies", "Higher specific energy with tighter thermal, manufacturing, and material constraints"]
    },
    {
      id: "lfp", name: "LFP",
      zh: ["LiFePO₄ ⇌ FePO₄ + Li⁺ + e⁻", "约 3.2–3.3 V", "约 120–190 Wh/kg", "比亚迪刀片电池、宁德时代神行等 LFP 产品路线", "热稳定与循环寿命突出，但电压和低温性能较弱"],
      en: ["LiFePO₄ ⇌ FePO₄ + Li⁺ + e⁻", "about 3.2–3.3 V", "about 120–190 Wh/kg", "LFP product families such as BYD Blade and CATL Shenxing", "Strong thermal stability and life, with lower voltage and weaker cold performance"]
    },
    {
      id: "sodium", name: "Sodium-ion",
      zh: ["NaMO₂ ⇌ Na₁₋ₓMO₂ + xNa⁺ + xe⁻（层状氧化物示意）", "约 2.8–3.3 V", "约 90–160 Wh/kg", "储能、两轮车与部分入门级车辆的早期商业化", "资源与低温潜力较好，但比能和产业链成熟度仍有限"],
      en: ["NaMO₂ ⇌ Na₁₋ₓMO₂ + xNa⁺ + xe⁻ (layered-oxide example)", "about 2.8–3.3 V", "about 90–160 Wh/kg", "Early commercialization in storage, two-wheelers, and selected entry vehicles", "Resource and cold-weather potential, but lower energy and a younger supply chain"]
    },
    {
      id: "solid", name: "Solid-state",
      zh: ["反应取决于正负极；变化主要在电解质由液态变为固态", "常见设计约 3–4 V", "目标常讨论 300+ Wh/kg；当前原型差异很大", "全固态车用电池仍处中试与验证阶段，半固态不等于全固态", "潜在安全与比能优势，换来界面、压力、良率和成本难题"],
      en: ["Electrode reaction depends on chemistry; the electrolyte changes from liquid to solid", "commonly about 3–4 V", "targets often discuss 300+ Wh/kg; prototypes vary widely", "All-solid-state EV cells remain in pilot validation; semi-solid is not all-solid-state", "Potential safety and energy gains with interface, pressure, yield, and cost challenges"]
    },
    {
      id: "lead", name: "Lead-acid",
      zh: ["Pb + PbO₂ + 2H₂SO₄ ⇌ 2PbSO₄ + 2H₂O", "约 2.0 V / 单格", "约 30–50 Wh/kg", "12 V 汽车启动电池、UPS 与通信备电", "低成本和大电流能力突出，但重量大且怕深度亏电"],
      en: ["Pb + PbO₂ + 2H₂SO₄ ⇌ 2PbSO₄ + 2H₂O", "about 2.0 V per cell", "about 30–50 Wh/kg", "12 V starter batteries, UPS, and telecom backup", "Low cost and high current, but heavy and sensitive to deep discharge"]
    },
    {
      id: "nimh", name: "NiMH",
      zh: ["MH + NiOOH ⇌ M + Ni(OH)₂", "约 1.2 V", "约 60–120 Wh/kg", "丰田普锐斯等混合动力车型与 AA/AAA 充电电池", "耐用、宽温，但自放电和质量体积不占优势"],
      en: ["MH + NiOOH ⇌ M + Ni(OH)₂", "about 1.2 V", "about 60–120 Wh/kg", "Hybrid vehicles such as Toyota Prius and rechargeable AA/AAA cells", "Robust and wide-temperature, but heavier with higher self-discharge"]
    }
  ],
  ncmRatios: [
    { ratio: "111", ni: 33, zh: ["均衡基线", "结构相对稳定，但容量较低"], en: ["Balanced baseline", "Relatively stable structure, lower capacity"] },
    { ratio: "523", ni: 50, zh: ["成熟均衡", "容量、寿命、安全与成本较均衡"], en: ["Mature balance", "Balanced capacity, life, safety, and cost"] },
    { ratio: "622", ni: 60, zh: ["提高比能", "表面稳定与水分控制更重要"], en: ["Higher energy", "Surface stability and moisture control matter more"] },
    { ratio: "811", ni: 80, zh: ["高镍路线", "容量更高，但热稳定性、微裂纹和界面副反应更难控制"], en: ["High-nickel route", "Higher capacity, with harder thermal, microcrack, and interface control"] }
  ],
  materials: [
    {
      title: { zh: "正极晶体结构", en: "Cathode crystal structures" }, terms: [{ id: "cathode", zh: "正极材料", en: "Cathode" }],
      zh: ["NCM 层状结构提供二维扩散平面；LFP 橄榄石主要依靠一维通道；LMO 尖晶石具有三维通道。", "NCM 有利于高容量但对阳离子混排和表面副反应敏感；LFP 的强 P–O 键带来热稳定；LMO 倍率好但高温锰溶解会损伤寿命。", "单晶颗粒、表面包覆、掺杂和粒径控制用于稳定结构与界面。"],
      en: ["Layered NCM offers two-dimensional diffusion planes; olivine LFP mainly uses one-dimensional channels; spinel LMO offers three-dimensional pathways.", "NCM supports high capacity but is sensitive to cation mixing and surface reactions. Strong P–O bonds aid LFP stability. LMO has good rate capability but manganese dissolution hurts hot-cycle life.", "Single-crystal particles, coatings, doping, and particle-size control stabilize structures and interfaces."]
    },
    {
      title: { zh: "石墨与硅负极", en: "Graphite and silicon anodes" }, terms: [{ id: "anode", zh: "负极材料", en: "Anode" }, { id: "sei", zh: "SEI 膜", en: "SEI" }],
      zh: ["石墨层间距约 0.335 nm，可形成稳定的 LiC₆ 嵌层结构；这不是简单的“离子半径刚好塞进去”，还涉及脱溶剂化、分级嵌锂和晶格变化。", "硅理论容量高，但深度合金化时体积变化可接近 300%，会粉化颗粒并反复破坏 SEI。", "纳米化、SiOₓ/石墨复合、弹性粘结剂和预锂化用于缓解膨胀与首圈锂损失。"],
      en: ["Graphite has an interlayer spacing near 0.335 nm and forms stable LiC₆ stages. This is not a simple radius fit; desolvation, staging, and lattice change also matter.", "Silicon offers high theoretical capacity, but deep alloying can approach 300% volume change, cracking particles and repeatedly damaging the SEI.", "Nanostructures, SiOₓ/graphite composites, elastic binders, and prelithiation reduce expansion and first-cycle lithium loss."]
    },
    {
      title: { zh: "电解质与热失控", en: "Electrolytes and thermal runaway" }, terms: [{ id: "electrolyte", zh: "电解质", en: "Electrolyte" }, { id: "thermal-runaway", zh: "热失控", en: "Thermal runaway" }],
      zh: ["液态有机电解液室温离子电导率常在 10⁻² S/cm 数量级；实用固态电解质通常希望达到至少 10⁻³ S/cm 量级，同时还要保持界面稳定。", "升温会促使 SEI、电解液和高荷电正极依次发生放热副反应；热产生超过散热能力后可能进入自加速。", "阻燃添加剂、稳定盐体系、固态电解质、早期温度诊断与快速断电共同降低风险。"],
      en: ["Liquid organic electrolytes often reach the 10⁻² S/cm range at room temperature. Practical solid electrolytes generally aim for at least the 10⁻³ S/cm range while maintaining stable interfaces.", "Heating can trigger exothermic reactions in the SEI, electrolyte, and highly charged cathode. When heat generation exceeds removal, self-acceleration can begin.", "Flame-retardant additives, stable salts, solid electrolytes, early thermal diagnostics, and fast isolation reduce risk together."]
    },
    {
      title: { zh: "隔膜与陶瓷涂覆", en: "Separators and ceramic coatings" }, terms: [{ id: "separator", zh: "隔膜", en: "Separator" }],
      zh: ["聚烯烃隔膜依靠微孔让离子通过，同时阻止正负极直接电子接触。", "高温下聚合物可能收缩；尺寸变化或异物刺穿会缩短绝缘距离并诱发内部短路。", "Al₂O₃ 等陶瓷颗粒形成耐热骨架、提高润湿性并抑制热收缩，但不能替代完整的制造洁净度与系统保护。"],
      en: ["Microporous polyolefin separators pass ions while preventing direct electronic contact between electrodes.", "Polymers can shrink at high temperature; dimensional change or debris penetration can shorten insulation paths and trigger internal shorts.", "Ceramic particles such as Al₂O₃ form a heat-resistant scaffold, improve wetting, and suppress shrinkage, but cannot replace clean manufacturing and system protection."]
    }
  ],
  pack: [
    {
      title: { zh: "BMS：估算，而不是直接测量", en: "BMS: estimation, not direct measurement" }, terms: [{ id: "bms", zh: "BMS", en: "BMS" }, { id: "active-balancing", zh: "主动均衡", en: "Active balancing" }],
      zh: ["SOC 常结合安时积分、开路电压与模型/Kalman 滤波；安时积分响应快但会累计误差，开路电压较稳但需要静置。", "被动均衡把高电芯的多余能量变成热，简单便宜；主动均衡转移能量，效率更高但电路复杂。", "过压、欠压、过流、绝缘与温度诊断最终驱动接触器断开和功率限制。"],
      en: ["SOC commonly combines coulomb counting, open-circuit voltage, and model/Kalman filtering. Counting responds quickly but drifts; OCV is stable but needs rest.", "Passive balancing burns excess energy as heat and is simple. Active balancing transfers energy more efficiently but adds circuit complexity.", "Over/undervoltage, current, insulation, and temperature diagnostics ultimately command contactors and power limits."]
    },
    {
      title: { zh: "热管理：热量怎么离开电池包", en: "Thermal management: how heat leaves the pack" }, terms: [{ id: "thermal-runaway", zh: "热失控", en: "Thermal runaway" }],
      zh: ["风冷成本低、结构简单，但换热能力和温度均匀性有限。液冷板能更稳定地控制温差，是当前动力电池常见方案。", "冷媒直冷省去二次冷却回路、换热潜力高，但密封、控制和维修复杂度更高。", "优秀热管理不仅追求平均温度，还要限制电芯之间温差，避免局部老化加速。"],
      en: ["Air cooling is cheap and simple but limited in heat transfer and uniformity. Liquid cold plates control gradients more consistently and are common in traction packs.", "Direct refrigerant cooling removes a secondary loop and can transfer more heat, but sealing, control, and service become harder.", "Good thermal management controls both average temperature and cell-to-cell gradients to avoid localized aging."]
    },
    {
      title: { zh: "CTP、CTB 与结构电池包", en: "CTP, CTB, and structural packs" }, terms: [{ id: "pack-integration", zh: "结构集成", en: "Pack integration" }],
      zh: ["CTP 省去或弱化传统模组，提高体积利用率；CTB 把上盖/托盘与车身地板更深度结合；结构电池包让电池组件承担更多车身载荷。", "它们不是全行业统一的线性代际。集成度提高能减重和节省空间，但碰撞载荷路径、密封、维修和回收拆解更难。", "“麒麟电池”属于 CTP 结构平台；结构名称不等于固定的正极化学体系。"],
      en: ["CTP removes or weakens conventional modules. CTB integrates the pack enclosure more deeply with the floor. Structural packs make battery components carry more vehicle load.", "These are not one universal linear generation. Integration saves mass and volume, but crash paths, sealing, service, and recycling become harder.", "CATL Qilin is a CTP architecture platform; an architecture name does not define one cathode chemistry."]
    },
    {
      title: { zh: "安全是分层防御", en: "Safety is layered defense" }, terms: [{ id: "thermal-runaway", zh: "热失控", en: "Thermal runaway" }],
      zh: ["电芯级：稳定材料、CID/泄压结构、隔膜关断与制造质量。模组/单元级：隔热材料、导流与阻燃屏障。", "系统级：BMS 预警、熔断器/接触器断电、结构防撞、排气路径与乘员舱隔离。", "目标不是声称“永不失效”，而是降低发生概率、延缓传播并为撤离和救援争取时间。"],
      en: ["Cell level: stable materials, current interruption/vents, separator shutdown, and manufacturing quality. Module/unit level: thermal barriers, vent routing, and flame resistance.", "System level: BMS warnings, fuses/contactors, crash structures, gas paths, and cabin isolation.", "The goal is not to claim zero failure, but to reduce probability, slow propagation, and create response time."]
    }
  ],
  future: [
    { name: { zh: "钠离子", en: "Sodium-ion" }, level: { zh: "早期商业化", en: "Early commercialization" }, zh: ["比能与供应链规模", "提高正极空气稳定性、硬碳首效与规模制造一致性"], en: ["Energy density and supply-chain scale", "Improve cathode air stability, hard-carbon first efficiency, and manufacturing consistency"] },
    { name: { zh: "高硅负极", en: "High-silicon anodes" }, level: { zh: "量产掺硅 / 高硅中试", en: "Commercial blends / high-Si pilot" }, zh: ["体积膨胀与持续 SEI 生长", "SiOₓ/石墨复合、弹性粘结剂、纳米结构与预锂化"], en: ["Expansion and continuous SEI growth", "SiOₓ/graphite blends, elastic binders, nanostructures, and prelithiation"] },
    { name: { zh: "全固态", en: "All-solid-state" }, level: { zh: "中试验证", en: "Pilot validation" }, zh: ["固-固接触、枝晶、压力、良率和成本", "界面涂层、软化硫化物、复合电解质与压力管理"], en: ["Solid contact, dendrites, pressure, yield, and cost", "Interface coatings, compliant sulfides, composite electrolytes, and pressure management"] },
    { name: { zh: "锂硫", en: "Lithium-sulfur" }, level: { zh: "实验室 / 小规模验证", en: "Laboratory / limited pilots" }, zh: ["多硫化物穿梭、硫导电性低与体积变化", "多孔碳宿主、催化吸附层、固态电解质与锂负极保护"], en: ["Polysulfide shuttle, poor sulfur conductivity, and volume change", "Porous carbon hosts, catalytic trapping layers, solid electrolytes, and lithium protection"] },
    { name: { zh: "锂空气", en: "Lithium-air" }, level: { zh: "基础研究", en: "Fundamental research" }, zh: ["空气杂质、副产物堵塞、往返效率和循环寿命", "封闭氧系统、稳定催化剂、电解质与反应界面设计"], en: ["Air contamination, pore clogging, round-trip efficiency, and life", "Closed oxygen systems, stable catalysts, electrolytes, and reaction-interface design"] }
  ],
  sources: [
    { title: "Manthiram — An Outlook on Lithium-Ion Battery Technology", note: { zh: "锂离子材料与发展边界综述", en: "Overview of lithium-ion materials and development limits" }, url: "https://doi.org/10.1038/s41467-017-00757-2" },
    { title: "Schmuch et al. — Performance and Cost of Materials for Lithium-Based Batteries", note: { zh: "正负极材料性能与成本比较", en: "Performance and cost comparison of electrode materials" }, url: "https://doi.org/10.1038/s41560-018-0107-2" },
    { title: "Janek & Zeier — A Solid Future for Battery Development", note: { zh: "固态电池界面与材料挑战", en: "Solid-state interfaces and materials challenges" }, url: "https://doi.org/10.1038/nenergy.2016.141" },
    { title: "Hwang et al. — Sodium-Ion Batteries: Present and Future", note: { zh: "钠离子正极、负极与商业化问题", en: "Sodium-ion cathodes, anodes, and commercialization" }, url: "https://doi.org/10.1039/C6CS00776G" },
    { title: "Obrovac & Chevrier — Alloy Negative Electrodes for Li-Ion Batteries", note: { zh: "硅等合金负极的容量与体积变化", en: "Capacity and expansion of alloy anodes such as silicon" }, url: "https://doi.org/10.1021/cr500207g" },
    { title: "IEA — Global EV Outlook", note: { zh: "电动车与电池市场背景", en: "EV and battery market context" }, url: "https://www.iea.org/reports/global-ev-outlook-2025" },
    { title: "CATL — Qilin Battery / CTP Platform", note: { zh: "麒麟电池是结构集成平台，不是单一化学体系名称", en: "Qilin is a pack-integration platform, not one chemistry name" }, url: "https://www.catl.com/en/news/6091.html" }
  ],
  glossary: [
    { id: "sei", category: { zh: "界面化学", en: "Interface chemistry" }, short: "SEI", zh: { title: "SEI 固体电解质界面膜", desc: "负极表面由电解液还原形成的纳米级钝化层：要让锂离子通过，同时阻止电解液继续分解。", tags: ["界面", "老化", "快充"], metrics: [], sections: [["为什么重要", "稳定 SEI 能保护负极；反复破裂和重建会消耗活性锂与电解液，增加阻抗。"], ["何时容易受损", "高温、低温快充、硅负极膨胀和过高电位窗口都会改变 SEI。"], ["普通人怎么理解", "它像电极自己长出的透气保护漆：太薄保护不够，反复开裂又会持续消耗材料。"]] }, en: { title: "SEI — Solid Electrolyte Interphase", desc: "A nanoscale passivation layer formed by electrolyte reduction on the anode. It should pass lithium ions while suppressing further electrolyte decomposition.", tags: ["Interface", "Aging", "Fast charge"], metrics: [], sections: [["Why it matters", "A stable SEI protects the anode. Repeated cracking and repair consumes active lithium and electrolyte while raising resistance."], ["When it is stressed", "Heat, cold fast charging, silicon expansion, and extreme voltage windows alter the SEI."], ["Analogy", "It is a breathable protective coating grown by the electrode itself."]] } },
    { id: "thermal-runaway", category: { zh: "安全", en: "Safety" }, short: "Thermal runaway", zh: { title: "热失控", desc: "电芯内部放热反应超过散热能力后出现的自加速升温过程。", tags: ["安全", "温度", "传播"], metrics: [], sections: [["不是单一温度", "触发温度取决于体系、SOC、老化和测试方式；不同材料会在不同阶段开始放热。"], ["为什么会传播", "一个电芯释放的热和高温气体可能加热相邻电芯，因此系统设计要延缓传播。"], ["防护思路", "材料稳定、制造防缺陷、早期诊断、热隔离、泄压导流和快速断电必须共同工作。"]] }, en: { title: "Thermal Runaway", desc: "A self-accelerating temperature rise when internal heat generation exceeds heat removal.", tags: ["Safety", "Temperature", "Propagation"], metrics: [], sections: [["Not one temperature", "Onset depends on chemistry, SOC, aging, and test method."], ["Why it propagates", "Heat and hot gases from one cell can warm neighboring cells."], ["Defense", "Stable materials, defect prevention, early detection, barriers, vent routing, and isolation work together."]] } },
    { id: "active-balancing", category: { zh: "BMS", en: "BMS" }, short: "Active balancing", zh: { title: "主动均衡", desc: "把高电量电芯的能量转移到低电量电芯，而不是直接变成热。", tags: ["均衡", "效率", "BMS"], metrics: [], sections: [["与被动均衡区别", "被动均衡简单便宜但耗散能量；主动均衡效率更高，却增加磁性器件、开关和控制复杂度。"], ["为什么需要", "串联电池包容量受最弱电芯限制，差异扩大后会更早触发过充或过放保护。"]] }, en: { title: "Active Balancing", desc: "Transfers energy from higher-charge cells to lower-charge cells instead of dissipating it as heat.", tags: ["Balancing", "Efficiency", "BMS"], metrics: [], sections: [["Versus passive", "Passive balancing is simple and cheap but wastes energy. Active balancing is efficient but adds switches, magnetics, and control complexity."], ["Why needed", "A series pack is limited by its weakest cell, which reaches voltage limits first."]] } },
    { id: "pack-integration", category: { zh: "电池包结构", en: "Pack architecture" }, short: "CTP / CTB", zh: { title: "CTP、CTB 与结构电池包", desc: "通过减少模组层级或让电池包承担车身结构功能，提高空间与质量利用率。", tags: ["集成", "结构", "维修"], metrics: [], sections: [["CTP", "Cell-to-Pack 减少传统模组，提高体积利用率。"], ["CTB", "Cell-to-Body 把电池上盖、托盘或车身地板更深度整合。"], ["结构电池包", "让电池组件承担更多载荷；收益是减重，代价是碰撞、密封、维修和回收更复杂。"]] }, en: { title: "CTP, CTB, and Structural Packs", desc: "Improve volume and mass utilization by removing module layers or assigning structural duties to the pack.", tags: ["Integration", "Structure", "Service"], metrics: [], sections: [["CTP", "Cell-to-Pack reduces conventional module hardware."], ["CTB", "Cell-to-Body integrates enclosure and vehicle floor more deeply."], ["Structural pack", "Battery components carry more load, saving mass while complicating crash, sealing, service, and recycling."]] } }
  ]
};
