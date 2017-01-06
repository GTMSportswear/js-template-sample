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
    "gtmsportswear/js-local-storage-manager": "github:gtmsportswear/js-local-storage-manager@1.0.2",
    "gtmsportswear/js-utilities": "github:gtmsportswear/js-utilities@1.0.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93"
  }
});
