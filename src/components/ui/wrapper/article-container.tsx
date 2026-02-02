import PageLayout from "@/components/PageLayout";
import { ReactNode } from "react";

export function ArticleContainer({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <article className="space-y-6 pb-50">{children}</article>
    </PageLayout>
  );
}
