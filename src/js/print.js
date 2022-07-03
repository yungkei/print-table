import Template from './template';
import { v4 as uuidv4 } from 'uuid';

const Print = {
    print: (template, data, paper) => {
        const preparePrinthtml = Template.load(template, data, paper);
        const orderTagId = createOrderTag();
        const orderTag = getOrderTag(orderTagId);

        var orderTagDocument = orderTag.contentWindow.document;
        orderTagDocument.write(preparePrinthtml);
        orderTagDocument.close();

        const styles = document.head.getElementsByClassName("yk-print-style") || [];
        for (const style of styles) {
            orderTag.contentDocument.head.appendChild(style);
        }

        orderTag.contentWindow.focus();
        orderTag.contentWindow.print();

        removeOrderTag(orderTagId);
    }
}

function getOrderTag(elementId) {
    return document.getElementById(elementId);
}

function createOrderTag() {
    var orderTag = document.createElement("iframe");
    orderTag.id = "print-table-" + uuidv4();
    orderTag.style.display = "none";
    orderTag.style.alignItems = "center";
    document.body.appendChild(orderTag);
    return orderTag.id;
}

function removeOrderTag(elementId) {
    const element = getOrderTag(elementId);
    element.parentNode.removeChild(element);
}

export default Print