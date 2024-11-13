import { Text } from "../components/Text";

export function ErrorPage() {
	return <div className="flex justify-center">
		<div className="flex flex-col max-w-7xl flex-grow">
			<Text variant="h1" className="text-center">
				Uh-oh!
			</Text>
			<Text className="text-center">
				Something went wrong.
				<br/>
				<Text variant="a" to="/">Return to homepage</Text>
			</Text>
		</div>
	</div>;
}