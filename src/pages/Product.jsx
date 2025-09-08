// import { useGSAP } from '@gsap/react'
import ProductCard from "../components/products/ProductCard";
// import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import ProductHeading from "../components/products/ProductHeading";
import ProductFilterBtn from "../components/products/ProductFilterBtn";

const Project = () => {
  

  const products = [
    {
      name: "T-Shirt",
      price: "$20",
      image:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    },
    {
      name: "Shoes",
      price: "$50",
      image:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      name: "Watch",
      price: "$100",
      image:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img01.jpg",
    },
    {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img02.jpg",
    },
     {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img03.jpg",
    },
     {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img04.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img05.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img06.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img07.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img08.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img09.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img10.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img11.jpg",
    },
 {
      name: "T-Shirt",
      price: "$20",
      image:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    },
    {
      name: "Shoes",
      price: "$50",
      image:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      name: "Watch",
      price: "$100",
      image:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img01.jpg",
    },
    {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img02.jpg",
    },
     {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img03.jpg",
    },
     {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img04.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img05.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img06.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img07.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img08.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img09.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img10.jpg",
    }, {
      name: "Watch",
      price: "$100",
      image:
        "public/ProductImg/img11.jpg",
    },

  ];

 

  return (
    <div className="lg:p-4 p-2 bg-[#fff6f9]  ">
      <ProductHeading/>
      <ProductFilterBtn/>
      <div className="  p-4 bg-[#fff6f9]   grid lg:mt-12 lg:grid-cols-4 lg:gap-6 grid-cols-1 gap-y-4 items-center">
        {products.map((elem, idx) => (
          <div key={idx}>
            <ProductCard

            
              key={idx}
              name={elem.name}
              price={elem.price}
              image={elem.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
