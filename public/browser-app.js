const display = document.querySelector('#productWrap');

const showProducts = async () => {
  const { data: products } = await axios.get('/store/v1/products')
  display.innerHTML = products.map(product => {
    return `<div class="product">
      <h1>${product.name}</h1>
      <h2>${product.rating}</h2>
      <img src="../images/${product.image}"/>
      <h3>${product.company}</h3>
      <h3>${new Intl.DateTimeFormat('en-US').format(new Date(product.createdAt))}</h3>
      <h6>${product.price}</h6>
      <h3>${product.featured}</h3>
    </div>` }).reduce((a, c) => a + c);
}
showProducts()