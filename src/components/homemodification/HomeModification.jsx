import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetHomeModificationCat, GetProducts } from "../../api/api";
import Spinner from "../common/spinner/Spinner";
import Bathroom from "./bathroom/Bathroom";
import BedRoom from "./bedroom/BedRoom";
import Entrances from "./entrances/Entrances";
import Garage from "./garage/Garage";
import GrabBars from "./grabbars/GrabBars";
import HallWays from "./hallways/HallWays";
import Kitchen from "./kitchen/Kitchen";
import LandingPage from "./landingpage/LandingPage";
import Lifts from "./lifts/Lifts";
import Lighting from "./lighting/Lighting";
import Stairs from "./stairs/Stairs";

export default function HomeModification() {
  const [productCatList, setproductCatList] = useState("empty");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("");
  const [images, setImages] = useState();
  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    GetHomeModificationCat()
      .then((data) => {
        const tempList = data.body.map((obj) => {
          obj["isActive"] = false;
          return obj;
        });
        setproductCatList(tempList);
      })
      .then(setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onCategoryClick = (event) => {
    const userData = {
      category: event.currentTarget.id.toLowerCase(),
    };

    productCatList?.map((category) => {
      category["isActive"] = false;
    });

    for (let i in productCatList) {
      if (productCatList[i].cat == event.currentTarget.id) {
        productCatList[i]["isActive"] = true;
        if (userData.category !== "lighting") {
          setImages(productCatList[i].images.split(","));
        }
        setPage(event.currentTarget.id.toLowerCase());
        break;
      }
    }
  };

  const DisplayPage = () => {
    switch (page) {
      case "bathroom":
        return <Bathroom images={images} />;

      case "grab bars":
        return <GrabBars images={images} />;

      case "bedroom":
        return <BedRoom images={images} />;

      case "entrences":
        return <Entrances images={images} />;

      case "garage":
        return <Garage images={images} />;

      case "hallways":
        return <HallWays images={images} />;

      case "kitchen":
        return <Kitchen images={images} />;

      case "stairs":
        return <Stairs images={images} />;

      case "lighting":
        return <Lighting />;

      case "lifts/slings":
        return <Lifts images={images} />;

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
                <a
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </a>
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
                            <a
                              style={{
                                color: category.isActive
                                  ? "#a8be40"
                                  : "#696763",
                              }}
                              onClick={onCategoryClick}
                              id={category.cat}
                            >
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
