import { ReactNode } from "react";

// These tags are available
type Tag = "p" | "b" | "i";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b>{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
      })}
    </>
  );
}
