"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().optional(),
});
function createEnv(env) {
    const validationResult = envSchema.safeParse(env);
    if (!validationResult.success)
        throw new Error(validationResult.error.message);
    return validationResult.data;
}
exports.env = createEnv(process.env);
