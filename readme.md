# Grocery Store

HOST URL : http://localhost:8080/api

Features

1. Create customers, get customers info (orders,maxOrderinLastyear)
2. Create product, edit product price
3. Create cart, place order from cart, order single product
4. Create categories
5. Get all products

## Customer Routes

```
GET - /allCustomers
POST - /createCustomer
GET - /getCustomer/:customerId
```

## Order Routes

```
POST -  /placeSingleOrder/:customerId/:productId/:quantity
PATCH -  /addToCart/:customerId/:productId/:quantity
PATCH -  /placeOrder/:customerId/:cartId
```

## Product Routes

```
GET - /allProducts
POST - /addProduct
PATCH - /updateProduct/:productId
```

## Category Routes

```
GET - /allCategories
POST - /addcategory
```
