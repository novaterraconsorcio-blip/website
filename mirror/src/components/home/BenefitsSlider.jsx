import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/home/BenefitsSlider.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { ChevronLeft, ChevronRight, Home, Car, Briefcase, Shield, TrendingDown, Clock } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
const benefits = [{
  icon: Home,
  title: "Consórcio de Imóveis",
  description: "Conquiste sua casa própria ou invista em imóveis sem comprometer seu orçamento.",
  color: "#658f4c"
}, {
  icon: Car,
  title: "Consórcio de Veículos",
  description: "Adquira seu carro novo ou seminovo com parcelas que cabem no seu bolso.",
  color: "#346d47"
}, {
  icon: Briefcase,
  title: "Consórcio de Serviços",
  description: "Realize reformas, viagens e outros projetos de forma planejada.",
  color: "#658f4c"
}, {
  icon: Shield,
  title: "Segurança e Confiança",
  description: "Administradora regulamentada pelo Banco Central com total transparência.",
  color: "#346d47"
}, {
  icon: TrendingDown,
  title: "Sem Juros",
  description: "Pague apenas taxa de administração, sem juros abusivos.",
  color: "#658f4c"
}, {
  icon: Clock,
  title: "Flexibilidade",
  description: "Escolha o prazo e valor que melhor se adequam ao seu planejamento.",
  color: "#346d47"
}];
const BenefitsSlider = () => {
  _s();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const slideVariants = {
    enter: (direction2) => ({
      x: direction2 > 0 ? 1e3 : -1e3,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction2) => ({
      zIndex: 0,
      x: direction2 < 0 ? 1e3 : -1e3,
      opacity: 0
    })
  };
  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0)
        return benefits.length - 1;
      if (next >= benefits.length)
        return 0;
      return next;
    });
  };
  const Icon = benefits[currentIndex].icon;
  return /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-4xl font-bold text-[#24352f] mb-4", "data-edit-id": "src/components/home/BenefitsSlider.jsx:92:11", children: "Por Que Escolher a Nova Terra?" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", "data-edit-id": "src/components/home/BenefitsSlider.jsx:95:11", children: "Descubra as vantagens de realizar seus sonhos através do consórcio" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { initial: false, custom: direction, children: /* @__PURE__ */ jsxDEV(motion.div, { custom: direction, variants: slideVariants, initial: "enter", animate: "center", exit: "exit", transition: {
        x: {
          type: "spring",
          stiffness: 300,
          damping: 30
        },
        opacity: {
          duration: 0.3
        }
      }, className: "bg-white rounded-2xl shadow-lg p-8 lg:p-12", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300", style: {
          backgroundColor: benefits[currentIndex].color
        }, children: /* @__PURE__ */ jsxDEV(Icon, { size: 40, className: "text-white" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
          lineNumber: 119,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
          lineNumber: 116,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl lg:text-3xl font-bold text-[#24352f] mb-4", "data-edit-disabled": "true", children: benefits[currentIndex].title }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
          lineNumber: 121,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-600 max-w-2xl", "data-edit-disabled": "true", children: benefits[currentIndex].description }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
          lineNumber: 124,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 115,
        columnNumber: 17
      }, this) }, currentIndex, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 105,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "icon", className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-gray-100 border-2 border-[#658f4c] text-[#658f4c] transition-all duration-300", onClick: () => paginate(-1), "aria-label": "Benefício anterior", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(ChevronLeft, { size: 24 }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "icon", className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-gray-100 border-2 border-[#658f4c] text-[#658f4c] transition-all duration-300", onClick: () => paginate(1), "aria-label": "Próximo benefício", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(ChevronRight, { size: 24 }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 137,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center gap-2 mt-8", children: benefits.map((_, index) => /* @__PURE__ */ jsxDEV("button", { onClick: () => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
      }, className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#658f4c] w-8" : "bg-gray-300"}`, "aria-label": `Ir para benefício ${index + 1}`, "data-edit-id": "src/components/home/BenefitsSlider.jsx:156:15" }, index, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 141,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
      lineNumber: 102,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
};
_s(BenefitsSlider, "B3Xaw+zPh75fsN8tVB/ufahnQKU=");
_c = BenefitsSlider;
export default BenefitsSlider;
var _c;
$RefreshReg$(_c, "BenefitsSlider");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/home/BenefitsSlider.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUUE7QUFBQSxNQUVBLHVCQUFDLFVBQ0MsU0FBUSxXQUNSLE1BQUssUUFDTCxXQUFVLDZLQUNWLFNBQVMsTUFBTUEsU0FBUyxDQUFDLEdBQ3pCLGNBQVcscUJBQW1CLDhCQUU5QixpQ0FBQyxnQkFBYSxNQUFNLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUIsS0FQekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVFBO0FBQUEsTUFFQSx1QkFBQyxTQUFJLFdBQVUsa0NBQ1p2QixtQkFBU2dDLElBQUksQ0FBQ0MsR0FBR0MsVUFDaEIsdUJBQUMsWUFFQyxTQUFTLE1BQU07QUFDYnhCLHFCQUFhd0IsUUFBUTNCLGVBQWUsSUFBSSxFQUFFO0FBQzFDQyx3QkFBZ0IwQixLQUFLO0FBQUEsTUFDdkIsR0FDQSxXQUFXLG9EQUNUQSxVQUFVM0IsZUFBZSxxQkFBcUIsYUFBYSxJQUU3RCxjQUFZLHFCQUFxQjJCLFFBQVEsQ0FBQyxJQUFHLG1FQVJ4Q0EsT0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUytDLENBRWhELEtBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWNBO0FBQUEsU0FwRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFFQTtBQUFBLE9BL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnRkEsS0FqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtGQTtBQUVKO0FBQUM1QixHQS9IS0QsZ0JBQWM7QUFBQThCLEtBQWQ5QjtBQWlJTixlQUFlQTtBQUFjLElBQUE4QjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkNoZXZyb25MZWZ0IiwiQ2hldnJvblJpZ2h0IiwiSG9tZSIsIkNhciIsIkJyaWVmY2FzZSIsIlNoaWVsZCIsIlRyZW5kaW5nRG93biIsIkNsb2NrIiwiQnV0dG9uIiwiYmVuZWZpdHMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwiQmVuZWZpdHNTbGlkZXIiLCJfcyIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlVmFyaWFudHMiLCJlbnRlciIsIngiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsInBhZ2luYXRlIiwibmV3RGlyZWN0aW9uIiwibmV4dCIsIkljb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiXyIsImluZGV4IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9ob21lL0JlbmVmaXRzU2xpZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQsIEhvbWUsIENhciwgQnJpZWZjYXNlLCBTaGllbGQsIFRyZW5kaW5nRG93biwgQ2xvY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5cbmNvbnN0IGJlbmVmaXRzID0gW1xuICB7XG4gICAgaWNvbjogSG9tZSxcbiAgICB0aXRsZTogJ0NvbnPDs3JjaW8gZGUgSW3Ds3ZlaXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29ucXVpc3RlIHN1YSBjYXNhIHByw7NwcmlhIG91IGludmlzdGEgZW0gaW3Ds3ZlaXMgc2VtIGNvbXByb21ldGVyIHNldSBvcsOnYW1lbnRvLicsXG4gICAgY29sb3I6ICcjNjU4ZjRjJ1xuICB9LFxuICB7XG4gICAgaWNvbjogQ2FyLFxuICAgIHRpdGxlOiAnQ29uc8OzcmNpbyBkZSBWZcOtY3Vsb3MnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRxdWlyYSBzZXUgY2Fycm8gbm92byBvdSBzZW1pbm92byBjb20gcGFyY2VsYXMgcXVlIGNhYmVtIG5vIHNldSBib2xzby4nLFxuICAgIGNvbG9yOiAnIzM0NmQ0NydcbiAgfSxcbiAge1xuICAgIGljb246IEJyaWVmY2FzZSxcbiAgICB0aXRsZTogJ0NvbnPDs3JjaW8gZGUgU2VydmnDp29zJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlYWxpemUgcmVmb3JtYXMsIHZpYWdlbnMgZSBvdXRyb3MgcHJvamV0b3MgZGUgZm9ybWEgcGxhbmVqYWRhLicsXG4gICAgY29sb3I6ICcjNjU4ZjRjJ1xuICB9LFxuICB7XG4gICAgaWNvbjogU2hpZWxkLFxuICAgIHRpdGxlOiAnU2VndXJhbsOnYSBlIENvbmZpYW7Dp2EnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRtaW5pc3RyYWRvcmEgcmVndWxhbWVudGFkYSBwZWxvIEJhbmNvIENlbnRyYWwgY29tIHRvdGFsIHRyYW5zcGFyw6puY2lhLicsXG4gICAgY29sb3I6ICcjMzQ2ZDQ3J1xuICB9LFxuICB7XG4gICAgaWNvbjogVHJlbmRpbmdEb3duLFxuICAgIHRpdGxlOiAnU2VtIEp1cm9zJyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZ3VlIGFwZW5hcyB0YXhhIGRlIGFkbWluaXN0cmHDp8Ojbywgc2VtIGp1cm9zIGFidXNpdm9zLicsXG4gICAgY29sb3I6ICcjNjU4ZjRjJ1xuICB9LFxuICB7XG4gICAgaWNvbjogQ2xvY2ssXG4gICAgdGl0bGU6ICdGbGV4aWJpbGlkYWRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0VzY29saGEgbyBwcmF6byBlIHZhbG9yIHF1ZSBtZWxob3Igc2UgYWRlcXVhbSBhbyBzZXUgcGxhbmVqYW1lbnRvLicsXG4gICAgY29sb3I6ICcjMzQ2ZDQ3J1xuICB9XG5dO1xuXG5jb25zdCBCZW5lZml0c1NsaWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldERpcmVjdGlvbigxKTtcbiAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gKHByZXYgKyAxKSAlIGJlbmVmaXRzLmxlbmd0aCk7XG4gICAgfSwgNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzbGlkZVZhcmlhbnRzID0ge1xuICAgIGVudGVyOiAoZGlyZWN0aW9uKSA9PiAoe1xuICAgICAgeDogZGlyZWN0aW9uID4gMCA/IDEwMDAgOiAtMTAwMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KSxcbiAgICBjZW50ZXI6IHtcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHg6IDAsXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBleGl0OiAoZGlyZWN0aW9uKSA9PiAoe1xuICAgICAgekluZGV4OiAwLFxuICAgICAgeDogZGlyZWN0aW9uIDwgMCA/IDEwMDAgOiAtMTAwMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHBhZ2luYXRlID0gKG5ld0RpcmVjdGlvbikgPT4ge1xuICAgIHNldERpcmVjdGlvbihuZXdEaXJlY3Rpb24pO1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IHByZXYgKyBuZXdEaXJlY3Rpb247XG4gICAgICBpZiAobmV4dCA8IDApIHJldHVybiBiZW5lZml0cy5sZW5ndGggLSAxO1xuICAgICAgaWYgKG5leHQgPj0gYmVuZWZpdHMubGVuZ3RoKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IEljb24gPSBiZW5lZml0c1tjdXJyZW50SW5kZXhdLmljb247XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBiZy1ncmF5LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1bIzI0MzUyZl0gbWItNFwiPlxuICAgICAgICAgICAgUG9yIFF1ZSBFc2NvbGhlciBhIE5vdmEgVGVycmE/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIERlc2N1YnJhIGFzIHZhbnRhZ2VucyBkZSByZWFsaXphciBzZXVzIHNvbmhvcyBhdHJhdsOpcyBkbyBjb25zw7NyY2lvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17ZGlyZWN0aW9ufT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2N1cnJlbnRJbmRleH1cbiAgICAgICAgICAgICAgICBjdXN0b209e2RpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50cz17c2xpZGVWYXJpYW50c31cbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICB4OiB7IHR5cGU6ICdzcHJpbmcnLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMzAgfSxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMyB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbGcgcC04IGxnOnAtMTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi02IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmVuZWZpdHNbY3VycmVudEluZGV4XS5jb2xvciB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXs0MH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1bIzI0MzUyZl0gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7YmVuZWZpdHNbY3VycmVudEluZGV4XS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtiZW5lZml0c1tjdXJyZW50SW5kZXhdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgLXRyYW5zbGF0ZS14LTQgbGc6LXRyYW5zbGF0ZS14LTEyIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGJvcmRlci0yIGJvcmRlci1bIzY1OGY0Y10gdGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCZW5lZsOtY2lvIGFudGVyaW9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnQgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0cmFuc2xhdGUteC00IGxnOnRyYW5zbGF0ZS14LTEyIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGJvcmRlci0yIGJvcmRlci1bIzY1OGY0Y10gdGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByw7N4aW1vIGJlbmVmw61jaW9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTIgbXQtOFwiPlxuICAgICAgICAgICAge2JlbmVmaXRzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RGlyZWN0aW9uKGluZGV4ID4gY3VycmVudEluZGV4ID8gMSA6IC0xKTtcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTMgaC0zIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYmctWyM2NThmNGNdIHctOCcgOiAnYmctZ3JheS0zMDAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YElyIHBhcmEgYmVuZWbDrWNpbyAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmVuZWZpdHNTbGlkZXI7XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL2hvbWUvQmVuZWZpdHNTbGlkZXIuanN4In0=