import React, { useEffect, useState } from "react";
import { getProducts, Product } from "../../app/api";
import styles from "./Products.module.css";
import { receivedProducts } from "./productsSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addToCart } from "../cart/CartSlice";

export const Products = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  // const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, []);

  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
                <figcaption className={styles.caption}>
                  {product.imageCredit}
                </figcaption>
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product.id))}>
                  Add to Cart 🛒
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};
