const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const generate = require("@babel/generator");

const code = "const n = 1";

// parse the code -> ast
const ast = parser.parse(code);

// transform the ast
traverse.default(ast, {
  enter(path) {
    // in this example change all the variable `n` to `x`
    console.log("[[[[ENTRY POINT]]]]<enter> fire");
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
});

// generate code <- ast
const output = generate.default(ast, code);
console.log(output.code); // 'const x = 1;'
