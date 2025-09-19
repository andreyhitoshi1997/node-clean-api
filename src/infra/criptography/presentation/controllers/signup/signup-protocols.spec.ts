describe("Signup Protocols", () => {
  test("Should import all signup protocols without errors", () => {
    expect(() => {
      require("./signup-protocols");
    }).not.toThrow();
  });

  test("Should export all necessary interfaces", () => {
    const protocols = require("./signup-protocols");
    expect(typeof protocols).toBe("object");
  });
});

