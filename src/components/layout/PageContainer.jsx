export default function PageContainer({
  children,
}) {
  return (
    <section className="py-20">

      <div className="container">

        {children}

      </div>

    </section>
  );
}