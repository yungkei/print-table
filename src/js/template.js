import artTemplate from "art-template/lib/template-web.js"
import basicTpl from '../template/basic-table.art';
import advanceTpl from '../template/advance-table.art';

const DEFAULT_TEMPLATE = "basic"
const DEFAULT_DATA = {
    columns: [],
    datasource: [],
}
const DEFAULT_PAPER = "a4";
// orientation: portrait,landscape
const DEFAULT_ORIENTATION = "portrait";
// Excel Cell 30mm*8mm
const CELL_LENGTH = 30;
const CELL_WIDTH = 8;
//A1 841mm*594mm
const A1_LENGTH = 841 - 25.4 * 2;
const A1_WIDTH = 594 - 31.8 * 2;
//A2 594mm*420mm
const A2_LENGTH = 594 - 25.4 * 2;
const A2_WIDTH = 420 - 31.8 * 2;
//A3 420mm*297mm
const A3_LENGTH = 420 - 25.4 * 2;
const A3_WIDTH = 297 - 31.8 * 2;
//A4 297mm*210mm
const A4_LENGTH = 297 - 25.4 * 2;
const A4_WIDTH = 210 - 31.8 * 2;
//A4 210mm*148mm
const A5_LENGTH = 210 - 25.4 * 2;
const A5_WIDTH = 148 - 31.8 * 2;

const Template = {
    load: (template = DEFAULT_TEMPLATE, data = DEFAULT_DATA, paper = DEFAULT_PAPER, orientation = DEFAULT_ORIENTATION) => {
        const tpl = getLibTpl(template);
        return renderHtml(tpl, data, paper, orientation);
    },
}

function renderHtml(template, data, paper, orientation) {
    const rows = getTotalRowsByPaperType(paper, orientation);
    const columnsRows = getColumnsRows(data);
    if (rows <= columnsRows) {
        console.error("ERROR>>LODD_DATA_ERROR>>COLUMN_ROWS_IS_NOT_EXPECTED");
    }
    const datasourceRowsEachPage = rows - columnsRows;
    const datasourceRows = getDatasourceRows(data);
    let rHtml = "";
    try {
        const { columns = [], datasource = [] } = data;
        for (let index = 0; index < datasourceRows; index += datasourceRowsEachPage) {
            const element = {
                ...data,
                columns,
                datasource: datasource.slice(index, index + datasourceRowsEachPage + 1),
                paper,
                orientation
            };
            rHtml += artTemplate.render(template, element);
        }
    } catch (error) {
        console.error("ERROR>>LODD_DATA_ERROR", error);
    }
    return rHtml;
}

function getPaperLength(paper = "a4") {
    switch (paper) {
        case "a1":
            return A1_LENGTH;
        case "a2":
            return A2_LENGTH;
        case "a3":
            return A3_LENGTH;
        case "a4":
            return A4_LENGTH;
        case "a5":
            return A5_LENGTH;
        default:
            return A4_LENGTH;
    }
}

function getPaperWidth(paper = "a4") {
    switch (paper) {
        case "a1":
            return A1_WIDTH;
        case "a2":
            return A2_WIDTH;
        case "a3":
            return A3_WIDTH;
        case "a4":
            return A4_WIDTH;
        case "a5":
            return A5_WIDTH;
        default:
            return A4_WIDTH;
    }
}

function getColumnsRows(data) {
    const { columns = [] } = data;
    return columns.length;
}

function getDatasourceRows(data) {
    const { datasource = [] } = data;
    return datasource.length;
}

function getTotalRowsByPaperType(paper, orientation) {
    const paperLength = getPaperLength(paper);
    const paperWidth = getPaperWidth(paper);
    return orientation === DEFAULT_ORIENTATION ? Math.floor(paperLength / CELL_WIDTH) : Math.floor(paperWidth / CELL_WIDTH);
}

function getLibTpl(name) {
    switch (name) {
        case 'basic':
            return basicTpl;
        // case 'advance':
        //     return advanceTpl;
        default:
            return basicTpl;
    }
}

export default Template