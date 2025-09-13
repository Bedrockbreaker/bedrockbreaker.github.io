import { useTranslation } from "react-i18next";

import { MDXComponents } from "~/Components/MDXComponents";
import { MDXRenderer } from "~/Components/MDXRenderer";

import SIP_en_US from "~/Content/en-US/Projects/SIP.mdx";
import SIP_ja_JP from "~/Content/ja-JP/Projects/SIP.mdx";

export function SIP() {
	const { i18n } = useTranslation();

	const Page = i18n.language === "ja-JP" ? SIP_ja_JP : SIP_en_US;

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<MDXRenderer>
			<Page components={MDXComponents}/>
		</MDXRenderer>
	</div>;
}
