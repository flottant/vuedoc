import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-O64OHAI7.js";
import "./chunk-PACM5MSX.js";
import "./chunk-QJ6DX5RZ.js";
import "./chunk-Z5NJLK7X.js";
import "./chunk-ANKY43RT.js";
import "./chunk-OFHRJP5O.js";
import "./chunk-2UX2KQYZ.js";
import {
  defineComponent,
  h
} from "./chunk-ARDOOAUT.js";
import "./chunk-WV4GUBZO.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.100/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
