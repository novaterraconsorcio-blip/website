import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Blog.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f31a5e49"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f31a5e49"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Helmet } from "/node_modules/.vite/deps/react-helmet.js?v=f31a5e49";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=f31a5e49";
import { Calendar, User, ArrowRight, BookOpen } from "/node_modules/.vite/deps/lucide-react.js?v=f31a5e49";
import { Button } from "/src/components/ui/button.jsx";
import { toast } from "/src/components/ui/use-toast.js";
const blogPosts = [{
  title: "Como Escolher o Melhor Consórcio Para Você",
  excerpt: "Descubra os principais fatores a considerar na hora de escolher um consórcio que atenda suas necessidades.",
  author: "Equipe Nova Terra",
  date: "15 de Janeiro, 2025",
  category: "Dicas",
  image: "Person analyzing financial documents and planning"
}, {
  title: "5 Vantagens do Consórcio Sobre o Financiamento",
  excerpt: "Entenda por que o consórcio pode ser uma opção mais econômica e vantajosa para realizar seus sonhos.",
  author: "Maria Silva",
  date: "10 de Janeiro, 2025",
  category: "Educação Financeira",
  image: "Financial comparison charts and graphs"
}, {
  title: "Consórcio de Imóveis: Guia Completo",
  excerpt: "Tudo o que você precisa saber sobre consórcio de imóveis, desde a adesão até a contemplação.",
  author: "João Santos",
  date: "5 de Janeiro, 2025",
  category: "Imóveis",
  image: "Beautiful modern house exterior"
}, {
  title: "Como Aumentar Suas Chances de Contemplação",
  excerpt: "Estratégias inteligentes para ser contemplado mais rapidamente no seu consórcio.",
  author: "Ana Costa",
  date: "28 de Dezembro, 2024",
  category: "Dicas",
  image: "Person celebrating success with trophy"
}, {
  title: "Consórcio de Veículos: Vale a Pena?",
  excerpt: "Análise completa sobre as vantagens de adquirir seu veículo através do consórcio.",
  author: "Carlos Oliveira",
  date: "20 de Dezembro, 2024",
  category: "Veículos",
  image: "New car in showroom"
}, {
  title: "Planejamento Financeiro Para Consórcio",
  excerpt: "Como organizar suas finanças para aproveitar ao máximo seu consórcio.",
  author: "Equipe Nova Terra",
  date: "15 de Dezembro, 2024",
  category: "Educação Financeira",
  image: "Financial planning with calculator and documents"
}];
const Blog = () => {
  const handleReadMore = () => {
    toast({
      title: "🚧 Artigo em Desenvolvimento",
      description: "Este conteúdo estará disponível em breve!"
    });
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Blog - Nova Terra Consórcio" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Dicas, guias e informações sobre consórcio. Aprenda tudo sobre como realizar seus sonhos de forma inteligente." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Blog - Nova Terra Consórcio" }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Dicas e informações sobre consórcio." }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
      lineNumber: 77,
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
        /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-16 h-16 mx-auto mb-6" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl lg:text-5xl font-bold mb-6", "data-edit-id": "src/pages/Blog.jsx:87:15", children: "Blog Nova Terra" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/90", "data-edit-id": "src/pages/Blog.jsx:90:15", children: "Dicas, guias e informações para ajudá-lo a tomar as melhores decisões" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 100,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 86,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: blogPosts.map((post, index) => /* @__PURE__ */ jsxDEV(motion.article, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: index * 0.1
      }, className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("img", { alt: post.title, className: "w-full h-full object-cover transition-transform duration-300 hover:scale-110", src: "https://images.unsplash.com/photo-1595872018818-97555653a011", "data-edit-id": "src/pages/Blog.jsx:110:21" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 123,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-[#658f4c] text-white px-3 py-1 rounded-full text-sm font-medium", "data-edit-disabled": "true", children: post.category }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 125,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 124,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 122,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex-grow flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-[#24352f] mb-3 hover:text-[#658f4c] transition-colors duration-300", "data-edit-disabled": "true", children: post.title }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4 flex-grow", "data-edit-disabled": "true", children: post.excerpt }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 136,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxDEV(User, { size: 16 }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
                lineNumber: 142,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-edit-disabled": "true", children: post.author }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
                lineNumber: 143,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
              lineNumber: 141,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { size: 16 }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
                lineNumber: 146,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-edit-disabled": "true", children: post.date }, void 0, false, {
                fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
                lineNumber: 147,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
              lineNumber: 145,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 140,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { onClick: handleReadMore, variant: "outline", className: "w-full border-[#658f4c] text-[#658f4c] hover:bg-[#658f4c] hover:text-white transition-all duration-300 group", "data-edit-disabled": "true", children: [
            "Ler Mais",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 group-hover:translate-x-1 transition-transform duration-300", size: 16 }, void 0, false, {
              fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
              lineNumber: 153,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 151,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 131,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 110,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-[#24352f] mb-6", "data-edit-id": "src/pages/Blog.jsx:165:15", children: "Quer Receber Nossas Novidades?" }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 174,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-gray-600 mb-8", "data-edit-id": "src/pages/Blog.jsx:168:15", children: "Inscreva-se em nossa newsletter e receba dicas exclusivas sobre consórcio e educação financeira." }, void 0, false, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [
          /* @__PURE__ */ jsxDEV("input", { type: "email", placeholder: "Seu melhor e-mail", className: "flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#658f4c] transition-all duration-300", "aria-label": "E-mail para newsletter" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { onClick: () => toast({
            title: "Inscrição Realizada!",
            description: "Você receberá nossas novidades em breve."
          }), className: "bg-[#658f4c] hover:bg-[#346d47] transition-all duration-300 whitespace-nowrap", "data-edit-id": "src/pages/Blog.jsx:178:17", children: "Inscrever-se" }, void 0, false, {
            fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
            lineNumber: 182,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 163,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 162,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
};
_c = Blog;
export default Blog;
var _c;
$RefreshReg$(_c, "Blog");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u354553529/websites/pPNaUZ1QY/public_html/src/pages/Blog.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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aEMsVUFBVTtBQUFBLFFBQUVLLE1BQU07QUFBQSxNQUFLLEdBQ3ZCLFlBQVk7QUFBQSxRQUFFSixVQUFVO0FBQUEsTUFBSSxHQUM1QixXQUFVLGlDQUVWO0FBQUEsK0JBQUMsUUFBRyxXQUFVLDBDQUF3QywyRkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxPQUFFLFdBQVUsOEJBQTRCLDZKQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLFNBQUksV0FBVSxvREFDYjtBQUFBLGlDQUFDLFdBQ0MsTUFBSyxTQUNMLGFBQVkscUJBQ1osV0FBVSwwSUFDVixjQUFXLDRCQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSXFDO0FBQUEsVUFFckMsdUJBQUMsVUFDQyxTQUFTLE1BQU1iLE1BQU07QUFBQSxZQUNuQkUsT0FBTztBQUFBLFlBQ1BRLGFBQWE7QUFBQSxVQUNmLENBQUMsR0FDRCxXQUFVLGlGQUErRSx5RUFMM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFRQTtBQUFBLGFBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWdCQTtBQUFBLFdBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE4QkEsS0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdDQSxLQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBa0NBO0FBQUEsU0FqSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWtIQTtBQUFBLE9BMUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EySEE7QUFFSjtBQUFDUyxLQXRJS1g7QUF3SU4sZUFBZUE7QUFBSSxJQUFBVztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJIZWxtZXQiLCJtb3Rpb24iLCJDYWxlbmRhciIsIlVzZXIiLCJBcnJvd1JpZ2h0IiwiQm9va09wZW4iLCJCdXR0b24iLCJ0b2FzdCIsImJsb2dQb3N0cyIsInRpdGxlIiwiZXhjZXJwdCIsImF1dGhvciIsImRhdGUiLCJjYXRlZ29yeSIsImltYWdlIiwiQmxvZyIsImhhbmRsZVJlYWRNb3JlIiwiZGVzY3JpcHRpb24iLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwibWFwIiwicG9zdCIsImluZGV4Iiwib25jZSIsImRlbGF5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJzcmMvcGFnZXMvQmxvZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIFVzZXIsIEFycm93UmlnaHQsIEJvb2tPcGVuIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0JztcblxuY29uc3QgYmxvZ1Bvc3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdDb21vIEVzY29saGVyIG8gTWVsaG9yIENvbnPDs3JjaW8gUGFyYSBWb2PDqicsXG4gICAgZXhjZXJwdDogJ0Rlc2N1YnJhIG9zIHByaW5jaXBhaXMgZmF0b3JlcyBhIGNvbnNpZGVyYXIgbmEgaG9yYSBkZSBlc2NvbGhlciB1bSBjb25zw7NyY2lvIHF1ZSBhdGVuZGEgc3VhcyBuZWNlc3NpZGFkZXMuJyxcbiAgICBhdXRob3I6ICdFcXVpcGUgTm92YSBUZXJyYScsXG4gICAgZGF0ZTogJzE1IGRlIEphbmVpcm8sIDIwMjUnLFxuICAgIGNhdGVnb3J5OiAnRGljYXMnLFxuICAgIGltYWdlOiAnUGVyc29uIGFuYWx5emluZyBmaW5hbmNpYWwgZG9jdW1lbnRzIGFuZCBwbGFubmluZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnNSBWYW50YWdlbnMgZG8gQ29uc8OzcmNpbyBTb2JyZSBvIEZpbmFuY2lhbWVudG8nLFxuICAgIGV4Y2VycHQ6ICdFbnRlbmRhIHBvciBxdWUgbyBjb25zw7NyY2lvIHBvZGUgc2VyIHVtYSBvcMOnw6NvIG1haXMgZWNvbsO0bWljYSBlIHZhbnRham9zYSBwYXJhIHJlYWxpemFyIHNldXMgc29uaG9zLicsXG4gICAgYXV0aG9yOiAnTWFyaWEgU2lsdmEnLFxuICAgIGRhdGU6ICcxMCBkZSBKYW5laXJvLCAyMDI1JyxcbiAgICBjYXRlZ29yeTogJ0VkdWNhw6fDo28gRmluYW5jZWlyYScsXG4gICAgaW1hZ2U6ICdGaW5hbmNpYWwgY29tcGFyaXNvbiBjaGFydHMgYW5kIGdyYXBocydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ29uc8OzcmNpbyBkZSBJbcOzdmVpczogR3VpYSBDb21wbGV0bycsXG4gICAgZXhjZXJwdDogJ1R1ZG8gbyBxdWUgdm9jw6ogcHJlY2lzYSBzYWJlciBzb2JyZSBjb25zw7NyY2lvIGRlIGltw7N2ZWlzLCBkZXNkZSBhIGFkZXPDo28gYXTDqSBhIGNvbnRlbXBsYcOnw6NvLicsXG4gICAgYXV0aG9yOiAnSm/Do28gU2FudG9zJyxcbiAgICBkYXRlOiAnNSBkZSBKYW5laXJvLCAyMDI1JyxcbiAgICBjYXRlZ29yeTogJ0ltw7N2ZWlzJyxcbiAgICBpbWFnZTogJ0JlYXV0aWZ1bCBtb2Rlcm4gaG91c2UgZXh0ZXJpb3InXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NvbW8gQXVtZW50YXIgU3VhcyBDaGFuY2VzIGRlIENvbnRlbXBsYcOnw6NvJyxcbiAgICBleGNlcnB0OiAnRXN0cmF0w6lnaWFzIGludGVsaWdlbnRlcyBwYXJhIHNlciBjb250ZW1wbGFkbyBtYWlzIHJhcGlkYW1lbnRlIG5vIHNldSBjb25zw7NyY2lvLicsXG4gICAgYXV0aG9yOiAnQW5hIENvc3RhJyxcbiAgICBkYXRlOiAnMjggZGUgRGV6ZW1icm8sIDIwMjQnLFxuICAgIGNhdGVnb3J5OiAnRGljYXMnLFxuICAgIGltYWdlOiAnUGVyc29uIGNlbGVicmF0aW5nIHN1Y2Nlc3Mgd2l0aCB0cm9waHknXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NvbnPDs3JjaW8gZGUgVmXDrWN1bG9zOiBWYWxlIGEgUGVuYT8nLFxuICAgIGV4Y2VycHQ6ICdBbsOhbGlzZSBjb21wbGV0YSBzb2JyZSBhcyB2YW50YWdlbnMgZGUgYWRxdWlyaXIgc2V1IHZlw61jdWxvIGF0cmF2w6lzIGRvIGNvbnPDs3JjaW8uJyxcbiAgICBhdXRob3I6ICdDYXJsb3MgT2xpdmVpcmEnLFxuICAgIGRhdGU6ICcyMCBkZSBEZXplbWJybywgMjAyNCcsXG4gICAgY2F0ZWdvcnk6ICdWZcOtY3Vsb3MnLFxuICAgIGltYWdlOiAnTmV3IGNhciBpbiBzaG93cm9vbSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUGxhbmVqYW1lbnRvIEZpbmFuY2Vpcm8gUGFyYSBDb25zw7NyY2lvJyxcbiAgICBleGNlcnB0OiAnQ29tbyBvcmdhbml6YXIgc3VhcyBmaW5hbsOnYXMgcGFyYSBhcHJvdmVpdGFyIGFvIG3DoXhpbW8gc2V1IGNvbnPDs3JjaW8uJyxcbiAgICBhdXRob3I6ICdFcXVpcGUgTm92YSBUZXJyYScsXG4gICAgZGF0ZTogJzE1IGRlIERlemVtYnJvLCAyMDI0JyxcbiAgICBjYXRlZ29yeTogJ0VkdWNhw6fDo28gRmluYW5jZWlyYScsXG4gICAgaW1hZ2U6ICdGaW5hbmNpYWwgcGxhbm5pbmcgd2l0aCBjYWxjdWxhdG9yIGFuZCBkb2N1bWVudHMnXG4gIH1cbl07XG5cbmNvbnN0IEJsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVJlYWRNb3JlID0gKCkgPT4ge1xuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiBcIvCfmqcgQXJ0aWdvIGVtIERlc2Vudm9sdmltZW50b1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRXN0ZSBjb250ZcO6ZG8gZXN0YXLDoSBkaXNwb27DrXZlbCBlbSBicmV2ZSFcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5CbG9nIC0gTm92YSBUZXJyYSBDb25zw7NyY2lvPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRpY2FzLCBndWlhcyBlIGluZm9ybWHDp8O1ZXMgc29icmUgY29uc8OzcmNpby4gQXByZW5kYSB0dWRvIHNvYnJlIGNvbW8gcmVhbGl6YXIgc2V1cyBzb25ob3MgZGUgZm9ybWEgaW50ZWxpZ2VudGUuXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJCbG9nIC0gTm92YSBUZXJyYSBDb25zw7NyY2lvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEaWNhcyBlIGluZm9ybWHDp8O1ZXMgc29icmUgY29uc8OzcmNpby5cIiAvPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjBcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzY1OGY0Y10gdG8tWyMzNDZkNDddIHRleHQtd2hpdGUgcHktMjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0b1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgbXgtYXV0byBtYi02XCIgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgICAgICAgICAgQmxvZyBOb3ZhIFRlcnJhXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZS85MFwiPlxuICAgICAgICAgICAgICAgIERpY2FzLCBndWlhcyBlIGluZm9ybWHDp8O1ZXMgcGFyYSBhanVkw6EtbG8gYSB0b21hciBhcyBtZWxob3JlcyBkZWNpc8O1ZXNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctZ3JheS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC04IG1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIHtibG9nUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmbGV4IGZsZXgtY29sXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNDggb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS0xMTBcIlxuICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTU4NzIwMTg4MTgtOTc1NTU2NTNhMDExXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1bIzY1OGY0Y10gdGV4dC13aGl0ZSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleC1ncm93IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtWyMyNDM1MmZdIG1iLTMgaG92ZXI6dGV4dC1bIzY1OGY0Y10gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00IGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItNCBwYi00IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlciBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmF1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhciBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVhZE1vcmV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItWyM2NThmNGNdIHRleHQtWyM2NThmNGNdIGhvdmVyOmJnLVsjNjU4ZjRjXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBncm91cFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBMZXIgTWFpc1xuICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cIm1sLTIgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIiBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5hcnRpY2xlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1bIzI0MzUyZl0gbWItNlwiPlxuICAgICAgICAgICAgICAgIFF1ZXIgUmVjZWJlciBOb3NzYXMgTm92aWRhZGVzP1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWItOFwiPlxuICAgICAgICAgICAgICAgIEluc2NyZXZhLXNlIGVtIG5vc3NhIG5ld3NsZXR0ZXIgZSByZWNlYmEgZGljYXMgZXhjbHVzaXZhcyBzb2JyZSBjb25zw7NyY2lvIGUgZWR1Y2HDp8OjbyBmaW5hbmNlaXJhLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCBtYXgtdy1tZCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZXUgbWVsaG9yIGUtbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHgtNCBweS0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyM2NThmNGNdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRS1tYWlsIHBhcmEgbmV3c2xldHRlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkluc2NyacOnw6NvIFJlYWxpemFkYSFcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVm9jw6ogcmVjZWJlcsOhIG5vc3NhcyBub3ZpZGFkZXMgZW0gYnJldmUuXCJcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM2NThmNGNdIGhvdmVyOmJnLVsjMzQ2ZDQ3XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEluc2NyZXZlci1zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sImZpbGUiOiIvaG9tZS91MzU0NTUzNTI5L3dlYnNpdGVzL3BQTmFVWjFRWS9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvQmxvZy5qc3gifQ==