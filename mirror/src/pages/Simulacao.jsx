import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Simulacao.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Helmet } from "/node_modules/.vite/deps/react-helmet.js?v=f31a5e49";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Calculator, TrendingUp } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Slider } from "/src/components/ui/slider.jsx";
import { toast } from "/src/components/ui/use-toast.js";
const Simulacao = () => {
  _s();
  const [tipo, setTipo] = useState("imovel");
  const [valor, setValor] = useState(2e5);
  const [prazo, setPrazo] = useState(120);
  const [resultado, setResultado] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const calcularParcela = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const taxaAdmin = tipo === "imovel" ? 0.18 : tipo === "veiculo" ? 0.15 : 0.12;
      const valorTotal = valor + valor * taxaAdmin;
      const parcela = valorTotal / prazo;
      const taxaMensal = valor * taxaAdmin / prazo;
      setResultado({
        parcela: parcela.toFixed(2),
        valorTotal: valorTotal.toFixed(2),
        taxaMensal: taxaMensal.toFixed(2),
        economia: (valor * 0.3).toFixed(2)
      });
      setIsCalculating(false);
      toast({
        title: "Simulação Concluída!",
        description: "Confira os resultados abaixo."
      });
    }, 1e3);
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Simulação de Consórcio - Nova Terra" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Faça uma simulação gratuita e descubra quanto você vai pagar no consórcio Nova Terra. Sem juros, apenas taxa de administração." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Simulação de Consórcio - Nova Terra" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Faça uma simulação gratuita de consórcio." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pt-20", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-to-br from-[#658f4c] to-[#346d47] text-white py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(Calculator, { className: "w-16 h-16 mx-auto mb-6" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl lg:text-5xl font-bold mb-6", "data-edit-id": "src/pages/Simulacao.jsx:70:15", children: "Simulação de Consórcio" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/90", "data-edit-id": "src/pages/Simulacao.jsx:73:15", children: "Descubra quanto você vai pagar e comece a planejar seu futuro agora mesmo." }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxDEV(motion.div, { initial: {
            opacity: 0,
            x: -30
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.6
          }, className: "bg-white rounded-xl shadow-lg p-8", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-[#24352f] mb-6", "data-edit-id": "src/pages/Simulacao.jsx:90:19", children: "Configure Sua Simulação" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 105,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "tipo", className: "text-[#24352f] mb-2 block", "data-edit-id": "src/pages/Simulacao.jsx:96:23", children: "Tipo de Consórcio" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 111,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("select", { id: "tipo", value: tipo, onChange: (e) => setTipo(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#658f4c] transition-all duration-300", children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "imovel", children: "Imóvel" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 115,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "veiculo", children: "Veículo" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 116,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "servico", children: "Serviço" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 117,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 114,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "valor", className: "text-[#24352f] mb-2 block", "data-edit-disabled": "true", children: [
                  "Valor do Bem: ",
                  formatCurrency(valor)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 122,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Slider, { id: "valor", min: 1e4, max: 5e5, step: 5e3, value: [valor], onValueChange: (value) => setValor(value[0]), className: "mt-2" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 125,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-sm text-gray-600 mt-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:125:25", children: "R$ 10.000" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 127,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:126:25", children: "R$ 500.000" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 128,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 126,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 121,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "prazo", className: "text-[#24352f] mb-2 block", "data-edit-disabled": "true", children: [
                  "Prazo: ",
                  prazo,
                  " meses"
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Slider, { id: "prazo", min: 24, max: 180, step: 12, value: [prazo], onValueChange: (value) => setPrazo(value[0]), className: "mt-2" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 136,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-sm text-gray-600 mt-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:144:25", children: "24 meses" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 138,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:145:25", children: "180 meses" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 139,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 137,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 132,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { onClick: calcularParcela, disabled: isCalculating, className: "w-full bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300", size: "lg", "data-edit-disabled": "true", children: isCalculating ? "Calculando..." : "Calcular Parcelas" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 143,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 109,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(motion.div, { initial: {
            opacity: 0,
            x: 30
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.6,
            delay: 0.2
          }, className: "bg-white rounded-xl shadow-lg p-8", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-[#24352f] mb-6", "data-edit-id": "src/pages/Simulacao.jsx:166:19", children: "Resultado da Simulação" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 159,
              columnNumber: 19
            }, this),
            resultado ? /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#658f4c] to-[#346d47] text-white rounded-lg p-6", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm mb-2 opacity-90", "data-edit-id": "src/pages/Simulacao.jsx:173:25", children: "Parcela Mensal" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 165,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-4xl font-bold", "data-edit-disabled": "true", children: formatCurrency(resultado.parcela) }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 166,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 164,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center pb-3 border-b border-gray-200", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-gray-600", "data-edit-id": "src/pages/Simulacao.jsx:179:27", children: "Valor Total" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 171,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[#24352f]", "data-edit-disabled": "true", children: formatCurrency(resultado.valorTotal) }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 172,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 170,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center pb-3 border-b border-gray-200", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-gray-600", "data-edit-id": "src/pages/Simulacao.jsx:186:27", children: "Taxa Mensal" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 178,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[#24352f]", "data-edit-disabled": "true", children: formatCurrency(resultado.taxaMensal) }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 179,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 177,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center pb-3 border-b border-gray-200", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-gray-600", "data-edit-id": "src/pages/Simulacao.jsx:193:27", children: "Economia vs Financiamento" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 185,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-green-600", "data-edit-disabled": "true", children: formatCurrency(resultado.economia) }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 186,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 184,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 169,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { className: "text-green-600 flex-shrink-0 mt-1", size: 20 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 194,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-green-800 mb-1", "data-edit-id": "src/pages/Simulacao.jsx:204:29", children: "Excelente Escolha!" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 196,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-green-700", "data-edit-id": "src/pages/Simulacao.jsx:207:29", children: "Com o consórcio, você economiza em juros e realiza seu sonho de forma planejada." }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                    lineNumber: 199,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                  lineNumber: 195,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 193,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 192,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { asChild: true, className: "w-full bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300", size: "lg", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV("a", { href: "/contato", children: "Falar com Especialista" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 207,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 206,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 163,
              columnNumber: 32
            }, this) : /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center h-64 text-center", children: [
              /* @__PURE__ */ jsxDEV(Calculator, { className: "w-16 h-16 text-gray-300 mb-4" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 210,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500", "data-edit-id": "src/pages/Simulacao.jsx:225:23", children: 'Configure os valores e clique em "Calcular Parcelas" para ver o resultado.' }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 211,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 209,
              columnNumber: 30
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
            lineNumber: 149,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.4
        }, className: "mt-8 bg-white rounded-xl shadow-lg p-8", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-[#24352f] mb-4", "data-edit-id": "src/pages/Simulacao.jsx:239:17", children: "Informações Importantes" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
            lineNumber: 228,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#658f4c] mr-2", "data-edit-id": "src/pages/Simulacao.jsx:244:21", children: "•" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 233,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:245:21", children: "Esta é uma simulação aproximada. Valores podem variar conforme o grupo escolhido." }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 234,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 232,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#658f4c] mr-2", "data-edit-id": "src/pages/Simulacao.jsx:248:21", children: "•" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 237,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:249:21", children: "Não há cobrança de juros, apenas taxa de administração." }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 238,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 236,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#658f4c] mr-2", "data-edit-id": "src/pages/Simulacao.jsx:252:21", children: "•" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 241,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:253:21", children: "Você pode ser contemplado logo no primeiro mês através de sorteio ou lance." }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 242,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 240,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#658f4c] mr-2", "data-edit-id": "src/pages/Simulacao.jsx:256:21", children: "•" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 245,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/pages/Simulacao.jsx:257:21", children: "Entre em contato para uma proposta personalizada." }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
                lineNumber: 246,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
              lineNumber: 244,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
            lineNumber: 231,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
          lineNumber: 218,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
};
_s(Simulacao, "pVnTg6T88ro1szWwciv7ANvRrtE=");
_c = Simulacao;
export default Simulacao;
var _c;
$RefreshReg$(_c, "Simulacao");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Simulacao.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUdBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFpQkE7QUFBQSxhQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMkJBO0FBQUEsV0FsTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW1MQSxLQXBMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcUxBLEtBdExGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF1TEE7QUFBQSxTQTNNRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNE1BO0FBQUEsT0FwTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXFOQTtBQUVKO0FBQUNsQyxHQS9QS0QsV0FBUztBQUFBb0MsS0FBVHBDO0FBaVFOLGVBQWVBO0FBQVMsSUFBQW9DO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVsbWV0IiwibW90aW9uIiwiQ2FsY3VsYXRvciIsIlRyZW5kaW5nVXAiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwiU2xpZGVyIiwidG9hc3QiLCJTaW11bGFjYW8iLCJfcyIsInRpcG8iLCJzZXRUaXBvIiwidmFsb3IiLCJzZXRWYWxvciIsInByYXpvIiwic2V0UHJhem8iLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJpc0NhbGN1bGF0aW5nIiwic2V0SXNDYWxjdWxhdGluZyIsImNhbGN1bGFyUGFyY2VsYSIsInNldFRpbWVvdXQiLCJ0YXhhQWRtaW4iLCJ2YWxvclRvdGFsIiwicGFyY2VsYSIsInRheGFNZW5zYWwiLCJ0b0ZpeGVkIiwiZWNvbm9taWEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZm9ybWF0Q3VycmVuY3kiLCJ2YWx1ZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Iiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsIngiLCJlIiwidGFyZ2V0IiwiZGVsYXkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9TaW11bGFjYW8uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQ2FsY3VsYXRvciwgVHJlbmRpbmdVcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2xhYmVsJztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9zbGlkZXInO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0JztcblxuY29uc3QgU2ltdWxhY2FvID0gKCkgPT4ge1xuICBjb25zdCBbdGlwbywgc2V0VGlwb10gPSB1c2VTdGF0ZSgnaW1vdmVsJyk7XG4gIGNvbnN0IFt2YWxvciwgc2V0VmFsb3JdID0gdXNlU3RhdGUoMjAwMDAwKTtcbiAgY29uc3QgW3ByYXpvLCBzZXRQcmF6b10gPSB1c2VTdGF0ZSgxMjApO1xuICBjb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0NhbGN1bGF0aW5nLCBzZXRJc0NhbGN1bGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjYWxjdWxhclBhcmNlbGEgPSAoKSA9PiB7XG4gICAgc2V0SXNDYWxjdWxhdGluZyh0cnVlKTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRheGFBZG1pbiA9IHRpcG8gPT09ICdpbW92ZWwnID8gMC4xOCA6IHRpcG8gPT09ICd2ZWljdWxvJyA/IDAuMTUgOiAwLjEyO1xuICAgICAgY29uc3QgdmFsb3JUb3RhbCA9IHZhbG9yICsgKHZhbG9yICogdGF4YUFkbWluKTtcbiAgICAgIGNvbnN0IHBhcmNlbGEgPSB2YWxvclRvdGFsIC8gcHJhem87XG4gICAgICBjb25zdCB0YXhhTWVuc2FsID0gKHZhbG9yICogdGF4YUFkbWluKSAvIHByYXpvO1xuXG4gICAgICBzZXRSZXN1bHRhZG8oe1xuICAgICAgICBwYXJjZWxhOiBwYXJjZWxhLnRvRml4ZWQoMiksXG4gICAgICAgIHZhbG9yVG90YWw6IHZhbG9yVG90YWwudG9GaXhlZCgyKSxcbiAgICAgICAgdGF4YU1lbnNhbDogdGF4YU1lbnNhbC50b0ZpeGVkKDIpLFxuICAgICAgICBlY29ub21pYTogKHZhbG9yICogMC4zKS50b0ZpeGVkKDIpXG4gICAgICB9KTtcblxuICAgICAgc2V0SXNDYWxjdWxhdGluZyhmYWxzZSk7XG4gICAgICBcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiU2ltdWxhw6fDo28gQ29uY2x1w61kYSFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29uZmlyYSBvcyByZXN1bHRhZG9zIGFiYWl4by5cIlxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcbiAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgY3VycmVuY3k6ICdCUkwnXG4gICAgfSkuZm9ybWF0KHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+U2ltdWxhw6fDo28gZGUgQ29uc8OzcmNpbyAtIE5vdmEgVGVycmE8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRmHDp2EgdW1hIHNpbXVsYcOnw6NvIGdyYXR1aXRhIGUgZGVzY3VicmEgcXVhbnRvIHZvY8OqIHZhaSBwYWdhciBubyBjb25zw7NyY2lvIE5vdmEgVGVycmEuIFNlbSBqdXJvcywgYXBlbmFzIHRheGEgZGUgYWRtaW5pc3RyYcOnw6NvLlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiU2ltdWxhw6fDo28gZGUgQ29uc8OzcmNpbyAtIE5vdmEgVGVycmFcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZhw6dhIHVtYSBzaW11bGHDp8OjbyBncmF0dWl0YSBkZSBjb25zw7NyY2lvLlwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjNjU4ZjRjXSB0by1bIzM0NmQ0N10gdGV4dC13aGl0ZSBweS0yMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhbGN1bGF0b3IgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG14LWF1dG8gbWItNlwiIC8+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgbWItNlwiPlxuICAgICAgICAgICAgICAgIFNpbXVsYcOnw6NvIGRlIENvbnPDs3JjaW9cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlLzkwXCI+XG4gICAgICAgICAgICAgICAgRGVzY3VicmEgcXVhbnRvIHZvY8OqIHZhaSBwYWdhciBlIGNvbWVjZSBhIHBsYW5lamFyIHNldSBmdXR1cm8gYWdvcmEgbWVzbW8uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTMwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgcC04XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtWyMyNDM1MmZdIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29uZmlndXJlIFN1YSBTaW11bGHDp8Ojb1xuICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInRpcG9cIiBjbGFzc05hbWU9XCJ0ZXh0LVsjMjQzNTJmXSBtYi0yIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRlIENvbnPDs3JjaW9cbiAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGlwb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGlwb31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGlwbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyM2NThmNGNdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImltb3ZlbFwiPkltw7N2ZWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2ZWljdWxvXCI+VmXDrWN1bG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXJ2aWNvXCI+U2VydmnDp288L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInZhbG9yXCIgY2xhc3NOYW1lPVwidGV4dC1bIzI0MzUyZl0gbWItMiBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsb3IgZG8gQmVtOiB7Zm9ybWF0Q3VycmVuY3kodmFsb3IpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezEwMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXs1MDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1t2YWxvcl19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldFZhbG9yKHZhbHVlWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS02MDAgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UiQgMTAuMDAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UiQgNTAwLjAwMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInByYXpvXCIgY2xhc3NOYW1lPVwidGV4dC1bIzI0MzUyZl0gbWItMiBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJhem86IHtwcmF6b30gbWVzZXNcbiAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJhem9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTgwfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17W3ByYXpvXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UHJhem8odmFsdWVbMF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1ncmF5LTYwMCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yNCBtZXNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE4MCBtZXNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbGN1bGFyUGFyY2VsYX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDYWxjdWxhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyM2NThmNGNdIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNDYWxjdWxhdGluZyA/ICdDYWxjdWxhbmRvLi4uJyA6ICdDYWxjdWxhciBQYXJjZWxhcyd9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMzAgfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42LCBkZWxheTogMC4yIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLThcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzI0MzUyZl0gbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICBSZXN1bHRhZG8gZGEgU2ltdWxhw6fDo29cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHRhZG8gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjNjU4ZjRjXSB0by1bIzM0NmQ0N10gdGV4dC13aGl0ZSByb3VuZGVkLWxnIHAtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yIG9wYWNpdHktOTBcIj5QYXJjZWxhIE1lbnNhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPntmb3JtYXRDdXJyZW5jeShyZXN1bHRhZG8ucGFyY2VsYSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHBiLTMgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5WYWxvciBUb3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMjQzNTJmXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShyZXN1bHRhZG8udmFsb3JUb3RhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwYi0zIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+VGF4YSBNZW5zYWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzI0MzUyZl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocmVzdWx0YWRvLnRheGFNZW5zYWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcGItMyBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkVjb25vbWlhIHZzIEZpbmFuY2lhbWVudG88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmVlbi02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocmVzdWx0YWRvLmVjb25vbWlhKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwIHJvdW5kZWQtbGcgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwIGZsZXgtc2hyaW5rLTAgbXQtMVwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmVlbi04MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhjZWxlbnRlIEVzY29saGEhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbSBvIGNvbnPDs3JjaW8sIHZvY8OqIGVjb25vbWl6YSBlbSBqdXJvcyBlIHJlYWxpemEgc2V1IHNvbmhvIGRlIGZvcm1hIHBsYW5lamFkYS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyM2NThmNGNdIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnRhdG9cIj5GYWxhciBjb20gRXNwZWNpYWxpc3RhPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02NCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cInctMTYgaC0xNiB0ZXh0LWdyYXktMzAwIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyZSBvcyB2YWxvcmVzIGUgY2xpcXVlIGVtIFwiQ2FsY3VsYXIgUGFyY2VsYXNcIiBwYXJhIHZlciBvIHJlc3VsdGFkby5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiwgZGVsYXk6IDAuNCB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgcC04XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMjQzNTJmXSBtYi00XCI+XG4gICAgICAgICAgICAgICAgICBJbmZvcm1hw6fDtWVzIEltcG9ydGFudGVzXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2NThmNGNdIG1yLTJcIj7igKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVzdGEgw6kgdW1hIHNpbXVsYcOnw6NvIGFwcm94aW1hZGEuIFZhbG9yZXMgcG9kZW0gdmFyaWFyIGNvbmZvcm1lIG8gZ3J1cG8gZXNjb2xoaWRvLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjNjU4ZjRjXSBtci0yXCI+4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ow6NvIGjDoSBjb2JyYW7Dp2EgZGUganVyb3MsIGFwZW5hcyB0YXhhIGRlIGFkbWluaXN0cmHDp8Ojby48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzY1OGY0Y10gbXItMlwiPuKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vm9jw6ogcG9kZSBzZXIgY29udGVtcGxhZG8gbG9nbyBubyBwcmltZWlybyBtw6pzIGF0cmF2w6lzIGRlIHNvcnRlaW8gb3UgbGFuY2UuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2NThmNGNdIG1yLTJcIj7igKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVudHJlIGVtIGNvbnRhdG8gcGFyYSB1bWEgcHJvcG9zdGEgcGVyc29uYWxpemFkYS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXVsYWNhbztcbiJdLCJmaWxlIjoiL2hvbWUvdTM1NDU1MzUyOS93ZWJzaXRlcy9wUE5hVVoxUVkvcHVibGljX2h0bWwvc3JjL3BhZ2VzL1NpbXVsYWNhby5qc3gifQ==