"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthController {
    handlerHealthCheck(req, res) {
        return res.json({
            status: 'health',
        });
    }
}
exports.default = HealthController;
