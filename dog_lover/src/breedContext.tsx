import React, { useContext, useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  DogBreed,
  ListAllResponse,
  ImageResponse,
  DogBreedImage,
} from "../components/breedSelectorBox";

const ClickedBreedContext = React.createContext({} as DogBreedImage[]);
const BreedContext = React.createContext({} as DogBreed[]);
const HeartContextUpdate = React.createContext({} as any);
const FetchBreedsContextUpdate = React.createContext({} as any);
const OpenContext = React.createContext({} as boolean);
const QueryContext = React.createContext({} as any);
const QueryContextUpdate = React.createContext({} as any);
const RandomImageContext = React.createContext({} as ImageResponse[]);
const RandomImageContextUpdate = React.createContext({} as any);

export const useVariableBreedContext = () => {
  return useContext(BreedContext);
};
export const useVariableClickedBreedContext = () => {
  return useContext(ClickedBreedContext);
};
export const useVariableOpenContext = () => {
  return useContext(OpenContext);
};
export const useVariableQueryContext = () => {
  return useContext(QueryContext);
};
export const useFunctionHeartContext = () => {
  return useContext(HeartContextUpdate);
};
export const useFunctionFetchBreedsContext = () => {
  return useContext(FetchBreedsContextUpdate);
};
export const useFunctionQueryContext = () => {
  return useContext(QueryContextUpdate);
};
export const useVariableRandomImageContext = () => {
  return useContext(RandomImageContext);
};
export const useFunctionRandomImageContext = () => {
  return useContext(RandomImageContextUpdate);
};

export const BreedProvider = ({ children }: { children: any }) => {
  const [breeds, setBreeds] = useState<DogBreed[]>([]);
  const [clickedBreed, setClickedBreed] = useState<DogBreedImage[]>([]);
  const [isOpened, setIsOpened] = useState(false);
  const [query, setQuery] = useState("");
  const [randomImage, setRandomImage] = useState<ImageResponse[]>([]);

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
    console.log("toggle");
  };

  const handleHeartClicked = (breed: string) => () => {
    setClickedBreed((state) => ({
      ...state, // <-- copy previous state
      [breed]: !state[breed], // <-- update value by index key
    }));
    toggle();
  };

  const fetchBreedsList = async () => {
    // fetch all breeds. Axios requests can be typed for the response
    try {
      const {
        data: { message: allBreeds },
      } = await axios.get<ListAllResponse>(
        "https://dog.ceo/api/breeds/list/all"
      );

      // extract keys from the ListAllResponse.message
      const keys = Object.keys(allBreeds);

      // resolve images and create DogBreed objects
      const dogBreeds = await Promise.all(
        keys.map(async (key) => {
          const {
            data: { message: value },
          } = await axios.get<ImageResponse>(
            `https://dog.ceo/api/breed/${encodeURIComponent(key)}/images/random`
          );
          return { key, value };
        })
      );
      setBreeds(dogBreeds);
    } catch (err) {
      console.log(err);
    }
  };

  const filterList = (e: any) => {
    setQuery(e.target.value);
  };

  const fetchRandomImages = async () => {
    try {
      const res: AxiosResponse = await axios.get<ImageResponse>(
        "https://dog.ceo/api/breeds/image/random"
      );
      setRandomImage(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ClickedBreedContext.Provider value={clickedBreed}>
      <BreedContext.Provider value={breeds}>
        <HeartContextUpdate.Provider value={handleHeartClicked}>
          <FetchBreedsContextUpdate.Provider value={fetchBreedsList}>
            <OpenContext.Provider value={isOpened}>
              <QueryContext.Provider value={query}>
                <QueryContextUpdate.Provider value={filterList}>
                  <RandomImageContext.Provider value={randomImage}>
                    <RandomImageContextUpdate.Provider
                      value={fetchRandomImages}
                    >
                      {children}
                    </RandomImageContextUpdate.Provider>
                  </RandomImageContext.Provider>
                </QueryContextUpdate.Provider>
              </QueryContext.Provider>
            </OpenContext.Provider>
          </FetchBreedsContextUpdate.Provider>
        </HeartContextUpdate.Provider>
      </BreedContext.Provider>
    </ClickedBreedContext.Provider>
  );
};
