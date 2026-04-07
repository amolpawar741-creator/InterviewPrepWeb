const app = {
  init() {
    this.renderSidebar();
    this.renderCards(0); // default load
  },

renderSidebar() {
  const sidebar = document.getElementById("sidebar");

  sidebar.innerHTML = topics.map((t, i) => `
    <div>
      <div class="menu-item" onclick="app.toggleMenu(${i})">
        <i class="fa ${t.icon}"></i> ${t.name}
      </div>

      <div class="submenu" id="submenu-${i}">
        ${t.children.map((c, j) => `
          <div class="menu-item" onclick="app.renderCards(${i}, ${j})">
            ${c.name}
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
},

renderCards(parentIndex, childIndex) {
  const content = document.getElementById("content");
  const topic = topics[parentIndex].children[childIndex];

  content.innerHTML = `
    <h3 class="mb-4">${topic.name}</h3>
    <div class="row">
      ${topic.questions.map((q, i) => `
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-header bg-dark text-white" onclick="app.toggleCard(${i})">
              ${q.title}
              <i class="fa fa-chevron-down"></i>
            </div>
            <div class="card-body" id="card-${i}">
              ${q.content}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
},
toggleMenu(index) {
  const el = document.getElementById(`submenu-${index}`);
  el.style.display = el.style.display === "block" ? "none" : "block";
},
toggleCard(index) {
  const el = document.getElementById(`card-${index}`);
  el.style.display = el.style.display === "block" ? "none" : "block";
}
};



app.init();