import { FileImage, FilePen, FileText } from "lucide-react";

import { commitDates } from "virtual:commit-dates";

import { Button } from "~/Components/Button";
import { Card } from "~/Components/Card";
import { Divider } from "~/Components/Divider";
import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";

const resumeLastUpdated = commitDates["Resume.pdf"] === undefined
	? undefined
	: new Date(commitDates["Resume.pdf"]).toLocaleDateString();

export function Resume() {
	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Text variant="h1" className="mx-auto">Résumé</Text>
		<Text variant="lead" className="mx-auto">Download or view my résumé in multiple formats</Text>
		<Divider/>
		{resumeLastUpdated !== undefined
			? <Text variant="blockquote">Last updated: {resumeLastUpdated}</Text>
			: undefined
		}
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-center mt-6">
			<Card
				borderStyle="1"
				className="motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
			>
				<Text variant="h4" className="flex flex-row gap-1">PDF <FileImage/></Text>
				<Text>Download the print-friendly version</Text>
				<div className="flex flex-row flex-wrap gap-6 justify-center">
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.pdf"
							hasExternalIcon={false}
						>
							View
						</Link>
					</Button>
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.pdf"
							downloadFileName="Searle_Jenson_Resume.pdf"
							hasExternalIcon={false}
						>
							Download
						</Link>
					</Button>
				</div>
			</Card>
			<Card
				borderStyle="5"
				className="motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
			>
				<Text variant="h4" className="flex flex-row gap-1">DOCX <FilePen/></Text>
				<Text>For editable use in Microsoft Word, etc.</Text>
				<div className="flex flex-row flex-wrap gap-6 justify-center">
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.docx"
							downloadFileName="Searle_Jenson_Resume.docx"
							hasExternalIcon={false}
						>
							Download
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
				<Text variant="h4" className="flex flex-row gap-1">TXT <FileText/></Text>
				<Text>Plain text version for maximum portability</Text>
				<div className="flex flex-row flex-wrap gap-6 justify-center">
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.txt"
							hasExternalIcon={false}
						>
							View
						</Link>
					</Button>
					<Button kind="outline" asChild className="mt-6">
						<Link
							href="https://bedrockbreaker.github.io/Resume.txt"
							downloadFileName="Searle_Jenson_Resume.txt"
							hasExternalIcon={false}
						>
							Download
						</Link>
					</Button>
				</div>
			</Card>
		</div>
	</div>;
}
