const display = document.querySelector('#productWrap');

const showProducts = async () => {
  const { data: products } = await axios.get('/store/v1/products')
  display.innerHTML = products.map(product => {
    return `<div class="product">
      <h2 style="position:absolute;top:0;right:10px">${product.price}$</h2>
      <h2 style="position:absolute;top:0;left:10px">Rating: ${product.rating}</h2>
      <h1>${product.name}</h1>
      <img src="../images/${product.image}"/>
      <h2>Sold By: ${product.company}</h2>
      <h3>Created: ${new Intl.DateTimeFormat('en-US').format(new Date(product.createdAt))}</h3>
      <h3>${(product.featured) ? "FEATURED" : ""}</h3>
    </div>` }).reduce((a, c) => a + c);
}
showProducts()