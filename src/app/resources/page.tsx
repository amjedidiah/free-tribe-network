"use client";
import Image from "next/image";
import Apollo from "@/components/shared/apollo";
import ResourcesContainer from "@/components/resources/resources-container";

const Resources = () => {
  return (
    <Apollo>
      <Image
        src="/images/resource.png"
        alt="resources"
        width={2880}
        height={1246}
        className="mt-20"
      />
      <ResourcesContainer />
    </Apollo>
  );
};

export default Resources;
