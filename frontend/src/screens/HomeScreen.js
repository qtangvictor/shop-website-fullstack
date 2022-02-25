import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
//import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import { useSearchParams } from "react-router-dom";

//import axios from 'axios'

function HomeScreen() {
  // fetch data by api call
  //const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  // get keyword from url
  const [searchParams, setSearchParams] = useSearchParams(); //useSearchParam is to get the paras in the url path after question mark. equavalent to location
  //console.log(searchParams.toString(),searchParams.get("keyword"),searchParams.get("page"))
  //const keyword = '?keyword=' + searchParams.get("keyword")
  const keyword = searchParams.toString() ? "?" + searchParams.toString() : "";
  //const keyword = "?" + searchParams.toString();
  useEffect(() => {
    // async function fetchProducts() {
    //   const { data } = await axios.get('/api/products/')
    //   setProducts(data)
    // }
    // fetchProducts()
    dispatch(listProducts(keyword)); //fire off reducer
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={1} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
