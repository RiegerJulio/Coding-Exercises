"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('SELECT * FROM users');
            const [rows] = result;
            return rows;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, password } = user;
            const result = yield this.connection.execute('INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)', [id, name, email, password]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, user);
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, password } = user;
            yield this.connection.execute('UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
            // const [dataUpdated] = result;
            // const { affectedRows } = dataUpdated;
            return Object.assign({}, user);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('DELETE FROM user WHERE id = ?', [id]);
            return { id, name: '', email: '', password: '' };
        });
    }
}
exports.default = UserModel;
