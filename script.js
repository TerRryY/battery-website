"use strict";

let currentLang = localStorage.getItem("battery-lab-language") || "zh";
if (!["zh", "en"].includes(currentLang)) currentLang = "zh";
let radarChart;
let barChart;
let currentModalId = null;

const ui = {
  zh: {
    nav: { story: "故事", types: "电池", materials: "材料", pack: "电池包", future: "未来", tools: "工具" },
    hero: {
      title: "电池科学",
      sub: "探索驱动手机、电动汽车与未来能源系统的核心技术。",
      cta1: "探索电池",
      cta2: "继续了解"
    },
    story: {
      kicker: "为什么电池重要",
      title: "每一部手机。\n每一辆电动车。\n每一颗卫星。",
      body: "电池不是一个孤立零件。它连接材料科学、能源系统、交通方式和安全工程。理解电池，就是理解现代技术如何储存、释放和管理能量。"
    },
    types: {
      kicker: "探索电池体系",
      title: "不是所有电池都为同一个任务而生。",
      body: "有些追求长续航，有些追求安全寿命，有些为低成本和资源稳定而来。横向浏览不同体系，点击进入完整解释。"
    },
    comparison: {
      kicker: "性能对比",
      title: "工程选择，永远是取舍。",
      body: "这里的图表是简化学习模型，不是工业规格。它帮助你直观看到能量密度、成本、安全、寿命、快充和低温性能之间的平衡。",
      select: "选择技术",
      note: "相对评分：1 较低，10 较高。成本分数越高代表越经济。",
      radar: "综合雷达图",
      bar: "典型能量密度"
    },
    materials: {
      kicker: "材料科学",
      title: "微小材料，决定巨大系统。",
      body: "正极、负极、电解质和隔膜共同决定电池的容量、安全、成本和寿命。材料不是列表，而是性能的源头。"
    },
    pack: {
      kicker: "电动车电池包",
      title: "电池性能，最终在系统中兑现。",
      body: "电芯只是开始。模组、电池包、BMS、热管理、充电和安全结构，决定电池能否稳定进入真实车辆。"
    },
    future: {
      kicker: "未来技术",
      title: "下一代电池，不只有一种答案。",
      body: "固态、钠离子、硅负极、锂硫、锂空气和更智能的能量管理，都在从不同方向逼近更安全、更便宜、更稳定的储能系统。"
    },
    tools: {
      kicker: "学习工具",
      title: "先被吸引，再深入研究。",
      body: "搜索、计算器和测验放在学习旅程后段，作为探索工具，而不是一进门就看到的数据库入口。"
    },
    knowledge: { label: "搜索电池知识库", placeholder: "搜索 NCM、LFP、SOC、电解液、隔膜…", empty: "没有找到相关词条。" },
    calc: {
      energyTitle: "电池能量计算器",
      energyBody: "用电压和安时容量估算电池储存的电能。",
      voltage: "电压 V",
      capacity: "容量 Ah",
      calculate: "计算",
      reset: "重置",
      result: "结果",
      energyHint: "输入数值后显示估算结果。",
      rangeTitle: "电动车续航计算器",
      rangeBody: "用电池容量、能耗和低温系数估算续航。",
      size: "电池容量 kWh",
      consumption: "能耗 Wh/km",
      temperature: "温度模型",
      normal: "常温 · 100%",
      cold: "寒冷 · 85%",
      veryCold: "严寒 · 70%",
      estimate: "估算",
      rangeHint: "真实续航还受车速、空调、轮胎、地形和电池状态影响。",
      invalidEnergy: "请输入大于零的电压和容量。",
      invalidRange: "请输入大于零的电池容量和能耗。",
      energyText: "理论上，这块电池可以用 {value} 瓦的功率持续供电 1 小时；真实可用能量通常更低。",
      rangeText: "基础估算：{base} km。温度模型：{factor}%。真实续航还会变化。"
    },
    quiz: { kicker: "知识小测", title: "你真的理解电池了吗？", submit: "提交答案", restart: "重新开始", correct: "回答正确。", scorePerfect: "很好，你已经连接起这些关键概念。", scoreAgain: "阅读解释后，可以再次尝试。", answer: "正确答案" },
    research: { kicker: "个人研究思考", title: "材料、热管理和系统问题，是我最想继续研究的方向。" },
    modal: { close: "关闭" },
    footer: { body: "一个关于电池技术、材料科学与能源储存的学生学习项目。", built: "Terry Wang 制作", search: "知识库", top: "回到顶部 ↑" },
    labels: { learnMore: "了解更多", approximate: "典型范围", whkg: "Wh/kg · 近似中值", chartsFail: "图表加载失败，请检查网络连接后刷新。", noCharts: "无图表" }
  },
  en: {
    nav: { story: "Story", types: "Batteries", materials: "Materials", pack: "Pack", future: "Future", tools: "Tools" },
    hero: {
      title: "Battery Science",
      sub: "Exploring the technologies behind smartphones, electric vehicles, and future energy systems.",
      cta1: "Explore Batteries",
      cta2: "Learn More"
    },
    story: {
      kicker: "Why batteries matter",
      title: "Every smartphone.\nEvery EV.\nEvery satellite.",
      body: "A battery is not an isolated component. It connects materials science, energy systems, transportation, and safety engineering. To understand batteries is to understand how modern technology stores, releases, and manages energy."
    },
    types: {
      kicker: "Explore battery types",
      title: "Not every battery is built for the same job.",
      body: "Some chemistries chase driving range, some prioritize safety and lifetime, and some are designed for low cost and supply stability. Browse the gallery and open each explanation."
    },
    comparison: {
      kicker: "Performance comparison",
      title: "Engineering is always a trade-off.",
      body: "These charts are simplified educational models, not industrial specifications. They help show the balance between energy density, cost, safety, cycle life, charging, and cold-weather behavior.",
      select: "Select technologies",
      note: "Relative score: 1 = low, 10 = high. For cost, a higher score means more affordable.",
      radar: "Balanced radar",
      bar: "Typical energy density"
    },
    materials: {
      kicker: "Materials science",
      title: "Tiny materials shape massive systems.",
      body: "Cathodes, anodes, electrolytes, and separators determine capacity, safety, cost, and life. Materials are not a list; they are where performance begins."
    },
    pack: {
      kicker: "EV battery pack",
      title: "Battery performance becomes real inside a system.",
      body: "Cells are only the beginning. Modules, packs, BMS, thermal management, charging, and safety structures decide whether a battery can work reliably inside a real vehicle."
    },
    future: {
      kicker: "Future technologies",
      title: "Next-generation batteries will not have one answer.",
      body: "Solid-state, sodium-ion, silicon anodes, lithium-sulfur, lithium-air, and smarter energy management approach safer, cheaper, more stable storage from different directions."
    },
    tools: {
      kicker: "Learning tools",
      title: "Attract first. Then go deeper.",
      body: "Search, calculators, and quizzes appear later in the journey as exploration tools instead of making the first screen feel like a database."
    },
    knowledge: { label: "Search the battery knowledge base", placeholder: "Search NCM, LFP, SOC, electrolyte, separator…", empty: "No entry found." },
    calc: {
      energyTitle: "Battery Energy Calculator",
      energyBody: "Estimate stored electrical energy from voltage and amp-hour capacity.",
      voltage: "Voltage V",
      capacity: "Capacity Ah",
      calculate: "Calculate",
      reset: "Reset",
      result: "Result",
      energyHint: "Enter values to show an estimate.",
      rangeTitle: "EV Range Calculator",
      rangeBody: "Estimate range from pack size, consumption, and a cold-weather factor.",
      size: "Battery Size kWh",
      consumption: "Consumption Wh/km",
      temperature: "Temperature Model",
      normal: "Normal · 100%",
      cold: "Cold · 85%",
      veryCold: "Very cold · 70%",
      estimate: "Estimate",
      rangeHint: "Real range also depends on speed, HVAC, tires, terrain, and battery condition.",
      invalidEnergy: "Enter voltage and capacity values greater than zero.",
      invalidRange: "Enter battery size and consumption values greater than zero.",
      energyText: "This battery could theoretically supply {value} watts for 1 hour. Real usable energy is usually lower.",
      rangeText: "Base estimate: {base} km. Temperature model: {factor}%. Real range will vary."
    },
    quiz: { kicker: "Knowledge check", title: "Do you really understand batteries?", submit: "Submit Answers", restart: "Restart", correct: "Correct.", scorePerfect: "Excellent. You connected the key ideas.", scoreAgain: "Review the explanations and try again.", answer: "Answer" },
    research: { kicker: "Personal research thoughts", title: "Materials, thermal management, and system questions are what I want to keep studying." },
    modal: { close: "Close" },
    footer: { body: "A student learning project about battery technology, materials science, and energy storage.", built: "Built by Terry Wang", search: "Knowledge base", top: "Back to top ↑" },
    labels: { learnMore: "Learn More", approximate: "Typical range", whkg: "Wh/kg · approximate midpoint", chartsFail: "Charts could not load. Check your connection and refresh.", noCharts: "No chart" }
  }
};

const stats = [
  { value: "300+", zh: "Wh/kg 是高能电池常被讨论的潜力区间之一，实际取决于体系和设计。", en: "Wh/kg is a commonly discussed potential range for high-energy cells, depending on chemistry and design." },
  { value: "1000+", zh: "循环寿命不只由材料决定，也由温度、充电策略和使用方式决定。", en: "Cycle life depends not only on materials, but also temperature, charging strategy, and usage." },
  { value: "2030+", zh: "固态电池、钠离子和硅负极仍在走向更成熟的产业化。", en: "Solid-state, sodium-ion, and silicon anode paths are still moving toward maturity." }
];

const batteries = [
  {
    id: "nmc", short: "NCM / NCA",
    zh: {
      title: "三元锂电池 NCM/NCA",
      desc: "使用镍、钴、锰或镍、钴、铝正极，通常追求更高能量密度和更长续航。",
      tags: ["高能量密度", "长续航", "需要热管理"],
      metrics: [["能量密度", "通常较高"], ["安全性", "需要严格控制"], ["成本", "受镍钴影响"], ["低温", "通常较好"], ["寿命", "中高，取决于管理"]],
      sections: [
        ["概览", "三元锂是一类高能量密度锂离子电池，常见于长续航电动车、笔记本、无人机等场景。"],
        ["名字是什么意思", "“三元”指镍、钴、锰或镍、钴、铝等元素组合。镍提高容量，钴稳定结构，锰或铝改善稳定性和安全边界。"],
        ["工作原理", "充电时锂离子从正极移动到负极，放电时回到正极，同时电子从外部电路流动。"],
        ["优点", "相同重量下通常可储存更多电能，适合对续航和轻量化要求高的产品。"],
        ["局限", "成本较高，对制造、BMS 和热管理要求高；高镍体系的稳定性更需要精细控制。"],
        ["与 LFP 对比", "三元锂通常能量密度更高，LFP 通常更安全、寿命更长、成本更低。"],
        ["普通人怎么理解", "它像轻量大容量背包，能装更多东西，但需要更仔细保护。"],
        ["未来方向", "高镍化、表面包覆、固态电解质和更好的热管理都是重要方向。"]
      ]
    },
    en: {
      title: "NCM / NCA Lithium-ion",
      desc: "A nickel-cobalt based lithium-ion family often used when high energy density and long range matter.",
      tags: ["High energy", "Long range", "Thermal control"],
      metrics: [["Energy density", "Usually high"], ["Safety", "Needs careful control"], ["Cost", "Nickel/cobalt sensitive"], ["Cold weather", "Usually good"], ["Cycle life", "Medium-high, management dependent"]],
      sections: [
        ["Overview", "NCM/NCA cells are high-energy lithium-ion batteries used in long-range EVs, laptops, drones, and premium electronics."],
        ["What the name means", "NCM refers to nickel, cobalt, and manganese. NCA refers to nickel, cobalt, and aluminum. Nickel raises capacity, cobalt stabilizes the layered structure, and manganese or aluminum helps stability."],
        ["How it works", "During charging, lithium ions move from the cathode to the anode. During discharge, they return while electrons flow through the external circuit."],
        ["Advantages", "It can store more energy at the same mass, which helps range and lightweight design."],
        ["Limitations", "It is more demanding in manufacturing, battery management, and thermal protection. High-nickel formulas require especially careful control."],
        ["Compared with LFP", "NCM/NCA usually offers higher energy density. LFP usually offers better safety, cycle life, and cost."],
        ["Plain-language analogy", "It is like a lightweight backpack with more capacity, but it needs more careful protection."],
        ["Future outlook", "High-nickel designs, coatings, solid electrolytes, and better thermal management are important directions."]
      ]
    }
  },
  {
    id: "lfp", short: "LFP",
    zh: {
      title: "磷酸铁锂电池 LFP",
      desc: "以磷酸铁锂为正极，特点是安全稳定、寿命长、成本友好。",
      tags: ["安全稳定", "长寿命", "成本友好"],
      metrics: [["能量密度", "中等"], ["安全性", "通常较高"], ["成本", "较低"], ["低温", "需要改善"], ["寿命", "通常较长"]],
      sections: [
        ["概览", "LFP 是一种稳定、耐用、成本相对低的锂离子体系，常用于电动车、公交车和储能。"],
        ["核心材料", "正极为磷酸铁锂，不依赖镍和钴。磷氧键较稳定，热稳定性通常较好。"],
        ["工作原理", "锂离子在磷酸铁锂正极和石墨负极之间往返移动。"],
        ["优点", "安全性好、循环寿命长、成本较低，适合重视耐用性的应用。"],
        ["局限", "能量密度通常低于高镍三元，低温充电和冬季续航需要热管理帮助。"],
        ["应用", "城市电动车、储能电站、公交车、商用车和电动工具。"],
        ["普通人怎么理解", "它像一个结实可靠的工具箱，不追求最轻，但很耐用。"],
        ["未来方向", "结构创新、CTP/刀片电池、低温电解液和更好的热管理会继续提升实用性。"]
      ]
    },
    en: {
      title: "Lithium Iron Phosphate LFP",
      desc: "A lithium-ion chemistry known for stability, long life, and cost advantages.",
      tags: ["Stable", "Long life", "Cost friendly"],
      metrics: [["Energy density", "Medium"], ["Safety", "Usually high"], ["Cost", "Lower"], ["Cold weather", "Needs support"], ["Cycle life", "Usually long"]],
      sections: [
        ["Overview", "LFP is a stable, durable, and relatively affordable lithium-ion chemistry used in EVs, buses, and storage systems."],
        ["Core material", "Its cathode is lithium iron phosphate and does not rely on nickel or cobalt. Strong phosphate bonds help thermal stability."],
        ["How it works", "Lithium ions move between the LFP cathode and graphite anode during charge and discharge."],
        ["Advantages", "Good safety, long cycle life, and lower material cost make it useful for durable applications."],
        ["Limitations", "Energy density is usually lower than high-nickel cells, and cold-weather charging needs thermal management."],
        ["Applications", "City EVs, grid storage, buses, commercial vehicles, and power tools."],
        ["Plain-language analogy", "It is like a tough tool case: not the lightest, but very dependable."],
        ["Future outlook", "Pack structure innovation, cell-to-pack designs, low-temperature electrolytes, and thermal management will keep improving it."]
      ]
    }
  },
  {
    id: "sodium", short: "Sodium-ion",
    zh: {
      title: "钠离子电池",
      desc: "用钠离子替代锂离子，资源更丰富，适合低成本储能和部分入门级车辆。",
      tags: ["资源丰富", "低成本潜力", "低温表现"],
      metrics: [["能量密度", "通常低于锂电"], ["安全性", "取决于体系"], ["成本", "有下降潜力"], ["低温", "部分路线较好"], ["寿命", "快速发展中"]],
      sections: [
        ["概览", "钠离子电池不一定取代锂电池，但可能补上低成本和资源稳定这块拼图。"],
        ["为什么重要", "钠资源分布更广，长期可能降低供应风险。"],
        ["工作原理", "钠离子在正负极之间往返移动。因为钠离子更大，材料结构需要重新设计。"],
        ["优点", "资源丰富、供应多元，部分体系低温表现不错。"],
        ["局限", "目前能量密度通常低于主流锂离子，产业链仍在成熟。"],
        ["应用", "固定式储能、两轮车、入门级电动车和低温场景。"],
        ["普通人怎么理解", "它像一种更容易找到原料的路线，不一定跑最远，但可能更便宜、更容易铺开。"],
        ["未来方向", "硬碳负极、层状氧化物、普鲁士蓝类材料和规模化制造是关键。"]
      ]
    },
    en: {
      title: "Sodium-ion Battery",
      desc: "A developing system that uses sodium ions instead of lithium ions, with potential for lower-cost storage.",
      tags: ["Abundant", "Cost potential", "Cold weather"],
      metrics: [["Energy density", "Usually below Li-ion"], ["Safety", "Chemistry dependent"], ["Cost", "Potentially lower"], ["Cold weather", "Often promising"], ["Cycle life", "Developing"]],
      sections: [
        ["Overview", "Sodium-ion batteries may not replace lithium-ion, but they could fill a valuable role in low-cost and supply-stable storage."],
        ["Why it matters", "Sodium is more abundant and widely distributed, which may reduce long-term supply risk."],
        ["How it works", "Sodium ions move between electrodes. Because sodium ions are larger, the materials need dedicated design."],
        ["Advantages", "Abundant resources, diversified supply, and promising low-temperature behavior in some designs."],
        ["Limitations", "Energy density is usually lower than leading lithium-ion cells, and the supply chain is still maturing."],
        ["Applications", "Stationary storage, two-wheelers, entry-level EVs, and cold-weather applications."],
        ["Plain-language analogy", "It is like a route with easier-to-find raw materials: not always the longest range, but potentially cheaper and easier to scale."],
        ["Future outlook", "Hard carbon anodes, layered oxides, Prussian blue materials, and scale manufacturing are key."]
      ]
    }
  },
  {
    id: "solid", short: "Solid-state",
    zh: {
      title: "固态电池",
      desc: "用固态电解质替代传统液态电解液，有潜力提升安全和能量上限，但量产仍困难。",
      tags: ["发展中", "固态电解质", "高潜力"],
      metrics: [["能量密度", "有提升潜力"], ["安全性", "不等于绝对安全"], ["成本", "目前较高"], ["低温", "路线差异大"], ["寿命", "界面是关键"]],
      sections: [
        ["概览", "固态电池是一个技术家族，不是一种已经完全成熟的单一产品。"],
        ["核心材料", "关键是固态电解质，包括氧化物、硫化物和聚合物路线。"],
        ["工作原理", "离子仍在正负极之间移动，只是通道从液体变成固体。"],
        ["优点", "有机会减少易燃液态成分，并支持锂金属负极，提高能量上限。"],
        ["局限", "固-固界面接触、枝晶、压力控制、成本和制造良率仍然困难。"],
        ["应用", "未来高端电动车、航空、消费电子和高安全储能。"],
        ["普通人怎么理解", "液态电解液像水路，固态电解质像固体隧道。隧道更稳，但修好很难。"],
        ["未来方向", "硫化物电解质、锂金属负极、界面工程和量产工艺是核心。"]
      ]
    },
    en: {
      title: "Solid-state Battery",
      desc: "A battery family using solid electrolytes, with high potential but difficult manufacturing challenges.",
      tags: ["Developing", "Solid electrolyte", "High potential"],
      metrics: [["Energy density", "Potentially higher"], ["Safety", "Not absolute"], ["Cost", "Currently high"], ["Cold weather", "Route dependent"], ["Cycle life", "Interface critical"]],
      sections: [
        ["Overview", "Solid-state batteries are a family of technologies, not one fully mature product."],
        ["Core materials", "The key is the solid electrolyte, including oxide, sulfide, and polymer routes."],
        ["How it works", "Ions still move between electrodes, but the ion pathway changes from liquid to solid."],
        ["Advantages", "They may reduce flammable liquid content and support lithium-metal anodes for higher energy ceilings."],
        ["Limitations", "Solid-solid interfaces, dendrites, pressure control, cost, and manufacturing yield remain hard."],
        ["Applications", "Future premium EVs, aviation, electronics, and high-safety storage."],
        ["Plain-language analogy", "Liquid electrolyte is like a waterway. Solid electrolyte is like a tunnel: potentially safer, but hard to build perfectly."],
        ["Future outlook", "Sulfide electrolytes, lithium metal, interface engineering, and scalable manufacturing are central."]
      ]
    }
  },
  {
    id: "lead", short: "Lead-acid",
    zh: {
      title: "铅酸电池",
      desc: "历史悠久、成本低、瞬时大电流强，但重量大、能量密度低。",
      tags: ["低成本", "启动电流", "成熟回收"],
      metrics: [["能量密度", "约 30–50 Wh/kg"], ["安全性", "需规范处理"], ["成本", "很低"], ["低温", "启动能力下降"], ["寿命", "怕深度亏电"]],
      sections: [
        ["概览", "铅酸电池很重，却仍是汽车启动和备用电源中的成熟方案。"],
        ["工作原理", "放电时正负极都逐渐变成硫酸铅，充电时尽量恢复。"],
        ["优点", "便宜、可靠、大电流输出强，回收体系成熟。"],
        ["局限", "重量大、能量密度低，长期亏电会损伤寿命。"],
        ["应用", "燃油车启动电源、UPS、通信备用电源。"],
        ["普通人怎么理解", "它像一个很重但很有力的启动器，不适合长跑，却擅长瞬间发力。"]
      ]
    },
    en: {
      title: "Lead-acid Battery",
      desc: "A very mature, low-cost battery with strong starting current, but low energy density and high weight.",
      tags: ["Low cost", "Starting current", "Recycling"],
      metrics: [["Energy density", "About 30–50 Wh/kg"], ["Safety", "Needs proper handling"], ["Cost", "Very low"], ["Cold weather", "Starting drops"], ["Cycle life", "Deep discharge hurts"]],
      sections: [
        ["Overview", "Lead-acid is heavy, but it remains a mature solution for starting batteries and backup power."],
        ["How it works", "During discharge, both electrodes move toward lead sulfate; charging tries to reverse the reaction."],
        ["Advantages", "Cheap, reliable, strong high-current output, and mature recycling."],
        ["Limitations", "Heavy, low energy density, and damaged by long-term deep discharge."],
        ["Applications", "Vehicle starter batteries, UPS systems, and telecom backup power."],
        ["Plain-language analogy", "It is like a heavy but strong starter: not a distance runner, but good at instant force."]
      ]
    }
  },
  {
    id: "nimh", short: "NiMH",
    zh: {
      title: "镍氢电池 NiMH",
      desc: "耐用、宽温区、抗滥用能力强，曾广泛用于混合动力汽车和充电电池。",
      tags: ["耐用", "混动车", "宽温区"],
      metrics: [["能量密度", "中等"], ["安全性", "较稳健"], ["成本", "中等"], ["低温", "相对稳定"], ["寿命", "适合浅充浅放"]],
      sections: [
        ["概览", "镍氢电池不再是最轻的选择，但在可靠性和耐用性上仍有价值。"],
        ["工作原理", "负极储氢合金在充放电中吸收和释放氢。"],
        ["优点", "耐用、抗滥用、宽温区，适合混动车频繁小幅充放电。"],
        ["局限", "自放电较高，重量和体积大于现代锂离子。"],
        ["应用", "混合动力汽车、消费级充电电池和工业设备。"],
        ["普通人怎么理解", "它像稳健老队员，不一定最快，但抗压可靠。"]
      ]
    },
    en: {
      title: "Nickel-Metal Hydride NiMH",
      desc: "A durable, robust battery once widely used in hybrids and rechargeable consumer cells.",
      tags: ["Durable", "Hybrid vehicles", "Wide temperature"],
      metrics: [["Energy density", "Medium"], ["Safety", "Robust"], ["Cost", "Medium"], ["Cold weather", "Stable"], ["Cycle life", "Good shallow cycling"]],
      sections: [
        ["Overview", "NiMH is no longer the lightest choice, but it remains valuable for reliability and toughness."],
        ["How it works", "The metal hydride anode absorbs and releases hydrogen during cycling."],
        ["Advantages", "Durable, abuse-tolerant, wide temperature range, and good for hybrid shallow cycling."],
        ["Limitations", "Higher self-discharge and larger mass/volume than modern lithium-ion."],
        ["Applications", "Hybrid vehicles, rechargeable consumer cells, and industrial equipment."],
        ["Plain-language analogy", "It is like a steady veteran: not the fastest, but robust and dependable."]
      ]
    }
  }
];

const materials = [
  { id: "lithium", symbol: "Li", zh: ["锂", "轻、活泼，是锂离子电池高能量密度的重要来源，但资源和开采问题需要关注。"], en: ["Lithium", "Light and electrochemically active, lithium helps high energy density but raises supply and extraction questions."] },
  { id: "nickel", symbol: "Ni", zh: ["镍", "常用于高能量正极，提高容量，但高镍也带来稳定性和成本挑战。"], en: ["Nickel", "Used in high-energy cathodes to raise capacity, while increasing stability and cost challenges."] },
  { id: "cobalt", symbol: "Co", zh: ["钴", "帮助稳定层状正极结构，但价格、供应和伦理问题推动低钴化。"], en: ["Cobalt", "Helps stabilize layered cathodes, but cost, supply, and ethics push the industry toward lower cobalt."] },
  { id: "graphite", symbol: "C", zh: ["石墨", "最成熟的商业负极材料，稳定可靠，但理论容量有限。"], en: ["Graphite", "The most mature commercial anode material: stable and reliable, but limited in theoretical capacity."] },
  { id: "silicon", symbol: "Si", zh: ["硅", "容量潜力很高，但充放电膨胀明显，界面和寿命是难点。"], en: ["Silicon", "High capacity potential, but large expansion makes interfaces and lifetime difficult."] },
  { id: "lfp-material", symbol: "Fe", zh: ["LFP", "稳定、安全、成本友好的磷酸铁锂正极，是储能和大众电动车的重要材料。"], en: ["LFP", "A stable, safe, cost-friendly phosphate cathode for storage and mainstream EVs."] },
  { id: "electrolyte", symbol: "E", zh: ["电解质", "离子通道，影响快充、低温、寿命与安全。液态成熟，固态仍在发展。"], en: ["Electrolyte", "The ion pathway affecting fast charging, cold weather, life, and safety. Liquid is mature; solid is developing."] }
];

const futureItems = [
  { zh: ["固态电池", "有望减少易燃液体并提升能量上限，但界面、成本和量产仍是核心挑战。"], en: ["Solid-state batteries", "May reduce flammable liquid content and raise energy ceilings, but interface, cost, and manufacturing remain hard."] },
  { zh: ["钠离子电池", "可能在低成本储能、两轮车和入门级车辆中发挥作用，而不是简单取代锂电。"], en: ["Sodium-ion batteries", "Could matter in low-cost storage, two-wheelers, and entry EVs rather than simply replacing lithium-ion."] },
  { zh: ["硅负极", "提高容量的潜力很大，但必须控制体积膨胀和界面老化。"], en: ["Silicon anodes", "Large capacity potential, but volume expansion and interface aging must be controlled."] },
  { zh: ["锂硫电池", "理论能量密度高、硫资源丰富，但穿梭效应和循环寿命仍是难点。"], en: ["Lithium-sulfur", "High theoretical energy and abundant sulfur, but shuttle effects and cycle life remain difficult."] },
  { zh: ["锂空气电池", "理论上非常高的能量密度，但现实反应环境和寿命挑战巨大。"], en: ["Lithium-air", "Very high theoretical energy density, but real reaction environments and lifetime are major challenges."] },
  { zh: ["智能能量管理", "AI 与控制算法可以帮助预测热状态、寿命和充电策略，但必须以安全验证为基础。"], en: ["AI energy management", "AI and control algorithms can help predict heat, life, and charging strategy, but must be grounded in safety validation."] }
];

const packItems = [
  { id: "cell", zh: ["电芯", "最小电化学单元。正极、负极、电解质和隔膜决定它的电压、容量、寿命和安全边界。"], en: ["Cell", "The smallest electrochemical unit. Cathode, anode, electrolyte, and separator define voltage, capacity, life, and safety limits."] },
  { id: "module", zh: ["模组", "把多个电芯进行电气和机械组合，便于装配、采样、固定和散热。"], en: ["Module", "Groups multiple cells electrically and mechanically for assembly, sensing, support, and heat spreading."] },
  { id: "pack", zh: ["电池包", "把电芯或模组、BMS、冷却、壳体和高压安全件整合成整车可用系统。"], en: ["Pack", "Combines cells or modules with BMS, cooling, enclosure, and high-voltage safety components."] },
  { id: "thermal", zh: ["热管理", "让电池不过冷、不过热，并尽量减少不同电芯之间的温差。"], en: ["Thermal management", "Keeps cells from becoming too cold or too hot and reduces temperature differences across the pack."] },
  { id: "bms", zh: ["BMS", "监测电压、电流、温度，估算 SOC/SOH，并在异常时保护电池包。"], en: ["BMS", "Monitors voltage, current, and temperature, estimates SOC/SOH, and protects the pack under abnormal conditions."] },
  { id: "safety", zh: ["安全系统", "保险丝、接触器、绝缘、泄压和隔热结构共同降低风险。"], en: ["Safety systems", "Fuses, contactors, insulation, venting, and thermal barriers work together to reduce risk."] }
];

const researchItems = [
  {
    zh: ["为什么钠离子值得关注？", "我不认为钠离子一定要“取代”锂离子。更有价值的问题是：在低成本储能、入门级车辆和寒冷地区，它能不能成为更合适的材料选择？"],
    en: ["Why sodium-ion matters", "I do not think sodium-ion must “replace” lithium-ion. The more useful question is whether it can be the better material choice for low-cost storage, entry vehicles, and cold regions."]
  },
  {
    zh: ["冬季续航为什么下降？", "低温让离子移动变慢、内阻升高，同时座舱和电池加热也要消耗能量。所以冬季续航既是材料问题，也是热管理问题。"],
    en: ["Why winter range drops", "Low temperature slows ion movement and raises internal resistance, while cabin and battery heating consume energy. Winter range is both a materials problem and a thermal-management problem."]
  },
  {
    zh: ["电池余热能否再利用？", "我曾想过电池包和功率电子产生的热量能否作为冬季热源之一。这个方向有吸引力，但必须保证温度、时机、安全和寿命都被严格控制。"],
    en: ["Can battery waste heat be reused?", "I have wondered whether heat from the battery pack and power electronics could become part of winter heating. The direction is attractive, but temperature, timing, safety, and lifetime must be controlled carefully."]
  }
];

const knowledgeEntries = [
  ...batteries.map((battery) => ({ id: battery.id, category: { zh: "电池类型", en: "Battery type" }, ...battery })),
  ...materials.map((material) => ({
    id: material.id,
    category: { zh: "材料科学", en: "Materials science" },
    short: material.symbol,
    zh: {
      title: material.zh[0],
      desc: material.zh[1],
      tags: ["材料", material.symbol],
      metrics: [],
      sections: [
        ["它在电池里做什么", material.zh[1]],
        ["为什么重要", "电池材料会影响能量密度、功率、寿命、安全和成本。单个材料的提升，往往会带来新的制造或稳定性问题。"],
        ["普通人怎么理解", "材料像电池的体质。体质不同，同样的系统会表现出完全不同的耐力、速度和安全边界。"]
      ]
    },
    en: {
      title: material.en[0],
      desc: material.en[1],
      tags: ["Material", material.symbol],
      metrics: [],
      sections: [
        ["Role in a battery", material.en[1]],
        ["Why it matters", "Battery materials affect energy density, power, life, safety, and cost. Improving one material often creates new manufacturing or stability questions."],
        ["Plain-language analogy", "Materials are like the battery's physical constitution. Different materials give the same system different endurance, speed, and safety limits."]
      ]
    }
  })),
  { id: "cathode", category: { zh: "电池结构", en: "Battery structure" }, short: "Cathode", zh: { title: "正极材料", desc: "通常决定电池电压、容量、安全边界和成本。", tags: ["正极", "材料"], metrics: [], sections: [["基本概念", "正极是锂离子放电时返回的位置，材料体系会强烈影响电池性能。"], ["常见类型", "LFP、NCM/NCA、LMO、LCO 都是常见正极路线。"], ["普通人怎么理解", "正极像主要能量仓库，结构不同，能装多少和稳不稳都不同。"]] }, en: { title: "Cathode Material", desc: "Often determines voltage, capacity, safety limits, and cost.", tags: ["Cathode", "Material"], metrics: [], sections: [["Concept", "The cathode is where lithium ions return during discharge, and its chemistry strongly shapes battery performance."], ["Common types", "LFP, NCM/NCA, LMO, and LCO are common cathode routes."], ["Analogy", "The cathode is like the main energy warehouse: its structure affects capacity and stability."]] } },
  { id: "anode", category: { zh: "电池结构", en: "Battery structure" }, short: "Anode", zh: { title: "负极材料", desc: "充电时接收锂离子，常见材料是石墨，硅和锂金属是重要方向。", tags: ["负极", "石墨", "硅"], metrics: [], sections: [["基本概念", "负极像离子停车位，充电时锂离子进入，放电时离开。"], ["挑战", "容量、体积变化、快充和界面稳定需要平衡。"], ["普通人怎么理解", "停车位越多容量越高，但地面不能被反复撑裂。"]] }, en: { title: "Anode Material", desc: "Receives lithium ions during charging. Graphite is common; silicon and lithium metal are important directions.", tags: ["Anode", "Graphite", "Silicon"], metrics: [], sections: [["Concept", "The anode is like a parking area for ions during charging."], ["Challenge", "Capacity, volume change, fast charging, and interface stability must be balanced."], ["Analogy", "More parking spots increase capacity, but the floor must not crack from repeated use."]] } },
  { id: "electrolyte", category: { zh: "电池结构", en: "Battery structure" }, short: "Electrolyte", zh: { title: "电解液 / 电解质", desc: "让离子在正负极之间移动，是电池内部的离子通道。", tags: ["离子传导", "安全"], metrics: [], sections: [["基本概念", "电解质传导离子，但不希望电子在内部直接通过。"], ["为什么重要", "它影响快充、低温、寿命和安全。"], ["普通人怎么理解", "它像电池内部给离子走的高速路。"]] }, en: { title: "Electrolyte", desc: "Allows ions to move between electrodes: the ion pathway inside a battery.", tags: ["Ion transport", "Safety"], metrics: [], sections: [["Concept", "The electrolyte conducts ions, while electrons should travel through the external circuit."], ["Why it matters", "It affects fast charging, cold weather, life, and safety."], ["Analogy", "It is the highway for ions inside the battery."]] } },
  { id: "separator", category: { zh: "电池结构", en: "Battery structure" }, short: "Separator", zh: { title: "隔膜", desc: "阻止正负极直接接触，同时允许离子通过。", tags: ["安全", "绝缘"], metrics: [], sections: [["基本概念", "隔膜是一层多孔绝缘膜。"], ["风险", "破损、收缩或杂质刺穿可能导致内部短路。"], ["普通人怎么理解", "它像带小孔的绝缘墙。"]] }, en: { title: "Separator", desc: "Prevents direct electrode contact while allowing ions to pass.", tags: ["Safety", "Insulation"], metrics: [], sections: [["Concept", "The separator is a porous insulating membrane."], ["Risk", "Damage, shrinkage, or contamination can cause internal short circuits."], ["Analogy", "It is like an insulating wall with tiny ion pathways."]] } },
  { id: "bms", category: { zh: "电池结构", en: "Battery structure" }, short: "BMS", zh: { title: "电池管理系统 BMS", desc: "监测并保护电池包，估算 SOC 和 SOH。", tags: ["控制", "安全"], metrics: [], sections: [["基本概念", "BMS 是电池包的大脑和安全员。"], ["功能", "监测电压、电流、温度，控制保护和均衡。"], ["普通人怎么理解", "它像电池的油表、医生和安全员。"]] }, en: { title: "Battery Management System BMS", desc: "Monitors and protects the pack while estimating SOC and SOH.", tags: ["Control", "Safety"], metrics: [], sections: [["Concept", "The BMS is the pack's brain and safety officer."], ["Function", "It monitors voltage, current, temperature, protection, and balancing."], ["Analogy", "It is the battery's fuel gauge, doctor, and safety officer."]] } },
  { id: "energy-density", category: { zh: "性能指标", en: "Performance term" }, short: "Wh/kg", zh: { title: "能量密度", desc: "单位质量或体积能储存多少能量，常与续航相关。", tags: ["Wh/kg", "续航"], metrics: [], sections: [["基本概念", "质量能量密度看每千克储能多少，体积能量密度看每升储能多少。"], ["注意", "能量密度高不代表一定最好，安全、寿命和成本同样重要。"], ["普通人怎么理解", "像背包单位重量能装多少食物。"]] }, en: { title: "Energy Density", desc: "How much energy a battery stores per mass or volume, often related to range.", tags: ["Wh/kg", "Range"], metrics: [], sections: [["Concept", "Gravimetric energy density measures energy per kg; volumetric energy density measures energy per liter."], ["Caution", "Higher energy density is not automatically best; safety, life, and cost also matter."], ["Analogy", "It is like how much food a backpack holds per unit weight."]] } },
  { id: "soc", category: { zh: "性能指标", en: "Performance term" }, short: "SOC", zh: { title: "SOC 荷电状态", desc: "表示电池当前还剩多少可用电量，通常用百分比显示。", tags: ["剩余电量", "估算"], metrics: [], sections: [["基本概念", "SOC 类似电量百分比，但它是 BMS 根据模型估算的。"], ["为什么不简单", "温度、老化和电流都会影响估算。"], ["普通人怎么理解", "SOC 像汽车油表。"]] }, en: { title: "SOC State of Charge", desc: "An estimate of usable charge remaining, usually shown as a percentage.", tags: ["Remaining charge", "Estimate"], metrics: [], sections: [["Concept", "SOC is like a battery percentage, but it is estimated by the BMS."], ["Why it is hard", "Temperature, aging, and current affect the estimate."], ["Analogy", "SOC is like a fuel gauge."]] } },
  { id: "soh", category: { zh: "性能指标", en: "Performance term" }, short: "SOH", zh: { title: "SOH 健康状态", desc: "表示电池相对于新电池的健康程度。", tags: ["老化", "容量衰减"], metrics: [], sections: [["基本概念", "SOH 不是剩余电量，而是电池老化程度。"], ["影响因素", "高温、快充、长期满电和深度放电都会影响 SOH。"], ["普通人怎么理解", "SOC 是杯子里还有多少水，SOH 是杯子有没有变小。"]] }, en: { title: "SOH State of Health", desc: "An estimate of battery aging compared with a new battery.", tags: ["Aging", "Capacity fade"], metrics: [], sections: [["Concept", "SOH is not remaining charge; it is the battery's aging condition."], ["Factors", "Heat, fast charging, long high SOC, and deep discharge affect SOH."], ["Analogy", "SOC is how much water is in the cup; SOH is whether the cup has shrunk."]] } }
];

const knowledgeMap = new Map(knowledgeEntries.map((entry) => [entry.id, entry]));

const comparisonData = {
  lead: { color: "#777", midpoint: 40, scores: [2, 10, 7, 5, 4, 7] },
  nimh: { color: "#a8a8a8", midpoint: 90, scores: [4, 6, 8, 6, 5, 8] },
  lfp: { color: "#fff", midpoint: 125, scores: [6, 8, 9, 9, 8, 6] },
  nmc: { color: "#d8d8d8", midpoint: 240, scores: [9, 5, 6, 6, 8, 5] },
  sodium: { color: "#b8b8b8", midpoint: 140, scores: [5, 8, 8, 7, 7, 9] },
  solid: { color: "#8fc7ff", midpoint: 330, scores: [10, 2, 8, 7, 8, 6] }
};

const quizData = [
  {
    zh: { q: "Wh 衡量什么？", options: ["电阻", "储存或释放的能量", "仅充电速度", "电池温度"], exp: "Wh 是能量单位，把功率和时间联系起来。" },
    en: { q: "What does Wh measure?", options: ["Electrical resistance", "Stored or delivered energy", "Charging speed only", "Battery temperature"], exp: "Wh is a unit of energy that connects power and time." },
    answer: 1
  },
  {
    zh: { q: "现代电动车动力电池常用哪一大类？", options: ["锂离子电池", "碳性锌锰电池", "氧化银电池", "一次碱性电池"], exp: "目前主流电动车通常使用 LFP 或三元等锂离子体系。" },
    en: { q: "Which battery family is commonly used in modern EV traction packs?", options: ["Lithium-ion", "Zinc-carbon", "Silver oxide", "Primary alkaline"], exp: "Most current EVs use lithium-ion families such as LFP or NCM/NCA." },
    answer: 0
  },
  {
    zh: { q: "为什么低温会影响电动车续航？", options: ["车轮变小", "电子消失", "离子移动变慢且加热耗电", "电池包变重"], exp: "低温提高内阻、减慢反应，同时座舱和电池加热也会耗能。" },
    en: { q: "Why can cold weather reduce EV range?", options: ["The wheels become smaller", "Electrons stop existing", "Ion movement slows and heating uses energy", "The pack gains mass"], exp: "Cold increases resistance, slows reactions, and heating consumes energy." },
    answer: 2
  },
  {
    zh: { q: "电解质的主要作用是什么？", options: ["在电极之间传递离子", "支撑车身", "测量胎压", "产生机械制动"], exp: "电解质让离子在内部移动，电子则通过外部电路移动。" },
    en: { q: "What is a main role of the electrolyte?", options: ["Carry ions between electrodes", "Hold the vehicle body together", "Measure tire pressure", "Create mechanical braking"], exp: "The electrolyte lets ions move internally while electrons move through the external circuit." },
    answer: 0
  },
  {
    zh: { q: "BMS 是什么？", options: ["电池材料标准", "电池管理系统", "平衡电机供电", "基础模组结构"], exp: "BMS 监测并控制电压、电流、温度和状态估算。" },
    en: { q: "What does BMS stand for?", options: ["Battery Material Standard", "Battery Management System", "Balanced Motor Supply", "Basic Module Structure"], exp: "A BMS monitors and controls voltage, current, temperature, and state estimation." },
    answer: 1
  }
];

function t(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], ui[currentLang]) || path;
}

function entryText(entry) {
  return entry[currentLang];
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "zh";
  localStorage.setItem("battery-lab-language", currentLang);
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = currentLang === "zh" ? "Battery Lab — 电池科学博物馆" : "Battery Lab — Battery Science Museum";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (node.tagName === "OPTION") node.textContent = value;
    else node.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLang));
  const knowledgeSearch = document.getElementById("knowledge-search");
  if (knowledgeSearch) knowledgeSearch.placeholder = t("knowledge.placeholder");
  renderAll();
  if (currentModalId) openKnowledge(currentModalId, false);
}

function renderAll() {
  renderStats();
  renderBatteries();
  renderSelectors();
  renderMaterials();
  renderPackTabs();
  renderFuture();
  renderKnowledgeResults();
  renderQuiz();
  renderResearch();
  updateCharts();
}

function renderStats() {
  document.getElementById("impact-stats").innerHTML = stats.map((stat) => `<article><strong>${stat.value}</strong><span>${stat[currentLang]}</span></article>`).join("");
}

function renderBatteries() {
  document.getElementById("battery-rail").innerHTML = batteries.map((battery, index) => {
    const text = entryText(battery);
    return `
      <article class="battery-card" data-open-knowledge="${battery.id}">
        <div><span class="battery-index">${String(index + 1).padStart(2, "0")}</span></div>
        <div>
          <h3>${text.title}</h3>
          <p>${text.desc}</p>
          <div class="battery-meta">${text.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <button class="text-link" type="button"><span>${t("labels.learnMore")}</span><i>→</i></button>
      </article>
    `;
  }).join("");
}

function renderSelectors() {
  const defaults = new Set(["lfp", "nmc", "sodium"]);
  const selected = new Set([...document.querySelectorAll("#battery-selectors input:checked")].map((input) => input.value));
  const active = selected.size ? selected : defaults;
  document.getElementById("battery-selectors").innerHTML = batteries.map((battery) => `
    <label class="selector-item">
      <input type="checkbox" value="${battery.id}" ${active.has(battery.id) ? "checked" : ""}>
      <span class="selector-dot"></span>
      <span>${battery.short}</span>
      <span class="selector-check"></span>
    </label>
  `).join("");
}

function selectedIds() {
  return [...document.querySelectorAll("#battery-selectors input:checked")].map((input) => input.value);
}

function renderMaterials() {
  document.getElementById("material-mosaic").innerHTML = materials.map((material) => {
    const [title, body] = material[currentLang];
    return `<article class="material-card" data-open-knowledge="${material.id}"><div class="material-symbol">${material.symbol}</div><h3>${title}</h3><p>${body}</p><button class="text-link" type="button"><span>${t("labels.learnMore")}</span><i>→</i></button></article>`;
  }).join("");
}

function renderPackTabs(active = document.querySelector(".pack-tab.active")?.dataset.pack || "cell") {
  document.getElementById("pack-tabs").innerHTML = packItems.map((item) => `<button class="pack-tab ${item.id === active ? "active" : ""}" type="button" data-pack="${item.id}">${item[currentLang][0]}</button>`).join("");
  renderPackDetail(active);
}

function renderPackDetail(id) {
  const item = packItems.find((pack) => pack.id === id) || packItems[0];
  const [title, body] = item[currentLang];
  document.getElementById("pack-detail").innerHTML = `<h3>${title}</h3><p>${body}</p>`;
  document.querySelectorAll(".pack-tab").forEach((button) => button.classList.toggle("active", button.dataset.pack === id));
}

function renderFuture() {
  document.getElementById("future-grid").innerHTML = futureItems.map((item, index) => {
    const [title, body] = item[currentLang];
    return `<article class="future-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${body}</p></article>`;
  }).join("");
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function searchable(entry) {
  const data = entryText(entry);
  return normalize([data.title, data.desc, entry.short, ...(data.tags || []), ...(data.sections || []).flat()].join(" "));
}

function renderKnowledgeResults() {
  const query = normalize(document.getElementById("knowledge-search")?.value || "");
  const entries = knowledgeEntries
    .map((entry, index) => {
      const data = entryText(entry);
      const title = normalize(data.title);
      const short = normalize(entry.short);
      let score = 0;
      if (query && title === query) score += 100;
      if (query && short === query) score += 90;
      if (query && title.includes(query)) score += 60;
      if (query && short.includes(query)) score += 50;
      return { entry, index, score };
    })
    .filter(({ entry }) => !query || searchable(entry).includes(query))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, query ? 12 : 8);
  document.getElementById("knowledge-results").innerHTML = entries.length
    ? entries.map(({ entry }) => {
      const data = entryText(entry);
      return `<button class="knowledge-result" type="button" data-open-knowledge="${entry.id}"><span>${entry.category[currentLang]}</span><strong>${data.title}</strong><small>${data.desc}</small></button>`;
    }).join("")
    : `<p class="empty-state">${t("knowledge.empty")}</p>`;
}

function openKnowledge(id, focus = true) {
  const entry = knowledgeMap.get(id);
  if (!entry) return;
  currentModalId = id;
  const data = entryText(entry);
  document.getElementById("modal-category").textContent = entry.category[currentLang];
  document.getElementById("knowledge-title").textContent = data.title;
  document.getElementById("modal-summary").textContent = data.desc;
  document.getElementById("modal-tags").innerHTML = (data.tags || []).map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("modal-metrics").innerHTML = (data.metrics || []).map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.getElementById("modal-body").innerHTML = (data.sections || []).map(([heading, body]) => `<section class="modal-block"><h3>${heading}</h3><p>${body}</p></section>`).join("");
  const modal = document.getElementById("knowledge-modal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  if (focus) modal.querySelector(".modal-close").focus({ preventScroll: true });
}

function closeModal() {
  document.getElementById("knowledge-modal").hidden = true;
  document.body.classList.remove("modal-open");
  currentModalId = null;
}

function renderQuiz() {
  document.getElementById("quiz-questions").innerHTML = quizData.map((item, index) => {
    const data = item[currentLang];
    return `
      <article class="quiz-question" data-question="${index}">
        <h3>${String(index + 1).padStart(2, "0")} · ${data.q}</h3>
        <div class="quiz-options">${data.options.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="q-${index}" value="${optionIndex}"><span>${option}</span></label>`).join("")}</div>
        <p class="quiz-explanation" hidden></p>
      </article>
    `;
  }).join("");
  document.getElementById("quiz-result").innerHTML = "";
}

function renderResearch() {
  document.getElementById("research-list").innerHTML = researchItems.map((item, index) => {
    const [title, body] = item[currentLang];
    return `<article class="research-note"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${body}</p></article>`;
  }).join("");
}

function setupCharts() {
  if (typeof Chart === "undefined") {
    document.querySelectorAll(".chart-box").forEach((box) => { box.innerHTML = `<p class="empty-state">${t("labels.chartsFail")}</p>`; });
    return;
  }
  Chart.defaults.color = "#aaa";
  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
  const ids = selectedIds();
  radarChart = new Chart(document.getElementById("radar-chart"), {
    type: "radar",
    data: radarData(ids),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { r: { min: 0, max: 10, ticks: { display: false }, grid: { color: "rgba(255,255,255,.12)" }, angleLines: { color: "rgba(255,255,255,.12)" }, pointLabels: { color: "#b8b8b8", font: { size: 10 } } } },
      plugins: { legend: { position: "bottom", labels: { boxWidth: 10, boxHeight: 2 } }, tooltip: { backgroundColor: "#111" } }
    }
  });
  barChart = new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: barData(ids),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: { x: { beginAtZero: true, grid: { color: "rgba(255,255,255,.1)" }, title: { display: true, text: t("labels.whkg") } }, y: { grid: { display: false } } },
      plugins: { legend: { display: false }, tooltip: { backgroundColor: "#111" } }
    }
  });
}

function radarData(ids) {
  const labels = currentLang === "zh" ? ["能量密度", "成本", "安全性", "循环寿命", "快充", "低温"] : ["Energy Density", "Cost", "Safety", "Cycle Life", "Charging", "Cold Weather"];
  return {
    labels,
    datasets: ids.map((id) => ({
      label: batteries.find((battery) => battery.id === id)?.short || id,
      data: comparisonData[id].scores,
      borderColor: comparisonData[id].color,
      backgroundColor: `${comparisonData[id].color}22`,
      pointBackgroundColor: comparisonData[id].color,
      borderWidth: 1.6,
      pointRadius: 2
    }))
  };
}

function barData(ids) {
  return {
    labels: ids.map((id) => batteries.find((battery) => battery.id === id)?.short || id),
    datasets: [{ data: ids.map((id) => comparisonData[id].midpoint), backgroundColor: ids.map((id) => comparisonData[id].color), barThickness: 16 }]
  };
}

function updateCharts() {
  if (!radarChart || !barChart) return;
  const ids = selectedIds();
  radarChart.data = radarData(ids);
  barChart.data = barData(ids);
  barChart.options.scales.x.title.text = t("labels.whkg");
  radarChart.update();
  barChart.update();
}

function number(value) {
  return new Intl.NumberFormat(currentLang === "zh" ? "zh-CN" : "en-US", { maximumFractionDigits: 1 }).format(value);
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
      error.textContent = t("calc.invalidEnergy");
      return;
    }
    const energy = voltage * capacity;
    error.textContent = "";
    result.querySelector("strong").textContent = `${number(energy)} Wh`;
    result.querySelector("p").textContent = t("calc.energyText").replace("{value}", number(energy));
  });
  energyForm.addEventListener("reset", () => setTimeout(() => {
    document.getElementById("energy-error").textContent = "";
    document.querySelector("#energy-result strong").textContent = "— Wh";
    document.querySelector("#energy-result p").textContent = t("calc.energyHint");
  }));

  rangeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const size = Number(document.getElementById("battery-size").value);
    const consumption = Number(document.getElementById("consumption").value);
    const factor = Number(document.getElementById("temperature").value);
    const error = document.getElementById("range-error");
    const result = document.getElementById("range-result");
    if (!Number.isFinite(size) || !Number.isFinite(consumption) || size <= 0 || consumption <= 0) {
      error.textContent = t("calc.invalidRange");
      return;
    }
    const base = size * 1000 / consumption;
    const adjusted = base * factor;
    error.textContent = "";
    result.querySelector("strong").textContent = `${number(adjusted)} km`;
    result.querySelector("p").textContent = t("calc.rangeText").replace("{base}", number(base)).replace("{factor}", Math.round(factor * 100));
  });
  rangeForm.addEventListener("reset", () => setTimeout(() => {
    document.getElementById("range-error").textContent = "";
    document.querySelector("#range-result strong").textContent = "— km";
    document.querySelector("#range-result p").textContent = t("calc.rangeHint");
  }));
}

function setupQuiz() {
  document.getElementById("quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    quizData.forEach((item, index) => {
      const question = document.querySelector(`[data-question="${index}"]`);
      const selected = question.querySelector("input:checked");
      const data = item[currentLang];
      const correct = selected && Number(selected.value) === item.answer;
      if (correct) score += 1;
      const explanation = question.querySelector(".quiz-explanation");
      explanation.hidden = false;
      explanation.textContent = correct ? `${t("quiz.correct")} ${data.exp}` : `${t("quiz.answer")}: ${data.options[item.answer]}。 ${data.exp}`;
    });
    document.getElementById("quiz-result").innerHTML = `<strong>${score} / ${quizData.length}</strong> — ${score === quizData.length ? t("quiz.scorePerfect") : t("quiz.scoreAgain")}`;
  });
  document.getElementById("quiz-restart").addEventListener("click", () => {
    document.getElementById("quiz-form").reset();
    document.querySelectorAll(".quiz-explanation").forEach((node) => { node.hidden = true; node.textContent = ""; });
    document.getElementById("quiz-result").innerHTML = "";
  });
}

function setupInteractions() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 12), { passive: true });
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
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open-knowledge]");
    if (opener) openKnowledge(opener.dataset.openKnowledge);
    if (event.target.closest("[data-close-modal]")) closeModal();
    const packButton = event.target.closest("[data-pack]");
    if (packButton) renderPackDetail(packButton.dataset.pack);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  document.getElementById("knowledge-search").addEventListener("input", renderKnowledgeResults);
  document.getElementById("battery-selectors").addEventListener("change", (event) => {
    const checked = [...document.querySelectorAll("#battery-selectors input:checked")];
    if (checked.length > 4) event.target.checked = false;
    if (checked.length === 0) event.target.checked = true;
    updateCharts();
  });
  document.querySelector(".rail-prev").addEventListener("click", () => document.getElementById("battery-rail").scrollBy({ left: -360, behavior: "smooth" }));
  document.querySelector(".rail-next").addEventListener("click", () => document.getElementById("battery-rail").scrollBy({ left: 360, behavior: "smooth" }));
}

function setupReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function init() {
  setLanguage(currentLang);
  setupInteractions();
  setupCalculators();
  setupQuiz();
  setupReveal();
  setupCharts();
}

document.addEventListener("DOMContentLoaded", init);
