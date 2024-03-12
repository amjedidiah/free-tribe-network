import * as DOMPurify from "isomorphic-dompurify";
import { HTMLAttributes } from "react";

type SafeHTMLProps = {
  htmlContent: TrustedHTML | string;
} & HTMLAttributes<HTMLDivElement>;

export default function SafeHTML({ htmlContent, ...rest }: SafeHTMLProps) {
  const regex = /[\n\r]/g;
  const sanitizedContent = DOMPurify.sanitize(htmlContent.toString()).replace(
    regex,
    " "
  );

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} {...rest} />
  );
}
