import { useEffect, useState } from "react";
import { Permission } from "./utils/enums";
import { Age } from "./utils/types";
import { simpleUseState } from "./utils/tuple";
// arrObj: ()[] =[{}]
const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: {
    freeWifi: boolean;
    freeParking: boolean;
    specialOffer: boolean;
  };
}[] = [
  {
    image: "https://source.unsplash.com/random",
    name: "Zuich , Switzerland",
    totalReviews: 148,
    rating: 4.8,
    location: "Switzerland",
    price: 300,
    date: "23/05/2001",
    departure: "Viet Nam",
    features: {
      freeWifi: true,
      freeParking: true,
      specialOffer: false,
    },
  },
];

//const obj: {} = {}
//union type

function App() {
  const [count, setCount] = useState(0);
  const user: {
    firstName: string;
    lastName: string;
    age: Age; // literal
    isStudent: boolean;
    school: (string | number)[]; //union type
    scores: number[]; //array type
    contact: [number, string]; // tuple type
    permission: Permission;
  } = {
    firstName: "Nguyen",
    lastName: "Hong Quan",
    age: 18,
    isStudent: false,
    school: ["HAUI , HA NOI", 88],
    scores: [10, 9, 8],
    contact: [123, "quan@gmail.com"],
    permission: Permission.ADMIN,
  };

  function displayReview(totalReviews: number, name: string, premium: boolean) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong>
        {premium ? "⭐️" : ""}
      </>
    );
  }
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
