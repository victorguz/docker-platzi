let times = 0;
const tick = () => {
  times++;
  console.log("running a task every second", new Date().getSeconds());
  return times;
};

module.exports = {
  tick,
};
