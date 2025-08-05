import { createBrowserRouter } from "react-router";
import Stats from "./components/stats";
import { FeatureFlagsList } from "./components/featureFlagsList";
import DesktopLayout from "./layouts/desktopLayout";

const routes = createBrowserRouter([
    {
        Component: DesktopLayout,
        children: [
            {
                index: true,
                Component: FeatureFlagsList
            },
            {
                path: "stats",
                Component: Stats
            },
        ],
    },],
    { basename: "/time-spent-web" }
);

export default routes