"use strict";

window.BATTERY_TECHNOLOGIES = [
  {
    id: "nmc",
    short: "NCM",
    color: "#78bfff",
    aliases: ["NCM", "三元锂", "nickel manganese cobalt", "NCM 523", "NCM 622", "NCM 811"],
    facts: {
      voltage: "3.6–3.7 V",
      massEnergy: "≈ 180–300 Wh/kg",
      massRange: [180, 300],
      volumeEnergy: "≈ 450–750 Wh/L",
      cycles: { zh: "通常约 800–2,000 次", en: "Typically about 800–2,000 cycles" },
      maturity: "commercial"
    },
    ratings: { safety: "medium", fastCharge: "high", cold: "medium", availability: "medium", cost: "medium", maturity: "high" },
    zh: {
      title: "三元锂电池 NCM",
      oneLine: "以镍、钴、锰层状氧化物为正极，擅长用较小质量换取较长续航。",
      overview: "NCM 的三个字母来自 nickel、cobalt、manganese。523、622、811 等数字表示三种金属的大致摩尔比例；提高镍比例通常能提高容量并减少钴用量，但会增加表面副反应、微裂纹与热稳定控制难度。",
      how: "充电时，锂离子从层状正极脱出，穿过电解液和隔膜进入石墨或硅碳负极；电子沿外部电路到达负极。放电时两条路径反向。",
      electrodes: "正极：NCM 层状氧化物；负极：石墨或硅碳；电解质：常见为锂盐有机电解液。",
      strengths: ["电芯级质量能量密度通常较高", "功率与快充潜力较好", "供应链和车辆应用已经成熟"],
      limitations: ["高镍配方对水分、表面稳定和制造一致性敏感", "需要严格的 BMS、热管理和碰撞防护", "镍、钴价格与供应链会影响成本"],
      applications: ["长续航电动车", "笔记本和高端消费电子", "无人机与轻量化设备"],
      comparison: "与 LFP 相比，NCM 通常更轻、更适合长续航；LFP 往往在热稳定、循环寿命和成本上更有优势。",
      analogy: "像轻量化登山包：同样重量能装得更多，但材料和使用条件需要更精细地管理。",
      outlook: "发展重点包括高镍稳定化、单晶颗粒、表面包覆、降低钴用量和与硅负极/固态电解质协同。"
    },
    en: {
      title: "NMC Lithium-ion",
      oneLine: "A layered nickel-cobalt-manganese cathode family used when mass and driving range matter.",
      overview: "NMC stands for nickel, manganese, and cobalt. Labels such as 523, 622, and 811 approximate their molar ratios. More nickel can raise capacity and reduce cobalt, but it also makes surface reactions, microcracking, and thermal control harder.",
      how: "During charge, lithium ions leave the layered cathode, cross electrolyte and separator, and enter a graphite or silicon-carbon anode. Electrons reach the anode through the external circuit; both paths reverse during discharge.",
      electrodes: "Cathode: layered NMC oxide; anode: graphite or silicon-carbon; electrolyte: commonly an organic lithium-salt electrolyte.",
      strengths: ["Usually high cell-level specific energy", "Good power and fast-charge potential", "Mature supply chain and vehicle use"],
      limitations: ["High-nickel formulas are sensitive to moisture, surfaces, and consistency", "Requires careful BMS, thermal, and crash protection", "Nickel and cobalt affect cost and sourcing"],
      applications: ["Long-range EVs", "Laptops and premium electronics", "Drones and mass-sensitive devices"],
      comparison: "Compared with LFP, NMC is often lighter for a given energy. LFP usually has advantages in thermal stability, cycle life, and cost.",
      analogy: "Like a lightweight hiking pack: it carries more for its mass, but needs more careful materials and operating control.",
      outlook: "Key directions include stabilizing high nickel, single-crystal particles, coatings, lower cobalt, and pairing with silicon anodes or solid electrolytes."
    },
    sourceIds: ["manthiram-2017", "schmuch-2018", "doe-safety-2024"]
  },
  {
    id: "nca",
    short: "NCA",
    color: "#d0a7ff",
    aliases: ["NCA", "镍钴铝", "nickel cobalt aluminum"],
    facts: {
      voltage: "3.6–3.7 V",
      massEnergy: "≈ 200–300 Wh/kg",
      massRange: [200, 300],
      volumeEnergy: "≈ 500–750 Wh/L",
      cycles: { zh: "通常约 800–1,500 次", en: "Typically about 800–1,500 cycles" },
      maturity: "commercial"
    },
    ratings: { safety: "medium", fastCharge: "high", cold: "medium", availability: "medium", cost: "medium", maturity: "high" },
    zh: {
      title: "镍钴铝锂电池 NCA",
      oneLine: "高镍层状正极路线，以高比能量见长，常与精细热管理和圆柱电芯设计结合。",
      overview: "NCA 使用镍、钴和铝。镍提供主要容量，钴和铝帮助稳定结构。它与高镍 NCM 的工程逻辑相近，但元素配比、颗粒设计和制造窗口不同。",
      how: "锂离子在 NCA 层状正极与负极之间可逆嵌脱。高荷电状态下的正极活性更高，因此电压窗口、温度和充电策略尤其重要。",
      electrodes: "正极：镍钴铝氧化物；负极：石墨或硅掺杂石墨。",
      strengths: ["较高的质量与体积能量密度", "适合对重量和续航敏感的系统", "已有成熟的圆柱电芯应用经验"],
      limitations: ["高镍正极热稳定性与表面副反应需要管理", "成本和材料供应仍受镍钴影响", "高 SOC 长期停放会加速老化"],
      applications: ["部分长续航电动车", "高比能圆柱电芯", "航空与高端设备的工程探索"],
      comparison: "NCA 与 NCM 都属于高镍层状正极路线。不能仅凭名称判断优劣，颗粒、负极、电解液和系统控制同样关键。",
      analogy: "像高性能发动机：输出密度很高，但温度、润滑和控制策略不能粗放。",
      outlook: "主要方向是高镍表面稳定、硅负极、干法电极和更精确的寿命管理。"
    },
    en: {
      title: "NCA Lithium-ion",
      oneLine: "A high-nickel layered cathode route known for specific energy and often paired with cylindrical cells and precise thermal control.",
      overview: "NCA uses nickel, cobalt, and aluminum. Nickel provides much of the capacity while cobalt and aluminum help stabilize the structure. Its engineering logic resembles high-nickel NMC, but composition, particles, and process windows differ.",
      how: "Lithium ions reversibly move between a layered NCA cathode and the anode. The highly charged cathode is reactive, making voltage window, temperature, and charging strategy important.",
      electrodes: "Cathode: nickel-cobalt-aluminum oxide; anode: graphite or silicon-blended graphite.",
      strengths: ["High gravimetric and volumetric energy", "Useful where range and mass matter", "Mature cylindrical-cell experience"],
      limitations: ["High-nickel surface and thermal stability need control", "Nickel and cobalt still affect sourcing and cost", "Long storage at high SOC accelerates aging"],
      applications: ["Selected long-range EVs", "High-energy cylindrical cells", "Aviation and premium-device exploration"],
      comparison: "NCA and NMC are both high-nickel layered routes. The name alone cannot determine performance; particles, anode, electrolyte, and controls also matter.",
      analogy: "Like a high-performance engine: strong output density, but temperature and control cannot be casual.",
      outlook: "Work focuses on high-nickel surface stability, silicon anodes, dry electrodes, and more precise lifetime control."
    },
    sourceIds: ["manthiram-2017", "schmuch-2018", "doe-safety-2024"]
  },
  {
    id: "lfp",
    short: "LFP",
    color: "#73d7ad",
    aliases: ["LFP", "LiFePO4", "LiFePO₄", "磷酸铁锂", "lithium iron phosphate"],
    facts: {
      voltage: "3.2–3.3 V",
      massEnergy: "≈ 120–190 Wh/kg",
      massRange: [120, 190],
      volumeEnergy: "≈ 300–500 Wh/L",
      cycles: { zh: "通常约 2,000–6,000 次", en: "Typically about 2,000–6,000 cycles" },
      maturity: "commercial"
    },
    ratings: { safety: "high", fastCharge: "high", cold: "medium", availability: "high", cost: "high", maturity: "high" },
    zh: {
      title: "磷酸铁锂电池 LFP",
      oneLine: "以稳定橄榄石结构换取安全、寿命和成本优势，是车辆与储能的重要主力。",
      overview: "LFP 的 P–O 键形成稳定框架，正极在高温下不容易像高镍层状材料那样释放氧。它不依赖镍和钴，材料成本与供应风险通常较低。",
      how: "充放电可简化理解为 LiFePO₄ 与 FePO₄ 之间的可逆转化。锂离子主要沿一维通道迁移，因此颗粒尺寸、缺陷和导电包覆很重要。",
      electrodes: "正极：磷酸铁锂；负极：石墨或硅碳；常配液态电解液。",
      strengths: ["热稳定性和循环寿命通常较好", "铁和磷资源较丰富，不需要镍钴", "适合高频循环和储能系统"],
      limitations: ["电压和材料容量限制了电芯比能量", "低温充电时更需要预热与电流限制", "电压平台平坦使 SOC 估算更具挑战"],
      applications: ["主流电动车和商用车", "电网与工商业储能", "公交车、两轮车和备用电源"],
      comparison: "LFP 通常牺牲一部分重量与体积效率，换来更宽的热安全窗口、长寿命和较低材料成本。",
      analogy: "像耐用的工程工具：不是最轻，但稳定、可反复使用，也更容易控制风险。",
      outlook: "改进方向包括颗粒与碳包覆、低温电解液、快充控制，以及 CTP/CTB 等结构集成。"
    },
    en: {
      title: "Lithium Iron Phosphate — LFP",
      oneLine: "A stable olivine cathode that trades some energy density for safety, life, and cost advantages.",
      overview: "Strong P–O bonding stabilizes the framework, so LFP is less prone than high-nickel layered cathodes to oxygen release at elevated temperature. It avoids nickel and cobalt, usually reducing material cost and supply risk.",
      how: "Charge and discharge can be simplified as reversible conversion between LiFePO₄ and FePO₄. Lithium mainly follows one-dimensional channels, so particle size, defects, and conductive coatings matter.",
      electrodes: "Cathode: lithium iron phosphate; anode: graphite or silicon-carbon; commonly a liquid electrolyte.",
      strengths: ["Usually strong thermal stability and cycle life", "Abundant iron and phosphorus; no nickel or cobalt", "Well suited to frequent cycling and storage"],
      limitations: ["Voltage and material capacity limit cell energy", "Cold charging needs preheating and current limits", "A flat voltage curve makes SOC estimation harder"],
      applications: ["Mainstream EVs and commercial vehicles", "Grid and commercial storage", "Buses, two-wheelers, and backup systems"],
      comparison: "LFP generally gives up some mass and volume efficiency in exchange for a wider thermal margin, longer life, and lower material cost.",
      analogy: "Like a durable engineering tool: not the lightest, but stable, repeatable, and easier to manage safely.",
      outlook: "Directions include particle and carbon coatings, cold electrolytes, fast-charge control, and CTP/CTB integration."
    },
    sourceIds: ["manthiram-2017", "schmuch-2018", "catl-qilin-2022"]
  },
  {
    id: "sodium",
    short: "Na-ion",
    color: "#78d7e9",
    aliases: ["钠离子", "sodium-ion", "Na-ion", "Naxtra", "硬碳"],
    facts: {
      voltage: "≈ 2.8–3.3 V",
      massEnergy: "≈ 90–175 Wh/kg",
      massRange: [90, 175],
      volumeEnergy: { zh: "公开产品数据仍有限", en: "Comparable public product data remain limited" },
      cycles: { zh: "取决于材料路线与测试窗口", en: "Depends on material route and test window" },
      maturity: "early-commercial"
    },
    ratings: { safety: "high", fastCharge: "medium", cold: "high", availability: "high", cost: "high", maturity: "medium" },
    zh: {
      title: "钠离子电池",
      oneLine: "用储量更丰富的钠替代锂进行离子往返，正在进入乘用车和储能的早期规模化阶段。",
      overview: "钠与锂化学性质相近，但钠离子更大、质量更高，因此不能把锂电材料直接照搬。正极常见层状氧化物或普鲁士蓝类，负极多用硬碳。",
      how: "充电时钠离子从正极脱出并进入硬碳中的缺陷、层间和纳米孔；放电时返回。更大的离子半径改变扩散、结构应力和界面化学。",
      electrodes: "正极：层状氧化物或普鲁士蓝类似物；负极：硬碳；部分体系可在两极都使用铝集流体。",
      strengths: ["钠资源分布广、供应风险较低", "部分路线低温功率与安全潜力较好", "可复用大量锂电制造基础设施"],
      limitations: ["当前比能量通常低于主流锂离子", "硬碳首圈效率与气体控制仍是难点", "不同路线的长期量产数据仍在积累"],
      applications: ["储能系统", "寒冷地区和入门车辆", "两轮车与商用启动电源"],
      comparison: "钠离子更像锂离子的补充，而不是全面替代。它适合资源、低温和成本优先、但质量体积要求较宽松的场景。",
      analogy: "像把稀缺的专用零件换成更普遍的标准件：更容易大规模供应，但系统必须重新设计。",
      outlook: "重点是提高层状正极空气稳定性、硬碳首效、制造一致性和独立长期测试。"
    },
    en: {
      title: "Sodium-ion Battery",
      oneLine: "Uses more abundant sodium for ion shuttling and is entering early-scale vehicle and storage deployment.",
      overview: "Sodium resembles lithium chemically, but its ions are larger and heavier, so lithium-ion materials cannot simply be copied. Common cathodes include layered oxides and Prussian-blue analogues; hard carbon is a frequent anode.",
      how: "During charge, sodium leaves the cathode and enters defects, layers, and nanopores in hard carbon; it returns during discharge. The larger ion changes diffusion, structural stress, and interface chemistry.",
      electrodes: "Cathode: layered oxide or Prussian-blue analogue; anode: hard carbon; some systems use aluminum current collectors on both sides.",
      strengths: ["Widely distributed sodium resources", "Some routes show strong cold-power and safety potential", "Can reuse much lithium-ion manufacturing infrastructure"],
      limitations: ["Current specific energy is usually below mainstream lithium-ion", "Hard-carbon first efficiency and gas control remain difficult", "Long-term production data are still accumulating"],
      applications: ["Stationary storage", "Cold-region and entry vehicles", "Two-wheelers and commercial starter systems"],
      comparison: "Sodium-ion is better viewed as a complement to lithium-ion than a universal replacement, especially where resources, cold, and cost outweigh mass and volume.",
      analogy: "Like replacing a scarce custom part with a common standard material: easier to supply at scale, but the system must be redesigned.",
      outlook: "Work targets cathode air stability, hard-carbon first efficiency, manufacturing consistency, and independent long-duration validation."
    },
    sourceIds: ["hwang-2017", "catl-naxtra-2026", "iea-ev-2026"]
  },
  {
    id: "solid",
    short: "All-solid-state",
    color: "#c0b8ff",
    aliases: ["固态电池", "全固态", "solid-state", "all-solid-state", "sulfide electrolyte"],
    facts: {
      voltage: { zh: "取决于正负极组合", en: "Depends on the electrode pair" },
      massEnergy: { zh: "原型差异很大；目标常讨论 300+ Wh/kg", en: "Prototypes vary widely; targets often discuss 300+ Wh/kg" },
      massRange: [250, 450],
      volumeEnergy: { zh: "尚无统一可比量产范围", en: "No unified comparable production range" },
      cycles: { zh: "取决于界面、压力和材料路线", en: "Depends on interfaces, pressure, and material route" },
      maturity: "pilot"
    },
    ratings: { safety: "potential-high", fastCharge: "potential-high", cold: "uncertain", availability: "medium", cost: "low", maturity: "low" },
    zh: {
      title: "全固态电池",
      oneLine: "用固体离子导体替代常规液态电解液，潜力很高，但仍被界面、压力、良率和成本约束。",
      overview: "“固态”描述的是电解质和电池架构，不是单一正极化学。硫化物、氧化物和聚合物路线在离子电导、机械柔顺性、空气稳定和制造温度上各有取舍。",
      how: "离子穿过固态电解质，电子仍走外部电路。固体不能像液体那样自动润湿电极，因此循环中的接触损失、空隙和局部电流集中是核心难点。",
      electrodes: "正极可为 NCM、LFP 等复合正极；负极可能是石墨、硅或锂金属；电解质可为硫化物、氧化物或聚合物。",
      strengths: ["有潜力减少易燃液体并提高安全上限", "可能支持锂金属负极和更高比能量", "架构可拓展新的温度与封装方案"],
      limitations: ["固-固界面阻抗和接触保持困难", "锂枝晶、压力管理和材料兼容仍需验证", "量产设备、良率和成本尚未成熟"],
      applications: ["高端电动车的中试验证", "航空和高比能研究", "微型固态电池已在部分器件使用"],
      comparison: "半固态、凝胶和全固态不是同一个概念。减少液体并不自动意味着所有滥用条件下都安全。",
      analogy: "液体通道会自动填满缝隙，固体通道更像两块瓷砖贴合：材料可能优秀，但接缝必须长期保持紧密。",
      outlook: "产业正推进硫化物界面涂层、复合电解质、锂金属保护、压力管理和连续制造。量产时间表应结合实际验证阅读。"
    },
    en: {
      title: "All-Solid-State Battery",
      oneLine: "Replaces conventional liquid electrolyte with a solid ion conductor; high potential remains constrained by interfaces, pressure, yield, and cost.",
      overview: "Solid-state describes the electrolyte and architecture, not one cathode chemistry. Sulfide, oxide, and polymer routes trade ionic conductivity, compliance, air stability, and processing temperature.",
      how: "Ions cross the solid electrolyte while electrons still use the external circuit. Solids cannot automatically wet electrodes like liquids, so contact loss, voids, and current concentration are central problems.",
      electrodes: "Cathodes may use NMC, LFP, or other composites; anodes may be graphite, silicon, or lithium metal; electrolytes include sulfides, oxides, and polymers.",
      strengths: ["Potential to reduce flammable liquid and raise safety limits", "May enable lithium metal and higher specific energy", "Opens new temperature and packaging options"],
      limitations: ["Solid-solid interface resistance and contact retention", "Dendrites, pressure, and compatibility still need validation", "Equipment, yield, and cost are not yet mature"],
      applications: ["Pilot validation for premium EVs", "Aviation and high-energy research", "Some micro-solid-state device batteries"],
      comparison: "Semi-solid, gel, and all-solid-state are not the same. Less liquid does not guarantee safety under every abuse condition.",
      analogy: "Liquid fills gaps automatically; a solid interface is more like two tiles pressed together, where the seam must stay intimate for years.",
      outlook: "Industry is developing sulfide coatings, composite electrolytes, lithium protection, pressure management, and continuous production. Timelines require evidence."
    },
    sourceIds: ["janek-2016", "doe-safety-2024", "schmuch-2018"]
  },
  {
    id: "lithium-sulfur",
    short: "Li–S",
    color: "#efcf76",
    aliases: ["锂硫", "Li-S", "lithium sulfur", "polysulfide", "多硫化物"],
    facts: {
      voltage: "≈ 2.1 V",
      massEnergy: { zh: "研究/示范电芯常见约 250–500 Wh/kg", en: "Research/demonstration cells often report about 250–500 Wh/kg" },
      massRange: [250, 500],
      volumeEnergy: { zh: "通常受低密度硫和电解液用量限制", en: "Often limited by low-density sulfur and electrolyte amount" },
      cycles: { zh: "研究结果差异很大", en: "Research results vary widely" },
      maturity: "research-pilot"
    },
    ratings: { safety: "medium", fastCharge: "low", cold: "uncertain", availability: "high", cost: "potential-high", maturity: "low" },
    zh: {
      title: "锂硫电池 Li–S",
      oneLine: "用轻、丰富的硫作为正极活性物质，理论比能量很高，但穿梭效应和锂金属负极限制寿命。",
      overview: "硫在放电时逐步转化为多硫化锂和硫化锂。中间产物可能溶入电解液并在两极之间往返，造成活性物质流失和自放电。",
      how: "它不是简单的嵌入反应，而是多步转化反应。硫导电性低、产物体积变化大，通常需要多孔碳宿主和较多电解液。",
      electrodes: "正极：硫/碳复合物；负极：锂金属；电解质：常见醚系液态或研究中的固态路线。",
      strengths: ["很高的理论质量比能量", "硫资源丰富、材料成本潜力较低", "适合对重量极敏感的研究方向"],
      limitations: ["多硫化物穿梭导致容量衰减", "锂金属负极带来枝晶与安全挑战", "降低电解液用量后反应和寿命更难兼顾"],
      applications: ["高空平台和航空研究", "长航时无人系统", "仍以实验室和小规模示范为主"],
      comparison: "理论比能量不能直接与商业锂离子电芯比较；硫载量、电解液/硫比和锂过量都会改变最终电芯数据。",
      analogy: "像一块很轻的海绵：理论上能装很多，但里面的物质容易溶出并跑到不该去的地方。",
      outlook: "研究集中在硫宿主、催化吸附、贫电解液设计、锂负极保护和固态锂硫。"
    },
    en: {
      title: "Lithium-Sulfur — Li–S",
      oneLine: "Uses light, abundant sulfur for very high theoretical specific energy, but shuttle reactions and lithium metal limit life.",
      overview: "Sulfur converts through soluble polysulfides toward lithium sulfide during discharge. Intermediates can migrate between electrodes, losing active material and causing self-discharge.",
      how: "This is a multistep conversion reaction rather than simple intercalation. Sulfur conducts poorly and changes volume, so porous carbon hosts and substantial electrolyte are often required.",
      electrodes: "Cathode: sulfur-carbon composite; anode: lithium metal; electrolyte: often ether-based liquid or experimental solid routes.",
      strengths: ["Very high theoretical specific energy", "Abundant sulfur and potential material-cost advantage", "Attractive for mass-sensitive research"],
      limitations: ["Polysulfide shuttle causes capacity loss", "Lithium metal brings dendrite and safety challenges", "Lean electrolyte makes reaction and life harder to balance"],
      applications: ["High-altitude and aviation research", "Long-endurance unmanned systems", "Mostly laboratory and limited demonstrations"],
      comparison: "Theoretical energy cannot be directly compared with commercial lithium-ion cells; sulfur loading, electrolyte ratio, and excess lithium change cell results.",
      analogy: "Like a very light sponge that can hold a lot, except its contents can dissolve and travel where they should not.",
      outlook: "Research targets sulfur hosts, catalytic trapping, lean electrolyte, lithium protection, and solid-state lithium-sulfur."
    },
    sourceIds: ["seh-2016-lisulfur", "tarascon-2001"]
  },
  {
    id: "lead",
    short: "Lead-acid",
    color: "#b9bec7",
    aliases: ["铅酸", "lead-acid", "Pb", "PbO2", "AGM", "EFB"],
    facts: {
      voltage: { zh: "约 2.0 V / 单格", en: "About 2.0 V per cell" },
      massEnergy: "≈ 30–50 Wh/kg",
      massRange: [30, 50],
      volumeEnergy: "≈ 60–110 Wh/L",
      cycles: { zh: "约 300–1,000 次，强烈依赖放电深度", en: "About 300–1,000 cycles, strongly dependent on depth of discharge" },
      maturity: "commercial"
    },
    ratings: { safety: "medium", fastCharge: "low", cold: "medium", availability: "medium", cost: "high", maturity: "high" },
    zh: {
      title: "铅酸电池",
      oneLine: "重，但便宜、可靠且能瞬间输出大电流，仍是汽车启动和备用电源的重要技术。",
      overview: "铅酸电池使用铅负极、二氧化铅正极和硫酸电解液。它有成熟的回收体系，但铅的毒性要求严格闭环管理。",
      how: "放电时两极都逐步生成硫酸铅并消耗硫酸；充电时反应逆转。长期亏电会让硫酸铅晶体长大，形成难以恢复的硫化。",
      electrodes: "正极：PbO₂；负极：Pb；电解质：H₂SO₄。",
      strengths: ["瞬时大电流能力强", "制造成熟、成本低", "闭环回收基础设施完善"],
      limitations: ["能量密度低、重量大", "深度放电和长期亏电伤害明显", "铅和酸需要严格安全与回收管理"],
      applications: ["燃油车和部分混动车启动", "UPS 与通信后备", "低成本固定电源"],
      comparison: "它不适合作为长续航动力电池，但在低成本、高启动功率和成熟回收方面仍有优势。",
      analogy: "像沉重的应急发力器：跑不远，但需要瞬间大力时非常可靠。",
      outlook: "AGM、EFB 和更严格回收继续延长其在启动与备用市场的生命。"
    },
    en: {
      title: "Lead-Acid Battery",
      oneLine: "Heavy but cheap, reliable, and capable of high burst current; still important for starting and backup power.",
      overview: "Lead-acid uses a lead anode, lead-dioxide cathode, and sulfuric-acid electrolyte. Recycling is mature, but lead toxicity demands strict closed-loop handling.",
      how: "During discharge both electrodes move toward lead sulfate while sulfuric acid is consumed; charge reverses the process. Long undercharge grows difficult-to-reverse sulfate crystals.",
      electrodes: "Cathode: PbO₂; anode: Pb; electrolyte: H₂SO₄.",
      strengths: ["Strong burst-current output", "Mature, low-cost manufacturing", "Established closed-loop recycling"],
      limitations: ["Low energy density and high mass", "Deep discharge and undercharge cause damage", "Lead and acid require strict safety and recycling"],
      applications: ["Starter systems", "UPS and telecom backup", "Low-cost stationary power"],
      comparison: "It is unsuitable for long-range traction but remains strong in low cost, starter power, and mature recycling.",
      analogy: "Like a heavy emergency starter: it cannot travel far, but delivers dependable force at once.",
      outlook: "AGM, EFB, and stronger recycling keep it relevant in starter and backup markets."
    },
    sourceIds: ["doe-basics", "tarascon-2001"]
  },
  {
    id: "nimh",
    short: "NiMH",
    color: "#e8a46f",
    aliases: ["镍氢", "NiMH", "nickel metal hydride", "储氢合金"],
    facts: {
      voltage: { zh: "约 1.2 V / 单体", en: "About 1.2 V per cell" },
      massEnergy: "≈ 60–120 Wh/kg",
      massRange: [60, 120],
      volumeEnergy: "≈ 140–300 Wh/L",
      cycles: { zh: "通常约 500–1,500 次", en: "Typically about 500–1,500 cycles" },
      maturity: "commercial"
    },
    ratings: { safety: "high", fastCharge: "medium", cold: "high", availability: "medium", cost: "medium", maturity: "high" },
    zh: {
      title: "镍氢电池 NiMH",
      oneLine: "以耐用、宽温和抗滥用见长，在混动车频繁浅充浅放的工况中非常稳健。",
      overview: "镍氢电池用镍氧羟化物正极和储氢合金负极。它没有镉电池那么明显的毒性问题，也不像锂离子那样追求极高能量密度。",
      how: "充放电时氢在合金中被吸收和释放，氢氧根在电解液中参与电荷平衡。混动车常把 SOC 控制在中间区间，延长寿命。",
      electrodes: "正极：NiOOH/Ni(OH)₂；负极：储氢合金；电解质：碱性 KOH。",
      strengths: ["宽温、耐用和抗滥用能力好", "适合高频浅充浅放", "商业经验与可靠性成熟"],
      limitations: ["质量与体积能量密度低于现代锂离子", "自放电和充电发热较明显", "镍和稀土合金会影响成本与资源"],
      applications: ["混合动力汽车", "AA/AAA 充电电池", "工业和应急设备"],
      comparison: "NiMH 不追求纯电长续航，但在混动车的小能量窗口和频繁功率交换中很耐用。",
      analogy: "像耐操的短跑接力队员：每次跑得不远，却能反复快速接棒。",
      outlook: "仍会服务于特定混动和宽温场景，但纯电与插混主动力由锂离子主导。"
    },
    en: {
      title: "Nickel-Metal Hydride — NiMH",
      oneLine: "Known for durability, wide temperature, and abuse tolerance; robust in frequent shallow cycling for hybrids.",
      overview: "NiMH uses a nickel oxyhydroxide cathode and hydrogen-storage alloy anode. It avoids cadmium's major toxicity issue and does not chase lithium-ion's highest energy density.",
      how: "Hydrogen is absorbed and released by the alloy while hydroxide participates in charge balance. Hybrids often keep SOC in a middle window to extend life.",
      electrodes: "Cathode: NiOOH/Ni(OH)₂; anode: hydrogen-storage alloy; electrolyte: alkaline KOH.",
      strengths: ["Wide-temperature, durable, and abuse tolerant", "Good for frequent shallow cycling", "Mature reliability and field experience"],
      limitations: ["Lower mass and volume energy than modern lithium-ion", "Higher self-discharge and charging heat", "Nickel and rare-earth alloys affect resources and cost"],
      applications: ["Hybrid vehicles", "Rechargeable AA/AAA cells", "Industrial and emergency devices"],
      comparison: "NiMH is not optimized for long all-electric range, but is durable in the small energy window and frequent power exchange of hybrids.",
      analogy: "Like a durable relay sprinter: each run is short, but it can hand off power repeatedly.",
      outlook: "It remains useful in selected hybrids and wide-temperature uses while lithium-ion dominates EV traction."
    },
    sourceIds: ["doe-basics", "tarascon-2001"]
  }
];
