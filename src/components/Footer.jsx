import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=f31a5e49";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { toast } from "/src/components/ui/use-toast.js";
const Footer = () => {
  _s();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sucesso!",
        description: "Você foi inscrito em nossa newsletter."
      });
      setEmail("");
    }, 1500);
  };
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-[#24352f] text-white", role: "contentinfo", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2 mb-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-[#658f4c] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-white font-bold text-xl", "data-edit-id": "src/components/Footer.jsx:42:17", children: "NT" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold", "data-edit-id": "src/components/Footer.jsx:44:15", children: "Nova Terra Consórcio" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-300 mb-4", "data-edit-id": "src/components/Footer.jsx:46:13", children: "Realizando sonhos através de consórcios confiáveis e transparentes." }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", className: "w-9 h-9 bg-[#658f4c] rounded-full flex items-center justify-center hover:bg-[#346d47] transition-colors duration-300", "aria-label": "Facebook", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Facebook, { size: 18 }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "w-9 h-9 bg-[#658f4c] rounded-full flex items-center justify-center hover:bg-[#346d47] transition-colors duration-300", "aria-label": "Instagram", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Instagram, { size: 18 }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "w-9 h-9 bg-[#658f4c] rounded-full flex items-center justify-center hover:bg-[#346d47] transition-colors duration-300", "aria-label": "LinkedIn", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Linkedin, { size: 18 }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 70,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold mb-4 block", "data-edit-id": "src/components/Footer.jsx:81:13", children: "Links Rápidos" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("nav", { className: "space-y-2", "aria-label": "Footer navigation", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "block text-sm text-gray-300 hover:text-[#658f4c] transition-colors duration-300", children: "Início" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/como-funciona", className: "block text-sm text-gray-300 hover:text-[#658f4c] transition-colors duration-300", children: "Como Funciona" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/simulacao", className: "block text-sm text-gray-300 hover:text-[#658f4c] transition-colors duration-300", children: "Simulação" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/sobre-nos", className: "block text-sm text-gray-300 hover:text-[#658f4c] transition-colors duration-300", children: "Sobre Nós" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "block text-sm text-gray-300 hover:text-[#658f4c] transition-colors duration-300", children: "Blog" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/contato", className: "block text-sm text-gray-300 hover:text-[#658f4c] transition-colors duration-300", children: "Contato" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 93,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold mb-4 block", "data-edit-id": "src/components/Footer.jsx:105:13", children: "Contato" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV(Phone, { size: 18, className: "text-[#658f4c] mt-1 flex-shrink-0" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
              lineNumber: 103,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-300", "data-edit-id": "src/components/Footer.jsx:109:17", children: "(11) 9999-9999" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
              lineNumber: 104,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV(Mail, { size: 18, className: "text-[#658f4c] mt-1 flex-shrink-0" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
              lineNumber: 107,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-300", "data-edit-id": "src/components/Footer.jsx:113:17", children: "contato@novaterra.com.br" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
              lineNumber: 108,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { size: 18, className: "text-[#658f4c] mt-1 flex-shrink-0" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
              lineNumber: 111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-300", "data-edit-id": "src/components/Footer.jsx:117:17", children: "Av. Paulista, 1000 - São Paulo, SP" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold mb-4 block", "data-edit-id": "src/components/Footer.jsx:123:13", children: "Newsletter" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-300 mb-4", "data-edit-id": "src/components/Footer.jsx:124:13", children: "Receba novidades e dicas sobre consórcios." }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handleNewsletterSubmit, className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV(Input, { type: "email", placeholder: "Seu e-mail", value: email, onChange: (e) => setEmail(e.target.value), className: "bg-white/10 border-white/20 text-white placeholder:text-gray-400", "aria-label": "E-mail para newsletter" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { type: "submit", disabled: isLoading, className: "w-full bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300", "data-edit-disabled": "true", children: isLoading ? "Enviando..." : "Inscrever-se" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "border-t border-white/10 mt-8 pt-8 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400", "data-edit-id": "src/components/Footer.jsx:148:11", children: "© 2025 Nova Terra Consórcio. Todos os direitos reservados." }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
      lineNumber: 131,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_s(Footer, "7QVCGsm+XhRzAVbq7+X8gVhTQw8=");
_c = Footer;
export default Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/components/Footer.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXNCQTtBQUFBLFNBMUdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EyR0E7QUFBQSxJQUVBLHVCQUFDLFNBQUksV0FBVSxrREFDYixpQ0FBQyxPQUFFLFdBQVUseUJBQXVCLDhIQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUE7QUFBQSxPQWxIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUhBLEtBcEhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxSEE7QUFFSjtBQUFDSCxHQWxKS0QsUUFBTTtBQUFBZSxLQUFOZjtBQW9KTixlQUFlQTtBQUFNLElBQUFlO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiTGlua2VkaW4iLCJNYWlsIiwiUGhvbmUiLCJNYXBQaW4iLCJCdXR0b24iLCJJbnB1dCIsInRvYXN0IiwiRm9vdGVyIiwiX3MiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlTmV3c2xldHRlclN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YXJpYW50Iiwic2V0VGltZW91dCIsInRhcmdldCIsInZhbHVlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9Gb290ZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRmFjZWJvb2ssIEluc3RhZ3JhbSwgTGlua2VkaW4sIE1haWwsIFBob25lLCBNYXBQaW4gfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS91c2UtdG9hc3QnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU5ld3NsZXR0ZXJTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIkVycm9cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUG9yIGZhdm9yLCBpbnNpcmEgdW0gZS1tYWlsIHbDoWxpZG8uXCIsXG4gICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiU3VjZXNzbyFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVm9jw6ogZm9pIGluc2NyaXRvIGVtIG5vc3NhIG5ld3NsZXR0ZXIuXCJcbiAgICAgIH0pO1xuICAgICAgc2V0RW1haWwoJycpO1xuICAgIH0sIDE1MDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1bIzI0MzUyZl0gdGV4dC13aGl0ZVwiIHJvbGU9XCJjb250ZW50aW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtOFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBtYi00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLVsjNjU4ZjRjXSByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bFwiPk5UPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5Ob3ZhIFRlcnJhIENvbnPDs3JjaW88L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTMwMCBtYi00XCI+XG4gICAgICAgICAgICAgIFJlYWxpemFuZG8gc29uaG9zIGF0cmF2w6lzIGRlIGNvbnPDs3JjaW9zIGNvbmZpw6F2ZWlzIGUgdHJhbnNwYXJlbnRlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tXCIgXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy05IGgtOSBiZy1bIzY1OGY0Y10gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGYWNlYm9va1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2sgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiIFxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOSBoLTkgYmctWyM2NThmNGNdIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1bIzM0NmQ0N10gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiSW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnN0YWdyYW0gc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tXCIgXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy05IGgtOSBiZy1bIzY1OGY0Y10gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMaW5rZWRJblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlua2VkaW4gc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi00IGJsb2NrXCI+TGlua3MgUsOhcGlkb3M8L3NwYW4+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIGFyaWEtbGFiZWw9XCJGb290ZXIgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgSW7DrWNpb1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbW8tZnVuY2lvbmFcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgQ29tbyBGdW5jaW9uYVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpbXVsYWNhb1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LVsjNjU4ZjRjXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICBTaW11bGHDp8Ojb1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NvYnJlLW5vc1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LVsjNjU4ZjRjXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICBTb2JyZSBOw7NzXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYmxvZ1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LVsjNjU4ZjRjXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGF0b1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LVsjNjU4ZjRjXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICBDb250YXRvXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi00IGJsb2NrXCI+Q29udGF0bzwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICA8UGhvbmUgc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRleHQtWyM2NThmNGNdIG10LTEgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwXCI+KDExKSA5OTk5LTk5OTk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICAgICAgPE1haWwgc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRleHQtWyM2NThmNGNdIG10LTEgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwXCI+Y29udGF0b0Bub3ZhdGVycmEuY29tLmJyPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgIDxNYXBQaW4gc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRleHQtWyM2NThmNGNdIG10LTEgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwXCI+QXYuIFBhdWxpc3RhLCAxMDAwIC0gU8OjbyBQYXVsbywgU1A8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTQgYmxvY2tcIj5OZXdzbGV0dGVyPC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwIG1iLTRcIj5cbiAgICAgICAgICAgICAgUmVjZWJhIG5vdmlkYWRlcyBlIGRpY2FzIHNvYnJlIGNvbnPDs3JjaW9zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld3NsZXR0ZXJTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2V1IGUtbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlLzEwIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFLW1haWwgcGFyYSBuZXdzbGV0dGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzY1OGY0Y10gaG92ZXI6YmctWyMzNDZkNDddIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ0VudmlhbmRvLi4uJyA6ICdJbnNjcmV2ZXItc2UnfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvMTAgbXQtOCBwdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICDCqSAyMDI1IE5vdmEgVGVycmEgQ29uc8OzcmNpby4gVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qc3gifQ==