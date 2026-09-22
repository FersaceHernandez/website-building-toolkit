import Hero from "./Hero";
import { BRANDS, ACTIVE_BRAND } from "./heroConfig";

export default function App() {
  return <Hero brand={BRANDS[ACTIVE_BRAND]} />;
}
