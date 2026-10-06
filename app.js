/**
 * Dr. 魏的家庭教育寶典・大衛家腦科學育兒知識庫
 * 交互邏輯與資料驅動核心（共 15 講完整收錄）
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
    isDaughterTarget: true,
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
      { name: "👧 女兒月齡指南", link: "#daughter-guide" },
      { name: "001 認知靈活性", link: "#lecture-001" },
      { name: "003 靠譜智力提升法", link: "#lecture-003" }
    ]
  },
  {
    id: "001",
    module: "智力腦（第 1 講）",
    category: "好奇心與思維靈活",
    title: "001 運用三個方法，讓孩子比你更聰明",
    audioTime: "11分33秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=zl12vGeNAM0YVpkrMKdmxjOQBP5oLr",
    tags: ["智力腦", "認知靈活性", "Alison Gopnik", "好奇心", "開放式玩具", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
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
    tags: ["智力腦", "電子設備", "螢幕時間", "AAP規範", "多巴胺", "真人互動", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
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
      { name: "007 挑選電子產品原則", link: "#lecture-007" },
      { name: "DE 3.4.2 教養知識庫 #8（3C時間）", link: "#" }
    ]
  },
  {
    id: "003",
    module: "智力腦（第 3 講）",
    category: "腦神經機制與刺激",
    title: "003 什麼是靠譜的智力提升法？",
    audioTime: "11分22秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=aYB83z6N9dqxVyY8BV7ZMvy0GQDO5g",
    tags: ["智力腦", "神經可塑性", "突觸修剪", "莫扎特效應", "Omega-3", "微環境干預", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
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
    isDaughterTarget: false,
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
      { name: "012 刻意練習（教練式反饋）", link: "#lecture-012" }
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
    isDaughterTarget: false,
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
      { name: "012 刻意練習（學習區概念）", link: "#lecture-012" }
    ]
  },
  {
    id: "006",
    module: "智力腦（第 6 講）",
    category: "前額葉發育與不打擾環境",
    title: "006 利用這三招讓孩子集中注意力",
    audioTime: "09分39秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=zl12vGeNAM0YVpYY2JdmxjOQBP5oLr",
    tags: ["智力腦", "專注力", "前額葉皮層", "衝動抑制", "微環境", "不打擾原則", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
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
      { name: "014 玩具角佈置（物理動靜分區）", link: "#lecture-014" },
      { name: "002 螢幕管理（父母以身作則）", link: "#lecture-002" }
    ]
  },
  {
    id: "007",
    module: "智力腦（第 7 講）",
    category: "3C產品挑選與共同注意",
    title: "007 家長如何幫孩子挑選電子產品？",
    audioTime: "10分30秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370814607649904",
    tags: ["智力腦", "3C挑選", "視頻缺陷效應", "共同注意", "互動性", "AI時代起跑線", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
    summary: [
      "3 歲以下存在『視頻缺陷效應』：幼兒大腦尚未成熟，無法將平面二維螢幕內容遷移到真實世界。2 歲看電視找物成功率遠低於真人現場示範。",
      "電子產品最大隱形殺傷力是破壞『共同注意（Joint Attention）』：語言與認知學習靠大人與孩子注視同一物品時的即時雙向反饋，單向螢幕會切斷此神經連結。",
      "挑選三大原則：互動性強（體感、親人視訊）、創造性強（平板畫畫、拍照、語音互動）、貼近生活（紀錄片、地圖導航）。",
      "破解 AI 焦慮：不用擔心不看螢幕輸在起跑線！人腦拼算力無意義，未來最珍貴的是機器無法取代的情緒力、運動力與創造力。"
    ],
    insight: {
      headline: "視頻缺陷效應（Video Deficit Effect）與共同注意神經回路",
      detail: "2 歲以下嬰兒大腦高度依賴多感官真實互動，單向被動螢幕無法刺激突觸發育。只有具備雙向反饋的真實社交互動，才能激活鏡像神經元與社交腦區。父母主動增加孩子的輸出環節（大聲朗讀、看地圖認路），才能化被動為互動。"
    },
    actionTips: [
      {
        scenario: "孩子哭鬧要求看手機影片",
        ng: "為了耳根清淨隨手點開 YouTube 短影音塞給孩子。",
        good: "『寶寶想看新奇的東西對不對？我們來用相機功能，拍拍客廳裡找到的 3 個紅色東西！』"
      },
      {
        scenario: "外出開車或散步時",
        ng: "在後座塞平板看卡通打發無聊。",
        good: "打開手機導航地圖給孩子看：『你看這條藍色路線，前面有一個轉彎喔，你幫爸爸看看路牌在哪裡？』"
      },
      {
        scenario: "長輩想念孫女時",
        ng: "認為螢幕全面有害，完全拒絕任何視訊。",
        good: "放心使用視訊通話！通話時引導孩子揮手、叫阿公阿嬤，這是高品質的真實雙向社交互動。"
      }
    ],
    crossLinks: [
      { name: "002 螢幕管理（AAP規範）", link: "#lecture-002" },
      { name: "006 專注力微環境（父母身教無手機）", link: "#lecture-006" },
      { name: "013 提升空間認知（地圖與攝影）", link: "#lecture-013" }
    ]
  },
  {
    id: "008",
    module: "智力腦（第 8 講）",
    category: "探究式學習與問題尋寶",
    title: "008 怎樣帶孩子逛博物館？",
    audioTime: "10分15秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370821050522592",
    tags: ["智力腦", "博物館", "探究式學習", "Muse靈感", "提問法", "科學家思維"],
    isDaughterTarget: false,
    summary: [
      "核心目標是『激發思考』而非『記憶知識』：博物館（Museum）是靈感場所，逼孩子背展品只會變成僵化的活字典。",
      "家長無需專業知識：出發前花 20 分鐘了解亮點，帶著 2~3 個問題去『尋寶』，重點在引導觀察、提出假設與現場驗證。",
      "提問三步法（以海洋館為例）：引導觀察（為什麼有的魚游很快？）$\rightarrow$ 提出假設（因為怕被吃）$\rightarrow$ 驗證修正（那這條小魚為什麼游得慢？）。",
      "優先挑選『能動、可操作、可沉浸體驗』的互動展館，讓孩子像科學家做實驗一樣摸一摸、按一按。"
    ],
    insight: {
      headline: "探究式學習與大腦內源性多巴胺獎勵機制",
      detail: "被動聽大人說教，大腦突觸連結極弱；透過自己觀察、提出假設並驗證，大腦多巴胺系統會爆發式激發求知慾與深度記憶。如果孩子對安靜的靜態展品沉浸專注，切莫硬拉去互動區打斷，尊重孩子的自發興趣。"
    },
    actionTips: [
      {
        scenario: "參觀海洋生物館",
        ng: "拿著導覽牌逐字念：『這是條紋斑竹鯊，產於西太平洋...快記下來！』",
        good: "『哇！這隻魚長得好扁平喔，你猜它為什麼要貼在沙子底下？它是在躲誰、還是在抓誰呢？』"
      },
      {
        scenario: "參觀科學館/機械館",
        ng: "催促孩子：『那邊有更好玩的，快點拍完照走人！』",
        good: "陪伴操作齒輪裝置：『你轉動這個大輪子，看看那邊的小輪子轉得快還是慢？』"
      },
      {
        scenario: "行前準備",
        ng: "完全不做功課，到了現場走馬看花、小孩喊累討抱。",
        good: "前一晚看繪本：『明天我們要去尋找三種不同形狀的翅膀，我們當小小偵探！』"
      }
    ],
    crossLinks: [
      { name: "001 好奇心保護", link: "#lecture-001" },
      { name: "009 小小科學家（因果地圖）", link: "#lecture-009" },
      { name: "013 提升空間認知（地圖導覽）", link: "#lecture-013" }
    ]
  },
  {
    id: "009",
    module: "智力腦（第 9 講）",
    category: "因果推理與小小科學家",
    title: "009 小寶寶能培養科學思維嗎？",
    audioTime: "11分05秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370827492449248",
    tags: ["智力腦", "科學思維", "Alison Gopnik", "因果地圖", "Causal Map", "重力實驗", "費曼", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
    summary: [
      "寶寶天生是小小科學家：伯克利大學 Alison Gopnik 證實，幼兒大腦天生會主動構建『因果關係示意圖（Causal Map）』。",
      "一歲多愛扔東西不是搗蛋，是物理實驗：手鬆開 $\rightarrow$ 必然往下掉 $\rightarrow$ 撞擊不同地面發出不同聲音，反覆驗證因果規律。",
      "重思維輕知識：科學思維本質是發現事物之間的因果關係，會畫因果地圖是高階創造力的源頭。",
      "費曼父親的智慧：知道全世界鳥的名字對鳥本身一無所知，關鍵是觀察鳥在做什麼；多問問題引導思考，少直接給答案。"
    ],
    insight: {
      headline: "貝葉斯大腦（Bayesian Brain）與主動因果地圖構建",
      detail: "幼兒是主動的統計推理者，透過探索行動持續修正大腦對世界的預測模型。問 2 歲孩子抽象的天黑原因他不懂，但問餓了為什麼開冰箱他精確知曉。父母保護日常小實驗，就是守護未來創造力的根基。"
    },
    actionTips: [
      {
        scenario: "寶寶在餐椅上反覆把湯匙扔到地上",
        ng: "生氣拍桌：『不要再丟了！搗蛋鬼！再丟就沒收！』",
        good: "理解重力實驗：『哇，湯匙掉下去匡噹一聲對不對？好，湯匙要休息了，我們來丟軟毛球試試看！』"
      },
      {
        scenario: "孩子問：『為什麼樹葉會掉下來？』",
        ng: "直接背書給答案：『因為秋天氣溫變低葉綠素分解了。』",
        good: "『你觀察到樹葉掉下來了！你看那棵松樹為什麼還綠油油的？我們去摸摸看兩種葉子有什麼不一樣！』"
      },
      {
        scenario: "洗澡時玩水玩具",
        ng: "『別玩水了，水都濺出來了，快洗完出去！』",
        good: "『你看！小黃鴨浮在水面上了，那這塊肥皂丟進水裡會浮起來還是沉下去？我們猜猜看！』"
      }
    ],
    crossLinks: [
      { name: "001 好奇心探索", link: "#lecture-001" },
      { name: "008 博物館探究提問法", link: "#lecture-008" },
      { name: "010 數學思維（因果與邏輯）", link: "#lecture-010" }
    ]
  },
  {
    id: "010",
    module: "智力腦（第 10 講）",
    category: "早期數學啟蒙三思維",
    title: "010 掌握三個思維方式，讓孩子愛上數學",
    audioTime: "11分50秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370832861222152",
    tags: ["智力腦", "數學啟蒙", "數算思維", "幾何思維", "測量思維", "頂葉表徵", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
    summary: [
      "早期數學能力預測未來數理成績與識字閱讀能力：數學是 STEM 的核心基石，絕非枯燥做題。",
      "數算思維：核心是理解『數字=數量』。2歲半前只有模糊數感，會背數不等於懂數量；3~4歲才理解『數到幾就是總數』。",
      "幾何思維：2歲左右多用具體形狀詞彙溝通；2歲半能描述形狀並理解抽象聯想（披薩像三角形）；多玩七巧板與積木轉換。",
      "測量思維：日常多問比較類問題（大小/長短/輕重/前後），引入公斤公分單位與『還有十分鐘吃飯』的時間感知。",
      "父母數學焦慮會傳染：父母表現出對數學的欣賞，把數學做成營養又好吃的菜餚。"
    ],
    insight: {
      headline: "頂葉頂內溝（IPS）的數量空間神經重疊表徵",
      detail: "用手指指著實物點數與觀察幾何形狀，能促進大腦頂葉神經突觸跨模態連結。心理旋轉能力是預測未來理工成就的最強神經指標。"
    },
    actionTips: [
      {
        scenario: "吃水果點心（葡萄/藍莓）",
        ng: "塞到孩子嘴裡，只管吃完收工。",
        good: "排在盤子裡：『這裡有幾顆藍莓？我們一起伸出食指點點看：1、2、3！最後數到 3，所以盤子裡有 3 顆藍莓！』"
      },
      {
        scenario: "散步走在路上看建築與招牌",
        ng: "沿路放空滑手機或催促快走。",
        good: "『寶寶看！那個路標是什麼形狀的？是三角形！那前方的車牌是什麼形狀的？長方形！』"
      },
      {
        scenario: "收拾玩具時間",
        ng: "罵孩子：『玩具丟得滿地都是，快點收一收！』",
        good: "『我們來辦小熊排隊大賽！從最高的小熊排到最矮的小熊，你來當裁判指揮！』"
      }
    ],
    crossLinks: [
      { name: "011 培養數學能力从小開始", link: "#lecture-011" },
      { name: "013 提升空間認知（幾何思維基礎）", link: "#lecture-013" },
      { name: "014 玩具角佈置（小黑板與分類）", link: "#lecture-014" }
    ]
  },
  {
    id: "011",
    module: "智力腦（第 11 講）",
    category: "生活化數算與睡前數學",
    title: "011 培養數學能力要從小開始？",
    audioTime: "11分18秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370877958378760",
    tags: ["智力腦", "數學啟蒙", "生活即數學", "睡前聊數學", "爬樓梯算數", "物權意識", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
    summary: [
      "寶寶出生自帶模糊計算（數感）：6個月大嬰兒已能憑視覺直覺分辨兩堆數量多寡；啟蒙是用天生數感支撐後天符號運算。",
      "啟蒙三大配方：數學即生活 + 數學即解決問題 + 數學即溝通；在過日子與遊戲中順便學會。",
      "生活實操法：爬樓梯算數（親自走步數驗證）、拿碗筷算數（一人一個一對一對應）、買水果算總額。",
      "《Science》睡前聊數學奇蹟：每週至少2次睡前溫暖討論數學，一學年後數學技能領先同齡對照組3個月！",
      "物權與分享：分享的前提是先建立清晰物權（知道什麼是我的），引導詢問、換位思考與物品交換。"
    ],
    insight: {
      headline: "社會情感支持與數學神經網絡的無焦慮耦聯",
      detail: "在睡前放鬆、充滿親密感的環境中聊數學，副交感神經主導、杏仁核無防禦，大腦建立『數學 = 溫暖、有趣、探索』的神經記憶印痕。驗證的重點是讓孩子知道問題有多種解法。"
    },
    actionTips: [
      {
        scenario: "上樓梯回家時",
        ng: "抱著孩子搭電梯或悶頭爬樓梯。",
        good: "牽著小手一步一台階數：『1、2、3、4、5！我們邁了 5 步！再走 2 步就到轉角囉！』"
      },
      {
        scenario: "全家開飯準備餐具",
        ng: "父母一手包辦，不讓孩子碰。",
        good: "『今天爸爸、媽媽和寶寶 3 個人吃飯，請幫忙拿 3 個小碗，一人一個喔！』"
      },
      {
        scenario: "睡前 10 分鐘聊天時光",
        ng: "考問枯燥算術：『1 加 2 等於多少？快說！』",
        good: "溫暖聊生活：『今天在公園看到 2 隻黑狗狗、1 隻白狗狗，總共有幾隻小狗在草地上跑呢？』"
      },
      {
        scenario: "搶玩具衝突引導",
        ng: "強迫讓步：『你是姐姐要大度，給弟弟玩！』",
        good: "捍衛物權示範交換：『這是寶寶的挖土機，我們可以問問弟弟：要不要用小鏟子交換玩 5 分鐘？』"
      }
    ],
    crossLinks: [
      { name: "010 數學三思維", link: "#lecture-010" },
      { name: "004 成長型表揚（誇驗證過程）", link: "#lecture-004" },
      { name: "014 玩具角佈置（買菜遊戲）", link: "#lecture-014" }
    ]
  },
  {
    id: "012",
    module: "智力腦（第 12 講）",
    category: "刻意練習與教練鷹架",
    title: "012 一萬小時不靠譜，刻意練習更重要",
    audioTime: "12分35秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370884401917040",
    tags: ["智力腦", "刻意練習", "一萬小時定律迷思", "學習區", "最近發展區", "任務拆解", "分散練習"],
    isDaughterTarget: false,
    summary: [
      "快樂教育難以精通技能：練習能將低層次思考『自動化』，為高層次思考騰出寶貴的大腦帶寬。",
      "破除兩大坑：『一萬小時定律』忽略天賦與領域差異；『熟能生巧』機械重複只能帶來平庸，突破瓶頸靠刻意練習。",
      "難度定位於『學習區』：比當前水平高一點點，『踮踮腳夠得著』，太難降難度、太易加難度。",
      "家長當教練三方法：① 拆解任務（分塊練習到自動化）；② 分散練習（每天半小時 > 一週整天，間隔效應）；③ 即時具體反饋。",
      "外部前額葉鷹架：幼兒前額葉發育未成熟，父母充當外部前額葉承擔拆解、規劃與調控功能。"
    ],
    insight: {
      headline: "神經髓鞘化（Myelination）與間隔效應（Spacing Effect）",
      detail: "刻意練習促進神經軸突髓鞘增厚，信號傳導加速百倍；分散練習給予大腦睡眠固化神經記憶的時間，學習效率成倍超越集中突擊。父母協助孩子把大目標拆成小積木，是建立勝任感的核心途徑。"
    },
    actionTips: [
      {
        scenario: "孩子學畫畫/積木卡關想放棄",
        ng: "『不想學就算了，快樂最重要！』或『今天沒畫完不准吃飯！』",
        good: "『寶寶，我們遇到了大怪獸對不對？今天我們先把怪獸的腳塗好顏色就好，動手！』"
      },
      {
        scenario: "日常各類技能練習安排",
        ng: "平日完全不碰，週末一口氣逼孩子連續練 3~4 小時。",
        good: "『我們每天固定練習 15~20 分鐘，像刷牙一樣輕鬆自然！』"
      },
      {
        scenario: "給孩子反饋時的話術",
        ng: "隨口敷衍：『好棒喔天才！』或挑刺：『這裡又錯了真粗心！』",
        good: "『今天線條比昨天平整多了，手握筆很有力！第三個圓圈如果再圓一點就更完美了，再試一次！』"
      }
    ],
    crossLinks: [
      { name: "004 成長型心智（抗挫心理基礎）", link: "#lecture-004" },
      { name: "005 心流三原則（學習區難度匹配）", link: "#lecture-005" },
      { name: "006 專注力微環境（外部前額葉）", link: "#lecture-006" }
    ]
  },
  {
    id: "013",
    module: "智力腦（第 13 講）",
    category: "空間認知與頂葉可塑性",
    title: "013 先做個測試，再幫你提升空間認知",
    audioTime: "11分40秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370892990176224",
    tags: ["智力腦", "空間認知", "STEM基礎", "空間詞彙", "建構類玩具", "尋寶地圖", "男女無差異", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
    summary: [
      "空間認知是 STEM 教育的核心基礎：用『心靈的眼睛』在腦海中想像並旋轉 3D 物體，與數學神經區域高度重疊。",
      "男女空間差異完全可藉由後天訓練抹平：2010年實驗證實幾週訓練後性別差異即消失，空間認知具極高神經可塑性。",
      "實操一：多用空間詞彙（上下、裡外、左右、前後、中間），聽更多空間詞的嬰兒空間測試分數顯著更高。",
      "實操二：多玩建構類玩具（樂高、積木、橡皮泥），玩5次頂葉神經活躍度顯著提升，玩時加入空間方位引導。",
      "實操三：玩『尋寶』地圖遊戲，3歲左右即可看懂簡單平面圖；日常善用手機地圖導航與多角度攝影。"
    ],
    insight: {
      headline: "語言離散標籤與頂葉三維空間編碼",
      detail: "空間方位詞彙為大腦提供了結構化的語義鷹架，幫助頂葉神經元精確編碼三維坐標；建構類玩具促成頂葉突觸的高密度連結。攝影嘗試不同角度更可主動鍛鍊空間視角轉換。"
    },
    actionTips: [
      {
        scenario: "請孩子幫忙拿生活用品",
        ng: "『幫我把那個東西拿過來，就在那裡啊！』",
        good: "『請幫爸爸把外套拿過來，它掛在沙發右邊、櫃子最上面那一層喔！』"
      },
      {
        scenario: "陪玩積木與磁力片",
        ng: "父母在旁邊滑手機，讓孩子自己瞎堆。",
        good: "『這棟城堡好高！如果把這個三角形積木倒轉過來、放在長方形頂端，會變成什麼呢？』"
      },
      {
        scenario: "戶外散步與拍照",
        ng: "只讓孩子當被拍的模特兒。",
        good: "把手機交給孩子：『你從地上往上看這棵大樹拍一張！再從側面拍一張，看看照片有什麼不一樣？』"
      }
    ],
    crossLinks: [
      { name: "010 數學幾何思維", link: "#lecture-010" },
      { name: "007 挑選電子產品（攝影與地圖）", link: "#lecture-007" },
      { name: "014 玩具角佈置（建構類玩具）", link: "#lecture-014" }
    ]
  },
  {
    id: "014",
    module: "智力腦（第 14 講）",
    category: "玩具角佈置與秘密基地",
    title: "014 如何通過布置玩具角，鍛煉寶寶學習力？",
    audioTime: "12分15秒",
    sourceUrl: "https://www.dedao.cn/course/article?id=1923370899433215240",
    tags: ["智力腦", "玩具角佈置", "玩即是學", "動靜分區", "控制數量", "建構玩具", "秘密小空間", "女兒1.5~2歲適用"],
    isDaughterTarget: true,
    summary: [
      "『玩』就是幼兒大腦學習的核心途徑：哺乳動物在遊戲中發展生存技能，家長在玩中植入學的小心機，絕非打發時間。",
      "玩具均衡五方向：建構類（積木、黏土首推）、小黑板（具象化表徵）、體感遊戲（前額葉決策）、節奏類（沙錘、手搖鈴）。",
      "空間動靜分區：靜區（軟墊、積木、繪本，安定感）vs 動區（過家家、跳舞、體感，移開磕碰櫃架）。",
      "控制玩具數量：開放式（積木練創造）+ 封閉式（桌遊拼圖）搭配，檯面只留少數，其餘輪替收納，支持主題式佈置。",
      "保留『獨處的秘密小空間』：小帳篷或紙箱小屋鋪毯子，給予孩子充分的心理安全感與情緒自我調節基地。"
    ],
    insight: {
      headline: "視覺刺激過載對前額葉的衝擊與秘密庇護所效應",
      detail: "檯面超過3~4種玩具會使幼兒前額葉過濾系統超載，頻繁跳躍無法深度玩耍；封閉溫暖的小帳篷能降低交感神經張力，是安全感回血堡壘。讓孩子參與分類標籤擺放，重物放下層，鍛鍊分類思維與物理力學常識。"
    },
    actionTips: [
      {
        scenario: "整理客廳遊戲區",
        ng: "把所有玩具箱全部堆在客廳，滿地都是零件。",
        good: "劃分靜態閱讀角與動態律動區，檯面每次只保留 2~3 套開放式玩具，其餘收入壁櫥輪替。"
      },
      {
        scenario: "收拾玩具引導歸位",
        ng: "邊收邊罵：『每天都弄得像豬窩，快收！』",
        good: "收納盒貼上圖片：『小積木要回積木家睡覺囉，大大的盒子放最下面，我們一起送它們回家！』"
      },
      {
        scenario: "孩子發脾氣想一個人待著",
        ng: "緊追不捨質問：『你到底怎麼了？快說話！』",
        good: "引導至秘密小帳篷：『如果寶寶心情有點難過，可以在小帳篷裡抱抱大熊熊，爸爸在外面等你。』"
      }
    ],
    crossLinks: [
      { name: "006 專注力微環境（不打擾原則）", link: "#lecture-006" },
      { name: "013 空間認知（建構類玩具位置）", link: "#lecture-013" },
      { name: "001 好奇心（開放式玩具）", link: "#lecture-001" }
    ]
  }
];

// 頁面渲染邏輯
document.addEventListener("DOMContentLoaded", () => {
  renderCourses(COURSE_DATA);
  setupSearch();
  setupFilterTabs();
  setupQuickToolbox();
  setupDaughterNavigation();
});

function renderCourses(courses) {
  const container = document.getElementById("courses-list");
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 20px; background: #fff; border-radius: 14px; border: 1px dashed #E4DCD3;">
        <p style="font-size: 1.1rem; color: #5C6479; margin-bottom: 8px;">🔍 找不到相符的課程或關鍵字</p>
        <span style="font-size: 0.85rem; color: #8E95A5;">試試搜尋「女兒」、「空間」、「數理」、「3C」、「專注力」、「表揚」或「玩具角」</span>
      </div>
    `;
    return;
  }

  container.innerHTML = courses.map(course => `
    <article class="course-card ${course.isDaughterTarget ? 'daughter-target-card' : ''}" id="lecture-${course.id}">
      <div class="card-top">
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <span class="lecture-badge">${course.module}</span>
          ${course.isDaughterTarget ? '<span class="daughter-badge">👧 女兒當前月齡必學</span>' : ''}
        </div>
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
        <div class="action-header">🛠️ 大衛家落地實操錦囊（生活情境與話術對照表）</div>
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
      } else if (filter === "daughter") {
        renderCourses(COURSE_DATA.filter(c => c.isDaughterTarget));
      } else if (filter === "000") {
        renderCourses(COURSE_DATA.filter(c => c.id === "000"));
      } else if (filter === "screen") {
        renderCourses(COURSE_DATA.filter(c => c.id === "002" || c.id === "007"));
      } else if (filter === "focus") {
        renderCourses(COURSE_DATA.filter(c => c.id === "005" || c.id === "006" || c.id === "014"));
      } else if (filter === "math") {
        renderCourses(COURSE_DATA.filter(c => c.id === "010" || c.id === "011" || c.id === "013"));
      } else if (filter === "science") {
        renderCourses(COURSE_DATA.filter(c => c.id === "001" || c.id === "008" || c.id === "009"));
      } else if (filter === "mindset") {
        renderCourses(COURSE_DATA.filter(c => c.id === "004" || c.id === "012"));
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
        text: "北大教授 Dr. 魏前沿腦科學育兒法，大衛與太太專屬實操錦囊（已收錄15講與女兒專案指南）！",
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

function setupDaughterNavigation() {
  const daughterBtn = document.getElementById("daughter-jump-btn");
  if (daughterBtn) {
    daughterBtn.addEventListener("click", () => {
      const target = document.getElementById("daughter-guide");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
