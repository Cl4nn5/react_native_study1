function log4app(msg, type = 1) {
  const types = ["none", "default", "warning", "FATAL"];
  const colors = ["white", "green", "#FF7F00", "red"];

  console.log(`%c${types[type]}: ${msg}`, `font-size:${colors}`);
  // console.log(`%c${types[type]}: ${msg}`, "font-size:green;");
}

export default log4app;
