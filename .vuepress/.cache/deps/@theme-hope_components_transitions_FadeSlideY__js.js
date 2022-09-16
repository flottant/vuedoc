import {
  useScrollPromise
} from "./chunk-GPPWGUY2.js";
import "./chunk-KAL2VPKS.js";
import "./chunk-FECFGNAG.js";
import "./chunk-ANJIMETJ.js";
import "./chunk-S3VVWPG2.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-PWHMU4FR.js";
import "./chunk-WXFYXWFA.js";
import "./chunk-WCXEAEE2.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "C:/Users/flott/Documents/vuedoc/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
