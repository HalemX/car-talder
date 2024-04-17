import cars from "@/data/3.1 cars.json";

export const useCars = () => {
  function importCars():  {
    return cars;
  }

  return {
    importCars,
  };
};
