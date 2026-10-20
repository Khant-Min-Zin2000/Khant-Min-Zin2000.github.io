// Builds the report cards from the REPORTS list in reports.js.
// You shouldn't need to edit this file to add reports.

(function () {
  const list = document.getElementById("report-list");
  const search = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const countEl = document.getElementById("result-count");

  let activeTag = "All";

  // Newest first
  const reports = REPORTS.slice().sort((a, b) => b.date.localeCompare(a.date));

  // One filter button per tag, in order of how often the tag is used
  const tagCounts = {};
  reports.forEach(r => (r.tags || []).forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
  const tags = ["All"].concat(Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a] || a.localeCompare(b)));

  tags.forEach(tag => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.textContent = tag;
    btn.setAttribute("aria-pressed", tag === activeTag ? "true" : "false");
    btn.addEventListener("click", () => {
      activeTag = tag;
      filtersEl.querySelectorAll(".filter-btn").forEach(b =>
        b.setAttribute("aria-pressed", b.textContent === tag ? "true" : "false"));
      render();
    });
    filtersEl.appendChild(btn);
  });

  search.addEventListener("input", render);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function card(r) {
    const article = el("article", "report-card");

    const meta = el("div", "report-meta");
    meta.appendChild(el("span", "", r.displayDate || r.date));
    if (r.role) meta.appendChild(el("span", "report-role", r.role));
    article.appendChild(meta);

    article.appendChild(el("h3", "", r.title));
    article.appendChild(el("p", "", r.summary));

    if (r.tags && r.tags.length) {
      const ul = el("ul", "tag-list");
      r.tags.forEach(t => ul.appendChild(el("li", "", t)));
      article.appendChild(ul);
    }

    const href = "reports/" + encodeURIComponent(r.file);
    const actions = el("div", "report-actions");

    const open = el("a", "btn btn-primary btn-small", "Open PDF");
    open.href = href;
    open.target = "_blank";
    open.rel = "noopener";
    open.setAttribute("aria-label", "Open PDF: " + r.title + ", " + (r.displayDate || r.date));

    const download = el("a", "btn btn-secondary btn-small", "Download");
    download.href = href;
    download.setAttribute("download", r.file);
    download.setAttribute("aria-label", "Download PDF: " + r.title + ", " + (r.displayDate || r.date));

    actions.appendChild(open);
    actions.appendChild(download);
    article.appendChild(actions);
    return article;
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const shown = reports.filter(r => {
      const tagOk = activeTag === "All" || (r.tags || []).includes(activeTag);
      const text = [r.title, r.summary, r.role, r.displayDate, (r.tags || []).join(" ")].join(" ").toLowerCase();
      return tagOk && (!q || text.includes(q));
    });

    list.innerHTML = "";
    shown.forEach(r => list.appendChild(card(r)));

    if (shown.length === 0) {
      list.appendChild(el("p", "empty", "No reports match. Try a different word or topic."));
    }
    countEl.textContent = shown.length === reports.length
      ? reports.length + " reports"
      : "Showing " + shown.length + " of " + reports.length + " reports";
  }

  render();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
