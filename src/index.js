import Print from "./js/print";
import './css/index.css';

const printTable = Print.print;

if (typeof window !== 'undefined') {
    window.printTable = printTable
}

export default printTable