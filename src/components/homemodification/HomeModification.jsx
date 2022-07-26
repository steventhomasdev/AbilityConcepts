import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetHomeModificationCat, GetProducts } from "../../api/api";
import Spinner from "../common/spinner/Spinner";
import Bathroom from "./bathroom/Bathroom";
import LandingPage from "./landingpage/LandingPage";

export default function HomeModification() {
  const navigate = useNavigate();
  const [productCatList, setproductCatList] = useState("empty");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("");
  const [images, setImages] = useState();

  const fetchData = useCallback(() => {
    GetHomeModificationCat()
      .then((data) => setproductCatList(data.body))
      .then(setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onCategoryClick = (event) => {
    const userData = {
      category: event.currentTarget.id.toLowerCase(),
    };

    for (let i in productCatList){
        console.log(productCatList[i].cat)
        if(productCatList[i].cat == event.currentTarget.id){
            setImages(productCatList[i].images.split(","))
            setPage(event.currentTarget.id.toLowerCase());
            break;
        }
    }

  };

  const DisplayPage = () => {
    switch (page) {
      case "bathroom":
        return <Bathroom images={images}/>;

      default:
        return <LandingPage />;
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a>Home</a>
              </li>
              <li className="active">Home Modification</li>
            </ol>
          </div>
          {loading || productCatList === "empty" ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <div className="brands_products" style={{ marginTop: "5%" }}>
                    <div className="brands-name">
                      <ul className="nav nav-pills nav-stacked">
                        {productCatList?.map((category) => (
                          <li>
                            <a onClick={onCategoryClick} id={category.cat}>
                              {category.cat}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  <div className="row" style={{ paddingLeft: "30px" }}>
                    <DisplayPage />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
  //   } else if (productCatList != "empty") {
  //     return (
  //       <div>
  //         <section>
  //           <div className="container">
  //             <div className="breadcrumbs">
  //               <ol className="breadcrumb">
  //                 <li>
  //                   <a>Home</a>
  //                 </li>
  //                 <li className="active">Home Modification</li>
  //               </ol>
  //             </div>
  //             <div className="row">
  //               <div className="col-sm-3">
  //                 <div className="left-sidebar">
  //                   <div className="brands_products" style={{ marginTop: "5%" }}>
  //                     <br />
  //                     <h2>Categories</h2>
  //                     <div className="brands-name">
  //                       <ul className="nav nav-pills nav-stacked">
  //                         {productCatList?.map((category) => (
  //                           <li>
  //                             <a onClick={onCategoryClick} id={category.cat}>
  //                               {category.cat}
  //                             </a>
  //                           </li>
  //                         ))}
  //                       </ul>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
                // <div className="col-sm-9 padding-right">
                //   <div className="features_items">
                //     <div className="row">

                //     </div>
                //   </div>
                // </div>
  //             </div>
  //           </div>
  //         </section>
  //       </div>
  //     );
  //   }
}
