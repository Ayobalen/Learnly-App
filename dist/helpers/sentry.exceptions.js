"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryException = void 0;
class SentryException extends Error {
    constructor(err, message, name) {
        super(message);
        this.err = err;
        this.name = 'SentryException';
        this.name = name || this.name;
    }
}
exports.SentryException = SentryException;
//# sourceMappingURL=sentry.exceptions.js.map