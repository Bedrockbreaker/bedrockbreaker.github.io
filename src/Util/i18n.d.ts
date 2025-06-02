import "i18next";

import { defaultNS, resources } from "./i18n";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: typeof resources;
	}
}

declare module "*.json" {
	const value: any;
	export default value;
}
