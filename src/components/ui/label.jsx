import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/label.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/label.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import * as LabelPrimitive from "/node_modules/.vite/deps/@radix-ui_react-label.js?v=f31a5e49";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=f31a5e49";
import { cn } from "/src/lib/utils.js";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    LabelPrimitive.Root,
    {
      ref,
      className: cn(labelVariants(), className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/label.jsx",
      lineNumber: 31,
      columnNumber: 1
    },
    this
  )
);
_c2 = Label;
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
var _c, _c2;
$RefreshReg$(_c, "Label$React.forwardRef");
$RefreshReg$(_c2, "Label");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/label.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/label.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBV0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWRixPQUFPQSxXQUFXO0FBQ2xCLFlBQVlDLG9CQUFvQjtBQUNoQyxTQUFTQyxXQUFXO0FBQ3BCLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsZ0JBQWdCRjtBQUFBQSxFQUNwQjtBQUNGO0FBRUEsTUFBTUcsUUFBUUwsTUFBTU07QUFBQUEsRUFBVUMsS0FBQ0EsQ0FBQyxFQUFFQyxXQUFXLEdBQUdDLE1BQU0sR0FBR0MsUUFDdkQ7QUFBQSxJQUFDLGVBQWU7QUFBQSxJQUFmO0FBQUEsTUFDQztBQUFBLE1BQ0EsV0FBV1AsR0FBR0MsY0FBYyxHQUFHSSxTQUFTO0FBQUEsTUFDeEMsR0FBSUM7QUFBQUE7QUFBQUEsSUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFHWTtBQUViO0FBQUVFLE1BTkdOO0FBT05BLE1BQU1PLGNBQWNYLGVBQWVZLEtBQUtEO0FBRXhDLFNBQVNQO0FBQVEsSUFBQUUsSUFBQUk7QUFBQUcsYUFBQVAsSUFBQTtBQUFBTyxhQUFBSCxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJMYWJlbFByaW1pdGl2ZSIsImN2YSIsImNuIiwibGFiZWxWYXJpYW50cyIsIkxhYmVsIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIlJvb3QiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJsYWJlbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgTGFiZWxQcmltaXRpdmUgZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWxhYmVsJztcbmltcG9ydCB7IGN2YSB9IGZyb20gJ2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSc7XG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcblxuY29uc3QgbGFiZWxWYXJpYW50cyA9IGN2YShcbiAgJ3RleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHBlZXItZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHBlZXItZGlzYWJsZWQ6b3BhY2l0eS03MCdcbik7XG5cbmNvbnN0IExhYmVsID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TGFiZWxQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24obGFiZWxWYXJpYW50cygpLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuTGFiZWwuZGlzcGxheU5hbWUgPSBMYWJlbFByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBMYWJlbCB9O1xuIl0sImZpbGUiOiIvaG9tZS91MzU0NTUzNTI5L3dlYnNpdGVzL3BQTmFVWjFRWS9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy91aS9sYWJlbC5qc3gifQ==