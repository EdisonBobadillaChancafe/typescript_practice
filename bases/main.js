var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("get-pokemon", ["require", "exports", "../node_modules/axios/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1 = __importDefault(index_1);
    console.log('Hola mundito');
    const pokemon = () => __awaiter(void 0, void 0, void 0, function* () {
        const resp = index_1.default.get(`https://pokeapi.co/api/v2/pokemon/${1}`);
        console.log(resp);
        return resp;
    });
    pokemon().then((r) => { console.log(r); });
});
//# sourceMappingURL=main.js.map