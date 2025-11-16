import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toaster.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "/src/components/ui/toast.jsx";
import { useToast } from "/src/components/ui/use-toast.js";
import __vite__cjsImport5_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport5_react.__esModule ? __vite__cjsImport5_react.default : __vite__cjsImport5_react;
export function Toaster() {
  _s();
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(({ id, title, description, action, ...props }) => {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
            lineNumber: 40,
            columnNumber: 18
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
            lineNumber: 42,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
          lineNumber: 46,
          columnNumber: 7
        }, this)
      ] }, id, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
      lineNumber: 50,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c = Toaster;
var _c;
$RefreshReg$(_c, "Toaster");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/toaster.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQmpCO0FBQUEsRUFDQ0E7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsT0FDTTtBQUNQLFNBQVNDLGdCQUFnQjtBQUN6QixPQUFPQyxXQUFXO0FBRVgsZ0JBQVNDLFVBQVU7QUFBQUMsS0FBQTtBQUN6QixRQUFNLEVBQUVDLE9BQU8sSUFBSUosU0FBUztBQUU1QixTQUNDLHVCQUFDLGlCQUNDSTtBQUFBQSxXQUFPQyxJQUFJLENBQUMsRUFBRUMsSUFBSUMsT0FBT0MsYUFBYUMsUUFBUSxHQUFHQyxNQUFNLE1BQU07QUFDN0QsYUFDQyx1QkFBQyxTQUFlLEdBQUlBLE9BQ25CO0FBQUEsK0JBQUMsU0FBSSxXQUFVLGNBQ2JIO0FBQUFBLG1CQUFTLHVCQUFDLGNBQVlBLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW1CO0FBQUEsVUFDNUJDLGVBQ0EsdUJBQUMsb0JBQWtCQSx5QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBK0I7QUFBQSxhQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBS0E7QUFBQSxRQUNDQztBQUFBQSxRQUNELHVCQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVztBQUFBLFdBUkFILElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVNBO0FBQUEsSUFFRixDQUFDO0FBQUEsSUFDRCx1QkFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWM7QUFBQSxPQWZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQkE7QUFFRjtBQUFDSCxHQXRCZUQsU0FBTztBQUFBLFVBQ0hGLFFBQVE7QUFBQTtBQUFBVyxLQURaVDtBQUFPLElBQUFTO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJUb2FzdCIsIlRvYXN0Q2xvc2UiLCJUb2FzdERlc2NyaXB0aW9uIiwiVG9hc3RQcm92aWRlciIsIlRvYXN0VGl0bGUiLCJUb2FzdFZpZXdwb3J0IiwidXNlVG9hc3QiLCJSZWFjdCIsIlRvYXN0ZXIiLCJfcyIsInRvYXN0cyIsIm1hcCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsInByb3BzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJ0b2FzdGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRUb2FzdCxcblx0VG9hc3RDbG9zZSxcblx0VG9hc3REZXNjcmlwdGlvbixcblx0VG9hc3RQcm92aWRlcixcblx0VG9hc3RUaXRsZSxcblx0VG9hc3RWaWV3cG9ydCxcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RvYXN0JztcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9hc3RlcigpIHtcblx0Y29uc3QgeyB0b2FzdHMgfSA9IHVzZVRvYXN0KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8VG9hc3RQcm92aWRlcj5cblx0XHRcdHt0b2FzdHMubWFwKCh7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGFjdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxUb2FzdCBrZXk9e2lkfSB7Li4ucHJvcHN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xXCI+XG5cdFx0XHRcdFx0XHRcdHt0aXRsZSAmJiA8VG9hc3RUaXRsZT57dGl0bGV9PC9Ub2FzdFRpdGxlPn1cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8VG9hc3REZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9Ub2FzdERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7YWN0aW9ufVxuXHRcdFx0XHRcdFx0PFRvYXN0Q2xvc2UgLz5cblx0XHRcdFx0XHQ8L1RvYXN0PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0XHQ8VG9hc3RWaWV3cG9ydCAvPlxuXHRcdDwvVG9hc3RQcm92aWRlcj5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvdTM1NDU1MzUyOS93ZWJzaXRlcy9wUE5hVVoxUVkvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvdWkvdG9hc3Rlci5qc3gifQ==