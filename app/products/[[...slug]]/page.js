
import PageHeader from "../../components/PageHeader"
import ProductList from "./ProductList";

async function page({params}) {
  const slug = params?.slug ? params.slug[0] : "";
  return (
    <div>
      <PageHeader title="Products"  />

      <ProductList selectedCategory={slug} />

    </div>
  )
}

export default page
