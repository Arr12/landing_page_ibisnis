import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Logo from "./assets/images/icon-logo.png";
import LogoIbisnis from "./assets/images/logo-ibisnis.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TemplateJson from "../template.json";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import ProgressScrollBar from "./components/ProgressScrollBar";

function App() {
  const [products, setProducts] = useState(false);
  const [productsLoad, setProductsLoad] = useState(false);
  const [posts, setPosts] = useState(false);
  const [postsLoad, setPostsLoad] = useState(false);
  const [limitProductsLoad, setLimitProductsLoad] = useState(6);
  const [limitPostsLoad, setLimitPostsLoad] = useState(6);
  const [scrollPosition, setScrollPosition] = useState(0);

  const listenToScrollEvent = () => {
    window.addEventListener("scroll", () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        const scrolled = Math.ceil(scrollPx / winHeightPx * 100);
        setScrollPosition(scrolled)
      }
    )
  }

  useEffect(() => {
    listenToScrollEvent()
  }, [scrollPosition])

  const fetchDataProducts = (setProducts, setProductsLoad, status) => {    
    if (status) {
      if(limitProductsLoad < 30){
        setLimitProductsLoad(6)
      }
      axios
        .get(`https://dummyjson.com/products?limit=${limitProductsLoad}`)
        .then((result) => {
          setProductsLoad(result.data.products)
        })
      setLimitProductsLoad(limitProductsLoad + 6)
    }
    else {
      setLimitProductsLoad(6)
      axios
        .get(`https://dummyjson.com/products?limit=${limitProductsLoad}`)
        .then((result) => {
          setProducts(result.data.products)
        });
    }
  };

  const fetchDataPosts = (setPosts, setPostsLoad, status) => {
    if (status) {
      if(limitPostsLoad < 30){
        setLimitPostsLoad(6)
      }
      axios
        .get(`https://dummyjson.com/products?limit=${limitPostsLoad}`)
        .then((result) => {
          setPostsLoad(result.data.products)
        });
      setLimitPostsLoad(limitPostsLoad + 6)
    } else {
      setLimitPostsLoad(6)
      axios
      .get(`https://dummyjson.com/products?limit=${limitPostsLoad}`)
        .then((result) => {
            setPosts(result.data.products);
        });
    }
  };

  useEffect(() => {
    if(!products){
      fetchDataProducts(setProducts, false, false);
    }
  }, [products]);

  useEffect(() => {
    if(!productsLoad){
      fetchDataProducts(false, setProductsLoad, true);
    }
  }, [productsLoad]);

  useEffect(() => {
    if(!posts) {
      fetchDataPosts(setPosts, false, false);
    }
  }, [posts])

  useEffect(() => {
    if(!postsLoad) {
      fetchDataPosts(false, setPostsLoad, true);
    }
  }, [postsLoad])

  // console.log(products, productsLoad, postsLoad, posts)

  return (
    <div className="App">
      <div className="relative">
        <Navbar Menu={TemplateJson.menu} Logo={Logo} LogoIbisnis={LogoIbisnis} />
        <ProgressScrollBar scroll={scrollPosition + '%'} />
      </div>
      <Breadcrumb
        title={TemplateJson.section1.title}
        subtitle={TemplateJson.section1.subtitle}
        description={TemplateJson.section1.description}
      />
      <Content
        Json={TemplateJson}
        products={products}
        productsLoad={productsLoad}
        setProductsLoad={setProductsLoad}
        fetchDataProducts={fetchDataProducts}
        posts={posts}
        setPostsLoad={setPostsLoad}
        postsLoad={postsLoad}
        fetchDataPosts={fetchDataPosts}
      />
      <Footer
        Json={TemplateJson}
        Menu={TemplateJson.menu}
        Logo={Logo}
        LogoIbisnis={LogoIbisnis}
      />
    </div>
  );
}

export default App;
