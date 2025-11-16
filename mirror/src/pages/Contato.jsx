import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Contato.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Helmet } from "/node_modules/.vite/deps/react-helmet.js?v=f31a5e49";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Mail, Phone, MapPin, Clock, Send } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { toast } from "/src/components/ui/use-toast.js";
const Contato = () => {
  _s();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    }
    if (!formData.assunto.trim()) {
      newErrors.assunto = "Assunto é obrigatório";
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os erros antes de enviar.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve."
      });
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
      });
      setErrors({});
    }, 1500);
  };
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Contato - Nova Terra Consórcio" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Entre em contato com a Nova Terra Consórcio. Estamos prontos para ajudá-lo a realizar seus sonhos." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Contato - Nova Terra Consórcio" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Entre em contato conosco." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
      lineNumber: 105,
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
        /* @__PURE__ */ jsxDEV(Mail, { className: "w-16 h-16 mx-auto mb-6" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl lg:text-5xl font-bold mb-6", "data-edit-id": "src/pages/Contato.jsx:110:15", children: "Entre em Contato" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/90", "data-edit-id": "src/pages/Contato.jsx:113:15", children: "Estamos prontos para ajudá-lo a realizar seus sonhos" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
          lineNumber: 128,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 115,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 114,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "lg:col-span-2 bg-white rounded-xl shadow-lg p-8", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-[#24352f] mb-6", "data-edit-id": "src/pages/Contato.jsx:129:17", children: "Envie sua Mensagem" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "nome", className: "text-[#24352f] mb-2 block", "data-edit-id": "src/pages/Contato.jsx:136:23", children: "Nome Completo *" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 154,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Input, { id: "nome", name: "nome", value: formData.nome, onChange: handleChange, className: errors.nome ? "border-red-500" : "", "aria-invalid": !!errors.nome, "aria-describedby": errors.nome ? "nome-error" : void 0 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 157,
                  columnNumber: 23
                }, this),
                errors.nome && /* @__PURE__ */ jsxDEV("p", { id: "nome-error", className: "text-red-500 text-sm mt-1", "data-edit-disabled": "true", children: errors.nome }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 158,
                  columnNumber: 39
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 153,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "email", className: "text-[#24352f] mb-2 block", "data-edit-id": "src/pages/Contato.jsx:154:23", children: "E-mail *" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 162,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleChange, className: errors.email ? "border-red-500" : "", "aria-invalid": !!errors.email, "aria-describedby": errors.email ? "email-error" : void 0 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 165,
                  columnNumber: 23
                }, this),
                errors.email && /* @__PURE__ */ jsxDEV("p", { id: "email-error", className: "text-red-500 text-sm mt-1", "data-edit-disabled": "true", children: errors.email }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 166,
                  columnNumber: 40
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 161,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "telefone", className: "text-[#24352f] mb-2 block", "data-edit-id": "src/pages/Contato.jsx:175:23", children: "Telefone *" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 172,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Input, { id: "telefone", name: "telefone", type: "tel", value: formData.telefone, onChange: handleChange, className: errors.telefone ? "border-red-500" : "", "aria-invalid": !!errors.telefone, "aria-describedby": errors.telefone ? "telefone-error" : void 0 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 175,
                  columnNumber: 23
                }, this),
                errors.telefone && /* @__PURE__ */ jsxDEV("p", { id: "telefone-error", className: "text-red-500 text-sm mt-1", "data-edit-disabled": "true", children: errors.telefone }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 176,
                  columnNumber: 43
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 171,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(Label, { htmlFor: "assunto", className: "text-[#24352f] mb-2 block", "data-edit-id": "src/pages/Contato.jsx:194:23", children: "Assunto *" }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 180,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("select", { id: "assunto", name: "assunto", value: formData.assunto, onChange: handleChange, className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#658f4c] transition-all duration-300 ${errors.assunto ? "border-red-500" : "border-gray-300"}`, "aria-invalid": !!errors.assunto, "aria-describedby": errors.assunto ? "assunto-error" : void 0, children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "", children: "Selecione..." }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 184,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "simulacao", children: "Simulação" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 185,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "duvidas", children: "Dúvidas" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 186,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "adesao", children: "Adesão" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 187,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "outros", children: "Outros" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 188,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 183,
                  columnNumber: 23
                }, this),
                errors.assunto && /* @__PURE__ */ jsxDEV("p", { id: "assunto-error", className: "text-red-500 text-sm mt-1", "data-edit-disabled": "true", children: errors.assunto }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 190,
                  columnNumber: 42
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 179,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 170,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV(Label, { htmlFor: "mensagem", className: "text-[#24352f] mb-2 block", "data-edit-id": "src/pages/Contato.jsx:221:21", children: "Mensagem *" }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 195,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(Textarea, { id: "mensagem", name: "mensagem", rows: 6, value: formData.mensagem, onChange: handleChange, className: errors.mensagem ? "border-red-500" : "", "aria-invalid": !!errors.mensagem, "aria-describedby": errors.mensagem ? "mensagem-error" : void 0 }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 198,
                columnNumber: 21
              }, this),
              errors.mensagem && /* @__PURE__ */ jsxDEV("p", { id: "mensagem-error", className: "text-red-500 text-sm mt-1", "data-edit-disabled": "true", children: errors.mensagem }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 199,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 194,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { type: "submit", disabled: isSubmitting, className: "w-full bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300", size: "lg", "data-edit-disabled": "true", children: isSubmitting ? "Enviando..." : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Send, { className: "mr-2", size: 20 }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 204,
                columnNumber: 25
              }, this),
              "Enviar Mensagem"
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 203,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 202,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
            lineNumber: 151,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
          lineNumber: 138,
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
          delay: 0.2
        }, className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-[#24352f] mb-4", "data-edit-id": "src/pages/Contato.jsx:264:19", children: "Informações de Contato" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 222,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxDEV(Phone, { className: "text-[#658f4c] flex-shrink-0 mt-1", size: 20 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 227,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#24352f]", "data-edit-id": "src/pages/Contato.jsx:271:25", children: "Telefone" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 229,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", "data-edit-id": "src/pages/Contato.jsx:272:25", children: "(11) 9999-9999" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 230,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 228,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 226,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxDEV(Mail, { className: "text-[#658f4c] flex-shrink-0 mt-1", size: 20 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 235,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#24352f]", "data-edit-id": "src/pages/Contato.jsx:279:25", children: "E-mail" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 237,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", "data-edit-id": "src/pages/Contato.jsx:280:25", children: "contato@novaterra.com.br" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 238,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 236,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 234,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxDEV(MapPin, { className: "text-[#658f4c] flex-shrink-0 mt-1", size: 20 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 243,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#24352f]", "data-edit-id": "src/pages/Contato.jsx:287:25", children: "Endereço" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 245,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", "data-edit-disabled": "true", children: [
                    "Av. Paulista, 1000",
                    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                      lineNumber: 246,
                      columnNumber: 98
                    }, this),
                    "São Paulo, SP"
                  ] }, void 0, true, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 246,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 242,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxDEV(Clock, { className: "text-[#658f4c] flex-shrink-0 mt-1", size: 20 }, void 0, false, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 251,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#24352f]", "data-edit-id": "src/pages/Contato.jsx:295:25", children: "Horário" }, void 0, false, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 253,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", "data-edit-disabled": "true", children: [
                    "Seg - Sex: 9h às 18h",
                    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                      lineNumber: 254,
                      columnNumber: 100
                    }, this),
                    "Sáb: 9h às 13h"
                  ] }, void 0, true, {
                    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                    lineNumber: 254,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                  lineNumber: 252,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
                lineNumber: 250,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 225,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
            lineNumber: 221,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#658f4c] to-[#346d47] text-white rounded-xl shadow-lg p-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-3", "data-edit-id": "src/pages/Contato.jsx:303:19", children: "Atendimento Rápido" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 261,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white/90 mb-4", "data-edit-id": "src/pages/Contato.jsx:306:19", children: "Precisa de ajuda imediata? Fale conosco pelo WhatsApp!" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 264,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, className: "w-full bg-white text-[#658f4c] hover:bg-gray-100 transition-all duration-300", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV("a", { href: "https://wa.me/5511999999999", target: "_blank", rel: "noopener noreferrer", children: "Abrir WhatsApp" }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 268,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
              lineNumber: 267,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
            lineNumber: 260,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
          lineNumber: 211,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 137,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 136,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
};
_s(Contato, "FbqkoDBW3owhsj0UqWTDiQOQVr0=");
_c = Contato;
export default Contato;
var _c;
$RefreshReg$(_c, "Contato");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Contato.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBNkZRLFNBMEpjLFVBMUpkOzs7Ozs7Ozs7Ozs7Ozs7OztBQTVGUixPQUFPQSxTQUFTQyxnQkFBZ0I7QUFDaEMsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLE1BQU1DLE9BQU9DLFFBQVFDLE9BQU9DLFlBQVk7QUFDakQsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxhQUFhO0FBQ3RCLFNBQVNDLGFBQWE7QUFDdEIsU0FBU0MsZ0JBQWdCO0FBQ3pCLFNBQVNDLGFBQWE7QUFFdEIsTUFBTUMsVUFBVUEsTUFBTTtBQUFBQyxLQUFBO0FBQ3BCLFFBQU0sQ0FBQ0MsVUFBVUMsV0FBVyxJQUFJaEIsU0FBUztBQUFBLElBQ3ZDaUIsTUFBTTtBQUFBLElBQ05DLE9BQU87QUFBQSxJQUNQQyxVQUFVO0FBQUEsSUFDVkMsU0FBUztBQUFBLElBQ1RDLFVBQVU7QUFBQSxFQUNaLENBQUM7QUFDRCxRQUFNLENBQUNDLGNBQWNDLGVBQWUsSUFBSXZCLFNBQVMsS0FBSztBQUN0RCxRQUFNLENBQUN3QixRQUFRQyxTQUFTLElBQUl6QixTQUFTLENBQUMsQ0FBQztBQUV2QyxRQUFNMEIsZUFBZUEsTUFBTTtBQUN6QixVQUFNQyxZQUFZLENBQUM7QUFFbkIsUUFBSSxDQUFDWixTQUFTRSxLQUFLVyxLQUFLLEdBQUc7QUFDekJELGdCQUFVVixPQUFPO0FBQUEsSUFDbkI7QUFFQSxRQUFJLENBQUNGLFNBQVNHLE1BQU1VLEtBQUssR0FBRztBQUMxQkQsZ0JBQVVULFFBQVE7QUFBQSxJQUNwQixXQUFXLENBQUMsZUFBZVcsS0FBS2QsU0FBU0csS0FBSyxHQUFHO0FBQy9DUyxnQkFBVVQsUUFBUTtBQUFBLElBQ3BCO0FBRUEsUUFBSSxDQUFDSCxTQUFTSSxTQUFTUyxLQUFLLEdBQUc7QUFDN0JELGdCQUFVUixXQUFXO0FBQUEsSUFDdkI7QUFFQSxRQUFJLENBQUNKLFNBQVNLLFFBQVFRLEtBQUssR0FBRztBQUM1QkQsZ0JBQVVQLFVBQVU7QUFBQSxJQUN0QjtBQUVBLFFBQUksQ0FBQ0wsU0FBU00sU0FBU08sS0FBSyxHQUFHO0FBQzdCRCxnQkFBVU4sV0FBVztBQUFBLElBQ3ZCO0FBRUFJLGNBQVVFLFNBQVM7QUFDbkIsV0FBT0csT0FBT0MsS0FBS0osU0FBUyxFQUFFSyxXQUFXO0FBQUEsRUFDM0M7QUFFQSxRQUFNQyxlQUFnQkMsT0FBTTtBQUMxQkEsTUFBRUMsZUFBZTtBQUVqQixRQUFJLENBQUNULGFBQWEsR0FBRztBQUNuQmQsWUFBTTtBQUFBLFFBQ0p3QixPQUFPO0FBQUEsUUFDUEMsYUFBYTtBQUFBLFFBQ2JDLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFDRDtBQUFBLElBQ0Y7QUFFQWYsb0JBQWdCLElBQUk7QUFFcEJnQixlQUFXLE1BQU07QUFDZmhCLHNCQUFnQixLQUFLO0FBQ3JCWCxZQUFNO0FBQUEsUUFDSndCLE9BQU87QUFBQSxRQUNQQyxhQUFhO0FBQUEsTUFDZixDQUFDO0FBQ0RyQixrQkFBWTtBQUFBLFFBQ1ZDLE1BQU07QUFBQSxRQUNOQyxPQUFPO0FBQUEsUUFDUEMsVUFBVTtBQUFBLFFBQ1ZDLFNBQVM7QUFBQSxRQUNUQyxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQ0RJLGdCQUFVLENBQUMsQ0FBQztBQUFBLElBQ2QsR0FBRyxJQUFJO0FBQUEsRUFDVDtBQUVBLFFBQU1lLGVBQWdCTixPQUFNO0FBQzFCLFVBQU07QUFBQSxNQUFFTztBQUFBQSxNQUFNQztBQUFBQSxJQUFNLElBQUlSLEVBQUVTO0FBQzFCM0IsZ0JBQVk0QixXQUFTO0FBQUEsTUFBRSxHQUFHQTtBQUFBQSxNQUFNLENBQUNILElBQUksR0FBR0M7QUFBQUEsSUFBTSxFQUFFO0FBQ2hELFFBQUlsQixPQUFPaUIsSUFBSSxHQUFHO0FBQ2hCaEIsZ0JBQVVtQixXQUFTO0FBQUEsUUFBRSxHQUFHQTtBQUFBQSxRQUFNLENBQUNILElBQUksR0FBRztBQUFBLE1BQUcsRUFBRTtBQUFBLElBQzdDO0FBQUEsRUFDRjtBQUVBLFNBQ0UsbUNBQ0U7QUFBQSwyQkFBQyxVQUNDO0FBQUEsNkJBQUMsV0FBTSw4Q0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXFDO0FBQUEsTUFDckMsdUJBQUMsVUFBSyxNQUFLLGVBQWMsU0FBUSx3R0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFxSTtBQUFBLE1BQ3JJLHVCQUFDLFVBQUssVUFBUyxZQUFXLFNBQVEsb0NBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBa0U7QUFBQSxNQUNsRSx1QkFBQyxVQUFLLFVBQVMsa0JBQWlCLFNBQVEsK0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBbUU7QUFBQSxTQUpyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0E7QUFBQSxJQUVBLHVCQUFDLFNBQUksV0FBVSxTQUNiO0FBQUEsNkJBQUMsYUFBUSxXQUFVLGtFQUNqQixpQ0FBQyxTQUFJLFdBQVUsMEJBQ2IsaUNBQUMsT0FBTyxLQUFQLEVBQ0MsU0FBUztBQUFBLFFBQUVJLFNBQVM7QUFBQSxRQUFHQyxHQUFHO0FBQUEsTUFBRyxHQUM3QixTQUFTO0FBQUEsUUFBRUQsU0FBUztBQUFBLFFBQUdDLEdBQUc7QUFBQSxNQUFFLEdBQzVCLFlBQVk7QUFBQSxRQUFFQyxVQUFVO0FBQUEsTUFBSSxHQUM1QixXQUFVLGlDQUVWO0FBQUEsK0JBQUMsUUFBSyxXQUFVLDRCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdDO0FBQUEsUUFDeEMsdUJBQUMsUUFBRyxXQUFVLHVDQUFxQyxnRkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxPQUFFLFdBQVUseUJBQXVCLG9IQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxXQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhQSxLQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFlQSxLQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaUJBO0FBQUEsTUFFQSx1QkFBQyxhQUFRLFdBQVUsb0JBQ2pCLGlDQUFDLFNBQUksV0FBVSwwQkFDYixpQ0FBQyxTQUFJLFdBQVUsK0NBQ2I7QUFBQSwrQkFBQyxPQUFPLEtBQVAsRUFDQyxTQUFTO0FBQUEsVUFBRUYsU0FBUztBQUFBLFVBQUdDLEdBQUc7QUFBQSxRQUFHLEdBQzdCLFNBQVM7QUFBQSxVQUFFRCxTQUFTO0FBQUEsVUFBR0MsR0FBRztBQUFBLFFBQUUsR0FDNUIsWUFBWTtBQUFBLFVBQUVDLFVBQVU7QUFBQSxRQUFJLEdBQzVCLFdBQVUsbURBRVY7QUFBQSxpQ0FBQyxRQUFHLFdBQVUsMENBQXdDLGtGQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsVUFFQSx1QkFBQyxVQUFLLFVBQVVkLGNBQWMsV0FBVSxhQUN0QztBQUFBLG1DQUFDLFNBQUksV0FBVSw2QkFDYjtBQUFBLHFDQUFDLFNBQ0M7QUFBQSx1Q0FBQyxTQUFNLFNBQVEsUUFBTyxXQUFVLDZCQUEyQiwrRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLGdCQUNBLHVCQUFDLFNBQ0MsSUFBRyxRQUNILE1BQUssUUFDTCxPQUFPbEIsU0FBU0UsTUFDaEIsVUFBVXVCLGNBQ1YsV0FBV2hCLE9BQU9QLE9BQU8sbUJBQW1CLElBQzVDLGdCQUFjLENBQUMsQ0FBQ08sT0FBT1AsTUFDdkIsb0JBQWtCTyxPQUFPUCxPQUFPLGVBQWUrQixVQVBqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU8yRDtBQUFBLGdCQUUxRHhCLE9BQU9QLFFBQ04sdUJBQUMsT0FBRSxJQUFHLGNBQWEsV0FBVSw2QkFBMkIsOEJBQUVPLGlCQUFPUCxRQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFzRTtBQUFBLG1CQWQxRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWdCQTtBQUFBLGNBRUEsdUJBQUMsU0FDQztBQUFBLHVDQUFDLFNBQU0sU0FBUSxTQUFRLFdBQVUsNkJBQTJCLHdFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVBO0FBQUEsZ0JBQ0EsdUJBQUMsU0FDQyxJQUFHLFNBQ0gsTUFBSyxTQUNMLE1BQUssU0FDTCxPQUFPRixTQUFTRyxPQUNoQixVQUFVc0IsY0FDVixXQUFXaEIsT0FBT04sUUFBUSxtQkFBbUIsSUFDN0MsZ0JBQWMsQ0FBQyxDQUFDTSxPQUFPTixPQUN2QixvQkFBa0JNLE9BQU9OLFFBQVEsZ0JBQWdCOEIsVUFSbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFRNkQ7QUFBQSxnQkFFNUR4QixPQUFPTixTQUNOLHVCQUFDLE9BQUUsSUFBRyxlQUFjLFdBQVUsNkJBQTJCLDhCQUFFTSxpQkFBT04sU0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBd0U7QUFBQSxtQkFmNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFpQkE7QUFBQSxpQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFxQ0E7QUFBQSxZQUVBLHVCQUFDLFNBQUksV0FBVSw2QkFDYjtBQUFBLHFDQUFDLFNBQ0M7QUFBQSx1Q0FBQyxTQUFNLFNBQVEsWUFBVyxXQUFVLDZCQUEyQiwwRUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLGdCQUNBLHVCQUFDLFNBQ0MsSUFBRyxZQUNILE1BQUssWUFDTCxNQUFLLE9BQ0wsT0FBT0gsU0FBU0ksVUFDaEIsVUFBVXFCLGNBQ1YsV0FBV2hCLE9BQU9MLFdBQVcsbUJBQW1CLElBQ2hELGdCQUFjLENBQUMsQ0FBQ0ssT0FBT0wsVUFDdkIsb0JBQWtCSyxPQUFPTCxXQUFXLG1CQUFtQjZCLFVBUnpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUW1FO0FBQUEsZ0JBRWxFeEIsT0FBT0wsWUFDTix1QkFBQyxPQUFFLElBQUcsa0JBQWlCLFdBQVUsNkJBQTJCLDhCQUFFSyxpQkFBT0wsWUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBOEU7QUFBQSxtQkFmbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFpQkE7QUFBQSxjQUVBLHVCQUFDLFNBQ0M7QUFBQSx1Q0FBQyxTQUFNLFNBQVEsV0FBVSxXQUFVLDZCQUEyQix5RUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLGdCQUNBLHVCQUFDLFlBQ0MsSUFBRyxXQUNILE1BQUssV0FDTCxPQUFPSixTQUFTSyxTQUNoQixVQUFVb0IsY0FDVixXQUFXLHVIQUNUaEIsT0FBT0osVUFBVSxtQkFBbUIsaUJBQWlCLElBRXZELGdCQUFjLENBQUMsQ0FBQ0ksT0FBT0osU0FDdkIsb0JBQWtCSSxPQUFPSixVQUFVLGtCQUFrQjRCLFFBRXJEO0FBQUEseUNBQUMsWUFBTyxPQUFNLElBQUcsNEJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTZCO0FBQUEsa0JBQzdCLHVCQUFDLFlBQU8sT0FBTSxhQUFZLHlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFtQztBQUFBLGtCQUNuQyx1QkFBQyxZQUFPLE9BQU0sV0FBVSx1QkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBK0I7QUFBQSxrQkFDL0IsdUJBQUMsWUFBTyxPQUFNLFVBQVMsc0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTZCO0FBQUEsa0JBQzdCLHVCQUFDLFlBQU8sT0FBTSxVQUFTLHNCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUE2QjtBQUFBLHFCQWYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWdCQTtBQUFBLGdCQUNDeEIsT0FBT0osV0FDTix1QkFBQyxPQUFFLElBQUcsaUJBQWdCLFdBQVUsNkJBQTJCLDhCQUFFSSxpQkFBT0osV0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBNEU7QUFBQSxtQkF0QmhGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBd0JBO0FBQUEsaUJBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNkNBO0FBQUEsWUFFQSx1QkFBQyxTQUNDO0FBQUEscUNBQUMsU0FBTSxTQUFRLFlBQVcsV0FBVSw2QkFBMkIsMEVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUE7QUFBQSxjQUNBLHVCQUFDLFlBQ0MsSUFBRyxZQUNILE1BQUssWUFDTCxNQUFNLEdBQ04sT0FBT0wsU0FBU00sVUFDaEIsVUFBVW1CLGNBQ1YsV0FBV2hCLE9BQU9ILFdBQVcsbUJBQW1CLElBQ2hELGdCQUFjLENBQUMsQ0FBQ0csT0FBT0gsVUFDdkIsb0JBQWtCRyxPQUFPSCxXQUFXLG1CQUFtQjJCLFVBUnpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUW1FO0FBQUEsY0FFbEV4QixPQUFPSCxZQUNOLHVCQUFDLE9BQUUsSUFBRyxrQkFBaUIsV0FBVSw2QkFBMkIsOEJBQUVHLGlCQUFPSCxZQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4RTtBQUFBLGlCQWZsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWlCQTtBQUFBLFlBRUEsdUJBQUMsVUFDQyxNQUFLLFVBQ0wsVUFBVUMsY0FDVixXQUFVLHNFQUNWLE1BQUssTUFBSSw4QkFFUkEseUJBQ0MsZ0JBRUEsbUNBQ0U7QUFBQSxxQ0FBQyxRQUFLLFdBQVUsUUFBTyxNQUFNLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdDO0FBQUE7QUFBQSxpQkFEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQSxLQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBY0E7QUFBQSxlQXhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXlIQTtBQUFBLGFBbklGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFvSUE7QUFBQSxRQUVBLHVCQUFDLE9BQU8sS0FBUCxFQUNDLFNBQVM7QUFBQSxVQUFFdUIsU0FBUztBQUFBLFVBQUdDLEdBQUc7QUFBQSxRQUFHLEdBQzdCLFNBQVM7QUFBQSxVQUFFRCxTQUFTO0FBQUEsVUFBR0MsR0FBRztBQUFBLFFBQUUsR0FDNUIsWUFBWTtBQUFBLFVBQUVDLFVBQVU7QUFBQSxVQUFLRSxPQUFPO0FBQUEsUUFBSSxHQUN4QyxXQUFVLGFBRVY7QUFBQSxpQ0FBQyxTQUFJLFdBQVUscUNBQ2I7QUFBQSxtQ0FBQyxRQUFHLFdBQVUseUNBQXVDLHNGQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFDQSx1QkFBQyxTQUFJLFdBQVUsYUFDYjtBQUFBLHFDQUFDLFNBQUksV0FBVSw4QkFDYjtBQUFBLHVDQUFDLFNBQU0sV0FBVSxxQ0FBb0MsTUFBTSxNQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE4RDtBQUFBLGdCQUM5RCx1QkFBQyxTQUNDO0FBQUEseUNBQUMsT0FBRSxXQUFVLGdDQUE4QixnREFBQyx3QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBb0Q7QUFBQSxrQkFDcEQsdUJBQUMsT0FBRSxXQUFVLGlCQUFlLGdEQUFDLDhCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUEyQztBQUFBLHFCQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUdBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNQTtBQUFBLGNBRUEsdUJBQUMsU0FBSSxXQUFVLDhCQUNiO0FBQUEsdUNBQUMsUUFBSyxXQUFVLHFDQUFvQyxNQUFNLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTZEO0FBQUEsZ0JBQzdELHVCQUFDLFNBQ0M7QUFBQSx5Q0FBQyxPQUFFLFdBQVUsZ0NBQThCLGdEQUFDLHNCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFrRDtBQUFBLGtCQUNsRCx1QkFBQyxPQUFFLFdBQVUsaUJBQWUsZ0RBQUMsd0NBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXFEO0FBQUEscUJBRnZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR0E7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1BO0FBQUEsY0FFQSx1QkFBQyxTQUFJLFdBQVUsOEJBQ2I7QUFBQSx1Q0FBQyxVQUFPLFdBQVUscUNBQW9DLE1BQU0sTUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0Q7QUFBQSxnQkFDL0QsdUJBQUMsU0FDQztBQUFBLHlDQUFDLE9BQUUsV0FBVSxnQ0FBOEIsZ0RBQUMsd0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQW9EO0FBQUEsa0JBQ3BELHVCQUFDLE9BQUUsV0FBVSxpQkFBZSw4QkFBQztBQUFBO0FBQUEsb0JBQWtCLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBRztBQUFBLG9CQUFHO0FBQUEsdUJBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWtFO0FBQUEscUJBRnBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR0E7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1BO0FBQUEsY0FFQSx1QkFBQyxTQUFJLFdBQVUsOEJBQ2I7QUFBQSx1Q0FBQyxTQUFNLFdBQVUscUNBQW9DLE1BQU0sTUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBOEQ7QUFBQSxnQkFDOUQsdUJBQUMsU0FDQztBQUFBLHlDQUFDLE9BQUUsV0FBVSxnQ0FBOEIsZ0RBQUMsdUJBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQW1EO0FBQUEsa0JBQ25ELHVCQUFDLE9BQUUsV0FBVSxpQkFBZSw4QkFBQztBQUFBO0FBQUEsb0JBQW9CLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBRztBQUFBLG9CQUFHO0FBQUEsdUJBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXFFO0FBQUEscUJBRnZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR0E7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1BO0FBQUEsaUJBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZ0NBO0FBQUEsZUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFxQ0E7QUFBQSxVQUVBLHVCQUFDLFNBQUksV0FBVSxxRkFDYjtBQUFBLG1DQUFDLFFBQUcsV0FBVSwwQkFBd0Isa0ZBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUE7QUFBQSxZQUNBLHVCQUFDLE9BQUUsV0FBVSxzQkFBb0Isc0hBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUE7QUFBQSxZQUNBLHVCQUFDLFVBQ0MsU0FBTyxNQUNQLFdBQVUsZ0ZBQThFLDhCQUV4RixpQ0FBQyxPQUFFLE1BQUssK0JBQThCLFFBQU8sVUFBUyxLQUFJLHVCQUFxQiw4QkFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQSxLQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBT0E7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZUE7QUFBQSxhQTVERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNkRBO0FBQUEsV0FwTUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXFNQSxLQXRNRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdU1BLEtBeE1GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF5TUE7QUFBQSxTQTdORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOE5BO0FBQUEsT0F0T0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXVPQTtBQUVKO0FBQUNuQyxHQXpUS0QsU0FBTztBQUFBcUMsS0FBUHJDO0FBMlROLGVBQWVBO0FBQU8sSUFBQXFDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVsbWV0IiwibW90aW9uIiwiTWFpbCIsIlBob25lIiwiTWFwUGluIiwiQ2xvY2siLCJTZW5kIiwiQnV0dG9uIiwiSW5wdXQiLCJMYWJlbCIsIlRleHRhcmVhIiwidG9hc3QiLCJDb250YXRvIiwiX3MiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibm9tZSIsImVtYWlsIiwidGVsZWZvbmUiLCJhc3N1bnRvIiwibWVuc2FnZW0iLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdFcnJvcnMiLCJ0cmltIiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2Iiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsInVuZGVmaW5lZCIsImRlbGF5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvcGFnZXMvQ29udGF0by5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBNYWlsLCBQaG9uZSwgTWFwUGluLCBDbG9jaywgU2VuZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2xhYmVsJztcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RleHRhcmVhJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdCc7XG5cbmNvbnN0IENvbnRhdG8gPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5vbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICB0ZWxlZm9uZTogJycsXG4gICAgYXNzdW50bzogJycsXG4gICAgbWVuc2FnZW06ICcnXG4gIH0pO1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7fTtcblxuICAgIGlmICghZm9ybURhdGEubm9tZS50cmltKCkpIHtcbiAgICAgIG5ld0Vycm9ycy5ub21lID0gJ05vbWUgw6kgb2JyaWdhdMOzcmlvJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsLnRyaW0oKSkge1xuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0UtbWFpbCDDqSBvYnJpZ2F0w7NyaW8nO1xuICAgIH0gZWxzZSBpZiAoIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KGZvcm1EYXRhLmVtYWlsKSkge1xuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0UtbWFpbCBpbnbDoWxpZG8nO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEudGVsZWZvbmUudHJpbSgpKSB7XG4gICAgICBuZXdFcnJvcnMudGVsZWZvbmUgPSAnVGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmFzc3VudG8udHJpbSgpKSB7XG4gICAgICBuZXdFcnJvcnMuYXNzdW50byA9ICdBc3N1bnRvIMOpIG9icmlnYXTDs3Jpbyc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5tZW5zYWdlbS50cmltKCkpIHtcbiAgICAgIG5ld0Vycm9ycy5tZW5zYWdlbSA9ICdNZW5zYWdlbSDDqSBvYnJpZ2F0w7NyaWEnO1xuICAgIH1cblxuICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdFcnJvcnMpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiRXJybyBubyBmb3JtdWzDoXJpb1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3IgZmF2b3IsIGNvcnJpamEgb3MgZXJyb3MgYW50ZXMgZGUgZW52aWFyLlwiLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiTWVuc2FnZW0gRW52aWFkYSFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRW50cmFyZW1vcyBlbSBjb250YXRvIGVtIGJyZXZlLlwiXG4gICAgICB9KTtcbiAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgbm9tZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgdGVsZWZvbmU6ICcnLFxuICAgICAgICBhc3N1bnRvOiAnJyxcbiAgICAgICAgbWVuc2FnZW06ICcnXG4gICAgICB9KTtcbiAgICAgIHNldEVycm9ycyh7fSk7XG4gICAgfSwgMTUwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIGlmIChlcnJvcnNbbmFtZV0pIHtcbiAgICAgIHNldEVycm9ycyhwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogJycgfSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+Q29udGF0byAtIE5vdmEgVGVycmEgQ29uc8OzcmNpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFbnRyZSBlbSBjb250YXRvIGNvbSBhIE5vdmEgVGVycmEgQ29uc8OzcmNpby4gRXN0YW1vcyBwcm9udG9zIHBhcmEgYWp1ZMOhLWxvIGEgcmVhbGl6YXIgc2V1cyBzb25ob3MuXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJDb250YXRvIC0gTm92YSBUZXJyYSBDb25zw7NyY2lvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFbnRyZSBlbSBjb250YXRvIGNvbm9zY28uXCIgLz5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyM2NThmNGNdIHRvLVsjMzQ2ZDQ3XSB0ZXh0LXdoaXRlIHB5LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgbXgtYXV0byBtYi02XCIgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgICAgICAgICAgRW50cmUgZW0gQ29udGF0b1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGUvOTBcIj5cbiAgICAgICAgICAgICAgICBFc3RhbW9zIHByb250b3MgcGFyYSBhanVkw6EtbG8gYSByZWFsaXphciBzZXVzIHNvbmhvc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ2FwLTggbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMiBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLThcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMjQzNTJmXSBtYi02XCI+XG4gICAgICAgICAgICAgICAgICBFbnZpZSBzdWEgTWVuc2FnZW1cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm5vbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjMjQzNTJmXSBtYi0yIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb21lIENvbXBsZXRvICpcbiAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5ub21lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLm5vbWUgPyAnYm9yZGVyLXJlZC01MDAnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3JzLm5vbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtlcnJvcnMubm9tZSA/ICdub21lLWVycm9yJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubm9tZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIm5vbWUtZXJyb3JcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+e2Vycm9ycy5ub21lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjMjQzNTJmXSBtYi0yIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFLW1haWwgKlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLmVtYWlsID8gJ2JvcmRlci1yZWQtNTAwJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2Vycm9ycy5lbWFpbCA/ICdlbWFpbC1lcnJvcicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+e2Vycm9ycy5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0ZWxlZm9uZVwiIGNsYXNzTmFtZT1cInRleHQtWyMyNDM1MmZdIG1iLTIgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlbGVmb25lICpcbiAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWxlZm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVsZWZvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGVsZWZvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMudGVsZWZvbmUgPyAnYm9yZGVyLXJlZC01MDAnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3JzLnRlbGVmb25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17ZXJyb3JzLnRlbGVmb25lID8gJ3RlbGVmb25lLWVycm9yJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMudGVsZWZvbmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0ZWxlZm9uZS1lcnJvclwiIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57ZXJyb3JzLnRlbGVmb25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiYXNzdW50b1wiIGNsYXNzTmFtZT1cInRleHQtWyMyNDM1MmZdIG1iLTIgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc3VudG8gKlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhc3N1bnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3N1bnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5hc3N1bnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjNjU4ZjRjXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmFzc3VudG8gPyAnYm9yZGVyLXJlZC01MDAnIDogJ2JvcmRlci1ncmF5LTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9ycy5hc3N1bnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17ZXJyb3JzLmFzc3VudG8gPyAnYXNzdW50by1lcnJvcicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbXVsYWNhb1wiPlNpbXVsYcOnw6NvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZHV2aWRhc1wiPkTDunZpZGFzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRlc2FvXCI+QWRlc8Ojbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm91dHJvc1wiPk91dHJvczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuYXNzdW50byAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImFzc3VudG8tZXJyb3JcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+e2Vycm9ycy5hc3N1bnRvfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lbnNhZ2VtXCIgY2xhc3NOYW1lPVwidGV4dC1bIzI0MzUyZl0gbWItMiBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgIE1lbnNhZ2VtICpcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZW5zYWdlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnNhZ2VtXCJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZW5zYWdlbX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLm1lbnNhZ2VtID8gJ2JvcmRlci1yZWQtNTAwJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcnMubWVuc2FnZW19XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17ZXJyb3JzLm1lbnNhZ2VtID8gJ21lbnNhZ2VtLWVycm9yJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5tZW5zYWdlbSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJtZW5zYWdlbS1lcnJvclwiIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57ZXJyb3JzLm1lbnNhZ2VtfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyM2NThmNGNdIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICdFbnZpYW5kby4uLidcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwibXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW52aWFyIE1lbnNhZ2VtXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMjQzNTJmXSBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIEluZm9ybWHDp8O1ZXMgZGUgQ29udGF0b1xuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidGV4dC1bIzY1OGY0Y10gZmxleC1zaHJpbmstMCBtdC0xXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzI0MzUyZl1cIj5UZWxlZm9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj4oMTEpIDk5OTktOTk5OTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cInRleHQtWyM2NThmNGNdIGZsZXgtc2hyaW5rLTAgbXQtMVwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMyNDM1MmZdXCI+RS1tYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPmNvbnRhdG9Abm92YXRlcnJhLmNvbS5icjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidGV4dC1bIzY1OGY0Y10gZmxleC1zaHJpbmstMCBtdC0xXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzI0MzUyZl1cIj5FbmRlcmXDp288L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+QXYuIFBhdWxpc3RhLCAxMDAwPGJyIC8+U8OjbyBQYXVsbywgU1A8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgY2xhc3NOYW1lPVwidGV4dC1bIzY1OGY0Y10gZmxleC1zaHJpbmstMCBtdC0xXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzI0MzUyZl1cIj5Ib3LDoXJpbzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5TZWcgLSBTZXg6IDloIMOgcyAxOGg8YnIgLz5Tw6FiOiA5aCDDoHMgMTNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjNjU4ZjRjXSB0by1bIzM0NmQ0N10gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEF0ZW5kaW1lbnRvIFLDoXBpZG9cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzkwIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJlY2lzYSBkZSBhanVkYSBpbWVkaWF0YT8gRmFsZSBjb25vc2NvIHBlbG8gV2hhdHNBcHAhXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHRleHQtWyM2NThmNGNdIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dhLm1lLzU1MTE5OTk5OTk5OTlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQWJyaXIgV2hhdHNBcHBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhdG87XG4iXSwiZmlsZSI6Ii9ob21lL3UzNTQ1NTM1Mjkvd2Vic2l0ZXMvcFBOYVVaMVFZL3B1YmxpY19odG1sL3NyYy9wYWdlcy9Db250YXRvLmpzeCJ9