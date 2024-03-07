import { Fragment } from "react";
import ResourcesContainer from "@/components/resources/resources-container";
import ContentImage from "@/components/shared/content-image";

const Resources = () => {
  return (
    <Fragment>
      <ContentImage
        title="resources-banner"
        width={2880}
        height={1246}
        className="mt-20"
      />
      <ResourcesContainer />
    </Fragment>
  );
};

export default Resources;
