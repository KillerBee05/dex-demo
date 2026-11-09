// Usage: node tip.js <bill> <percent>
function tip(bill, percent) {
  const amount = Math.round(bill * percent) / 100;
  return { tip: amount, total: Math.round((bill + amount) * 100) / 100 };
}

if (require.main === module) {
  const [bill, percent] = process.argv.slice(2).map(Number);
  if (!(bill > 0) || !(percent >= 0)) {
    console.error('Usage: node tip.js <bill> <percent>');
    process.exit(1);
  }
  const { tip: t, total } = tip(bill, percent);
  console.log(`Tip: $${t.toFixed(2)}  Total: $${total.toFixed(2)}`);
}

module.exports = { tip };
