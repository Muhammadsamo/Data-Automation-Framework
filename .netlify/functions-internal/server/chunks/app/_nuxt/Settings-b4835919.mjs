import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "../../nitro/netlify.mjs";
import "node-fetch-native/polyfill";
import "radix3";
import "destr";
import "scule";
import "klona";
import "unenv/runtime/fetch/index";
import "ohash";
import "unstorage";

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(
    `<main${ssrRenderAttrs(
      _attrs,
    )}><h1 class="text-3xl font-bold underline text-green-400 mt-2 text-center"> Settings Page </h1></main>`,
  );
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    "pages/Settings.vue",
  );
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ["ssrRender", _sfc_ssrRender],
]);

export { Settings as default };
//# sourceMappingURL=Settings-b4835919.mjs.map
