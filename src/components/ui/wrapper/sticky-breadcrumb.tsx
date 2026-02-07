import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function StickyBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="sticky top-15 z-40 bg-background/95 backdrop-blur-sm py-4 border-b">
      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <div key={item.label} style={{ display: 'contents' }}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
