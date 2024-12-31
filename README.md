Este es un paquete de pruebas de despligue de NPM

### Leonel Gonzalez

## Ejemplo

```
import {
  ProductCard, 
  ProductImage, 
  ProductTitle,
  ProductButtons
} from 'lg-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}>
  {
    ({ reset, increaseBy, count, maxCount ,isMaxCountReached }) => (
      <>
        <ProductImage/>
        <ProductTitle/>
        <ProductButtons/>
      </>
    )
  }

</ProductCard>
```
