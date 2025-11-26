// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const morgan = require("morgan");
// const { DateTime } = require("luxon");

// const {
//   summar,
//   salesByMonth,
//   monthlyComparisons,
// } = require("./data"); // <-- IMPORT ONLY ONCE

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// const DATA_PATH = path.join(__dirname, "data", "items.json");

// function loadItems() {
//   return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
// }

// // ======================= ITEMS API =======================
// app.get("/items", (req, res) => {
//   let { page = 1, pageSize = 10, search = "", category = "", status = "", sortBy = "date", sortDir = "desc", startDate = "", endDate = "" } = req.query;

//   page = Number(page);
//   pageSize = Number(pageSize);

//   let items = loadItems();

//   if (search) {
//     const s = search.toLowerCase();
//     items = items.filter((i) => i.name.toLowerCase().includes(s) || i.type.toLowerCase().includes(s));
//   }

//   if (category && category !== "All") items = items.filter((i) => i.category === category);
//   if (status && status !== "All") items = items.filter((i) => i.status === status);

//   if (startDate) items = items.filter((i) => DateTime.fromISO(i.date) >= DateTime.fromISO(startDate));
//   if (endDate) items = items.filter((i) => DateTime.fromISO(i.date) <= DateTime.fromISO(endDate));

//   items.sort((a, b) => {
//     const dir = sortDir === "asc" ? 1 : -1;
//     if (sortBy === "date") return dir * (new Date(a.date) - new Date(b.date));
//     if (sortBy === "amount") return dir * (a.amount - b.amount);
//     if (sortBy === "name") return dir * a.name.localeCompare(b.name);
//     return 0;
//   });

//   const total = items.length;
//   const start = (page - 1) * pageSize;
//   const paged = items.slice(start, start + pageSize);

//   res.json({ page, pageSize, total, items: paged });
// });

// // ======================= FILTERS API =======================
// app.get("/filters", (req, res) => {
//   const items = loadItems();
//   const categories = ["All", ...new Set(items.map((i) => i.category))];
//   const statuses = ["All", ...new Set(items.map((i) => i.status))];

//   res.json({ categories, statuses });
// });

// // ======================= SUMMARY CARDS =======================
// app.get("/summary", (req, res) => {
//   res.json(summar);
// });

// // ======================= CHARTS API =======================
// app.get("/charts", (req, res) => {
//   res.json({
//     salesByMonth,
//     monthlyComparisons
//   });
// });

// // ======================= START SERVER =======================
// const PORT = 4000;
// app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

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

// ======================= ITEMS API =======================
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

  // --- FILTERS ---
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

  // --- SORTING ---
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

// ======================= FILTERS API =======================
app.get("/filters", (req, res) => {
  // use unique categories and statuses from tableData
  const categories = ["All", ...new Set(tableData.map((i) => i.category))];
  const statuses = ["All", ...new Set(tableData.map((i) => i.status))];

  res.json({ categories, statuses });
});

// ======================= SUMMARY CARDS =======================
app.get("/summary", (req, res) => {
  res.json(summaryMetrics);
});

// ======================= CHARTS API =======================
app.get("/charts", (req, res) => {
  res.json({ salesByMonth, monthlyComparisons });
});

// ======================= START SERVER =======================
const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
