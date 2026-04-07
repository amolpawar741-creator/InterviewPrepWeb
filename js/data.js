const topics = [
  {
    name: ".NET Core / ASP.NET Core (Advanced)",
    icon: "fa-code",
    children: [
      {
        name: "Basics → Advanced",
        questions: [
          {
            title: "What happens internally when a request hits ASP.NET Core pipeline?",
            content: `
<div class="pipeline">

  <div class="step">
    <span class="badge bg-primary">1</span>
    <div>
      <b>Client → Kestrel → Middleware → Routing → Controller → Response → Client</b>
    </div>
  </div>

  <div class="step">
    <span class="badge bg-secondary">2</span>
    <div>
      Request first hits <b>Kestrel server</b> (default ASP.NET Core web server)
    </div>
  </div>

  <div class="step">
    <span class="badge bg-success">3</span>
    <div>
      Request passes through <b>Middleware Pipeline</b> (logging, auth, etc.)
    </div>
  </div>

  <div class="step">
    <span class="badge bg-warning text-dark">4</span>
    <div>
      <b>Routing</b> identifies the correct endpoint (controller/action)
    </div>
  </div>

  <div class="step">
    <span class="badge bg-info text-dark">5</span>
    <div>
      <b>Controller executes business logic</b> and prepares response
    </div>
  </div>

  <div class="step">
    <span class="badge bg-danger">6</span>
    <div>
      Response travels back through middleware (reverse order) and sent to client
    </div>
  </div>

</div>
            `
          }
        ]
      },
      {
        name: "Real-world Scenarios",
        questions: [
          {
            title: "How to handle high traffic API?",
            content: "Use caching, load balancing, async processing, and rate limiting."
          }
        ]
      }
    ]
  }
];