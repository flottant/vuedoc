import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-7HC6TVLF.js";
import "./chunk-45T4H26X.js";
import "./chunk-GPPWGUY2.js";
import "./chunk-KAL2VPKS.js";
import "./chunk-FECFGNAG.js";
import "./chunk-ANJIMETJ.js";
import "./chunk-S3VVWPG2.js";
import {
  defineComponent,
  h
} from "./chunk-PWHMU4FR.js";
import "./chunk-WXFYXWFA.js";
import "./chunk-S5MSB2HL.js";
import "./chunk-WCXEAEE2.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
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
