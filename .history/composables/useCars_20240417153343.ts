import cars from "@/data/3.1 cars.json";

export const useCars = () => {
  function Cars() {
    return cars;
  }

  return {
    importCars,
  };
};
