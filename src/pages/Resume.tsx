import { Text } from "../components/Text";

export function ResumePage() {
	return <div className="flex justify-center">
		<div className="flex flex-col max-w-7xl flex-grow">
			<Text variant="h1" className="text-center">
				Résumé
			</Text>
			<Text className="text-center">
				Want a look at my background? Take a look!
			</Text>
			<Text className="text-center">
				<Text variant="a" to={`${location.origin}/2024_Resume.pdf`} isExternal download="Jenson_Searle_Resume.pdf">PDF</Text>
				{" "}
				<Text variant="a" to={`${location.origin}/2024_Resume.docx`} isExternal download="Jenson_Searle_Resume.docx">DOCX</Text>
				{" "}
				<Text variant="a" to={`${location.origin}/2024_Resume.txt`} isExternal download="Jenson_Searle_Resume.txt">TXT</Text>
			</Text>
		</div>
	</div>;
}