import artTemplate from "art-template/lib/template-web.js"
import basicTpl from '../template/basic-table.art';
import advanceTpl from '../template/advance-table.art';

const DEFAULT_TEMPLATE = "basic"
const DEFAULT_DATA = {
    columns: [],
    datasource: [],
}
const DEFAULT_PAPER = "a4";

const Template = {
    load: (template = DEFAULT_TEMPLATE, data = DEFAULT_DATA, paper = "a4") => {
        const tpl = getLibTpl(template);
        var rHtml = "";
        try {
            rHtml = artTemplate.render(tpl, data);
        } catch (error) {
            console.error("ERROR|LODD_DATA_ERROR:" + error);
        }
        return rHtml;
    },
}

function getLibTpl(name) {
    switch (name) {
        case 'basic':
            return basicTpl;
        case 'advance':
            return advanceTpl;
        default:
            return basicTpl;
    }
}

export default Template