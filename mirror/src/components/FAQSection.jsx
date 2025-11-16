import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FAQSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { ChevronDown } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
const faqs = [{
  question: "O que é consórcio?",
  answer: "Consórcio é um sistema de autofinanciamento que reúne pessoas com o mesmo objetivo de adquirir bens ou serviços. Os participantes pagam parcelas mensais e são contemplados por sorteio ou lance."
}, {
  question: "Como funciona a contemplação?",
  answer: "A contemplação pode ocorrer de duas formas: por sorteio mensal ou por lance. No sorteio, todos têm a mesma chance. No lance, o participante oferece um valor adicional para ser contemplado."
}, {
  question: "Quais são as taxas cobradas?",
  answer: "Cobramos apenas a taxa de administração, que varia conforme o tipo de consórcio. Não há juros, tornando o consórcio mais econômico que financiamentos tradicionais."
}, {
  question: "Posso usar o FGTS?",
  answer: "Sim! Para consórcios de imóveis, é possível utilizar o FGTS para dar lance ou amortizar parcelas, seguindo as regras da Caixa Econômica Federal."
}, {
  question: "O que acontece se eu não puder pagar uma parcela?",
  answer: "Oferecemos flexibilidade para renegociação. Entre em contato com nossa equipe para encontrarmos a melhor solução para seu caso."
}, {
  question: "Quanto tempo leva para ser contemplado?",
  answer: "O prazo varia conforme o grupo e a modalidade. Você pode ser contemplado logo no primeiro mês ou ao longo do plano. Dar lances aumenta suas chances de contemplação antecipada."
}];
const FAQSection = () => {
  _s();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-4xl font-bold text-[#24352f] mb-4", "data-edit-id": "src/components/FAQSection.jsx:44:11", children: "Perguntas Frequentes" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", "data-edit-id": "src/components/FAQSection.jsx:47:11", children: "Tire suas dúvidas sobre consórcio" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: index * 0.05
    }, className: "border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300", children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: () => toggleFAQ(index), className: "w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#658f4c] focus:ring-inset", "aria-expanded": openIndex === index, "data-edit-disabled": "true", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[#24352f] pr-4", "data-edit-disabled": "true", children: faq.question }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV(ChevronDown, { className: `text-[#658f4c] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`, size: 24 }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
        lineNumber: 71,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsxDEV(motion.div, { initial: {
        height: 0,
        opacity: 0
      }, animate: {
        height: "auto",
        opacity: 1
      }, exit: {
        height: 0,
        opacity: 0
      }, transition: {
        duration: 0.3
      }, className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "px-6 py-4 bg-gray-50 text-gray-700", children: faq.answer }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
        lineNumber: 89,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
        lineNumber: 77,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
        lineNumber: 76,
        columnNumber: 15
      }, this)
    ] }, index, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
      lineNumber: 59,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(FAQSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQSection;
export default FAQSection;
var _c;
$RefreshReg$(_c, "FAQSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/FAQSection.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQSxXQXlDQTtBQUFBLE9BbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvREEsS0FyREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXNEQTtBQUVKO0FBQUNKLEdBaEVLRCxZQUFVO0FBQUFjLEtBQVZkO0FBa0VOLGVBQWVBO0FBQVUsSUFBQWM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJDaGV2cm9uRG93biIsImZhcXMiLCJxdWVzdGlvbiIsImFuc3dlciIsIkZBUVNlY3Rpb24iLCJfcyIsIm9wZW5JbmRleCIsInNldE9wZW5JbmRleCIsInRvZ2dsZUZBUSIsImluZGV4IiwibWFwIiwiZmFxIiwib3BhY2l0eSIsInkiLCJvbmNlIiwiZHVyYXRpb24iLCJkZWxheSIsImhlaWdodCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvRkFRU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBmYXFzID0gW1xuICB7XG4gICAgcXVlc3Rpb246ICdPIHF1ZSDDqSBjb25zw7NyY2lvPycsXG4gICAgYW5zd2VyOiAnQ29uc8OzcmNpbyDDqSB1bSBzaXN0ZW1hIGRlIGF1dG9maW5hbmNpYW1lbnRvIHF1ZSByZcO6bmUgcGVzc29hcyBjb20gbyBtZXNtbyBvYmpldGl2byBkZSBhZHF1aXJpciBiZW5zIG91IHNlcnZpw6dvcy4gT3MgcGFydGljaXBhbnRlcyBwYWdhbSBwYXJjZWxhcyBtZW5zYWlzIGUgc8OjbyBjb250ZW1wbGFkb3MgcG9yIHNvcnRlaW8gb3UgbGFuY2UuJ1xuICB9LFxuICB7XG4gICAgcXVlc3Rpb246ICdDb21vIGZ1bmNpb25hIGEgY29udGVtcGxhw6fDo28/JyxcbiAgICBhbnN3ZXI6ICdBIGNvbnRlbXBsYcOnw6NvIHBvZGUgb2NvcnJlciBkZSBkdWFzIGZvcm1hczogcG9yIHNvcnRlaW8gbWVuc2FsIG91IHBvciBsYW5jZS4gTm8gc29ydGVpbywgdG9kb3MgdMOqbSBhIG1lc21hIGNoYW5jZS4gTm8gbGFuY2UsIG8gcGFydGljaXBhbnRlIG9mZXJlY2UgdW0gdmFsb3IgYWRpY2lvbmFsIHBhcmEgc2VyIGNvbnRlbXBsYWRvLidcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiAnUXVhaXMgc8OjbyBhcyB0YXhhcyBjb2JyYWRhcz8nLFxuICAgIGFuc3dlcjogJ0NvYnJhbW9zIGFwZW5hcyBhIHRheGEgZGUgYWRtaW5pc3RyYcOnw6NvLCBxdWUgdmFyaWEgY29uZm9ybWUgbyB0aXBvIGRlIGNvbnPDs3JjaW8uIE7Do28gaMOhIGp1cm9zLCB0b3JuYW5kbyBvIGNvbnPDs3JjaW8gbWFpcyBlY29uw7RtaWNvIHF1ZSBmaW5hbmNpYW1lbnRvcyB0cmFkaWNpb25haXMuJ1xuICB9LFxuICB7XG4gICAgcXVlc3Rpb246ICdQb3NzbyB1c2FyIG8gRkdUUz8nLFxuICAgIGFuc3dlcjogJ1NpbSEgUGFyYSBjb25zw7NyY2lvcyBkZSBpbcOzdmVpcywgw6kgcG9zc8OtdmVsIHV0aWxpemFyIG8gRkdUUyBwYXJhIGRhciBsYW5jZSBvdSBhbW9ydGl6YXIgcGFyY2VsYXMsIHNlZ3VpbmRvIGFzIHJlZ3JhcyBkYSBDYWl4YSBFY29uw7RtaWNhIEZlZGVyYWwuJ1xuICB9LFxuICB7XG4gICAgcXVlc3Rpb246ICdPIHF1ZSBhY29udGVjZSBzZSBldSBuw6NvIHB1ZGVyIHBhZ2FyIHVtYSBwYXJjZWxhPycsXG4gICAgYW5zd2VyOiAnT2ZlcmVjZW1vcyBmbGV4aWJpbGlkYWRlIHBhcmEgcmVuZWdvY2lhw6fDo28uIEVudHJlIGVtIGNvbnRhdG8gY29tIG5vc3NhIGVxdWlwZSBwYXJhIGVuY29udHJhcm1vcyBhIG1lbGhvciBzb2x1w6fDo28gcGFyYSBzZXUgY2Fzby4nXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogJ1F1YW50byB0ZW1wbyBsZXZhIHBhcmEgc2VyIGNvbnRlbXBsYWRvPycsXG4gICAgYW5zd2VyOiAnTyBwcmF6byB2YXJpYSBjb25mb3JtZSBvIGdydXBvIGUgYSBtb2RhbGlkYWRlLiBWb2PDqiBwb2RlIHNlciBjb250ZW1wbGFkbyBsb2dvIG5vIHByaW1laXJvIG3DqnMgb3UgYW8gbG9uZ28gZG8gcGxhbm8uIERhciBsYW5jZXMgYXVtZW50YSBzdWFzIGNoYW5jZXMgZGUgY29udGVtcGxhw6fDo28gYW50ZWNpcGFkYS4nXG4gIH1cbl07XG5cbmNvbnN0IEZBUVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuSW5kZXgsIHNldE9wZW5JbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB0b2dnbGVGQVEgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRPcGVuSW5kZXgob3BlbkluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtWyMyNDM1MmZdIG1iLTRcIj5cbiAgICAgICAgICAgIFBlcmd1bnRhcyBGcmVxdWVudGVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIFRpcmUgc3VhcyBkw7p2aWRhcyBzb2JyZSBjb25zw7NyY2lvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHNwYWNlLXktNFwiPlxuICAgICAgICAgIHtmYXFzLm1hcCgoZmFxLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogaW5kZXggKiAwLjA1IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVGQVEoaW5kZXgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC02IHB5LTQgdGV4dC1sZWZ0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyM2NThmNGNdIGZvY3VzOnJpbmctaW5zZXRcIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW5JbmRleCA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMyNDM1MmZdIHByLTRcIj57ZmFxLnF1ZXN0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWyM2NThmNGNdIGZsZXgtc2hyaW5rLTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5JbmRleCA9PT0gaW5kZXggPyAncm90YXRlLTE4MCcgOiAnJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAge29wZW5JbmRleCA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBoZWlnaHQ6ICdhdXRvJywgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgICAgICBleGl0PXt7IGhlaWdodDogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYmctZ3JheS01MCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2ZhcS5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZBUVNlY3Rpb247XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0ZBUVNlY3Rpb24uanN4In0=