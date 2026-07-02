const TASKS = [{"upload":"2026-07-02","play":"2026-07-03","type":"321主題曲","episode":129,"owner":"David"},{"upload":"2026-07-02","play":"2026-07-03","type":"321講述影片","episode":129,"owner":"文秀"},{"upload":"2026-07-02","play":"2026-07-03","type":"新約靈修會主","episode":580,"owner":"心瑀"},{"upload":"2026-07-02","play":"2026-07-03","type":"真理點心","episode":459,"owner":"佳敏"},{"upload":"2026-07-02","play":"2026-07-03","type":"舊約導讀","episode":"歷代志下第33章","owner":"David"},{"upload":"2026-07-03","play":"2026-07-04","type":"真理點心","episode":460,"owner":"奕全"},{"upload":"2026-07-04","play":"2026-07-05","type":"真理點心","episode":461,"owner":"明子"},{"upload":"2026-07-05","play":"2026-07-06","type":"321主題曲","episode":130,"owner":"奕全"},{"upload":"2026-07-05","play":"2026-07-06","type":"321講述影片","episode":130,"owner":"明子"},{"upload":"2026-07-05","play":"2026-07-06","type":"新約靈修會主","episode":581,"owner":"David"},{"upload":"2026-07-05","play":"2026-07-06","type":"真理點心","episode":462,"owner":"贞洁"},{"upload":"2026-07-05","play":"2026-07-06","type":"舊約導讀","episode":"歷代志下第34章","owner":"心瑀"},{"upload":"2026-07-06","play":"2026-07-07","type":"新約靈修會主","episode":582,"owner":"心瑀"},{"upload":"2026-07-06","play":"2026-07-07","type":"真理點心","episode":463,"owner":"David"},{"upload":"2026-07-07","play":"2026-07-08","type":"321主題曲","episode":131,"owner":"心瑀"},{"upload":"2026-07-07","play":"2026-07-08","type":"321講述影片","episode":131,"owner":"David"},{"upload":"2026-07-07","play":"2026-07-08","type":"新約靈修會主","episode":583,"owner":"心瑀"},{"upload":"2026-07-07","play":"2026-07-08","type":"真理點心","episode":464,"owner":"心瑀"},{"upload":"2026-07-07","play":"2026-07-08","type":"舊約導讀","episode":"歷代志下第35章","owner":"明子"},{"upload":"2026-07-08","play":"2026-07-09","type":"新約靈修會主","episode":584,"owner":"明子"},{"upload":"2026-07-08","play":"2026-07-09","type":"真理點心","episode":465,"owner":"淑華"},{"upload":"2026-07-09","play":"2026-07-10","type":"321主題曲","episode":132,"owner":"David"},{"upload":"2026-07-09","play":"2026-07-10","type":"321講述影片","episode":132,"owner":"麗惟"},{"upload":"2026-07-09","play":"2026-07-10","type":"新約靈修會主","episode":585,"owner":"心瑀"},{"upload":"2026-07-09","play":"2026-07-10","type":"真理點心","episode":466,"owner":"佳敏"},{"upload":"2026-07-09","play":"2026-07-10","type":"舊約導讀","episode":"歷代志下第36章","owner":"David"},{"upload":"2026-07-10","play":"2026-07-11","type":"真理點心","episode":467,"owner":"木可"},{"upload":"2026-07-11","play":"2026-07-12","type":"真理點心","episode":468,"owner":"明子"},{"upload":"2026-07-12","play":"2026-07-13","type":"321主題曲","episode":133,"owner":"淑華"},{"upload":"2026-07-12","play":"2026-07-13","type":"321講述影片","episode":133,"owner":"心瑀"},{"upload":"2026-07-12","play":"2026-07-13","type":"新約靈修會主","episode":586,"owner":"David"},{"upload":"2026-07-12","play":"2026-07-13","type":"真理點心","episode":469,"owner":"贞洁"},{"upload":"2026-07-12","play":"2026-07-13","type":"舊約導讀","episode":"以斯拉記1","owner":"心瑀"},{"upload":"2026-07-13","play":"2026-07-14","type":"新約靈修會主","episode":587,"owner":"心瑀"},{"upload":"2026-07-13","play":"2026-07-14","type":"真理點心","episode":470,"owner":"David"},{"upload":"2026-07-14","play":"2026-07-15","type":"321主題曲","episode":134,"owner":"明子"},{"upload":"2026-07-14","play":"2026-07-15","type":"321講述影片","episode":134,"owner":"David"},{"upload":"2026-07-14","play":"2026-07-15","type":"新約靈修會主","episode":588,"owner":"淑華"},{"upload":"2026-07-14","play":"2026-07-15","type":"真理點心","episode":471,"owner":"心瑀"},{"upload":"2026-07-14","play":"2026-07-15","type":"舊約導讀","episode":"以斯拉記2","owner":"淑華"},{"upload":"2026-07-15","play":"2026-07-16","type":"新約靈修會主","episode":589,"owner":"明子"},{"upload":"2026-07-15","play":"2026-07-16","type":"真理點心","episode":472,"owner":"淑華"},{"upload":"2026-07-16","play":"2026-07-17","type":"321主題曲","episode":135,"owner":"David"},{"upload":"2026-07-16","play":"2026-07-17","type":"321講述影片","episode":135,"owner":"文秀"},{"upload":"2026-07-16","play":"2026-07-17","type":"新約靈修會主","episode":590,"owner":"心瑀"},{"upload":"2026-07-16","play":"2026-07-17","type":"真理點心","episode":473,"owner":"佳敏"},{"upload":"2026-07-16","play":"2026-07-17","type":"舊約導讀","episode":"以斯拉記3","owner":"David"},{"upload":"2026-07-17","play":"2026-07-18","type":"真理點心","episode":474,"owner":"碧榮"},{"upload":"2026-07-18","play":"2026-07-19","type":"真理點心","episode":475,"owner":"明子"},{"upload":"2026-07-19","play":"2026-07-20","type":"321主題曲","episode":136,"owner":"貞潔"},{"upload":"2026-07-19","play":"2026-07-20","type":"321講述影片","episode":136,"owner":"明子"},{"upload":"2026-07-19","play":"2026-07-20","type":"新約靈修會主","episode":591,"owner":"David"},{"upload":"2026-07-19","play":"2026-07-20","type":"真理點心","episode":476,"owner":"心瑀"},{"upload":"2026-07-19","play":"2026-07-20","type":"舊約導讀","episode":"以斯拉記4","owner":"心瑀"},{"upload":"2026-07-20","play":"2026-07-21","type":"新約靈修會主","episode":592,"owner":"心瑀"},{"upload":"2026-07-20","play":"2026-07-21","type":"真理點心","episode":477,"owner":"David"},{"upload":"2026-07-21","play":"2026-07-22","type":"321主題曲","episode":137,"owner":"心瑀"},{"upload":"2026-07-21","play":"2026-07-22","type":"321講述影片","episode":137,"owner":"David"},{"upload":"2026-07-21","play":"2026-07-22","type":"新約靈修會主","episode":593,"owner":"淑華"},{"upload":"2026-07-21","play":"2026-07-22","type":"真理點心","episode":478,"owner":"心瑀"},{"upload":"2026-07-21","play":"2026-07-22","type":"舊約導讀","episode":"以斯拉記5","owner":"明子"},{"upload":"2026-07-22","play":"2026-07-23","type":"新約靈修會主","episode":594,"owner":"明子"},{"upload":"2026-07-22","play":"2026-07-23","type":"真理點心","episode":479,"owner":"淑華"},{"upload":"2026-07-23","play":"2026-07-24","type":"321主題曲","episode":138,"owner":"David"},{"upload":"2026-07-23","play":"2026-07-24","type":"321講述影片","episode":138,"owner":"麗惟"},{"upload":"2026-07-23","play":"2026-07-24","type":"新約靈修會主","episode":595,"owner":"心瑀"},{"upload":"2026-07-23","play":"2026-07-24","type":"真理點心","episode":480,"owner":"佳敏"},{"upload":"2026-07-23","play":"2026-07-24","type":"舊約導讀","episode":"以斯拉記6","owner":"David"},{"upload":"2026-07-24","play":"2026-07-25","type":"真理點心","episode":481,"owner":"木可"},{"upload":"2026-07-25","play":"2026-07-26","type":"真理點心","episode":482,"owner":"明子"},{"upload":"2026-07-26","play":"2026-07-27","type":"321主題曲","episode":139,"owner":"明子"},{"upload":"2026-07-26","play":"2026-07-27","type":"321講述影片","episode":139,"owner":"文秀"},{"upload":"2026-07-26","play":"2026-07-27","type":"新約靈修會主","episode":596,"owner":"David"},{"upload":"2026-07-26","play":"2026-07-27","type":"真理點心","episode":483,"owner":"奕全"},{"upload":"2026-07-26","play":"2026-07-27","type":"舊約導讀","episode":"以斯拉記7","owner":"心瑀"},{"upload":"2026-07-27","play":"2026-07-28","type":"新約靈修會主","episode":597,"owner":"心瑀"},{"upload":"2026-07-27","play":"2026-07-28","type":"真理點心","episode":484,"owner":"David"},{"upload":"2026-07-28","play":"2026-07-29","type":"321主題曲","episode":140,"owner":"Connie"},{"upload":"2026-07-28","play":"2026-07-29","type":"321講述影片","episode":140,"owner":"David"},{"upload":"2026-07-28","play":"2026-07-29","type":"新約靈修會主","episode":598,"owner":"淑華"},{"upload":"2026-07-28","play":"2026-07-29","type":"真理點心","episode":485,"owner":"貞潔"},{"upload":"2026-07-28","play":"2026-07-29","type":"舊約導讀","episode":"以斯拉記8","owner":"淑華"},{"upload":"2026-07-29","play":"2026-07-30","type":"新約靈修會主","episode":599,"owner":"明子"},{"upload":"2026-07-29","play":"2026-07-30","type":"真理點心","episode":486,"owner":"淑華"},{"upload":"2026-07-30","play":"2026-07-31","type":"321主題曲","episode":141,"owner":"David"},{"upload":"2026-07-30","play":"2026-07-31","type":"321講述影片","episode":141,"owner":"心瑀"},{"upload":"2026-07-30","play":"2026-07-31","type":"新約靈修會主","episode":600,"owner":"心瑀"},{"upload":"2026-07-30","play":"2026-07-31","type":"真理點心","episode":487,"owner":"碧榮"},{"upload":"2026-07-30","play":"2026-07-31","type":"舊約導讀","episode":"以斯拉記9","owner":"David"}];

const PLATFORMS = ["YT", "微信", "陸董", "whatsapp", "新埔line", "晨讀321", "飛牛"];
const REMINDER_TIME_LABEL = "每晚 8 點";
const REMINDER_BODY = `今晚 8 點請上傳：${PLATFORMS.join("、")}`;

const state = {
  filter: "today",
  owner: localStorage.getItem("yt-owner-filter") || "all",
  completed: JSON.parse(localStorage.getItem("yt-completed") || "{}"),
  links: JSON.parse(localStorage.getItem("yt-links") || "{}"),
  customTasks: JSON.parse(localStorage.getItem("yt-custom-tasks") || "[]"),
  editingId: null
};

const $ = selector => document.querySelector(selector);
const today = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};
const collator = new Intl.Collator("zh-Hant");
const taskId = task => `${task.upload}|${task.type}|${task.episode}`;
const displayDate = value => new Intl.DateTimeFormat("zh-TW", {month: "long", day: "numeric", weekday: "short"}).format(new Date(`${value}T12:00:00`));
const episodeLabel = task => typeof task.episode === "number" ? `第 ${task.episode} 期` : task.episode;
const allTasks = () => [...TASKS, ...state.customTasks].sort((a, b) => a.upload.localeCompare(b.upload) || a.type.localeCompare(b.type));
const matchesOwner = task => state.owner === "all" || (task.owner || "") === state.owner;
const ownerTasks = () => allTasks().filter(matchesOwner);

function renderOwnerFilter() {
  const owners = [...new Set(allTasks().map(task => task.owner).filter(Boolean))].sort(collator.compare);
  const select = $("#ownerFilter");
  select.innerHTML = '<option value="all">全部同工</option>';
  owners.forEach(owner => {
    const option = document.createElement("option");
    option.value = owner;
    option.textContent = owner;
    if (owner === state.owner) option.selected = true;
    select.appendChild(option);
  });
  if (state.owner !== "all" && !owners.includes(state.owner)) {
    state.owner = "all";
    localStorage.setItem("yt-owner-filter", state.owner);
    select.value = "all";
  }
}

function filteredTasks() {
  const current = today();
  const tasks = ownerTasks();
  if (state.filter === "today") return tasks.filter(task => task.upload === current);
  if (state.filter === "upcoming") return tasks.filter(task => task.upload > current);
  return tasks;
}

function render() {
  renderOwnerFilter();
  const current = today();
  const todaysTasks = ownerTasks().filter(task => task.upload === current);
  const done = todaysTasks.filter(task => state.completed[taskId(task)]).length;
  const ownerLabel = state.owner === "all" ? "全部同工" : state.owner;
  const heroSubject = state.owner === "all" ? "" : `${ownerLabel}`;
  $("#todayLabel").textContent = displayDate(current);
  $("#heroTitle").textContent = todaysTasks.length ? `${heroSubject}今晚要上傳 ${todaysTasks.length} 部` : `${heroSubject}今晚沒有上傳任務`;
  $("#heroSubtitle").textContent = todaysTasks.length ? `${REMINDER_TIME_LABEL}提醒上傳 ${PLATFORMS.join("、")}` : `${ownerLabel}可以先看看接下來的排程`;
  $("#progressValue").textContent = `${done}/${todaysTasks.length}`;
  $("#progressRing").style.setProperty("--progress", `${todaysTasks.length ? done / todaysTasks.length * 100 : 100}%`);

  const groups = filteredTasks().reduce((result, task) => {
    (result[task.upload] ||= []).push(task);
    return result;
  }, {});
  const list = $("#taskList");
  list.innerHTML = "";
  if (!Object.keys(groups).length) {
    list.innerHTML = `<div class="empty"><strong>${ownerLabel}目前沒有任務</strong><p>可切換人名或查看接下來的排程。</p></div>`;
    return;
  }

  Object.entries(groups).forEach(([date, tasks]) => {
    const group = document.createElement("div");
    group.className = "date-group";
    if (state.filter !== "today") group.innerHTML = `<h3>${displayDate(date)}晚間上傳</h3>`;
    tasks.forEach(task => {
      const id = taskId(task);
      const card = document.createElement("article");
      card.className = `task ${state.completed[id] ? "done" : ""}`;
      card.innerHTML = `
        <input class="check" type="checkbox" aria-label="標示完成" ${state.completed[id] ? "checked" : ""}>
        <div>
          <h3 class="task-title">${task.type}${task.episode ? `｜${episodeLabel(task)}` : ""}${task.custom ? '<span class="custom-badge">自訂</span>' : ""}</h3>
          <p class="meta">${task.owner ? `負責：${task.owner}　·　` : ""}${task.play ? `${displayDate(task.play)}播放` : `${displayDate(task.upload)}上傳`}　·　${PLATFORMS.join("、")}</p>
        </div>
        <div class="task-actions">
          <button class="link-button ${state.links[id] ? "saved" : ""}">${state.links[id] ? "開啟影片" : "貼連結"}</button>
          ${task.custom ? '<button class="delete-button">刪除</button>' : ""}
        </div>`;
      card.querySelector(".check").addEventListener("change", event => {
        state.completed[id] = event.target.checked;
        localStorage.setItem("yt-completed", JSON.stringify(state.completed));
        render();
      });
      card.querySelector(".link-button").addEventListener("click", () => {
        if (state.links[id]) {
          window.open(state.links[id], "_blank", "noopener");
          return;
        }
        state.editingId = id;
        $("#dialogTaskName").textContent = `${task.type}${task.episode ? `｜${episodeLabel(task)}` : ""}`;
        $("#youtubeLink").value = "";
        $("#linkDialog").showModal();
      });
      card.querySelector(".delete-button")?.addEventListener("click", () => {
        if (!window.confirm(`確定刪除「${task.type}」嗎？`)) return;
        state.customTasks = state.customTasks.filter(item => item.id !== task.id);
        delete state.completed[id];
        delete state.links[id];
        localStorage.setItem("yt-custom-tasks", JSON.stringify(state.customTasks));
        localStorage.setItem("yt-completed", JSON.stringify(state.completed));
        localStorage.setItem("yt-links", JSON.stringify(state.links));
        render();
        toast("自訂任務已刪除");
      });
      group.appendChild(card);
    });
    list.appendChild(group);
  });
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 2600);
}

document.querySelectorAll(".tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab === button));
  state.filter = button.dataset.filter;
  render();
}));

$("#ownerFilter").addEventListener("change", event => {
  state.owner = event.target.value;
  localStorage.setItem("yt-owner-filter", state.owner);
  render();
});

$("#saveLinkButton").addEventListener("click", event => {
  const value = $("#youtubeLink").value.trim();
  if (!value) return;
  event.preventDefault();
  try {
    new URL(value);
    state.links[state.editingId] = value;
    localStorage.setItem("yt-links", JSON.stringify(state.links));
    $("#linkDialog").close();
    render();
    toast("影片連結已儲存");
  } catch {
    toast("請輸入正確的網址");
  }
});

$("#addTaskButton").addEventListener("click", () => {
  $("#customUploadDate").value = today();
  $("#taskDialog").showModal();
});

$("#cancelTaskButton").addEventListener("click", () => $("#taskDialog").close());

$("#taskForm").addEventListener("submit", event => {
  event.preventDefault();
  const upload = $("#customUploadDate").value;
  const type = $("#customType").value.trim();
  if (!upload || !type) return;
  state.customTasks.push({
    id: `custom-${Date.now()}`,
    upload,
    play: "",
    type,
    episode: $("#customEpisode").value.trim(),
    owner: $("#customOwner").value.trim(),
    custom: true
  });
  localStorage.setItem("yt-custom-tasks", JSON.stringify(state.customTasks));
  event.target.reset();
  $("#taskDialog").close();
  state.filter = upload === today() ? "today" : "all";
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.filter === state.filter));
  render();
  toast("自訂任務已新增");
});

$("#notifyButton").addEventListener("click", async () => {
  if (!("Notification" in window)) return toast("這台手機不支援網頁通知，請使用行事曆提醒");
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return toast("通知未開啟，仍可使用行事曆提醒");
  const count = allTasks().filter(task => task.upload === today() && !state.completed[taskId(task)]).length;
  const registration = await navigator.serviceWorker?.ready;
  if (registration) {
    registration.showNotification("晚間上傳提醒", {
      body: count ? `${REMINDER_BODY}，今晚共有 ${count} 部待處理` : `${REMINDER_BODY}，今晚任務已完成`,
      icon: "icon-192.png"
    });
  }
  toast("通知已開啟");
});

function icsDate(dateString, hour = 20) {
  return `${dateString.replaceAll("-", "")}T${String(hour).padStart(2, "0")}0000`;
}

$("#calendarButton").addEventListener("click", () => {
  const grouped = allTasks().reduce((result, task) => {
    (result[task.upload] ||= []).push(task);
    return result;
  }, {});
  const events = Object.entries(grouped).map(([date, tasks], index) => {
    const details = [
      `上傳平台：${PLATFORMS.join("、")}`,
      "",
      ...tasks.map(task => `${task.type}${task.episode ? ` ${episodeLabel(task)}` : ""}${task.owner ? `（${task.owner}）` : ""}`)
    ].join("\\n");
    return [
      "BEGIN:VEVENT",
      `UID:upload-${date}-${index}@kingdom321`,
      `DTSTAMP:${icsDate(today(), 12)}Z`,
      `DTSTART;TZID=Asia/Taipei:${icsDate(date, 20)}`,
      `DTEND;TZID=Asia/Taipei:${icsDate(date, 21)}`,
      `SUMMARY:晚間上傳提醒（${tasks.length} 部）`,
      `DESCRIPTION:${details}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT0M",
      "ACTION:DISPLAY",
      `DESCRIPTION:${REMINDER_BODY}`,
      "END:VALARM",
      "END:VEVENT"
    ].join("\r\n");
  }).join("\r\n");
  const calendar = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Kingdom321//Evening Upload Reminder//ZH\r\nCALSCALE:GREGORIAN\r\n${events}\r\nEND:VCALENDAR`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([calendar], {type: "text/calendar;charset=utf-8"}));
  link.download = "國度321-晚間上傳提醒.ics";
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  toast("行事曆檔已建立，請選擇加入行事曆");
});

let deferredPrompt;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  $("#installButton").hidden = false;
});

$("#installButton").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $("#installButton").hidden = true;
});

if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
render();
