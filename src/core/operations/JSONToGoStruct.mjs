/**
 * @author wangkechun [hi@hi-hi.cn]
 * @copyright Crown Copyright 2024
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import { jsonToGo } from "../lib/JSONToGoStruct.mjs";
import JSON5 from "json5";
import OperationError from "../errors/OperationError.mjs";

/**
 * JSON to Go Struct operation
 */
class JSONToGoStruct extends Operation {
    /**
     * JSONToGoStruct constructor
     */
    constructor() {
        super();

        this.name = "JSON to Go Struct";
        this.module = "Default";
        this.description = "converts JSON into a Go type definition.";
        this.infoURL = "https://mholt.github.io/json-to-go/";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                name: "Type Name",
                type: "string",
                value: "AutoGenerated",
            },
            {
                name: "Flatten",
                type: "boolean",
                value: false,
            },
            {
                name: "All Omit Empty",
                type: "boolean",
                value: false,
            },
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [typename, flatten, allOmitempty] = args;
        if (!input) return "";
        let code;
        try {
            code = JSON.stringify(JSON5.parse(input));
        } catch (err) {
            throw new OperationError("Unable to parse input as JSON.\n" + err);
        }
        const result = jsonToGo(code, typename, flatten, false, allOmitempty);
        return result["go"];
    }
}

export default JSONToGoStruct;
