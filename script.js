"use strict";

const state = {
  lang: localStorage.getItem("battery-lab-lang") || "zh",
  activeLayer: "cathode",
  ionMode: "charge",
  activeSystem: "cell",
  thermalMode: "normal",
  materialFilter: "all",
  materialQuery: "",
  radarChart: null,
  barChart: null
};

const i18n = {
  zh: {
    nav: { overview: "概览", explorer: "探索器", types: "电池体系", compare: "对比", tools: "工具", materials: "材料", research: "研究", search: "搜索" },
    hero: {
      label: "材料科学 · 电动车系统",
      title: "能源储存研究",
      subtitle: "从材料、结构到整车系统，理解电池为什么工作、为什么失效、又如何变得更安全。",
      start: "开始",
      compare: "对比",
      tag1: "材料科学",
      tag2: "电动车系统",
      tag3: "互动学习"
    },
    overview: {
      title: "为什么电池重要？",
      body: "电池把材料科学、电化学、安全工程和能源系统连在一起。它不是一个“装电的盒子”，而是现代交通、电子设备和可再生能源背后的基础设施。",
      imageCaption: "电池不只存在于实验室。真正的工程价值，要在制造、装配和质量控制中被验证。"
    },
    explorer: {
      title: "拆开一颗电池，看见材料如何工作。",
      body: "点击每一层，了解它负责什么、为什么重要、工程难点在哪里，以及常见材料是什么。"
    },
    ion: {
      eyebrow: "离子运动",
      title: "充电和放电，其实是离子在两端之间往返。",
      charge: "充电",
      discharge: "放电",
      chargeText: "充电时，外部电源把锂离子从正极“推”到负极，电子从外电路补偿电荷。这个动画是简化模型。",
      dischargeText: "放电时，锂离子回到正极，电子通过外部电路做功，为设备或电机提供能量。"
    },
    types: {
      title: "不同电池体系，不同工程取舍。",
      body: "有些体系追求高能量密度，有些追求安全寿命，有些追求成本和资源稳定。点击卡片查看完整知识页。",
      tableTitle: "快速建立全局认知",
      tableNote: "范围是教育用途的典型估计，真实数值取决于设计、供应商和测试条件。",
      deepTitle: "继续往下看：真正的差异来自材料结构",
      deepBody: "同样叫“锂电池”，内部材料、离子通道、热管理和封装方式可能完全不同。下面这几组概念，是读懂电池新闻和技术路线的入口。"
    },
    compare: {
      title: "用图表看懂取舍。",
      body: "最多选择 4 种技术。雷达图显示相对评分，柱状图显示典型能量密度中值。所有分数都是简化学习模型，不是工业规格。",
      select: "选择技术",
      hint: "相对评分：1 较低，10 较高。成本分数越高表示越经济。",
      radar: "综合雷达图",
      bar: "典型能量密度",
      insightTitle: "对比解读",
      max: "最多同时选择 4 种技术。"
    },
    pack: {
      title: "从电芯到整车，电池才真正变成系统。",
      body: "电芯只是起点。模组、电池包、BMS、热管理和整车能耗共同决定真实续航、安全和寿命。",
      imageCaption: "从电芯到电池包，结构、热管理和安全设计共同决定它能否进入真实车辆。"
    },
    thermal: {
      eyebrow: "冬季续航",
      title: "为什么电动车冬天续航会下降？",
      normal: "常温",
      cold: "寒冷",
      veryCold: "严寒"
    },
    tools: {
      title: "把公式变成直觉。",
      body: "两个小工具帮助你快速理解 Wh、kWh、能耗和温度折减之间的关系。"
    },
    calc: {
      energyTitle: "电池能量计算器",
      energyBody: "输入电压和容量，估算储存能量。",
      voltage: "电压 V",
      capacity: "容量 Ah",
      rangeTitle: "电动车续航计算器",
      rangeBody: "输入电池容量、能耗和温度模式，估算续航。",
      size: "电池容量 kWh",
      consumption: "能耗 Wh/km",
      temp: "温度模式",
      invalidEnergy: "请输入大于 0 的电压和容量。",
      invalidRange: "请输入大于 0 的电池容量和能耗。",
      energyExplain: "理论上约等于 {kwh} kWh。也就是用 {wh} W 的功率持续 1 小时，但真实可用能量会受效率和保护策略影响。",
      rangeExplain: "常温基础续航约 {base} km；当前温度模型后约 {adjusted} km。真实值还会受车速、空调、轮胎、地形和电池健康影响。"
    },
    materials: {
      title: "电池里面到底有什么？",
      body: "材料库不是简单罗列名词，而是解释每种材料在电池中的角色、优势、挑战和应用位置。",
      search: "搜索材料或术语",
      all: "全部",
      empty: "没有找到匹配的材料。换一个关键词试试。"
    },
    research: {
      title: "我的研究思考。",
      body: "这部分保留学生项目的真实感：不是把资料复制成百科，而是记录我如何理解材料、热管理和系统工程之间的联系。",
      imageCaption: "材料问题最终会进入产业系统：产线、供应链、热管理、安全验证和整车设计一起决定技术能走多远。"
    },
    timeline: { title: "电池技术时间线" },
    quiz: {
      title: "知识检查。",
      body: "答题后会看到解释。目标不是考倒你，而是确认关键概念真的连起来了。",
      submit: "提交答案",
      reset: "重新开始",
      score: "得分 {score}/{total}",
      choose: "请选择一个答案。"
    },
    search: { title: "搜索整个知识库", empty: "没有找到相关内容。" },
    footer: {
      body: "一个关于电池技术、材料科学与能源系统的学生互动学习项目。",
      built: "Terry Wang 制作",
      materials: "材料库",
      quiz: "知识小测",
      top: "回到顶部 ↑"
    },
    labels: {
      learn: "了解更多",
      role: "作用",
      advantage: "优势",
      challenge: "挑战",
      example: "例子",
      overview: "概览",
      works: "工作原理",
      strengths: "主要优点",
      weaknesses: "主要局限",
      applications: "应用场景",
      analogy: "普通人怎么理解",
      future: "未来方向",
      density: "能量密度",
      safety: "安全",
      cost: "成本",
      cycles: "寿命",
      cold: "低温",
      charging: "快充"
    }
  },
  en: {
    nav: { overview: "Overview", explorer: "Explorer", types: "Chemistries", compare: "Compare", tools: "Tools", materials: "Materials", research: "Research", search: "Search" },
    hero: {
      label: "Materials Science / EV Systems",
      title: "Battery Lab",
      subtitle: "A focused journey from materials to cells, packs, safety, and electric vehicles.",
      start: "Explore",
      compare: "Compare",
      tag1: "Materials Science",
      tag2: "EV Systems",
      tag3: "Interactive Learning"
    },
    overview: {
      title: "Why do batteries matter?",
      body: "Batteries connect materials science, electrochemistry, safety engineering, and energy systems. They are not just boxes that store electricity; they are infrastructure behind modern transport, electronics, and renewable energy.",
      imageCaption: "Batteries do not live only in labs. Their engineering value must survive manufacturing, assembly, and quality control."
    },
    explorer: {
      title: "Open a cell and see how materials work.",
      body: "Click each layer to learn what it does, why it matters, one engineering challenge, and one example material."
    },
    ion: {
      eyebrow: "Ion movement",
      title: "Charging and discharging are ion shuttles between two sides.",
      charge: "Charging",
      discharge: "Discharging",
      chargeText: "During charging, an external power source pushes lithium ions from the cathode into the anode while electrons balance charge through the external circuit. This is simplified.",
      dischargeText: "During discharging, lithium ions return to the cathode while electrons do useful work through the external circuit."
    },
    types: {
      title: "Different chemistries, different trade-offs.",
      body: "Some chemistries chase high energy density, some prioritize safety and life, and others focus on cost and resource stability. Open each card for a full explanation.",
      tableTitle: "Build a quick mental map",
      tableNote: "Ranges are typical educational estimates. Real values depend on design, supplier, and testing conditions.",
      deepTitle: "Look deeper: the real difference comes from materials",
      deepBody: "Many batteries share the lithium-ion name, but their crystal structure, ion pathway, thermal behavior, and packaging strategy can be very different. These concepts help decode real battery technology news."
    },
    compare: {
      title: "See trade-offs through charts.",
      body: "Select up to 4 technologies. The radar chart shows relative scores and the bar chart shows typical energy-density midpoint. All scores are simplified educational estimates, not industrial specifications.",
      select: "Select technologies",
      hint: "Relative score: 1 = low, 10 = high. For cost, higher means more affordable.",
      radar: "Balanced radar",
      bar: "Typical energy density",
      insightTitle: "Comparison insight",
      max: "Select up to 4 technologies."
    },
    pack: {
      title: "A battery becomes real as a vehicle system.",
      body: "A cell is only the beginning. Modules, packs, BMS, thermal management, and vehicle energy use determine real range, safety, and lifetime.",
      imageCaption: "From cells to packs, structure, thermal management, and safety design decide whether the technology can enter a real vehicle."
    },
    thermal: {
      eyebrow: "Winter range",
      title: "Why does EV range drop in winter?",
      normal: "Normal",
      cold: "Cold",
      veryCold: "Very cold"
    },
    tools: {
      title: "Turn formulas into intuition.",
      body: "These tools help connect Wh, kWh, consumption, and temperature loss."
    },
    calc: {
      energyTitle: "Battery Energy Calculator",
      energyBody: "Enter voltage and capacity to estimate stored energy.",
      voltage: "Voltage V",
      capacity: "Capacity Ah",
      rangeTitle: "EV Range Calculator",
      rangeBody: "Enter pack size, consumption, and temperature mode to estimate range.",
      size: "Battery size kWh",
      consumption: "Consumption Wh/km",
      temp: "Temperature mode",
      invalidEnergy: "Enter voltage and capacity greater than 0.",
      invalidRange: "Enter battery size and consumption greater than 0.",
      energyExplain: "This equals about {kwh} kWh. It could theoretically supply {wh} W for 1 hour, although real usable energy depends on efficiency and protection limits.",
      rangeExplain: "Base range is about {base} km; after the temperature model it is about {adjusted} km. Real range also depends on speed, HVAC, tires, terrain, and battery health."
    },
    materials: {
      title: "What is inside a battery?",
      body: "The materials database explains each material's role, advantage, challenge, and where it is used.",
      search: "Search materials or terms",
      all: "All",
      empty: "No matching material found. Try another keyword."
    },
    research: {
      title: "My research thoughts.",
      body: "This section keeps the project personal: not copied encyclopedia text, but notes on how I understand materials, thermal management, and systems engineering.",
      imageCaption: "Materials questions eventually enter industrial systems: production lines, supply chains, thermal control, safety validation, and vehicle design."
    },
    timeline: { title: "Battery innovation timeline" },
    quiz: {
      title: "Knowledge check.",
      body: "You will see explanations after submitting. The goal is not to trick you; it is to connect the key concepts.",
      submit: "Submit Answers",
      reset: "Restart",
      score: "Score {score}/{total}",
      choose: "Choose an answer."
    },
    search: { title: "Search the knowledge base", empty: "No matching entry found." },
    footer: {
      body: "A student-built interactive learning project about batteries, materials science, and energy systems.",
      built: "Built by Terry Wang",
      materials: "Materials",
      quiz: "Quiz",
      top: "Back to top ↑"
    },
    labels: {
      learn: "Learn more",
      role: "Role",
      advantage: "Advantage",
      challenge: "Challenge",
      example: "Example",
      overview: "Overview",
      works: "How it works",
      strengths: "Strengths",
      weaknesses: "Limitations",
      applications: "Applications",
      analogy: "Plain-language analogy",
      future: "Future direction",
      density: "Energy density",
      safety: "Safety",
      cost: "Cost",
      cycles: "Cycle life",
      cold: "Cold weather",
      charging: "Fast charging"
    }
  }
};

const data = {
  impact: [
    { value: "300+", zh: ["Wh/kg 潜力", "高能体系常讨论的质量能量密度潜力区间，但不是所有产品都能达到。"], en: ["Wh/kg potential", "A commonly discussed potential range for high-energy systems, not a universal product value."] },
    { value: "1000+", zh: ["循环不是简单数字", "寿命受材料、温度、充电策略和使用习惯共同影响。"], en: ["Cycles are not simple", "Lifetime depends on materials, temperature, charging strategy, and user behavior."] },
    { value: "2030+", zh: ["下一代技术窗口", "固态、钠离子、硅负极等方向仍在从实验室和中试走向成熟。"], en: ["Next-technology window", "Solid-state, sodium-ion, and silicon anode routes are still moving toward maturity."] }
  ],
  foundations: [
    { zh: ["电势", "电压可以理解为推动电子流动的能量差，但高电压不自动等于高容量。"], en: ["Electric potential", "Voltage is the energy difference that pushes electrons, but higher voltage does not automatically mean higher capacity."] },
    { zh: ["电子与离子", "电子在外电路做功，离子在电池内部迁移，用来维持电荷平衡。"], en: ["Electrons and ions", "Electrons do useful work outside the cell while ions move inside to maintain charge balance."] },
    { zh: ["SOC 与 SOH", "SOC 是剩余电量估算，SOH 是健康状态估算。一个像油表，一个像电池年龄。"], en: ["SOC and SOH", "SOC estimates remaining charge; SOH estimates aging. One is like a fuel gauge, the other like battery age."] }
  ],
  layers: [
    { id: "cathode", color: "#83c8ff", y: "74px", zh: { title: "正极", role: "放电时接收锂离子，强烈影响电压、容量、安全和成本。", matter: "正极材料通常是决定电池体系名称和性能边界的核心。", challenge: "高能量密度往往会带来热稳定性和成本压力。", example: "LFP、NCM、NCA、LCO" }, en: { title: "Cathode", role: "Receives lithium ions during discharge and strongly affects voltage, capacity, safety, and cost.", matter: "Cathode material often defines the chemistry name and performance limits.", challenge: "Higher energy density often increases stability and cost pressure.", example: "LFP, NMC, NCA, LCO" } },
    { id: "separator", color: "#f8fafc", y: "152px", zh: { title: "隔膜", role: "隔开正负极，防止短路，同时允许离子通过。", matter: "它很薄，但对安全极其关键。热收缩可能导致内部短路。", challenge: "要同时做到薄、强、耐热、孔径稳定。", example: "PE/PP 微孔膜、陶瓷涂覆隔膜" }, en: { title: "Separator", role: "Keeps the cathode and anode apart to prevent short circuits while allowing ions through.", matter: "It is thin but safety-critical. Heat shrinkage can cause internal shorts.", challenge: "It must be thin, strong, heat-resistant, and pore-stable.", example: "PE/PP microporous film, ceramic-coated separator" } },
    { id: "electrolyte", color: "#5eead4", y: "230px", zh: { title: "电解液", role: "为离子提供通道，影响快充、低温、寿命与安全。", matter: "没有良好的离子通道，电池就无法高效充放电。", challenge: "液态电解液成熟但易燃；固态电解质仍面临界面和制造难题。", example: "LiPF6 碳酸酯电解液、硫化物固态电解质" }, en: { title: "Electrolyte", role: "Provides the ion pathway and affects fast charging, cold weather, life, and safety.", matter: "Without a good ion pathway, a battery cannot charge or discharge efficiently.", challenge: "Liquid electrolytes are mature but flammable; solid electrolytes face interface and manufacturing challenges.", example: "LiPF6 carbonate electrolyte, sulfide solid electrolyte" } },
    { id: "anode", color: "#86efac", y: "308px", zh: { title: "负极", role: "充电时接收锂离子，常见材料是石墨。", matter: "负极决定快充能力、低温表现和部分寿命问题。", challenge: "硅负极容量高但膨胀大，锂金属负极容易产生枝晶风险。", example: "石墨、硅碳、硬碳、锂金属" }, en: { title: "Anode", role: "Receives lithium ions during charging; graphite is the most common material.", matter: "The anode affects fast charging, cold behavior, and some lifetime issues.", challenge: "Silicon has high capacity but expands; lithium metal can create dendrite risk.", example: "Graphite, silicon-carbon, hard carbon, lithium metal" } },
    { id: "collector", color: "#fbbf24", y: "386px", zh: { title: "集流体", role: "把电极中的电子收集并导向外电路。", matter: "它们不直接储能，却决定电流路径和内阻。", challenge: "需要导电、轻、耐腐蚀，并适配不同电极电位。", example: "铜箔负极集流体、铝箔正极集流体" }, en: { title: "Current Collectors", role: "Collect electrons from electrodes and route them to the external circuit.", matter: "They do not store much energy directly, but define current paths and resistance.", challenge: "They must be conductive, light, corrosion-resistant, and compatible with electrode potentials.", example: "Copper foil for anode, aluminum foil for cathode" } },
    { id: "case", color: "#cbd5e1", y: "464px", zh: { title: "壳体", role: "保护内部结构，控制膨胀、泄压和机械安全。", matter: "电池必须在冲击、振动、热膨胀和压力变化中保持安全。", challenge: "轻量化、强度、密封和热传播控制需要平衡。", example: "方壳、圆柱、软包封装" }, en: { title: "Casing", role: "Protects internal structure and manages swelling, venting, and mechanical safety.", matter: "Cells must remain safe under impact, vibration, thermal expansion, and pressure changes.", challenge: "Weight, strength, sealing, and heat propagation must be balanced.", example: "Prismatic, cylindrical, pouch formats" } }
  ],
  technologies: [
    { id: "nmc", color: "#fb7185", short: "NCM / NCA", density: "180–300 Wh/kg", midpoint: 240, scores: [9, 5, 6, 6, 8, 5], zh: { title: "三元锂电池 NCM/NCA", desc: "使用镍、钴、锰或镍、钴、铝正极，常用于追求长续航的电动车。", tags: ["高能量密度", "长续航", "热管理重要"], strengths: "相同重量下通常储能更多，适合长续航和轻量化。", weaknesses: "成本和热稳定性压力较大，对 BMS 与制造控制要求高。", use: "长续航电动车、无人机、笔记本、高端消费电子", analogy: "像轻量大容量背包，能装更多，但要保护得更仔细。", future: "高镍化、表面包覆、低钴化、固态电解质耦合。" }, en: { title: "NCM / NCA Lithium-ion", desc: "Nickel-cobalt based cathodes often used in long-range EVs.", tags: ["High energy", "Long range", "Thermal control"], strengths: "Usually stores more energy at the same mass, useful for long range and lightweight design.", weaknesses: "Cost and thermal stability are harder; BMS and manufacturing control matter.", use: "Long-range EVs, drones, laptops, premium electronics", analogy: "Like a lightweight high-capacity backpack: more range, but needs careful protection.", future: "High-nickel designs, coatings, lower cobalt, and solid-electrolyte coupling." } },
    { id: "lfp", color: "#86efac", short: "LFP", density: "90–160 Wh/kg", midpoint: 125, scores: [6, 8, 9, 9, 8, 6], zh: { title: "磷酸铁锂电池 LFP", desc: "以磷酸铁锂为正极，安全稳定、寿命长、成本友好。", tags: ["安全", "长寿命", "成本友好"], strengths: "热稳定性和循环寿命通常优秀，不依赖镍钴。", weaknesses: "能量密度低于高镍三元，低温快充和冬季续航需要优化。", use: "大众电动车、商用车、储能电站、公交车", analogy: "像结实可靠的工具箱，不追求最轻，但耐用。", future: "刀片电池、CTP、低温电解液和热管理优化。" }, en: { title: "Lithium Iron Phosphate LFP", desc: "A stable, long-life, cost-friendly lithium-ion chemistry.", tags: ["Safe", "Long life", "Cost friendly"], strengths: "Often excellent in thermal stability and cycle life; no nickel or cobalt.", weaknesses: "Lower energy density than high-nickel systems; cold charging needs support.", use: "Mainstream EVs, commercial vehicles, grid storage, buses", analogy: "Like a tough tool case: not the lightest, but dependable.", future: "Blade cells, CTP, low-temperature electrolytes, and better thermal management." } },
    { id: "sodium", color: "#83c8ff", short: "Sodium-ion", density: "100–180 Wh/kg", midpoint: 140, scores: [5, 8, 8, 7, 7, 9], zh: { title: "钠离子电池", desc: "用钠离子替代锂离子，资源更丰富，适合低成本储能和部分入门车辆。", tags: ["资源丰富", "低成本潜力", "低温表现"], strengths: "钠资源分布广，部分体系低温性能有优势。", weaknesses: "能量密度通常低于锂离子，产业链仍在成熟。", use: "固定储能、两轮车、入门级车辆、低温场景", analogy: "不一定跑最远，但原料更容易找到，适合大规模铺开。", future: "硬碳负极、层状氧化物、普鲁士蓝类材料和规模化制造。" }, en: { title: "Sodium-ion Battery", desc: "Uses sodium ions instead of lithium ions, with potential in lower-cost storage.", tags: ["Abundant", "Cost potential", "Cold weather"], strengths: "Sodium is widely available, and some systems perform well in low temperature.", weaknesses: "Energy density is usually below lithium-ion; the supply chain is maturing.", use: "Stationary storage, two-wheelers, entry vehicles, cold regions", analogy: "Not always the longest runner, but easier to source and scale.", future: "Hard carbon, layered oxides, Prussian blue materials, and scale manufacturing." } },
    { id: "solid", color: "#c084fc", short: "Solid-state", density: "Developing / >300", midpoint: 330, scores: [10, 2, 8, 7, 8, 6], zh: { title: "固态电池", desc: "用固态电解质替代液态电解液，有潜力提升安全和能量上限。", tags: ["发展中", "高潜力", "界面挑战"], strengths: "有机会减少易燃液体，并支持锂金属负极。", weaknesses: "固-固界面、枝晶、压力控制、制造良率和成本仍困难。", use: "未来高端电动车、航空、消费电子、高安全储能", analogy: "把液体通道换成固体隧道，可能更稳，但修隧道很难。", future: "硫化物、氧化物、聚合物路线都在推进，量产时间表仍需谨慎看待。" }, en: { title: "Solid-state Battery", desc: "Uses solid electrolytes, with potential for safety and energy improvements.", tags: ["Developing", "High potential", "Interface challenge"], strengths: "May reduce flammable liquid content and support lithium-metal anodes.", weaknesses: "Solid-solid interfaces, dendrites, pressure, yield, and cost remain difficult.", use: "Future premium EVs, aviation, electronics, high-safety storage", analogy: "Replacing liquid pathways with solid tunnels may be safer, but tunnels are hard to build perfectly.", future: "Sulfide, oxide, and polymer routes are moving forward; timelines should be read carefully." } },
    { id: "lead", color: "#d6b48f", short: "Lead-acid", density: "30–50 Wh/kg", midpoint: 40, scores: [2, 10, 7, 5, 4, 7], zh: { title: "铅酸电池", desc: "历史悠久、成本低、瞬时大电流强，但重量大、能量密度低。", tags: ["低成本", "启动电流", "成熟回收"], strengths: "便宜、可靠，大电流输出强，回收体系成熟。", weaknesses: "重、能量密度低，长期亏电会造成不可逆损伤。", use: "燃油车启动电源、UPS、通信后备电源", analogy: "像很重但有力的启动器，不适合长跑，擅长瞬间发力。", future: "仍会在启动电源和备用电源保留位置，但动力电池领域被锂电替代。" }, en: { title: "Lead-acid Battery", desc: "A mature, low-cost battery with strong starting current but low energy density.", tags: ["Low cost", "Starting current", "Recycling"], strengths: "Cheap, reliable, strong high-current output, mature recycling.", weaknesses: "Heavy, low energy density, and deep discharge causes damage.", use: "Starter batteries, UPS, telecom backup", analogy: "Like a heavy but strong starter: not a distance runner, but powerful instantly.", future: "It remains in starter and backup systems, while lithium dominates traction batteries." } },
    { id: "nimh", color: "#fbbf24", short: "NiMH", density: "60–120 Wh/kg", midpoint: 90, scores: [4, 6, 8, 6, 5, 8], zh: { title: "镍氢电池 NiMH", desc: "耐用、宽温区、抗滥用能力强，曾广泛用于混合动力汽车。", tags: ["耐用", "混动车", "宽温区"], strengths: "可靠、抗滥用、适合浅充浅放和宽温区。", weaknesses: "自放电较高，质量和体积大于现代锂离子。", use: "混合动力汽车、消费级充电电池、工业设备", analogy: "像稳健老队员，不一定最快，但抗压可靠。", future: "在经典 HEV 仍有价值，但纯电和插混主流由锂电主导。" }, en: { title: "Nickel-Metal Hydride NiMH", desc: "Durable and abuse-tolerant, once widely used in hybrid vehicles.", tags: ["Durable", "Hybrids", "Wide temperature"], strengths: "Reliable, abuse-tolerant, good for shallow cycling and wide temperatures.", weaknesses: "Higher self-discharge and larger mass/volume than modern lithium-ion.", use: "Hybrid vehicles, rechargeable consumer cells, industrial equipment", analogy: "Like a steady veteran: not the fastest, but reliable under stress.", future: "Still useful in classic HEVs, while EVs and PHEVs are dominated by lithium-ion." } }
  ],
  systems: [
    { id: "cell", zh: ["电芯", "最小电化学单元。正极、负极、电解质和隔膜决定电压、容量、寿命和安全边界。"], en: ["Cell", "The smallest electrochemical unit. Cathode, anode, electrolyte, and separator define voltage, capacity, life, and safety limits."] },
    { id: "module", zh: ["模组", "多个电芯组合在一起，便于固定、采样、布线和散热。"], en: ["Module", "A group of cells arranged for support, sensing, wiring, and heat spreading."] },
    { id: "pack", zh: ["电池包", "把电芯/模组、BMS、冷却、壳体和高压安全件整合成车上可用的系统。"], en: ["Pack", "Combines cells/modules with BMS, cooling, enclosure, and high-voltage safety components."] },
    { id: "vehicle", zh: ["整车", "续航不只由电池决定，还受车速、空调、轮胎、地形和热管理影响。"], en: ["Vehicle", "Range is not determined by the battery alone; speed, HVAC, tires, terrain, and thermal management matter."] }
  ],
  thermal: [
    { id: "normal", factor: 1, zh: ["常温下离子迁移和内阻处于较理想状态。", ["离子迁移较顺畅", "内阻较低", "加热负荷小", "续航接近标称条件"]], en: ["At normal temperature, ion movement and resistance are closer to ideal conditions.", ["Ion movement is smoother", "Internal resistance is lower", "Heating load is small", "Range is closer to rated conditions"]] },
    { id: "cold", factor: .85, zh: ["寒冷环境会让离子运动变慢，电池和座舱加热也会消耗能量。", ["离子迁移变慢", "内阻升高", "电池需要加热", "座舱空调消耗更多能量"]], en: ["Cold weather slows ion movement and uses energy for pack and cabin heating.", ["Ion movement slows", "Internal resistance rises", "Pack heating may be needed", "Cabin HVAC uses more energy"]] },
    { id: "veryCold", factor: .7, zh: ["严寒环境下，热管理和能耗控制会显著影响真实续航。", ["离子迁移明显变慢", "内阻明显升高", "快充能力受限", "热管理能耗上升"]], en: ["In very cold weather, thermal management and energy use strongly affect real range.", ["Ion movement slows significantly", "Resistance rises sharply", "Fast charging is limited", "Thermal load increases"]] }
  ],
  materials: [
    { id: "graphite", symbol: "C", category: "anode", zh: { name: "石墨", role: "负极材料", desc: "商业锂离子电池中最成熟的负极，可让锂离子嵌入层状结构。", advantage: "稳定、成熟、成本可控。", challenge: "理论容量有限，极端快充会增加析锂风险。", used: "手机、电动车、储能电池" }, en: { name: "Graphite", role: "Anode material", desc: "The most mature anode material for commercial lithium-ion cells.", advantage: "Stable, mature, and cost controlled.", challenge: "Limited theoretical capacity and lithium plating risk under extreme fast charging.", used: "Phones, EVs, storage cells" } },
    { id: "silicon", symbol: "Si", category: "anode", zh: { name: "硅", role: "高容量负极", desc: "容量潜力远高于石墨，但充放电膨胀可超过 300%。", advantage: "显著提高负极容量潜力。", challenge: "体积膨胀、粉化和 SEI 反复破裂。", used: "硅碳负极、下一代高能电池" }, en: { name: "Silicon", role: "High-capacity anode", desc: "Much higher capacity potential than graphite, but can expand over 300%.", advantage: "Can raise anode capacity significantly.", challenge: "Volume expansion, cracking, and repeated SEI damage.", used: "Silicon-carbon anodes, next-gen high-energy cells" } },
    { id: "lfp-material", symbol: "Fe", category: "cathode", zh: { name: "磷酸铁锂 LFP", role: "正极材料", desc: "橄榄石结构稳定，安全和循环寿命表现突出。", advantage: "热稳定、寿命长、成本低。", challenge: "能量密度和低温性能通常不如高镍三元。", used: "电动车、储能、公交车" }, en: { name: "Lithium Iron Phosphate", role: "Cathode material", desc: "A stable olivine-structure cathode known for safety and cycle life.", advantage: "Thermally stable, long life, lower cost.", challenge: "Energy density and cold behavior are usually below high-nickel cells.", used: "EVs, storage, buses" } },
    { id: "nmc-material", symbol: "Ni", category: "cathode", zh: { name: "镍锰钴氧化物 NMC", role: "高能正极", desc: "层状结构正极，通过镍、锰、钴比例调整能量、稳定性和成本。", advantage: "能量密度较高。", challenge: "高镍带来稳定性、成本和制造控制挑战。", used: "长续航电动车、消费电子" }, en: { name: "Nickel Manganese Cobalt Oxide", role: "High-energy cathode", desc: "A layered cathode tuned by nickel, manganese, and cobalt ratios.", advantage: "High energy density.", challenge: "High nickel brings stability, cost, and manufacturing challenges.", used: "Long-range EVs, electronics" } },
    { id: "electrolyte", symbol: "Li+", category: "electrolyte", zh: { name: "电解液", role: "离子通道", desc: "让锂离子在正负极之间移动，影响快充、低温和安全。", advantage: "液态体系成熟、导电性好。", challenge: "有机溶剂易燃，热失控风险需要管理。", used: "几乎所有液态锂离子电池" }, en: { name: "Liquid Electrolyte", role: "Ion pathway", desc: "Allows lithium ions to move between electrodes, affecting fast charging, cold behavior, and safety.", advantage: "Mature and conductive.", challenge: "Organic solvents can be flammable and need safety control.", used: "Most liquid lithium-ion cells" } },
    { id: "solid-electrolyte", symbol: "SE", category: "electrolyte", zh: { name: "固态电解质", role: "固体离子通道", desc: "用固体材料传导离子，是固态电池的核心。", advantage: "有潜力减少易燃液体并匹配锂金属。", challenge: "界面接触、离子电导率、压力和制造仍难。", used: "固态电池研发" }, en: { name: "Solid Electrolyte", role: "Solid ion pathway", desc: "A solid material that conducts ions; central to solid-state batteries.", advantage: "May reduce flammable liquid and support lithium metal.", challenge: "Interface contact, conductivity, pressure, and manufacturing remain hard.", used: "Solid-state battery development" } },
    { id: "separator", symbol: "PP", category: "separator", zh: { name: "隔膜", role: "安全隔离层", desc: "隔开正负极，防止短路，同时允许离子通过。", advantage: "薄而轻，对能量密度友好。", challenge: "高温热收缩可能导致短路，陶瓷涂覆可改善。", used: "锂离子电池、钠离子电池" }, en: { name: "Separator Polymer", role: "Safety barrier", desc: "Separates electrodes to prevent short circuits while allowing ions through.", advantage: "Thin and light, good for energy density.", challenge: "Heat shrinkage can cause shorts; ceramic coating helps.", used: "Lithium-ion and sodium-ion cells" } },
    { id: "copper", symbol: "Cu", category: "collector", zh: { name: "铜集流体", role: "负极集流体", desc: "负责收集负极电子并导出电流。", advantage: "导电性强，适合负极电位。", challenge: "成本和重量需要控制。", used: "锂离子负极" }, en: { name: "Copper Current Collector", role: "Anode current collector", desc: "Collects electrons from the anode and routes current.", advantage: "Highly conductive and suitable for anode potentials.", challenge: "Cost and weight must be controlled.", used: "Lithium-ion anodes" } },
    { id: "aluminum", symbol: "Al", category: "collector", zh: { name: "铝集流体", role: "正极集流体", desc: "负责收集正极电子，通常比铜更轻。", advantage: "轻、成本低、适合正极电位。", challenge: "在某些电位和电解液条件下需要稳定性控制。", used: "锂离子正极、部分钠离子电池" }, en: { name: "Aluminum Current Collector", role: "Cathode current collector", desc: "Collects electrons from the cathode and is usually lighter than copper.", advantage: "Light, lower cost, suitable for cathode potentials.", challenge: "Stability depends on potential and electrolyte conditions.", used: "Lithium-ion cathodes, some sodium-ion cells" } },
    { id: "ceramic", symbol: "Al₂O₃", category: "safety", zh: { name: "陶瓷涂覆", role: "隔膜安全材料", desc: "涂在隔膜表面，提高耐热性并减少热收缩。", advantage: "改善热稳定性和安全边界。", challenge: "增加工艺复杂度和成本。", used: "动力电池隔膜" }, en: { name: "Ceramic Coating", role: "Separator safety material", desc: "Coated on separators to improve heat resistance and reduce shrinkage.", advantage: "Improves thermal stability and safety margins.", challenge: "Adds process complexity and cost.", used: "EV battery separators" } }
  ],
  research: [
    { zh: ["问题", "为什么钠离子值得关注？", "我不认为钠离子一定要“取代”锂离子。更有价值的问题是：在低成本储能、入门级车辆和寒冷地区，它能不能成为更合适的材料选择？"], en: ["Question", "Why sodium-ion matters", "I do not think sodium-ion must replace lithium-ion. The better question is whether it can be the more suitable material choice for low-cost storage, entry vehicles, and cold regions."] },
    { zh: ["工程取舍", "冬季续航为什么下降？", "低温让离子移动变慢、内阻升高，同时座舱和电池加热也要消耗能量。所以冬季续航既是材料问题，也是热管理问题。"], en: ["Engineering trade-off", "Why winter range drops", "Low temperature slows ions and raises internal resistance, while cabin and battery heating consume energy. Winter range is both a materials problem and a thermal-system problem."] },
    { zh: ["未来方向", "电池余热能否再利用？", "我曾想过电池包和功率电子产生的热量能否作为冬季热源之一。这个方向有吸引力，但必须保证温度、时机、安全和寿命都被严格控制。"], en: ["Future direction", "Can battery waste heat be reused?", "I have wondered whether heat from the pack and power electronics could become part of winter heating. It is attractive, but temperature, timing, safety, and lifetime must be carefully controlled."] }
  ],
  timeline: [
    { year: "1800", zh: ["伏打电堆", "第一次证明连续电流可以由电化学系统产生。"], en: ["Voltaic pile", "Showed that continuous current could be generated by an electrochemical system."] },
    { year: "1859", zh: ["铅酸电池", "第一种可充电电池，至今仍用于启动和备用电源。"], en: ["Lead-acid battery", "The first rechargeable battery, still used for starting and backup power."] },
    { year: "1991", zh: ["商用锂离子电池", "索尼推动锂离子电池商业化，开启便携电子时代。"], en: ["Commercial lithium-ion", "Sony commercialized lithium-ion batteries, enabling the portable electronics era."] },
    { year: "2010s", zh: ["电动车扩张", "动力电池从消费电子走向交通系统。"], en: ["EV expansion", "Battery technology moved from electronics into transportation systems."] },
    { year: "2020s", zh: ["钠离子与半固态", "产业开始探索低成本路线和更高安全边界。"], en: ["Sodium-ion and semi-solid", "Industry explores lower-cost routes and better safety margins."] },
    { year: "2030+", zh: ["固态潜力", "固态电池可能进入更成熟量产阶段，但仍取决于成本、界面和制造。"], en: ["Solid-state potential", "Solid-state batteries may mature further, depending on cost, interface, and manufacturing."] }
  ],
  quiz: [
    { answer: 1, zh: ["Wh 衡量什么？", ["电阻", "储存或释放的能量", "温度", "材料硬度"], "Wh 是能量单位，把功率和时间联系起来。"], en: ["What does Wh measure?", ["Resistance", "Stored or delivered energy", "Temperature", "Material hardness"], "Wh is a unit of energy that connects power and time."] },
    { answer: 0, zh: ["电动车常用哪一大类电池？", ["锂离子电池", "一次碱性电池", "氧化银电池", "锌空气电池"], "现代电动车通常使用 LFP 或三元等锂离子体系。"], en: ["Which battery family is common in EVs?", ["Lithium-ion", "Primary alkaline", "Silver oxide", "Zinc-air"], "Modern EVs commonly use lithium-ion families such as LFP or NCM/NCA."] },
    { answer: 2, zh: ["低温为什么影响续航？", ["电池变轻", "车轮变小", "离子移动变慢且加热耗电", "电压自动翻倍"], "低温提高内阻、减慢反应，同时热管理和座舱加热也会耗能。"], en: ["Why can cold weather reduce range?", ["The pack becomes lighter", "Wheels shrink", "Ion movement slows and heating uses energy", "Voltage doubles"], "Cold increases resistance, slows reactions, and heating consumes energy."] },
    { answer: 0, zh: ["BMS 的核心作用是什么？", ["监测和保护电池系统", "增加轮胎抓地力", "改变车身颜色", "替代电解液"], "BMS 会监测电压、电流、温度，并估算 SOC/SOH。"], en: ["What is a core role of BMS?", ["Monitor and protect the battery system", "Increase tire grip", "Change vehicle color", "Replace electrolyte"], "BMS monitors voltage, current, temperature, and estimates SOC/SOH."] },
    { answer: 3, zh: ["隔膜的关键作用是什么？", ["储存汽油", "产生声音", "直接驱动车轮", "隔开正负极并允许离子通过"], "隔膜防止正负极短路，同时让离子通过。"], en: ["What does the separator do?", ["Stores gasoline", "Makes sound", "Directly drives wheels", "Separates electrodes while allowing ions through"], "The separator prevents short circuits while allowing ions to pass."] }
  ]
};

const techSpecs = {
  nmc: {
    voltage: "3.6–3.7 V",
    maturity: { zh: "量产成熟", en: "Commercially mature" },
    platform: { zh: "层状氧化物正极，镍提升容量，钴/锰/铝帮助稳定结构。", en: "Layered oxide cathode. Nickel raises capacity; cobalt, manganese, or aluminum help stabilize the structure." },
    reaction: { zh: "简化理解：锂离子在层状正极与石墨负极之间往返。NCM 523 / 622 / 811 的数字代表镍、钴、锰比例。镍越高，能量潜力越高，但热稳定和制造难度也上升。", en: "Simplified view: lithium ions shuttle between a layered cathode and graphite anode. NCM 523 / 622 / 811 describe nickel, cobalt, and manganese ratios. More nickel can raise energy potential, but stability and manufacturing become harder." },
    case: { zh: "常见于长续航电动车和高端消费电子。", en: "Common in long-range EVs and premium electronics." }
  },
  lfp: {
    voltage: "3.2–3.3 V",
    maturity: { zh: "大规模量产", en: "Mass production" },
    platform: { zh: "橄榄石结构正极，P-O 强共价键让结构更稳定。", en: "Olivine cathode structure; strong P-O bonds make the framework more stable." },
    reaction: { zh: "简化反应可理解为 LiFePO₄ 与 FePO₄ 之间可逆转化。它的优势不是最高能量，而是安全、寿命、成本和资源稳定。", en: "A simplified reaction is the reversible change between LiFePO₄ and FePO₄. Its value is not maximum energy, but safety, life, cost, and resource stability." },
    case: { zh: "常见于主流电动车、商用车和储能电站。", en: "Common in mainstream EVs, commercial vehicles, and stationary storage." }
  },
  sodium: {
    voltage: "2.8–3.3 V",
    maturity: { zh: "早期量产 / 快速推进", en: "Early commercialization / scaling" },
    platform: { zh: "用钠离子替代锂离子，正极可采用层状氧化物或普鲁士蓝类材料，负极常用硬碳。", en: "Uses sodium ions instead of lithium ions. Cathodes may use layered oxides or Prussian blue analogues; hard carbon is a common anode route." },
    reaction: { zh: "核心逻辑仍是离子脱嵌，但钠离子更大，材料通道和结构稳定性需要重新设计。", en: "The core mechanism is still ion insertion/extraction, but sodium ions are larger, so host structures and stability need different design." },
    case: { zh: "适合低成本储能、两轮车、入门车辆和低温场景。", en: "Fits low-cost storage, two-wheelers, entry vehicles, and cold-weather scenarios." }
  },
  solid: {
    voltage: { zh: "取决于正负极组合", en: "Depends on electrode pair" },
    maturity: { zh: "实验室到中试 / 部分半固态商业化", en: "Lab to pilot scale / some semi-solid commercialization" },
    platform: { zh: "用固态电解质替代液态电解液，路线包括硫化物、氧化物和聚合物。", en: "Replaces liquid electrolyte with a solid electrolyte. Main routes include sulfides, oxides, and polymers." },
    reaction: { zh: "它不是单一化学体系，而是电池架构变化。关键难点是固-固界面接触、离子电导率、压力管理和制造良率。", en: "It is not one chemistry; it is an architecture change. Key challenges include solid-solid interfaces, ionic conductivity, pressure management, and manufacturing yield." },
    case: { zh: "未来可能用于高安全、高能量密度场景，但不能简单说已经取代液态锂电。", en: "Could be used in high-safety and high-energy applications, but it has not simply replaced liquid lithium-ion cells." }
  },
  lead: {
    voltage: { zh: "2.0 V / 单体", en: "2.0 V / cell" },
    maturity: { zh: "极成熟", en: "Very mature" },
    platform: { zh: "铅、二氧化铅和硫酸电解液体系，擅长瞬时大电流。", en: "Lead, lead dioxide, and sulfuric acid electrolyte system; strong at high-current bursts." },
    reaction: { zh: "放电时正负极都逐渐生成硫酸铅。深度亏电会导致硫化损伤，影响寿命。", en: "During discharge both electrodes move toward lead sulfate. Deep discharge can cause sulfation damage and shorten life." },
    case: { zh: "燃油车启动、UPS 和后备电源仍大量使用。", en: "Still widely used in starter batteries, UPS, and backup power." }
  },
  nimh: {
    voltage: { zh: "1.2 V / 单体", en: "1.2 V / cell" },
    maturity: { zh: "成熟", en: "Mature" },
    platform: { zh: "镍氧化物正极与储氢合金负极，安全耐用。", en: "Nickel oxyhydroxide cathode with hydrogen-absorbing alloy anode; durable and tolerant." },
    reaction: { zh: "通过氢在合金中的吸收和释放完成充放电，适合混动车频繁浅充浅放。", en: "Charge/discharge involves hydrogen absorption and release in the alloy, fitting shallow cycling in hybrids." },
    case: { zh: "经典混动车、工业设备和部分消费级充电电池。", en: "Classic hybrids, industrial devices, and some rechargeable consumer cells." }
  }
};

const deepDives = [
  {
    zh: {
      label: "正极结构",
      title: "层状、橄榄石、尖晶石为什么不一样？",
      body: "层状结构像多层停车场，锂离子可以在层间进出，能量密度潜力高；橄榄石结构像更坚固的框架，牺牲部分能量密度换来安全和寿命；尖晶石结构通道更立体，倍率性能好但高温寿命更难控制。",
      points: ["NCM/NCA：高能量，热管理要求高", "LFP：结构稳定，成本和寿命优势明显", "LMO：倍率好，但高温下锰溶解是问题"]
    },
    en: {
      label: "Cathode structure",
      title: "Why layered, olivine, and spinel structures behave differently",
      body: "Layered structures are like multi-level parking decks for lithium ions and can support high energy. Olivine structures are more rigid, trading some energy density for safety and life. Spinel structures have three-dimensional pathways but can suffer from manganese dissolution at high temperature.",
      points: ["NCM/NCA: high energy, demanding thermal control", "LFP: stable framework, strong cost and life advantage", "LMO: good power, harder high-temperature life"]
    }
  },
  {
    zh: {
      label: "负极与 SEI",
      title: "为什么硅负极很诱人，也很难？",
      body: "石墨成熟稳定，但容量上限有限。硅能容纳更多锂，理论容量很高，可是充放电时体积膨胀巨大，会让颗粒开裂、SEI 膜反复破裂，导致寿命和效率下降。",
      points: ["石墨：成熟、稳定、成本低", "硅碳：提高容量，但要控制膨胀", "预锂化与纳米化：常见改善方向"]
    },
    en: {
      label: "Anode and SEI",
      title: "Why silicon anodes are attractive and difficult",
      body: "Graphite is stable and mature, but its capacity is limited. Silicon can host much more lithium, yet it expands dramatically during cycling, cracking particles and repeatedly damaging the SEI layer, which hurts life and efficiency.",
      points: ["Graphite: mature, stable, lower cost", "Silicon-carbon: higher capacity, expansion challenge", "Pre-lithiation and nano-design: common improvement routes"]
    }
  },
  {
    zh: {
      label: "热失控",
      title: "安全不是一个零件，而是一串防线",
      body: "电池过热时，SEI 分解、电解液反应、隔膜收缩、正极释氧等过程可能互相放大。真正的安全设计要从电芯、模组、电池包到整车逐级阻断热传播。",
      points: ["电芯级：材料稳定、泄压阀、隔膜", "模组级：隔热材料、间距、传感器", "系统级：BMS 断电、冷却和整车保护"]
    },
    en: {
      label: "Thermal runaway",
      title: "Safety is not one part; it is a chain of barriers",
      body: "When a cell overheats, SEI breakdown, electrolyte reactions, separator shrinkage, and cathode oxygen release can amplify each other. Safety design must interrupt heat propagation from cell to module to pack to vehicle.",
      points: ["Cell level: stable materials, vents, separator", "Module level: insulation, spacing, sensors", "System level: BMS cutoff, cooling, vehicle protection"]
    }
  },
  {
    zh: {
      label: "电池包架构",
      title: "CTP、CTB、CTC 到底在省什么？",
      body: "传统 Pack 会把电芯先组成模组，再装进电池包。CTP 减少模组结构，CTB 把电池包更深地整合进车身，CTC 甚至让电池与底盘结构融合。节省空间和重量的同时，也带来维修、安全验证和结构设计新难题。",
      points: ["CTP：少模组，提高体积利用率", "CTB：电池包参与车身结构", "CTC：底盘一体化潜力大，验证难度也高"]
    },
    en: {
      label: "Pack architecture",
      title: "What do CTP, CTB, and CTC actually remove?",
      body: "Traditional packs group cells into modules first. CTP reduces module structure, CTB integrates the pack more deeply into the body, and CTC moves toward battery-chassis integration. Space and weight improve, but repair, safety validation, and structural design become harder.",
      points: ["CTP: fewer modules, better volume use", "CTB: pack participates in body structure", "CTC: high integration potential, harder validation"]
    }
  }
];

const labels = ["density", "cost", "safety", "cycles", "charging", "cold"];
const labelFor = (key) => i18n[state.lang].labels[key] || key;
const text = (path) => path.split(".").reduce((obj, key) => obj?.[key], i18n[state.lang]) || path;
const local = (item) => item[state.lang];
const localValue = (value) => (value && typeof value === "object" ? local(value) : value);

function init() {
  if (!["zh", "en"].includes(state.lang)) state.lang = "zh";
  document.body.classList.add(state.lang);
  bindNavigation();
  bindGlobalEvents();
  renderAll();
  setupReveal();
  updateActiveNav();
  calculateEnergy();
  calculateRange();
}

function renderAll() {
  applyLanguage();
  renderImpact();
  renderExplorer();
  renderIonDemo();
  renderTechnologies();
  renderTechTable();
  renderDeepDives();
  renderSelectors();
  renderSystem();
  renderThermal();
  renderTemperatureOptions();
  renderMaterials();
  renderResearch();
  renderTimeline();
  renderQuiz();
  renderSearchResults();
  updateCharts();
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("zh", state.lang === "zh");
  document.body.classList.toggle("en", state.lang === "en");
  document.title = state.lang === "zh" ? "Battery Lab — 电池科学互动学习" : "Battery Lab — Interactive Battery Learning";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  const materialSearch = document.getElementById("material-search");
  if (materialSearch) materialSearch.placeholder = state.lang === "zh" ? "搜索 石墨、硅、LFP、电解液、隔膜…" : "Search graphite, silicon, LFP, electrolyte, separator…";
  const globalSearch = document.getElementById("global-search-input");
  if (globalSearch) globalSearch.placeholder = state.lang === "zh" ? "搜索 NCM、LFP、SOC、热失控、BMS…" : "Search NCM, LFP, SOC, thermal runaway, BMS…";
}

function renderImpact() {
  document.getElementById("impact-grid").innerHTML = data.impact.map((item) => {
    const [title, body] = local(item);
    return `<article class="impact-card"><strong>${item.value}</strong><h3>${title}</h3><p>${body}</p></article>`;
  }).join("");
  document.getElementById("foundation-strip").innerHTML = data.foundations.map((item, index) => {
    const [title, body] = local(item);
    return `<article class="foundation-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${body}</p></article>`;
  }).join("");
}

function renderExplorer() {
  const stack = document.getElementById("layer-stack");
  stack.innerHTML = data.layers.map((layer, index) => `
    <button class="layer-button ${layer.id === state.activeLayer ? "active" : ""}" type="button" data-layer="${layer.id}" style="--layer-color:${layer.color};--y:${layer.y};z-index:${20 - index}">
      <span>${local(layer).title}</span>
    </button>
  `).join("");
  renderLayerPanel();
}

function renderLayerPanel() {
  const layer = data.layers.find((item) => item.id === state.activeLayer) || data.layers[0];
  const item = local(layer);
  document.getElementById("layer-panel").innerHTML = `
    <span class="eyebrow">${labelFor("overview")}</span>
    <h3>${item.title}</h3>
    <p>${item.role}</p>
    <dl class="spec-list">
      <div><dt>${labelFor("role")}</dt><dd>${item.matter}</dd></div>
      <div><dt>${labelFor("challenge")}</dt><dd>${item.challenge}</dd></div>
      <div><dt>${labelFor("example")}</dt><dd>${item.example}</dd></div>
    </dl>
  `;
}

function renderIonDemo() {
  document.getElementById("ion-description").textContent = state.ionMode === "charge" ? text("ion.chargeText") : text("ion.dischargeText");
  document.querySelector(".ion-canvas")?.setAttribute("data-mode", state.ionMode);
  document.querySelectorAll("[data-ion-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.ionMode === state.ionMode);
  });
}

function renderTechnologies() {
  document.getElementById("technology-rail").innerHTML = data.technologies.map((tech) => {
    const item = local(tech);
    return `
      <article class="tech-card" style="--tech-color:${tech.color}">
        <div>
          <div class="tech-visual" aria-hidden="true"></div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="tech-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <button class="secondary-action" type="button" data-open-detail="${tech.id}">${text("labels.learn")}</button>
      </article>
    `;
  }).join("");
}

function renderTechTable() {
  const headers = [
    state.lang === "zh" ? "体系" : "Technology",
    state.lang === "zh" ? "电压平台" : "Voltage platform",
    labelFor("density"),
    state.lang === "zh" ? "成熟度" : "Maturity",
    state.lang === "zh" ? "材料逻辑" : "Material logic",
    state.lang === "zh" ? "典型应用" : "Use cases"
  ];
  const rows = data.technologies.map((tech) => {
    const item = local(tech);
    const spec = techSpecs[tech.id];
    return `<tr><th scope="row">${tech.short}</th><td>${localValue(spec.voltage)}</td><td>${tech.density}</td><td>${local(spec.maturity)}</td><td>${local(spec.platform)}</td><td>${item.use}</td></tr>`;
  }).join("");
  document.getElementById("tech-table").innerHTML = `<thead><tr>${headers.map((head) => `<th scope="col">${head}</th>`).join("")}</tr></thead><tbody>${rows}</tbody>`;
}

function renderDeepDives() {
  const target = document.getElementById("deep-grid");
  if (!target) return;
  target.innerHTML = deepDives.map((entry, index) => {
    const item = local(entry);
    return `
      <article class="deep-card">
        <span>${String(index + 1).padStart(2, "0")} · ${item.label}</span>
        <h4>${item.title}</h4>
        <p>${item.body}</p>
        <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
      </article>
    `;
  }).join("");
}

function renderSelectors() {
  const selected = getSelectedTechIds();
  const active = selected.length ? new Set(selected) : new Set(["lfp", "nmc", "sodium"]);
  document.getElementById("tech-selectors").innerHTML = data.technologies.map((tech) => `
    <label class="selector-item" style="--series:${tech.color}">
      <input type="checkbox" value="${tech.id}" ${active.has(tech.id) ? "checked" : ""}>
      <span class="selector-dot"></span>
      <span>${tech.short}</span>
      <span class="selector-check"></span>
    </label>
  `).join("");
}

function getSelectedTechIds() {
  return [...document.querySelectorAll("#tech-selectors input:checked")].map((input) => input.value);
}

function updateCharts() {
  if (!window.Chart) {
    const ids = getSelectedTechIds().length ? getSelectedTechIds() : ["lfp", "nmc", "sodium"];
    const techs = ids.map((id) => data.technologies.find((tech) => tech.id === id)).filter(Boolean);
    drawFallbackRadar(techs);
    drawFallbackBar(techs);
    renderInsight(techs);
    return;
  }
  const ids = getSelectedTechIds().length ? getSelectedTechIds() : ["lfp", "nmc", "sodium"];
  const techs = ids.map((id) => data.technologies.find((tech) => tech.id === id)).filter(Boolean);
  const chartLabels = labels.map(labelFor);
  const datasets = techs.map((tech) => ({
    label: tech.short,
    data: tech.scores,
    borderColor: tech.color,
    backgroundColor: `${tech.color}33`,
    pointBackgroundColor: tech.color,
    borderWidth: 2
  }));
  const radarCtx = document.getElementById("radar-chart");
  const barCtx = document.getElementById("bar-chart");
  if (!radarCtx || !barCtx) return;
  const common = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#cbd5e1", boxWidth: 14 } }
    },
    animation: { duration: 420 }
  };
  const radarOptions = {
    ...common,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: { display: false },
        grid: { color: "rgba(255,255,255,.12)" },
        angleLines: { color: "rgba(255,255,255,.12)" },
        pointLabels: { color: "#aab0bb", font: { size: 12 } }
      }
    }
  };
  const barOptions = {
    ...common,
    indexAxis: "y",
    scales: {
      x: { grid: { color: "rgba(255,255,255,.1)" }, ticks: { color: "#aab0bb" } },
      y: { grid: { display: false }, ticks: { color: "#cbd5e1" } }
    }
  };
  if (state.radarChart) state.radarChart.destroy();
  if (state.barChart) state.barChart.destroy();
  state.radarChart = new Chart(radarCtx, { type: "radar", data: { labels: chartLabels, datasets }, options: radarOptions });
  state.barChart = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: techs.map((tech) => tech.short),
      datasets: [{ label: "Wh/kg", data: techs.map((tech) => tech.midpoint), backgroundColor: techs.map((tech) => tech.color), borderWidth: 0 }]
    },
    options: barOptions
  });
  renderInsight(techs);
}

function setupCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, Math.floor(rect.width * dpr));
  canvas.height = Math.max(280, Math.floor(rect.height * dpr));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawFallbackRadar(techs) {
  const canvas = document.getElementById("radar-chart");
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const cx = width / 2;
  const cy = height / 2 + 12;
  const radius = Math.min(width, height) * 0.34;
  const axes = labels.length;
  ctx.strokeStyle = "rgba(255,255,255,.13)";
  ctx.fillStyle = "#aab0bb";
  ctx.font = "12px Inter, Arial";
  for (let ring = 1; ring <= 5; ring += 1) {
    ctx.beginPath();
    for (let i = 0; i < axes; i += 1) {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / axes;
      const r = (radius * ring) / 5;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  labels.forEach((label, i) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / axes;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    ctx.stroke();
    ctx.fillText(labelFor(label), cx + Math.cos(angle) * (radius + 18) - 34, cy + Math.sin(angle) * (radius + 18) + 4);
  });
  techs.forEach((tech) => {
    ctx.beginPath();
    tech.scores.forEach((score, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / axes;
      const r = (radius * score) / 10;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.globalAlpha = .22;
    ctx.fillStyle = tech.color;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = tech.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function drawFallbackBar(techs) {
  const canvas = document.getElementById("bar-chart");
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const left = 92;
  const right = 28;
  const top = 40;
  const row = Math.max(42, (height - top - 42) / Math.max(techs.length, 1));
  const max = Math.max(350, ...techs.map((tech) => tech.midpoint));
  ctx.font = "13px Inter, Arial";
  ctx.fillStyle = "#aab0bb";
  ctx.strokeStyle = "rgba(255,255,255,.1)";
  for (let tick = 0; tick <= max; tick += 50) {
    const x = left + ((width - left - right) * tick) / max;
    ctx.beginPath();
    ctx.moveTo(x, top - 20);
    ctx.lineTo(x, height - 34);
    ctx.stroke();
    ctx.fillText(String(tick), x - 8, height - 12);
  }
  techs.forEach((tech, index) => {
    const y = top + index * row;
    const barWidth = ((width - left - right) * tech.midpoint) / max;
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(tech.short, 10, y + 22);
    ctx.fillStyle = tech.color;
    ctx.fillRect(left, y, barWidth, 26);
  });
}

function renderInsight(techs) {
  const strongest = [...techs].sort((a, b) => b.scores[0] - a.scores[0])[0];
  const safest = [...techs].sort((a, b) => b.scores[2] - a.scores[2])[0];
  const cheapest = [...techs].sort((a, b) => b.scores[1] - a.scores[1])[0];
  const sentence = state.lang === "zh"
    ? `${strongest.short} 通常更偏向能量密度；${safest.short} 在安全维度更突出；${cheapest.short} 在成本友好度上更有优势。真实工程选择还要看车辆定位、热管理、供应链和寿命目标。`
    : `${strongest.short} leans toward energy density; ${safest.short} stands out on safety; ${cheapest.short} is stronger on affordability. Real engineering choices also depend on vehicle positioning, thermal management, supply chain, and lifetime targets.`;
  document.getElementById("comparison-insight").innerHTML = `<h3>${text("compare.insightTitle")}</h3><p>${sentence}</p>`;
}

function renderSystem() {
  document.getElementById("system-steps").innerHTML = data.systems.map((item, index) => {
    const [title] = local(item);
    return `<button class="system-step ${item.id === state.activeSystem ? "active" : ""}" type="button" data-system="${item.id}"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3></button>`;
  }).join("");
  const current = data.systems.find((item) => item.id === state.activeSystem) || data.systems[0];
  const [title, body] = local(current);
  document.getElementById("system-detail").innerHTML = `<h3>${title}</h3><p>${body}</p>`;
}

function renderThermal() {
  const item = data.thermal.find((entry) => entry.id === state.thermalMode) || data.thermal[0];
  const [copy, chain] = local(item);
  document.getElementById("thermal-copy").textContent = copy;
  document.getElementById("thermal-percent").textContent = `${Math.round(item.factor * 100)}%`;
  document.getElementById("thermal-bar").style.width = `${Math.round(item.factor * 100)}%`;
  document.getElementById("thermal-chain").innerHTML = chain.map((point) => `<li>${point}</li>`).join("");
  document.getElementById("thermal-control").innerHTML = data.thermal.map((mode) => `<button type="button" data-thermal="${mode.id}" class="${mode.id === state.thermalMode ? "active" : ""}">${text(`thermal.${mode.id}`)}</button>`).join("");
}

function renderTemperatureOptions() {
  const select = document.getElementById("temperature");
  if (!select) return;
  const options = data.thermal.map((mode) => `<option value="${mode.factor}">${text(`thermal.${mode.id}`)} · ${Math.round(mode.factor * 100)}%</option>`).join("");
  const current = select.value;
  select.innerHTML = options;
  if (current) select.value = current;
}

function calculateEnergy() {
  const voltage = Number(document.getElementById("voltage")?.value);
  const capacity = Number(document.getElementById("capacity")?.value);
  const result = document.getElementById("energy-result");
  const error = document.getElementById("energy-error");
  if (!result || !error) return;
  if (voltage <= 0 || capacity <= 0) {
    error.textContent = text("calc.invalidEnergy");
    result.innerHTML = `<strong>— Wh</strong><p>${text("calc.energyBody")}</p>`;
    document.getElementById("energy-meter").style.width = "0%";
    return;
  }
  error.textContent = "";
  const wh = voltage * capacity;
  const kwh = wh / 1000;
  const meter = Math.min(100, Math.max(8, wh / 10));
  document.getElementById("energy-meter").style.width = `${meter}%`;
  result.innerHTML = `<strong>${Math.round(wh).toLocaleString()} Wh</strong><p>${text("calc.energyExplain").replace("{kwh}", kwh.toFixed(2)).replace("{wh}", Math.round(wh).toLocaleString())}</p>`;
}

function calculateRange() {
  const size = Number(document.getElementById("battery-size")?.value);
  const consumption = Number(document.getElementById("consumption")?.value);
  const factor = Number(document.getElementById("temperature")?.value || 1);
  const result = document.getElementById("range-result");
  const error = document.getElementById("range-error");
  if (!result || !error) return;
  if (size <= 0 || consumption <= 0) {
    error.textContent = text("calc.invalidRange");
    result.innerHTML = `<strong>— km</strong><p>${text("calc.rangeBody")}</p>`;
    document.getElementById("range-meter").style.width = "0%";
    return;
  }
  error.textContent = "";
  const base = (size * 1000) / consumption;
  const adjusted = base * factor;
  document.getElementById("range-meter").style.width = `${Math.min(100, Math.max(10, adjusted / 5))}%`;
  result.innerHTML = `<strong>${Math.round(adjusted)} km</strong><p>${text("calc.rangeExplain").replace("{base}", Math.round(base)).replace("{adjusted}", Math.round(adjusted))}</p>`;
}

function renderMaterials() {
  const categories = ["all", "cathode", "anode", "electrolyte", "separator", "collector", "safety"];
  document.getElementById("material-filters").innerHTML = categories.map((cat) => `<button type="button" data-filter="${cat}" class="${cat === state.materialFilter ? "active" : ""}">${cat === "all" ? text("materials.all") : cat}</button>`).join("");
  const query = normalize(state.materialQuery);
  const entries = data.materials.filter((item) => {
    const content = local(item);
    const matchesFilter = state.materialFilter === "all" || item.category === state.materialFilter;
    const matchesQuery = !query || normalize([content.name, content.role, content.desc, content.advantage, content.challenge, content.used, item.symbol, item.category].join(" ")).includes(query);
    return matchesFilter && matchesQuery;
  });
  document.getElementById("material-grid").innerHTML = entries.length
    ? entries.map((item) => {
      const content = local(item);
      return `<article class="material-card" data-open-material="${item.id}"><div class="material-symbol">${item.symbol}</div><span class="role">${content.role}</span><h3>${content.name}</h3><p>${content.desc}</p></article>`;
    }).join("")
    : `<p class="empty-state">${text("materials.empty")}</p>`;
}

function renderResearch() {
  document.getElementById("research-grid").innerHTML = data.research.map((item) => {
    const [label, title, body] = local(item);
    return `<article class="note-card"><span>${label}</span><h3>${title}</h3><p>${body}</p></article>`;
  }).join("");
}

function renderTimeline() {
  document.getElementById("timeline-list").innerHTML = data.timeline.map((item, index) => {
    const [title, body] = local(item);
    return `<article class="timeline-item ${index === 2 ? "active" : ""}" tabindex="0"><time>${item.year}</time><div><h4>${title}</h4><p>${body}</p></div></article>`;
  }).join("");
}

function renderQuiz() {
  document.getElementById("quiz-questions").innerHTML = data.quiz.map((item, index) => {
    const [question, options] = local(item);
    return `<section class="quiz-question" data-question="${index}"><h3>${index + 1}. ${question}</h3><div class="quiz-options">${options.map((option, optionIndex) => `<label><input type="radio" name="q${index}" value="${optionIndex}"><span>${option}</span></label>`).join("")}</div><p class="quiz-feedback" id="feedback-${index}"></p></section>`;
  }).join("");
  document.getElementById("quiz-result").textContent = "";
}

function scoreQuiz(event) {
  event.preventDefault();
  let score = 0;
  data.quiz.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const feedback = document.getElementById(`feedback-${index}`);
    const [, options, explanation] = local(item);
    if (!selected) {
      feedback.textContent = text("quiz.choose");
      feedback.style.color = "#fbbf24";
      return;
    }
    const correct = Number(selected.value) === item.answer;
    if (correct) score += 1;
    feedback.textContent = `${correct ? "✓" : "×"} ${explanation} ${correct ? "" : `(${options[item.answer]})`}`;
    feedback.style.color = correct ? "#86efac" : "#fb7185";
  });
  document.getElementById("quiz-result").textContent = text("quiz.score").replace("{score}", score).replace("{total}", data.quiz.length);
}

function openTechnology(id) {
  const tech = data.technologies.find((item) => item.id === id);
  if (!tech) return;
  const item = local(tech);
  const spec = techSpecs[tech.id];
  const modal = document.getElementById("detail-modal");
  document.getElementById("modal-content").innerHTML = `
    <p class="modal-category">${tech.short}</p>
    <h2>${item.title}</h2>
    <p>${item.desc}</p>
    <div class="modal-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <div class="metric-grid">
      <div><span>${labelFor("density")}</span><strong>${tech.density}</strong></div>
      <div><span>${state.lang === "zh" ? "电压平台" : "Voltage"}</span><strong>${localValue(spec.voltage)}</strong></div>
      <div><span>${labelFor("safety")}</span><strong>${tech.scores[2]}/10</strong></div>
      <div><span>${labelFor("cost")}</span><strong>${tech.scores[1]}/10</strong></div>
    </div>
    ${[
      ["overview", item.desc],
      [state.lang === "zh" ? "材料逻辑" : "Material logic", local(spec.platform)],
      [state.lang === "zh" ? "简化工作原理" : "Simplified mechanism", local(spec.reaction)],
      ["strengths", item.strengths],
      ["weaknesses", item.weaknesses],
      ["applications", item.use],
      [state.lang === "zh" ? "成熟度与案例" : "Maturity and cases", `${local(spec.maturity)}。${local(spec.case)}`],
      ["analogy", item.analogy],
      ["future", item.future]
    ].map(([key, body]) => `<section class="modal-section"><h3>${labelFor(key) || key}</h3><p>${body}</p></section>`).join("")}
  `;
  openDialog(modal);
  document.body.classList.add("modal-open");
}

function openMaterial(id) {
  const material = data.materials.find((item) => item.id === id);
  if (!material) return;
  const item = local(material);
  const modal = document.getElementById("detail-modal");
  document.getElementById("modal-content").innerHTML = `
    <p class="modal-category">${item.role}</p>
    <h2>${item.name}</h2>
    <p>${item.desc}</p>
    <div class="modal-tags"><span>${material.category}</span><span>${material.symbol}</span></div>
    ${[
      ["role", item.desc],
      ["advantage", item.advantage],
      ["challenge", item.challenge],
      ["applications", item.used]
    ].map(([key, body]) => `<section class="modal-section"><h3>${labelFor(key)}</h3><p>${body}</p></section>`).join("")}
  `;
  openDialog(modal);
  document.body.classList.add("modal-open");
}

function knowledgeEntries() {
  const techs = data.technologies.map((item) => ({
    id: `tech:${item.id}`,
    type: "tech",
    target: item.id,
    title: local(item).title,
    desc: local(item).desc,
    category: state.lang === "zh" ? "电池体系" : "Battery chemistry"
  }));
  const mats = data.materials.map((item) => ({
    id: `mat:${item.id}`,
    type: "material",
    target: item.id,
    title: local(item).name,
    desc: local(item).desc,
    category: state.lang === "zh" ? "材料" : "Material"
  }));
  const terms = [
    ["soc", "SOC", state.lang === "zh" ? "剩余电量状态估算，不等于电池健康。" : "State of charge estimate, not the same as battery health."],
    ["soh", "SOH", state.lang === "zh" ? "电池健康状态估算，常与容量衰减和内阻变化有关。" : "State of health estimate, related to capacity fade and resistance changes."],
    ["thermal-runaway", state.lang === "zh" ? "热失控" : "Thermal runaway", state.lang === "zh" ? "电池内部热量和副反应失控放大的危险过程。" : "A dangerous process where heat and side reactions amplify inside a cell."],
    ["bms", "BMS", state.lang === "zh" ? "电池管理系统，监测电压、电流、温度并执行保护。" : "Battery management system that monitors voltage, current, temperature, and protection."]
  ].map(([id, title, desc]) => ({ id: `term:${id}`, type: "term", target: id, title, desc, category: state.lang === "zh" ? "术语" : "Glossary" }));
  return [...techs, ...mats, ...terms];
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function renderSearchResults() {
  const input = document.getElementById("global-search-input");
  const target = document.getElementById("global-search-results");
  if (!target) return;
  const query = normalize(input?.value || "");
  const entries = knowledgeEntries().filter((entry) => !query || normalize(`${entry.title} ${entry.desc} ${entry.category}`).includes(query)).slice(0, 12);
  target.innerHTML = entries.length ? entries.map((entry) => `<button class="search-result" type="button" data-search-type="${entry.type}" data-search-target="${entry.target}"><span>${entry.category}</span><strong>${entry.title}</strong><small>${entry.desc}</small></button>`).join("") : `<p class="empty-state">${text("search.empty")}</p>`;
}

function openTerm(id) {
  const term = knowledgeEntries().find((entry) => entry.type === "term" && entry.target === id);
  if (!term) return;
  const modal = document.getElementById("detail-modal");
  document.getElementById("modal-content").innerHTML = `<p class="modal-category">${term.category}</p><h2>${term.title}</h2><p>${term.desc}</p><section class="modal-section"><h3>${state.lang === "zh" ? "为什么重要" : "Why it matters"}</h3><p>${state.lang === "zh" ? "这些术语会频繁出现在材料、BMS、续航和安全讨论中。先理解它们，后面的内容会轻松很多。" : "These terms appear often in materials, BMS, range, and safety discussions. Understanding them makes the rest of the site easier."}</p></section>`;
  openDialog(modal);
  document.body.classList.add("modal-open");
}

function bindNavigation() {
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    updateActiveNav();
  }, { passive: true });
  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    const menu = document.getElementById("nav-links");
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => document.getElementById("nav-links").classList.remove("open"));
  });
}

function updateActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  let active = sections[0]?.id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) active = section.id;
  });
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${active}`);
  });
}

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    const layerButton = event.target.closest("[data-layer]");
    if (layerButton) {
      state.activeLayer = layerButton.dataset.layer;
      renderExplorer();
    }
    const ionButton = event.target.closest("[data-ion-mode]");
    if (ionButton) {
      state.ionMode = ionButton.dataset.ionMode;
      renderIonDemo();
    }
    const detailButton = event.target.closest("[data-open-detail]");
    if (detailButton) openTechnology(detailButton.dataset.openDetail);
    const materialButton = event.target.closest("[data-open-material]");
    if (materialButton) openMaterial(materialButton.dataset.openMaterial);
    const systemButton = event.target.closest("[data-system]");
    if (systemButton) {
      state.activeSystem = systemButton.dataset.system;
      renderSystem();
    }
    const thermalButton = event.target.closest("[data-thermal]");
    if (thermalButton) {
      state.thermalMode = thermalButton.dataset.thermal;
      renderThermal();
    }
    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      state.materialFilter = filterButton.dataset.filter;
      renderMaterials();
    }
    const searchResult = event.target.closest("[data-search-type]");
    if (searchResult) {
      closeModals();
      document.body.classList.remove("modal-open");
      if (searchResult.dataset.searchType === "tech") openTechnology(searchResult.dataset.searchTarget);
      if (searchResult.dataset.searchType === "material") openMaterial(searchResult.dataset.searchTarget);
      if (searchResult.dataset.searchType === "term") openTerm(searchResult.dataset.searchTarget);
    }
    if (event.target.closest(".timeline-item")) {
      event.target.closest(".timeline-item").classList.toggle("active");
    }
  });
  document.addEventListener("change", (event) => {
    if (event.target.matches("#tech-selectors input")) {
      const checked = getSelectedTechIds();
      if (checked.length > 4) {
        event.target.checked = false;
        window.alert(text("compare.max"));
      }
      updateCharts();
    }
    if (event.target.matches("#temperature")) calculateRange();
  });
  document.addEventListener("input", (event) => {
    if (event.target.matches("#voltage, #capacity")) calculateEnergy();
    if (event.target.matches("#battery-size, #consumption")) calculateRange();
    if (event.target.matches("#material-search")) {
      state.materialQuery = event.target.value;
      renderMaterials();
    }
    if (event.target.matches("#global-search-input")) renderSearchResults();
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("battery-lab-lang", state.lang);
      renderAll();
      calculateEnergy();
      calculateRange();
    });
  });
  document.getElementById("energy-form")?.addEventListener("submit", (event) => { event.preventDefault(); calculateEnergy(); });
  document.getElementById("range-form")?.addEventListener("submit", (event) => { event.preventDefault(); calculateRange(); });
  document.getElementById("quiz-form")?.addEventListener("submit", scoreQuiz);
  document.getElementById("quiz-reset")?.addEventListener("click", renderQuiz);
  document.getElementById("modal-close")?.addEventListener("click", closeModals);
  document.getElementById("search-close")?.addEventListener("click", closeModals);
  document.getElementById("detail-modal")?.addEventListener("close", () => document.body.classList.remove("modal-open"));
  document.getElementById("search-modal")?.addEventListener("close", () => document.body.classList.remove("modal-open"));
  document.getElementById("open-search")?.addEventListener("click", () => {
    openDialog(document.getElementById("search-modal"));
    document.body.classList.add("modal-open");
    setTimeout(() => document.getElementById("global-search-input")?.focus(), 40);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      openDialog(document.getElementById("search-modal"));
      document.body.classList.add("modal-open");
      setTimeout(() => document.getElementById("global-search-input")?.focus(), 40);
    }
  });
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeModals() {
  document.querySelectorAll("dialog[open]").forEach((dialog) => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  });
  document.body.classList.remove("modal-open");
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach((item) => observer.observe(item));
}

window.addEventListener("DOMContentLoaded", init);
