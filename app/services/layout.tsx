export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 md:py-10">
      <div>
        {children}
      </div>
    </section>
  );
}
