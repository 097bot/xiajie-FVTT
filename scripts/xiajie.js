
/*===========侠界修改内容===========*/
Hooks.on("renderActorSheet", (app, html, data) => {
  console.log("✅ 渲染角色卡：", app.actor?.name);

  html.find(".custom-system-meter-fill").each((_, el) => {
    const widthStr = el.style.width || "";
    const widthValue = parseFloat(widthStr); // 解析百分比数字

    // 控制台打印测试
    console.log("🎯 宽度：", widthStr, "→", widthValue);

    if (widthValue <=20) {
      el.classList.add("low-bar");
    } else {
      el.classList.remove("low-bar");
    }
  });
});
