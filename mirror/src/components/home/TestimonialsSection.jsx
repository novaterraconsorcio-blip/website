import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/home/TestimonialsSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Star, Quote } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
const testimonials = [{
  name: "Maria Silva",
  role: "Contemplada em 2024",
  content: "Realizei o sonho da casa própria através do consórcio Nova Terra. Atendimento excepcional e processo transparente!",
  rating: 5,
  image: "Professional woman smiling confidently"
}, {
  name: "João Santos",
  role: "Contemplado em 2023",
  content: "Comprei meu carro novo sem comprometer meu orçamento. A melhor decisão que tomei!",
  rating: 5,
  image: "Happy man with car keys"
}, {
  name: "Ana Costa",
  role: "Contemplada em 2024",
  content: "Equipe profissional e atenciosa. Consegui reformar minha casa com parcelas que cabem no bolso.",
  rating: 5,
  image: "Woman in front of renovated house"
}];
const TestimonialsSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-4xl font-bold text-[#24352f] mb-4", "data-edit-id": "src/components/home/TestimonialsSection.jsx:35:11", children: "O Que Nossos Clientes Dizem" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", "data-edit-id": "src/components/home/TestimonialsSection.jsx:38:11", children: "Histórias reais de pessoas que realizaram seus sonhos" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
      opacity: 0,
      y: 50
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: index * 0.1
    }, className: "bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative", children: [
      /* @__PURE__ */ jsxDEV(Quote, { className: "absolute top-4 right-4 text-[#658f4c] opacity-20", size: 40 }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-4", children: [
        /* @__PURE__ */ jsxDEV("img", { alt: `Foto de ${testimonial.name}`, className: "w-16 h-16 rounded-full object-cover mr-4", src: "https://images.unsplash.com/photo-1595872018818-97555653a011", "data-edit-id": "src/components/home/TestimonialsSection.jsx:56:17" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[#24352f] block", "data-edit-disabled": "true", children: testimonial.name }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
            lineNumber: 72,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-600", "data-edit-disabled": "true", children: testimonial.role }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
            lineNumber: 73,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 69,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex mb-3", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { size: 16, className: "fill-[#658f4c] text-[#658f4c]" }, i, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 78,
        columnNumber: 63
      }, this)) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-700 italic", "data-edit-disabled": "true", children: [
        '"',
        testimonial.content,
        '"'
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
        lineNumber: 81,
        columnNumber: 15
      }, this)
    ] }, index, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
      lineNumber: 55,
      columnNumber: 53
    }, this)) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_c = TestimonialsSection;
export default TestimonialsSection;
var _c;
$RefreshReg$(_c, "TestimonialsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/TestimonialsSection.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkNBLEtBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2Q0E7QUFFSjtBQUFDUyxLQWpES1o7QUFtRE4sZUFBZUE7QUFBbUIsSUFBQVk7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiU3RhciIsIlF1b3RlIiwidGVzdGltb25pYWxzIiwibmFtZSIsInJvbGUiLCJjb250ZW50IiwicmF0aW5nIiwiaW1hZ2UiLCJUZXN0aW1vbmlhbHNTZWN0aW9uIiwibWFwIiwidGVzdGltb25pYWwiLCJpbmRleCIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsImR1cmF0aW9uIiwiZGVsYXkiLCJBcnJheSIsIl8iLCJpIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9ob21lL1Rlc3RpbW9uaWFsc1NlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgU3RhciwgUXVvdGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnTWFyaWEgU2lsdmEnLFxuICAgIHJvbGU6ICdDb250ZW1wbGFkYSBlbSAyMDI0JyxcbiAgICBjb250ZW50OiAnUmVhbGl6ZWkgbyBzb25obyBkYSBjYXNhIHByw7NwcmlhIGF0cmF2w6lzIGRvIGNvbnPDs3JjaW8gTm92YSBUZXJyYS4gQXRlbmRpbWVudG8gZXhjZXBjaW9uYWwgZSBwcm9jZXNzbyB0cmFuc3BhcmVudGUhJyxcbiAgICByYXRpbmc6IDUsXG4gICAgaW1hZ2U6ICdQcm9mZXNzaW9uYWwgd29tYW4gc21pbGluZyBjb25maWRlbnRseSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdKb8OjbyBTYW50b3MnLFxuICAgIHJvbGU6ICdDb250ZW1wbGFkbyBlbSAyMDIzJyxcbiAgICBjb250ZW50OiAnQ29tcHJlaSBtZXUgY2Fycm8gbm92byBzZW0gY29tcHJvbWV0ZXIgbWV1IG9yw6dhbWVudG8uIEEgbWVsaG9yIGRlY2lzw6NvIHF1ZSB0b21laSEnLFxuICAgIHJhdGluZzogNSxcbiAgICBpbWFnZTogJ0hhcHB5IG1hbiB3aXRoIGNhciBrZXlzJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0FuYSBDb3N0YScsXG4gICAgcm9sZTogJ0NvbnRlbXBsYWRhIGVtIDIwMjQnLFxuICAgIGNvbnRlbnQ6ICdFcXVpcGUgcHJvZmlzc2lvbmFsIGUgYXRlbmNpb3NhLiBDb25zZWd1aSByZWZvcm1hciBtaW5oYSBjYXNhIGNvbSBwYXJjZWxhcyBxdWUgY2FiZW0gbm8gYm9sc28uJyxcbiAgICByYXRpbmc6IDUsXG4gICAgaW1hZ2U6ICdXb21hbiBpbiBmcm9udCBvZiByZW5vdmF0ZWQgaG91c2UnXG4gIH1cbl07XG5cbmNvbnN0IFRlc3RpbW9uaWFsc1NlY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LVsjMjQzNTJmXSBtYi00XCI+XG4gICAgICAgICAgICBPIFF1ZSBOb3Nzb3MgQ2xpZW50ZXMgRGl6ZW1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTYwMCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgSGlzdMOzcmlhcyByZWFpcyBkZSBwZXNzb2FzIHF1ZSByZWFsaXphcmFtIHNldXMgc29uaG9zXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQteGwgcC02IHNoYWRvdy1tZCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHJlbGF0aXZlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFF1b3RlIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgdGV4dC1bIzY1OGY0Y10gb3BhY2l0eS0yMFwiIHNpemU9ezQwfSAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgIGFsdD17YEZvdG8gZGUgJHt0ZXN0aW1vbmlhbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBtci00XCJcbiAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTU4NzIwMTg4MTgtOTc1NTU2NTNhMDExXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMjQzNTJmXSBibG9ja1wiPnt0ZXN0aW1vbmlhbC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPnt0ZXN0aW1vbmlhbC5yb2xlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTNcIj5cbiAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHRlc3RpbW9uaWFsLnJhdGluZyldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFN0YXIga2V5PXtpfSBzaXplPXsxNn0gY2xhc3NOYW1lPVwiZmlsbC1bIzY1OGY0Y10gdGV4dC1bIzY1OGY0Y11cIiAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGl0YWxpY1wiPlwie3Rlc3RpbW9uaWFsLmNvbnRlbnR9XCI8L3A+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzU2VjdGlvbjtcbiJdLCJmaWxlIjoiL2hvbWUvdTM1NDU1MzUyOS93ZWJzaXRlcy9wUE5hVVoxUVkvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvaG9tZS9UZXN0aW1vbmlhbHNTZWN0aW9uLmpzeCJ9