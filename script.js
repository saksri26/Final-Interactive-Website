const programs = {
  DGA: {
    name: "Digital Arts",
    result: "นักรังสรรค์จินตนาการ",
    district: "ย่านศิลป์ · ตรอกจินตนาการ",
    careers: [
      ["Character Designer", "สร้างตัวละครให้ทั้งโลกจำได้"],
      ["Concept Artist / Background Artist", "วาดโลกและฉากหลังให้เรื่องเล่ามีชีวิต"],
      ["Webtoon / Comic / Storyboard Artist", "เล่าเรื่องผ่านภาพหลายช่อง"],
      ["Illustrator / Art Toy / Sticker Creator", "เปลี่ยนภาพวาดเป็นของสะสม"],
    ],
  },
  DGD: {
    name: "Digital Graphic Design",
    result: "นักสร้างอัตลักษณ์แห่งธานี",
    district: "ย่านดีไซน์ · ถนนเอกลักษณ์",
    careers: [
      ["Brand Identity Designer", "ออกแบบป้ายและโลโก้ที่ทุกคนเห็นทุกวัน"],
      ["UI Designer", "ออกแบบหน้าจอแอปและเว็บไซต์ของเมือง"],
      ["Packaging Designer", "สร้างกล่องและแพ็กเกจที่ใคร ๆ ก็อยากเก็บ"],
      ["Art Director / Key Visual Designer", "ออกแบบโปสเตอร์ใหญ่กลางเมือง"],
    ],
  },
  IGD: {
    name: "Interactive and Game Design",
    result: "นักสร้างสนามเล่น",
    district: "ย่านเกม · สนามแห่งการเล่น",
    careers: [
      ["Game Designer / Level Designer", "คิดกติกาและระบบให้คนเล่นแล้วติดใจ"],
      ["Game Artist", "ออกแบบฉากและตัวละครในเกม"],
      ["VR / AR Designer", "สร้างโลกเสมือนที่เดินเข้าไปได้จริง"],
      ["Game Producer", "ดูแลทีมให้เกมไปถึงมือผู้เล่น"],
    ],
  },
  AFX: {
    name: "Computer Animation and Visual Effects",
    result: "ผู้มอบชีวิตแด่ภาพ",
    district: "ย่านภาพยนตร์ · กำแพงแห่งเรื่องราว",
    careers: [
      ["3D Animator / Rigging Artist", "ทำให้ตัวละครขยับเหมือนมีชีวิตจริง"],
      ["3D Modeler / Texture Artist", "ปั้นสิ่งของและตัวละครจากความว่างเปล่า"],
      ["VFX Artist", "สร้างฉากระเบิด ไฟ น้ำ และควัน"],
      ["Compositor", "รวมทุกชั้นภาพให้ดูเหมือนถ่ายจริง"],
    ],
  },
  DEN: {
    name: "Digital Entertainment",
    result: "ผู้รวมใจให้เป็นหนึ่ง",
    district: "ย่านบันเทิง · เวทีแห่งตัวตน",
    careers: [
      ["Content Creator / Scriptwriter", "คิดรายการและคอนเทนต์ที่คนรอดู"],
      ["Event / Show Producer", "จัดงานที่มอบประสบการณ์ให้ผู้คน"],
      ["Virtual Talent / Streaming Producer", "อยู่เบื้องหลังตัวตนเสมือนและสตรีมเมอร์"],
      ["Entertainment Marketer / Community Manager", "ทำให้ชุมชนแฟนคลับเติบโต"],
    ],
  },
};

const question = (id, chapter, title, image, answers, isScored = true) => ({
  id,
  chapter,
  title,
  image,
  answers: answers.map(([program, text]) => ({ program, text })),
  isScored,
});

const openingQuestions = [
  question(
    "1.1",
    "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
    "สิ่งแรกที่เธอทำเมื่อดวงไฟบอกว่าเหลือเวลาแค่คืนนี้คืออะไร",
    "ภาพจัตุรัสสีเทาและดวงไฟดวงเล็ก",
    [
      ["DGA", "หยิบชอล์กขึ้นมาแล้วลงสีบนกำแพง"],
      ["DGD", "จัดป้ายที่ซีดจางใหม่ให้อ่านง่ายขึ้น"],
      ["IGD", "ถามดวงไฟถึงกติกาและวิธีผ่านด่าน"],
      ["AFX", "ลองดันของรอบตัวเบา ๆ ให้รู้ว่าทำไมทุกอย่างนิ่งสนิท"],
      ["DEN", "เรียกคนในเมืองให้มารวมกันที่จัตุรัส"],
    ],
  ),
  question(
    "1.2",
    "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
    "ดวงไฟบอกให้พกของได้แค่ชิ้นเดียว เธอจะหยิบอะไร",
    "ภาพของวิเศษห้าชิ้นวางเรียงอยู่",
    [
      ["DGA", "สมุดสเก็ตช์ที่วาดได้ไม่รู้จบ"],
      ["DGD", "ชุดสีกับตัวอักษรวิเศษที่ทำให้ทุกอย่างดูเข้าที่"],
      ["IGD", "ตลับเกมเก่าที่ยังไม่มีใครรู้วิธีเล่น"],
      ["AFX", "กล้องฟิล์มที่ถ่ายแล้วได้ภาพเคลื่อนไหว"],
      ["DEN", "ไมโครโฟนที่ส่งเสียงไปได้ทั่วเมือง"],
    ],
  ),
  question(
    "1.3",
    "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
    "ปลายจัตุรัสมีถนนห้าสาย แต่ละสายมีกลิ่นและเสียงไม่เหมือนกัน เธอเดินเข้าทางไหนก่อน",
    "ภาพทางแยกห้าสายของ Imagine City",
    [
      ["DGA", "สายที่ผนังทั้งสองข้างเต็มไปด้วยภาพวาด"],
      ["DGD", "สายที่เต็มไปด้วยป้ายร้านและโลโก้"],
      ["IGD", "สายที่มีเสียงเกมกับแสงไฟ"],
      ["AFX", "สายที่มีเสียงเครื่องฉายหนังกับควันเอฟเฟกต์"],
      ["DEN", "สายที่มีเสียงเพลงและผู้คนมายืนรวมกัน"],
    ],
  ),
  question(
    "2.1",
    "บทที่ 2 · ปัญหาของชาวเมือง",
    "สะพานข้ามแม่น้ำพังไปครึ่งหนึ่ง และอีกฝั่งมีคนกำลังรอ เธอจะช่วยอย่างไร",
    "ภาพสะพานขาดและชาวเมืองอีกฝั่ง",
    [
      ["DGA", "วาดสะพานขึ้นมาใหม่ด้วยเส้นและสีในแบบของเธอ"],
      ["DGD", "ทำป้ายเตือนและบอกทางอ้อมให้ทุกคนไปต่อได้"],
      ["IGD", "ไขกลไกของสะพานให้กลับมาทำงานอีกครั้ง"],
      ["AFX", "ทำภาพสะพานที่ค่อย ๆ ประกอบตัวเองให้ทุกคนเห็น"],
      ["DEN", "ชวนชาวเมืองมาช่วยซ่อม แล้วจัดงานฉลองเล็ก ๆ"],
    ],
  ),
  question(
    "2.2",
    "บทที่ 2 · ปัญหาของชาวเมือง",
    "เด็กน้อยร้องไห้เพราะตัวการ์ตูนที่รักหายไปจากเมือง เธอจะช่วยอย่างไร",
    "ภาพเด็กน้อยกับพื้นที่ว่างของตัวการ์ตูน",
    [
      ["DGA", "วาดตัวการ์ตูนตัวนั้นขึ้นมาใหม่ให้"],
      ["DGD", "ทำสติกเกอร์ โปสเตอร์ และของที่ระลึกให้เก็บไว้"],
      ["IGD", "สร้างเกมเล็ก ๆ ให้ได้เล่นกับตัวการ์ตูน"],
      ["AFX", "ทำให้ตัวการ์ตูนมีชีวิตขึ้นมา เดินและพูดได้"],
      ["DEN", "ชวนเด็ก ๆ มาล้อมวงฟังเรื่องของตัวการ์ตูน"],
    ],
  ),
  question(
    "2.3",
    "บทที่ 2 · ปัญหาของชาวเมือง",
    "เจ้าของร้านเก่าแก่บอกว่าไม่มีใครรู้จักร้านของเขาแล้ว เธอจะเสนออะไร",
    "ภาพร้านเก่าแก่ที่ป้ายหน้าร้านยังว่างเปล่า",
    [
      ["DGA", "วาดภาพให้ร้านนี้มีเอกลักษณ์ไม่เหมือนใคร"],
      ["DGD", "ทำแบรนด์ใหม่ตั้งแต่โลโก้ไปจนถึงป้ายหน้าร้าน"],
      ["IGD", "ทำให้การเดินเข้าร้านเหมือนเล่นเกมสนุก ๆ"],
      ["AFX", "ทำคลิปแนะนำร้านที่ดูแล้วชวนขนลุก"],
      ["DEN", "จัดงานและช่วยโปรโมตให้คนแห่กันมา"],
    ],
  ),
];

const gateQuestion = question(
  "3",
  "ด่านทดสอบ · ประตูหินผา",
  "ประตูหินถามว่า “เธอพร้อมฝึกอะไรทุกวัน”",
  "ภาพประตูหินใหญ่ที่มีแสงลอดออกมา",
  [
    ["DGA", "วาดรูปและสังเกตโลกให้ละเอียดขึ้น"],
    ["DGD", "จัดองค์ประกอบ สี และตัวอักษรให้ลงตัว"],
    ["IGD", "คิดเป็นระบบและวางแผนเป็นขั้นเป็นตอน"],
    ["AFX", "ทำให้ภาพเคลื่อนไหวและดูสมจริง"],
    ["DEN", "พูด เล่าเรื่อง และประสานผู้คนให้ไปทางเดียวกัน"],
  ],
);

const closingQuestions = [
  question(
    "4.1",
    "บทที่ 4 · เพื่อนร่วมทาง",
    "ที่ลานน้ำพุ เธอเจอนักเดินทางอีกสี่คน เธอเลือกเป็นคนที่…",
    "ภาพเพื่อนร่วมทางห้าคนที่ลานน้ำพุ",
    [
      ["DGA", "ช่วยวาดภาพให้ทุกคนเห็นตรงกัน"],
      ["DGD", "ทำไกด์ให้ทุกอย่างดูลงตัวและเป็นระเบียบ"],
      ["IGD", "คิดวิธีให้ทุกคนทำงานด้วยกันแล้วสนุก"],
      ["AFX", "ทำตัวอย่างสั้น ๆ ให้เห็นว่าแผนจะออกมาเป็นอย่างไร"],
      ["DEN", "เป็นคนกลางที่ทำให้ทุกคนอยากเดินต่อด้วยกัน"],
    ],
  ),
  question(
    "4.2",
    "บทที่ 4 · เพื่อนร่วมทาง",
    "ทีมเห็นไม่ตรงกันว่าจะไปทางไหน เธอจะทำอะไร",
    "ภาพแผนที่แยกเป็นสองทางและกลุ่มเพื่อนกำลังคุยกัน",
    [
      ["DGA", "วาดแผนที่ให้เห็นว่าทางแต่ละสายพาไปไหน"],
      ["DGD", "ทำตารางเปรียบเทียบให้ตัดสินใจง่ายขึ้น"],
      ["IGD", "ลองไปทั้งสองทางแล้วดูผลลัพธ์"],
      ["AFX", "ทำภาพจำลองให้เห็นปลายทางของแต่ละทาง"],
      ["DEN", "ฟังทุกคนก่อน แล้วหาจุดที่ทุกคนรับได้"],
    ],
  ),
  question(
    "5.1",
    "บทที่ 5 · คืนเทศกาล",
    "เวทีว่างเปล่ากำลังรอเธอ ไฮไลต์ที่อยากมอบให้ทั้งเมืองคืออะไร",
    "ภาพเวทีเทศกาลกลางคืนที่ยังรอการแสดง",
    [
      ["DGA", "ภาพวาดขนาดยักษ์ที่คนทั้งเมืองเงยหน้ามอง"],
      ["DGD", "ภาพลักษณ์ใหม่ที่ทำให้ทุกมุมเมืองมีสไตล์เดียวกัน"],
      ["IGD", "เกมที่คนทั้งเมืองเข้ามาเล่นพร้อมกัน"],
      ["AFX", "โชว์ภาพเคลื่อนไหวและเอฟเฟกต์ที่ทำให้ทั้งลานตะลึง"],
      ["DEN", "การแสดงสดที่ทุกคนมีส่วนร่วมได้"],
    ],
  ),
  question(
    "5.2",
    "บทที่ 5 · คืนเทศกาล",
    "เมื่อสีค่อย ๆ กลับมา เธออยากให้ผู้คนจดจำเธอว่าเป็นใคร",
    "ภาพสีสันค่อย ๆ กลับคืนสู่ Imagine City",
    [
      ["DGA", "คนที่ให้กำเนิดตัวละครที่ทุกคนรัก"],
      ["DGD", "คนที่ทำให้เมืองนี้ดูดีและมีเอกลักษณ์"],
      ["IGD", "คนที่สร้างโลกให้ทุกคนได้เข้ามาเล่น"],
      ["AFX", "คนที่ทำให้สิ่งที่ดูเป็นไปไม่ได้กลายเป็นจริง"],
      ["DEN", "คนที่ทำให้ทุกคนมาอยู่รวมกัน"],
    ],
  ),
];

const mixedResults = {
  "DGA+DGD": "นักออกแบบที่เล่าเรื่องด้วยภาพวาด",
  "AFX+DGD": "นักออกแบบที่ทำให้ภาพขยับ",
  "DGD+IGD": "นักออกแบบประสบการณ์",
  "DGD+DEN": "นักออกแบบที่เล่าเรื่องเก่ง",
  "AFX+DGA": "นักวาดที่ทำให้ภาพมีชีวิต",
  "DGA+IGD": "นักวาดโลกของเกม",
  "DGA+DEN": "ครีเอเตอร์สายวาด",
  "AFX+IGD": "นักสร้างโลกเสมือนจริง",
  "AFX+DEN": "นักเล่าเรื่องด้วยภาพยนตร์",
  "DEN+IGD": "นักสร้างสนามเล่นให้คนมารวมกัน",
};

const app = document.querySelector(".app");
const pages = [...document.querySelectorAll(".page")];
const questionTitle = document.querySelector("[data-question]");
const answerList = document.querySelector("[data-answers]");
const feedback = document.querySelector("[data-feedback]");
const nextButton = document.querySelector("[data-next]");
const currentLabel = document.querySelector("[data-current]");
const totalLabel = document.querySelector("[data-total]");
const questionNumber = document.querySelector("[data-question-number]");
const questionImage = document.querySelector("[data-question-image]");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector(".progress-fill");
const scoreLabel = document.querySelector("[data-score]");
const mainContent = document.querySelector("#main-content");
const questionLayout = document.querySelector(".question-layout");
const sceneLabel = document.querySelector("[data-scene-label]");

const programCodes = Object.keys(programs);
let scores;
let sequence = [];
let currentQuestion = 0;
let hasAnswered = false;
let selectedAnswers = [];
let selectedCareers = [];
let transitionTimer;

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function leadingPrograms() {
  const ranked = programCodes
    .map((code) => ({ code, score: scores[code] }))
    .sort((first, second) => second.score - first.score);
  const leaders = ranked.filter((item) => ranked[0].score - item.score <= 1);
  return leaders.slice(0, 2).map((item) => item.code);
}

function makeCareerQuestion(code) {
  const program = programs[code];
  const scene = question(
    `3 · ${code}`,
    "บทที่ 3 · ย่านของเธอ",
    `${program.district} · เธออยากฝากลายเซ็นไว้กับผลงานแบบไหน`,
    `ภาพ${program.district}และผลงานสร้างสรรค์`,
    program.careers.map(([career, description]) => [
      code,
      `${description} (${career})`,
    ]),
    false,
  );
  scene.programCode = code;
  return scene;
}

function beginJourney() {
  scores = Object.fromEntries(programCodes.map((code) => [code, 0]));
  sequence = [...openingQuestions];
  currentQuestion = 0;
  selectedAnswers = [];
  selectedCareers = [];
  renderQuestion();
  showPage("quiz");
}

function showPage(name) {
  const activePage = pages.find((page) => page.classList.contains("is-active"));
  const nextPage = pages.find((page) => page.dataset.page === name);

  if (!nextPage || nextPage === activePage) return;

  window.clearTimeout(transitionTimer);
  if (activePage) {
    activePage.classList.add("is-leaving");
    transitionTimer = window.setTimeout(() => {
      activePage.hidden = true;
      activePage.classList.remove("is-active", "is-leaving");
      nextPage.hidden = false;
      nextPage.classList.add("is-active");
      mainContent.focus({ preventScroll: true });
    }, 220);
  } else {
    nextPage.hidden = false;
    nextPage.classList.add("is-active");
  }
}

function resetColor() {
  app.classList.remove("is-colorful");
  app.style.removeProperty("--bloom-x");
  app.style.removeProperty("--bloom-y");
}

function fillWithColor(event) {
  const bounds = app.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;
  app.style.setProperty("--bloom-x", `${Math.max(0, Math.min(100, x))}%`);
  app.style.setProperty("--bloom-y", `${Math.max(0, Math.min(100, y))}%`);
  app.classList.add("is-colorful");
}

function renderQuestion() {
  const item = sequence[currentQuestion];
  const step = currentQuestion + 1;
  const stepLabel = String(step).padStart(2, "0");
  const completedScoredQuestions = sequence
    .slice(0, currentQuestion)
    .filter((entry) => entry.isScored).length;
  const progressStep = completedScoredQuestions + (item.isScored ? 1 : 0);

  questionLayout.classList.remove("is-leaving", "is-entering");
  void questionLayout.offsetWidth;
  questionLayout.classList.add("is-entering");
  hasAnswered = false;
  currentLabel.textContent = String(progressStep).padStart(2, "0");
  totalLabel.textContent = "11";
  questionNumber.textContent = `Q.${stepLabel}`;
  questionTitle.textContent = item.title;
  sceneLabel.textContent = item.chapter;
  questionImage.innerHTML = `
    <span class="placeholder-icon" aria-hidden="true">✎</span>
    <strong>ภาพประกอบฉาก ${item.id}</strong>
    <span>480 × 360 px · ${item.image}</span>
  `;
  questionImage.setAttribute(
    "aria-label",
    `พื้นที่วางภาพประกอบฉาก ${item.id} ขนาดแนะนำ 480 คูณ 360 พิกเซล: ${item.image}`,
  );
  answerList.replaceChildren();
  feedback.textContent = "";
  nextButton.hidden = true;
  scoreLabel.textContent = `${Object.values(scores).reduce((sum, value) => sum + value, 0)} / 11`;
  progressFill.style.width = `${(progressStep / 11) * 100}%`;
  progressTrack.setAttribute("aria-valuemax", "11");
  progressTrack.setAttribute("aria-valuenow", progressStep);
  resetColor();

  shuffled(item.answers).forEach((answer, index) => {
    const option = document.createElement("button");
    option.className = "answer-option";
    option.type = "button";
    option.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${answer.text}</span>`;
    option.addEventListener("click", (event) => selectAnswer(answer, event));
    answerList.append(option);
  });
}

function selectAnswer(answer, event) {
  if (hasAnswered) return;

  hasAnswered = true;
  selectedAnswers[currentQuestion] = answer.program;
  fillWithColor(event);

  if (sequence[currentQuestion].isScored) {
    scores[answer.program] += 1;
    scoreLabel.textContent = `${Object.values(scores).reduce((sum, value) => sum + value, 0)} / 11`;
  } else {
    selectedCareers.push({
      programCode: sequence[currentQuestion].programCode,
      career: programs[sequence[currentQuestion].programCode].careers.find(
        ([, description]) => answer.text.includes(description),
      )[0],
    });
  }

  answerList.querySelectorAll(".answer-option").forEach((option) => {
    option.disabled = true;
    if (option.contains(event.currentTarget.querySelector(".answer-key"))) {
      option.classList.add("is-selected");
    }
  });

  feedback.textContent = sequence[currentQuestion].isScored
    ? "บันทึกคำตอบแล้ว ดวงไฟเริ่มเติมสีให้เมืองนี้!"
    : "บันทึกผลงานที่เธออยากสร้างแล้ว";
  nextButton.innerHTML =
    currentQuestion === sequence.length - 1
      ? 'ดูผลการเดินทาง <span aria-hidden="true">➜</span>'
      : 'เดินทางต่อ <span aria-hidden="true">➜</span>';
  nextButton.hidden = false;
  nextButton.focus({ preventScroll: true });
}

function showResults() {
  const ranked = programCodes
    .map((code) => ({ code, score: scores[code] }))
    .sort((first, second) => second.score - first.score);
  const leaders = leadingPrograms();
  const highestScore = ranked[0].score;
  const secondScore = ranked[1].score;
  const finalChoice = [...selectedAnswers]
    .reverse()
    .find((code) => programCodes.includes(code));
  const isExactTie = highestScore === secondScore;
  const isCloseResult = highestScore - secondScore === 1;
  const primaryCode =
    isExactTie && leaders.includes(finalChoice) ? finalChoice : leaders[0];
  const resultTitle = document.querySelector("#result-title");
  const resultMessage = document.querySelector("[data-result-message]");
  const resultSummary = document.querySelector("[data-result-summary]");

  document.querySelector("[data-final-score]").textContent = Object.values(scores).reduce(
    (sum, value) => sum + value,
    0,
  );
  resultTitle.textContent =
    isCloseResult && leaders.length > 1
      ? mixedResults[[...leaders].sort().join("+")]
      : programs[primaryCode].result;
  resultMessage.textContent = isCloseResult
    ? "สองเส้นทางโดดเด่นไม่แพ้กัน! จินตนาการของเธอผสานความสามารถจากทั้งสองสาขาได้อย่างลงตัว"
    : "เธอช่วยให้ Imagine City กลับมามีสีสันอีกครั้ง นี่คือเส้นทางสร้างสรรค์ที่ใกล้ตัวเธอ";
  document.querySelector("[data-result-program]").textContent =
    isCloseResult && leaders.length > 1
      ? leaders.map((code) => programs[code].name).join(" + ")
      : programs[primaryCode].name;
  document.querySelector("[data-result-district]").textContent = leaders
    .map((code) => programs[code].district)
    .join(" และ ");
  document.querySelector("[data-result-career]").textContent =
    selectedCareers.map((item) => item.career).join(" · ") || "ยังไม่ได้เลือก";
  document.querySelector(".result-placeholder strong").textContent =
    `ภาพประกอบผลลัพธ์ · ${programs[primaryCode].result}`;
  document.querySelector(".result-placeholder > span:last-child").textContent =
    "480 × 360 px · ภาพตัวละครหรือสัญลักษณ์ประจำสาขา";

  resultSummary.replaceChildren();
  programCodes.forEach((code) => {
    const item = document.createElement("div");
    item.className = "summary-item";
    if (leaders.includes(code)) item.classList.add("is-correct");
    const mark = document.createElement("span");
    mark.className = "summary-mark";
    mark.textContent = String(scores[code]);
    const name = document.createElement("span");
    name.textContent = code;
    item.append(mark, name);
    resultSummary.append(item);
  });
  showPage("result");
}

function advanceJourney() {
  if (!hasAnswered) return;
  if (currentQuestion === openingQuestions.length - 1) {
    const districts = leadingPrograms();
    sequence.push(...districts.map(makeCareerQuestion), gateQuestion, ...closingQuestions);
  }
  if (currentQuestion === sequence.length - 1) {
    showResults();
    return;
  }

  questionLayout.classList.remove("is-entering");
  questionLayout.classList.add("is-leaving");
  window.setTimeout(() => {
    currentQuestion += 1;
    renderQuestion();
  }, 200);
}

document.querySelector("[data-start]").addEventListener("click", beginJourney);
document.querySelector("[data-restart]").addEventListener("click", () => {
  beginJourney();
  showPage("quiz");
});

document.querySelectorAll("[data-home]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    resetColor();
    showPage("home");
  });
});

nextButton.addEventListener("click", advanceJourney);
