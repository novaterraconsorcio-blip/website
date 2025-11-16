import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/home/HeroSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=f31a5e49";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
import { ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
const HeroSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "relative bg-gradient-to-br from-[#658f4c] to-[#346d47] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    } }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-20 lg:py-32 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV(motion.div, { initial: {
        opacity: 0,
        x: -50
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl lg:text-6xl font-bold mb-6 leading-tight", "data-edit-id": "src/components/home/HeroSection.jsx:24:13", children: "Realize Seus Sonhos com Consórcio" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl mb-8 text-white/90", "data-edit-id": "src/components/home/HeroSection.jsx:27:13", children: "A forma mais inteligente e econômica de conquistar seu imóvel, veículo ou realizar seus projetos." }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-white text-[#658f4c] hover:bg-gray-100 transition-all duration-300 group", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Link, { to: "/simulacao", children: [
            "Simular Agora",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 group-hover:translate-x-1 transition-transform duration-300", size: 20 }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
              lineNumber: 54,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
            lineNumber: 52,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-[#658f4c] transition-all duration-300", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Link, { to: "/como-funciona", children: "Como Funciona" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(motion.div, { initial: {
        opacity: 0,
        x: 50
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6,
        delay: 0.2
      }, className: "relative", children: /* @__PURE__ */ jsxDEV("img", { alt: "Família feliz realizando sonhos com consórcio", className: "rounded-lg shadow-2xl w-full", src: "https://images.unsplash.com/photo-1679335026558-3e71768f0af9", "data-edit-id": "src/components/home/HeroSection.jsx:58:13" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
        lineNumber: 73,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = HeroSection;
export default HeroSection;
var _c;
$RefreshReg$(_c, "HeroSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/HeroSection.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBV1E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWUixPQUFPQSxXQUFXO0FBQ2xCLFNBQVNDLFlBQVk7QUFDckIsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLGtCQUFrQjtBQUUzQixNQUFNQyxjQUFjQSxNQUFNO0FBQ3hCLFNBQ0UsdUJBQUMsYUFBUSxXQUFVLHFGQUNqQjtBQUFBLDJCQUFDLFNBQUksV0FBVSwrQkFDYixpQ0FBQyxTQUFJLFdBQVUsb0JBQW1CLE9BQU87QUFBQSxNQUN2Q0MsaUJBQWlCO0FBQUEsSUFDbkIsS0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUcsS0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUE7QUFBQSxJQUVBLHVCQUFDLFNBQUksV0FBVSx1REFDYixpQ0FBQyxTQUFJLFdBQVUsMkNBQ2I7QUFBQSw2QkFBQyxPQUFPLEtBQVAsRUFDQyxTQUFTO0FBQUEsUUFBRUMsU0FBUztBQUFBLFFBQUdDLEdBQUc7QUFBQSxNQUFJLEdBQzlCLFNBQVM7QUFBQSxRQUFFRCxTQUFTO0FBQUEsUUFBR0MsR0FBRztBQUFBLE1BQUUsR0FDNUIsWUFBWTtBQUFBLFFBQUVDLFVBQVU7QUFBQSxNQUFJLEdBRTVCO0FBQUEsK0JBQUMsUUFBRyxXQUFVLHFEQUFtRCw4R0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxPQUFFLFdBQVUsOEJBQTRCLDhLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLFNBQUksV0FBVSxtQ0FDYjtBQUFBLGlDQUFDLFVBQ0MsU0FBTyxNQUNQLE1BQUssTUFDTCxXQUFVLCtFQUE2RSw4QkFFdkYsaUNBQUMsUUFBSyxJQUFHLGNBQVk7QUFBQTtBQUFBLFlBRW5CLHVCQUFDLGNBQVcsV0FBVSxvRUFBbUUsTUFBTSxNQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFrRztBQUFBLGVBRnBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0EsS0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVNBO0FBQUEsVUFDQSx1QkFBQyxVQUNDLFNBQU8sTUFDUCxNQUFLLE1BQ0wsU0FBUSxXQUNSLFdBQVUsb0dBQWtHLDhCQUU1RyxpQ0FBQyxRQUFLLElBQUcsa0JBQWlCLDZCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF1QyxLQU56QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU9BO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW1CQTtBQUFBLFdBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUErQkE7QUFBQSxNQUVBLHVCQUFDLE9BQU8sS0FBUCxFQUNDLFNBQVM7QUFBQSxRQUFFRixTQUFTO0FBQUEsUUFBR0MsR0FBRztBQUFBLE1BQUcsR0FDN0IsU0FBUztBQUFBLFFBQUVELFNBQVM7QUFBQSxRQUFHQyxHQUFHO0FBQUEsTUFBRSxHQUM1QixZQUFZO0FBQUEsUUFBRUMsVUFBVTtBQUFBLFFBQUtDLE9BQU87QUFBQSxNQUFJLEdBQ3hDLFdBQVUsWUFFVixpQ0FBQyxTQUFJLEtBQUksaURBQWdELFdBQVUsZ0NBQStCLEtBQUksZ0VBQThELCtEQUFwSztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW9LLEtBTnRLO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFPQTtBQUFBLFNBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EwQ0EsS0EzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTRDQTtBQUFBLE9BbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvREE7QUFFSjtBQUFDQyxLQXhES047QUEwRE4sZUFBZUE7QUFBVyxJQUFBTTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwibW90aW9uIiwiQnV0dG9uIiwiQXJyb3dSaWdodCIsIkhlcm9TZWN0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwib3BhY2l0eSIsIngiLCJkdXJhdGlvbiIsImRlbGF5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9ob21lL0hlcm9TZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyM2NThmNGNdIHRvLVsjMzQ2ZDQ3XSB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCIgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgdmlld0JveD0nMCAwIDYwIDYwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMSclM0UlM0NwYXRoIGQ9J00zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMlY2aDRWNGgtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnpNNiA0VjBINHY0SDB2Mmg0djRoMlY2aDRWNEg2eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIilgXG4gICAgICAgIH19PjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0yMCBsZzpweS0zMiByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTUwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCBmb250LWJvbGQgbWItNiBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgIFJlYWxpemUgU2V1cyBTb25ob3MgY29tIENvbnPDs3JjaW9cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTggdGV4dC13aGl0ZS85MFwiPlxuICAgICAgICAgICAgICBBIGZvcm1hIG1haXMgaW50ZWxpZ2VudGUgZSBlY29uw7RtaWNhIGRlIGNvbnF1aXN0YXIgc2V1IGltw7N2ZWwsIHZlw61jdWxvIG91IHJlYWxpemFyIHNldXMgcHJvamV0b3MuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LVsjNjU4ZjRjXSBob3ZlcjpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZ3JvdXBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2ltdWxhY2FvXCI+XG4gICAgICAgICAgICAgICAgICBTaW11bGFyIEFnb3JhXG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJtbC0yIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbW8tZnVuY2lvbmFcIj5Db21vIEZ1bmNpb25hPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDUwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiwgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwiRmFtw61saWEgZmVsaXogcmVhbGl6YW5kbyBzb25ob3MgY29tIGNvbnPDs3JjaW9cIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy0yeGwgdy1mdWxsXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NzkzMzUwMjY1NTgtM2U3MTc2OGYwYWY5XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL2hvbWUvSGVyb1NlY3Rpb24uanN4In0=