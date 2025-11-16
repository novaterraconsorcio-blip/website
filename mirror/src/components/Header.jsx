import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Header.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Link, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=f31a5e49";
import { Menu, X } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
const Header = () => {
  _s();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [{
    path: "/",
    label: "Início"
  }, {
    path: "/como-funciona",
    label: "Como Funciona"
  }, {
    path: "/simulacao",
    label: "Simulação"
  }, {
    path: "/sobre-nos",
    label: "Sobre Nós"
  }, {
    path: "/blog",
    label: "Blog"
  }, {
    path: "/contato",
    label: "Contato"
  }];
  return /* @__PURE__ */ jsxDEV("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/95"}`, role: "banner", children: /* @__PURE__ */ jsxDEV("nav", { className: "container mx-auto px-4 py-4", role: "navigation", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center space-x-2 group", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-[#658f4c] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxDEV("span", { className: "text-white font-bold text-xl", "data-edit-id": "src/components/Header.jsx:45:15", children: "NT" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold text-[#24352f]", "data-edit-id": "src/components/Header.jsx:47:13", children: "Nova Terra Consórcio" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:flex items-center space-x-6", children: [
        navLinks.map((link) => /* @__PURE__ */ jsxDEV(Link, { to: link.path, className: `text-sm font-medium transition-colors duration-300 hover:text-[#658f4c] ${location.pathname === link.path ? "text-[#658f4c]" : "text-[#24352f]"}`, children: link.label }, link.path, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
          lineNumber: 69,
          columnNumber: 37
        }, this)),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, className: "bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Link, { to: "/simulacao", children: "Simular Agora" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "lg:hidden p-2 text-[#24352f] hover:text-[#658f4c] transition-colors duration-300", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), "aria-label": "Toggle mobile menu", "aria-expanded": isMobileMenuOpen, "data-edit-disabled": "true", children: isMobileMenuOpen ? /* @__PURE__ */ jsxDEV(X, { size: 24 }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 78,
        columnNumber: 33
      }, this) : /* @__PURE__ */ jsxDEV(Menu, { size: 24 }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 78,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxDEV(motion.div, { initial: {
      opacity: 0,
      height: 0
    }, animate: {
      opacity: 1,
      height: "auto"
    }, exit: {
      opacity: 0,
      height: 0
    }, transition: {
      duration: 0.3
    }, className: "lg:hidden overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "py-4 space-y-3", children: [
      navLinks.map((link) => /* @__PURE__ */ jsxDEV(Link, { to: link.path, className: `block py-2 text-sm font-medium transition-colors duration-300 hover:text-[#658f4c] ${location.pathname === link.path ? "text-[#658f4c]" : "text-[#24352f]"}`, children: link.label }, link.path, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 96,
        columnNumber: 41
      }, this)),
      /* @__PURE__ */ jsxDEV(Button, { asChild: true, className: "w-full bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Link, { to: "/simulacao", children: "Simular Agora" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 100,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
        lineNumber: 99,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
      lineNumber: 95,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
      lineNumber: 83,
      columnNumber: 32
    }, this) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
      lineNumber: 82,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s(Header, "eZHI9QDc2rZaYx/4IG/l9REZIR0=", false, function() {
  return [useLocation];
});
_c = Header;
export default Header;
var _c;
$RefreshReg$(_c, "Header");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Header.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBMkIsS0FIeEJyQjtBQTRHTixlQUFlQTtBQUFNLElBQUFxQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VMb2NhdGlvbiIsIk1lbnUiLCJYIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQnV0dG9uIiwiSGVhZGVyIiwiX3MiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwibG9jYXRpb24iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZMaW5rcyIsInBhdGgiLCJsYWJlbCIsIm1hcCIsImxpbmsiLCJwYXRobmFtZSIsIm9wYWNpdHkiLCJoZWlnaHQiLCJkdXJhdGlvbiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IE1lbnUsIFggfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBzZXRJc1Njcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMjApO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgfSwgW2xvY2F0aW9uXSk7XG5cbiAgY29uc3QgbmF2TGlua3MgPSBbXG4gICAgeyBwYXRoOiAnLycsIGxhYmVsOiAnSW7DrWNpbycgfSxcbiAgICB7IHBhdGg6ICcvY29tby1mdW5jaW9uYScsIGxhYmVsOiAnQ29tbyBGdW5jaW9uYScgfSxcbiAgICB7IHBhdGg6ICcvc2ltdWxhY2FvJywgbGFiZWw6ICdTaW11bGHDp8OjbycgfSxcbiAgICB7IHBhdGg6ICcvc29icmUtbm9zJywgbGFiZWw6ICdTb2JyZSBOw7NzJyB9LFxuICAgIHsgcGF0aDogJy9ibG9nJywgbGFiZWw6ICdCbG9nJyB9LFxuICAgIHsgcGF0aDogJy9jb250YXRvJywgbGFiZWw6ICdDb250YXRvJyB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIFxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgaXNTY3JvbGxlZCA/ICdiZy13aGl0ZSBzaGFkb3ctbWQnIDogJ2JnLXdoaXRlLzk1J1xuICAgICAgfWB9XG4gICAgICByb2xlPVwiYmFubmVyXCJcbiAgICA+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYmctWyM2NThmNGNdIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhsXCI+TlQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtWyMyNDM1MmZdXCI+Tm92YSBUZXJyYSBDb25zw7NyY2lvPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNlwiPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17bGluay5wYXRofVxuICAgICAgICAgICAgICAgIHRvPXtsaW5rLnBhdGh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1bIzY1OGY0Y10gJHtcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBsaW5rLnBhdGggPyAndGV4dC1bIzY1OGY0Y10nIDogJ3RleHQtWyMyNDM1MmZdJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgYXNDaGlsZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzY1OGY0Y10gaG92ZXI6YmctWyMzNDZkNDddIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpbXVsYWNhb1wiPlNpbXVsYXIgQWdvcmE8L0xpbms+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBwLTIgdGV4dC1bIzI0MzUyZl0gaG92ZXI6dGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBtb2JpbGUgbWVudVwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpc01vYmlsZU1lbnVPcGVufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc01vYmlsZU1lbnVPcGVuID8gPFggc2l6ZT17MjR9IC8+IDogPE1lbnUgc2l6ZT17MjR9IC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtpc01vYmlsZU1lbnVPcGVuICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsaW5rLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtsaW5rLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1bIzY1OGY0Y10gJHtcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gbGluay5wYXRoID8gJ3RleHQtWyM2NThmNGNdJyA6ICd0ZXh0LVsjMjQzNTJmXSdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyM2NThmNGNdIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpbXVsYWNhb1wiPlNpbXVsYXIgQWdvcmE8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3gifQ==