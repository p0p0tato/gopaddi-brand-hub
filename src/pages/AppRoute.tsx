import { useParams } from "react-router-dom";
import { AppPage } from "@/components/content/AppPage";
import { APP_MAP, type AppKey } from "@/data/apps";
import NotFound from "./NotFound";

const AppRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const app = slug ? APP_MAP[slug as AppKey] : undefined;
  if (!app) return <NotFound />;
  return <AppPage app={app} />;
};

export default AppRoute;
