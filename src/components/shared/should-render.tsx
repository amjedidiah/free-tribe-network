import { PropsWithChildren } from "react";

type Props = {
  condition: boolean;
} & PropsWithChildren;

export default function ShouldRender({ condition, children }: Props) {
  if (!condition) return null;

  return children;
}
