import ServiceFormPage from "../../create/page";

export default async function EditServicePage({
  params,
}) {
  const { slug } = await params;

  return <ServiceFormPage editSlug={slug} />;
}
