export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Furniture Product Schema
    {
      name: 'product',
      title: 'Product',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
        { name: 'price', title: 'Price', type: 'number' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'category', title: 'Category', type: 'string' },
        { name: 'dimensions', title: 'Dimensions', type: 'string' },
        { name: 'material', title: 'Material', type: 'string' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'stock', title: 'Stock', type: 'number' },
        { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
      ],
    },
    // Order Schema
    {
      name: 'order',
      title: 'Order',
      type: 'document',
      fields: [
        { name: 'customer', title: 'Customer', type: 'reference', to: [{ type: 'customer' }] },
        { name: 'orderDate', title: 'Order Date', type: 'datetime' },
        { name: 'status', title: 'Status', type: 'string', options: { list: ['Pending', 'Processing', 'Shipped', 'Delivered'] } },
        { name: 'total', title: 'Total', type: 'number' },
        { 
          name: 'items', 
          title: 'Items', 
          type: 'array', 
          of: [
            {
              type: 'object',
              fields: [
                { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
                { name: 'quantity', title: 'Quantity', type: 'number' },
              ],
            },
          ],
        },
      ],
    },
    // Customer Schema
    {
      name: 'customer',
      title: 'Customer',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'object', fields: [
            { name: 'street', title: 'Street', type: 'string' },
            { name: 'city', title: 'City', type: 'string' },
            { name: 'state', title: 'State', type: 'string' },
            { name: 'postalCode', title: 'Postal Code', type: 'string' },
          ],
        },
      ],
    },
  ]),
});
