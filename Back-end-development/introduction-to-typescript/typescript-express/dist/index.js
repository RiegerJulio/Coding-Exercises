"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Hello World!');
});
app.use('/user', userRoutes_1.default);
app.use((err, req, res, next) => {
    const { name, message, details } = err;
    switch (name) {
        case 'ValidationError':
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: details.message });
            break;
        case 'NotFoundError':
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message });
            break;
        case 'ConflictError':
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message });
            break;
        default:
            res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
    }
    next();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
