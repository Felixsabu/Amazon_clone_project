import { getProductsreducers } from "./productsreducers";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    getproductsdata:getProductsreducers
});

export default rootreducer;