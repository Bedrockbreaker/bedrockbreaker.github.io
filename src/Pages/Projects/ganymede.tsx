import { useTranslation } from "react-i18next";

import { MDXComponents } from "~/Components/MDXComponents";
import { MDXRenderer } from "~/Components/MDXRenderer";

import Ganymede_en_US from "~/Content/en-US/Projects/ganymede.mdx";
import Ganymede_ja_JP from "~/Content/ja-JP/Projects/ganymede.mdx";

export function Ganymede() {
	const { i18n } = useTranslation();

	const Page = i18n.language === "ja-JP" ? Ganymede_ja_JP : Ganymede_en_US;

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<MDXRenderer>
			<Page components={MDXComponents}/>
		</MDXRenderer>
	</div>;
}
