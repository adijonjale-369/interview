// // backend/data.js
// module.exports.summaryMetrics = [
//   { id: "users", label: "Users", value: 24500 },
//   { id: "orders", label: "Orders", value: 4567 },
//   { id: "revenue", label: "Revenue", value: 14300 },
// ];
// module.exports.salesByMonth = [
//   { month: "Jan", value: 2100 },
//   { month: "Feb", value: 3400 },
//   { month: "Mar", value: 2900 },
//   { month: "Apr", value: 5200 },
//   { month: "May", value: 4300 },
//   { month: "Jun", value: 6100 },
//   { month: "Jul", value: 7200 },
//   { month: "Aug", value: 6800 },
//   { month: "Sep", value: 7400 },
//   { month: "Oct", value: 7900 },
//   { month: "Nov", value: 8300 },
//   { month: "Dec", value: 9100 },
// ];

// module.exports.monthlyComparisons = module.exports.salesByMonth.map(d => ({
//   month: d.month,
//   amount: d.value,
// }));

// module.exports.categoryDistribution = [
//   { category: "Enterprise", value: 45 },
//   { category: "SMB", value: 30 },
//   { category: "Startup", value: 25 },
// ];
// Summary metric cards
const summaryMetrics = [
  { id: "users", label: "Users", value: 24500 },
  { id: "orders", label: "Orders", value: 4567 },
  { id: "revenue", label: "Revenue", value: 14300 },
];

const salesByMonth = [
  { month: "Jan", value: 2100 },
  { month: "Feb", value: 3400 },
  { month: "Mar", value: 2900 },
  { month: "Apr", value: 5200 },
  { month: "May", value: 4300 },
  { month: "Jun", value: 6100 },
  { month: "Jul", value: 7200 },
  { month: "Aug", value: 6800 },
  { month: "Sep", value: 7400 },
  { month: "Oct", value: 7900 },
  { month: "Nov", value: 8300 },
  { month: "Dec", value: 9100 },
];

const monthlyComparisons = salesByMonth.map((d) => ({
  month: d.month,
  amount: d.value,
}));

const categories = ["All", "Enterprise", "SMB", "Startup"];
const statuses = ["All", "Active", "Pending", "Closed"];

const tableData = [
  {
    id: 1,
    name: "Acme Corp",
    date: "2024-09-01",
    status: "Active",
    amount: 4500,
    type: "Subscription",
    category: "Enterprise",
  },
  {
    id: 2,
    name: "Beta LLC",
    date: "2024-09-02",
    status: "Pending",
    amount: 12000,
    type: "One-time",
    category: "SMB",
  },
  {
    id: 3,
    name: "Gamma Inc",
    date: "2024-09-03",
    status: "Closed",
    amount: 2000,
    type: "Subscription",
    category: "Startup",
  },
  {
    id: 4,
    name: "Delta Co",
    date: "2024-09-04",
    status: "Pending",
    amount: 21000,
    type: "Enterprise",
    category: "Enterprise",
  },
  {
    id: 5,
    name: "Epsilon Ltd",
    date: "2024-09-05",
    status: "Active",
    amount: 15000,
    type: "Subscription",
    category: "SMB",
  },
  {
    id: 6,
    name: "Zeta Group",
    date: "2024-09-06",
    status: "Active",
    amount: 7200,
    type: "One-time",
    category: "Startup",
  },
  {
    id: 7,
    name: "Eta Solutions",
    date: "2024-09-07",
    status: "Pending",
    amount: 9800,
    type: "Subscription",
    category: "SMB",
  },
  {
    id: 8,
    name: "Theta Works",
    date: "2024-09-08",
    status: "Closed",
    amount: 3100,
    type: "One-time",
    category: "Startup",
  },
  {
    id: 9,
    name: "Iota Labs",
    date: "2024-09-09",
    status: "Active",
    amount: 5400,
    type: "Subscription",
    category: "SMB",
  },
  {
    id: 10,
    name: "Kappa Ventures",
    date: "2024-09-10",
    status: "Pending",
    amount: 16000,
    type: "Enterprise",
    category: "Enterprise",
  },
  {
    id: 11,
    name: "Lambda Partners",
    date: "2024-09-11",
    status: "Closed",
    amount: 3000,
    type: "Subscription",
    category: "Startup",
  },
  {
    id: 12,
    name: "Mu Enterprises",
    date: "2024-09-12",
    status: "Active",
    amount: 12500,
    type: "Enterprise",
    category: "Enterprise",
  },
  {
    id: 13,
    name: "Nu Systems",
    date: "2024-09-13",
    status: "Pending",
    amount: 4100,
    type: "One-time",
    category: "SMB",
  },
  {
    id: 14,
    name: "Xi Dynamics",
    date: "2024-09-14",
    status: "Active",
    amount: 8600,
    type: "Subscription",
    category: "SMB",
  },
  {
    id: 15,
    name: "Omicron Tech",
    date: "2024-09-15",
    status: "Closed",
    amount: 2300,
    type: "One-time",
    category: "Startup",
  },
  {
    id: 16,
    name: "Pi Networks",
    date: "2024-09-16",
    status: "Pending",
    amount: 19500,
    type: "Enterprise",
    category: "Enterprise",
  },
  {
    id: 17,
    name: "Rho Innovations",
    date: "2024-09-17",
    status: "Active",
    amount: 7800,
    type: "Subscription",
    category: "SMB",
  },
  {
    id: 18,
    name: "Sigma Labs",
    date: "2024-09-18",
    status: "Active",
    amount: 1500,
    type: "One-time",
    category: "Startup",
  },
  {
    id: 19,
    name: "Tau Analytics",
    date: "2024-09-19",
    status: "Pending",
    amount: 6400,
    type: "Subscription",
    category: "SMB",
  },
  {
    id: 20,
    name: "Upsilon Media",
    date: "2024-09-20",
    status: "Closed",
    amount: 4200,
    type: "One-time",
    category: "Startup",
  },
  // ...(rest unchanged)
];

module.exports = {
  summaryMetrics,
  salesByMonth,
  monthlyComparisons,
  categories,
  statuses,
  tableData,
};
