import { useRoutes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Events from "../pages/Events/Events";
const AppRouter = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <Main />,
		},
		{
			path: "/events",
			element: <Events />,
		},
	]);
	return element;
};

export default AppRouter;
