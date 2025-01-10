import { Heading } from "@/components/common";
import Header from "@/components/ui-components/header/Header";
import { ComplexHeader } from "@/components/ui-components/headers/complex-header";
import { SearchHeader } from "@/components/ui-components/headers/search-header";
import { SimpleHeader } from "@/components/ui-components/headers/simple-header";
import MegaMenuHeader from "@/components/ui-components/mega-menu-header/Header";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="grid gap-5">
      <div>
        <h2 className="text-2xl font-bold mb-4">Header</h2>
        <Header />
      </div>
      <Separator />
      <div>
        <h2 className="text-2xl font-bold mb-4">Mega Menu Header</h2>
        <MegaMenuHeader />
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Simple Header</h2>
        <SimpleHeader />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Header with Search</h2>
        <SearchHeader />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complex Header</h2>
        <ComplexHeader />
      </section>
    </div>
  );
}
