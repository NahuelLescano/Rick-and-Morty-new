import { BrowserRouter, Route } from "react-router-dom";
import { RoutesNotFound } from "@/RoutesNotFound";
import { Characters, CharacterDetail } from "@/characters";
import { About } from "@/Globals";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<RoutesNotFound>
				<Route path="/" element={<Characters />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<CharacterDetail />} />
			</RoutesNotFound>
		</BrowserRouter>
	);
};
