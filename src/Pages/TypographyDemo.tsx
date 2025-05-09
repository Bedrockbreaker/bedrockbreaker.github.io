import { Button } from "~/Components/Button";
import { Divider } from "~/Components/Divider";
import { Link } from "~/Components/Link";
import { LI, UL } from "~/Components/List";
import { Text } from "~/Components/Text";

export function TypographyDemo() {
	return <div className="p-4">
		<Text variant="h1">Chronicles of the Last Frontier</Text>
		<Text variant="lead">
			In a distant galaxy goverend by typography, words held power
			-- and fonts were everything.
		</Text>
		<Text>
			The year was 4040, and humanity had settled the Nebula Serif Quadrant.
			Each colony swore fealty to a different typeface, and all was harmonious
			-- until the <span className="font-bold">Comic Sans Uprising</span>.
		</Text>
		<Text variant="h2">The Sans Wars</Text>
		<Text>
			The first shots were fired when a courier ship broadcast a transmission in unlicensed Papyrus.
			By morning, every respectable design guild had declared war.
		</Text>
		<Text variant="blockquote">
			"Typography is civilization," declared Archduke Helvetica.
			"Chaos begins with inconsistent kerning."
		</Text>
		<Text variant="h3">The Rise of the Fontsmith</Text>
		<Text>
			From the dust of conflict emerged an unlikely hero:
			a lowly typesetter named Em Dash,
			armed with nothing but a monospaced conscience and a background in ligature engineering.
		</Text>
		<Text>
			Em Dash's first decree was published via{" "}
			<Link href="https://xkcd.com/927" downloadFileName="test.html">The Great Alignment</Link>,
			a distributed font blockchain that could not be kerned or corrupted.
		</Text>
		<Text variant="h4">The Laws of Balance</Text>
		<UL className="my-6 ml-6 list-disc [&>li]:mt-2">
			<LI>All headers must scale predictably across breakpoints.</LI>
			<LI>All code shall be written in a legible monospace font.</LI>
			<LI>All blockquotes must carry attribution and intent.</LI>
		</UL>
		<Text>
			The new order introduced syntactic equality across colonies.
			Even long-forgotten variants like <Text variant="code">display: grid</Text>{" "}
			were treated with reverence.
		</Text>
		<Text variant="h3">Tabular Truth</Text>
		<div className="my-6 w-full overflow-y-auto">
			<table className="w-full">
				<thead>
					<tr className="m-0 border-t p-0 even:bg-dark">
						<th className={
							"border px-4 py-2 text-left font-bold "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Colony
						</th>
						<th className={
							"border px-4 py-2 text-left font-bold "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Primary Typeface
						</th>
						<th className={
							"border px-4 py-2 text-left font-bold "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Mood
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="m-0 border-t p-0 even:bg-dark">
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Gridlock-7
						</td>
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Roboto Mono
						</td>
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Structured
						</td>
					</tr>
					<tr className="m-0 border-t p-0 even:bg-dark">
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Serenia
						</td>
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Georgia
						</td>
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Calm
						</td>
					</tr>
					<tr className="m-0 border-t p-0 even:bg-dark">
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Italicus
						</td>
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Open Sans Italic
						</td>
						<td className={
							"border px-4 py-2 text-left "
							+ "[&[align=center]]:text-center [&[align=right]]:text-right"
						}>
							Dramatic
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Text>
			Despite early resistance, the Fontsmith's code propagated.
			Designers and developers alike began to unify their specs.
		</Text>
		<Text variant="muted">
			Even hostile systems adopted the muted color palette.
		</Text>
		<Text variant="large">A New Baseline</Text>
		<Text variant="small">
			Postscript: Em Dash retired on the moonbase Italica,
			writing font jokes no one fully understood.
		</Text>

		<Divider className="mb-6"/>

		<Button kind="default">Default Style</Button>{" "}
		<Button kind="destructive">Destructive Button</Button>{" "}
		<Button kind="ghost">Ghost Button</Button>{" "}
		<Button kind="link">Link Button</Button>{" "}
		<Button kind="outline">Outline Button</Button>{" "}
		<Button kind="secondary">Secondary Button</Button>
	</div>;
}
