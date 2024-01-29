/**
 * @author wangkechun [hi@hi-hi.cn]
 * @copyright Crown Copyright 2024
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import OperationError from "../errors/OperationError.mjs";

/**
 * JSON To Go Struct operation
 */
class JSONToGoStruct extends Operation {

    /**
     * JSONToGoStruct constructor
     */
    constructor() {
        super();

        this.name = "JSON To Go Struct";
        this.module = "Default";
        this.description = "converts JSON into a Go type definition.";
        this.infoURL = "https://mholt.github.io/json-to-go/";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            /* Example arguments. See the project wiki for full details.
            {
                name: "First arg",
                type: "string",
                value: "Don't Panic"
            },
            {
                name: "Second arg",
                type: "number",
                value: 42
            }
            */
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        // const [firstArg, secondArg] = args;

        throw new OperationError("Test");
    }

    /**
     * Highlight JSON To Go Struct
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos;
    }

    /**
     * Highlight JSON To Go Struct in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos;
    }

}

export default JSONToGoStruct;
