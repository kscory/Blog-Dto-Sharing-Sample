// nestia configuration file
import type sdk from "@nestia/sdk";
    
const NESTIA_CONFIG: sdk.INestiaConfig = {
    input: "src/controllers",
    output: "src/sdk/api",
    swagger: {
        output: "src/swagger.json",
    },
    primitive: false,
};
export default NESTIA_CONFIG;