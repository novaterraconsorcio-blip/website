import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/HomePage.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Helmet } from "/node_modules/.vite/deps/react-helmet.js?v=f31a5e49";
import HeroSection from "/src/components/home/HeroSection.jsx";
import BenefitsSlider from "/src/components/home/BenefitsSlider.jsx";
import TestimonialsSection from "/src/components/home/TestimonialsSection.jsx";
import CTASection from "/src/components/home/CTASection.jsx";
const HomePage = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Nova Terra Consórcio - Realize Seus Sonhos" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Consórcio de imóveis, veículos e serviços com as melhores condições. Realize seus sonhos com a Nova Terra Consórcio." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Nova Terra Consórcio - Realize Seus Sonhos" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Consórcio de imóveis, veículos e serviços com as melhores condições." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pt-20", children: [
      /* @__PURE__ */ jsxDEV(HeroSection, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(BenefitsSlider, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TestimonialsSection, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CTASection, {}, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
_c = HomePage;
export default HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/HomePage.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVUksbUJBRUksY0FGSjs7Ozs7Ozs7Ozs7Ozs7OztBQVRKLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsY0FBYztBQUN2QixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0Msb0JBQW9CO0FBQzNCLE9BQU9DLHlCQUF5QjtBQUNoQyxPQUFPQyxnQkFBZ0I7QUFFdkIsTUFBTUMsV0FBV0EsTUFBTTtBQUNyQixTQUNFLG1DQUNFO0FBQUEsMkJBQUMsVUFDQztBQUFBLDZCQUFDLFdBQU0sMERBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFpRDtBQUFBLE1BQ2pELHVCQUFDLFVBQUssTUFBSyxlQUFjLFNBQVEsMEhBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUo7QUFBQSxNQUN2Six1QkFBQyxVQUFLLFVBQVMsWUFBVyxTQUFRLGdEQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThFO0FBQUEsTUFDOUUsdUJBQUMsVUFBSyxVQUFTLGtCQUFpQixTQUFRLDBFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThHO0FBQUEsTUFDOUcsdUJBQUMsVUFBSyxVQUFTLFdBQVUsU0FBUSxhQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTBDO0FBQUEsU0FMNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU1BO0FBQUEsSUFFQSx1QkFBQyxTQUFJLFdBQVUsU0FDYjtBQUFBLDZCQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWTtBQUFBLE1BQ1osdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFlO0FBQUEsTUFDZix1QkFBQyx5QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW9CO0FBQUEsTUFDcEIsdUJBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFXO0FBQUEsU0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0E7QUFBQSxPQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlQTtBQUVKO0FBQUVDLEtBbkJJRDtBQXFCTixlQUFlQTtBQUFTLElBQUFDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkhlbG1ldCIsIkhlcm9TZWN0aW9uIiwiQmVuZWZpdHNTbGlkZXIiLCJUZXN0aW1vbmlhbHNTZWN0aW9uIiwiQ1RBU2VjdGlvbiIsIkhvbWVQYWdlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJIb21lUGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9IZXJvU2VjdGlvbic7XG5pbXBvcnQgQmVuZWZpdHNTbGlkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvQmVuZWZpdHNTbGlkZXInO1xuaW1wb3J0IFRlc3RpbW9uaWFsc1NlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvVGVzdGltb25pYWxzU2VjdGlvbic7XG5pbXBvcnQgQ1RBU2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9DVEFTZWN0aW9uJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5Ob3ZhIFRlcnJhIENvbnPDs3JjaW8gLSBSZWFsaXplIFNldXMgU29uaG9zPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnPDs3JjaW8gZGUgaW3Ds3ZlaXMsIHZlw61jdWxvcyBlIHNlcnZpw6dvcyBjb20gYXMgbWVsaG9yZXMgY29uZGnDp8O1ZXMuIFJlYWxpemUgc2V1cyBzb25ob3MgY29tIGEgTm92YSBUZXJyYSBDb25zw7NyY2lvLlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTm92YSBUZXJyYSBDb25zw7NyY2lvIC0gUmVhbGl6ZSBTZXVzIFNvbmhvc1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29uc8OzcmNpbyBkZSBpbcOzdmVpcywgdmXDrWN1bG9zIGUgc2VydmnDp29zIGNvbSBhcyBtZWxob3JlcyBjb25kacOnw7Vlcy5cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMFwiPlxuICAgICAgICA8SGVyb1NlY3Rpb24gLz5cbiAgICAgICAgPEJlbmVmaXRzU2xpZGVyIC8+XG4gICAgICAgIDxUZXN0aW1vbmlhbHNTZWN0aW9uIC8+XG4gICAgICAgIDxDVEFTZWN0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sImZpbGUiOiIvaG9tZS91MzU0NTUzNTI5L3dlYnNpdGVzL3BQTmFVWjFRWS9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvSG9tZVBhZ2UuanN4In0=