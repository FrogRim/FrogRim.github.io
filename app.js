(function () {
  const data = window.PORTFOLIO;
  let activeFilter = "All";

  const qs = (selector) => document.querySelector(selector);

  function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function createLink(className, text, href) {
    const link = createElement("a", className, text);
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    return link;
  }

  function renderProofSignals() {
    const grid = qs("#proofSignals");
    if (!grid) return;
    grid.innerHTML = "";

    data.proofSignals.forEach((item) => {
      const block = createElement("div");
      block.append(createElement("dt", "", item.label));
      block.append(createElement("dd", "", item.value));
      grid.append(block);
    });
  }

  function renderCaseStudies() {
    const list = qs("#caseStudies");
    if (!list) return;
    list.innerHTML = "";

    data.caseStudies.forEach((study, index) => {
      const item = createElement("article", "case-study");
      const number = createElement("span", "case-index", `0${index + 1}`);
      const body = createElement("div", "case-body");

      const heading = createElement("div", "case-heading");
      heading.append(createElement("p", "eyebrow", study.domain));
      heading.append(createElement("h3", "", study.title));

      const grid = createElement("dl", "case-grid");
      [
        ["Problem", study.problem],
        ["Method", study.method],
        ["Decision", study.decision],
        ["AI use", study.aiRecord],
        ["Evidence", study.evidence],
      ].forEach(([label, value]) => {
        const group = createElement("div");
        group.append(createElement("dt", "", label));
        group.append(createElement("dd", "", value));
        grid.append(group);
      });

      const actions = createElement("div", "action-row");
      actions.append(createLink("action-button action-button-primary", "Read case", study.repo));

      body.append(heading, grid, actions);
      item.append(number, body);
      list.append(item);
    });
  }

  function renderFilters() {
    const filters = qs("#projectFilters");
    filters.innerHTML = "";

    data.filters.forEach((filter) => {
      const button = createElement("button", "filter-button", filter);
      button.type = "button";
      button.dataset.active = String(filter === activeFilter);
      button.addEventListener("click", () => {
        activeFilter = filter;
        renderFilters();
        renderProjects();
      });
      filters.append(button);
    });
  }

  function renderProjects() {
    const grid = qs("#featuredProjects");
    grid.innerHTML = "";

    data.projects
      .filter((project) => activeFilter === "All" || project.category === activeFilter)
      .forEach((project) => {
        const card = createElement("article", "repo-card");

        const titleRow = createElement("div", "repo-title-row");
        const title = createElement("h3", "", project.title);
        const status = createElement("span", "status-badge", project.status);
        titleRow.append(title, status);

        const description = createElement("p", "repo-description", project.description);

        const proof = createElement("dl", "repo-proof");
        [
          ["problem", project.problem],
          ["decision", project.decision],
          ["evidence", project.evidence],
        ].forEach(([label, value]) => {
          const group = createElement("div");
          group.append(createElement("dt", "", label));
          group.append(createElement("dd", "", value));
          proof.append(group);
        });

        const stack = createElement("div", "tag-row");
        project.stack.forEach((item) => stack.append(createElement("span", "tag", item)));

        const footer = createElement("div", "repo-footer");
        const language = createElement("span", "language-dot");
        language.style.setProperty("--dot-color", project.color);
        language.append(document.createTextNode(project.language));
        footer.append(language);
        footer.append(createElement("span", "repo-meta", project.year));

        const actions = createElement("div", "action-row");
        actions.append(createLink("action-button action-button-primary", "Repository", project.repo));

        card.append(titleRow, description, proof, stack, footer, actions);
        grid.append(card);
      });
  }

  function renderStack() {
    const list = qs("#stackList");
    list.innerHTML = "";

    data.stackGroups.forEach((group) => {
      const item = createElement("article", "stack-card");
      const heading = createElement("div", "stack-label");
      heading.append(createElement("h3", "", group.label));
      heading.append(createElement("p", "", group.usedFor));

      const tags = createElement("div", "tag-row");
      group.items.forEach((stackItem) => tags.append(createElement("span", "tag", stackItem)));

      item.append(heading, tags);
      list.append(item);
    });
  }

  function renderPrinciples() {
    const list = qs("#principleList");
    if (!list) return;
    list.innerHTML = "";

    data.operatingPrinciples.forEach((principle, index) => {
      const item = createElement("li");
      item.append(createElement("span", "", `0${index + 1}`));
      const body = createElement("div");
      body.append(createElement("strong", "", principle.title));
      body.append(createElement("p", "", principle.text));
      item.append(body);
      list.append(item);
    });
  }

  function renderTimeline() {
    const list = qs("#timelineList");
    list.innerHTML = "";

    data.timeline.forEach((item) => {
      const row = createElement("li", "timeline-item");
      row.append(createElement("time", "", item.date));

      const body = createElement("div", "timeline-body");
      body.append(createElement("h3", "", item.title));
      body.append(createElement("p", "", item.text));
      row.append(body);
      list.append(row);
    });
  }

  renderProofSignals();
  renderCaseStudies();
  renderFilters();
  renderProjects();
  renderStack();
  renderPrinciples();
  renderTimeline();
})();
