describe("Protocols Index", () => {
  test("Should import all protocols without errors", () => {
    expect(() => {
      require("./index");
    }).not.toThrow();
  });

  test("Should export controller and http protocols", () => {
    const protocols = require("./index");
    expect(typeof protocols).toBe("object");
  });
});

