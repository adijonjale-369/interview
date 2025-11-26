const fs = require('fs');
const path = require('path');

const categories = ['Electronics','Apparel','Groceries','Toys','Books'];
const statuses = ['Active','Inactive','Pending'];
const users = ['alice','bob','charlie','dave','eve'];

const data = [];
const startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 1);

for (let i = 1; i <= 200; i++) {
  const date = new Date(startDate.getTime() + Math.random() * (Date.now() - startDate.getTime()));
  data.push({
    id: i,
    title: `Order #${1000 + i}`,
    description: `Sample description for item ${i}`,
    username: users[Math.floor(Math.random()*users.length)],
    category: categories[Math.floor(Math.random()*categories.length)],
    status: statuses[Math.floor(Math.random()*statuses.length)],
    date: date.toISOString(),
    sales: Math.floor(Math.random() * 1000),
    revenue: Number((Math.random() * 10000).toFixed(2))
  });
}

const outDir = path.join(__dirname, 'data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(path.join(outDir,'items.json'), JSON.stringify(data, null, 2));
console.log('Generated data/items.json');
