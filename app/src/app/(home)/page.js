import Home from "./Home";

import { getHome, getSite } from "@/lib/fetch";

const [home] = await Promise.all([getHome()]);
const [site] = await Promise.all([getSite()]);

export default function Page() {
  return <Home site={site} home={home} />;
}
