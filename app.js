/**
 * Dr. 魏的家庭教育寶典・大衛家腦科學育兒知識庫
 * 交互邏輯與資料驅動核心
 */

const COURSE_DATA = [
  {
    id: "000",
    module: "發刊詞與全景架構",
    category: "發刊詞",
    title: "000 發刊詞｜讓你的孩子享受前沿腦科學研究成果",
    audioTime: "10分08秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=92GB1my8okM5VMEglVWgNnEe4Z73rb",
    tags: ["發刊詞", "父母有效期", "五大腦力", "全腦協同", "敏感期", "神經可塑性"],
    summary: [
      "育兒是不可重來的『超級複雜』任務，汽車火箭做壞能重來，育兒是一錘子買賣。",
      "破除坊間偽科學：大腦是『全腦協同運作』而非左右腦分開；科學界使用『敏感期』而非製造焦慮的『關鍵期』。",
      "父母是有『有效期』的：0~6 歲入學前是父母影響力最大、塑造大腦神經架構的最關鍵黃金期。",
      "面向未來的教養觀：關注的不是孩子當下的考試與死記硬背，而是孩子 15~20 年後應對劇變未來的核心底層能力。"
    ],
    insight: {
      headline: "神經可塑性與面向未來 20 年的底層能力",
      detail: "Dr. 魏強調，現代認知神經科學證實兒童大腦具有極高的神經可塑性。科學是不斷迭代更新、可證偽的。我們給予孩子的教養，應著重於自學能力、好奇心保護、情緒調節與抗挫力，而非落後的陳舊經驗或虛假的商業速成班。"
    },
    actionTips: [
      {
        scenario: "家庭教養心態調試",
        ng: "總拿長輩老經驗或坊間左右腦速成班當標準，焦慮孩子落後。",
        good: "堅守腦科學實證指引，珍惜 0~6 歲父母陪伴黃金期，注重全腦全面發展。"
      },
      {
        scenario: "面對育兒焦慮與選擇",
        ng: "把孩子拱手交給宣稱『不學就輸在起跑線』的商業培訓班。",
        good: "父母親自帶領，以高質量的家庭生活與溫暖互動，點亮孩子大腦已獲證實的科學區域。"
      }
    ],
    crossLinks: [
      { name: "五大腦力全景架構", link: "#architecture" },
      { name: "001 認知靈活性", link: "#lecture-001" },
      { name: "003 靠譜智力提升法", link: "#lecture-003" },
      { name: "DE 3.4.2 教養知識庫", link: "#" }
    ]
  },
  {
    id: "001",
    module: "智力腦（第 1 講）",
    category: "好奇心與思維靈活",
    title: "001 運用三個方法，讓孩子比你更聰明",
    audioTime: "11分33秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=zl12vGeNAM0YVpkrMKdmxjOQBP5oLr",
    tags: ["智力腦", "認知靈活性", "Alison Gopnik", "好奇心", "開放式玩具"],
    summary: [
      "加州大學伯克利分校 Alison Gopnik 實驗：4 歲幼兒在新奇任務（雙物件啟動機器）中猜對率遠超伯克利大學生！",
      "大人受制於『一把鑰匙開一把鎖』的單因果老經驗而思維僵化；孩子思維極度靈活，隨時接納全新規則與假設。",
      "保持好奇心是大腦演化最高效的學習機制，能讓孩子長保接納新訊息的靈活思維。",
      "守護好奇心三建議：鼓勵走入大自然探索鮮活刺激；善用家常材料與開放式玩具（積木、黏土）；絕不輕率給予負面評價。"
    ],
    insight: {
      headline: "認知靈活性（Cognitive Flexibility）與演化適應",
      detail: "人類演化中，成人的穩定經驗在變化緩慢的古代極具生存價值；但現代社會指數級變革，老經驗過時極快。幼兒大腦突觸連結處於發散探索期（Explore），大人則是利用期（Exploit）。育兒目標不是讓孩子變得像我們一樣，而是讓他比我們更靈活、更聰明！"
    },
    actionTips: [
      {
        scenario: "孩子撿髒橡皮筋/枯枝當寶貝",
        ng: "『這是什麼髒東西！快扔掉，手髒死了！』",
        good: "『哇！你發現了什麼神奇寶貝？快跟爸爸說說，它哪裡很特別？』"
      },
      {
        scenario: "孩子出遊發現（如：山頂好冷）",
        ng: "『廢話，山頂當然冷啊，這有什麼好稀奇的。』",
        good: "『真的耶！山頂確實好冷！你觀察力真棒！你看路邊樹葉顏色是不是也變了？』"
      },
      {
        scenario: "挑選玩具策略",
        ng: "買按下按鈕就自己跑、只有單一固定玩法的電動聲光玩具。",
        good: "挑選開放式玩具（樂高、積木、黏土）或利用家裡紙箱吸管自製玩具船。"
      }
    ],
    crossLinks: [
      { name: "000 發刊詞", link: "#lecture-000" },
      { name: "003 靠譜智力法（豐富環境刺激）", link: "#lecture-003" },
      { name: "004 表揚技巧（誇探索過程）", link: "#lecture-004" }
    ]
  },
  {
    id: "002",
    module: "智力腦（第 2 講）",
    category: "3C螢幕管理與多巴胺",
    title: "002 電子設備，是洪水猛獸還是育兒助手？",
    audioTime: "12分11秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=DAgOBQ46R1rnXR258XdLzGqEZ3aY7e",
    tags: ["智力腦", "電子設備", "螢幕時間", "AAP規範", "多巴胺", "真人互動"],
    summary: [
      "大原則：電子設備能不讓孩子玩就盡量不玩！平面螢幕無法提供真實三維世界的多感官神經刺激。",
      "三大傷害：阻礙幼兒立體深度視覺發育；剝奪面對面真人交互（同理心、衝突調節）；抑制褪黑激素分泌破壞睡眠。",
      "美國兒科學會（AAP）規範：1.5歲以下嚴禁螢幕（視訊除外）；2歲以上每天不超過1小時（Dr.魏自家標準：每天≤30分鐘，單次5~10分鐘）。",
      "管理三大鐵律：限定時間（嚴格執行）、限定場景（餐桌與臥室無手機）、提供高品質替代品（戶外運動與桌遊社交）。"
    ],
    insight: {
      headline: "虛擬刺激的單向性 vs 面對面人際互動的神經迴路",
      detail: "人腦最擅長從『面對面的人際互動』中學習識別微表情、情緒意圖與衝突調節，這些是電子螢幕永遠無法賦予的。戶外運動能自然分泌多巴胺（快樂因子），是大腦發育的最佳解方。父母必須以身作則，自己先在孩子面前放下手機！"
    },
    actionTips: [
      {
        scenario: "全家人用餐時",
        ng: "大人一邊滑手機看訊息，小孩看平板配飯才肯吃。",
        good: "餐桌劃為『無電子設備神聖區』，全家專注吃飯、聊當天趣事。"
      },
      {
        scenario: "睡前 1 小時安撫",
        ng: "放 YouTube 動畫讓孩子看著入睡。",
        good: "睡前 1 小時全面禁用螢幕，改為調暗燈光共讀睡前繪本或聽輕柔故事。"
      },
      {
        scenario: "孩子吵著要手機",
        ng: "隨手丟給他手機換取耳根清淨。",
        good: "提供替代方案：『我們去公園騎腳踏車，還是來玩積木挑戰賽？』"
      }
    ],
    crossLinks: [
      { name: "006 專注力微環境（父母身教無手機）", link: "#lecture-006" },
      { name: "DE 3.4.2 教養知識庫 #8（3C時間與幸福感）", link: "#" },
      { name: "《遊戲自控力》", link: "#" }
    ]
  },
  {
    id: "003",
    module: "智力腦（第 3 講）",
    category: "腦神經機制與刺激",
    title: "003 什麼是靠譜的智力提升法？",
    audioTime: "11分22秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=aYB83z6N9dqxVyY8BV7ZMvy0GQDO5g",
    tags: ["智力腦", "神經可塑性", "突觸修剪", "莫扎特效應", "Omega-3", "微環境干預"],
    summary: [
      "粉碎偽科學：補鐵對正常兒童無效；莫扎特效應對嬰幼兒無智力提升作用；電腦專注力軟體僅對多動症有些微效果，正常孩子無效。",
      "靠譜研究三大標尺：正常人群樣本、嚴格對照組（排除年齡自然成長）、效果具備長期穩定性。",
      "真正有效的科學方法：補充優質 Omega-3 / DHA；帶節奏唱兒歌童謠；高品質親子共讀；豐富家庭微環境刺激。",
      "核心底層：0~3歲大腦突觸數量在2歲達到峰值，隨後啟動『用進廢退』的突觸修剪（削減高達40%），環境良性刺激是雕塑大腦的根本動力。"
    ],
    insight: {
      headline: "神經可塑性（Neuroplasticity）與 11 週智商躍升實驗",
      detail: "認知科學家為缺乏刺激的家庭進行 11 週日常微干預（襪子偶、圖片分類、手指謠），孩子智商顯著提升 7 點！刺激不是電擊或神藥，而是父母給予的鮮活生活經驗。大腦的神經可塑性證明：智力不是天生注定的死數字，而是後天可塑的動態系統。"
    },
    actionTips: [
      {
        scenario: "日常在家無聊時",
        ng: "開電視播放古典音樂放著當背景，以為能變聰明。",
        good: "拿一隻舊襪子套在手上扮小狗跟孩子對話，或是帶節奏打拍子唱兒歌。"
      },
      {
        scenario: "教孩子認知生活物品",
        ng: "買昂貴的識字認字閃卡強迫死記硬背。",
        good: "用生活中的水果或積木，玩按顏色、形狀、大小分類的趣味遊戲。"
      },
      {
        scenario: "營養健康支持",
        ng: "盲目聽信偏方給孩子大補特補鐵劑或保健神藥。",
        good: "遵循醫學指引，規律攝取深海魚類或適量補充 Omega-3 / DHA 優質脂肪酸。"
      }
    ],
    crossLinks: [
      { name: "001 好奇心探索", link: "#lecture-001" },
      { name: "004 成長型思維（大腦如肌肉）", link: "#lecture-004" },
      { name: "DE 3.4.1 生活知識庫（幼兒飲食）", link: "#" }
    ]
  },
  {
    id: "004",
    module: "智力腦（第 4 講）",
    category: "成長型心智與誇獎技巧",
    title: "004 表揚有技巧：別讓誇獎害了孩子",
    audioTime: "12分48秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=5Mr9mzb36pP4JLlqgJkWqB2EYNegLD",
    tags: ["智力腦", "成長型思維", "固定型思維", "Carol Dweck", "誇努力", "抗挫力"],
    summary: [
      "斯坦福大學 Carol Dweck 教授研究：誇『聰明/有天賦』灌輸固定型心智；誇『努力/練習』灌輸成長型心智。",
      "誇聰明的致命毒藥：讓孩子背負『必須一直看起來很聰明』的心理包袱，導致逃避挑戰、容易放棄、甚至為維持人設而說謊。",
      "腦電波實驗：面對錯誤時，固定型心智大腦幾乎無活動（迴避）；成長型心智大腦高速運轉，積極分析錯誤並從中學習。",
      "三招誇孩子黃金心法：① 表揚努力，而不是聰明；② 表揚過程，而不是結果；③ 表揚成長，而不是表現。"
    ],
    insight: {
      headline: "成長型心智的教養悖論",
      detail: "你越希望孩子聰明，就越不能誇他聰明！因為『聰明』不是誇出來的，而是大腦在克服高難度挑戰、承受挫折與持續刻意練習中鍛造出來的。努力是孩子自己能掌控的，當孩子相信成就來自努力，他就能擁有掌控自己命運的終身自驅力。"
    },
    actionTips: [
      {
        scenario: "孩子算對題目或背好唐詩",
        ng: "『你好聰明喔！真是個小天才！』",
        good: "『你最近花了不少時間練習，算得越來越熟練了，這份堅持很棒！』"
      },
      {
        scenario: "孩子畫畫或拼積木完成",
        ng: "『哇！真是天才大畫家！太厲害了！』",
        good: "『這棟房子的底座你搭得特別牢固，你是怎麼想到的？顏色搭配很有想法！』"
      },
      {
        scenario: "孩子練琴彈錯音沮喪想放棄",
        ng: "『沒關係啦，你已經彈很好了，別彈了。』",
        good: "『彈錯音代表我們抓到一個小漏洞！來，我們把這個漏洞補起來，完成進步！擊掌！』"
      }
    ],
    crossLinks: [
      { name: "003 神經可塑性（生理硬核基礎）", link: "#lecture-003" },
      { name: "005 心流三原則（及時具體反饋）", link: "#lecture-005" },
      { name: "DE 3.4.2 教養知識庫 #7（正向教養盲點）", link: "#" }
    ]
  },
  {
    id: "005",
    module: "智力腦（第 5 講）",
    category: "自發專注與心流三原則",
    title: "005 培養專注寶寶，家長怎麼做？",
    audioTime: "13分29秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=5Mr9mzb36pP4JLlbgJkWqB2EYNegLD",
    tags: ["智力腦", "專注力", "心流 (Flow)", "米哈里", "最近發展區", "目標微小化"],
    summary: [
      "逼迫孩子在書桌前枯坐只會造成『人在心不在』，專注力是逼不出來的，必須靠引導。",
      "孩子玩遊戲最專注的秘密：遊戲精準符合心理學家米哈里·齊克森提出的『心流（Flow）』最高境界。",
      "引發心流三大原則：① 有明確目標；② 難度與能力相匹配（跳一跳夠得著的最近發展區）；③ 有及時且具體的反饋。",
      "教養反思：家長常下達宏觀抽象指令（如『快去做作業！』），孩子不知所措被誤認不專注；應幫孩子拆解微小步驟。"
    ],
    insight: {
      headline: "遊戲化設計機制與心流正循環飛輪",
      detail: "經常體驗心流的孩子，專注力與技能水平雙雙飛速提升。因為專注所以進步，因為進步更有成就感，進入良性循環。父母切忌提供『扭曲反饋』（完全不理睬，或一開口全是挑剔指責），那會觸發大腦杏仁核恐懼，徹底破壞心流。"
    },
    actionTips: [
      {
        scenario: "孩子要做手工作業或畫畫",
        ng: "『給我快點做作業！坐在那裡不許動！』",
        good: "『今天有三樣任務，我們先做黏土小貓好嗎？第一步，我們先選黃色黏土揉一個圓圓的頭。』"
      },
      {
        scenario: "孩子遇到任務卡關",
        ng: "『這麼簡單都不會！看隔壁小明早就做完了！』",
        good: "『這一步稍微有點難度喔！爸爸幫你扶著底座，你來把屋頂放上去，跳一跳夠得著！』"
      },
      {
        scenario: "提供及時反饋",
        ng: "坐在旁邊挑毛病：『這個貓耳朵太歪了，太醜了吧。』",
        good: "『這個鬍鬚剪得好傳神！如果耳朵稍微立起來一點點，會不會更神氣？我們試試！』"
      }
    ],
    crossLinks: [
      { name: "006 專注力微環境（掃除外在干擾）", link: "#lecture-006" },
      { name: "004 成長型誇獎（心流反饋語言）", link: "#lecture-004" },
      { name: "《遊戲自控力》", link: "#" }
    ]
  },
  {
    id: "006",
    module: "智力腦（第 6 講）",
    category: "前額葉發育與不打擾環境",
    title: "006 利用這三招讓孩子集中注意力",
    audioTime: "09分39秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=zl12vGeNAM0YVpYY2JdmxjOQBP5oLr",
    tags: ["智力腦", "專注力", "前額葉皮層", "衝動抑制", "微環境", "不打擾原則"],
    summary: [
      "幼童注意力不集中是生理常態：大腦前額葉皮層發育緩慢，直到 20 歲左右才完全成熟，切莫輕易扣上『多動症』帽子。",
      "很多專注力問題是家長過度干預造成的：孩子玩耍時大人不斷插話、教英文、送點心，生生打斷了大腦注意力神經鏈路練習。",
      "保護專注力三大心法：① 減少打擾（當孩子專注時，安靜就是最好的愛）；② 營造低刺激的物理微環境；③ 父母樹立專注榜樣（身教重於言教）。",
      "書桌與客廳微環境斷捨離：一次只留一兩樣物品在眼前，減少外源性干擾；孩子專注時父母放下手機專心看書。"
    ],
    insight: {
      headline: "前額葉皮層（Prefrontal Cortex）的抑制功能演練",
      detail: "1 歲前嬰兒極易被聲光捕獲；3~4 歲才慢慢學會過濾干擾。當孩子沉浸在一件事情中時，前額葉正在進行寶貴的執行控制與衝動抑制練習。父母隨意的打斷（哪怕是好意的送水果），都打斷了這個神經訓練過程。打造安靜純粹的微環境，是父母能給的最強外部鷹架。"
    },
    actionTips: [
      {
        scenario: "孩子正專心玩積木或看地上螞蟻",
        ng: "『寶寶快來吃蘋果，補充維生素！』或『看積木上面寫著英文呢，快念！』",
        good: "完全不打擾！閉上嘴巴退後一步，安靜守護孩子沉浸探索的寶貴時刻。"
      },
      {
        scenario: "玩具角與遊戲區整理",
        ng: "箱子裡塞滿十幾種聲光玩具，客廳地上到處散落零件。",
        good: "檯面每次只保留 1~2 套玩具，其餘收進櫃子，定期輪替，維持視覺清爽。"
      },
      {
        scenario: "孩子在寫字或拼圖時大人在旁",
        ng: "大人坐在旁邊滑手機、刷抖音或大聲講電話。",
        good: "大人調成靜音收好手機，拿起一本書聚精會神閱讀，營造專注的家庭氣場。"
      }
    ],
    crossLinks: [
      { name: "005 心流三原則（內外雙修）", link: "#lecture-005" },
      { name: "002 螢幕管理（父母以身作則）", link: "#lecture-002" },
      { name: "DE 3.4.2 教養知識庫 #1（自主性）", link: "#" }
    ]
  }
];

// 頁面渲染邏輯
document.addEventListener("DOMContentLoaded", () => {
  renderCourses(COURSE_DATA);
  setupSearch();
  setupFilterTabs();
  setupQuickToolbox();
});

function renderCourses(courses) {
  const container = document.getElementById("courses-list");
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 20px; background: #fff; border-radius: 14px; border: 1px dashed #E4DCD3;">
        <p style="font-size: 1.1rem; color: #5C6479; margin-bottom: 8px;">🔍 找不到相符的課程或關鍵字</p>
        <span style="font-size: 0.85rem; color: #8E95A5;">試試搜尋「好奇心」、「3C」、「專注力」、「表揚」或「神經可塑性」</span>
      </div>
    `;
    return;
  }

  container.innerHTML = courses.map(course => `
    <article class="course-card" id="lecture-${course.id}">
      <div class="card-top">
        <span class="lecture-badge">${course.module}</span>
        <div class="lecture-meta">
          <span>🎧 ${course.audioTime}</span>
          <a href="${course.sourceUrl}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-weight: 600;">得到原文 ↗</a>
        </div>
      </div>

      <h3 class="card-title">${course.title}</h3>

      <!-- 核心摘要 -->
      <div class="summary-box">
        <div class="summary-title">💡 30 秒核心重點摘要</div>
        <ul class="summary-list">
          ${course.summary.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <!-- 亮點洞察 -->
      <div class="insight-box">
        <div class="insight-header">🧠 腦科學亮點洞察：${course.insight.headline}</div>
        <p class="insight-content">${course.insight.detail}</p>
      </div>

      <!-- 夫妻落地實操錦囊 -->
      <div class="action-box">
        <div class="action-header">🛠️ 大衛家落地實操錦囊（生活情境與話術）</div>
        <table class="action-table">
          <thead>
            <tr>
              <th style="width: 25%;">生活場景</th>
              <th style="width: 37%;">❌ 傳統常見 NG 反應</th>
              <th style="width: 38%;">✅ 大衛家推薦引導話術</th>
            </tr>
          </thead>
          <tbody>
            ${course.actionTips.map(tip => `
              <tr>
                <td><strong>${tip.scenario}</strong></td>
                <td class="ng-text">${tip.ng}</td>
                <td class="good-text">${tip.good}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- 跨講次與知識庫關聯 -->
      <div class="cross-links">
        <span class="cross-link-label">🔗 關聯課程與知識庫：</span>
        ${course.crossLinks.map(link => `
          <a href="${link.link}" class="cross-tag">${link.name}</a>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      renderCourses(COURSE_DATA);
      return;
    }

    const filtered = COURSE_DATA.filter(course => {
      const inTitle = course.title.toLowerCase().includes(query);
      const inTags = course.tags.some(t => t.toLowerCase().includes(query));
      const inSummary = course.summary.some(s => s.toLowerCase().includes(query));
      const inInsight = course.insight.headline.toLowerCase().includes(query) || course.insight.detail.toLowerCase().includes(query);
      const inAction = course.actionTips.some(a => a.scenario.toLowerCase().includes(query) || a.good.toLowerCase().includes(query));
      return inTitle || inTags || inSummary || inInsight || inAction;
    });

    renderCourses(filtered);
  });
}

function setupFilterTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      if (filter === "all") {
        renderCourses(COURSE_DATA);
      } else if (filter === "000") {
        renderCourses(COURSE_DATA.filter(c => c.id === "000"));
      } else if (filter === "zhili") {
        renderCourses(COURSE_DATA.filter(c => c.id !== "000"));
      } else if (filter === "focus") {
        renderCourses(COURSE_DATA.filter(c => c.id === "005" || c.id === "006"));
      } else if (filter === "mindset") {
        renderCourses(COURSE_DATA.filter(c => c.id === "004"));
      } else if (filter === "curiosity") {
        renderCourses(COURSE_DATA.filter(c => c.id === "001" || c.id === "003"));
      }
    });
  });
}

function setupQuickToolbox() {
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: "Dr. 魏的家庭教育寶典・大衛家腦科學育兒知識庫",
        text: "北大教授 Dr. 魏前沿腦科學育兒法，大衛與太太專屬實操錦囊！",
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log("Share skipped", err);
        }
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("已複製網頁連結！可以直接傳送給老婆囉 ❤️");
      }
    });
  }
}
