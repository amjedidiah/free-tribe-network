"use client";
import { ClientContentImages } from "@/lib/types";
import { createContext, PropsWithChildren, useContext } from "react";

const ContentImageContext = createContext<ClientContentImages | undefined>(
  undefined
);

export function ContentImageProvider({
  children,
  value,
}: PropsWithChildren<{ value: ClientContentImages }>) {
  return (
    <ContentImageContext.Provider value={value}>
      {children}
    </ContentImageContext.Provider>
  );
}

export function useContentImageContext() {
  const contextValue = useContext(ContentImageContext);

  return contextValue;
}

export default ContentImageContext;
