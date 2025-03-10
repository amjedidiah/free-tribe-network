import { autocomplete } from "@algolia/autocomplete-js";
import {
  createElement,
  Fragment,
  HTMLAttributes,
  useEffect,
  useRef,
} from "react";
import { createRoot, Root } from "react-dom/client";
import type { AutocompleteOptions } from "@algolia/autocomplete-js";
import { useRouter } from "@/i18n/navigation";

export default function Autocomplete<TItem extends Record<string, unknown>>({
  className,
  ...props
}: Partial<AutocompleteOptions<TItem>> &
  Pick<HTMLAttributes<HTMLDivElement>, "className">) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!containerRef.current) return;

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => null },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
      navigator: {
        navigate({ itemUrl }) {
          router.push(itemUrl as any);
        },
      },
      ...props,
    });

    return () => search.destroy();
  }, [props, router]);

  return <div ref={containerRef} className={className} />;
}
