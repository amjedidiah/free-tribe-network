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
    <>
      {/* <Banner image="/">
        <p>Our Activities</p>
      </Banner> */}
      <section className="container">
        <ActivityTabs data={data} />
      </section>
    </>
  );
}
