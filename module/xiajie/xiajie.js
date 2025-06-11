Hooks.on("renderActorSheet", (app, html, data) => {
  const hpWrapper = html[0].querySelector(".hp_jiliangqi");
  const meter = hpWrapper?.querySelector(".custom-system-meter");
  if (!meter) return;

  // 从组件属性中读取 value 和 max
  const value = parseFloat(meter.dataset.value);
  const max = parseFloat(meter.dataset.max);
  const low = parseFloat(meter.dataset.low); // 如果你设置了 low 值，也可以直接从这里拿

  if (!isNaN(value) && !isNaN(max) && max > 0) {
    const percent = value / max;

    // 你可以自定义低血量阈值，比如低于 0.25 就变黄
    const isLow = percent < 0.25;

    // 添加或移除 low-hp 类
    hpWrapper.classList.toggle("low-hp", isLow);
  }
});