import cars from "@/data/3.1 cars.json";

export const useCars = () => {
  function importCars(): a {
    return cars;
  }

  return {
    importCars,
  };
};
