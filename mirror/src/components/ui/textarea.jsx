import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/textarea.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/textarea.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { cn } from "/src/lib/utils.js";
const Textarea = React.forwardRef(_c = ({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
        className
      ),
      ref,
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/textarea.jsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
});
_c2 = Textarea;
Textarea.displayName = "Textarea";
export { Textarea };
var _c, _c2;
$RefreshReg$(_c, "Textarea$React.forwardRef");
$RefreshReg$(_c2, "Textarea");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/textarea.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/textarea.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBTUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMSixPQUFPQSxXQUFXO0FBQ2xCLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsV0FBV0YsTUFBTUcsV0FBVUMsS0FBQ0EsQ0FBQyxFQUFFQyxXQUFXLEdBQUdDLE1BQU0sR0FBR0MsUUFBUTtBQUNsRSxTQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxXQUFXTjtBQUFBQSxRQUNUO0FBQUEsUUFDQUk7QUFBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxNQUNBLEdBQUlDO0FBQUFBO0FBQUFBLElBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVk7QUFHaEIsQ0FBQztBQUFFRSxNQVhHTjtBQVlOQSxTQUFTTyxjQUFjO0FBRXZCLFNBQVNQO0FBQVcsSUFBQUUsSUFBQUk7QUFBQUUsYUFBQU4sSUFBQTtBQUFBTSxhQUFBRixLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJjbiIsIlRleHRhcmVhIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbInRleHRhcmVhLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAnZmxleCBtaW4taC1bODBweF0gdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1pbnB1dCBiZy1iYWNrZ3JvdW5kIHB4LTMgcHktMiB0ZXh0LXNtIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufSk7XG5UZXh0YXJlYS5kaXNwbGF5TmFtZSA9ICdUZXh0YXJlYSc7XG5cbmV4cG9ydCB7IFRleHRhcmVhIH07XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL3VpL3RleHRhcmVhLmpzeCJ9