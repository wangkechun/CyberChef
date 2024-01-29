/**
 * JSON to Go Struct tests.
 *
 * @author wangkechun [hi@hi-hi.cn]
 *
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "JSON to Go Struct: simple",
        input: JSON.stringify({ a: "1", b: "2", c: "3" }),
        expectedOutput: `type AutoGenerated struct {
    A string \`json:"a"\`
    B string \`json:"b"\`
    C string \`json:"c"\`
}`.replaceAll("    ", "\t"),
        recipeConfig: [
            {
                op: "JSON to Go Struct",
                args: ["AutoGenerated", false, false],
            },
        ],
    },
]);
