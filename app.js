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
        const role = createElement("p", "repo-role", project.role);
        const evidence = createElement("p", "repo-evidence", project.evidence);

        const stack = createElement("div", "tag-row");
        project.stack.forEach((item) => stack.append(createElement("span", "tag", item)));

        const footer = createElement("div", "repo-footer");
        const language = createElement("span", "language-dot");
        language.style.setProperty("--dot-color", project.color);
        language.append(document.createTextNode(project.language));
        footer.append(language);
        footer.append(createElement("span", "repo-meta", project.year));

        const actions = createElement("div", "action-row");
        const repo = createElement("a", "action-button action-button-primary", "Repository");
        repo.href = project.repo;
        repo.target = "_blank";
        repo.rel = "noreferrer";
        actions.append(repo);

        if (project.demo) {
          const demo = createElement("a", "action-button", "Demo");
          demo.href = project.demo;
          demo.target = "_blank";
          demo.rel = "noreferrer";
          actions.append(demo);
        }

        card.append(titleRow, description, role, evidence, stack, footer, actions);
        grid.append(card);
      });
  }

  function renderStack() {
    const list = qs("#stackList");
    list.innerHTML = "";

    data.stack.forEach((item) => {
      const row = createElement("div", "stack-item");
      const label = createElement("div", "stack-label");
      label.append(createElement("span", "", item.name));
      label.append(createElement("strong", "", `${item.level}%`));

      const meter = createElement("div", "meter");
      const fill = createElement("span");
      fill.style.width = `${item.level}%`;
      fill.style.background = item.color;
      meter.append(fill);

      row.append(label, meter);
      list.append(row);
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

  renderFilters();
  renderProjects();
  renderStack();
  renderTimeline();
})();
