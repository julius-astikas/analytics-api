const events = [
  {
    id: 1,
    type: "page_view",
    page: "/",
    timestamp: "2026-11-17T12:00:00Z",
  },
  {
    id: 2,
    type: "project_click",
    page: "/projects",
    timestamp: "2026-11-17T12:05:00Z",
  },
];

// Return all analytics events.
const getAllEvents = (req, res) => {
  res.json(events);
};

// Return one analytics event by ID.
const getEventById = (req, res) => {
  const id = Number(req.params.id);
  const event = events.find((event) => event.id === id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
};

// Create a new analytics event and store it in memory.
const createEvent = (req, res) => {
  const newEvent = {
    id: events.length + 1,
    type: req.body.type,
    page: req.body.page,
    timestamp: req.body.timestamp,
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
};
