import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/button.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/button.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cn } from "/src/lib/utils.js";
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=f31a5e49";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=f31a5e49";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport6_react.__esModule ? __vite__cjsImport6_react.default : __vite__cjsImport6_react;
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/button.jsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
});
_c2 = Button;
Button.displayName = "Button";
export { Button, buttonVariants };
var _c, _c2;
$RefreshReg$(_c, "Button$React.forwardRef");
$RefreshReg$(_c2, "Button");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/button.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/ui/button.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUNFOzs7Ozs7Ozs7Ozs7Ozs7O0FBckNGLFNBQVNBLFVBQVU7QUFDbkIsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxXQUFXO0FBQ3BCLE9BQU9DLFdBQVc7QUFFbEIsTUFBTUMsaUJBQWlCRjtBQUFBQSxFQUN0QjtBQUFBLEVBQ0E7QUFBQSxJQUNDRyxVQUFVO0FBQUEsTUFDVEMsU0FBUztBQUFBLFFBQ1JDLFNBQVM7QUFBQSxRQUNUQyxhQUNNO0FBQUEsUUFDTkMsU0FDTTtBQUFBLFFBQ05DLFdBQ007QUFBQSxRQUNOQyxPQUFPO0FBQUEsUUFDUEMsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBQyxNQUFNO0FBQUEsUUFDTE4sU0FBUztBQUFBLFFBQ1RPLElBQUk7QUFBQSxRQUNKQyxJQUFJO0FBQUEsUUFDSkMsTUFBTTtBQUFBLE1BQ1A7QUFBQSxJQUNEO0FBQUEsSUFDQUMsaUJBQWlCO0FBQUEsTUFDaEJYLFNBQVM7QUFBQSxNQUNUTyxNQUFNO0FBQUEsSUFDUDtBQUFBLEVBQ0Q7QUFDRDtBQUVBLE1BQU1LLFNBQVNmLE1BQU1nQixXQUFVQyxLQUFDQSxDQUFDLEVBQUVDLFdBQVdmLFNBQVNPLE1BQU1TLFVBQVUsT0FBTyxHQUFHQyxNQUFNLEdBQUdDLFFBQVE7QUFDakcsUUFBTUMsT0FBT0gsVUFBVXJCLE9BQU87QUFDOUIsU0FDQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0EsV0FBV0QsR0FBR0ksZUFBZSxFQUFFRSxTQUFTTyxNQUFNUSxVQUFVLENBQUMsQ0FBQztBQUFBLE1BQzFEO0FBQUEsTUFDQSxHQUFJRTtBQUFBQTtBQUFBQSxJQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUdXO0FBR2IsQ0FBQztBQUFFRyxNQVRHUjtBQVVOQSxPQUFPUyxjQUFjO0FBRXJCLFNBQVNULFFBQVFkO0FBQWlCLElBQUFnQixJQUFBTTtBQUFBRSxhQUFBUixJQUFBO0FBQUFRLGFBQUFGLEtBQUEiLCJuYW1lcyI6WyJjbiIsIlNsb3QiLCJjdmEiLCJSZWFjdCIsImJ1dHRvblZhcmlhbnRzIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsImRlc3RydWN0aXZlIiwib3V0bGluZSIsInNlY29uZGFyeSIsImdob3N0IiwibGluayIsInNpemUiLCJzbSIsImxnIiwiaWNvbiIsImRlZmF1bHRWYXJpYW50cyIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJfYyIsImNsYXNzTmFtZSIsImFzQ2hpbGQiLCJwcm9wcyIsInJlZiIsIkNvbXAiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbImJ1dHRvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXNsb3QnO1xuaW1wb3J0IHsgY3ZhIH0gZnJvbSAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGJ1dHRvblZhcmlhbnRzID0gY3ZhKFxuXHQnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAnLFxuXHR7XG5cdFx0dmFyaWFudHM6IHtcblx0XHRcdHZhcmlhbnQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogJ2JnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgaG92ZXI6YmctcHJpbWFyeS85MCcsXG5cdFx0XHRcdGRlc3RydWN0aXZlOlxuICAgICAgICAgICdiZy1kZXN0cnVjdGl2ZSB0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAnLFxuXHRcdFx0XHRvdXRsaW5lOlxuICAgICAgICAgICdib3JkZXIgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnLFxuXHRcdFx0XHRzZWNvbmRhcnk6XG4gICAgICAgICAgJ2JnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS84MCcsXG5cdFx0XHRcdGdob3N0OiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnLFxuXHRcdFx0XHRsaW5rOiAndGV4dC1wcmltYXJ5IHVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjp1bmRlcmxpbmUnLFxuXHRcdFx0fSxcblx0XHRcdHNpemU6IHtcblx0XHRcdFx0ZGVmYXVsdDogJ2gtMTAgcHgtNCBweS0yJyxcblx0XHRcdFx0c206ICdoLTkgcm91bmRlZC1tZCBweC0zJyxcblx0XHRcdFx0bGc6ICdoLTExIHJvdW5kZWQtbWQgcHgtOCcsXG5cdFx0XHRcdGljb246ICdoLTEwIHctMTAnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGRlZmF1bHRWYXJpYW50czoge1xuXHRcdFx0dmFyaWFudDogJ2RlZmF1bHQnLFxuXHRcdFx0c2l6ZTogJ2RlZmF1bHQnLFxuXHRcdH0sXG5cdH0sXG4pO1xuXG5jb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNsYXNzTmFtZSwgdmFyaWFudCwgc2l6ZSwgYXNDaGlsZCA9IGZhbHNlLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcblx0Y29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogJ2J1dHRvbic7XG5cdHJldHVybiAoXG5cdFx0PENvbXBcblx0XHRcdGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxuXHRcdFx0cmVmPXtyZWZ9XG5cdFx0XHR7Li4ucHJvcHN9XG5cdFx0Lz5cblx0KTtcbn0pO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5cbmV4cG9ydCB7IEJ1dHRvbiwgYnV0dG9uVmFyaWFudHMgfTtcbiJdLCJmaWxlIjoiL2hvbWUvdTM1NDU1MzUyOS93ZWJzaXRlcy9wUE5hVVoxUVkvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvdWkvYnV0dG9uLmpzeCJ9