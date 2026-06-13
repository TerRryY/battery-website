"use strict";

let currentLanguage = localStorage.getItem("battery-lab-language") === "zh" ? "zh" : "en";

const zhTranslations = {
  "Skip to content": "跳到主要内容",
  "Main navigation": "主导航",
  "Open navigation": "打开导航",
  "OVERVIEW": "概览",
  "TYPES": "类型",
  "CALCULATOR": "计算器",
  "MATERIALS": "材料",
  "RESEARCH": "研究",
  "BATTERY LAB / MATERIALS SCIENCE": "电池实验室 / 材料科学",
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
    name: "Lead-Acid Battery",
    description: "A mature rechargeable chemistry known for low cost and strong short bursts of current.",
    density: "30–50 Wh/kg",
    advantage: "Low cost, reliable high-current output, and a well-established recycling system.",
    limitation: "Heavy and relatively low in energy density; deep discharge can shorten its life.",
    applications: "Vehicle starter batteries, UPS systems, backup power."
  },
  {
    id: "nimh",
    name: "Nickel-Metal Hydride Battery",
    description: "A durable rechargeable chemistry that remains useful where temperature tolerance and robustness matter.",
    density: "60–120 Wh/kg",
    advantage: "Good abuse tolerance, wide operating temperature range, and proven reliability.",
    limitation: "Heavier and more prone to self-discharge than modern lithium-ion cells.",
    applications: "Hybrid vehicles, consumer rechargeable cells, industrial equipment."
  },
  {
    id: "lfp",
    name: "Lithium Iron Phosphate Battery",
    description: "A lithium-ion chemistry built around a stable phosphate cathode and long cycle life.",
    density: "90–160 Wh/kg",
    advantage: "Strong thermal stability, long service life, and lower reliance on nickel and cobalt.",
    limitation: "Lower volumetric energy density and weaker cold-weather charging than high-nickel cells.",
    applications: "EVs, buses, stationary storage, power tools."
  },
  {
    id: "nmc",
    name: "NMC Lithium-ion Battery",
    description: "A layered cathode chemistry that balances nickel, manganese, and cobalt for high specific energy.",
    density: "180–300 Wh/kg",
    advantage: "High energy density supports longer range with less battery mass.",
    limitation: "Requires careful manufacturing, battery management, and thermal protection.",
    applications: "Long-range EVs, laptops, drones, portable electronics."
  },
  {
    id: "sodium",
    name: "Sodium-ion Battery",
    description: "A developing rechargeable system that replaces lithium ions with more abundant sodium ions.",
    density: "100–180 Wh/kg",
    advantage: "Potentially lower material cost, diversified supply, and useful low-temperature behavior.",
    limitation: "Current cells usually store less energy per kilogram than leading lithium-ion designs.",
    applications: "Entry-level EVs, two-wheelers, stationary storage."
  },
  {
    id: "solid",
    name: "Solid-State Battery",
    description: "A family of developing batteries that uses a solid electrolyte instead of a conventional liquid one.",
    density: "Potentially >300 Wh/kg",
    advantage: "Could support lithium-metal anodes and improve the safety and energy ceiling.",
    limitation: "Interface resistance, dendrites, pressure control, cost, and manufacturing yield remain difficult.",
    applications: "Future EVs, aviation, premium electronics; still developing."
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

Object.assign(zhTranslations, {
  "A mature rechargeable chemistry known for low cost and strong short bursts of current.": "一种成熟的可充电化学体系，以低成本和强大的瞬时放电能力著称。",
  "Low cost, reliable high-current output, and a well-established recycling system.": "成本低、大电流输出可靠，并且拥有成熟的回收体系。",
  "Heavy and relatively low in energy density; deep discharge can shorten its life.": "重量大、能量密度较低，深度放电会缩短寿命。",
  "Vehicle starter batteries, UPS systems, backup power.": "汽车启动电池、UPS 不间断电源和备用电源。",
  "A durable rechargeable chemistry that remains useful where temperature tolerance and robustness matter.": "一种耐用的可充电体系，适合重视温度适应性和耐用性的场景。",
  "Good abuse tolerance, wide operating temperature range, and proven reliability.": "抗滥用能力好、工作温区宽，可靠性经过长期验证。",
  "Heavier and more prone to self-discharge than modern lithium-ion cells.": "比现代锂离子电池更重，自放电也更明显。",
  "Hybrid vehicles, consumer rechargeable cells, industrial equipment.": "混合动力汽车、消费级充电电池和工业设备。",
  "A lithium-ion chemistry built around a stable phosphate cathode and long cycle life.": "一种以稳定磷酸盐正极为基础、循环寿命较长的锂离子体系。",
  "Strong thermal stability, long service life, and lower reliance on nickel and cobalt.": "热稳定性强、寿命长，对镍和钴的依赖较低。",
  "Lower volumetric energy density and weaker cold-weather charging than high-nickel cells.": "体积能量密度较低，低温充电能力弱于高镍体系。",
  "EVs, buses, stationary storage, power tools.": "电动汽车、公交车、固定式储能和电动工具。",
  "A layered cathode chemistry that balances nickel, manganese, and cobalt for high specific energy.": "一种层状正极体系，通过镍、锰、钴的配合获得较高比能量。",
  "High energy density supports longer range with less battery mass.": "较高能量密度能以更小电池质量支持更长续航。",
  "Requires careful manufacturing, battery management, and thermal protection.": "对制造、电池管理和热保护要求较高。",
  "Long-range EVs, laptops, drones, portable electronics.": "长续航电动车、笔记本电脑、无人机和便携电子设备。",
  "A developing rechargeable system that replaces lithium ions with more abundant sodium ions.": "一种仍在发展的可充电体系，用储量更丰富的钠离子替代锂离子。",
  "Potentially lower material cost, diversified supply, and useful low-temperature behavior.": "材料成本可能更低，供应来源更分散，并具有较好的低温表现。",
  "Current cells usually store less energy per kilogram than leading lithium-ion designs.": "现阶段每千克储能通常低于领先的锂离子方案。",
  "Entry-level EVs, two-wheelers, stationary storage.": "入门级电动车、电动两轮车和固定式储能。",
  "A family of developing batteries that uses a solid electrolyte instead of a conventional liquid one.": "一类使用固态电解质替代传统液态电解质、仍在发展的电池。",
  "Could support lithium-metal anodes and improve the safety and energy ceiling.": "有望支持锂金属负极，并提高安全与能量上限。",
  "Interface resistance, dendrites, pressure control, cost, and manufacturing yield remain difficult.": "界面阻抗、枝晶、压力控制、成本和制造良率仍然困难。",
  "Future EVs, aviation, premium electronics; still developing.": "未来电动车、航空和高端电子产品；目前仍在发展。",
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

const typeList = document.getElementById("type-list");
const selectors = document.getElementById("battery-selectors");
const materialsGrid = document.getElementById("materials-grid");
const glossaryGrid = document.getElementById("glossary-grid");
let radarChart;
let barChart;

function renderBatteryTypes() {
  typeList.innerHTML = batteryTypes.map((battery, index) => `
    <article class="type-card reveal" data-type="${battery.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${battery.name}</h3>
      <div class="type-summary"><p>${battery.description}</p></div>
      <div class="type-density"><strong>${battery.density}</strong><p>Approximate typical range</p></div>
      <button class="type-toggle" type="button" aria-expanded="false" aria-label="Show details for ${battery.name}"></button>
      <div class="type-details">
        <div><small>ADVANTAGES</small><p>${battery.advantage}</p></div>
        <div><small>LIMITATIONS</small><p>${battery.limitation}</p></div>
        <div><small>COMMON APPLICATIONS</small><p>${battery.applications}</p></div>
      </div>
    </article>
  `).join("");

  typeList.querySelectorAll(".type-card").forEach((card) => {
    card.addEventListener("click", (event) => {
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
        <div class="timeline-detail"><p>${detail}</p></div>
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
    const searchMatch = [material.name, material.category, material.role, material.advantage, material.challenge].join(" ").toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  materialsGrid.innerHTML = filtered.map((material) => `
    <article class="material-card reveal visible">
      <span>${material.category}</span><h3>${material.name}</h3><p class="material-role">${material.role}</p>
      <dl><dt>ADVANTAGE</dt><dd>${material.advantage}</dd><dt>CHALLENGE</dt><dd>${material.challenge}</dd></dl>
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
  const filtered = glossary.filter((item) => `${item.term} ${item.definition}`.toLowerCase().includes(query));
  glossaryGrid.innerHTML = filtered.map((item) => `<article class="glossary-card"><h3>${item.term}</h3><p>${item.definition}</p></article>`).join("");
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
