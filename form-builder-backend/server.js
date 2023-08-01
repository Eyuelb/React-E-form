const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Routes for CRUD operations

// Get all forms
server.get("/api/forms", (req, res) => {
  router.db.get("forms").then((forms) => {
    res.json(forms);
  });
});

// Get a specific form
server.get("/api/forms/:id", (req, res) => {
  const formId = parseInt(req.params.id, 10);
  router.db
    .get("forms")
    .find({ id: formId })
    .then((form) => {
      if (!form) {
        return res.status(404).json({ error: "Form not found." });
      }
      res.json(form);
    });
});

// Create a new form
server.post("/api/forms", (req, res) => {
  const { name, type, icon, viewBoxType, position } = req.body;

  if (!name || !type || !icon || !viewBoxType || !position) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const newForm = {
    id: Date.now(),
    name,
    type,
    icon,
    viewBoxType,
    position,
  };

  router.db
    .get("forms")
    .push(newForm)
    .write()
    .then(() => {
      res.json(newForm);
    });
});

// Update a form
server.put("/api/forms/:id", (req, res) => {
  const formId = parseInt(req.params.id, 10);
  const { name, type, icon, viewBoxType, position } = req.body;

  if (!name || !type || !icon || !viewBoxType || !position) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  router.db
    .get("forms")
    .find({ id: formId })
    .assign({ name, type, icon, viewBoxType, position })
    .write()
    .then((updatedForm) => {
      if (!updatedForm) {
        return res.status(404).json({ error: "Form not found." });
      }
      res.json(updatedForm);
    });
});

// Delete a form
server.delete("/api/forms/:id", (req, res) => {
  const formId = parseInt(req.params.id, 10);

  router.db
    .get("forms")
    .remove({ id: formId })
    .write()
    .then((removedForm) => {
      if (!removedForm.length) {
        return res.status(404).json({ error: "Form not found." });
      }
      res.json(removedForm[0]);
    });
});
