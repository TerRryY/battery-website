"use strict";

window.BATTERY_EXPERIENCE = {
  primer: [
    {
      key: "01", zh: ["电势差", "电池两端推动电子移动的“高度差”。电压越高，不等于容量越大；它描述的是每单位电荷可获得的能量。"],
      en: ["Electric potential", "The energy difference that pushes electrons through a circuit. Higher voltage does not automatically mean more capacity."]
    },
    {
      key: "02", zh: ["电子与离子", "电子走外部导线做功，离子在电解质内部迁移以维持电荷平衡。两条路径必须同时畅通，电池才能持续输出。"],
      en: ["Electrons and ions", "Electrons do useful work through the outer circuit while ions move inside the electrolyte to maintain charge balance."]
    },
    {
      key: "03", zh: ["SOC 与 SOH", "SOC 是当前还剩多少电，SOH 是这块电池相对新电池老化了多少。前者像水位，后者像容器是否变小。"],
      en: ["SOC and SOH", "SOC estimates charge remaining. SOH estimates aging relative to a new battery: water level versus the size of the container."]
    },
    {
      key: "04", zh: ["正极与负极", "充放电时锂离子在两极之间往返。正负极名称按放电状态定义；充电时反应方向改变，但名称通常不交换。"],
      en: ["Cathode and anode", "Ions shuttle between two electrodes. Their battery names are defined by discharge operation and normally remain fixed during charging."]
    }
  ],
  mechanisms: [
    {
      id: "intercalation", zh: ["离子嵌脱", "充电时，锂离子离开正极晶格、穿过电解质并嵌入负极；电子从外电路到达负极。放电时两条路径反向。", "动画中的亮点代表离子，外圈细线代表电子路径。晶格不是被“装满液体”，而是在允许的位置中可逆占位。"],
      en: ["Ion intercalation", "During charging, lithium ions leave the cathode lattice, cross the electrolyte, and enter the anode while electrons arrive through the outer circuit.", "Bright dots represent ions; the outer path represents electrons. A lattice is not a liquid tank: ions occupy allowed sites reversibly."]
    },
    {
      id: "sei", zh: ["SEI 生长", "电解液在低电位负极表面发生还原，形成允许锂离子通过、却尽量阻止电解液继续分解的钝化层。", "稳定薄层能保护负极；高温、低温快充和硅膨胀会让它开裂重建，持续消耗活性锂并增加阻抗。"],
      en: ["SEI growth", "Electrolyte reduction forms a passivation layer on the anode that passes lithium ions while limiting further decomposition.", "A stable thin film protects the anode. Heat, cold fast charging, and silicon expansion can crack it and consume active lithium during repair."]
    },
    {
      id: "runaway", zh: ["热失控传播", "局部缺陷、过充或外部加热可能触发放热副反应。当产热速度超过散热能力，温度会自加速上升。", "相邻电芯是否被引燃取决于热量、热气流、间距、隔热层和泄压路径。工程目标是降低概率、延缓传播并争取响应时间。"],
      en: ["Thermal runaway propagation", "A defect, overcharge, or external heating can trigger exothermic reactions. Temperature accelerates when heat generation exceeds removal.", "Propagation depends on heat, gas flow, spacing, barriers, and vent paths. Engineering aims to reduce probability, delay propagation, and create response time."]
    }
  ],
  cases: [
    {
      date: "2026-02", stage: { zh: "量产车型发布", en: "Production vehicle announcement" },
      title: { zh: "钠离子进入乘用车验证阶段", en: "Sodium-ion enters passenger-car validation" },
      body: { zh: "宁德时代与长安发布搭载 Naxtra 钠离子电池的量产乘用车，并称车型计划于 2026 年中上市。文中的 175 Wh/kg、低温保持率等为厂商公布指标，仍应等待更广泛的独立路测与全寿命数据。", en: "CATL and CHANGAN announced a production passenger vehicle using Naxtra sodium-ion cells, planned for market by mid-2026. The stated 175 Wh/kg and cold-weather figures are manufacturer claims pending broader independent lifecycle data." },
      source: "CATL", url: "https://www.catl.com/en/news/6720.html"
    },
    {
      date: "2025-09", stage: { zh: "标准认证", en: "Standards certification" },
      title: { zh: "钠离子电池通过新国标认证", en: "Sodium-ion battery passes new-standard certification" },
      body: { zh: "Naxtra 获得中国新国标相关认证，说明技术正从样品展示走向法规与整车导入。但认证证明符合规定测试，不等同于所有使用场景下的长期性能已经验证。", en: "Naxtra received certification under China's updated standards, a step from demonstration toward vehicle integration. Certification verifies specified tests, not every long-term use case." },
      source: "CATL", url: "https://www.catl.com/en/news/6563.html"
    },
    {
      date: "2022–2026", stage: { zh: "规模化结构路线", en: "Scaled architecture path" },
      title: { zh: "CTP 从概念走向多车型平台", en: "CTP moves from concept to vehicle platforms" },
      body: { zh: "麒麟电池展示了减少传统模组层级、提升空间利用率的 CTP 路线。要注意：CTP 是结构架构，不是正极化学体系；它可以与不同电芯化学组合。", en: "Qilin illustrates a CTP route that reduces conventional module hardware. CTP is a pack architecture, not a cathode chemistry, and can be paired with different cell chemistries." },
      source: "CATL", url: "https://www.catl.com/en/news/6091.html"
    }
  ],
  sectors: [
    { zh: ["电网储能", "更看重度电成本、循环寿命、消防与长时储能能力，体积和重量往往不如车辆敏感。"], en: ["Grid storage", "Prioritizes lifetime cost, fire protection, cycle life, and long duration more than vehicle-grade mass and volume."] },
    { zh: ["消费电子", "追求体积能量密度、轻薄、快充和数年寿命，对电芯一致性与机械防护要求极高。"], en: ["Consumer electronics", "Prioritizes volumetric energy, thin packaging, fast charging, and several years of reliable use."] },
    { zh: ["航空航天", "把比能量、低温、辐射、冗余和不可维护条件放在一起权衡，认证周期远长于消费产品。"], en: ["Aerospace", "Balances specific energy, cold, radiation, redundancy, and limited serviceability under long qualification cycles."] }
  ],
  maintenance: {
    reviewed: "2026-06-20",
    zh: ["内容如何维护", "基础机理按教材与同行评审综述核对；产业数据优先引用企业原始公告和政府/机构资料，并明确标注“厂商公布”或“教育性估算”。每季度复核一次链接、量产状态与数值范围，重要更正写入更新日志。", "适合零基础读者、高中生、本科入门者和需要跨学科概览的工程人员；它不是电芯设计、法规认证或安全诊断手册。"],
    en: ["How the site is maintained", "Fundamentals are checked against textbooks and peer-reviewed reviews. Industry data prioritizes original company and institutional sources, clearly labeled as manufacturer claims or educational estimates. Links, production status, and ranges are reviewed quarterly.", "Designed for beginners, high-school and early university learners, and engineers seeking a cross-disciplinary overview. It is not a cell-design, certification, or safety-diagnostic manual."]
  }
};
