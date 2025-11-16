import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { BrowserRouter as Router, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=f31a5e49";
import { Toaster } from "/src/components/ui/toaster.jsx";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import WhatsAppButton from "/src/components/WhatsAppButton.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import ComoFunciona from "/src/pages/ComoFunciona.jsx";
import Simulacao from "/src/pages/Simulacao.jsx";
import SobreNos from "/src/pages/SobreNos.jsx";
import Contato from "/src/pages/Contato.jsx";
import Blog from "/src/pages/Blog.jsx";
function App() {
  return /* @__PURE__ */ jsxDEV(Router, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-grow", children: /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(HomePage, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 41,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/como-funciona", element: /* @__PURE__ */ jsxDEV(ComoFunciona, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 42,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/simulacao", element: /* @__PURE__ */ jsxDEV(Simulacao, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 43,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/sobre-nos", element: /* @__PURE__ */ jsxDEV(SobreNos, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 44,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/contato", element: /* @__PURE__ */ jsxDEV(Contato, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 45,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blog", element: /* @__PURE__ */ jsxDEV(Blog, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 46,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(WhatsAppButton, {}, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JROzs7Ozs7Ozs7Ozs7Ozs7O0FBakJSLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsaUJBQWlCQyxRQUFRQyxRQUFRQyxhQUFhO0FBQ3ZELFNBQVNDLGVBQWU7QUFDeEIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLG9CQUFvQjtBQUMzQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGtCQUFrQjtBQUN6QixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxVQUFVO0FBRWpCLFNBQVNDLE1BQU07QUFDYixTQUNFLHVCQUFDLFVBQ0MsaUNBQUMsU0FBSSxXQUFVLHVDQUNiO0FBQUEsMkJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxJQUNQLHVCQUFDLFVBQUssV0FBVSxhQUNkLGlDQUFDLFVBQ0M7QUFBQSw2QkFBQyxTQUFNLE1BQUssS0FBSSxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBc0M7QUFBQSxNQUN0Qyx1QkFBQyxTQUFNLE1BQUssa0JBQWlCLFNBQVMsdUJBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFhLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUQ7QUFBQSxNQUN2RCx1QkFBQyxTQUFNLE1BQUssY0FBYSxTQUFTLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFVLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0Q7QUFBQSxNQUNoRCx1QkFBQyxTQUFNLE1BQUssY0FBYSxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBK0M7QUFBQSxNQUMvQyx1QkFBQyxTQUFNLE1BQUssWUFBVyxTQUFTLHVCQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFRLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBNEM7QUFBQSxNQUM1Qyx1QkFBQyxTQUFNLE1BQUssU0FBUSxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFLLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBc0M7QUFBQSxTQU54QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBT0EsS0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0E7QUFBQSxJQUNBLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsSUFDUCx1QkFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWU7QUFBQSxJQUNmLHVCQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFRO0FBQUEsT0FkVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZUEsS0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlCQTtBQUVKO0FBQUNDLEtBckJRRDtBQXVCVCxlQUFlQTtBQUFJLElBQUFDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIlRvYXN0ZXIiLCJIZWFkZXIiLCJGb290ZXIiLCJXaGF0c0FwcEJ1dHRvbiIsIkhvbWVQYWdlIiwiQ29tb0Z1bmNpb25hIiwiU2ltdWxhY2FvIiwiU29icmVOb3MiLCJDb250YXRvIiwiQmxvZyIsIkFwcCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90b2FzdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IFdoYXRzQXBwQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9XaGF0c0FwcEJ1dHRvbic7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnQC9wYWdlcy9Ib21lUGFnZSc7XG5pbXBvcnQgQ29tb0Z1bmNpb25hIGZyb20gJ0AvcGFnZXMvQ29tb0Z1bmNpb25hJztcbmltcG9ydCBTaW11bGFjYW8gZnJvbSAnQC9wYWdlcy9TaW11bGFjYW8nO1xuaW1wb3J0IFNvYnJlTm9zIGZyb20gJ0AvcGFnZXMvU29icmVOb3MnO1xuaW1wb3J0IENvbnRhdG8gZnJvbSAnQC9wYWdlcy9Db250YXRvJztcbmltcG9ydCBCbG9nIGZyb20gJ0AvcGFnZXMvQmxvZyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBiZy13aGl0ZVwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb21vLWZ1bmNpb25hXCIgZWxlbWVudD17PENvbW9GdW5jaW9uYSAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NpbXVsYWNhb1wiIGVsZW1lbnQ9ezxTaW11bGFjYW8gLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zb2JyZS1ub3NcIiBlbGVtZW50PXs8U29icmVOb3MgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb250YXRvXCIgZWxlbWVudD17PENvbnRhdG8gLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ibG9nXCIgZWxlbWVudD17PEJsb2cgLz59IC8+XG4gICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8V2hhdHNBcHBCdXR0b24gLz5cbiAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9BcHAuanN4In0=