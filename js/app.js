const app = {
  init() {
    this.renderSidebar();
    this.renderCards(0); // default load
  },

renderSidebar() {
  const sidebar = document.getElementById("sidebar");

  sidebar.innerHTML = topics.map((t, i) => `
    
    <!-- Parent -->
    <div class="menu-item d-flex justify-content-between align-items-center"
         onclick="app.toggleMenu(${i})">
      <span><i class="fa ${t.icon}"></i> ${t.name}</span>
      <i class="fa fa-chevron-down" id="arrow-${i}"></i>
    </div>

    <!-- Children -->
    <div id="submenu-${i}" class="submenu">
      ${t.children.map((c, j) => `
        <div class="menu-sub-item" onclick="event.stopPropagation(); app.renderCards(${i}, ${j})">
          ➤ ${c.name}
        </div>
      `).join("")}
    </div>

  `).join("");
},

renderCards(parentIndex, childIndex) {
  const content = document.getElementById("content");

  const child = topics[parentIndex].children[childIndex];

  content.innerHTML = `
    <h3 class="mb-4">${child.name}</h3>

    <div class="row">
      ${child.questions.map((q, i) => `
        <div class="col-md-6">
          <div class="card mb-3">

            <div class="card-header bg-dark text-white"
                 data-bs-toggle="collapse"
                 data-bs-target="#q-${parentIndex}-${childIndex}-${i}"
                 style="cursor:pointer">

              ${q.title}
            </div>

            <div id="q-${parentIndex}-${childIndex}-${i}" class="collapse">
              <div class="card-body">
                <pre>${q.content}</pre>
              </div>
            </div>

          </div>
        </div>
      `).join("")}
    </div>
  `;
},
toggleMenu(index) {
  const submenu = document.getElementById(`submenu-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);

  const isOpen = submenu.style.display === "block";

  submenu.style.display = isOpen ? "none" : "block";

  // rotate arrow
  arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}
};



app.init();