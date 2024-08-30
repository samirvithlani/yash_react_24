import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // const state =  useSelector((state)=>state)
  // console.log("state...",state)
  const cartState = useSelector((state)=>state.cart)
  console.log("cartState...",cartState)
  const bankState = useSelector((state)=>state.bank)
  console.log("bankState...",bankState)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {
          cartState.cart?.length
        }
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/netflixhome">
                netflix home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                netflix shows
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                apidemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                apidemo3
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/useEffectdemo">
              useEffectdemo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
              products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/querydemo1">
              query demo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/querydemo2">
              query demo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/prodcomp">
              products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/bankcomp">
              bank comp
              </Link>
            </li>
            <li class="nav-item">
              bank balance: {bankState.balance}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
