import { ExtensionModel, ChatGPTModel } from "./Contracts/ExtensionModel.js";
import ko from "knockout";
import KSB from 'knockout-secure-binding';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
ko.bindingHandlers['safeMarkdown'] = {
    update(element, valueAccessor) {
        const value = ko.unwrap(valueAccessor());
        if (!value) {
            element.innerHTML = '';
            return;
        }
        const rawHtml = marked.parse(value, { async: false });
        element.innerHTML = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
    }
};
function initialization() {
    ko.bindingProvider.instance = new KSB({ attribute: 'data-bind' });
    ko.applyBindings(new ExtensionModel(ko.observable(), ko.observable(), ko.observable(), ko.observable(), ko.observable(), ko.observable(), ko.observable(), ko.observable(), ko.observable(ChatGPTModel["GPT-4o mini"])));
}
document.addEventListener("DOMContentLoaded", initialization);
