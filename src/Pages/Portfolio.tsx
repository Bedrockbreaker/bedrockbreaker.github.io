import { ListMinus, ListPlus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";

import { Badge } from "~/Components/Badge";
import { Button } from "~/Components/Button";
import { Divider } from "~/Components/Divider";
import { HoverTilt } from "~/Components/HoverTilt";
import { ProjectCard } from "~/Components/ProjectCard";
import { Text } from "~/Components/Text";
import { AllTags, GetCategoryFromTag, Tag } from "~/Util/Project";
import { Projects } from "~/Util/ProjectData";

export function Portfolio() {
	// Doesn't really need to be a state variable, but ¯\_(ツ)_/¯
	const [projects] = useState<(keyof typeof Projects)[]>([
		"ganymede",
		"graduatedcylinders",
		"pushr4k",
		"quiethours",
		"cardbot",
		"oldmanwhiskers",
		"yggdrasil",
		"tankgame",
		"partypooper",
		"tcresearchsolver",
		"silentnight",
		"portfolio"
	]);

	const [searchParams, setSearchParams] = useSearchParams();

	const allUsedTags = useMemo(() => {
		const tags = new Set<Tag>();
		for (const project of projects) {
			for (const tag of Projects[project].tags) {
				tags.add(tag);
			}
		}
		return AllTags.filter(tag => tags.has(tag));
	}, [projects]);

	const activeTags = useMemo(() => {
		const rawTags = searchParams.get("tags");
		return rawTags === null
			? new Set<Tag>()
			: new Set<Tag>(rawTags.split(",").map(tag => decodeURIComponent(tag.trim()) as Tag));
	}, [searchParams]);

	const matchMode = useMemo(() => {
		const rawMode = searchParams.get("mode");
		return rawMode === null
			? "any"
			: rawMode === "any" ? "any" : "all";
	}, [searchParams]);

	const ToggleTag = (tag: Tag) => {
		const newTags = new Set(activeTags);
		if (newTags.has(tag)) {
			newTags.delete(tag);
		} else {
			newTags.add(tag);
		}

		if (newTags.size === 0) {
			searchParams.delete("tags");
		} else {
			searchParams.set("tags", Array.from(newTags).map(tag => encodeURIComponent(tag)).join(","));
		}
		setSearchParams(searchParams);
	}

	const filteredProjects = useMemo(() => {
		if (activeTags.size === 0) return projects;

		const activeTagsArray = Array.from(activeTags);
		const filtered = projects.filter(project => {
			const tags = Projects[project].tags;
			return matchMode === "all"
				? activeTagsArray.every(tag => tags.includes(tag))
				: tags.some(tag => activeTags.has(tag));
		});
		return filtered;
	}, [projects, activeTags]);

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Text variant="h1" className="mx-auto text-center">Portfolio</Text>
		<Text variant="lead" className="mx-auto text-center">
			A curated collection of technical and creative projects across gameplay and tools
			programming as well as systems design.
		</Text>
		<Divider/>
		<div className="mt-6 bg-dark rounded p-6">
			<div className="flex flex-row gap-1">
			<Text variant="large" className="inline">Filter by tag:</Text>
			<div className="grow"/>
			<Button
				kind="outline"
				size="icon"
				onClick={() => {
					if (matchMode === "all") {
						searchParams.delete("mode");
					} else {
						searchParams.set("mode", "all");
					}
					setSearchParams(searchParams);
				}}
			>
				{matchMode === "all" ? <ListMinus/> : <ListPlus/>}
			</Button>
			{activeTags.size > 0
				? <Button
					kind="outline"
					size="icon"
					onClick={() => {
						searchParams.delete("tags");
						setSearchParams(searchParams);
					}}
				>
					<Trash2/>
				</Button>
				: undefined
			}
			</div>
			<div className="flex flex-wrap gap-1 mt-6">
				{allUsedTags.map(tag => {
					const isActive = activeTags.has(tag) || activeTags.size === 0;
					return <HoverTilt
						key={tag}
						allowDeviceRotation={false}
						intensity={5}
						disableShadow // Disable the default shadow, apply a different one
						className="hover:drop-shadow-md select-none"
					>
						<Badge
							kind={GetCategoryFromTag(tag).badgeKind}
							className={"cursor-pointer relative"}
							onClick={() => ToggleTag(tag)}
						>
							{tag}
							<div
								className={
									"absolute pointer-events-none top-0 left-0 w-full h-full "
									+ "overflow-hidden transition-colors "
									+ (isActive ? "bg-transparent" : "bg-dark/50")
								}
							/>
						</Badge>
					</HoverTilt>;
				})}
			</div>
		</div>
		<div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			{filteredProjects.map(project => {
				return <ProjectCard
					key={project}
					project={project}
				/>;
			})}
		</div>
	</div>;
}
