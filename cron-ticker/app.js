const cron = require("node-cron");
const { tick } = require("./tasks/tick");


cron.schedule("1-50/5 * * * * *", tick);
