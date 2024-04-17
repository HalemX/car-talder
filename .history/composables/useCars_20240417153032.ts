import cars from "@/data/3.1 cars.json";

export const useCars = () => {
  function importCars(): Array {
    return cars;
  }

  return {
    importCars,
  };
};
