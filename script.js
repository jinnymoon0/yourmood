/* -----------------------------------------------------
   YourMood — Step 4A
   Edit Entry + Search + CSV Export (local + i18n)
------------------------------------------------------*/

// ===== i18n =====
const I18N = {
  en: {
    appTitle: "YourMood 🌤️",
    subtitle: "Track how you feel—one small note at a time.",
    logTitle: "Log today’s mood",
    dateLabel: "Date",
    moodLabel: "Mood",
    moodHelp: "Pick one mood.",
    tagsLabel: "Tags",
    tagsHelp: "Select multiple tags (optional).",
    addTagPH: "Add custom tag and press Enter",
    add: "Add",
    qLabel: "Today’s question",
    qHelp: "You must answer today’s question before saving.",
    notesLabel: "Notes (optional)",
    save: "Save Entry",
    update: "Update Entry",
    cancel: "Cancel",
    clear: "Clear",
    searchTitle: "Search",
    searchPH: "Search notes, tags, mood, question/answer, or date (YYYY-MM-DD)",
    searchHelp: "Live search (client-side). Try words like “happy”, “친구”, a tag, or a date.",
    entriesTitle: "Your entries",
    entriesEmpty: "No entries yet. Log your first mood above!",
    footer: "Built with ❤️ for your daily check-in",
    toasts: {
      needDate: "Please select a date.",
      needMood: "Please pick a mood.",
      needQ: "Please answer today’s question.",
      saved: "Saved!",
      updated: "Updated!",
      deleted: "Deleted.",
      tagExists: "You already added that tag.",
      imported: "Imported!",
      replaced: "Replaced!"
    },
    moods: [
      { key: "ecstatic", label: "Ecstatic", emoji: "🤩" },
      { key: "happy",    label: "Happy",    emoji: "😊" },
      { key: "calm",     label: "Calm",     emoji: "🙂" },
      { key: "ok",       label: "OK",       emoji: "😐" },
      { key: "tired",    label: "Tired",    emoji: "🥱" },
      { key: "sad",      label: "Sad",      emoji: "😢" },
      { key: "angry",    label: "Angry",    emoji: "😠" },
      { key: "stressed", label: "Stressed", emoji: "😣" },
      { key: "anxious",  label: "Anxious",  emoji: "😰" },
      { key: "sick",     label: "Sick",     emoji: "🤒" },
      { key: "grateful", label: "Grateful", emoji: "🙏" },
      { key: "love",     label: "Love",     emoji: "❤️" }
    ],
    presetTags: ["work","school","home","gathering","friends","family","health","study","coding","exercise","travel","finance"],
    questions: [
      "What was the most intense emotion you felt today?",
      "What drained your energy today, and why?",
      "What gave you a small moment of joy?",
      "If today had a color, what would it be and why?",
      "What did you learn about yourself today?",
      "What is one thing you want to let go of?",
      "What would have made today 10% better?",
      "Who supported you today (or who could have)?",
      "What are you grateful for right now?",
      "What is one boundary you respected (or wish you had)?",
    ],
    // Stats labels (kept from Step 3)
    statsTitle: "Stats",
    fromLabel: "From",
    toLabel: "To",
    filterTagLabel: "Tag",
    apply: "Apply",
    reset: "Reset",
    totalEntriesLabel: "Total entries",
    currentStreakLabel: "Current streak",
    longestStreakLabel: "Longest streak",
    topMoodLabel: "Top mood",
    topTagsLabel: "Top tags",
    moodDistTitle: "Mood distribution",
    tagDistTitle: "Tag distribution",
    dataTitle: "Data",
    exportBtn: "Export JSON",
    importBtn: "Import JSON",
    importModeMerge: "Merge",
    importModeReplace: "Replace",
    exportCsvBtn: "Export CSV",
    dataHelp: "Export your entries/settings. Import will merge or replace your current data.",
    importLabel: "Import JSON",
    na: "—",
    edit: "Edit",
    del: "Delete"
  },
  ko: {
    appTitle: "YourMood 🌤️",
    subtitle: "하루의 감정을 가볍게 기록해 보세요.",
    logTitle: "오늘의 기분 기록",
    dateLabel: "날짜",
    moodLabel: "기분",
    moodHelp: "기분을 하나 선택하세요.",
    tagsLabel: "태그",
    tagsHelp: "여러 개를 선택할 수 있어요 (선택 사항).",
    addTagPH: "맞춤 태그 입력 후 Enter",
    add: "추가",
    qLabel: "오늘의 질문",
    qHelp: "오늘의 질문에 답변해야 저장할 수 있어요.",
    notesLabel: "메모 (선택 사항)",
    save: "저장",
    update: "수정 저장",
    cancel: "취소",
    clear: "초기화",
    searchTitle: "검색",
    searchPH: "메모, 태그, 기분, 질문/답변 또는 날짜(YYYY-MM-DD)로 검색",
    searchHelp: "실시간 검색입니다. “행복”, “친구”, 태그, 날짜 등을 입력해 보세요.",
    entriesTitle: "내 기록",
    entriesEmpty: "아직 기록이 없어요. 위에서 첫 감정을 기록해 보세요!",
    footer: "매일의 체크인을 위해 ❤️로 만들었어요",
    toasts: {
      needDate: "날짜를 선택해 주세요.",
      needMood: "기분을 선택해 주세요.",
      needQ: "오늘의 질문에 답변해 주세요.",
      saved: "저장되었습니다!",
      updated: "수정되었습니다!",
      deleted: "삭제되었습니다.",
      tagExists: "이미 추가된 태그예요.",
      imported: "가져오기가 완료되었습니다!",
      replaced: "데이터가 교체되었습니다!"
    },
    moods: [
      { key: "ecstatic", label: "들뜸",   emoji: "🤩" },
      { key: "happy",    label: "행복",   emoji: "😊" },
      { key: "calm",     label: "차분",   emoji: "🙂" },
      { key: "ok",       label: "그저그래", emoji: "😐" },
      { key: "tired",    label: "피곤",   emoji: "🥱" },
      { key: "sad",      label: "슬픔",   emoji: "😢" },
      { key: "angry",    label: "분노",   emoji: "😠" },
      { key: "stressed", label: "스트레스", emoji: "😣" },
      { key: "anxious",  label: "불안",   emoji: "😰" },
      { key: "sick",     label: "아픔",   emoji: "🤒" },
      { key: "grateful", label: "감사",   emoji: "🙏" },
      { key: "love",     label: "사랑",   emoji: "❤️" }
    ],
    presetTags: ["work","school","home","gathering","friends","family","health","study","coding","exercise","travel","finance"].map(t => ({
      work:"일", school:"학교", home:"집", gathering:"모임", friends:"친구", family:"가족",
      health:"건강", study:"공부", coding:"코딩", exercise:"운동", travel:"여행", finance:"재정"
    }[t] || t)),
    questions: [
      "오늘 가장 강하게 느꼈던 감정은 무엇이었나요?",
      "오늘 에너지를 소모하게 만든 일은 무엇이었나요? 왜였나요?",
      "오늘 당신에게 작은 기쁨을 준 순간은?",
      "오늘을 하나의 색으로 표현한다면? 이유는 무엇인가요?",
      "오늘 나 자신에 대해 새로 알게 된 점은?",
      "오늘 놓아주고 싶은 것은 무엇인가요?",
      "오늘을 10% 더 좋게 만들 요소는 무엇이었을까요?",
      "오늘 당신을 지지해준 사람(혹은 지지해줄 수 있었던 사람)은?",
      "지금 감사한 것은 무엇인가요?",
      "오늘 지킨(혹은 지키고 싶었던) 경계는 무엇인가요?",
    ],
    statsTitle: "통계",
    fromLabel: "시작",
    toLabel: "종료",
    filterTagLabel: "태그",
    apply: "적용",
    reset: "초기화",
    totalEntriesLabel: "총 기록 수",
    currentStreakLabel: "현재 연속 기록",
    longestStreakLabel: "최장 연속 기록",
    topMoodLabel: "가장 많은 기분",
    topTagsLabel: "상위 태그",
    moodDistTitle: "기분 분포",
    tagDistTitle: "태그 분포",
    dataTitle: "데이터",
    exportBtn: "JSON 내보내기",
    importBtn: "JSON 가져오기",
    importModeMerge: "병합",
    importModeReplace: "교체",
    exportCsvBtn: "CSV 내보내기",
    dataHelp: "기록/설정을 내보내고 가져올 수 있어요. 가져오기는 병합 또는 교체를 선택하세요.",
    importLabel: "JSON 가져오기",
    na: "—",
    edit: "수정",
    del: "삭제"
  }
};

// ===== storage keys =====
const STORAGE_KEY = "yourmood_entries_v2";
const SETTINGS_KEY = "yourmood_settings_v1";

// ===== language =====
let LANG = detectInitialLang();
let DICT = I18N[LANG];

// ===== DOM =====
const els = {
  // header
  title: qs("#app-title"),
  subtitle: qs("#app-subtitle"),
  langSelect: qs("#lang-select"),

  // form
  logTitle: qs("#log-title"),
  dateLabel: qs("#date-label"),
  dateInput: qs("#entry-date"),
  moodLabel: qs("#mood-label"),
  moodHelp: qs("#mood-help"),
  moodGrid: qs("#mood-grid"),
  tagsLabel: qs("#tags-label"),
  tagsHelp: qs("#tags-help"),
  tagsGrid: qs("#tags-grid"),
  customTagInput: qs("#custom-tag-input"),
  addTagBtn: qs("#add-tag-btn"),
  qLabel: qs("#q-label"),
  qText: qs("#q-text"),
  qHelp: qs("#q-help"),
  qAnswer: qs("#q-answer"),
  notesLabel: qs("#notes-label"),
  notesInput: qs("#entry-notes"),
  saveBtn: qs("#save-btn"),
  updateBtn: qs("#update-btn"),
  cancelEditBtn: qs("#cancel-edit-btn"),
  clearBtn: qs("#clear-form-btn"),
  toast: qs("#toast"),

  // search
  searchTitle: qs("#search-title"),
  searchInput: qs("#search-input"),
  clearSearchBtn: qs("#clear-search-btn"),
  searchHelp: qs("#search-help"),

  // entries
  entriesTitle: qs("#entries-title"),
  entriesEmpty: qs("#entries-empty"),
  entriesList: qs("#entries-list"),

  // stats
  statsTitle: qs("#stats-title"),
  fromLabel: qs("#from-label"),
  toLabel: qs("#to-label"),
  filterTagLabel: qs("#filter-tag-label"),
  fromDate: qs("#from-date"),
  toDate: qs("#to-date"),
  filterTag: qs("#filter-tag"),
  applyFilterBtn: qs("#apply-filter-btn"),
  clearFilterBtn: qs("#clear-filter-btn"),
  totalEntriesLabel: qs("#total-entries-label"),
  currentStreakLabel: qs("#current-streak-label"),
  longestStreakLabel: qs("#longest-streak-label"),
  topMoodLabel: qs("#top-mood-label"),
  topTagsLabel: qs("#top-tags-label"),
  totalEntries: qs("#total-entries"),
  currentStreak: qs("#current-streak"),
  longestStreak: qs("#longest-streak"),
  topMood: qs("#top-mood"),
  topTags: qs("#top-tags"),
  moodDistTitle: qs("#mood-dist-title"),
  tagDistTitle: qs("#tag-dist-title"),
  moodCanvas: qs("#mood-chart"),
  tagCanvas: qs("#tag-chart"),

  // data
  dataTitle: qs("#data-title"),
  exportBtn: qs("#export-btn"),
  importFile: qs("#import-file"),
  importMode: qs("#import-mode"),
  dataHelp: qs("#data-help"),
  importLabel: qs("#import-label"),
  exportCsvBtn: qs("#export-csv-btn"),

  // footer
  footerText: qs("#footer-text"),
};

// ===== state =====
let selectedMoodKey = null;
let selectedTags = new Set();
let editingId = null;           // <-- editing state
let cachedEditQuestion = "";    // question text during edit (sticks unless date changes)
let searchQuery = "";           // <-- search state

// ===== init =====
init();

function init(){
  const settings = loadSettings();
  els.langSelect.value = settings.langPref || "auto";
  els.langSelect.addEventListener("change", onLangChange);

  applyI18n();

  els.dateInput.value = todayISO();

  renderMoodGrid();
  renderTagsGrid();
  renderDailyQuestion();

  els.saveBtn.addEventListener("click", onSave);
  els.updateBtn.addEventListener("click", onUpdate);
  els.cancelEditBtn.addEventListener("click", cancelEdit);
  els.clearBtn.addEventListener("click", () => clearForm(false));

  els.addTagBtn.addEventListener("click", onAddCustomTag);
  els.customTagInput.placeholder = DICT.addTagPH;
  els.customTagInput.addEventListener("keydown", e => {
    if (e.key === "Enter"){ e.preventDefault(); onAddCustomTag(); }
  });

  // When date changes during edit, recompute question and clear answer
  els.dateInput.addEventListener("change", () => {
    if (editingId){
      cachedEditQuestion = getQuestionForDate(els.dateInput.value || todayISO());
      els.qText.textContent = cachedEditQuestion;
      els.qAnswer.value = ""; // require fresh answer for new date
    } else {
      renderDailyQuestion();
    }
  });

  // Search
  els.searchInput.placeholder = DICT.searchPH;
  els.searchInput.addEventListener("input", () => {
    searchQuery = els.searchInput.value.trim().toLowerCase();
    renderEntries(); // live filter
  });
  els.clearSearchBtn.addEventListener("click", () => {
    els.searchInput.value = "";
    searchQuery = "";
    renderEntries();
  });

  // Stats
  els.applyFilterBtn.addEventListener("click", updateStatsAndCharts);
  els.clearFilterBtn.addEventListener("click", resetFilters);

  // Data I/O
  els.exportBtn.addEventListener("click", onExportJSON);
  els.importFile.addEventListener("change", onImportJSON);
  els.exportCsvBtn.addEventListener("click", onExportCSV);

  populateFilterTagOptions();
  autoSetDefaultFilterRange();

  renderEntries();
  updateStatsAndCharts();
}

/* =========================
   i18n
========================= */
function detectInitialLang(){
  const settings = loadSettings();
  if (settings.langPref && settings.langPref !== "auto") return settings.langPref;
  return (navigator.language||"en").toLowerCase().startsWith("ko") ? "ko" : "en";
}
function onLangChange(){
  const choice = els.langSelect.value;
  const settings = loadSettings();
  settings.langPref = choice;
  saveSettings(settings);

  LANG = (choice==="auto")
    ? ((navigator.language||"en").toLowerCase().startsWith("ko") ? "ko" : "en")
    : choice;
  DICT = I18N[LANG];

  applyI18n();
  renderMoodGrid();
  renderTagsGrid();
  if (editingId){
    // keep edit question text
    els.qText.textContent = cachedEditQuestion;
  } else {
    renderDailyQuestion();
  }
  renderEntries();
  populateFilterTagOptions();
  updateStatsAndCharts();
}
function applyI18n(){
  els.title.textContent = DICT.appTitle;
  els.subtitle.textContent = DICT.subtitle;

  els.logTitle.textContent = DICT.logTitle;
  els.dateLabel.textContent = DICT.dateLabel;
  els.moodLabel.textContent = DICT.moodLabel;
  els.moodHelp.textContent = DICT.moodHelp;
  els.tagsLabel.textContent = DICT.tagsLabel;
  els.tagsHelp.textContent = DICT.tagsHelp;
  els.qLabel.textContent = DICT.qLabel;
  els.qHelp.textContent = DICT.qHelp;
  els.notesLabel.textContent = DICT.notesLabel;
  els.saveBtn.textContent = DICT.save;
  els.updateBtn.textContent = DICT.update;
  els.cancelEditBtn.textContent = DICT.cancel;
  els.clearBtn.textContent = DICT.clear;

  els.searchTitle.textContent = DICT.searchTitle;
  els.searchHelp.textContent = DICT.searchHelp;
  els.searchInput.placeholder = DICT.searchPH;

  els.entriesTitle.textContent = DICT.entriesTitle;
  els.entriesEmpty.textContent = DICT.entriesEmpty;
  els.footerText.textContent = DICT.footer;

  // Stats
  els.statsTitle.textContent = DICT.statsTitle;
  els.fromLabel.textContent = DICT.fromLabel;
  els.toLabel.textContent = DICT.toLabel;
  els.filterTagLabel.textContent = DICT.filterTagLabel;
  els.applyFilterBtn.textContent = DICT.apply;
  els.clearFilterBtn.textContent = DICT.reset;
  els.totalEntriesLabel.textContent = DICT.totalEntriesLabel;
  els.currentStreakLabel.textContent = DICT.currentStreakLabel;
  els.longestStreakLabel.textContent = DICT.longestStreakLabel;
  els.topMoodLabel.textContent = DICT.topMoodLabel;
  els.topTagsLabel.textContent = DICT.topTagsLabel;
  els.moodDistTitle.textContent = DICT.moodDistTitle;
  els.tagDistTitle.textContent = DICT.tagDistTitle;

  // Data
  els.dataTitle.textContent = DICT.dataTitle;
  els.exportBtn.textContent = DICT.exportBtn;
  els.importLabel.textContent = DICT.importBtn;
  els.dataHelp.textContent = DICT.dataHelp;
  els.exportCsvBtn.textContent = DICT.exportCsvBtn;
}

/* =========================
   Mood, Tags & Question
========================= */
function renderMoodGrid(){
  els.moodGrid.innerHTML = "";
  DICT.moods.forEach(m => {
    const btn = document.createElement("button");
    btn.className = "mood-btn";
    btn.type = "button";
    btn.setAttribute("role", "option");
    btn.setAttribute("aria-selected", "false");
    btn.setAttribute("data-key", m.key);
    btn.title = m.label;
    btn.innerHTML = `<div>${m.emoji}</div>`;
    btn.addEventListener("click", () => selectMood(m.key));
    els.moodGrid.appendChild(btn);
  });
}
function selectMood(key){
  selectedMoodKey = key;
  [...els.moodGrid.querySelectorAll(".mood-btn")].forEach(btn => {
    btn.setAttribute("aria-selected", String(btn.getAttribute("data-key") === key));
  });
}

function renderTagsGrid(){
  els.tagsGrid.innerHTML = "";
  const settings = loadSettings();
  const preset = asArray(DICT.presetTags);
  const custom = settings.customTags || [];
  const allTags = [...preset, ...custom];

  allTags.forEach(tag => {
    const chip = document.createElement("button");
    chip.className = "tag-chip";
    chip.type = "button";
    chip.textContent = tag;
    chip.setAttribute("aria-pressed", "false");
    chip.addEventListener("click", () => toggleTag(tag, chip));
    els.tagsGrid.appendChild(chip);
  });
}
function toggleTag(tag, chipEl){
  if (selectedTags.has(tag)){
    selectedTags.delete(tag);
    chipEl.setAttribute("aria-pressed","false");
  } else {
    selectedTags.add(tag);
    chipEl.setAttribute("aria-pressed","true");
  }
}
function onAddCustomTag(){
  const val = els.customTagInput.value.trim();
  if (!val) return;
  const settings = loadSettings();
  const all = new Set([...(settings.customTags || [])]);

  const exists = [...all, ...asArray(DICT.presetTags)]
    .some(t => String(t).toLowerCase() === val.toLowerCase());
  if (exists){ showToast(DICT.toasts.tagExists); els.customTagInput.value=""; return; }

  all.add(val);
  settings.customTags = [...all];
  saveSettings(settings);

  els.customTagInput.value = "";
  renderTagsGrid();
  populateFilterTagOptions();
}

function renderDailyQuestion(){
  els.qText.textContent = getQuestionForDate(els.dateInput.value || todayISO());
}
function getQuestionForDate(dateStr){
  const pool = DICT.questions || [];
  if (!pool.length) return "";
  const idx = dayIndex(dateStr) % pool.length;
  return pool[idx];
}

/* =========================
   Create / Edit / Delete
========================= */
function onSave(){
  const date = els.dateInput.value;
  const notes = els.notesInput.value.trim();
  const qAnswer = els.qAnswer.value.trim();

  if (!date)            return showToast(DICT.toasts.needDate);
  if (!selectedMoodKey) return showToast(DICT.toasts.needMood);
  if (!qAnswer)         return showToast(DICT.toasts.needQ);

  const moodObj = DICT.moods.find(m => m.key === selectedMoodKey);
  const newEntry = {
    id: cryptoRandomId(),
    date,
    moodKey: moodObj.key,
    moodLabel: moodObj.label,
    moodEmoji: moodObj.emoji,
    tags: [...selectedTags],
    q: { text: getQuestionForDate(date), answer: qAnswer },
    notes,
    createdAt: new Date().toISOString(),
    langAtSave: LANG
  };
  const all = loadEntries();
  all.unshift(newEntry);
  saveEntries(all);

  renderEntries();
  clearForm(true);
  showToast(DICT.toasts.saved);
  updateStatsAndCharts();
}

function startEdit(entryId){
  const entry = loadEntries().find(e => e.id === entryId);
  if (!entry) return;

  editingId = entry.id;
  els.dateInput.value = entry.date;
  // mood
  selectedMoodKey = entry.moodKey;
  [...els.moodGrid.querySelectorAll(".mood-btn")].forEach(btn => {
    btn.setAttribute("aria-selected", String(btn.getAttribute("data-key") === selectedMoodKey));
  });
  // tags
  selectedTags = new Set(entry.tags || []);
  [...els.tagsGrid.querySelectorAll(".tag-chip")].forEach(chip => {
    chip.setAttribute("aria-pressed", String(selectedTags.has(chip.textContent)));
  });
  // question: use stored text
  cachedEditQuestion = entry.q?.text || getQuestionForDate(entry.date);
  els.qText.textContent = cachedEditQuestion;
  els.qAnswer.value = entry.q?.answer || "";
  // notes
  els.notesInput.value = entry.notes || "";

  // toggle buttons
  els.saveBtn.classList.add("hidden");
  els.updateBtn.classList.remove("hidden");
  els.cancelEditBtn.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function onUpdate(){
  if (!editingId) return;

  const date = els.dateInput.value;
  const notes = els.notesInput.value.trim();
  const qAnswer = els.qAnswer.value.trim();

  if (!date)            return showToast(DICT.toasts.needDate);
  if (!selectedMoodKey) return showToast(DICT.toasts.needMood);
  if (!qAnswer)         return showToast(DICT.toasts.needQ);

  const all = loadEntries();
  const idx = all.findIndex(e => e.id === editingId);
  if (idx === -1) return;

  const moodObj = DICT.moods.find(m => m.key === selectedMoodKey);

  // If date changed during edit, cachedEditQuestion was recomputed in change handler
  const qTextToSave = cachedEditQuestion || getQuestionForDate(date);

  all[idx] = {
    ...all[idx],
    date,
    moodKey: moodObj.key,
    moodLabel: moodObj.label,
    moodEmoji: moodObj.emoji,
    tags: [...selectedTags],
    q: { text: qTextToSave, answer: qAnswer },
    notes
  };
  saveEntries(all);

  renderEntries();
  showToast(DICT.toasts.updated);
  cancelEdit();
  updateStatsAndCharts();
}

function cancelEdit(){
  editingId = null;
  cachedEditQuestion = "";
  clearForm(true);
  els.saveBtn.classList.remove("hidden");
  els.updateBtn.classList.add("hidden");
  els.cancelEditBtn.classList.add("hidden");
}

function renderEntries(){
  const all = loadEntries();
  els.entriesList.innerHTML = "";

  // Apply search filter
  const filtered = all.filter(e => matchesSearch(e, searchQuery));

  if (!filtered.length){
    els.entriesEmpty.style.display = "block";
    return;
  }
  els.entriesEmpty.style.display = "none";

  filtered.forEach(entry => {
    const li = document.createElement("li");
    li.className = "entry";

    const left = document.createElement("div");
    left.className = "entry-left";

    const emoji = document.createElement("div");
    emoji.className = "entry-emoji";
    emoji.textContent = entry.moodEmoji;

    const meta = document.createElement("div");
    meta.className = "entry-meta";

    const dateEl = document.createElement("div");
    dateEl.className = "entry-date";
    dateEl.textContent = formatDisplayDate(entry.date);

    const labelEl = document.createElement("div");
    labelEl.textContent = entry.moodLabel;

    const tagsWrap = document.createElement("div");
    tagsWrap.className = "entry-tags";
    (entry.tags || []).forEach(t => {
      const span = document.createElement("span");
      span.className = "entry-tag";
      span.textContent = t;
      tagsWrap.appendChild(span);
    });

    const qa = document.createElement("div");
    qa.className = "entry-qa";
    qa.innerHTML = `<strong>Q:</strong> ${escapeHTML(entry.q?.text || "")}<br><strong>A:</strong> ${escapeHTML(entry.q?.answer || "")}`;

    const noteEl = document.createElement("div");
    noteEl.className = "entry-note";
    noteEl.textContent = entry.notes || "";

    meta.appendChild(dateEl);
    meta.appendChild(labelEl);
    if ((entry.tags || []).length) meta.appendChild(tagsWrap);
    meta.appendChild(qa);
    if (entry.notes) meta.appendChild(noteEl);

    left.appendChild(emoji);
    left.appendChild(meta);

    const actions = document.createElement("div");
    actions.className = "entry-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "btn small";
    editBtn.textContent = DICT.edit;
    editBtn.addEventListener("click", () => startEdit(entry.id));

    const delBtn = document.createElement("button");
    delBtn.className = "btn danger small";
    delBtn.textContent = DICT.del;
    delBtn.addEventListener("click", () => deleteEntry(entry.id));

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(left);
    li.appendChild(actions);
    els.entriesList.appendChild(li);
  });
}

function deleteEntry(id){
  const all = loadEntries().filter(e => e.id !== id);
  saveEntries(all);
  renderEntries();
  showToast(DICT.toasts.deleted);
  updateStatsAndCharts();
}

/* =========================
   Search
========================= */
function matchesSearch(entry, query){
  if (!query) return true;
  const hay = [
    entry.date,
    entry.moodLabel,
    (entry.tags||[]).join(" "),
    entry.q?.text || "",
    entry.q?.answer || "",
    entry.notes || ""
  ].join("  ").toLowerCase();
  return hay.includes(query);
}

/* =========================
   Stats + Charts (from Step 3)
========================= */
function populateFilterTagOptions(){
  const settings = loadSettings();
  const preset = asArray(DICT.presetTags);
  const custom = settings.customTags || [];
  const all = ["__ALL__", ...new Set([...preset, ...custom])];
  els.filterTag.innerHTML = "";
  all.forEach(tag => {
    const opt = document.createElement("option");
    opt.value = tag;
    opt.textContent = tag === "__ALL__" ? (LANG==="ko" ? "전체" : "All") : tag;
    els.filterTag.appendChild(opt);
  });
}
function autoSetDefaultFilterRange(){
  const all = loadEntries();
  if (!all.length){ els.fromDate.value=""; els.toDate.value=""; return; }
  const min = all.reduce((a,e)=>e.date<a?e.date:a, all[0].date);
  const max = all.reduce((a,e)=>e.date>a?e.date:a, all[0].date);
  els.fromDate.value = min;
  els.toDate.value = max;
}
function resetFilters(){
  autoSetDefaultFilterRange();
  els.filterTag.value="__ALL__";
  updateStatsAndCharts();
}
function updateStatsAndCharts(){
  const all = loadEntries();
  const from = els.fromDate.value || null;
  const to = els.toDate.value || null;
  const tagFilter = els.filterTag.value || "__ALL__";

  const filtered = all.filter(e => {
    if (from && e.date < from) return false;
    if (to && e.date > to) return false;
    if (tagFilter !== "__ALL__" && !(e.tags||[]).includes(tagFilter)) return false;
    return true;
  });

  els.totalEntries.textContent = filtered.length;

  const { current, longest } = calcStreaks(filtered);
  els.currentStreak.textContent = current;
  els.longestStreak.textContent = longest;

  const moodCounts = countBy(filtered, e => e.moodLabel);
  els.topMood.textContent = maxKey(moodCounts) || DICT.na;

  const tagCounts = countTags(filtered);
  const topTagsArr = Object.entries(tagCounts).sort((a,b)=>b[1]-a[1]).slice(0,5);
  els.topTags.innerHTML = topTagsArr.length
    ? topTagsArr.map(([t])=>`<span class="badge">${escapeHTML(t)}</span>`).join(" ")
    : DICT.na;

  drawBarChart(els.moodCanvas, moodCounts);
  drawBarChart(els.tagCanvas, tagCounts);
}
function calcStreaks(entries){
  if (!entries.length) return { current:0, longest:0 };
  const days = [...new Set(entries.map(e=>e.date))].sort();
  let longest=1, current=1;
  for (let i=1;i<days.length;i++){
    const prev = new Date(days[i-1]), cur = new Date(days[i]);
    if (isNextDay(prev,cur)){ current++; longest=Math.max(longest,current); }
    else current=1;
  }
  const today = new Date(todayISO());
  const set = new Set(days);
  let cur=0, cursor=today;
  while (set.has(isoFromDate(cursor))){ cur++; cursor=addDays(cursor,-1); }
  return { current:cur, longest };
}
function isNextDay(d1,d2){ const a=new Date(d1.getFullYear(),d1.getMonth(),d1.getDate()+1); return a.toDateString()===d2.toDateString(); }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function isoFromDate(d){ const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), da=String(d.getDate()).padStart(2,"0"); return `${y}-${m}-${da}`; }
function countBy(arr, keyFn){ const m={}; arr.forEach(x=>{ const k=keyFn(x); m[k]=(m[k]||0)+1; }); return m; }
function countTags(entries){ const m={}; entries.forEach(e => (e.tags||[]).forEach(t => { m[t]=(m[t]||0)+1; })); return m; }
function maxKey(obj){ let best=null, v=-Infinity; for (const k in obj){ if (obj[k]>v){ best=k; v=obj[k]; } } return best; }

/* =========================
   Data I/O: JSON + CSV
========================= */
function onExportJSON(){
  const data = {
    version: "yourmood-v2",
    exportedAt: new Date().toISOString(),
    lang: LANG,
    settings: loadSettings(),
    entries: loadEntries()
  };
  const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `yourmood_export_${Date.now()}.json`; a.click();
  URL.revokeObjectURL(url);
}
function onImportJSON(ev){
  const file = ev.target.files?.[0];
  if (!file) return;
  const mode = els.importMode.value; // merge | replace
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(String(reader.result));
      const incomingEntries = asArray(parsed.entries);
      const incomingSettings = parsed.settings || {};

      if (mode === "replace"){
        saveEntries(incomingEntries);
        saveSettings(incomingSettings);
        showToast(DICT.toasts.replaced);
      } else {
        const cur = loadEntries();
        const ids = new Set(cur.map(e=>e.id));
        const merged = [...cur, ...incomingEntries.filter(e=>!ids.has(e.id))];
        saveEntries(merged);

        const curSet = new Set(asArray(loadSettings().customTags));
        asArray(incomingSettings.customTags).forEach(t=>curSet.add(t));
        const mergedSettings = { ...loadSettings(), ...incomingSettings, customTags:[...curSet] };
        saveSettings(mergedSettings);

        showToast(DICT.toasts.imported);
      }
      renderTagsGrid();
      populateFilterTagOptions();
      renderEntries();
      updateStatsAndCharts();
    } catch(e){
      alert("Invalid JSON");
    } finally {
      ev.target.value = "";
    }
  };
  reader.readAsText(file);
}
function onExportCSV(){
  const entries = loadEntries();
  const rows = [
    ["id","date","moodKey","moodLabel","tags","question","answer","notes","createdAt"]
  ];
  entries.forEach(e => rows.push([
    e.id,
    e.date,
    e.moodKey,
    e.moodLabel,
    (e.tags||[]).join(";"),
    (e.q?.text||""),
    (e.q?.answer||""),
    (e.notes||""),
    e.createdAt || ""
  ]));

  const csv = rows.map(r => r.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `yourmood_export_${Date.now()}.csv`; a.click();
  URL.revokeObjectURL(url);
}
function csvEscape(field){
  const s = String(field).replaceAll('"','""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
}

/* =========================
   Helpers
========================= */
function loadEntries(){ try{ const raw=localStorage.getItem(STORAGE_KEY); return raw?JSON.parse(raw):[]; }catch{ return []; } }
function saveEntries(arr){ localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); }
function loadSettings(){ try{ const raw=localStorage.getItem(SETTINGS_KEY); return raw?JSON.parse(raw):{}; }catch{ return {}; } }
function saveSettings(obj){ localStorage.setItem(SETTINGS_KEY, JSON.stringify(obj)); }

function todayISO(){ const d=new Date(); const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), da=String(d.getDate()).padStart(2,"0"); return `${y}-${m}-${da}`; }
function dayIndex(dateStr){ const [y,m,d]=dateStr.split("-").map(Number); const base=new Date(Date.UTC(1970,0,1)); const cur=new Date(Date.UTC(y,m-1,d)); return Math.floor((cur-base)/(24*3600*1000)); }
function formatDisplayDate(iso){
  const [y,m,d]=iso.split("-").map(Number);
  const dt=new Date(y,m-1,d);
  return dt.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric",weekday:"short"});
}
function clearForm(keepDate=false){
  if (!keepDate) els.dateInput.value = todayISO();
  selectedMoodKey = null;
  selectedTags = new Set();
  els.notesInput.value = "";
  els.qAnswer.value = "";
  if (!editingId) renderDailyQuestion();
  [...els.moodGrid.querySelectorAll(".mood-btn")].forEach(b=>b.setAttribute("aria-selected","false"));
  [...els.tagsGrid.querySelectorAll(".tag-chip")].forEach(c=>c.setAttribute("aria-pressed","false"));
}
function cryptoRandomId(){
  if (window.crypto?.getRandomValues){ const buf=new Uint32Array(2); crypto.getRandomValues(buf); return [...buf].map(n=>n.toString(36)).join(""); }
  return Math.random().toString(36).slice(2)+Date.now().toString(36);
}
function escapeHTML(s){ return String(s||"").replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function asArray(v){ return Array.isArray(v)?v:(v?[v]:[]); }
function qs(s){ return document.querySelector(s); }
function showToast(msg){ els.toast.textContent = msg; els.toast.style.display="block"; clearTimeout(showToast._t); showToast._t=setTimeout(()=>{ els.toast.style.display="none"; }, 1600); }

/* =========================
   Charts (simple bar)
========================= */
function drawBarChart(canvas, dataObj){
  const ctx = canvas.getContext("2d");
  const entries = Object.entries(dataObj).sort((a,b)=>b[1]-a[1]);
  const labels = entries.map(([k])=>k);
  const values = entries.map(([,v])=>v);
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0,0,W,H);

  if (!values.length){
    ctx.fillStyle = "#6b7280";
    ctx.font = "14px system-ui";
    ctx.fillText(LANG==="ko" ? "데이터가 없습니다." : "No data", 12, 24);
    return;
  }

  const padding = { left: 48, right: 12, top: 10, bottom: 36 };
  const chartW = W - padding.left - padding.right;
  const chartH = H - padding.top - padding.bottom;
  const maxV = Math.max(...values);

  ctx.strokeStyle = "#e5e7eb";
  ctx.beginPath();
  ctx.moveTo(padding.left, H - padding.bottom);
  ctx.lineTo(W - padding.right, H - padding.bottom);
  ctx.stroke();

  const gap = 8;
  const barW = Math.max(8, (chartW - gap*(values.length-1)) / values.length);
  values.forEach((v, i) => {
    const h = maxV ? (v / maxV) * chartH : 0;
    const x = padding.left + i*(barW+gap);
    const y = H - padding.bottom - h;

    ctx.fillStyle = "#7c3aed";
    ctx.fillRect(x, y, barW, h);

    ctx.fillStyle = "#111827";
    ctx.font = "12px system-ui";
    ctx.fillText(String(v), x + barW/2 - ctx.measureText(String(v)).width/2, y - 4);

    ctx.fillStyle = "#6b7280";
    const text = labels[i];
    if (labels.length > 12){
      ctx.save();
      ctx.translate(x + barW/2, H - padding.bottom + 4);
      ctx.rotate(-Math.PI/3);
      ctx.fillText(text, 0, 12);
      ctx.restore();
    } else {
      ctx.fillText(text, x + barW/2 - ctx.measureText(text).width/2, H - padding.bottom + 14);
    }
  });
}
