import { AdviceType, ExtensionModel, GeminiModel } from "./Contracts/ExtensionModel.js";
import ko from "knockout"
import KSB from 'knockout-secure-binding';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

ko.bindingHandlers['safeMarkdown'] = {
  update(element: HTMLElement, valueAccessor: () => KnockoutObservable<string | undefined>) {
    const value = ko.unwrap(valueAccessor())
    if (!value) {
      element.innerHTML = ''
      return
    }
    const rawHtml = marked.parse(value, { async: false }) as string
    element.innerHTML = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } })
  }
}

function initialization (this: Document) {
  ko.bindingProvider.instance = new KSB({ attribute: 'data-bind' });

  ko.applyBindings(new ExtensionModel(
    ko.observable<string | undefined>(),
    ko.observable<string | undefined>(),
    ko.observable<typeof AdviceType[keyof typeof AdviceType] | undefined>(),
    ko.observable<boolean | undefined>(),
    ko.observable<string | undefined>(),
    ko.observable<string | undefined>(),
    ko.observable<string | undefined>(),
    ko.observable<string | undefined>(),
    ko.observable<typeof GeminiModel[keyof typeof GeminiModel]>(GeminiModel["Flash 2.0 (free)"])
  ))

}

document.addEventListener("DOMContentLoaded", initialization)