const display = document.querySelector('.tasks-container');

const showProducts = async () => {
  const { data: products } = await axios.get('/store/v1/products')
  console.log(products)
  display.innerHTML = products.map((product) => { return product.name });
}
showProducts()