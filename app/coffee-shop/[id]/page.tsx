export default function CoffeeShopPage({ params }: { params: { id: string } }) {
  return <div>Coffee Shop Page: {params.id}</div>;
}
