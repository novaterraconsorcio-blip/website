import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/WhatsAppButton.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/WhatsAppButton.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { MessageCircle } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5511999999999", "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsxDEV(motion.button, { initial: {
    scale: 0
  }, animate: {
    scale: 1
  }, transition: {
    delay: 1,
    type: "spring",
    stiffness: 260,
    damping: 20
  }, onClick: handleClick, className: "fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2", "aria-label": "Fale conosco no WhatsApp", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(MessageCircle, { size: 28, className: "text-white" }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/WhatsAppButton.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/WhatsAppButton.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = WhatsAppButton;
export default WhatsAppButton;
var _c;
$RefreshReg$(_c, "WhatsAppButton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/WhatsAppButton.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/WhatsAppButton.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJNOzs7Ozs7Ozs7Ozs7Ozs7O0FBbEJOLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLGNBQWM7QUFFdkIsTUFBTUMsaUJBQWlCQSxNQUFNO0FBQzNCLFFBQU1DLGNBQWNBLE1BQU07QUFDeEJDLFdBQU9DLEtBQUssK0JBQStCLFVBQVUscUJBQXFCO0FBQUEsRUFDNUU7QUFFQSxTQUNFLHVCQUFDLE9BQU8sUUFBUCxFQUNDLFNBQVM7QUFBQSxJQUFFQyxPQUFPO0FBQUEsRUFBRSxHQUNwQixTQUFTO0FBQUEsSUFBRUEsT0FBTztBQUFBLEVBQUUsR0FDcEIsWUFBWTtBQUFBLElBQUVDLE9BQU87QUFBQSxJQUFHQyxNQUFNO0FBQUEsSUFBVUMsV0FBVztBQUFBLElBQUtDLFNBQVM7QUFBQSxFQUFHLEdBQ3BFLFNBQVNQLGFBQ1QsV0FBVSxzUEFDVixjQUFXLDRCQUEwQiw4QkFFckMsaUNBQUMsaUJBQWMsTUFBTSxJQUFJLFdBQVUsZ0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0MsS0FSakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBO0FBRUo7QUFBQ1EsS0FqQktUO0FBbUJOLGVBQWVBO0FBQWMsSUFBQVM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiTWVzc2FnZUNpcmNsZSIsIm1vdGlvbiIsIldoYXRzQXBwQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJvcGVuIiwic2NhbGUiLCJkZWxheSIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9XaGF0c0FwcEJ1dHRvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgV2hhdHNBcHBCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3dhLm1lLzU1MTE5OTk5OTk5OTknLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICBpbml0aWFsPXt7IHNjYWxlOiAwIH19XG4gICAgICBhbmltYXRlPXt7IHNjYWxlOiAxIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxLCB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiAyNjAsIGRhbXBpbmc6IDIwIH19XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IHJpZ2h0LTYgei00MCB3LTE0IGgtMTQgYmctWyMyNUQzNjZdIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctWyMyMEJBNUFdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS0xMTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMjVEMzY2XSBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJGYWxlIGNvbm9zY28gbm8gV2hhdHNBcHBcIlxuICAgID5cbiAgICAgIDxNZXNzYWdlQ2lyY2xlIHNpemU9ezI4fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICA8L21vdGlvbi5idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcEJ1dHRvbjtcbiJdLCJmaWxlIjoiL2hvbWUvdTM1NDU1MzUyOS93ZWJzaXRlcy9wUE5hVVoxUVkvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvV2hhdHNBcHBCdXR0b24uanN4In0=