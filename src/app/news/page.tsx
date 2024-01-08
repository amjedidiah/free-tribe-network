import ActivityTabs from "@/components/activity-tabs";
import { Banner } from "@/components/banner";
import Recent from "./components/recent";
import Upcoming from "./components/upcoming";
import Blog from "./components/blog";

const data = [
  {
    trigger: "Recent Activites",
    component: <Recent />,
  },
  {
    trigger: "Upcoming Activities",
    component: <Upcoming />,
  },
  {
    trigger: "Blog Post",
    component: <Blog />,
  },
];

export default function Page() {
  return (
    <section className="space-y-6 lg:space-y-14">
      <Banner image="/images/banners/news-banner.png">
        <h1 className="text-5xl font-semibold text-white">News and Events</h1>
      </Banner>
      <div className="container">
        <ActivityTabs data={data} />
      </div>
    </section>
  );
}
