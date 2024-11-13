import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout"
import Movies from "./mocks/movies.jsx"


const Routering = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Movies />
        </Layout>
      ),
    },
    {
      path : "/login",
      element : (
        <Layout>
          <h1 style = {{color : "white"}}>로그인페이지</h1>
        </Layout>
      )
    },
    {
      path : "/signup",
      element :(
        <Layout>
          <h1 style = {{color : "white"}}>회원가입페이지</h1>
        </Layout>
      )
    },
    {
        path : "/find",
        element :(
          <Layout>
            <h1 style = {{color : "white"}}>찾기 페이지</h1>
          </Layout>
          )
    },
    {
        path : "/categories",
        element :(
          <Layout>
            <h1 style = {{color : "white"}}>영화 카테고리</h1>
          </Layout>
          )
    }
  ]);

  export default Routering;