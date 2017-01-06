System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "systemjs": "node_modules/systemjs/dist/system.js",
    "traceur": "node_modules/traceur/bin/traceur.js",
    "github:*": "/github/*"
  },

  map: {
    "gtmsportswear/js-utilities": "github:gtmsportswear/js-utilities@1.0.0"
  }
});
