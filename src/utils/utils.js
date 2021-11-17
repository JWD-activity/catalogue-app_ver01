export const searchFilter = (products, query) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
};

export const categoryFilter = (products, categories) => {
  return products.filter(
    (product) =>
      categories.includes(product.type.toLowerCase()) ||
      (categories.includes('organic') && product.organic === true)
  );
};

export const isAllSelected = (catalogue) => {
  return catalogue.map((item) => item.name.toLowerCase());
};

export const deleteItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};
