import { c as createComponent, d as renderTemplate } from '../chunks/astro/server_D3_BEuKs.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/bernfrancis/primitivo-portfolio/src/pages/keystatic/index.astro", void 0);

const $$file = "/Users/bernfrancis/primitivo-portfolio/src/pages/keystatic/index.astro";
const $$url = "/keystatic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
