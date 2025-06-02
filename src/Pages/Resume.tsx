import { FileImage, FilePen, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

import { commitDates } from "virtual:commit-dates";

import { Button } from "~/Components/Button";
import { Card } from "~/Components/Card";
import { Divider } from "~/Components/Divider";
import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";

const resumeLastUpdated = commitDates["public/Resume.pdf"] === undefined
	? undefined
	: new Date(commitDates["public/Resume.pdf"]).toLocaleDateString();

export function Resume() {
	const { t } = useTranslation();

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Text variant="h1" className="mx-auto">{t("resume.header")}</Text>
		<Text variant="lead" className="mx-auto">{t("resume.subtitle")}</Text>
		<Divider/>
		{resumeLastUpdated !== undefined
			? <Text variant="blockquote">{t("resume.timestamp", {timestamp: resumeLastUpdated})}</Text>
			: undefined
		}
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-center mt-6">
			<Card
				borderStyle="1"
				className="motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
			>
				<Text variant="h4" className="flex flex-row gap-1">{t("resume.cards.0.header")} <FileImage/></Text>
				<Text>{t("resume.cards.0.description")}</Text>
				<div className="flex flex-row flex-wrap gap-6 justify-center">
					<Button kind="outline" asChild className="mt-6 max-md:hidden">
						<Link
							href="https://bedrockbreaker.github.io/Resume.pdf"
							hasExternalIcon={false}
						>
							{t("resume.cards.0.view")}
						</Link>
					</Button>
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.pdf"
							downloadFileName="Searle_Jenson_Resume.pdf"
							hasExternalIcon={false}
						>
							{t("resume.cards.0.download")}
						</Link>
					</Button>
				</div>
			</Card>
			<Card
				borderStyle="5"
				className="motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
			>
				<Text variant="h4" className="flex flex-row gap-1">{t("resume.cards.1.header")} <FilePen/></Text>
				<Text>{t("resume.cards.1.description")}</Text>
				<div className="flex flex-row flex-wrap gap-6 justify-center">
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.docx"
							downloadFileName="Searle_Jenson_Resume.docx"
							hasExternalIcon={false}
						>
							{t("resume.cards.1.download")}
						</Link>
					</Button>
				</div>
			</Card>
			<Card
				borderStyle="3"
				className={
					"md:max-xl:col-span-2 "
					+ "motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
				}
			>
				<Text variant="h4" className="flex flex-row gap-1">{t("resume.cards.2.header")} <FileText/></Text>
				<Text>{t("resume.cards.2.description")}</Text>
				<div className="flex flex-row flex-wrap gap-6 justify-center">
					<Button kind="outline" asChild className="mt-6 max-md:hidden">
						<Link
							href="https://bedrockbreaker.github.io/Resume.txt"
							hasExternalIcon={false}
						>
							{t("resume.cards.2.view")}
						</Link>
					</Button>
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.txt"
							downloadFileName="Searle_Jenson_Resume.txt"
							hasExternalIcon={false}
						>
							{t("resume.cards.2.download")}
						</Link>
					</Button>
				</div>
			</Card>
		</div>
	</div>;
}
