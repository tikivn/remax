import node from '../node';

describe('node', () => {
  it('meta', () => {
    const meta = node().meta!;

    expect(meta.ejs).toBeDefined();
    expect(meta.staticEjs).toBeDefined();
    expect(meta.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".txml",
        "src": "src",
        "tag": "import",
      }
    `);
    expect(meta.style).toMatchInlineSnapshot(`".tcss"`);
    expect(meta.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".sjs",
        "src": "from",
        "tag": "import-sjs",
      }
    `);
  });
});
