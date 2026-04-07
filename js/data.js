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
1. Request hits Kestrel server  
2. Goes through Middleware pipeline  
3. Routing identifies endpoint  
4. Controller/Action executes  
5. Response travels back through middleware  
6. Sent to client  
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