import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/home/CTASection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=f31a5e49";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
import { Calculator, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
const CTASection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gradient-to-r from-[#658f4c] to-[#346d47] text-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.6
  }, className: "text-center max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-4xl font-bold mb-6", "data-edit-id": "src/components/home/CTASection.jsx:19:11", children: "Pronto Para Realizar Seus Sonhos?" }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-xl mb-8 text-white/90", "data-edit-id": "src/components/home/CTASection.jsx:22:11", children: "Faça uma simulação gratuita e descubra como o consórcio pode transformar seus planos em realidade." }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-white text-[#658f4c] hover:bg-gray-100 transition-all duration-300", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Link, { to: "/simulacao", children: [
        /* @__PURE__ */ jsxDEV(Calculator, { className: "mr-2", size: 20 }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        "Fazer Simulação"
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
        lineNumber: 47,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-[#658f4c] transition-all duration-300", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contato", children: [
        /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2", size: 20 }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        "Falar com Especialista"
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = CTASection;
export default CTASection;
var _c;
$RefreshReg$(_c, "CTASection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/CTASection.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JVOzs7Ozs7Ozs7Ozs7Ozs7O0FBakJWLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsWUFBWUMsYUFBYTtBQUVsQyxNQUFNQyxhQUFhQSxNQUFNO0FBQ3ZCLFNBQ0UsdUJBQUMsYUFBUSxXQUFVLGlFQUNqQixpQ0FBQyxTQUFJLFdBQVUsMEJBQ2IsaUNBQUMsT0FBTyxLQUFQLEVBQ0MsU0FBUztBQUFBLElBQUVDLFNBQVM7QUFBQSxJQUFHQyxHQUFHO0FBQUEsRUFBRyxHQUM3QixhQUFhO0FBQUEsSUFBRUQsU0FBUztBQUFBLElBQUdDLEdBQUc7QUFBQSxFQUFFLEdBQ2hDLFVBQVU7QUFBQSxJQUFFQyxNQUFNO0FBQUEsRUFBSyxHQUN2QixZQUFZO0FBQUEsSUFBRUMsVUFBVTtBQUFBLEVBQUksR0FDNUIsV0FBVSxpQ0FFVjtBQUFBLDJCQUFDLFFBQUcsV0FBVSx1Q0FBcUMsNkdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsT0FBRSxXQUFVLDhCQUE0Qiw4S0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsSUFDQSx1QkFBQyxTQUFJLFdBQVUsa0RBQ2I7QUFBQSw2QkFBQyxVQUNDLFNBQU8sTUFDUCxNQUFLLE1BQ0wsV0FBVSx5RUFBdUUsOEJBRWpGLGlDQUFDLFFBQUssSUFBRyxjQUNQO0FBQUEsK0JBQUMsY0FBVyxXQUFVLFFBQU8sTUFBTSxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXNDO0FBQUE7QUFBQSxXQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0EsS0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBU0E7QUFBQSxNQUNBLHVCQUFDLFVBQ0MsU0FBTyxNQUNQLE1BQUssTUFDTCxTQUFRLFdBQ1IsV0FBVSxvR0FBa0csOEJBRTVHLGlDQUFDLFFBQUssSUFBRyxZQUNQO0FBQUEsK0JBQUMsU0FBTSxXQUFVLFFBQU8sTUFBTSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlDO0FBQUE7QUFBQSxXQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0EsS0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVUE7QUFBQSxTQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBc0JBO0FBQUEsT0FuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9DQSxLQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0NBLEtBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3Q0E7QUFFSjtBQUFDQyxLQTVDS0w7QUE4Q04sZUFBZUE7QUFBVSxJQUFBSztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwibW90aW9uIiwiQnV0dG9uIiwiQ2FsY3VsYXRvciIsIlBob25lIiwiQ1RBU2VjdGlvbiIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsImR1cmF0aW9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9ob21lL0NUQVNlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBDYWxjdWxhdG9yLCBQaG9uZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmNvbnN0IENUQVNlY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjNjU4ZjRjXSB0by1bIzM0NmQ0N10gdGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgICAgICBQcm9udG8gUGFyYSBSZWFsaXphciBTZXVzIFNvbmhvcz9cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWItOCB0ZXh0LXdoaXRlLzkwXCI+XG4gICAgICAgICAgICBGYcOnYSB1bWEgc2ltdWxhw6fDo28gZ3JhdHVpdGEgZSBkZXNjdWJyYSBjb21vIG8gY29uc8OzcmNpbyBwb2RlIHRyYW5zZm9ybWFyIHNldXMgcGxhbm9zIGVtIHJlYWxpZGFkZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyM2NThmNGNdIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpbXVsYWNhb1wiPlxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cIm1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgICBGYXplciBTaW11bGHDp8Ojb1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItd2hpdGUgdGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVsjNjU4ZjRjXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YXRvXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cIm1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgICBGYWxhciBjb20gRXNwZWNpYWxpc3RhXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDVEFTZWN0aW9uO1xuIl0sImZpbGUiOiIvaG9tZS91MzU0NTUzNTI5L3dlYnNpdGVzL3BQTmFVWjFRWS9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9ob21lL0NUQVNlY3Rpb24uanN4In0=