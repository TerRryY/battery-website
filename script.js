"use strict";

let currentLanguage = "zh";

const zhTranslations = {
  "Skip to content": "跳到主要内容",
  "Main navigation": "主导航",
  "Open navigation": "打开导航",
  "Close knowledge entry": "关闭词条",
  "OVERVIEW": "概览",
  "TYPES": "类型",
  "CALCULATOR": "计算器",
  "MATERIALS": "材料",
  "RESEARCH": "研究",
  "BATTERY LAB / MATERIALS SCIENCE": "电池实验室 / 材料科学",
  "KNOWLEDGE BASE": "知识库",
  "Battery Knowledge Hub": "电池知识库",
  "Search a battery type, material, structure, or performance term. Each entry explains the concept in plain language and keeps the technical trade-offs visible.": "搜索电池类型、材料、结构或性能指标。每个词条都会用通俗语言解释，同时保留关键技术取舍。",
  "Search knowledge entries": "搜索知识词条",
  "ENERGY STORAGE": "能源储存",
  "RESEARCH": "研究",
  "EXPLORE PROJECT": "探索项目",
  "VIEW CALCULATOR": "使用计算器",
  "MISSION": "研究方向",
  "BATTERIES": "电池",
  "MATERIALS": "材料",
  "EV SYSTEMS": "电动汽车系统",
  "Understand how different chemistries store energy and why every choice involves trade-offs.": "理解不同化学体系如何储能，以及为什么每种选择都伴随着取舍。",
  "Explore how cathodes, anodes, electrolytes, and separators shape performance and safety.": "探索正极、负极、电解质和隔膜如何影响性能与安全。",
  "Connect individual cells to range, thermal management, pack structure, and real vehicles.": "把单体电芯与续航、热管理、电池包结构和真实车辆联系起来。",
  "THE BIG PICTURE": "整体视角",
  "Why Batteries Matter": "为什么电池很重要",
  "Batteries connect chemistry to daily life. They influence how we travel, how renewable electricity is used, and which materials future engineers need to improve.": "电池把化学与日常生活连接起来。它影响我们的出行方式、可再生电力的利用方式，以及未来工程师需要改进哪些材料。",
  "Clean Transportation": "清洁交通",
  "Renewable Energy Storage": "可再生能源储存",
  "Materials Innovation": "材料创新",
  "Batteries are central to electric vehicles and can reduce dependence on fossil fuels when electricity is produced cleanly.": "电池是电动汽车的核心。当电力来源足够清洁时，它能帮助减少对化石燃料的依赖。",
  "Solar and wind are variable. Storage can shift energy across hours and help balance supply with demand.": "太阳能与风能具有波动性。储能可以把电力转移到更需要的时段，帮助平衡供需。",
  "Better cathodes, anodes, electrolytes, separators, and thermal systems can improve safety, cost, and useful life.": "更好的正负极、电解质、隔膜和热管理系统，可以改善安全性、成本与使用寿命。",
  "01 / MANUFACTURING": "01 / 制造",
  "FROM MATERIAL": "从材料",
  "TO CELL": "到电芯",
  "Precision manufacturing turns electrochemical ideas into repeatable, safe products.": "精密制造把电化学设想变成性能一致、可以安全使用的产品。",
  "CHAPTER 02": "第二章",
  "TECHNOLOGIES & PERFORMANCE": "技术与性能",
  "CHEMISTRY MAP": "化学体系",
  "Battery Types": "电池类型",
  "No chemistry wins every category. Open a profile to see where each technology is useful and what trade-offs it makes.": "没有一种化学体系能在所有指标上获胜。展开条目，了解每种技术适合什么场景，又牺牲了什么。",
  "RELATIVE PERFORMANCE": "相对性能",
  "Compare Battery Technologies": "比较电池技术",
  "Choose up to four technologies. Scores are simplified educational estimates, not industrial specifications.": "最多选择四种技术。评分是用于学习的简化估计，不代表工业规格。",
  "Select technologies": "选择技术",
  "Relative score: 1 = low, 10 = high. For cost, a higher score means more affordable.": "相对评分：1 为低，10 为高。成本分数越高，表示越经济。",
  "RADAR / 6 FACTORS": "雷达图 / 6 项指标",
  "Balanced performance": "综合性能",
  "BAR / ENERGY DENSITY": "柱状图 / 能量密度",
  "Typical midpoint estimate": "典型区间中值估计",
  "02 / PACK ENGINEERING": "02 / 电池包工程",
  "CHEMISTRY NEEDS": "化学体系需要",
  "STRUCTURE": "结构支撑",
  "A cell becomes useful at vehicle scale only when structure, cooling, sensing, and protection work together.": "只有当结构、冷却、传感和保护协同工作时，电芯才能真正用于整车。",
  "CHAPTER 03": "第三章",
  "CALCULATION & HISTORY": "计算与历史",
  "ENERGY MODEL": "能量模型",
  "Battery Energy Calculator": "电池能量计算器",
  "Connect voltage and capacity with a simplified estimate of stored electrical energy.": "用电压与容量，估算电池储存的电能。",
  "Voltage": "电压",
  "Capacity": "容量",
  "Calculate Energy": "计算能量",
  "Reset": "重置",
  "RESULT": "结果",
  "Enter valid values to estimate stored energy.": "输入有效数值以估算储存能量。",
  "VEHICLE MODEL": "车辆模型",
  "EV Range Calculator": "电动车续航计算器",
  "Estimate how battery size, energy consumption, and a simplified cold-weather factor may affect driving range.": "估算电池容量、能耗和简化低温系数如何影响行驶里程。",
  "Battery Size": "电池容量",
  "Consumption": "百公里能耗",
  "Temperature Model": "温度模型",
  "Normal temperature · 100%": "常温 · 100%",
  "Cold weather · 85%": "寒冷天气 · 85%",
  "Very cold weather · 70%": "严寒天气 · 70%",
  "Estimate Range": "估算续航",
  "ESTIMATED RANGE": "预计续航",
  "Real range also depends on speed, tires, terrain, HVAC use, and battery condition.": "真实续航还会受到车速、轮胎、地形、空调和电池状态影响。",
  "TWO CENTURIES OF CHANGE": "两个世纪的变化",
  "Battery Innovation Timeline": "电池创新时间线",
  "Battery history is not a straight path. Each step solved a different problem: rechargeability, portability, cost, power, or safety.": "电池发展并不是一条直线。每一步都在解决不同问题：可充电性、便携性、成本、功率或安全。",
  "03 / SYSTEM INTEGRATION": "03 / 系统集成",
  "FROM PACK": "从电池包",
  "TO VEHICLE": "到整车",
  "Battery performance is finally measured inside a complete thermal, electrical, and mechanical system.": "电池的最终表现，要放在完整的热、电和机械系统中评价。",
  "CHAPTER 04": "第四章",
  "SYSTEMS, MATERIALS & RESEARCH": "系统、材料与研究",
  "SYSTEM ARCHITECTURE": "系统架构",
  "From Cell to Pack": "从电芯到电池包",
  "An EV battery is more than chemistry. Packaging, sensing, thermal control, structure, and software determine how cells behave as a system.": "电动车电池不只是化学体系。封装、传感、热控制、结构和软件共同决定电芯作为系统时的表现。",
  "CELL": "电芯",
  "MODULE": "模组",
  "PACK": "电池包",
  "MATERIALS DATABASE": "材料数据库",
  "What Is Inside a Battery?": "电池里面有什么？",
  "Search by material or filter by role. Each entry focuses on one useful advantage and one engineering challenge.": "按材料搜索或按作用筛选。每个条目聚焦一个优势和一个工程挑战。",
  "SEARCH": "搜索",
  "All": "全部",
  "Cathode": "正极",
  "Anode": "负极",
  "Electrolyte": "电解质",
  "Separator": "隔膜",
  "Element": "元素",
  "ADVANTAGE": "优势",
  "CHALLENGE": "挑战",
  "No material found.": "没有找到相关材料。",
  "PERSONAL NOTES": "个人研究笔记",
  "My Research Thoughts": "我的研究思考",
  "These notes are not conclusions. They are questions I found useful while connecting chemistry, materials, and vehicle engineering.": "这些笔记不是最终结论，而是我在连接化学、材料与车辆工程时认为值得继续追问的问题。",
  "Why Sodium-ion Batteries Matter": "为什么钠离子电池值得关注",
  "The Challenge of Winter EV Range": "冬季电动车续航的挑战",
  "Can Battery Waste Heat Be Reused?": "电池余热能否被重新利用？",
  "KNOWLEDGE CHECK": "知识检查",
  "Test Your Battery Knowledge": "测试你的电池知识",
  "Five short questions. Explanations appear after submission so the quiz also works as a review.": "五道简短问题。提交后会显示解释，也可以用来复习。",
  "Submit Answers": "提交答案",
  "Restart": "重新开始",
  "REFERENCE": "术语参考",
  "Battery Glossary": "电池术语表",
  "Find a term": "查找术语",
  "No glossary term found.": "没有找到相关术语。",
  "WHY I BUILT THIS WEBSITE": "为什么我建立这个网站",
  "A learning project about materials, systems, and better questions.": "一个关于材料、系统与持续提问的学习项目。",
  "A student project about materials science and energy storage.": "一个关于材料科学与能源储存的学生项目。",
  "Built by Terry Wang": "Terry Wang 制作",
  "Back to top ↑": "返回顶部 ↑",
  "Lead-Acid Battery": "铅酸电池",
  "Nickel-Metal Hydride Battery": "镍氢电池",
  "Lithium Iron Phosphate Battery": "磷酸铁锂电池",
  "NMC Lithium-ion Battery": "三元锂离子电池",
  "Sodium-ion Battery": "钠离子电池",
  "Solid-State Battery": "全固态电池",
  "Approximate typical range": "典型范围（近似值）",
  "ADVANTAGES": "优势",
  "LIMITATIONS": "局限",
  "COMMON APPLICATIONS": "常见应用",
  "Lead-acid": "铅酸",
  "NMC Li-ion": "三元锂",
  "Sodium-ion": "钠离子",
  "Solid-state": "全固态",
  "Energy Density": "能量密度",
  "Cost": "成本",
  "Safety": "安全性",
  "Cycle Life": "循环寿命",
  "Charging": "充电性能",
  "Cold Weather": "低温性能",
  "Wh/kg · approximate midpoint": "Wh/kg · 近似中值",
  "Voltaic Pile": "伏打电堆",
  "Lead-acid Battery": "铅酸电池",
  "Nickel-Cadmium": "镍镉电池",
  "Commercial Li-ion": "商用锂离子电池",
  "EV Battery Expansion": "电动车电池扩张",
  "Sodium-ion Development": "钠离子发展",
  "Solid-state Potential": "固态电池潜力",
  "Lithium": "锂",
  "Sodium": "钠",
  "Graphite": "石墨",
  "Silicon": "硅",
  "Liquid Electrolyte": "液态电解质",
  "Solid Electrolyte": "固态电解质",
  "Correct.": "回答正确。",
  "Charts could not load. Check your internet connection and refresh.": "图表加载失败，请检查网络连接并刷新页面。"
};

function tr(text) {
  return currentLanguage === "zh" ? (zhTranslations[text] || text) : text;
}

const batteryTypes = [
  {
    id: "lead",
    knowledgeId: "lead-acid",
    name: "Lead-Acid Battery",
    description: "A mature rechargeable chemistry known for low cost and strong short bursts of current.",
    density: "30–50 Wh/kg",
    advantage: "Low cost, reliable high-current output, and a well-established recycling system.",
    limitation: "Heavy and relatively low in energy density; deep discharge can shorten its life.",
    applications: "Vehicle starter batteries, UPS systems, backup power.",
    takeaway: "Lead-acid is heavy, but it remains useful when low cost and high starting current matter most."
  },
  {
    id: "nimh",
    knowledgeId: "nimh",
    name: "Nickel-Metal Hydride Battery",
    description: "A durable rechargeable chemistry that remains useful where temperature tolerance and robustness matter.",
    density: "60–120 Wh/kg",
    advantage: "Good abuse tolerance, wide operating temperature range, and proven reliability.",
    limitation: "Heavier and more prone to self-discharge than modern lithium-ion cells.",
    applications: "Hybrid vehicles, consumer rechargeable cells, industrial equipment.",
    takeaway: "NiMH is not the lightest option, but it is robust and dependable across demanding conditions."
  },
  {
    id: "lfp",
    knowledgeId: "lfp",
    name: "Lithium Iron Phosphate Battery",
    description: "A lithium-ion chemistry built around a stable phosphate cathode and long cycle life.",
    density: "90–160 Wh/kg",
    advantage: "Strong thermal stability, long service life, and lower reliance on nickel and cobalt.",
    limitation: "Lower volumetric energy density and weaker cold-weather charging than high-nickel cells.",
    applications: "EVs, buses, stationary storage, power tools.",
    takeaway: "LFP is not the lightest lithium-ion battery, but it is safe, durable, and cost-effective."
  },
  {
    id: "nmc",
    knowledgeId: "nmc",
    name: "NMC Lithium-ion Battery",
    description: "A layered cathode chemistry that balances nickel, manganese, and cobalt for high specific energy.",
    density: "180–300 Wh/kg",
    advantage: "High energy density supports longer range with less battery mass.",
    limitation: "Requires careful manufacturing, battery management, and thermal protection.",
    applications: "Long-range EVs, laptops, drones, portable electronics.",
    takeaway: "NMC is valuable when range and low mass matter, but it needs careful thermal and safety control."
  },
  {
    id: "sodium",
    knowledgeId: "sodium-ion",
    name: "Sodium-ion Battery",
    description: "A developing rechargeable system that replaces lithium ions with more abundant sodium ions.",
    density: "100–180 Wh/kg",
    advantage: "Potentially lower material cost, diversified supply, and useful low-temperature behavior.",
    limitation: "Current cells usually store less energy per kilogram than leading lithium-ion designs.",
    applications: "Entry-level EVs, two-wheelers, stationary storage.",
    takeaway: "Sodium-ion trades some energy density for abundant materials, supply diversity, and potential cost advantages."
  },
  {
    id: "solid",
    knowledgeId: "solid-state",
    name: "Solid-State Battery",
    description: "A family of developing batteries that uses a solid electrolyte instead of a conventional liquid one.",
    density: "Potentially >300 Wh/kg",
    advantage: "Could support lithium-metal anodes and improve the safety and energy ceiling.",
    limitation: "Interface resistance, dendrites, pressure control, cost, and manufacturing yield remain difficult.",
    applications: "Future EVs, aviation, premium electronics; still developing.",
    takeaway: "Solid-state batteries have high potential, but manufacturing reliable interfaces at scale remains the real test."
  }
];

const comparisonData = {
  lead: { label: "Lead-acid", color: "#777777", midpoint: 40, scores: [2, 10, 7, 5, 4, 7] },
  nimh: { label: "NiMH", color: "#999999", midpoint: 90, scores: [4, 6, 8, 6, 5, 8] },
  lfp: { label: "LFP", color: "#ffffff", midpoint: 125, scores: [6, 8, 9, 9, 8, 6] },
  nmc: { label: "NMC Li-ion", color: "#d8d8d8", midpoint: 240, scores: [9, 5, 6, 6, 8, 5] },
  sodium: { label: "Sodium-ion", color: "#b8b8b8", midpoint: 140, scores: [5, 8, 8, 7, 7, 9] },
  solid: { label: "Solid-state", color: "#efefef", midpoint: 330, scores: [10, 2, 8, 7, 8, 6] }
};

const timelineData = [
  ["1800", "Voltaic Pile", "Alessandro Volta stacked metal discs and electrolyte-soaked material to produce a continuous current."],
  ["1859", "Lead-acid Battery", "Gaston Planté developed the first practical rechargeable battery, a chemistry still used today."],
  ["1899", "Nickel-Cadmium", "Rechargeable nickel-cadmium improved durability and power, although cadmium created environmental concerns."],
  ["1991", "Commercial Li-ion", "Commercial lithium-ion cells made portable electronics lighter and helped establish modern rechargeable devices."],
  ["2010s", "EV Battery Expansion", "Large-scale manufacturing, improved cells, and better battery management accelerated electric vehicles."],
  ["2020s", "Sodium-ion Development", "Sodium-ion moved from laboratories toward early commercial production for cost-sensitive applications."],
  ["2030+", "Solid-state Potential", "Several companies are targeting solid-state commercialization, but timing depends on engineering and manufacturing progress."]
];

const packContent = {
  cell: {
    code: "LEVEL 01 / ELECTROCHEMISTRY",
    title: "Cell",
    text: "A cell is one electrochemical unit. Its cathode, anode, electrolyte, and separator determine voltage, energy, power, aging, and many safety limits.",
    facts: [["Contains", "Electrodes, electrolyte, separator"], ["Measured by", "Voltage, capacity, resistance"], ["Key concern", "Heat generation and consistency"]]
  },
  module: {
    code: "LEVEL 02 / INTEGRATION",
    title: "Module",
    text: "A module connects multiple cells electrically and mechanically. It simplifies assembly, sensing, service, and structural support, although some modern packs use cell-to-pack designs without traditional modules.",
    facts: [["Contains", "Cells, busbars, sensors, frame"], ["Purpose", "Electrical and mechanical grouping"], ["Key concern", "Cell matching and heat spreading"]]
  },
  pack: {
    code: "LEVEL 03 / VEHICLE SYSTEM",
    title: "Pack",
    text: "A pack combines cells or modules with a battery management system, cooling circuit, enclosure, contactors, fuses, insulation, and crash protection. System design can matter as much as cell chemistry.",
    facts: [["Contains", "BMS, cooling, structure, safety"], ["Connects to", "Motor, charger, vehicle controls"], ["Key concern", "Thermal propagation and reliability"]]
  }
};

const materials = [
  ["Lithium", "Element", "A charge-carrying element used across many rechargeable battery chemistries.", "High electrochemical potential and low atomic mass.", "Supply concentration, extraction impacts, and price volatility."],
  ["Sodium", "Element", "A charge carrier in sodium-ion batteries.", "Abundant and widely distributed resources.", "Larger ion size can reduce energy density and changes material choices."],
  ["Graphite", "Anode", "The most common commercial anode material in lithium-ion batteries.", "Stable, mature, efficient, and supported by large supply chains.", "Limited theoretical capacity compared with silicon-rich anodes."],
  ["Silicon", "Anode", "An anode material often blended with graphite to increase capacity.", "Very high theoretical lithium-storage capacity.", "Large volume change during cycling can damage particles and interfaces."],
  ["LFP", "Cathode", "A phosphate cathode used in lithium iron phosphate cells.", "Strong thermal stability, long life, and relatively low material cost.", "Lower voltage and energy density than high-nickel layered cathodes."],
  ["NMC", "Cathode", "A layered oxide cathode containing nickel, manganese, and cobalt.", "High energy density with adjustable composition.", "Cost, sourcing, moisture sensitivity, and thermal-management demands."],
  ["Liquid Electrolyte", "Electrolyte", "A conductive salt solution that transports ions between electrodes.", "High ionic conductivity and mature manufacturing.", "Usually flammable and sensitive to voltage and temperature extremes."],
  ["Separator", "Separator", "A porous membrane that prevents direct electrode contact while allowing ion flow.", "Thin, light, and essential for electrical isolation.", "Shrinkage, puncture, or contamination can create internal short circuits."],
  ["Solid Electrolyte", "Electrolyte", "A solid ceramic, sulfide, or polymer designed to conduct ions.", "May reduce flammable liquid content and support new anode designs.", "Interfaces, brittleness, pressure, moisture sensitivity, and scale-up."]
].map(([name, category, role, advantage, challenge]) => ({ name, category, role, advantage, challenge }));

const quizData = [
  {
    question: "What does Wh measure?",
    options: ["Electrical resistance", "Stored or delivered energy", "Charging speed only", "Battery temperature"],
    answer: 1,
    explanation: "A watt-hour is a unit of energy. It combines power in watts with time in hours."
  },
  {
    question: "Which battery family is commonly used in modern EV traction packs?",
    options: ["Lithium-ion", "Zinc-carbon", "Silver oxide", "Primary alkaline"],
    answer: 0,
    explanation: "Most current EVs use lithium-ion families such as LFP or nickel-rich layered oxide chemistries."
  },
  {
    question: "Why can cold weather reduce EV range?",
    options: ["The wheels become smaller", "Electrons stop existing", "Ion movement slows and heating uses energy", "The pack gains mass"],
    answer: 2,
    explanation: "Cold raises internal resistance and slows reaction kinetics, while cabin and battery heating also consume energy."
  },
  {
    question: "What is a main role of the electrolyte?",
    options: ["Carry ions between electrodes", "Hold the vehicle body together", "Measure tire pressure", "Create mechanical braking"],
    answer: 0,
    explanation: "The electrolyte allows ions to move internally while electrons travel through the external circuit."
  },
  {
    question: "What does BMS stand for?",
    options: ["Battery Material Standard", "Battery Management System", "Balanced Motor Supply", "Basic Module Structure"],
    answer: 1,
    explanation: "A Battery Management System monitors and controls conditions such as voltage, current, temperature, and state estimation."
  }
];

const glossary = [
  ["Anode", "The electrode where oxidation occurs. In a discharging lithium-ion cell, it releases lithium ions and electrons."],
  ["Cathode", "The electrode where reduction occurs during discharge. Cathode chemistry strongly influences voltage and energy."],
  ["Electrolyte", "The ion-conducting material between electrodes. It may be liquid, gel, polymer, ceramic, or sulfide."],
  ["Separator", "A porous electrical insulator that keeps electrodes apart while allowing ions to move."],
  ["Energy Density", "How much energy a battery stores relative to mass or volume, often measured in Wh/kg or Wh/L."],
  ["Power Density", "How quickly a battery can deliver energy relative to its mass or volume."],
  ["Cycle Life", "The number of charge-discharge cycles before capacity or performance reaches a defined limit."],
  ["Thermal Management", "Hardware and control strategies used to keep cells within a suitable temperature range."],
  ["BMS", "Battery Management System: electronics and software that monitor, estimate, protect, and control a pack."],
  ["SOC", "State of Charge: an estimate of how much usable charge remains, usually expressed as a percentage."],
  ["SOH", "State of Health: an estimate of aging compared with a new battery's performance."],
  ["Fast Charging", "Charging at high power. It can save time but requires careful control of heat and lithium plating risk."],
  ["Solid-state Battery", "A battery family using a solid electrolyte. Designs and performance vary widely."],
  ["Sodium-ion Battery", "A rechargeable battery that moves sodium ions instead of lithium ions between electrodes."]
].map(([term, definition]) => ({ term, definition }));

const materialKnowledgeMap = {
  Lithium: "lithium",
  Sodium: "sodium",
  Graphite: "graphite",
  Silicon: "silicon",
  LFP: "lfp-material",
  NMC: "nmc-material",
  "Liquid Electrolyte": "electrolyte",
  Separator: "separator",
  "Solid Electrolyte": "solid-electrolyte"
};

const glossaryKnowledgeMap = {
  Anode: "anode",
  Cathode: "cathode",
  Electrolyte: "electrolyte",
  Separator: "separator",
  "Energy Density": "energy-density",
  "Power Density": "power-density",
  "Cycle Life": "cycle-life",
  "Thermal Management": "thermal-management",
  BMS: "bms",
  SOC: "soc",
  SOH: "soh",
  "Fast Charging": "fast-charging",
  "Solid-state Battery": "solid-state",
  "Sodium-ion Battery": "sodium-ion"
};

const knowledgeEntries = [
  {
    id: "nmc",
    category: "电池类型",
    title: "三元锂电池 NCM/NCA",
    aliases: ["三元锂", "NCM", "NCA", "镍钴锰", "镍钴铝", "长续航"],
    oneLine: "三元锂电池是一类使用镍、钴、锰或镍、钴、铝作为正极材料的锂离子电池，特点是能量密度较高，常用于追求长续航的电动车。",
    tags: ["高能量密度", "锂离子", "电动车"],
    metrics: [["能量密度", "通常较高，取决于镍含量与电芯设计"], ["安全性", "需要严格热管理和 BMS 保护"], ["成本", "受镍、钴价格影响较明显"], ["低温表现", "通常好于 LFP，但仍会受低温影响"], ["寿命", "取决于配方、温度和充电策略"]],
    sections: [
      ["名字是什么意思", "“三元”指正极材料中包含三类主要金属元素。NCM 通常指镍、钴、锰；NCA 通常指镍、钴、铝。镍主要帮助提高容量，钴帮助稳定层状结构，锰或铝帮助改善安全与结构稳定。"],
      ["工作原理", "可以把它想成一个可反复停靠锂离子的停车场。充电时，锂离子从正极离开并嵌入负极；放电时，锂离子回到正极，同时电子从外部电路流过，为设备或电机供电。"],
      ["主要优点", "相同重量下通常能储存更多电能，所以适合长续航电动车、无人机和轻薄电子产品。"],
      ["主要缺点", "材料成本较高，对制造环境、热管理和电池管理系统要求更高。如果温度控制不好，老化和安全风险会增加。"],
      ["和磷酸铁锂的区别", "三元锂通常能量密度更高、低温表现更好；磷酸铁锂通常更安全、寿命更长、成本更低。选择哪种电池，取决于更看重续航、价格、安全还是寿命。"],
      ["未来发展方向", "高镍化可以继续提高能量密度，但也会带来界面稳定性和热安全挑战。固态电解质、表面包覆和更好的热管理可能是重要方向。"],
      ["普通人怎么理解", "如果把电池比作背包，三元锂像一个容量更大的轻量背包，能装更多东西，但需要更仔细保护，不能过热、过充或长期处在不合适的环境中。"],
      ["一句话总结", "三元锂适合追求高续航和轻量化，但必须用更精细的安全与热管理来交换这些优势。"]
    ]
  },
  {
    id: "lfp",
    category: "电池类型",
    title: "磷酸铁锂电池 LFP",
    aliases: ["LFP", "LiFePO4", "铁锂", "刀片电池"],
    oneLine: "磷酸铁锂电池是一类使用磷酸铁锂作为正极材料的锂离子电池，以安全性、循环寿命和成本优势著称。",
    tags: ["安全稳定", "长寿命", "储能"],
    metrics: [["能量密度", "通常低于高镍三元"], ["安全性", "热稳定性通常较好"], ["成本", "不依赖镍钴，成本压力较低"], ["低温表现", "低温充电与续航会明显受影响"], ["寿命", "通常循环寿命较长"]],
    sections: [
      ["基本概念", "LFP 的全称是 Lithium Iron Phosphate，也就是磷酸铁锂。它仍属于锂离子电池，只是正极材料与三元锂不同。"],
      ["核心材料", "它的正极含铁、磷、氧和锂，不使用钴和镍。磷氧键比较稳定，因此在高温或滥用条件下更不容易释放氧气。"],
      ["工作原理", "充放电时，锂离子在磷酸铁锂正极和石墨负极之间往返移动。材料结构越稳定，反复往返时越不容易“塌”。"],
      ["主要优点", "安全性好、循环寿命长、成本相对低，适合电动车、公交车、家用储能和电网储能。"],
      ["主要缺点", "单位体积和单位重量储能通常低于高镍三元，冬季低温性能也需要通过预热和热管理改善。"],
      ["应用场景", "很多重视成本、安全和寿命的电动车与储能系统会选择 LFP。对于城市通勤，它往往是非常实用的方案。"],
      ["普通人怎么理解", "LFP 像一个不追求极限轻量、但耐用踏实的工具箱。它可能不最轻，但经得起长期使用。"],
      ["一句话总结", "磷酸铁锂不是能量密度冠军，但它在安全、寿命和成本之间取得了很强的平衡。"]
    ]
  },
  {
    id: "sodium-ion",
    category: "电池类型",
    title: "钠离子电池",
    aliases: ["钠电", "Na-ion", "SIB", "低温电池"],
    oneLine: "钠离子电池用钠离子在正负极之间移动来储能，资源更丰富，可能适合低成本储能和部分入门级电动车。",
    tags: ["资源丰富", "低成本潜力", "低温表现"],
    metrics: [["能量密度", "通常低于主流锂离子"], ["安全性", "取决于材料体系与电解液"], ["成本", "长期可能更低，但量产仍在发展"], ["低温表现", "部分路线表现较好"], ["寿命", "随材料路线差异较大"]],
    sections: [
      ["基本概念", "钠离子电池和锂离子电池的思路相似，只是来回移动的离子从锂变成钠。钠资源分布更广，理论上供应压力更小。"],
      ["为什么重要", "它不一定完全取代锂电池，但可能在低成本储能、两轮车、A00 级小车和寒冷地区应用中很有价值。"],
      ["工作原理", "钠离子在充电时进入负极，放电时回到正极。因为钠离子比锂离子更大，所以材料结构需要专门设计，不能简单照搬锂电池。"],
      ["主要优点", "钠资源丰富、供应分布更均衡，部分体系低温性能较好，也可能降低对锂资源的依赖。"],
      ["主要缺点", "目前能量密度通常不如高水平锂离子电池，材料、制造和供应链仍在快速成熟中。"],
      ["应用场景", "更适合对极限续航要求不高、但重视成本、低温和规模化的场景，例如固定式储能、低速车和入门级车型。"],
      ["普通人怎么理解", "钠离子电池像一种更容易找到原料的替代路线。它不一定跑得最远，但可能更便宜、更容易大规模铺开。"],
      ["一句话总结", "钠离子电池的价值不在于全面取代锂电，而在于补上低成本和资源安全这块拼图。"]
    ]
  },
  {
    id: "solid-state",
    category: "电池类型",
    title: "固态电池",
    aliases: ["全固态", "半固态", "固态电解质", "Solid-state"],
    oneLine: "固态电池用固态电解质替代传统液态电解液，有潜力提升安全性和能量密度，但仍面临制造、成本和界面稳定性挑战。",
    tags: ["发展中", "固态电解质", "高潜力"],
    metrics: [["能量密度", "未来有提升潜力，实际取决于路线"], ["安全性", "可减少易燃液体，但不等于绝对安全"], ["成本", "目前制造成本和良率仍是挑战"], ["低温表现", "随电解质类型差异很大"], ["寿命", "受界面接触和枝晶影响"]],
    sections: [
      ["基本概念", "传统锂离子电池内部通常有液态电解液，固态电池则希望用陶瓷、硫化物或聚合物等固态材料传导离子。"],
      ["核心材料", "关键在固态电解质。它既要让锂离子快速通过，又要与正负极稳定接触，还要能被大规模制造。"],
      ["主要优点", "理论上可以减少易燃液态电解液，并可能搭配锂金属负极，提高能量密度上限。"],
      ["主要缺点", "固体和固体之间很难像液体那样完全贴合，界面阻抗、枝晶、压力控制、成本和量产良率都是难题。"],
      ["常见误解", "固态电池并不是已经完全取代锂电池的技术，也不是绝对不会出问题。它仍需要严谨的工程验证。"],
      ["应用场景", "如果成熟，可能用于高端电动车、航空、电动工具和需要高安全高能量的场景。"],
      ["普通人怎么理解", "液态电解液像水路，固态电解质像固体中的隧道。隧道更稳，但要修得连续、平整、低阻力并不容易。"],
      ["一句话总结", "固态电池很有前景，但真正难点是把漂亮的实验室结果稳定、低成本地做成大量产品。"]
    ]
  },
  {
    id: "lead-acid",
    category: "电池类型",
    title: "铅酸电池",
    aliases: ["Lead-acid", "启动电池", "蓄电池", "UPS"],
    oneLine: "铅酸电池是一种历史很长的可充电电池，能量密度低但成本低、瞬时大电流能力强、回收体系成熟。",
    tags: ["成熟可靠", "低成本", "可回收"],
    metrics: [["能量密度", "通常约 30–50 Wh/kg"], ["安全性", "技术成熟，但酸液和铅需要规范处理"], ["成本", "很低"], ["低温表现", "低温启动能力会下降"], ["寿命", "怕长期亏电和深度放电"]],
    sections: [
      ["基本概念", "铅酸电池使用铅、二氧化铅和硫酸电解液。它很重，但可以在短时间内输出很大的电流。"],
      ["工作原理", "放电时，正负极材料都会逐渐变成硫酸铅；充电时反应尽量反向恢复。反复亏电会导致硫化，容量下降。"],
      ["主要优点", "便宜、可靠、启动电流强，全球回收体系非常成熟。"],
      ["主要缺点", "重量大、能量密度低，不适合追求轻量和长续航的主动力电池。"],
      ["应用场景", "燃油车启动电源、UPS 后备电源、通信基站和一些低速车辆。"],
      ["普通人怎么理解", "铅酸电池像一个很重但很有力的启动器，不适合长跑，却很擅长瞬间发力。"],
      ["一句话总结", "铅酸电池不先进，但在低成本和大电流启动场景中仍然难以被完全替代。"]
    ]
  },
  {
    id: "nimh",
    category: "电池类型",
    title: "镍氢电池 NiMH",
    aliases: ["NiMH", "镍氢", "混动电池"],
    oneLine: "镍氢电池是一种耐用的可充电电池，抗滥用能力好，曾广泛用于混合动力汽车和可充电 AA/AAA 电池。",
    tags: ["耐用", "宽温区", "混动车"],
    metrics: [["能量密度", "通常高于铅酸、低于锂离子"], ["安全性", "抗滥用能力较好"], ["成本", "中等"], ["低温表现", "相对稳定"], ["寿命", "适合频繁浅充浅放"]],
    sections: [
      ["基本概念", "NiMH 指 Nickel-Metal Hydride，中文是镍氢电池。它使用含镍正极和储氢合金负极。"],
      ["工作原理", "充放电时，氢在合金材料中吸收和释放，同时电极发生可逆反应。"],
      ["主要优点", "耐用、宽温区、抗滥用能力强，适合混动车频繁小幅充放电。"],
      ["主要缺点", "比锂离子电池重，自放电更明显，能量密度不够高。"],
      ["应用场景", "早期和部分经典混合动力汽车、消费级充电电池、工业设备。"],
      ["普通人怎么理解", "镍氢像一位稳健的老队员，不一定跑得最快，但抗压、耐用、可靠。"],
      ["一句话总结", "镍氢电池在轻量化时代不再耀眼，但在可靠性和耐用性上仍有价值。"]
    ]
  },
  {
    id: "cathode",
    category: "电池结构",
    title: "正极材料",
    aliases: ["Cathode", "正极", "LFP", "NMC", "NCA", "LMO"],
    oneLine: "正极材料通常决定电池的电压、能量密度、安全边界和很多成本因素，是锂离子电池最关键的材料之一。",
    tags: ["核心材料", "决定电压", "成本关键"],
    sections: [
      ["基本概念", "在锂离子电池放电时，锂离子回到正极，电子也通过外部电路完成工作后进入正极。"],
      ["常见类型", "常见正极包括磷酸铁锂 LFP、三元材料 NCM/NCA、锰酸锂 LMO、钴酸锂 LCO 等。"],
      ["为什么重要", "正极通常影响能量密度、安全性、成本和循环寿命。不同正极路线适合不同应用。"],
      ["普通人怎么理解", "正极像电池的主要“能量仓库”。仓库结构不同，能装多少、稳不稳、贵不贵都会不同。"]
    ]
  },
  {
    id: "anode",
    category: "电池结构",
    title: "负极材料",
    aliases: ["Anode", "负极", "石墨", "硅负极", "锂金属"],
    oneLine: "负极材料在充电时接收锂离子，在放电时释放锂离子，常见材料是石墨，硅和锂金属是重要发展方向。",
    tags: ["石墨", "硅负极", "容量"],
    sections: [
      ["基本概念", "负极是锂离子充电时主要停留的位置。它需要能稳定接收和释放离子。"],
      ["核心材料", "商业锂离子电池最常用石墨负极。硅容量更高，但膨胀大；锂金属容量更高，但枝晶和安全挑战更强。"],
      ["主要挑战", "负极要在容量、体积变化、界面稳定、快充能力和安全性之间平衡。"],
      ["普通人怎么理解", "负极像停车位。停车位越多容量越高，但如果车进出时把地面撑裂，寿命就会下降。"]
    ]
  },
  {
    id: "electrolyte",
    category: "电池结构",
    title: "电解液 / 电解质",
    aliases: ["Electrolyte", "液态电解液", "电解质", "离子通道"],
    oneLine: "电解液负责让离子在正负极之间移动，但通常不让电子直接通过，因此它是电池内部离子交通系统。",
    tags: ["离子传导", "安全", "界面"],
    sections: [
      ["基本概念", "电解液通常由锂盐和有机溶剂组成。它让锂离子通过，但电子主要走外部电路。"],
      ["为什么重要", "电解液影响倍率、低温性能、寿命和安全。很多液态电解液可燃，因此需要严格安全设计。"],
      ["和固态电解质区别", "液态电解液像流动的道路，接触好、传导快；固态电解质更像固定隧道，可能更安全，但界面更难做好。"],
      ["普通人怎么理解", "它像电池内部给离子走的高速路。路越通畅，电池充放电越顺；路越不稳定，老化和安全问题越多。"]
    ]
  },
  {
    id: "separator",
    category: "电池结构",
    title: "隔膜",
    aliases: ["Separator", "电池隔膜", "多孔膜", "短路保护"],
    oneLine: "隔膜是一层很薄的多孔绝缘膜，阻止正负极直接接触短路，同时允许离子通过。",
    tags: ["绝缘", "安全", "多孔膜"],
    sections: [
      ["基本概念", "隔膜夹在正极和负极之间。它本身不储能，但对安全非常关键。"],
      ["为什么重要", "如果隔膜破损、收缩或被杂质刺穿，正负极可能直接接触，形成内部短路，严重时引发热失控。"],
      ["工程要求", "它需要足够薄、孔隙合适、耐热，并且在制造中保持极高洁净度。"],
      ["普通人怎么理解", "隔膜像两个房间之间带小孔的绝缘墙，离子可以穿过小孔，正负极却不能直接碰到一起。"]
    ]
  },
  {
    id: "current-collector",
    category: "电池结构",
    title: "集流体",
    aliases: ["Current collector", "铜箔", "铝箔", "极耳"],
    oneLine: "集流体是电池内部收集和传导电子的金属薄箔，常见组合是正极铝箔、负极铜箔。",
    tags: ["导电", "铜箔", "铝箔"],
    sections: [
      ["基本概念", "活性材料需要涂在金属薄箔上，电子通过这些薄箔被收集并传到外部电路。"],
      ["为什么重要", "集流体影响内阻、重量、成本和制造稳定性。钠离子电池部分路线可在负极使用铝箔，可能降低成本。"],
      ["普通人怎么理解", "集流体像电池内部的电流高速路和骨架，把分散产生的电子汇集起来。"]
    ]
  },
  {
    id: "bms",
    category: "电池结构",
    title: "电池管理系统 BMS",
    aliases: ["BMS", "Battery Management System", "电池管理", "均衡", "保护板"],
    oneLine: "BMS 是电池包的监测和保护系统，用来估算状态、控制充放电、监测温度电压，并在异常时保护电池。",
    tags: ["安全控制", "SOC", "SOH"],
    sections: [
      ["基本概念", "BMS 的英文是 Battery Management System，中文是电池管理系统。它不是电芯材料，而是电子硬件和软件控制系统。"],
      ["主要功能", "监测电压、电流、温度，估算 SOC 和 SOH，做电芯均衡，控制接触器，并在过压、过温、短路等风险下保护电池包。"],
      ["为什么重要", "同样的电芯，如果管理不好，寿命和安全都会变差。BMS 是把电芯安全变成系统安全的关键。"],
      ["普通人怎么理解", "BMS 像电池包的大脑和安全员，一边估算还剩多少电，一边判断能不能继续充电、放电或需要保护。"]
    ]
  },
  {
    id: "module",
    category: "电池结构",
    title: "模组",
    aliases: ["Module", "电池模组", "Cell module"],
    oneLine: "模组是把多个电芯进行电气和机械组合的中间层，便于装配、检测、结构固定和热管理。",
    tags: ["电芯组合", "结构", "热管理"],
    sections: [
      ["基本概念", "电芯数量很多时，工程上常先把一组电芯做成模组，再把多个模组装成电池包。"],
      ["主要作用", "模组帮助电芯固定、连接、采样、散热和维修，也能提高生产装配的标准化。"],
      ["发展变化", "一些新设计采用 Cell-to-Pack，减少传统模组层级，以提高空间利用率，但对结构和安全设计要求更高。"],
      ["普通人怎么理解", "电芯像书页，模组像把若干页装订成小册子，电池包再把多本小册子装成完整系统。"]
    ]
  },
  {
    id: "pack",
    category: "电池结构",
    title: "电池包",
    aliases: ["Pack", "Battery pack", "动力电池包", "CTP"],
    oneLine: "电池包是把电芯或模组、BMS、冷却系统、壳体、安全件和高压连接集成在一起的完整储能系统。",
    tags: ["系统工程", "热管理", "安全结构"],
    sections: [
      ["基本概念", "电池包不是一块单纯的大电池，而是电化学、电气、热、机械和软件共同组成的系统。"],
      ["核心组成", "通常包括电芯或模组、BMS、冷却板、壳体、保险丝、接触器、绝缘件、传感器和高压连接件。"],
      ["为什么重要", "电芯性能只有在电池包中被正确管理，才能变成整车可用的续航、功率和安全。"],
      ["普通人怎么理解", "电芯像发动机里的零件，电池包像完整动力系统。材料好只是开始，系统设计决定最终表现。"]
    ]
  },
  {
    id: "energy-density",
    category: "性能指标",
    title: "能量密度",
    aliases: ["Energy density", "Wh/kg", "Wh/L", "续航"],
    oneLine: "能量密度表示单位重量或单位体积能储存多少能量，常用 Wh/kg 或 Wh/L 表示。",
    tags: ["续航", "轻量化", "Wh/kg"],
    sections: [
      ["基本概念", "质量能量密度看每千克能储存多少电，体积能量密度看每升空间能储存多少电。"],
      ["为什么重要", "电动车续航、手机厚度、无人机飞行时间都与能量密度有关。"],
      ["局限", "能量密度高不代表一定最好。安全、成本、寿命、低温表现和快充能力也很重要。"],
      ["普通人怎么理解", "它像背包单位重量能装多少食物。装得多很有用，但背包也要结实、安全、耐用。"]
    ]
  },
  {
    id: "power-density",
    category: "性能指标",
    title: "功率密度",
    aliases: ["Power density", "倍率", "高功率", "瞬时输出"],
    oneLine: "功率密度表示电池能多快释放能量，关系到加速、快放电和瞬时大电流能力。",
    tags: ["输出能力", "加速", "倍率"],
    sections: [
      ["基本概念", "能量密度关心能装多少电，功率密度关心电能释放得有多快。"],
      ["为什么重要", "电动车加速、电动工具启动、混动车能量回收都需要较高功率密度。"],
      ["局限", "高功率输出会带来更多发热，因此需要电芯设计、导电路径和冷却系统配合。"],
      ["普通人怎么理解", "能量密度像油箱大小，功率密度像油门能瞬间给出多大力。"]
    ]
  },
  {
    id: "cycle-life",
    category: "性能指标",
    title: "循环寿命",
    aliases: ["Cycle life", "寿命", "充放电次数", "衰减"],
    oneLine: "循环寿命表示电池经过多少次充放电后，容量或性能下降到某个规定水平。",
    tags: ["寿命", "衰减", "耐用性"],
    sections: [
      ["基本概念", "一次完整充放电可以理解为一个循环，但实际使用中也会有很多浅充浅放。"],
      ["影响因素", "温度、充电速度、放电深度、SOC 区间、材料稳定性和制造一致性都会影响寿命。"],
      ["普通人怎么理解", "电池像鞋底，每次使用都会有磨损。温和使用、避免极端温度和长期满电/亏电，通常有助于延缓磨损。"]
    ]
  },
  {
    id: "thermal-runaway",
    category: "性能指标",
    title: "热失控",
    aliases: ["Thermal runaway", "起火", "过热", "热蔓延"],
    oneLine: "热失控是电池内部发热反应失去控制，温度持续上升并可能引发冒烟、起火或相邻电芯热蔓延的危险状态。",
    tags: ["安全", "过热", "热蔓延"],
    sections: [
      ["基本概念", "当电池受到内短路、过充、挤压、外部高温等影响时，内部副反应可能释放热量。如果热量来不及散掉，反应会进一步加速。"],
      ["为什么危险", "温度升高会破坏隔膜、电解液和电极界面，产生更多热量，形成连锁反应。"],
      ["如何降低风险", "材料稳定性、隔膜、保险丝、泄压设计、BMS、冷却系统和包级隔热都很重要。"],
      ["普通人怎么理解", "热失控像锅里的油温越高越容易继续升温，一旦超过安全边界，就不能只靠自然冷却解决。"]
    ]
  },
  {
    id: "fast-charging",
    category: "性能指标",
    title: "快充",
    aliases: ["Fast charging", "超充", "倍率充电", "锂析出"],
    oneLine: "快充是在较短时间内向电池输入较大功率，便利性高，但必须控制发热、锂析出和电芯老化风险。",
    tags: ["充电速度", "热管理", "锂析出"],
    sections: [
      ["基本概念", "快充不是简单把电流无限加大。电池能接受多快充电，取决于材料、温度、SOC、内阻和热管理。"],
      ["主要风险", "温度过低或充电过快时，锂可能在负极表面析出，降低寿命并增加安全风险。"],
      ["工程控制", "车辆通常会预热电池，并在不同 SOC 区间动态调整充电功率。"],
      ["普通人怎么理解", "快充像快速往海绵里倒水。海绵太冷、太满或倒得太猛，水就容易积在表面而不是均匀吸进去。"]
    ]
  },
  {
    id: "soc",
    category: "性能指标",
    title: "SOC 荷电状态",
    aliases: ["SOC", "State of Charge", "剩余电量", "电量百分比"],
    oneLine: "SOC 是 State of Charge 的缩写，表示电池当前还剩多少可用电量，通常用百分比显示。",
    tags: ["剩余电量", "BMS", "估算"],
    sections: [
      ["基本概念", "SOC 类似手机电量百分比，但它不是直接测出来的，而是 BMS 根据电压、电流、温度和模型估算出来的。"],
      ["为什么不简单", "电池电压和剩余电量并不总是线性关系，温度、老化和放电电流都会影响估算。"],
      ["普通人怎么理解", "SOC 像汽车油表，但电池的“油表”更难算，因为电池状态会随温度和老化变化。"]
    ]
  },
  {
    id: "soh",
    category: "性能指标",
    title: "SOH 健康状态",
    aliases: ["SOH", "State of Health", "电池健康", "容量衰减"],
    oneLine: "SOH 是 State of Health 的缩写，用来描述电池相对新电池还保留多少性能，常与容量衰减和内阻增加有关。",
    tags: ["电池健康", "老化", "衰减"],
    sections: [
      ["基本概念", "SOH 不是剩余电量，而是电池老化程度。一个 SOC 100% 的旧电池，实际容量可能已经低于新电池。"],
      ["影响因素", "高温、快充、长期满电、深度放电和循环次数都会影响 SOH。"],
      ["普通人怎么理解", "SOC 是今天水杯里还剩多少水，SOH 是这个水杯本身有没有变小、有没有漏。"]
    ]
  },
  {
    id: "low-temperature",
    category: "性能指标",
    title: "低温性能",
    aliases: ["Cold weather", "冬季续航", "低温衰减", "预热"],
    oneLine: "低温性能指电池在寒冷环境下充放电、续航和寿命表现，低温会让离子移动变慢并增加内阻。",
    tags: ["冬季续航", "热管理", "内阻"],
    sections: [
      ["基本概念", "温度降低时，离子在电解液和电极中的移动变慢，电池内阻上升，输出和充电能力下降。"],
      ["对电动车影响", "冬季续航下降不仅来自电池本身，还来自座舱加热、电池预热、轮胎和道路条件。"],
      ["改善方法", "热泵、电池预热、保温设计、低温电解液和更合适的材料体系都可能改善表现。"],
      ["普通人怎么理解", "低温下电池像人在寒冷天气跑步，动作会变慢，还需要额外能量让身体热起来。"]
    ]
  },
  {
    id: "safety",
    category: "性能指标",
    title: "安全性",
    aliases: ["Safety", "电池安全", "过充", "短路", "针刺"],
    oneLine: "电池安全性不是单一指标，而是材料、结构、BMS、热管理、制造质量和使用场景共同决定的系统结果。",
    tags: ["系统安全", "BMS", "热管理"],
    sections: [
      ["基本概念", "安全性包括防止过充、过放、短路、过热、机械损伤、热失控和热蔓延。"],
      ["为什么是系统问题", "材料更稳定很重要，但如果制造有杂质、BMS 判断错误或散热不足，仍可能出现风险。"],
      ["普通人怎么理解", "电池安全像汽车安全，不是只靠一个零件，而是材料、结构、传感器、控制软件和使用习惯一起工作。"]
    ]
  },
  {
    id: "thermal-management",
    category: "性能指标",
    title: "热管理",
    aliases: ["Thermal Management", "冷却", "加热", "热泵", "液冷"],
    oneLine: "热管理负责让电池保持在合适温度范围内，避免过冷、过热和电芯之间温差过大。",
    tags: ["冷却", "加热", "寿命"],
    sections: [
      ["基本概念", "电池工作时会产热，寒冷时也需要加热。热管理系统通过风冷、液冷、热泵和控制策略调节温度。"],
      ["为什么重要", "温度影响续航、快充、寿命和安全。电池包内部温差过大还会导致不同电芯老化不一致。"],
      ["普通人怎么理解", "热管理像电池的空调系统，让它不要太冷也不要太热。"]
    ]
  },
  {
    id: "lithium",
    category: "材料",
    title: "锂 Lithium",
    aliases: ["Lithium", "Li", "锂资源", "锂盐"],
    oneLine: "锂是一种轻且电化学活性高的元素，因此非常适合高能量密度可充电电池，但资源、开采和价格波动也需要关注。",
    tags: ["元素", "锂离子", "资源"],
    sections: [["作用", "锂离子在正负极之间往返移动，是锂离子电池储能的核心载体。"], ["挑战", "锂资源分布、开采环境影响和价格波动会影响产业稳定。"], ["普通人怎么理解", "锂像电池里负责搬运能量的小载体，轻而高效，但供应链并不是无限简单。"]]
  },
  {
    id: "sodium",
    category: "材料",
    title: "钠 Sodium",
    aliases: ["Sodium", "Na", "钠资源"],
    oneLine: "钠资源丰富且分布广，适合发展钠离子电池，但钠离子更大，材料设计难度也不同。",
    tags: ["元素", "钠离子", "资源丰富"],
    sections: [["作用", "在钠离子电池中，钠离子负责在正负极之间迁移。"], ["优势", "资源更丰富、供应分布更广，有潜在成本优势。"], ["挑战", "钠离子尺寸更大，往往带来较低能量密度和新的材料设计问题。"]]
  },
  {
    id: "graphite",
    category: "材料",
    title: "石墨 Graphite",
    aliases: ["Graphite", "石墨负极", "负极"],
    oneLine: "石墨是当前最成熟、最常见的锂离子电池负极材料，稳定可靠，但理论容量有限。",
    tags: ["负极", "成熟材料", "锂离子"],
    sections: [["作用", "充电时，锂离子嵌入石墨层状结构；放电时再离开。"], ["优势", "成熟、稳定、效率高，供应链完善。"], ["挑战", "理论容量低于硅负极，快充时还要控制锂析出风险。"]]
  },
  {
    id: "silicon",
    category: "材料",
    title: "硅 Silicon",
    aliases: ["Silicon", "硅负极", "硅碳负极"],
    oneLine: "硅负极理论容量很高，能提高电池能量密度，但充放电时体积变化很大，容易造成结构和界面损伤。",
    tags: ["负极", "高容量", "体积膨胀"],
    sections: [["作用", "硅可以储存大量锂，因此常作为石墨负极的添加材料。"], ["优势", "理论容量远高于石墨，有助于提高能量密度。"], ["挑战", "膨胀收缩明显，容易导致颗粒破裂、界面反复生成和寿命下降。"]]
  },
  {
    id: "lfp-material",
    category: "材料",
    title: "LFP 正极材料",
    aliases: ["磷酸铁锂材料", "LiFePO4", "LFP cathode"],
    oneLine: "LFP 正极材料结构稳定、成本较低、安全性好，是磷酸铁锂电池的核心。",
    tags: ["正极", "磷酸铁锂", "安全"],
    sections: [["作用", "作为正极材料，参与锂离子的嵌入和脱出。"], ["优势", "P-O 键稳定，不依赖镍钴，寿命和安全性通常较好。"], ["挑战", "电压和能量密度低于高镍层状正极。"]]
  },
  {
    id: "nmc-material",
    category: "材料",
    title: "NMC 正极材料",
    aliases: ["三元材料", "镍钴锰", "NMC cathode"],
    oneLine: "NMC 正极材料通过镍、钴、锰配比平衡能量密度、结构稳定和安全性，是三元锂电池的重要路线。",
    tags: ["正极", "三元锂", "高能量"],
    sections: [["作用", "提供较高电压和容量，是三元锂电池能量密度的重要来源。"], ["优势", "配方可调，能量密度较高。"], ["挑战", "成本、湿度敏感性、热稳定性和供应链问题需要管理。"]]
  },
  {
    id: "solid-electrolyte",
    category: "材料",
    title: "固态电解质",
    aliases: ["Solid electrolyte", "硫化物", "氧化物", "聚合物"],
    oneLine: "固态电解质希望用固体材料传导离子，减少液态易燃成分并支持新型负极，但界面和制造仍是难点。",
    tags: ["固态电池", "离子传导", "界面"],
    sections: [["作用", "替代液态电解液，在固态电池中为离子提供通道。"], ["优势", "有潜力提高安全性，并支持锂金属等高容量负极。"], ["挑战", "固-固界面接触、脆性、湿敏性、压力控制和量产成本仍很难。"]]
  }
];

const knowledgeById = new Map(knowledgeEntries.map((entry) => [entry.id, entry]));

Object.assign(zhTranslations, {
  "A student-built learning project exploring battery technologies, electric vehicles, and the materials behind future energy storage.": "一个由学生搭建的学习项目，探索电池技术、电动汽车，以及未来储能背后的材料。",
  "EXPLORE BATTERIES": "探索电池",
  "START LEARNING": "开始学习",
  "LEARNING PATH": "学习路径",
  "WHAT THIS WEBSITE": "这个网站",
  "HELPS YOU UNDERSTAND": "帮助你理解什么",
  "BATTERY BASICS": "电池基础",
  "Understand voltage, capacity, energy density, and cycle life.": "理解电压、容量、能量密度和循环寿命。",
  "Compare lead-acid, NiMH, LFP, NMC lithium-ion, sodium-ion, and solid-state batteries.": "比较铅酸、镍氢、磷酸铁锂、三元锂、钠离子和固态电池。",
  "Learn how battery packs, thermal management, and range estimation work.": "了解电池包、热管理和续航估算如何工作。",
  "MATERIALS SCIENCE": "材料科学",
  "Explore cathodes, anodes, electrolytes, separators, and future battery materials.": "探索正极、负极、电解质、隔膜和未来电池材料。",
  "KEY TAKEAWAY": "核心结论",
  "Energy density matters for range, but safety, cost, cycle life, and temperature performance can be just as important.": "能量密度影响续航，但安全、成本、循环寿命和温度性能同样重要。",
  "No battery type is best at everything. Engineers choose a chemistry for a specific application by balancing range, cost, safety, cycle life, charging speed, and temperature performance.": "没有一种电池能在所有方面做到最好。工程师会根据具体应用，在续航、成本、安全、寿命、充电速度和温度性能之间进行权衡。",
  "Estimate how much electrical energy a battery can store from its voltage and amp-hour capacity.": "根据电压和安时容量，估算电池能够储存多少电能。",
  "FORMULA": "公式",
  "Energy (Wh) = Voltage (V) × Capacity (Ah)": "能量 (Wh) = 电压 (V) × 容量 (Ah)",
  "EXAMPLE": "示例",
  "A 12 V, 60 Ah battery stores about 720 Wh in this simplified model.": "在这个简化模型中，12 V、60 Ah 的电池约储存 720 Wh 能量。",
  "Estimate driving range from usable battery energy and average vehicle consumption.": "根据可用电池能量和车辆平均能耗估算续航。",
  "Range (km) = Battery Size (kWh) × 1000 ÷ Consumption (Wh/km)": "续航 (km) = 电池容量 (kWh) × 1000 ÷ 能耗 (Wh/km)",
  "A 60 kWh pack at 170 Wh/km gives about 353 km before temperature adjustment.": "60 kWh 电池包在 170 Wh/km 能耗下，温度修正前约可行驶 353 km。",
  "A battery pack is not simply one very large battery. It is a coordinated system that manages electricity, heat, safety, structure, and communication with the vehicle.": "电池包并不只是一块很大的电池，而是一个协调管理电能、热量、安全、结构和整车通信的系统。",
  "A battery pack is a complete engineering system, not just a collection of cells.": "电池包是一套完整的工程系统，而不只是电芯的集合。",
  "Battery performance begins with materials, but every improvement creates a new question about cost, manufacturing, safety, or durability.": "电池性能始于材料，但每项改进也会带来关于成本、制造、安全或耐久性的新问题。",
  "QUESTION": "问题",
  "Could sodium-ion batteries become important even if they have lower energy density?": "即使能量密度较低，钠离子电池仍可能变得重要吗？",
  "Why do EVs lose range in cold weather?": "为什么电动车在寒冷天气中会损失续航？",
  "Can heat from the battery pack or power electronics be reused in winter?": "冬季能否重新利用电池包或功率电子产生的热量？",
  "Sodium-ion batteries may be valuable because engineering is often about choosing the right material for the right job.": "钠离子电池可能很有价值，因为工程往往是在为具体任务选择合适的材料。",
  "TAKEAWAY": "一句话结论",
  "WHAT IT IS": "它是什么",
  "STRENGTHS": "优势",
  "MAIN TRADE-OFF": "主要取舍",
  "BEST FOR": "适合场景",
  "WHY IT MATTERED": "为什么重要",
  "ROLE IN BATTERY": "在电池中的作用",
  "WHY IT MATTERS": "为什么重要",
  "Battery Management System": "电池管理系统",
  "Monitors voltage, current, and temperature; estimates battery state; and protects the pack when conditions become unsafe.": "监测电压、电流与温度，估算电池状态，并在条件不安全时保护电池包。",
  "Thermal Management": "热管理系统",
  "Moves heat away from cells and keeps temperature differences small so the pack can perform consistently and age more evenly.": "把热量从电芯带走，并缩小温差，使电池包性能更一致、老化更均匀。",
  "Safety Structure": "安全结构",
  "Uses the enclosure, insulation, fuses, contactors, and crash protection to reduce electrical, thermal, and mechanical risks.": "通过壳体、绝缘、保险丝、接触器和碰撞防护，降低电气、热与机械风险。",
  "A mature rechargeable chemistry known for low cost and strong short bursts of current.": "一种成熟的可充电化学体系，以低成本和强大的瞬时放电能力著称。",
  "Low cost, reliable high-current output, and a well-established recycling system.": "成本低、大电流输出可靠，并且拥有成熟的回收体系。",
  "Heavy and relatively low in energy density; deep discharge can shorten its life.": "重量大、能量密度较低，深度放电会缩短寿命。",
  "Vehicle starter batteries, UPS systems, backup power.": "汽车启动电池、UPS 不间断电源和备用电源。",
  "Lead-acid is heavy, but it remains useful when low cost and high starting current matter most.": "铅酸电池虽然很重，但在低成本和高启动电流最重要的场景中仍很实用。",
  "A durable rechargeable chemistry that remains useful where temperature tolerance and robustness matter.": "一种耐用的可充电体系，适合重视温度适应性和耐用性的场景。",
  "Good abuse tolerance, wide operating temperature range, and proven reliability.": "抗滥用能力好、工作温区宽，可靠性经过长期验证。",
  "Heavier and more prone to self-discharge than modern lithium-ion cells.": "比现代锂离子电池更重，自放电也更明显。",
  "Hybrid vehicles, consumer rechargeable cells, industrial equipment.": "混合动力汽车、消费级充电电池和工业设备。",
  "NiMH is not the lightest option, but it is robust and dependable across demanding conditions.": "镍氢电池并不轻，但在严苛条件下依然坚固可靠。",
  "A lithium-ion chemistry built around a stable phosphate cathode and long cycle life.": "一种以稳定磷酸盐正极为基础、循环寿命较长的锂离子体系。",
  "Strong thermal stability, long service life, and lower reliance on nickel and cobalt.": "热稳定性强、寿命长，对镍和钴的依赖较低。",
  "Lower volumetric energy density and weaker cold-weather charging than high-nickel cells.": "体积能量密度较低，低温充电能力弱于高镍体系。",
  "EVs, buses, stationary storage, power tools.": "电动汽车、公交车、固定式储能和电动工具。",
  "LFP is not the lightest lithium-ion battery, but it is safe, durable, and cost-effective.": "磷酸铁锂不是最轻的锂电池，但它安全、耐用且经济。",
  "A layered cathode chemistry that balances nickel, manganese, and cobalt for high specific energy.": "一种层状正极体系，通过镍、锰、钴的配合获得较高比能量。",
  "High energy density supports longer range with less battery mass.": "较高能量密度能以更小电池质量支持更长续航。",
  "Requires careful manufacturing, battery management, and thermal protection.": "对制造、电池管理和热保护要求较高。",
  "Long-range EVs, laptops, drones, portable electronics.": "长续航电动车、笔记本电脑、无人机和便携电子设备。",
  "NMC is valuable when range and low mass matter, but it needs careful thermal and safety control.": "三元锂适合重视续航和轻量化的场景，但需要精细的热管理与安全控制。",
  "A developing rechargeable system that replaces lithium ions with more abundant sodium ions.": "一种仍在发展的可充电体系，用储量更丰富的钠离子替代锂离子。",
  "Potentially lower material cost, diversified supply, and useful low-temperature behavior.": "材料成本可能更低，供应来源更分散，并具有较好的低温表现。",
  "Current cells usually store less energy per kilogram than leading lithium-ion designs.": "现阶段每千克储能通常低于领先的锂离子方案。",
  "Entry-level EVs, two-wheelers, stationary storage.": "入门级电动车、电动两轮车和固定式储能。",
  "Sodium-ion trades some energy density for abundant materials, supply diversity, and potential cost advantages.": "钠离子电池牺牲部分能量密度，换取材料丰富、供应多元和潜在成本优势。",
  "A family of developing batteries that uses a solid electrolyte instead of a conventional liquid one.": "一类使用固态电解质替代传统液态电解质、仍在发展的电池。",
  "Could support lithium-metal anodes and improve the safety and energy ceiling.": "有望支持锂金属负极，并提高安全与能量上限。",
  "Interface resistance, dendrites, pressure control, cost, and manufacturing yield remain difficult.": "界面阻抗、枝晶、压力控制、成本和制造良率仍然困难。",
  "Future EVs, aviation, premium electronics; still developing.": "未来电动车、航空和高端电子产品；目前仍在发展。",
  "Solid-state batteries have high potential, but manufacturing reliable interfaces at scale remains the real test.": "固态电池潜力很高，但能否规模化制造可靠界面才是真正考验。",
  "Alessandro Volta stacked metal discs and electrolyte-soaked material to produce a continuous current.": "亚历山德罗·伏打把金属圆片与浸有电解液的材料堆叠，首次产生持续电流。",
  "Gaston Planté developed the first practical rechargeable battery, a chemistry still used today.": "加斯东·普兰特发明了第一种实用可充电电池，这一体系至今仍在使用。",
  "Rechargeable nickel-cadmium improved durability and power, although cadmium created environmental concerns.": "可充电镍镉电池改善了耐用性和功率，但镉带来了环境问题。",
  "Commercial lithium-ion cells made portable electronics lighter and helped establish modern rechargeable devices.": "商用锂离子电池让便携电子产品更轻，并奠定了现代充电设备的基础。",
  "Large-scale manufacturing, improved cells, and better battery management accelerated electric vehicles.": "规模化制造、电芯改进和更好的电池管理推动了电动车发展。",
  "Sodium-ion moved from laboratories toward early commercial production for cost-sensitive applications.": "钠离子电池从实验室走向早期商业生产，面向成本敏感型应用。",
  "Several companies are targeting solid-state commercialization, but timing depends on engineering and manufacturing progress.": "多家公司正在推进固态电池商业化，但时间取决于工程和制造进展。",
  "LEVEL 01 / ELECTROCHEMISTRY": "层级 01 / 电化学",
  "LEVEL 02 / INTEGRATION": "层级 02 / 集成",
  "LEVEL 03 / VEHICLE SYSTEM": "层级 03 / 整车系统",
  "Cell": "电芯",
  "Module": "模组",
  "Pack": "电池包",
  "A cell is one electrochemical unit. Its cathode, anode, electrolyte, and separator determine voltage, energy, power, aging, and many safety limits.": "电芯是一个独立的电化学单元。正极、负极、电解质和隔膜决定电压、能量、功率、老化和许多安全边界。",
  "A module connects multiple cells electrically and mechanically. It simplifies assembly, sensing, service, and structural support, although some modern packs use cell-to-pack designs without traditional modules.": "模组把多个电芯进行电气和机械连接，便于装配、传感、维护和结构支撑；一些现代电池包则采用无传统模组的 Cell-to-Pack 设计。",
  "A pack combines cells or modules with a battery management system, cooling circuit, enclosure, contactors, fuses, insulation, and crash protection. System design can matter as much as cell chemistry.": "电池包把电芯或模组与 BMS、冷却回路、壳体、接触器、保险丝、绝缘和碰撞防护结合起来。系统设计与电芯化学同样重要。",
  "Contains": "包含",
  "Measured by": "常用指标",
  "Key concern": "关键问题",
  "Purpose": "作用",
  "Connects to": "连接对象",
  "Electrodes, electrolyte, separator": "电极、电解质、隔膜",
  "Voltage, capacity, resistance": "电压、容量、内阻",
  "Heat generation and consistency": "产热与一致性",
  "Cells, busbars, sensors, frame": "电芯、汇流排、传感器、框架",
  "Electrical and mechanical grouping": "电气与机械分组",
  "Cell matching and heat spreading": "电芯匹配与热扩散",
  "BMS, cooling, structure, safety": "BMS、冷却、结构、安全",
  "Motor, charger, vehicle controls": "电机、充电器、整车控制",
  "Thermal propagation and reliability": "热蔓延与可靠性",
  "A charge-carrying element used across many rechargeable battery chemistries.": "多种可充电电池体系使用的载流元素。",
  "High electrochemical potential and low atomic mass.": "电化学电势高，原子质量低。",
  "Supply concentration, extraction impacts, and price volatility.": "供应集中、开采影响和价格波动。",
  "A charge carrier in sodium-ion batteries.": "钠离子电池中的电荷载体。",
  "Abundant and widely distributed resources.": "资源丰富且分布广泛。",
  "Larger ion size can reduce energy density and changes material choices.": "离子尺寸较大，可能降低能量密度并改变材料选择。",
  "The most common commercial anode material in lithium-ion batteries.": "锂离子电池中最常见的商业负极材料。",
  "Stable, mature, efficient, and supported by large supply chains.": "稳定、成熟、高效，并有大规模供应链支持。",
  "Limited theoretical capacity compared with silicon-rich anodes.": "理论容量低于富硅负极。",
  "An anode material often blended with graphite to increase capacity.": "一种常与石墨混合以提高容量的负极材料。",
  "Very high theoretical lithium-storage capacity.": "理论储锂容量非常高。",
  "Large volume change during cycling can damage particles and interfaces.": "循环中的巨大体积变化会损伤颗粒和界面。",
  "What does Wh measure?": "Wh 衡量什么？",
  "Which battery family is commonly used in modern EV traction packs?": "现代电动车动力电池包通常使用哪类电池？",
  "Why can cold weather reduce EV range?": "为什么寒冷天气会降低电动车续航？",
  "What is a main role of the electrolyte?": "电解质的主要作用是什么？",
  "What does BMS stand for?": "BMS 的全称是什么？",
  "Battery Management System": "电池管理系统",
  "Stored or delivered energy": "储存或释放的能量",
  "Lithium-ion": "锂离子电池",
  "Ion movement slows and heating uses energy": "离子移动变慢，同时加热会消耗能量",
  "Carry ions between electrodes": "在电极之间传递离子",
  "Anode": "负极",
  "Cathode": "正极",
  "Electrolyte": "电解质",
  "Separator": "隔膜",
  "Power Density": "功率密度",
  "Thermal Management": "热管理",
  "Fast Charging": "快速充电",
  "Solid-state Battery": "固态电池",
  "Sodium-ion Battery": "钠离子电池",
  "A watt-hour is a unit of energy. It combines power in watts with time in hours.": "瓦时是能量单位，它把以瓦表示的功率与以小时表示的时间结合起来。",
  "Most current EVs use lithium-ion families such as LFP or nickel-rich layered oxide chemistries.": "目前大多数电动车使用锂离子体系，例如磷酸铁锂或高镍层状氧化物。",
  "Cold raises internal resistance and slows reaction kinetics, while cabin and battery heating also consume energy.": "低温会提高内阻并减慢反应动力学，同时座舱和电池加热也会消耗能量。",
  "The electrolyte allows ions to move internally while electrons travel through the external circuit.": "电解质让离子在电池内部移动，而电子通过外部电路流动。",
  "A Battery Management System monitors and controls conditions such as voltage, current, temperature, and state estimation.": "电池管理系统监测并控制电压、电流、温度和状态估算等条件。",
  "Sodium-ion batteries may not completely replace lithium-ion batteries, and I do not think replacement is the most useful way to frame the question. Sodium is more abundant and could be valuable where low cost, supply stability, and cold-weather behavior matter more than maximum range.": "钠离子电池可能不会完全取代锂离子电池，我也认为“谁取代谁”并不是最有价值的提问方式。钠资源更丰富，在低成本、供应稳定和低温表现比极限续航更重要的场景中，它可能很有价值。",
  "For stationary storage or smaller vehicles, accepting lower energy density may be reasonable if the overall system becomes cheaper and easier to scale. This helped me understand that engineering is often about matching a material to a job rather than finding one universal “best” material.": "对于固定式储能或小型车辆，如果整个系统因此更便宜、更容易规模化，接受较低能量密度可能是合理的。这让我理解，工程往往是在为任务匹配材料，而不是寻找一种万能的“最佳”材料。",
  "Cold weather affects more than passenger comfort. Ion movement becomes slower, internal resistance rises, and the battery may need energy to warm itself before it can charge or deliver power efficiently.": "寒冷天气影响的不只是乘客舒适度。离子移动变慢、内阻升高，电池在高效充电或输出功率之前，还可能需要消耗能量为自己加热。",
  "At the same time, cabin heating draws energy from the same pack. This is why winter range is a materials problem and a thermal-management problem. Better insulation, heat pumps, battery preconditioning, and cell chemistry all contribute to the result.": "与此同时，座舱供暖也从同一块电池包取能。因此冬季续航既是材料问题，也是热管理问题。更好的保温、热泵、电池预热和电芯化学都会影响最终结果。",
  "I previously wondered whether heat produced by the battery pack could become part of the cabin heating system in winter. The idea is attractive because an EV already spends valuable energy creating heat.": "我之前思考过，电池包产生的热量能否在冬季成为座舱供暖的一部分。这个想法很有吸引力，因为电动车本来就要花费宝贵电能来制造热量。",
  "However, useful heat is not always available at the right temperature or time. A practical system would need to combine battery heat, power-electronics heat, a heat pump, coolant routing, and careful controls. Recovering some heat may reduce waste, but battery safety and lifetime must remain the first priority.": "但可利用的热量并不总是在合适的温度和时间出现。实际系统需要结合电池热量、功率电子热量、热泵、冷却液回路和精确控制。回收部分热量可能减少浪费，但电池安全与寿命必须始终优先。",
  "A possible direction may be to treat the whole vehicle as one thermal system, not as separate components.": "一个可能的方向，是把整辆车看作一个统一的热系统，而不是彼此分离的部件。",
  "I am a high school student interested in Materials Science & Engineering and new-energy batteries. I built this website because batteries are not only electronic components; they combine chemistry, physics, engineering, safety design, and environmental thinking.": "我是一名对材料科学与工程和新能源电池感兴趣的高中生。我建立这个网站，是因为电池不只是电子元件，它同时结合了化学、物理、工程、安全设计和环境思考。",
  "Building the calculators and comparison tools helped me move beyond collecting facts. I had to decide which assumptions were simplified, how temperature changes a system, and why the “best” material depends on its application.": "制作计算器和比较工具，让我不再只是收集事实。我需要判断哪些假设经过了简化、温度如何改变系统，以及为什么“最好”的材料取决于具体应用。",
  "I hope to keep studying safer, more affordable, and more stable energy-storage materials. This website is one record of that learning process.": "我希望继续学习更安全、更经济、更稳定的储能材料。这个网站记录了我的一部分学习过程。"
});

Object.assign(zhTranslations, {
  "Search NCM, LFP, SOC, electrolyte, separator…": "搜索三元锂、LFP、SOC、电解液、隔膜…",
  "Try graphite, cathode, lithium…": "试试搜索石墨、正极、锂…",
  "Search BMS, anode, cycle life…": "搜索 BMS、负极、循环寿命…",
  "Find a term": "查找术语",
  "Search knowledge entries": "搜索知识词条",
  "Battery Knowledge Hub": "电池知识库",
  "No entry found.": "没有找到相关词条。",
  "Electrical resistance": "电阻",
  "Charging speed only": "仅充电速度",
  "Battery temperature": "电池温度",
  "Zinc-carbon": "碳性锌锰电池",
  "Silver oxide": "氧化银电池",
  "Primary alkaline": "一次碱性电池",
  "The wheels become smaller": "车轮会变小",
  "Electrons stop existing": "电子会消失",
  "The pack gains mass": "电池包质量会增加",
  "Hold the vehicle body together": "支撑车身结构",
  "Measure tire pressure": "测量胎压",
  "Create mechanical braking": "产生机械制动",
  "Battery Material Standard": "电池材料标准",
  "Balanced Motor Supply": "平衡电机供电",
  "Basic Module Structure": "基础模组结构",
  "A phosphate cathode used in lithium iron phosphate cells.": "磷酸铁锂电池使用的磷酸盐正极材料。",
  "Strong thermal stability, long life, and relatively low material cost.": "热稳定性强、寿命长，材料成本相对较低。",
  "Lower voltage and energy density than high-nickel layered cathodes.": "电压和能量密度低于高镍层状正极。",
  "A layered oxide cathode containing nickel, manganese, and cobalt.": "一种包含镍、锰、钴的层状氧化物正极材料。",
  "High energy density with adjustable composition.": "能量密度高，配方比例可调。",
  "Cost, sourcing, moisture sensitivity, and thermal-management demands.": "成本、资源供应、湿度敏感性和热管理要求较高。",
  "A conductive salt solution that transports ions between electrodes.": "一种在电极之间传输离子的导电盐溶液。",
  "High ionic conductivity and mature manufacturing.": "离子电导率高，制造工艺成熟。",
  "Usually flammable and sensitive to voltage and temperature extremes.": "通常具有可燃性，并对极端电压和温度敏感。",
  "A porous membrane that prevents direct electrode contact while allowing ion flow.": "一种多孔膜，阻止电极直接接触，同时允许离子通过。",
  "Thin, light, and essential for electrical isolation.": "薄而轻，是电气隔离的关键部件。",
  "Shrinkage, puncture, or contamination can create internal short circuits.": "收缩、刺穿或污染都可能造成内部短路。",
  "A solid ceramic, sulfide, or polymer designed to conduct ions.": "一种用于传导离子的固态陶瓷、硫化物或聚合物材料。",
  "May reduce flammable liquid content and support new anode designs.": "可能减少可燃液体成分，并支持新的负极设计。",
  "Interfaces, brittleness, pressure, moisture sensitivity, and scale-up.": "界面、脆性、压力、湿敏性和规模化制造都是挑战。",
  "The electrode where oxidation occurs. In a discharging lithium-ion cell, it releases lithium ions and electrons.": "发生氧化反应的电极。在锂离子电池放电时，负极释放锂离子和电子。",
  "The electrode where reduction occurs during discharge. Cathode chemistry strongly influences voltage and energy.": "放电时发生还原反应的电极。正极化学体系会强烈影响电压和能量。",
  "The ion-conducting material between electrodes. It may be liquid, gel, polymer, ceramic, or sulfide.": "电极之间传导离子的材料，可以是液体、凝胶、聚合物、陶瓷或硫化物。",
  "A porous electrical insulator that keeps electrodes apart while allowing ions to move.": "一种多孔电绝缘材料，让电极保持隔离，同时允许离子移动。",
  "How much energy a battery stores relative to mass or volume, often measured in Wh/kg or Wh/L.": "电池相对于质量或体积能储存多少能量，常用 Wh/kg 或 Wh/L 表示。",
  "How quickly a battery can deliver energy relative to its mass or volume.": "电池相对于质量或体积能够多快释放能量。",
  "The number of charge-discharge cycles before capacity or performance reaches a defined limit.": "在容量或性能下降到规定界限前，电池可经历的充放电次数。",
  "Hardware and control strategies used to keep cells within a suitable temperature range.": "让电芯保持在合适温度范围内的硬件和控制策略。",
  "Battery Management System: electronics and software that monitor, estimate, protect, and control a pack.": "电池管理系统：用于监测、估算、保护和控制电池包的电子硬件与软件。",
  "State of Charge: an estimate of how much usable charge remains, usually expressed as a percentage.": "荷电状态：估算还剩多少可用电量，通常用百分比表示。",
  "State of Health: an estimate of aging compared with a new battery's performance.": "健康状态：相对于新电池性能的老化程度估算。",
  "Charging at high power. It can save time but requires careful control of heat and lithium plating risk.": "以较高功率充电。它能节省时间，但需要仔细控制发热和锂析出风险。",
  "A battery family using a solid electrolyte. Designs and performance vary widely.": "一类使用固态电解质的电池，不同路线的设计和性能差异很大。",
  "A rechargeable battery that moves sodium ions instead of lithium ions between electrodes.": "一种在电极之间移动钠离子而不是锂离子的可充电电池。"
});

const typeList = document.getElementById("type-list");
const selectors = document.getElementById("battery-selectors");
const materialsGrid = document.getElementById("materials-grid");
const glossaryGrid = document.getElementById("glossary-grid");
let radarChart;
let barChart;

function normalizeSearch(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, "");
}

function knowledgeSearchText(entry) {
  return normalizeSearch([
    entry.title,
    entry.category,
    entry.oneLine,
    ...(entry.aliases || []),
    ...(entry.tags || []),
    ...(entry.sections || []).flat()
  ].join(" "));
}

function renderKnowledgeResults() {
  const input = document.getElementById("knowledge-search");
  const results = document.getElementById("knowledge-results");
  if (!input || !results) return;
  const query = normalizeSearch(input.value);
  const filtered = knowledgeEntries
    .map((entry, index) => {
      const title = normalizeSearch(entry.title);
      const aliases = (entry.aliases || []).map(normalizeSearch);
      let score = 0;
      if (query && title === query) score += 80;
      if (query && aliases.includes(query)) score += 70;
      if (query && title.includes(query)) score += 45;
      if (query && aliases.some((alias) => alias.includes(query))) score += 35;
      if (query && entry.category.includes(input.value.trim())) score += 10;
      return { entry, index, score };
    })
    .filter(({ entry }) => !query || knowledgeSearchText(entry).includes(query))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ entry }) => entry)
    .slice(0, query ? 12 : 8);

  results.innerHTML = filtered.map((entry) => `
    <button class="knowledge-result" type="button" data-knowledge-id="${entry.id}">
      <span>${entry.category}</span>
      <strong>${entry.title}</strong>
      <small>${entry.oneLine}</small>
    </button>
  `).join("") || `<p class="empty-state">没有找到相关词条。</p>`;
}

function openKnowledgeEntry(id) {
  const entry = knowledgeById.get(id);
  if (!entry) return;
  const modal = document.getElementById("knowledge-modal");
  document.getElementById("knowledge-category").textContent = entry.category;
  document.getElementById("knowledge-title").textContent = entry.title;
  document.getElementById("knowledge-one-line").textContent = entry.oneLine;
  document.getElementById("knowledge-tags").innerHTML = (entry.tags || []).map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("knowledge-metrics").innerHTML = (entry.metrics || []).map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.getElementById("knowledge-body").innerHTML = (entry.sections || []).map(([heading, body]) => `
    <section class="knowledge-block">
      <h3>${heading}</h3>
      <p>${body}</p>
    </section>
  `).join("");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".knowledge-close").focus({ preventScroll: true });
}

function closeKnowledgeEntry() {
  const modal = document.getElementById("knowledge-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function setupKnowledgeBase() {
  renderKnowledgeResults();
  document.getElementById("knowledge-search")?.addEventListener("input", renderKnowledgeResults);
  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-knowledge-id]");
    if (opener) {
      event.preventDefault();
      openKnowledgeEntry(opener.dataset.knowledgeId);
    }
    if (event.target.closest("[data-close-knowledge]")) closeKnowledgeEntry();
  });
  document.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest(".glossary-card[data-knowledge-id]")) {
      event.preventDefault();
      openKnowledgeEntry(event.target.closest(".glossary-card").dataset.knowledgeId);
      return;
    }
    if (event.key === "Escape") closeKnowledgeEntry();
  });
}

function renderBatteryTypes() {
  typeList.innerHTML = batteryTypes.map((battery, index) => `
    <article class="type-card reveal" data-type="${battery.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${battery.name}</h3>
      <div class="type-summary"><small>WHAT IT IS</small><p>${battery.description}</p></div>
      <div class="type-density"><strong>${battery.density}</strong><p>Approximate typical range</p></div>
      <button class="type-toggle" type="button" aria-expanded="false" aria-label="Show details for ${battery.name}"></button>
      <div class="type-details">
        <div><small>STRENGTHS</small><p>${battery.advantage}</p></div>
        <div><small>MAIN TRADE-OFF</small><p>${battery.limitation}</p></div>
        <div><small>BEST FOR</small><p>${battery.applications}</p></div>
        <div class="type-takeaway"><small>TAKEAWAY</small><p>${battery.takeaway}</p></div>
        <button class="inline-more" type="button" data-knowledge-id="${battery.knowledgeId}">了解更多</button>
      </div>
    </article>
  `).join("");

  typeList.querySelectorAll(".type-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      const knowledgeButton = event.target.closest("[data-knowledge-id]");
      if (knowledgeButton) {
        event.stopPropagation();
        openKnowledgeEntry(knowledgeButton.dataset.knowledgeId);
        return;
      }
      if (event.target.closest("a")) return;
      const open = card.classList.toggle("open");
      card.querySelector(".type-toggle").setAttribute("aria-expanded", String(open));
    });
  });
}

function renderSelectors() {
  const defaults = new Set(["lfp", "nmc", "sodium"]);
  selectors.innerHTML = Object.entries(comparisonData).map(([id, item], index) => `
    <label class="selector-item">
      <input type="checkbox" value="${id}" ${defaults.has(id) ? "checked" : ""}>
      <span class="selector-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="selector-name">${item.label}</span>
      <span class="selector-box" aria-hidden="true"></span>
    </label>
  `).join("");
  selectors.addEventListener("change", (event) => {
    const checked = [...selectors.querySelectorAll("input:checked")];
    if (checked.length > 4) {
      event.target.checked = false;
      return;
    }
    if (checked.length === 0) {
      event.target.checked = true;
      return;
    }
    updateCharts();
  });
}

function selectedComparisonIds() {
  return [...selectors.querySelectorAll("input:checked")].map((input) => input.value);
}

function chartDefaults() {
  Chart.defaults.color = "#b8b8b8";
  Chart.defaults.font.family = "Arial, Helvetica, sans-serif";
  Chart.defaults.font.size = 10;
  Chart.defaults.borderColor = "rgba(255,255,255,.12)";
}

function createCharts() {
  if (typeof Chart === "undefined") return;
  chartDefaults();
  const ids = selectedComparisonIds();
  radarChart = new Chart(document.getElementById("radar-chart"), {
    type: "radar",
    data: buildRadarData(ids),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 450 },
      scales: { r: { min: 0, max: 10, ticks: { display: false, stepSize: 2 }, grid: { color: "rgba(255,255,255,.14)" }, angleLines: { color: "rgba(255,255,255,.14)" }, pointLabels: { color: "#b8b8b8", font: { size: 9 } } } },
      plugins: { legend: { position: "bottom", labels: { boxWidth: 8, boxHeight: 2, padding: 18 } }, tooltip: { backgroundColor: "#111111" } }
    }
  });
  barChart = new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: buildBarData(ids),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      animation: { duration: 450 },
      scales: { x: { beginAtZero: true, grid: { color: "rgba(255,255,255,.1)" }, title: { display: true, text: tr("Wh/kg · approximate midpoint") } }, y: { grid: { display: false } } },
      plugins: { legend: { display: false }, tooltip: { backgroundColor: "#111111" } }
    }
  });
}

function buildRadarData(ids) {
  return {
    labels: ["Energy Density", "Cost", "Safety", "Cycle Life", "Charging", "Cold Weather"].map(tr),
    datasets: ids.map((id) => {
      const item = comparisonData[id];
      return {
        label: tr(item.label),
        data: item.scores,
        borderColor: item.color,
        backgroundColor: `${item.color}20`,
        pointBackgroundColor: item.color,
        borderWidth: 1.5,
        pointRadius: 2
      };
    })
  };
}

function buildBarData(ids) {
  return {
    labels: ids.map((id) => tr(comparisonData[id].label)),
    datasets: [{ data: ids.map((id) => comparisonData[id].midpoint), backgroundColor: ids.map((id) => comparisonData[id].color), borderWidth: 0, barThickness: 16 }]
  };
}

function updateCharts() {
  if (!radarChart || !barChart) return;
  const ids = selectedComparisonIds();
  radarChart.data = buildRadarData(ids);
  barChart.data = buildBarData(ids);
  barChart.options.scales.x.title.text = tr("Wh/kg · approximate midpoint");
  radarChart.update();
  barChart.update();
}

function setupCalculators() {
  const energyForm = document.getElementById("energy-form");
  const rangeForm = document.getElementById("range-form");
  energyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const voltage = Number(document.getElementById("voltage").value);
    const capacity = Number(document.getElementById("capacity").value);
    const error = document.getElementById("energy-error");
    const result = document.getElementById("energy-result");
    if (!Number.isFinite(voltage) || !Number.isFinite(capacity) || voltage <= 0 || capacity <= 0) {
      error.textContent = currentLanguage === "zh" ? "请输入大于零的电压和容量。" : "Enter voltage and capacity values greater than zero.";
      return;
    }
    const energy = voltage * capacity;
    error.textContent = "";
    result.querySelector("strong").textContent = `${formatNumber(energy)} Wh`;
    result.querySelector("p").textContent = currentLanguage === "zh"
      ? `理论上，这块电池可以用 ${formatNumber(energy)} 瓦的功率持续供电 1 小时；真实可用能量通常更低。`
      : `This battery could theoretically supply ${formatNumber(energy)} watts for 1 hour. Real usable energy is usually lower.`;
    animateResult(result);
  });
  energyForm.addEventListener("reset", () => resetResult("energy-result", "— Wh", tr("Enter valid values to estimate stored energy."), "energy-error"));

  rangeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const batterySize = Number(document.getElementById("battery-size").value);
    const consumption = Number(document.getElementById("consumption").value);
    const factor = Number(document.getElementById("temperature").value);
    const error = document.getElementById("range-error");
    const result = document.getElementById("range-result");
    if (!Number.isFinite(batterySize) || !Number.isFinite(consumption) || batterySize <= 0 || consumption <= 0) {
      error.textContent = currentLanguage === "zh" ? "请输入大于零的电池容量和能耗。" : "Enter battery size and consumption values greater than zero.";
      return;
    }
    const baseRange = batterySize * 1000 / consumption;
    const adjusted = baseRange * factor;
    error.textContent = "";
    result.querySelector("strong").textContent = `${formatNumber(adjusted)} km`;
    result.querySelector("p").textContent = currentLanguage === "zh"
      ? `基础估算：${formatNumber(baseRange)} km。温度模型：${Math.round(factor * 100)}%。真实续航还取决于车速、轮胎、地形、空调和电池状态。`
      : `Base estimate: ${formatNumber(baseRange)} km. Temperature model: ${Math.round(factor * 100)}%. Real range also depends on speed, tires, terrain, HVAC use, and battery condition.`;
    animateResult(result);
  });
  rangeForm.addEventListener("reset", () => resetResult("range-result", "— km", tr("Real range also depends on speed, tires, terrain, HVAC use, and battery condition."), "range-error"));
}

function formatNumber(value) {
  return new Intl.NumberFormat(currentLanguage === "zh" ? "zh-CN" : "en-US", { maximumFractionDigits: 1 }).format(value);
}

function animateResult(result) {
  result.classList.remove("updated");
  requestAnimationFrame(() => result.classList.add("updated"));
}

function resetResult(resultId, value, text, errorId) {
  requestAnimationFrame(() => {
    const result = document.getElementById(resultId);
    result.querySelector("strong").textContent = value;
    result.querySelector("p").textContent = text;
    document.getElementById(errorId).textContent = "";
  });
}

function renderTimeline() {
  const timeline = document.getElementById("battery-timeline");
  timeline.innerHTML = timelineData.map(([year, title, detail], index) => `
    <article class="timeline-item reveal ${year === "1991" ? "active" : ""}">
      <button class="timeline-button" type="button" aria-expanded="${year === "1991"}">
        <span class="timeline-year">${year}</span>
        <span class="timeline-dot"></span>
        <h3>${title}</h3>
        <div class="timeline-detail"><small>WHY IT MATTERED</small><p>${detail}</p></div>
      </button>
    </article>
  `).join("");
  timeline.querySelectorAll(".timeline-button").forEach((button) => {
    button.addEventListener("click", () => {
      timeline.querySelectorAll(".timeline-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector("button").setAttribute("aria-expanded", "false");
      });
      button.closest(".timeline-item").classList.add("active");
      button.setAttribute("aria-expanded", "true");
    });
  });
}

function setupPackExplorer() {
  const explanation = document.getElementById("pack-explanation");
  const buttons = [...document.querySelectorAll("[data-pack-level]")];
  function render(level) {
    const item = packContent[level];
    explanation.innerHTML = `
      <span>${item.code}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="pack-facts">${item.facts.map(([label, value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join("")}</div>
    `;
    buttons.forEach((button) => button.classList.toggle("active", button.dataset.packLevel === level));
  }
  buttons.forEach((button) => button.addEventListener("click", () => render(button.dataset.packLevel)));
  render("cell");
}

function renderMaterialFilters() {
  const categories = ["All", "Cathode", "Anode", "Electrolyte", "Separator", "Element"];
  document.getElementById("material-filters").innerHTML = categories.map((category) => `<button class="filter-button ${category === "All" ? "active" : ""}" type="button" data-category="${category}">${category}</button>`).join("");
}

function renderMaterials() {
  const query = document.getElementById("material-search").value.trim().toLowerCase();
  const active = document.querySelector(".filter-button.active")?.dataset.category || "All";
  const filtered = materials.filter((material) => {
    const categoryMatch = active === "All" || material.category === active;
    const entry = knowledgeById.get(materialKnowledgeMap[material.name]);
    const searchMatch = [material.name, material.category, material.role, material.advantage, material.challenge, entry?.title, ...(entry?.aliases || [])].join(" ").toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  materialsGrid.innerHTML = filtered.map((material) => `
    <article class="material-card reveal visible">
      <span>${material.category}</span><h3>${material.name}</h3><p class="material-role"><small>ROLE IN BATTERY</small>${material.role}</p>
      <dl><dt>WHY IT MATTERS</dt><dd>${material.advantage}</dd><dt>CHALLENGE</dt><dd>${material.challenge}</dd></dl>
      <button class="inline-more" type="button" data-knowledge-id="${materialKnowledgeMap[material.name] || "cathode"}">查看词条</button>
    </article>
  `).join("");
  document.getElementById("materials-empty").hidden = filtered.length !== 0;
}

function setupMaterials() {
  renderMaterialFilters();
  renderMaterials();
  document.getElementById("material-search").addEventListener("input", renderMaterials);
  document.getElementById("material-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMaterials();
  });
}

function renderQuiz() {
  document.getElementById("quiz-questions").innerHTML = quizData.map((item, index) => `
    <article class="quiz-question" data-question="${index}">
      <header><span>${String(index + 1).padStart(2, "0")}</span><h3>${item.question}</h3></header>
      <div class="quiz-options">${item.options.map((option, optionIndex) => `
        <label class="quiz-option"><input type="radio" name="question-${index}" value="${optionIndex}"><span>${option}</span></label>
      `).join("")}</div>
      <p class="quiz-explanation" hidden></p>
    </article>
  `).join("");
}

function setupQuiz() {
  const form = document.getElementById("quiz-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    quizData.forEach((item, index) => {
      const question = form.querySelector(`[data-question="${index}"]`);
      const selected = question.querySelector("input:checked");
      const correct = selected && Number(selected.value) === item.answer;
      if (correct) score += 1;
      question.classList.toggle("correct", Boolean(correct));
      question.classList.toggle("incorrect", !correct);
      const explanation = question.querySelector(".quiz-explanation");
      explanation.hidden = false;
      explanation.textContent = currentLanguage === "zh"
        ? `${correct ? "回答正确。" : `正确答案：${tr(item.options[item.answer])}。`} ${tr(item.explanation)}`
        : `${correct ? "Correct." : `Answer: ${item.options[item.answer]}.`} ${item.explanation}`;
    });
    const feedback = currentLanguage === "zh"
      ? (score === quizData.length ? "很好，你已经连接起这些关键概念。" : "阅读解释后，可以再次尝试。")
      : (score === quizData.length ? "Excellent. You connected the key ideas." : "Review the explanations and try again when ready.");
    document.getElementById("quiz-result").innerHTML = `<strong>${score} / ${quizData.length}</strong> — ${feedback}`;
  });
  document.getElementById("quiz-restart").addEventListener("click", () => {
    form.reset();
    form.querySelectorAll(".quiz-question").forEach((question) => question.classList.remove("correct", "incorrect"));
    form.querySelectorAll(".quiz-explanation").forEach((text) => { text.hidden = true; text.textContent = ""; });
    document.getElementById("quiz-result").innerHTML = "";
  });
}

function renderGlossary() {
  const query = document.getElementById("glossary-search").value.trim().toLowerCase();
  const filtered = glossary.filter((item) => {
    const entry = knowledgeById.get(glossaryKnowledgeMap[item.term]);
    return `${item.term} ${item.definition} ${entry?.title || ""} ${(entry?.aliases || []).join(" ")}`.toLowerCase().includes(query);
  });
  glossaryGrid.innerHTML = filtered.map((item) => `
    <article class="glossary-card" data-knowledge-id="${glossaryKnowledgeMap[item.term] || ""}" tabindex="0" role="button">
      <h3>${item.term}</h3>
      <p>${item.definition}</p>
      <span class="glossary-more">查看详细解释</span>
    </article>
  `).join("");
  document.getElementById("glossary-empty").hidden = filtered.length !== 0;
}

const originalTextNodes = new Map();
const originalAttributes = new Map();
let languageMutationLock = false;

function translateTextNode(node) {
  if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
  const original = originalTextNodes.get(node);
  if (currentLanguage === "en") {
    if (node.nodeValue !== original) node.nodeValue = original;
    return;
  }
  const trimmed = original.trim();
  const translated = zhTranslations[trimmed];
  if (!translated) return;
  const leading = original.match(/^\s*/)?.[0] || "";
  const trailing = original.match(/\s*$/)?.[0] || "";
  const next = `${leading}${translated}${trailing}`;
  if (node.nodeValue !== next) node.nodeValue = next;
}

function translateAttributes(root) {
  const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll("*")] : [];
  elements.forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const originals = originalAttributes.get(element);
      if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
      const original = originals[attribute];
      element.setAttribute(attribute, currentLanguage === "zh" ? (zhTranslations[original] || original) : original);
    });
  });
}

function translateTree(root = document.body) {
  languageMutationLock = true;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
  } else {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (!node.parentElement?.closest("script, style, canvas")) translateTextNode(node);
      node = walker.nextNode();
    }
    translateAttributes(root);
  }
  languageMutationLock = false;
}

function setLanguage(language) {
  currentLanguage = language === "zh" ? "zh" : "en";
  localStorage.setItem("battery-lab-language", currentLanguage);
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = currentLanguage === "zh" ? "Battery Lab — 能源储存学习与研究" : "Battery Lab — Energy Storage Learning Hub";
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  translateTree(document.body);
  updateCharts();
}

function setupLanguage() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  const observer = new MutationObserver((mutations) => {
    if (languageMutationLock || currentLanguage !== "zh") return;
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => translateTree(node));
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setLanguage(currentLanguage);
}

function setupNavigation() {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }));
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });

  const sectionMap = { overview: "overview", types: "types", calculator: "calculator", materials: "materials", research: "research", quiz: "quiz" };
  const links = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-18% 0px -68% 0px", threshold: [0.01, 0.2] });
  Object.keys(sectionMap).forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function setupReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.classList.add("visible");
      item.style.opacity = "1";
      item.style.transform = "none";
      item.style.transition = "none";
    } else {
      observer.observe(item);
    }
  });
}

function init() {
  renderBatteryTypes();
  setupKnowledgeBase();
  renderSelectors();
  setupCalculators();
  renderTimeline();
  setupPackExplorer();
  setupMaterials();
  renderQuiz();
  setupQuiz();
  renderGlossary();
  document.getElementById("glossary-search").addEventListener("input", renderGlossary);
  setupNavigation();
  setupLanguage();
  setupReveal();
  if (typeof Chart === "undefined") {
    document.querySelectorAll(".chart-box").forEach((box) => box.innerHTML = "<p class='empty-state'>Charts could not load. Check your internet connection and refresh.</p>");
  } else {
    createCharts();
  }
}

document.addEventListener("DOMContentLoaded", init);
