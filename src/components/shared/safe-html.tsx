import * as DOMPurify from "isomorphic-dompurify";
import { HTMLAttributes } from "react";

type SafeHTMLProps = {
  htmlContent: TrustedHTML | string;
} & HTMLAttributes<HTMLDivElement>;

export default function SafeHTML({ htmlContent, ...rest }: SafeHTMLProps) {
  const sanitizedContent = DOMPurify.sanitize(htmlContent.toString());

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} {...rest} />
  );
}
