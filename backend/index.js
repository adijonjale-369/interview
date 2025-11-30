const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const {
  tableData,
  summaryMetrics,
  salesByMonth,
  monthlyComparisons,
  categories: defaultCategories,
  statuses: defaultStatuses,
} = require("./data"); // your new data file

const { DateTime } = require("luxon");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ITEMS API 
app.get("/items", (req, res) => {
  let {
    page = 1,
    pageSize = 10,
    search = "",
    category = "",
    status = "",
    sortBy = "date",
    sortDir = "desc",
    startDate = "",
    endDate = "",
  } = req.query;

  page = Number(page);
  pageSize = Number(pageSize);

  let items = [...tableData]; // use new static data

  //  FILTERS
  if (search) {
    const s = search.toLowerCase();
    items = items.filter(
      (i) =>
        i.name.toLowerCase().includes(s) || i.type.toLowerCase().includes(s)
    );
  }

  if (category && category !== "All")
    items = items.filter((i) => i.category === category);
  if (status && status !== "All")
    items = items.filter((i) => i.status === status);

  if (startDate)
    items = items.filter(
      (i) => DateTime.fromISO(i.date) >= DateTime.fromISO(startDate)
    );
  if (endDate)
    items = items.filter(
      (i) => DateTime.fromISO(i.date) <= DateTime.fromISO(endDate)
    );

  //  SORTING
  items.sort((a, b) => {
    const dir = sortDir === "asc" ? 1 : -1;
    if (sortBy === "date") return dir * (new Date(a.date) - new Date(b.date));
    if (sortBy === "amount") return dir * (a.amount - b.amount);
    if (sortBy === "name") return dir * a.name.localeCompare(b.name);
    return 0;
  });

  const total = items.length;
  const start = (page - 1) * pageSize;
  const paged = items.slice(start, start + pageSize);

  res.json({ page, pageSize, total, items: paged });
});

// FETCH SINGLE ITEM BY ID
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const item = tableData.find((i) => i.id === id || i.id === Number(id));
  
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  
  res.json(item);
});

//FILTERS API
app.get("/filters", (req, res) => {
  // use unique categories and statuses from tableData
   console.log("tableData length:", tableData?.length);
  console.log("Sample row:", tableData?.[0]);
  const categories = ["All", ...new Set(tableData.map((i) => i.category))];
  const statuses = ["All", ...new Set(tableData.map((i) => i.status))];

  res.json({ categories, statuses });
});

// SUMMARY CARDS 
app.get("/summary", (req, res) => {
  res.json(summaryMetrics);
});

// CHARTS API 
app.get("/charts", (req, res) => {
  res.json({ salesByMonth, monthlyComparisons });
});


const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
