import { useEffect, useState } from "react";
import { DogFact } from "./components/DogFact";
import Lottie from "react-lottie";
import animation from "./Animation.json";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState();

  // Hint: Define the API endpoint
  const URL = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact
  const handleDogFact = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDogFact(json);
      });
  };

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    handleDogFact();
  }, []);

  return (
    <div className="App">
      {dogFact ? (
        <DogFact dogFact={dogFact} />
      ) : (
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animation,
            }}
            height={400}
            width={400}
          />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};
