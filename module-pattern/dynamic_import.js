import("module").then(module => {
    module.default();
    module.namedExport();
});

(async () => {
    const module = await import("module");
    module.default();
    module.namedExport();
})();

// with dynamic import we can import modules whenever user needs
// for example we can provide user modules if only user clicks a button