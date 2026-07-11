"use strict";

(() => {
  const technologies = window.BATTERY_TECHNOLOGIES || [];
  const materials = window.BATTERY_MATERIALS || [];
  const sources = window.BATTERY_SOURCES || [];
  const experience = window.BATTERY_EXPERIENCE || {};
  const depthContent = window.BATTERY_DEPTH_CONTENT || {};

  const state = {
    lang: localStorage.getItem("battery-lab-lang") || "zh",
    activeLayer: "cathode",
    ionMode: "charge",
    ionPaused: false,
    selectedTechnologies: ["nmc", "lfp", "sodium"],
    systemStage: "cell",
    systemProgress: 0,
    thermalMode: "normal",
    materialFilter: "all",
    materialQuery: "",
    quizSubmitted: false,
    quizScope: "all",
    incorrectQuestions: [],
    lastDialogTrigger: null,
    systemFrame: 0,
    heroFrame: 0
  };

  if (!['zh', 'en'].includes(state.lang)) state.lang = 'zh';

  const i18n = {
    zh: {
      meta: {
        title: "Battery Materials Lab — Terry Wang 互动电池工程项目",
        description: "Terry Wang 独立设计和开发的互动电池实验室，从材料、电化学、电芯、电池包到整车系统解释工程取舍。"
      },
      a11y: {
        skip: "跳到主要内容", nav: "主导航", home: "Battery Materials Lab 首页", menuOpen: "打开导航菜单", menuClose: "关闭导航菜单",
        search: "搜索知识库", language: "切换语言", projectFields: "项目领域", scroll: "继续浏览", layerExplorer: "电池分层探索器",
        ionMode: "充放电模式", techTable: "电池体系对比表", techSelect: "选择要比较的电池体系", systemProgress: "系统阶段进度",
        temperature: "温度条件", materialFilters: "材料分类", storyNav: "项目故事目录", close: "关闭弹窗"
      },
      nav: { overview: "项目概览", inside: "电池内部", chemistries: "电池体系", system: "从电芯到整车", materials: "材料数据库", research: "研究思考", tools: "学习工具", about: "关于项目", search: "搜索" },
      hero: {
        identity: "独立项目 · 高中生作品",
        title: "拆开一块电池",
        subtitle: "看见材料如何驱动一辆汽车。从电极材料到整车系统，理解性能背后的工程取舍。",
        explore: "开始探索电池", story: "查看项目故事", source: "查看 GitHub ↗", field1: "材料科学", field2: "电池工程", field3: "互动学习", scroll: "向下探索"
      },
      chapters: { overview: "项目概览", inside: "电池内部", chemistries: "电池体系", system: "从电芯到整车", materials: "材料数据库", research: "研究思考", tools: "学习工具", about: "关于项目" },
      overview: {
        title: "一块电池的性能，\n从来不由一个数字决定。",
        body: "能量密度、安全、寿命、快充、低温与成本彼此牵制。这个项目把材料选择放回电芯、电池包和整车系统中，帮助普通读者看懂“性能更好”究竟意味着什么。",
        thesis: "核心问题：材料层面的优势，如何在真实系统中转化，又在哪里被抵消？",
        caption: "材料只有经过制造、装配、检测和系统控制，才会成为可靠的电池产品。"
      },
      inside: { eyebrow: "从材料开始", title: "点击一层，\n理解一个工程决定。", body: "一颗电芯不是六张薄片的简单叠加。每一层都在容量、阻抗、寿命和安全之间承担不同任务。" },
      ion: {
        eyebrow: "离子与电子的两条路", title: "电池内部传离子，\n外部电路传电子。", charge: "充电", discharge: "放电", pause: "暂停动画", resume: "继续动画",
        electrons: "电子 · 外部电路", ions: "锂离子 · 电池内部", note: "简化教学模型：真实电极是多孔复合结构，离子运动也不是一条直线。"
      },
      chemistries: {
        title: "没有“最好”的电池，\n只有更适合的取舍。", body: "高能量、安全、寿命、快充、低温、成本与资源无法同时达到极值。先建立全局坐标，再进入每一种材料体系。",
        tableTitle: "可直接扫读的全局对照", tableNote: "范围用于建立数量级直觉，不是单一产品规格；点击体系可查看测试条件与来源。"
      },
      compare: {
        eyebrow: "互动比较", title: "把数字与判断分开看。", body: "质量能量密度使用范围图；安全、快充、低温、资源、成本与成熟度使用定性等级。最多选择四种技术。",
        clear: "清除选择", rangeTitle: "典型电芯质量能量密度范围", matrixTitle: "教学性定性比较", boundary: "Low / Medium / High 是基于材料特性、商业成熟度和常见系统表现的教学概括，不是认证评级。",
        max: "最多同时选择四种技术。请先取消一种。", choose: "至少选择一种技术以开始比较。", insight: "对比解读"
      },
      system: { eyebrow: "网站核心交互", title: "一颗电芯的成绩，\n不等于一辆车的表现。", body: "向下滚动，观察电压与容量如何组合，结构与热管理为何占据质量，能量又如何进入电机并返回电池。" },
      thermal: { eyebrow: "冬季续航实验", title: "为什么温度下降，\n可用续航也会下降？", model: "简化教学情景", normal: "常温", cold: "寒冷", veryCold: "严寒" },
      materials: { title: "把材料名词，\n变成可以查询的研究线索。", body: "搜索中文名、英文名、缩写或化学式。列表只显示核心角色；完整的性质、局限、可持续性与来源放在详情中。", searchLabel: "搜索材料", placeholder: "例如：LFP、LiFePO₄、石墨、solid electrolyte", reset: "重置", openHint: "选择一项查看完整研究信息与来源", emptyTitle: "没有找到相符材料", emptyBody: "尝试缩写、化学式或更宽的分类。", count: "显示 {shown} / {total} 种材料" },
      research: { eyebrow: "从“是什么”走向“为什么”", title: "真正值得研究的，\n往往是取舍之间的连接。", caption: "材料性能最终要穿过制造、结构、安全、热管理和整车效率，才能成为真实产品。" },
      sources: { eyebrow: "证据与边界", title: "每一个数字，\n都应该带着条件阅读。", body: "来源优先使用论文、政府/研究机构和制造商原始资料。制造商数据会明确标注，材料级结果不会冒充整车表现。", disclaimerTitle: "数据使用说明", disclaimer: "本网站中的性能数据用于教学和比较。实际结果会受到电芯设计、测试温度、充放电倍率、循环深度、制造工艺和系统集成方式影响。不同来源的数据不应在缺少测试条件时直接比较。", accessed: "访问日期", conditions: "适用边界" },
      tools: { title: "把公式、历史与判断，\n变成可以亲手验证的直觉。", body: "计算器是简化教育模型；测验提供解释而不只给对错。所有结果都明确显示使用条件。" },
      calc: {
        energyTitle: "电池能量计算", voltage: "电压", capacity: "容量", rangeTitle: "电动车续航估算", batterySize: "电池容量", consumption: "车辆能耗", usable: "可用容量", temperature: "温度条件",
        invalidEnergy: "请输入 0.1–1000 V 的电压和 0.1–10000 Ah 的容量。", invalidRange: "请输入合理范围：1–300 kWh、50–600 Wh/km、50%–100%。",
        energyResult: "{wh} Wh", energySecondary: "{kwh} kWh", energyExplain: "理论上可让 {power} W 负载运行约 1 小时。真实可用能量还会受效率、保护窗口和老化影响。",
        rangeResult: "约 {range} km", rangeExplain: "总容量 {size} kWh；预留缓冲约 {buffer} kWh；当前温度情景额外影响约 {tempLoss} kWh。", rangeNote: "这是简化教学模型，不是制造商级预测。车速、风阻、暖风、道路、轮胎、驾驶方式与 SOH 都会改变结果。"
      },
      timeline: { eyebrow: "技术时间线", title: "每一次突破，\n都改变了可用场景。" },
      quiz: { eyebrow: "知识检查", title: "你能把材料、结构与系统连接起来吗？", body: "提交后会显示答案与原因；错题可以单独重试。", submit: "提交答案", retry: "只重试错题", reset: "重新开始", score: "得分 {score} / {total}", allCorrect: "全部答对。你已经能把材料、结构与系统联系起来。", incomplete: "未选择的题目会按未答处理。", correct: "正确", incorrect: "需要再想一步" },
      about: { eyebrow: "Why I Built This", title: "我为什么制作\n这个项目", intro: "我对材料科学感兴趣，因为一种材料的微观结构，最终会改变一辆车的续航、安全和使用方式。编写这个网站，让我能把研究、视觉表达和编程放进同一个长期项目。", authorLabel: "作者", author: "一名对材料科学、电池工程与互动技术感兴趣的高中生。" },
      footer: { body: "由 Terry Wang 独立设计与开发的材料科学互动学习项目。", sources: "数据与来源", about: "项目故事", top: "回到顶部 ↑" },
      search: { eyebrow: "知识检索", title: "搜索整个实验室", label: "输入关键词", placeholder: "NCM、LFP、SOC、热失控、BMS…", empty: "没有找到相关词条。尝试材料名、缩写或系统部件。", hint: "输入关键词开始搜索" },
      alt: { production: "机器人在清洁产线中组装电动车电池包", manufacturing: "俯视汽车工厂，机器人围绕车身生产线工作" },
      labels: {
        learnMore: "深入了解 →", function: "功能", material: "常见材料", performance: "影响性能", failure: "失效风险", technology: "技术", voltage: "典型电压", massEnergy: "质量能量密度", volumeEnergy: "体积能量密度", cycles: "循环寿命", maturity: "成熟度",
        safety: "安全", fastCharge: "快充", cold: "低温", availability: "材料可得性", cost: "成本潜力", overview: "基本概念", how: "工作原理", electrodes: "核心材料", strengths: "主要优点", limitations: "主要局限", applications: "应用场景", comparison: "与其他体系比较", analogy: "普通人怎么理解", outlook: "未来方向", sources: "来源与测试条件",
        role: "作用", properties: "关键性质", sustainability: "可持续性", research: "研究状态", formula: "化学式", status: "状态", stage: "阶段"
      },
      categories: { all: "全部", cathode: "正极材料", anode: "负极材料", electrolyte: "电解质", separator: "隔膜", additive: "导电添加剂", collector: "集流体", emerging: "前沿材料" },
      ratings: { high: "高", medium: "中", low: "低", uncertain: "尚不确定", "potential-high": "潜力高" },
      maturity: { commercial: "规模量产", "early-commercial": "早期商业化", pilot: "中试验证", "research-pilot": "实验室 / 小规模验证", "commercial-blend": "已量产掺混" },
      dialog: { technology: "电池体系", material: "材料词条" }
    },
    en: {
      meta: {
        title: "Battery Materials Lab — Interactive Battery Engineering by Terry Wang",
        description: "An interactive battery laboratory independently designed and developed by Terry Wang, connecting materials, electrochemistry, cells, packs, and vehicle systems."
      },
      a11y: {
        skip: "Skip to main content", nav: "Main navigation", home: "Battery Materials Lab home", menuOpen: "Open navigation menu", menuClose: "Close navigation menu",
        search: "Search the knowledge lab", language: "Switch language", projectFields: "Project fields", scroll: "Continue exploring", layerExplorer: "Battery layer explorer",
        ionMode: "Charge and discharge mode", techTable: "Battery chemistry comparison table", techSelect: "Select battery technologies", systemProgress: "System stage progress",
        temperature: "Temperature condition", materialFilters: "Material categories", storyNav: "Project story contents", close: "Close dialog"
      },
      nav: { overview: "Overview", inside: "Inside a Battery", chemistries: "Chemistries", system: "Cell to Vehicle", materials: "Materials", research: "Research", tools: "Tools", about: "About", search: "Search" },
      hero: {
        identity: "Independent Project · High School Student",
        title: "INSIDE A BATTERY",
        subtitle: "See how materials move a vehicle. From electrode chemistry to pack and vehicle systems, explore the trade-offs behind performance.",
        explore: "Explore the Battery", story: "View Project Story", source: "View Source ↗", field1: "Materials Science", field2: "Battery Engineering", field3: "Interactive Learning", scroll: "Scroll to explore"
      },
      chapters: { overview: "Project Overview", inside: "Inside a Battery", chemistries: "Battery Chemistries", system: "Cell to Vehicle", materials: "Materials Database", research: "Research Thinking", tools: "Learning Tools", about: "About the Project" },
      overview: {
        title: "Battery performance\nis never one number.", body: "Energy density, safety, lifetime, fast charging, cold behavior, cost, and resources constrain one another. This project places material choices back inside cells, packs, and vehicles so “better performance” has a precise meaning.",
        thesis: "Core question: how does a material advantage survive system integration, and where is it cancelled?", caption: "Materials become reliable battery products only through manufacturing, assembly, inspection, and system control."
      },
      inside: { eyebrow: "Start with materials", title: "Select one layer.\nUnderstand one decision.", body: "A cell is not a simple stack of six films. Each layer carries a different responsibility across capacity, resistance, lifetime, and safety." },
      ion: { eyebrow: "Two paths: ions and electrons", title: "Ions move inside.\nElectrons use the circuit.", charge: "Charging", discharge: "Discharging", pause: "Pause motion", resume: "Resume motion", electrons: "Electrons · external circuit", ions: "Lithium ions · inside the cell", note: "Simplified educational model: real electrodes are porous composites and ions do not travel along one straight line." },
      chemistries: { title: "No battery is “best.”\nEach serves a trade-off.", body: "Energy, safety, life, fast charging, cold performance, cost, and resources cannot all be maximized. Build a map first, then open each material system.", tableTitle: "A comparison you can scan", tableNote: "Ranges build order-of-magnitude intuition, not a product specification. Open a chemistry to see conditions and sources." },
      compare: { eyebrow: "Interactive comparison", title: "Keep numbers and judgments separate.", body: "Mass energy uses range bars. Safety, charging, cold behavior, resources, cost, and maturity use qualitative levels. Select up to four technologies.", clear: "Clear selection", rangeTitle: "Typical cell-level gravimetric energy range", matrixTitle: "Educational qualitative comparison", boundary: "Low / Medium / High is an educational synthesis of materials, maturity, and common system behavior, not a certification rating.", max: "You can compare up to four technologies. Deselect one first.", choose: "Select at least one technology to begin.", insight: "Comparison insight" },
      system: { eyebrow: "Signature interaction", title: "A cell result is not\na vehicle result.", body: "Scroll to see how voltage and capacity combine, why structures and cooling add mass, and how energy reaches the motor and returns through braking." },
      thermal: { eyebrow: "Winter range lab", title: "Why does usable range\nfall with temperature?", model: "Simplified learning scenario", normal: "Normal", cold: "Cold", veryCold: "Very cold" },
      materials: { title: "Turn material names\ninto research paths.", body: "Search Chinese or English names, abbreviations, and formulas. The index shows the core role; details contain properties, limitations, sustainability, and sources.", searchLabel: "Search materials", placeholder: "Try LFP, LiFePO₄, graphite, or solid electrolyte", reset: "Reset", openHint: "Select an entry for full research information and sources", emptyTitle: "No matching material", emptyBody: "Try an abbreviation, formula, or wider category.", count: "Showing {shown} of {total} materials" },
      research: { eyebrow: "Move from what to why", title: "The valuable questions\nlive between trade-offs.", caption: "Material performance must pass through manufacturing, structure, safety, thermal management, and vehicle efficiency before becoming a product." },
      sources: { eyebrow: "Evidence and boundaries", title: "Every number needs\nits conditions.", body: "Sources prioritize papers, government/research institutions, and original manufacturer documents. Manufacturer claims are labeled, and material results are not presented as vehicle performance.", disclaimerTitle: "Data-use note", disclaimer: "Performance data on this website is presented for educational comparison. Real-world results vary with cell design, temperature, charge and discharge rate, depth of discharge, manufacturing process, and system integration. Values from different sources should not be treated as directly comparable without considering test conditions.", accessed: "Accessed", conditions: "Boundary" },
      tools: { title: "Turn formulas, history,\nand judgment into intuition.", body: "Calculators are simplified educational models. The quiz explains reasoning rather than only reporting right or wrong, and every output states its limits." },
      calc: { energyTitle: "Battery Energy", voltage: "Voltage", capacity: "Capacity", rangeTitle: "EV Range Estimate", batterySize: "Battery capacity", consumption: "Vehicle consumption", usable: "Usable capacity", temperature: "Temperature condition", invalidEnergy: "Enter 0.1–1000 V and 0.1–10000 Ah.", invalidRange: "Use 1–300 kWh, 50–600 Wh/km, and 50%–100% usable capacity.", energyResult: "{wh} Wh", energySecondary: "{kwh} kWh", energyExplain: "Theoretically, this could power a {power} W load for about one hour. Efficiency, protection windows, and aging reduce usable energy.", rangeResult: "About {range} km", rangeExplain: "Total {size} kWh; about {buffer} kWh reserved as buffer; this temperature scenario affects about {tempLoss} kWh more.", rangeNote: "This is a simplified educational model, not a manufacturer-grade prediction. Speed, drag, HVAC, roads, tires, driving, and SOH change the result." },
      timeline: { eyebrow: "Technology timeline", title: "Each breakthrough\nchanged what batteries could do." },
      quiz: { eyebrow: "Knowledge check", title: "Can you connect materials,\nstructures, and systems?", body: "Submit to see the answer and reasoning. Missed questions can be retried separately.", submit: "Submit answers", retry: "Retry missed questions", reset: "Start over", score: "Score {score} / {total}", allCorrect: "All correct. You can connect materials, structures, and systems.", incomplete: "Unselected questions count as unanswered.", correct: "Correct", incorrect: "Think one step further" },
      about: { eyebrow: "Why I Built This", title: "Why I built\nthis project", intro: "I am interested in materials science because a microscopic structure can eventually change a vehicle's range, safety, and use. Building this website lets research, visual explanation, and programming live in one long-term project.", authorLabel: "Author", author: "A high school student interested in Materials Science, Battery Engineering, and Interactive Technology." },
      footer: { body: "An independent materials-science learning project designed and developed by Terry Wang.", sources: "Data & sources", about: "Project story", top: "Back to top ↑" },
      search: { eyebrow: "Knowledge search", title: "Search the whole lab", label: "Enter a keyword", placeholder: "NMC, LFP, SOC, thermal runaway, BMS…", empty: "No related entry found. Try a material, abbreviation, or system component.", hint: "Type a keyword to begin" },
      alt: { production: "Robots assembling an EV battery pack in a clean production line", manufacturing: "Overhead vehicle factory with robots around car bodies" },
      labels: { learnMore: "Explore details →", function: "Function", material: "Example material", performance: "Performance impact", failure: "Failure risk", technology: "Technology", voltage: "Typical voltage", massEnergy: "Gravimetric energy", volumeEnergy: "Volumetric energy", cycles: "Cycle life", maturity: "Maturity", safety: "Safety", fastCharge: "Fast charge", cold: "Cold weather", availability: "Material availability", cost: "Cost potential", overview: "Overview", how: "How it works", electrodes: "Core materials", strengths: "Advantages", limitations: "Limitations", applications: "Applications", comparison: "Comparison", analogy: "Plain-language analogy", outlook: "Future outlook", sources: "Sources & conditions", role: "Role", properties: "Key properties", sustainability: "Sustainability", research: "Research status", formula: "Formula", status: "Status", stage: "Stage" },
      categories: { all: "All", cathode: "Cathodes", anode: "Anodes", electrolyte: "Electrolytes", separator: "Separators", additive: "Conductive additives", collector: "Current collectors", emerging: "Emerging" },
      ratings: { high: "High", medium: "Medium", low: "Low", uncertain: "Uncertain", "potential-high": "High potential" },
      maturity: { commercial: "Mass production", "early-commercial": "Early commercial", pilot: "Pilot validation", "research-pilot": "Lab / limited pilot", "commercial-blend": "Commercial blends" },
      dialog: { technology: "Battery chemistry", material: "Material entry" }
    }
  };

  const layerData = [
    {
      id: "cathode", color: "#78bfff", y: "20px",
      zh: { title: "正极", function: "放电时接收锂离子，决定主要电压平台与相当一部分容量。", material: "LFP、NMC、NCA、LCO、LMO", performance: "晶体结构和过渡金属组成影响能量密度、快充、成本与热稳定。", failure: "高荷电、高温或结构缺陷可能加剧释氧、微裂纹与界面副反应。" },
      en: { title: "Cathode", function: "Receives lithium during discharge and defines much of the voltage and capacity.", material: "LFP, NMC, NCA, LCO, LMO", performance: "Crystal structure and transition metals shape energy, charging, cost, and thermal stability.", failure: "High charge, heat, or defects can accelerate oxygen release, microcracks, and interface reactions." }
    },
    {
      id: "separator", color: "#d9dde1", y: "90px",
      zh: { title: "隔膜", function: "阻止正负极直接电子接触，同时让离子穿过微孔。", material: "PE/PP 聚烯烃，常见陶瓷涂覆", performance: "厚度、孔隙率与润湿性影响阻抗、功率和体积利用率。", failure: "热收缩、毛刺或异物刺穿可能缩短绝缘路径并触发内短路。" },
      en: { title: "Separator", function: "Prevents direct electronic contact while passing ions through micropores.", material: "PE/PP polyolefins, often ceramic coated", performance: "Thickness, porosity, and wetting affect resistance, power, and volume use.", failure: "Heat shrinkage, burrs, or debris can shorten insulation paths and trigger internal shorts." }
    },
    {
      id: "electrolyte", color: "#66dac8", y: "160px",
      zh: { title: "电解质", function: "在两极和隔膜孔隙中提供离子通道，并形成关键界面膜。", material: "LiPF₆ 碳酸酯、固态硫化物/氧化物/聚合物", performance: "离子电导、稳定窗口和添加剂影响低温、快充、寿命与安全。", failure: "过热或高电压会促使溶剂、盐和界面膜发生副反应；有机溶剂可燃。" },
      en: { title: "Electrolyte", function: "Provides ion paths through electrodes and separator pores and forms critical interfaces.", material: "LiPF₆ carbonates; solid sulfides, oxides, or polymers", performance: "Conductivity, stability window, and additives affect cold, charge, life, and safety.", failure: "Heat or high voltage accelerates solvent, salt, and interface reactions; organic solvents can burn." }
    },
    {
      id: "anode", color: "#73d7ad", y: "230px",
      zh: { title: "负极", function: "充电时储存锂或钠离子，放电时释放。", material: "石墨、硅碳、硬碳、锂金属", performance: "决定相当一部分快充、低温、首圈效率和寿命表现。", failure: "低温快充可能析锂；硅膨胀会破坏 SEI；锂金属沉积不均可能形成枝晶。" },
      en: { title: "Anode", function: "Stores lithium or sodium during charge and releases it during discharge.", material: "Graphite, silicon-carbon, hard carbon, lithium metal", performance: "Strongly affects fast charge, cold behavior, first efficiency, and life.", failure: "Cold fast charge can plate lithium; silicon cracks SEI; uneven lithium metal can form dendrites." }
    },
    {
      id: "collectors", color: "#efcf76", y: "300px",
      zh: { title: "集流体", function: "把复合电极中的电子汇集到极耳和外部电路。", material: "正极常用铝箔，负极常用铜箔", performance: "厚度、导电率和连接电阻影响功率、发热与非活性质量。", failure: "腐蚀、焊接缺陷或过放导致的金属溶解可能增加阻抗与短路风险。" },
      en: { title: "Current Collectors", function: "Gather electrons from composite electrodes into tabs and the external circuit.", material: "Usually aluminum at the cathode and copper at the anode", performance: "Thickness, conductivity, and joints affect power, heat, and inactive mass.", failure: "Corrosion, poor welds, or overdischarge dissolution can raise resistance and short risk." }
    },
    {
      id: "casing", color: "#9ea8b3", y: "370px",
      zh: { title: "壳体", function: "密封内部化学体系，承受膨胀、压力、振动和冲击，并提供受控泄压。", material: "钢、铝或铝塑复合膜", performance: "质量、刚度、密封与传热路径影响电芯到电池包的集成。", failure: "密封失效、机械变形或堵塞泄压路径会放大腐蚀、短路和热事件。" },
      en: { title: "Cell Casing", function: "Seals chemistry, carries swelling, pressure, vibration, and impact, and provides controlled venting.", material: "Steel, aluminum, or aluminum-laminate pouch", performance: "Mass, stiffness, sealing, and heat paths shape pack integration.", failure: "Seal failure, deformation, or blocked vents can amplify corrosion, shorts, and thermal events." }
    }
  ];

  const ionModes = {
    charge: {
      zh: { description: "外部电源提高负极电子能量。锂离子从正极晶格脱出，穿过电解质和隔膜进入负极；电子沿外部电路到达负极。", steps: ["锂离子离开正极可用位点", "离子通过电解质与隔膜", "电子经充电器和外部电路到达负极", "离子在负极中嵌入或沉积"] },
      en: { description: "The charger raises electron energy at the anode. Lithium leaves cathode sites, crosses electrolyte and separator, and enters the anode while electrons arrive through the circuit.", steps: ["Lithium leaves available cathode sites", "Ions cross electrolyte and separator", "Electrons pass through charger and circuit", "Lithium enters or plates at the anode"] }
    },
    discharge: {
      zh: { description: "负极中的锂离子返回正极。电子不能穿过电解质，只能通过外部负载做功，再到达正极。", steps: ["锂离子从负极释放", "离子穿过内部离子通道", "电子通过电机或设备输出能量", "离子与电子在正极反应"] },
      en: { description: "Lithium returns from anode to cathode. Electrons cannot cross the electrolyte, so they do useful work through a load before reaching the cathode.", steps: ["Lithium leaves the anode", "Ions cross the internal pathway", "Electrons power a motor or device", "Ions and electrons react at the cathode"] }
    }
  };

  const systemData = [
    {
      id: "cell",
      zh: { title: "Cell · 电芯", body: "最小电化学单元。材料决定电压与容量上限，但测试温度、倍率、SOC 窗口和电芯形态会改变实际结果。", equation: "Energy (Wh) = Voltage (V) × Capacity (Ah)", facts: ["单颗电芯提供有限电压", "正极、负极、电解质与隔膜共同定义边界", "实验室材料容量不等于完整电芯比能量"] },
      en: { title: "Cell", body: "The smallest electrochemical unit. Materials set voltage and capacity limits, while temperature, rate, SOC window, and format change the result.", equation: "Energy (Wh) = Voltage (V) × Capacity (Ah)", facts: ["One cell provides limited voltage", "Electrodes, electrolyte, and separator share the limits", "Material capacity is not complete-cell specific energy"] }
    },
    {
      id: "module",
      zh: { title: "Module · 模组", body: "多颗电芯形成电气与机械单元。串联提高电压，并联提高容量与电流能力；一致性差异会让最弱电芯更早触及保护边界。", equation: "Series → voltage ↑ · Parallel → capacity ↑", facts: ["串联电压相加，容量 Ah 基本不变", "并联容量 Ah 相加，电压基本不变", "采样线、连接件与热扩散开始进入系统"] },
      en: { title: "Module", body: "Cells form an electrical and mechanical unit. Series raises voltage; parallel raises capacity and current. Variation makes the weakest cell reach protection limits first.", equation: "Series → voltage ↑ · Parallel → capacity ↑", facts: ["Series adds voltage while Ah stays similar", "Parallel adds Ah while voltage stays similar", "Sensing, joints, and heat spreading enter the system"] }
    },
    {
      id: "pack",
      zh: { title: "Pack · 电池包", body: "模组或电芯与 BMS、冷却板、壳体、高压连接、接触器和传感器组合。它们不直接储能，却让系统可控、可冷却并能承受碰撞。", equation: "Pack energy density < cell energy density", facts: ["BMS 估算 SOC/SOH 并限制异常", "冷却板控制平均温度和温差", "结构、安全件与缓冲空间增加非活性质量"] },
      en: { title: "Pack", body: "Modules or cells combine with BMS, cooling, enclosure, high-voltage links, contactors, and sensors. These parts store little energy but make the system controllable and crashworthy.", equation: "Pack energy density < cell energy density", facts: ["BMS estimates SOC/SOH and limits faults", "Cooling controls average temperature and gradients", "Structure, safety hardware, and buffers add inactive mass"] }
    },
    {
      id: "vehicle",
      zh: { title: "Vehicle · 整车", body: "电池通过逆变器驱动电机；制动时一部分动能返回电池。空调、速度、轮胎、道路和热管理决定同一电池能走多远。", equation: "Range ≈ usable pack energy ÷ vehicle consumption", facts: ["逆变器把直流电变成受控交流", "再生制动只能回收部分动能", "低温加热、座舱 HVAC 与风阻都会消耗能量"] },
      en: { title: "Vehicle", body: "The pack drives a motor through an inverter; braking returns part of the kinetic energy. HVAC, speed, tires, roads, and thermal control determine range.", equation: "Range ≈ usable pack energy ÷ vehicle consumption", facts: ["The inverter converts DC into controlled AC", "Regeneration recovers only part of kinetic energy", "Cold heating, cabin HVAC, and drag consume energy"] }
    }
  ];

  const thermalScenarios = {
    normal: { temp: "20°C", factor: 1, zh: { text: "常温下离子传输、内阻和热管理负荷更接近标称测试条件。", chain: ["离子传输较顺畅", "内阻与极化较低", "电池无需持续加热", "更多能量用于驱动车辆"] }, en: { text: "At normal temperature, ion transport, resistance, and thermal load are closer to rated test conditions.", chain: ["Ion transport is smoother", "Resistance and polarization are lower", "The pack needs little continuous heating", "More energy reaches the wheels"] } },
    cold: { temp: "−10°C", factor: .85, zh: { text: "低温使电解液更黏、界面反应变慢并提高内阻；电池和座舱加热还要分享储存能量。", chain: ["离子迁移与界面反应变慢", "内阻上升，电压更早触及下限", "电池预热和保温消耗能量", "暖风进一步增加整车能耗"] }, en: { text: "Cold makes electrolyte more viscous, slows interfaces, and raises resistance; pack and cabin heating also share stored energy.", chain: ["Ion and interface kinetics slow", "Higher resistance reaches voltage limits earlier", "Pack preheating consumes energy", "Cabin heating raises vehicle consumption"] } },
    veryCold: { temp: "−25°C", factor: .7, zh: { text: "严寒会显著限制可接受的充电电流与可用功率。这个 70% 情景只是教学示例，不代表所有车型。", chain: ["扩散与反应明显变慢", "析锂风险限制快充", "热泵效率和座舱负荷更不利", "BMS 保留更多安全与功率余量"] }, en: { text: "Very cold conditions strongly limit acceptable charging current and usable power. This 70% scenario is an example, not a value for every vehicle.", chain: ["Diffusion and reactions slow strongly", "Plating risk limits fast charge", "Heat-pump efficiency and cabin load worsen", "BMS preserves more safety and power margin"] } }
  };

  const researchNotes = [
    {
      label: { zh: "研究问题", en: "Research question" },
      title: { zh: "钠离子为什么值得关注，但不必“取代”锂离子？", en: "Why does sodium-ion matter without replacing lithium-ion?" },
      body: { zh: "我更关心它是否能在低成本储能、寒冷地区和部分入门车辆中成为更合适的选择。材料工程不是寻找一个统治所有场景的答案，而是让资源、性能和系统需求匹配。", en: "I am more interested in whether it becomes the better fit for low-cost storage, cold regions, and selected entry vehicles. Materials engineering is not about one answer dominating every use; it is about matching resources, performance, and systems." }
    },
    {
      label: { zh: "系统思考", en: "Systems thinking" },
      title: { zh: "为什么电芯能量密度不能直接换算成整车续航？", en: "Why can cell energy density not directly predict vehicle range?" },
      body: { zh: "电池包还要加入壳体、冷却、BMS、高压安全和碰撞结构；整车又有风阻、轮胎、逆变器、空调和可用 SOC 窗口。单体材料优势会在系统中被重新分配。", en: "A pack adds enclosure, cooling, BMS, high-voltage safety, and crash structure. The vehicle adds drag, tires, inverter loss, HVAC, and an SOC window. A material advantage is redistributed by the system." }
    },
    {
      label: { zh: "热管理", en: "Thermal management" },
      title: { zh: "电池与功率电子的余热，能否成为冬季热源？", en: "Could pack and power-electronics heat support winter heating?" },
      body: { zh: "这个想法有吸引力，但余热并不总在需要时出现，温度等级也未必足够。更合理的研究方向是整车热泵、冷却回路和预热策略如何协同，在不牺牲寿命与安全的情况下减少净能耗。", en: "The idea is attractive, but waste heat is not always available when needed or at a useful temperature. The better question is how heat pumps, coolant loops, and preconditioning cooperate without sacrificing life or safety." }
    },
    {
      label: { zh: "材料取舍", en: "Material trade-off" },
      title: { zh: "为什么能量密度、安全、寿命和成本不能一起达到最大？", en: "Why can energy, safety, life, and cost not all be maximized?" },
      body: { zh: "更高电压和更活泼的材料能提高能量，却会缩小界面和热稳定窗口；更厚的防护提高安全，却增加非活性质量。设计不是消除取舍，而是根据使用场景决定哪些边界最重要。", en: "Higher voltage and more reactive materials raise energy but narrow interface and thermal margins. More protection improves safety but adds inactive mass. Design does not eliminate trade-offs; it decides which boundaries matter for the use case." }
    }
  ];

  const timelineData = [
    { year: "1800", zh: ["伏打电堆", "证明连续电流可以由化学反应产生，让电化学成为可研究的能源系统。"], en: ["Voltaic pile", "Showed that chemical reactions could produce continuous current and made electrochemistry a researchable energy system."] },
    { year: "1859", zh: ["铅酸电池", "第一种可反复充电的实用电池，至今仍服务启动与后备电源。"], en: ["Lead-acid battery", "The first practical rechargeable battery, still used for starting and backup power."] },
    { year: "1899", zh: ["镍镉电池", "建立了耐用碱性二次电池路线，也留下镉污染与回收问题。"], en: ["Nickel-cadmium", "Established a robust alkaline rechargeable route while creating cadmium toxicity and recycling challenges."] },
    { year: "1991", zh: ["商用锂离子电池", "高电压嵌入材料让便携电子快速发展，并为后来的电动车奠定基础。"], en: ["Commercial lithium-ion", "High-voltage intercalation materials enabled portable electronics and later EVs."] },
    { year: "2010s", zh: ["电动车规模化", "材料选择开始与电池包结构、快充网络和整车热管理共同优化。"], en: ["EV scale-up", "Material choices began to co-evolve with pack architecture, fast charging, and vehicle thermal systems."] },
    { year: "2020s", zh: ["多化学体系并行", "LFP 扩张、钠离子进入早期商业化、固态与高硅负极推进中试。"], en: ["Multiple chemistries", "LFP expands, sodium-ion enters early commercialization, and solid-state/high-silicon move through pilots."] }
  ];

  const quizData = [
    { id: "q1", answer: 1, zh: ["Wh 衡量什么？", ["瞬时电流", "一段时间内的能量", "电芯温度", "材料硬度"], "Wh 是能量单位；电压乘以容量可给出理论储能。"], en: ["What does Wh measure?", ["Instant current", "Energy over time", "Cell temperature", "Material hardness"], "Wh is energy; voltage multiplied by capacity gives theoretical stored energy."] },
    { id: "q2", answer: 2, zh: ["串联更多相同电芯，主要提高什么？", ["单体容量", "材料能量密度", "系统电压", "隔膜厚度"], "串联时电压相加；并联时容量和电流能力相加。"], en: ["What mainly rises when identical cells are connected in series?", ["Single-cell capacity", "Material energy density", "System voltage", "Separator thickness"], "Series adds voltage; parallel adds capacity and current capability."] },
    { id: "q3", answer: 0, zh: ["为什么低温快充可能受限？", ["扩散变慢并增加析锂风险", "电池质量消失", "正极变成液体", "电压自动翻倍"], "低温提高极化并减慢负极嵌锂，电流过大时锂更可能沉积在表面。"], en: ["Why can cold fast charging be limited?", ["Slower transport raises lithium-plating risk", "Battery mass disappears", "The cathode becomes liquid", "Voltage doubles"], "Cold raises polarization and slows anode insertion, making surface plating more likely at high current."] },
    { id: "q4", answer: 3, zh: ["为什么电池包比电芯的 Wh/kg 更低？", ["所有电芯都会失去电压", "电子不能进入电池包", "电池包不用冷却", "壳体、冷却、BMS 与安全件增加质量"], "系统硬件不直接储能，却是控制温度、碰撞和故障所必需。"], en: ["Why is pack Wh/kg lower than cell Wh/kg?", ["Every cell loses voltage", "Electrons cannot enter a pack", "A pack needs no cooling", "Enclosure, cooling, BMS, and safety hardware add mass"], "System hardware stores little energy but is necessary for thermal, crash, and fault control."] },
    { id: "q5", answer: 1, zh: ["NCM 811 中的 811 主要代表什么？", ["8.11 V 电压", "镍、钴、锰的大致摩尔比例", "电池包有 811 个电芯", "充电 811 次"], "811 约表示 80% 镍、10% 钴、10% 锰的金属比例，不是产品性能等级。"], en: ["What does 811 mainly mean in NMC 811?", ["An 8.11 V voltage", "Approximate nickel, cobalt, manganese ratio", "811 cells in a pack", "811 charge cycles"], "811 approximates 80% nickel, 10% cobalt, and 10% manganese; it is not a performance grade."] },
    { id: "q6", answer: 2, zh: ["BMS 能直接测量 SOC 吗？", ["可以，SOC 是一个传感器", "只要测温度就能知道", "不能，通常要结合电流、电压和模型估算", "不需要 SOC"], "SOC 不能像温度一样直接读取，常结合安时积分、开路电压与模型/Kalman 滤波估算。"], en: ["Can a BMS directly measure SOC?", ["Yes, SOC is a sensor", "Temperature alone reveals it", "No, it is estimated from current, voltage, and models", "SOC is unnecessary"], "SOC is not directly sensed like temperature; it is estimated with coulomb counting, OCV, and models/Kalman filtering."] }
  ];

  const storyData = [
    { id: "motivation", title: { zh: "Motivation · 动机", en: "Motivation" }, zh: "我希望理解的不只是“哪种电池更好”，而是材料结构为什么会改变电压、容量、热稳定与寿命。把这些关系做成网页，也迫使我判断什么应该被可视化、什么必须说明测试条件。", en: "I wanted to understand not only which battery is better, but why material structure changes voltage, capacity, thermal stability, and life. Turning those relationships into a website also forces me to decide what should be visualized and which conditions must be stated." },
    { id: "question", title: { zh: "The Question · 核心问题", en: "The Question" }, zh: "为什么相同大小的电池表现不同？为什么电芯数据不等于整车续航？为什么低温影响快充？为什么能量、安全、寿命和成本无法同时最优？这些问题把材料科学连接到系统工程。", en: "Why do similar-size cells perform differently? Why does cell data not equal vehicle range? Why does cold affect fast charge? Why can energy, safety, life, and cost not all be optimized? These questions connect materials science to systems engineering." },
    { id: "process", title: { zh: "Design Process · 设计过程", en: "Design Process" }, list: { zh: ["主题研究与来源筛选", "信息架构与学习顺序", "视觉与互动原型", "前端开发与数据结构", "键盘、移动端与功能测试", "根据反馈持续修订"], en: ["Topic research and source selection", "Information architecture and learning order", "Visual and interaction prototyping", "Front-end development and data structure", "Keyboard, mobile, and feature testing", "Continued revision from feedback"] } },
    { id: "learned", title: { zh: "What I Learned · 我学到的", en: "What I Learned" }, zh: "系统性能不等于单一材料性能；一个高容量粉末还要经过电极、界面、电芯、热管理与结构集成。科学数字也必须带着温度、倍率、SOC 窗口和测试方法。视觉表达不是装饰，它会决定读者是否看见这些边界。", en: "System performance is not one material property. A high-capacity powder must become an electrode, interface, cell, thermal system, and structure. Scientific numbers also need temperature, rate, SOC window, and test method. Visual explanation is not decoration; it determines whether readers notice those boundaries." },
    { id: "future", title: { zh: "Future Development · 下一步", en: "Future Development" }, list: { zh: ["增加更多经过核查的材料与电芯数据", "完善热管理和整车能耗模型", "接入公开实验数据的可视化", "继续扩展钠离子、锂硫和固态路线", "记录版本更新与更正", "持续改进无障碍和移动端体验"], en: ["Add more verified material and cell data", "Improve thermal and vehicle-energy models", "Visualize public experimental datasets", "Expand sodium-ion, lithium-sulfur, and solid-state routes", "Record releases and corrections", "Continue accessibility and mobile improvements"] } }
  ];

  const selectors = {
    one: (value, root = document) => root.querySelector(value),
    all: (value, root = document) => [...root.querySelectorAll(value)]
  };

  const getText = (path, lang = state.lang) => {
    const read = (targetLang) => path.split('.').reduce((value, key) => value?.[key], i18n[targetLang]);
    return read(lang) ?? read('zh') ?? read('en') ?? '';
  };

  const local = (record) => record?.[state.lang] ?? record?.zh ?? record?.en ?? record;
  const localValue = (value) => value && typeof value === 'object' && !Array.isArray(value) ? local(value) : value;
  const format = (template, values) => Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value), template);
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  const normalize = (value) => String(value ?? '').normalize('NFKD').toLowerCase().replace(/[\s_\-–—/·,，。()（）]+/g, '');
  const sourceById = (id) => sources.find((source) => source.id === id);
  const technologyById = (id) => technologies.find((technology) => technology.id === id);
  const materialById = (id) => materials.find((material) => material.id === id);

  function init() {
    document.body.classList.add('js-ready');
    generateSystemSvg();
    bindEvents();
    setupReveal();
    setupNavigation();
    setupHeroMotion();
    setupSystemStory();
    renderAll();
    openDeepLinkedMaterial();
  }

  function renderAll() {
    applyLanguage();
    renderOverview();
    renderLearningMap();
    renderExplorer();
    renderIonDemo();
    renderTechnologies();
    renderTechTable();
    renderComparisonControls();
    renderComparison();
    renderSystemNavigation();
    renderSystemStage(state.systemStage, false);
    renderSystemMobile();
    renderThermal();
    renderMaterialFilters();
    renderMaterials();
    renderResearch();
    renderSources();
    renderTimeline();
    renderQuiz();
    renderProjectStory();
    renderTemperatureOptions();
    calculateEnergy();
    calculateRange();
    renderSearchResults();
  }

  function applyLanguage() {
    document.body.classList.remove('zh', 'en');
    document.body.classList.add(state.lang);
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    document.title = getText('meta.title');
    const description = selectors.one('meta[name="description"]');
    if (description) description.content = getText('meta.description');

    selectors.all('[data-i18n]').forEach((element) => {
      element.textContent = getText(element.dataset.i18n);
    });
    selectors.all('[data-i18n-aria]').forEach((element) => {
      element.setAttribute('aria-label', getText(element.dataset.i18nAria));
    });
    selectors.all('[data-i18n-placeholder]').forEach((element) => {
      element.setAttribute('placeholder', getText(element.dataset.i18nPlaceholder));
    });
    selectors.all('[data-i18n-alt]').forEach((element) => {
      element.setAttribute('alt', getText(element.dataset.i18nAlt));
    });
    selectors.all('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === state.lang));
    });
    updateMenuLabel();
  }

  function renderOverview() {
    const target = selectors.one('#overview-metrics');
    if (!target) return;
    const metrics = [
      [technologies.length, state.lang === 'zh' ? '种电池路线' : 'chemistry routes'],
      [materials.length, state.lang === 'zh' ? '种关键材料' : 'key materials'],
      [systemData.length, state.lang === 'zh' ? '个系统阶段' : 'system stages'],
      [2, state.lang === 'zh' ? '种完整语言' : 'complete languages']
    ];
    target.innerHTML = metrics.map(([value, label], index) => `<div><dt>${String(index + 1).padStart(2, '0')}</dt><dd>${value}<small>${escapeHtml(label)}</small></dd></div>`).join('');
  }

  function renderLearningMap() {
    const target = selectors.one('#learning-map-list');
    if (!target) return;
    const items = state.lang === 'zh' ? [
      ['材料与界面', '先理解正极、负极、电解质和隔膜分别限制什么。'],
      ['电池体系', '比较不同化学路线如何交换能量、安全、寿命与成本。'],
      ['系统集成', '观察串并联、BMS、冷却和结构如何改变电芯成绩。'],
      ['整车与研究', '把温度、能耗和材料选择放回真实使用情景。']
    ] : [
      ['Materials and interfaces', 'See what cathodes, anodes, electrolytes, and separators actually limit.'],
      ['Battery chemistries', 'Compare how material routes exchange energy, safety, life, and cost.'],
      ['System integration', 'Watch series/parallel, BMS, cooling, and structure reshape cell results.'],
      ['Vehicle and research', 'Place temperature, consumption, and materials back in real use.']
    ];
    target.innerHTML = items.map(([title, body]) => `<li><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></div></li>`).join('');
  }

  function renderExplorer() {
    const stack = selectors.one('#layer-stack');
    const panel = selectors.one('#layer-panel');
    if (!stack || !panel) return;
    stack.innerHTML = layerData.map((layer, index) => {
      const copy = local(layer);
      const active = layer.id === state.activeLayer;
      return `<button class="layer-button" type="button" role="tab" id="layer-tab-${layer.id}" aria-controls="layer-panel" aria-selected="${active}" tabindex="${active ? 0 : -1}" data-layer="${layer.id}" style="--layer-color:${layer.color};--layer-y:${layer.y}"><span>${escapeHtml(copy.title)}</span><small>${String(index + 1).padStart(2, '0')}</small></button>`;
    }).join('');
    const layer = layerData.find((item) => item.id === state.activeLayer) || layerData[0];
    const copy = local(layer);
    panel.setAttribute('aria-labelledby', `layer-tab-${layer.id}`);
    panel.innerHTML = `<span class="panel-index">${String(layerData.indexOf(layer) + 1).padStart(2, '0')} / ${String(layerData.length).padStart(2, '0')}</span><h3>${escapeHtml(copy.title)}</h3><p>${escapeHtml(copy.function)}</p><dl class="layer-facts"><div><dt>${getText('labels.material')}</dt><dd>${escapeHtml(copy.material)}</dd></div><div><dt>${getText('labels.performance')}</dt><dd>${escapeHtml(copy.performance)}</dd></div><div><dt>${getText('labels.failure')}</dt><dd>${escapeHtml(copy.failure)}</dd></div></dl>`;
  }

  function selectLayer(id, focus = false) {
    if (!layerData.some((layer) => layer.id === id)) return;
    state.activeLayer = id;
    renderExplorer();
    if (focus) selectors.one(`#layer-tab-${CSS.escape(id)}`)?.focus();
  }

  function renderIonDemo() {
    const mode = ionModes[state.ionMode];
    const copy = local(mode);
    const stage = selectors.one('.ion-stage');
    const ionPath = selectors.one('#ion-path');
    const electronPath = selectors.one('#electron-path');
    if (!mode || !stage || !ionPath || !electronPath) return;
    stage.dataset.mode = state.ionMode;
    stage.dataset.paused = String(state.ionPaused);
    selectors.one('#ion-description').textContent = copy.description;
    selectors.one('#ion-steps').innerHTML = copy.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join('');
    selectors.all('[data-ion-mode]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.ionMode === state.ionMode)));
    const charging = state.ionMode === 'charge';
    ionPath.setAttribute('d', charging ? 'M225 292 H675' : 'M675 292 H225');
    electronPath.setAttribute('d', charging ? 'M165 190 C165 55 735 55 735 190' : 'M735 190 C735 55 165 55 165 190');
    const labels = selectors.all('[data-ion-label]');
    const ionLabels = state.lang === 'zh' ? { cathode: '正极', separator: '隔膜 / 电解液', anode: '负极' } : { cathode: 'CATHODE', separator: 'SEPARATOR / ELECTROLYTE', anode: 'ANODE' };
    labels.forEach((label) => { label.textContent = ionLabels[label.dataset.ionLabel]; });
    const svg = selectors.one('#ion-svg');
    if (svg && typeof svg.pauseAnimations === 'function' && typeof svg.unpauseAnimations === 'function') {
      if (state.ionPaused) svg.pauseAnimations(); else svg.unpauseAnimations();
    }
    const pauseButton = selectors.one('#ion-pause');
    pauseButton.textContent = getText(state.ionPaused ? 'ion.resume' : 'ion.pause');
    pauseButton.setAttribute('aria-pressed', String(state.ionPaused));
  }

  function renderTechnologies() {
    const target = selectors.one('#technology-rail');
    if (!target) return;
    target.innerHTML = technologies.map((technology, index) => {
      const copy = local(technology);
      return `<article class="technology-card" style="--tech-color:${technology.color}"><span class="tech-number">${String(index + 1).padStart(2, '0')} / ${String(technologies.length).padStart(2, '0')}</span><div class="tech-symbol">${escapeHtml(technology.short)}</div><h3>${escapeHtml(copy.title)}</h3><p>${escapeHtml(copy.oneLine)}</p><button type="button" data-open-technology="${technology.id}">${getText('labels.learnMore')}</button></article>`;
    }).join('');
  }

  function renderTechTable() {
    const target = selectors.one('#tech-table');
    if (!target) return;
    const headers = ['technology', 'voltage', 'massEnergy', 'cycles', 'maturity'];
    target.innerHTML = `<thead><tr>${headers.map((key) => `<th scope="col">${getText(`labels.${key}`)}</th>`).join('')}</tr></thead><tbody>${technologies.map((technology) => `<tr><th scope="row"><button class="tech-row-button" type="button" data-open-technology="${technology.id}">${escapeHtml(local(technology).title)}</button></th><td>${escapeHtml(localValue(technology.facts.voltage))}</td><td>${escapeHtml(localValue(technology.facts.massEnergy))}</td><td>${escapeHtml(localValue(technology.facts.cycles))}</td><td>${escapeHtml(getText(`maturity.${technology.facts.maturity}`))}</td></tr>`).join('')}</tbody>`;
  }

  function renderComparisonControls() {
    const target = selectors.one('#tech-selectors');
    if (!target) return;
    const atLimit = state.selectedTechnologies.length >= 4;
    target.innerHTML = technologies.map((technology) => {
      const checked = state.selectedTechnologies.includes(technology.id);
      return `<label class="tech-selector" style="--selector-color:${technology.color}"><input type="checkbox" value="${technology.id}" data-compare-technology ${checked ? 'checked' : ''} ${atLimit && !checked ? 'disabled' : ''}><span>${escapeHtml(technology.short)}</span></label>`;
    }).join('');
  }

  function renderComparison() {
    const selected = state.selectedTechnologies.map(technologyById).filter(Boolean);
    drawEnergyRanges(selected);
    renderQualitativeTable(selected);
    renderComparisonInsight(selected);
  }

  function drawEnergyRanges(selected) {
    const svg = selectors.one('#energy-range-chart');
    if (!svg) return;
    const width = 900;
    const left = 170;
    const right = 55;
    const top = 58;
    const rowHeight = 66;
    const maxValue = 500;
    const height = Math.max(220, top + selected.length * rowHeight + 55);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    if (!selected.length) {
      svg.innerHTML = `<text x="450" y="120" text-anchor="middle" class="chart-axis-label">${escapeHtml(getText('compare.choose'))}</text>`;
      return;
    }
    const axisWidth = width - left - right;
    const x = (value) => left + (value / maxValue) * axisWidth;
    const grid = [0, 100, 200, 300, 400, 500].map((value) => `<line class="chart-grid-line" x1="${x(value)}" y1="28" x2="${x(value)}" y2="${height - 38}"></line><text class="chart-axis-label" x="${x(value)}" y="${height - 12}" text-anchor="middle">${value}</text>`).join('');
    const rows = selected.map((technology, index) => {
      const y = top + index * rowHeight;
      const [min, max] = technology.facts.massRange;
      return `<text class="chart-tech-label" x="0" y="${y + 5}">${escapeHtml(technology.short)}</text><line class="chart-range" x1="${x(min)}" y1="${y}" x2="${x(max)}" y2="${y}" stroke="${technology.color}"></line><line class="chart-cap" x1="${x(min)}" y1="${y - 10}" x2="${x(min)}" y2="${y + 10}" stroke="${technology.color}"></line><line class="chart-cap" x1="${x(max)}" y1="${y - 10}" x2="${x(max)}" y2="${y + 10}" stroke="${technology.color}"></line><text class="chart-value" x="${x(max) + 10}" y="${y + 4}">${min}–${max}</text>`;
    }).join('');
    svg.innerHTML = `${grid}${rows}<text class="chart-axis-label" x="${width - right}" y="${height - 12}" text-anchor="end">Wh/kg</text>`;
  }

  function renderQualitativeTable(selected) {
    const target = selectors.one('#qualitative-table');
    if (!target) return;
    const dimensions = ['safety', 'fastCharge', 'cold', 'availability', 'cost', 'maturity'];
    if (!selected.length) {
      target.innerHTML = `<tbody><tr><td>${escapeHtml(getText('compare.choose'))}</td></tr></tbody>`;
      return;
    }
    target.innerHTML = `<thead><tr><th scope="col">${getText('labels.technology')}</th>${dimensions.map((key) => `<th scope="col">${getText(`labels.${key}`)}</th>`).join('')}</tr></thead><tbody>${selected.map((technology) => `<tr><th scope="row">${escapeHtml(technology.short)}</th>${dimensions.map((key) => { const rating = technology.ratings[key]; return `<td><span class="rating rating-${rating}">${escapeHtml(getText(`ratings.${rating}`))}</span></td>`; }).join('')}</tr>`).join('')}</tbody>`;
  }

  function renderComparisonInsight(selected) {
    const target = selectors.one('#comparison-insight');
    const status = selectors.one('#comparison-status');
    if (!target || !status) return;
    if (!selected.length) {
      target.innerHTML = '';
      status.textContent = getText('compare.choose');
      return;
    }
    const highestEnergy = [...selected].sort((a, b) => b.facts.massRange[1] - a.facts.massRange[1])[0];
    const safest = selected.find((technology) => technology.ratings.safety === 'high');
    const sentence = state.lang === 'zh'
      ? `${highestEnergy.short} 在所选技术中具有更高的典型质量能量密度上限。${safest ? `${safest.short} 的安全性被概括为“高”，但真实结果仍取决于电芯设计和系统防护。` : '当前选择中没有被概括为高安全等级的路线。'}`
      : `${highestEnergy.short} has the highest typical gravimetric-energy upper range among this selection. ${safest ? `${safest.short} is summarized as high in safety, while real results still depend on cell and system design.` : 'None of the selected routes is summarized as high in safety.'}`;
    target.innerHTML = `<h4>${getText('compare.insight')}</h4><p>${escapeHtml(sentence)}</p>`;
    if (!status.textContent.includes(getText('compare.max'))) status.textContent = '';
  }

  function generateSystemSvg() {
    const moduleTarget = selectors.one('#module-cells');
    const packTarget = selectors.one('#pack-modules');
    if (moduleTarget) {
      moduleTarget.innerHTML = Array.from({ length: 18 }, (_, index) => {
        const column = index % 6;
        const row = Math.floor(index / 6);
        return `<rect class="module-cell" x="${255 + column * 82}" y="${220 + row * 86}" width="60" height="68" rx="8"></rect>`;
      }).join('');
    }
    if (packTarget) {
      packTarget.innerHTML = Array.from({ length: 8 }, (_, index) => {
        const column = index % 4;
        const row = Math.floor(index / 4);
        return `<rect class="pack-module" x="${175 + column * 155}" y="${235 + row * 135}" width="125" height="100" rx="12"></rect>`;
      }).join('');
    }
  }

  function renderSystemNavigation() {
    const target = selectors.one('#system-steps');
    if (!target) return;
    target.innerHTML = systemData.map((stage, index) => `<button class="system-step" type="button" data-system-jump="${stage.id}" aria-current="${stage.id === state.systemStage ? 'step' : 'false'}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(local(stage).title.split('·')[0].trim())}</strong></button>`).join('');
  }

  function renderSystemStage(id, updateProgress = true) {
    const stage = systemData.find((item) => item.id === id) || systemData[0];
    state.systemStage = stage.id;
    selectors.one('#system-visual')?.setAttribute('data-stage', stage.id);
    const copy = local(stage);
    const detail = selectors.one('#system-detail');
    if (detail) detail.innerHTML = `<span class="system-index">${String(systemData.indexOf(stage) + 1).padStart(2, '0')} / 04</span><h3>${escapeHtml(copy.title)}</h3><p>${escapeHtml(copy.body)}</p><div class="system-facts">${copy.facts.map((fact) => `<p>${escapeHtml(fact)}</p>`).join('')}</div>`;
    selectors.one('#system-equation').textContent = copy.equation;
    selectors.all('[data-system-jump]').forEach((button) => button.setAttribute('aria-current', button.dataset.systemJump === stage.id ? 'step' : 'false'));
    if (updateProgress) {
      const index = systemData.indexOf(stage);
      state.systemProgress = index / (systemData.length - 1);
      updateSystemProgressBar();
    }
  }

  function renderSystemMobile() {
    const target = selectors.one('#system-mobile-stages');
    if (!target) return;
    target.innerHTML = systemData.map((stage, index) => { const copy = local(stage); return `<article class="mobile-system-stage"><span>${String(index + 1).padStart(2, '0')} / 04</span><h3>${escapeHtml(copy.title)}</h3><p>${escapeHtml(copy.body)}</p><p><strong>${escapeHtml(copy.equation)}</strong></p></article>`; }).join('');
  }

  function updateSystemProgressBar() {
    const bar = selectors.one('#system-progress-bar');
    if (bar) bar.style.height = `${Math.max(0, Math.min(100, state.systemProgress * 100))}%`;
  }

  function setupSystemStory() {
    const section = selectors.one('#system-scroll');
    if (!section) return;
    const update = () => {
      state.systemFrame = 0;
      if (window.matchMedia('(max-width: 1080px), (prefers-reduced-motion: reduce)').matches) return;
      const rect = section.getBoundingClientRect();
      const range = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / range));
      state.systemProgress = progress;
      const index = Math.min(systemData.length - 1, Math.floor(progress * systemData.length));
      const id = systemData[index].id;
      if (id !== state.systemStage) {
        state.systemStage = id;
        renderSystemNavigation();
        renderSystemStage(id, false);
      }
      updateSystemProgressBar();
    };
    const schedule = () => {
      if (state.systemFrame) return;
      state.systemFrame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    schedule();
  }

  function jumpToSystemStage(id) {
    const section = selectors.one('#system-scroll');
    const stageIndex = systemData.findIndex((stage) => stage.id === id);
    if (!section || stageIndex < 0 || window.matchMedia('(max-width: 1080px), (prefers-reduced-motion: reduce)').matches) {
      renderSystemStage(id);
      return;
    }
    const top = window.scrollY + section.getBoundingClientRect().top;
    const range = Math.max(1, section.offsetHeight - window.innerHeight);
    window.scrollTo({ top: top + (stageIndex / (systemData.length - 1)) * range, behavior: 'smooth' });
  }

  function renderThermal() {
    const scenario = thermalScenarios[state.thermalMode];
    const copy = local(scenario);
    selectors.one('#thermal-description').textContent = copy.text;
    selectors.one('#thermal-temp').textContent = scenario.temp;
    selectors.one('#thermal-percent').textContent = `${Math.round(scenario.factor * 100)}%`;
    selectors.one('#thermal-bar').style.width = `${scenario.factor * 100}%`;
    selectors.one('#thermal-chain').innerHTML = copy.chain.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    const target = selectors.one('#thermal-control');
    target.innerHTML = Object.keys(thermalScenarios).map((id) => `<button type="button" data-thermal="${id}" aria-pressed="${id === state.thermalMode}">${getText(`thermal.${id}`)}</button>`).join('');
  }

  function renderMaterialFilters() {
    const target = selectors.one('#material-filters');
    if (!target) return;
    const categories = ['all', 'cathode', 'anode', 'electrolyte', 'separator', 'additive', 'collector', 'emerging'];
    target.innerHTML = categories.map((category) => `<button type="button" data-material-filter="${category}" aria-pressed="${category === state.materialFilter}">${getText(`categories.${category}`)}</button>`).join('');
  }

  function materialSearchText(material) {
    return normalize([material.formula, ...material.aliases, material.zh.name, material.en.name, material.zh.role, material.en.role, material.zh.summary, material.en.summary].join(' '));
  }

  function renderMaterials() {
    const target = selectors.one('#material-grid');
    const empty = selectors.one('#material-empty');
    if (!target || !empty) return;
    const query = normalize(state.materialQuery);
    const filtered = materials.filter((material) => (state.materialFilter === 'all' || material.category === state.materialFilter) && (!query || materialSearchText(material).includes(query)));
    target.innerHTML = filtered.map((material) => { const copy = local(material); return `<button class="material-row" type="button" data-open-material="${material.id}"><span class="formula">${escapeHtml(material.formula)}</span><h3>${escapeHtml(copy.name)}</h3><p class="summary">${escapeHtml(copy.summary)}</p><span class="category">${getText(`categories.${material.category}`)}</span><span class="arrow">→</span></button>`; }).join('');
    empty.hidden = filtered.length > 0;
    const count = selectors.one('#material-count');
    if (count) count.textContent = format(getText('materials.count'), { shown: filtered.length, total: materials.length });
  }

  function resetMaterials() {
    state.materialFilter = 'all';
    state.materialQuery = '';
    const input = selectors.one('#material-search');
    if (input) input.value = '';
    renderMaterialFilters();
    renderMaterials();
  }

  function renderResearch() {
    const target = selectors.one('#research-notes');
    if (target) target.innerHTML = researchNotes.map((note) => { const title = local(note.title); const body = local(note.body); return `<article class="research-note"><span class="note-label">${escapeHtml(local(note.label))}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></div></article>`; }).join('');
    const caseTarget = selectors.one('#industry-cases');
    const cases = Array.isArray(experience.cases) ? experience.cases : [];
    if (caseTarget) caseTarget.innerHTML = cases.slice(0, 3).map((item) => `<article class="case-item"><time>${escapeHtml(item.date)}</time><h3>${escapeHtml(local(item.title))}</h3><p>${escapeHtml(local(item.body))}</p><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.source)} ↗</a></article>`).join('');
  }

  function renderSources() {
    const target = selectors.one('#source-list');
    if (!target) return;
    target.innerHTML = sources.map((source) => `<article class="source-entry"><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.title)}</a><p>${escapeHtml(source.publisher)} · ${escapeHtml(source.year)} · ${getText('sources.accessed')} ${escapeHtml(source.accessed)}<br>${escapeHtml(local(source.scope))}</p></article>`).join('');
  }

  function renderTemperatureOptions() {
    const select = selectors.one('#temperature');
    if (!select) return;
    const previous = select.value || state.thermalMode;
    select.innerHTML = Object.keys(thermalScenarios).map((id) => `<option value="${id}">${getText(`thermal.${id}`)} · ${thermalScenarios[id].temp}</option>`).join('');
    select.value = thermalScenarios[previous] ? previous : 'normal';
  }

  function numberValue(selector) {
    return Number.parseFloat(selectors.one(selector)?.value ?? '');
  }

  function calculateEnergy() {
    const voltage = numberValue('#voltage');
    const capacity = numberValue('#capacity');
    const error = selectors.one('#energy-error');
    const output = selectors.one('#energy-result');
    const meter = selectors.one('#energy-meter');
    if (!error || !output || !meter) return;
    const valid = Number.isFinite(voltage) && Number.isFinite(capacity) && voltage >= .1 && voltage <= 1000 && capacity >= .1 && capacity <= 10000;
    if (!valid) {
      error.textContent = getText('calc.invalidEnergy');
      output.innerHTML = '';
      meter.style.width = '0%';
      return;
    }
    error.textContent = '';
    const wh = voltage * capacity;
    const kwh = wh / 1000;
    const whText = wh >= 1000 ? wh.toLocaleString(undefined, { maximumFractionDigits: 0 }) : wh.toLocaleString(undefined, { maximumFractionDigits: 1 });
    const kwhText = kwh.toLocaleString(undefined, { maximumFractionDigits: 3 });
    output.innerHTML = `<strong>${escapeHtml(format(getText('calc.energyResult'), { wh: whText }))}<span class="secondary-result">${escapeHtml(format(getText('calc.energySecondary'), { kwh: kwhText }))}</span></strong><p>${escapeHtml(format(getText('calc.energyExplain'), { power: whText }))}</p>`;
    meter.style.width = `${Math.min(100, 8 + Math.log10(Math.max(1, wh)) * 18)}%`;
  }

  function calculateRange() {
    const size = numberValue('#battery-size');
    const consumption = numberValue('#consumption');
    const usable = numberValue('#usable-capacity');
    const temperature = selectors.one('#temperature')?.value || 'normal';
    const scenario = thermalScenarios[temperature] || thermalScenarios.normal;
    const error = selectors.one('#range-error');
    const output = selectors.one('#range-result');
    const meter = selectors.one('#range-meter');
    if (!error || !output || !meter) return;
    const valid = Number.isFinite(size) && Number.isFinite(consumption) && Number.isFinite(usable) && size >= 1 && size <= 300 && consumption >= 50 && consumption <= 600 && usable >= 50 && usable <= 100;
    if (!valid) {
      error.textContent = getText('calc.invalidRange');
      output.innerHTML = '';
      meter.style.width = '0%';
      return;
    }
    error.textContent = '';
    const buffer = size * (1 - usable / 100);
    const usableEnergy = size * usable / 100;
    const tempLoss = usableEnergy * (1 - scenario.factor);
    const effectiveEnergy = usableEnergy * scenario.factor;
    const range = effectiveEnergy * 1000 / consumption;
    output.innerHTML = `<strong>${escapeHtml(format(getText('calc.rangeResult'), { range: Math.round(range) }))}</strong><p>${escapeHtml(format(getText('calc.rangeExplain'), { size: size.toFixed(1), buffer: buffer.toFixed(1), tempLoss: tempLoss.toFixed(1) }))}</p><p>${escapeHtml(getText('calc.rangeNote'))}</p>`;
    meter.style.width = `${Math.min(100, Math.max(5, range / 7))}%`;
  }

  function renderTimeline() {
    const target = selectors.one('#timeline-list');
    if (!target) return;
    target.innerHTML = timelineData.map((item, index) => { const [title, body] = item[state.lang]; const expanded = index === 3; return `<button class="timeline-item" type="button" aria-expanded="${expanded}"><time>${escapeHtml(item.year)}</time><div><h4>${escapeHtml(title)}</h4><div class="timeline-body">${escapeHtml(body)}</div></div><span class="plus">${expanded ? '−' : '+'}</span></button>`; }).join('');
  }

  function visibleQuizData() {
    return state.quizScope === 'incorrect' ? quizData.filter((question) => state.incorrectQuestions.includes(question.id)) : quizData;
  }

  function renderQuiz() {
    const target = selectors.one('#quiz-questions');
    if (!target) return;
    const questions = visibleQuizData();
    target.innerHTML = questions.map((question, index) => {
      const [prompt, options] = question[state.lang];
      return `<fieldset class="quiz-question" data-question="${question.id}"><legend><span class="quiz-number">${String(index + 1).padStart(2, '0')}</span>${escapeHtml(prompt)}</legend><div class="quiz-options">${options.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="${question.id}" value="${optionIndex}"><span>${escapeHtml(option)}</span></label>`).join('')}</div><p class="quiz-feedback" aria-live="polite"></p></fieldset>`;
    }).join('');
    selectors.one('#quiz-result').textContent = '';
    selectors.one('#quiz-retry').hidden = true;
    state.quizSubmitted = false;
  }

  function scoreQuiz(event) {
    event.preventDefault();
    const questions = visibleQuizData();
    const incorrect = [];
    let score = 0;
    questions.forEach((question) => {
      const fieldset = selectors.one(`[data-question="${CSS.escape(question.id)}"]`);
      const selected = selectors.one(`input[name="${CSS.escape(question.id)}"]:checked`, fieldset);
      const selectedIndex = selected ? Number(selected.value) : -1;
      const correct = selectedIndex === question.answer;
      if (correct) score += 1; else incorrect.push(question.id);
      selectors.all('.quiz-option', fieldset).forEach((label, index) => {
        label.classList.toggle('correct', index === question.answer);
        label.classList.toggle('incorrect', index === selectedIndex && !correct);
      });
      const feedback = selectors.one('.quiz-feedback', fieldset);
      feedback.textContent = `${getText(correct ? 'quiz.correct' : 'quiz.incorrect')} — ${question[state.lang][2]}`;
    });
    state.incorrectQuestions = state.quizScope === 'incorrect'
      ? [...new Set(quizData.filter((question) => !state.incorrectQuestions.includes(question.id)).map((question) => question.id).filter(() => false).concat(incorrect))]
      : incorrect;
    state.quizSubmitted = true;
    const result = selectors.one('#quiz-result');
    const message = format(getText('quiz.score'), { score, total: questions.length });
    result.textContent = score === questions.length ? `${message} · ${getText('quiz.allCorrect')}` : message;
    selectors.one('#quiz-retry').hidden = incorrect.length === 0;
  }

  function retryIncorrect() {
    if (!state.incorrectQuestions.length) return;
    state.quizScope = 'incorrect';
    renderQuiz();
    selectors.one('#quiz-form')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  function resetQuiz() {
    state.quizScope = 'all';
    state.incorrectQuestions = [];
    renderQuiz();
  }

  function renderProjectStory() {
    const nav = selectors.one('#story-nav');
    const content = selectors.one('#story-content');
    if (!nav || !content) return;
    nav.innerHTML = storyData.map((section, index) => `<a href="#story-${section.id}">${String(index + 1).padStart(2, '0')} · ${escapeHtml(local(section.title).split('·')[0].trim())}</a>`).join('');
    content.innerHTML = storyData.map((section) => {
      const body = section[state.lang];
      const list = section.list?.[state.lang];
      return `<section class="story-section" id="story-${section.id}"><h3>${escapeHtml(local(section.title))}</h3>${body ? `<p>${escapeHtml(body)}</p>` : ''}${list ? `<ol>${list.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>` : ''}</section>`;
    }).join('');
  }

  function citationMarkup(sourceIds) {
    return sourceIds.map(sourceById).filter(Boolean).map((source) => `<article class="citation"><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.title)} ↗</a><p>${escapeHtml(source.publisher)} · ${escapeHtml(source.year)} · ${getText('sources.accessed')} ${escapeHtml(source.accessed)}<br>${getText('sources.conditions')}: ${escapeHtml(local(source.conditions))}</p></article>`).join('');
  }

  function openTechnology(id, trigger = null) {
    const technology = technologyById(id);
    if (!technology) return;
    const copy = local(technology);
    const content = selectors.one('#modal-content');
    content.innerHTML = `<p class="modal-category">${getText('dialog.technology')} · ${escapeHtml(technology.short)}</p><h2 id="detail-title">${escapeHtml(copy.title)}</h2><p class="modal-intro">${escapeHtml(copy.oneLine)}</p><dl class="modal-facts"><div><dt>${getText('labels.voltage')}</dt><dd>${escapeHtml(localValue(technology.facts.voltage))}</dd></div><div><dt>${getText('labels.massEnergy')}</dt><dd>${escapeHtml(localValue(technology.facts.massEnergy))}</dd></div><div><dt>${getText('labels.volumeEnergy')}</dt><dd>${escapeHtml(localValue(technology.facts.volumeEnergy))}</dd></div><div><dt>${getText('labels.cycles')}</dt><dd>${escapeHtml(localValue(technology.facts.cycles))}</dd></div><div><dt>${getText('labels.maturity')}</dt><dd>${escapeHtml(getText(`maturity.${technology.facts.maturity}`))}</dd></div></dl><section class="modal-section"><h3>${getText('labels.overview')}</h3><p>${escapeHtml(copy.overview)}</p></section><section class="modal-section"><h3>${getText('labels.how')}</h3><p>${escapeHtml(copy.how)}</p></section><section class="modal-section"><h3>${getText('labels.electrodes')}</h3><p>${escapeHtml(copy.electrodes)}</p></section><div class="modal-columns"><section class="modal-section"><h3>${getText('labels.strengths')}</h3><ul>${copy.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section class="modal-section"><h3>${getText('labels.limitations')}</h3><ul>${copy.limitations.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section></div><section class="modal-section"><h3>${getText('labels.applications')}</h3><p>${escapeHtml(copy.applications.join(' · '))}</p></section><section class="modal-section"><h3>${getText('labels.comparison')}</h3><p>${escapeHtml(copy.comparison)}</p></section><section class="modal-section"><h3>${getText('labels.analogy')}</h3><p>${escapeHtml(copy.analogy)}</p></section><section class="modal-section"><h3>${getText('labels.outlook')}</h3><p>${escapeHtml(copy.outlook)}</p></section><section class="modal-section"><h3>${getText('labels.sources')}</h3><div class="citation-list">${citationMarkup(technology.sourceIds)}</div></section>`;
    openDialog(selectors.one('#detail-modal'), trigger);
  }

  function openMaterial(id, trigger = null, updateUrl = true) {
    const material = materialById(id);
    if (!material) return;
    const copy = local(material);
    const content = selectors.one('#modal-content');
    content.innerHTML = `<p class="modal-category">${getText('dialog.material')} · ${getText(`categories.${material.category}`)}</p><h2 id="detail-title">${escapeHtml(copy.name)}</h2><p class="modal-intro">${escapeHtml(copy.summary)}</p><dl class="modal-facts"><div><dt>${getText('labels.formula')}</dt><dd>${escapeHtml(material.formula)}</dd></div><div><dt>${getText('labels.role')}</dt><dd>${escapeHtml(copy.role)}</dd></div><div><dt>${getText('labels.status')}</dt><dd>${escapeHtml(getText(`maturity.${material.status}`))}</dd></div></dl><div class="modal-columns"><section class="modal-section"><h3>${getText('labels.strengths')}</h3><ul>${copy.advantages.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section class="modal-section"><h3>${getText('labels.limitations')}</h3><ul>${copy.limitations.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section></div><section class="modal-section"><h3>${getText('labels.properties')}</h3><ul>${copy.properties.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section class="modal-section"><h3>${getText('labels.applications')}</h3><p>${escapeHtml(copy.applications)}</p></section><section class="modal-section"><h3>${getText('labels.sustainability')}</h3><p>${escapeHtml(copy.sustainability)}</p></section><section class="modal-section"><h3>${getText('labels.research')}</h3><p>${escapeHtml(copy.research)}</p></section><section class="modal-section"><h3>${getText('labels.sources')}</h3><div class="citation-list">${citationMarkup(material.sourceIds)}</div></section>`;
    openDialog(selectors.one('#detail-modal'), trigger);
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('material', material.id);
      url.hash = 'materials';
      history.replaceState({ material: material.id }, '', url);
    }
  }

  function knowledgeEntries() {
    const glossary = Array.isArray(depthContent.glossary) ? depthContent.glossary : [];
    return [
      ...technologies.map((item) => ({ type: 'technology', id: item.id, category: getText('dialog.technology'), title: local(item).title, description: local(item).oneLine, terms: item.aliases })),
      ...materials.map((item) => ({ type: 'material', id: item.id, category: getText('dialog.material'), title: local(item).name, description: local(item).summary, terms: item.aliases })),
      ...glossary.map((item) => ({ type: 'term', id: item.id, category: local(item.category), title: item[state.lang]?.title || item.short, description: item[state.lang]?.desc || '', terms: [item.short, ...(item[state.lang]?.tags || [])] })),
      ...layerData.map((item) => ({ type: 'layer', id: item.id, category: getText('nav.inside'), title: local(item).title, description: local(item).function, terms: [item.id, local(item).material] }))
    ];
  }

  function renderSearchResults() {
    const input = selectors.one('#global-search-input');
    const target = selectors.one('#global-search-results');
    if (!target) return;
    const query = normalize(input?.value || '');
    if (!query) {
      target.innerHTML = `<p class="empty-state">${escapeHtml(getText('search.hint'))}</p>`;
      return;
    }
    const entries = knowledgeEntries().filter((entry) => normalize([entry.title, entry.description, entry.category, ...entry.terms].join(' ')).includes(query)).slice(0, 16);
    target.innerHTML = entries.length ? entries.map((entry) => `<button class="search-result" type="button" data-search-type="${entry.type}" data-search-id="${entry.id}"><span class="search-type">${escapeHtml(entry.category)}</span><strong>${escapeHtml(entry.title)}</strong><span class="arrow">→</span><small>${escapeHtml(entry.description)}</small></button>`).join('') : `<p class="empty-state">${escapeHtml(getText('search.empty'))}</p>`;
  }

  function openTerm(id, trigger = null) {
    const glossary = Array.isArray(depthContent.glossary) ? depthContent.glossary : [];
    const term = glossary.find((item) => item.id === id);
    if (!term) return;
    const copy = term[state.lang] || term.zh || term.en;
    selectors.one('#modal-content').innerHTML = `<p class="modal-category">${escapeHtml(local(term.category))}</p><h2 id="detail-title">${escapeHtml(copy.title)}</h2><p class="modal-intro">${escapeHtml(copy.desc)}</p>${(copy.sections || []).map(([title, body]) => `<section class="modal-section"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></section>`).join('')}`;
    openDialog(selectors.one('#detail-modal'), trigger);
  }

  function openDialog(dialog, trigger = null) {
    if (!dialog) return;
    state.lastDialogTrigger = trigger || document.activeElement;
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => selectors.one('.modal-close', dialog)?.focus());
  }

  function closeDialog(dialog, restoreFocus = true) {
    if (!dialog?.hasAttribute('open')) return;
    if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
    document.body.classList.remove('modal-open');
    if (dialog.id === 'detail-modal') {
      const url = new URL(window.location.href);
      if (url.searchParams.has('material')) {
        url.searchParams.delete('material');
        history.replaceState({}, '', `${url.pathname}${url.search}${url.hash || '#materials'}`);
      }
    }
    if (restoreFocus && state.lastDialogTrigger instanceof HTMLElement) requestAnimationFrame(() => state.lastDialogTrigger.focus());
  }

  function closeAllDialogs() {
    selectors.all('dialog[open]').forEach((dialog) => closeDialog(dialog));
  }

  function openDeepLinkedMaterial() {
    const materialId = new URL(window.location.href).searchParams.get('material');
    if (materialId && materialById(materialId)) requestAnimationFrame(() => openMaterial(materialId, selectors.one('#materials'), false));
  }

  function setupReveal() {
    const items = selectors.all('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });
    items.forEach((item) => observer.observe(item));
  }

  function setupNavigation() {
    const update = () => {
      selectors.one('#site-header')?.classList.toggle('scrolled', window.scrollY > 16);
      let active = 'overview';
      selectors.all('main > section[id]').forEach((section) => {
        if (section.getBoundingClientRect().top <= 140) active = section.id;
      });
      selectors.all('[data-nav]').forEach((link) => {
        const isActive = link.getAttribute('href') === `#${active}`;
        if (isActive) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
      });
    };
    let frame = 0;
    window.addEventListener('scroll', () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; update(); });
    }, { passive: true });
    update();
  }

  function toggleMenu(force) {
    const menu = selectors.one('#nav-links');
    const button = selectors.one('#menu-toggle');
    if (!menu || !button) return;
    const open = typeof force === 'boolean' ? force : !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    selectors.one('#site-header')?.classList.toggle('menu-visible', open);
    updateMenuLabel();
    if (!open && document.activeElement && menu.contains(document.activeElement)) button.focus();
  }

  function updateMenuLabel() {
    const button = selectors.one('#menu-toggle');
    if (!button) return;
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-label', getText(open ? 'a11y.menuClose' : 'a11y.menuOpen'));
  }

  function setupHeroMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 768px)').matches) return;
    const hero = selectors.one('.hero');
    if (!hero) return;
    const apply = () => {
      state.heroFrame = 0;
      const scroll = Math.min(80, window.scrollY * .09);
      hero.style.setProperty('--hero-scroll', `${scroll}px`);
    };
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--hero-x', ((event.clientX - rect.left) / rect.width - .5).toFixed(3));
      hero.style.setProperty('--hero-y', ((event.clientY - rect.top) / rect.height - .5).toFixed(3));
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--hero-x', 0);
      hero.style.setProperty('--hero-y', 0);
    });
    window.addEventListener('scroll', () => {
      if (state.heroFrame) return;
      state.heroFrame = requestAnimationFrame(apply);
    }, { passive: true });
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
      const layer = event.target.closest('[data-layer]');
      if (layer) selectLayer(layer.dataset.layer);

      const ionMode = event.target.closest('[data-ion-mode]');
      if (ionMode) { state.ionMode = ionMode.dataset.ionMode; renderIonDemo(); }

      if (event.target.closest('#ion-pause')) { state.ionPaused = !state.ionPaused; renderIonDemo(); }

      const technology = event.target.closest('[data-open-technology]');
      if (technology) openTechnology(technology.dataset.openTechnology, technology);

      const material = event.target.closest('[data-open-material]');
      if (material) openMaterial(material.dataset.openMaterial, material);

      const filter = event.target.closest('[data-material-filter]');
      if (filter) { state.materialFilter = filter.dataset.materialFilter; renderMaterialFilters(); renderMaterials(); }

      if (event.target.closest('#material-reset') || event.target.closest('[data-reset-materials]')) resetMaterials();

      const thermal = event.target.closest('[data-thermal]');
      if (thermal) { state.thermalMode = thermal.dataset.thermal; renderThermal(); }

      const systemJump = event.target.closest('[data-system-jump]');
      if (systemJump) jumpToSystemStage(systemJump.dataset.systemJump);

      const timeline = event.target.closest('.timeline-item');
      if (timeline) {
        const expanded = timeline.getAttribute('aria-expanded') === 'true';
        timeline.setAttribute('aria-expanded', String(!expanded));
        selectors.one('.plus', timeline).textContent = expanded ? '+' : '−';
      }

      const searchResult = event.target.closest('[data-search-type]');
      if (searchResult) {
        closeDialog(selectors.one('#search-modal'), false);
        const { searchType, searchId } = searchResult.dataset;
        if (searchType === 'technology') openTechnology(searchId, selectors.one('#open-search'));
        if (searchType === 'material') openMaterial(searchId, selectors.one('#open-search'));
        if (searchType === 'term') openTerm(searchId, selectors.one('#open-search'));
        if (searchType === 'layer') { selectLayer(searchId); location.hash = 'inside'; }
      }
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-compare-technology]')) {
        const id = event.target.value;
        if (event.target.checked && !state.selectedTechnologies.includes(id)) {
          if (state.selectedTechnologies.length >= 4) {
            event.target.checked = false;
            selectors.one('#comparison-status').textContent = getText('compare.max');
          } else state.selectedTechnologies.push(id);
        } else if (!event.target.checked) state.selectedTechnologies = state.selectedTechnologies.filter((item) => item !== id);
        renderComparisonControls();
        renderComparison();
      }
      if (event.target.matches('#temperature')) calculateRange();
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('#voltage, #capacity')) calculateEnergy();
      if (event.target.matches('#battery-size, #consumption, #usable-capacity')) calculateRange();
      if (event.target.matches('#material-search')) { state.materialQuery = event.target.value; renderMaterials(); }
      if (event.target.matches('#global-search-input')) renderSearchResults();
    });

    selectors.one('#clear-comparison')?.addEventListener('click', () => { state.selectedTechnologies = []; selectors.one('#comparison-status').textContent = ''; renderComparisonControls(); renderComparison(); });
    selectors.one('#menu-toggle')?.addEventListener('click', () => toggleMenu());
    selectors.all('.nav-links a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
    selectors.all('[data-lang]').forEach((button) => button.addEventListener('click', () => {
      state.lang = button.dataset.lang;
      localStorage.setItem('battery-lab-lang', state.lang);
      renderAll();
    }));

    selectors.one('#energy-form')?.addEventListener('submit', (event) => { event.preventDefault(); calculateEnergy(); });
    selectors.one('#range-form')?.addEventListener('submit', (event) => { event.preventDefault(); calculateRange(); });
    selectors.one('#quiz-form')?.addEventListener('submit', scoreQuiz);
    selectors.one('#quiz-retry')?.addEventListener('click', retryIncorrect);
    selectors.one('#quiz-reset')?.addEventListener('click', resetQuiz);

    selectors.one('#open-search')?.addEventListener('click', (event) => { openDialog(selectors.one('#search-modal'), event.currentTarget); renderSearchResults(); requestAnimationFrame(() => selectors.one('#global-search-input')?.focus()); });
    selectors.one('#modal-close')?.addEventListener('click', () => closeDialog(selectors.one('#detail-modal')));
    selectors.one('#search-close')?.addEventListener('click', () => closeDialog(selectors.one('#search-modal')));
    selectors.all('dialog').forEach((dialog) => {
      dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(dialog); });
      dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); });
    });

    selectors.one('#layer-stack')?.addEventListener('keydown', (event) => {
      const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const current = layerData.findIndex((layer) => layer.id === state.activeLayer);
      let next = current;
      if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = (current + 1) % layerData.length;
      if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = (current - 1 + layerData.length) % layerData.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = layerData.length - 1;
      selectLayer(layerData[next].id, true);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (selectors.one('dialog[open]')) closeAllDialogs();
        else if (selectors.one('#nav-links')?.classList.contains('open')) toggleMenu(false);
      }
      if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        event.preventDefault();
        const trigger = selectors.one('#open-search');
        openDialog(selectors.one('#search-modal'), trigger);
        requestAnimationFrame(() => selectors.one('#global-search-input')?.focus());
      }
    });
  }

  window.addEventListener('DOMContentLoaded', init);
})();
