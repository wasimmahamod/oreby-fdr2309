import { Flex } from "antd";
import React, { useContext } from "react";
import Imege from "../components/Imege";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const FilterProduct = () => {
  let location = useLocation();

  console.log(location.state.key);
  return (
    <Flex>
      <Flex className=" p-4  bg-[#f0f0f0] flex-col gap-4 md:flex-row md:gap-0 md:items-center items-start justify-between">
        <Flex className={`items-center gap-5`}>
          <div>
            <Imege src="" className={`w-32 h-32 object-cover`} />
          </div>

          <div>
            <h1 className=" font-dm font-bold text-[20px] text-primary">
              asdfasdfafsd
            </h1>

            <h2 className="font-dm font-semibold text-[14px] text-primary my-3">
              {"fvwierwer"}
            </h2>
          </div>
        </Flex>

        <div>
          <h3 className="font-dm font-bold text-3xl">$46</h3>

          <Flex className={`gap-3 mt-3`}>
            <button className="p-4 bg-primary text-white">
              <FaHeart />
            </button>
            <button className="p-4 bg-primary text-white">
              <TfiReload />
            </button>
            <button className="p-4 bg-primary text-white">
              <FaCartShopping />
            </button>
          </Flex>
        </div>
      </Flex>
      <Flex className=" p-4  bg-[#f0f0f0] flex-col gap-4 md:flex-row md:gap-0 md:items-center items-start justify-between">
        <Flex className={`items-center gap-5`}>
          <div>
            <Imege src="" className={`w-32 h-32 object-cover`} />
          </div>

          <div>
            <h1 className=" font-dm font-bold text-[20px] text-primary">
              asdfasdfafsd
            </h1>

            <h2 className="font-dm font-semibold text-[14px] text-primary my-3">
              {"fvwierwer"}
            </h2>
          </div>
        </Flex>

        <div>
          <h3 className="font-dm font-bold text-3xl">$46</h3>

          <Flex className={`gap-3 mt-3`}>
            <button className="p-4 bg-primary text-white">
              <FaHeart />
            </button>
            <button className="p-4 bg-primary text-white">
              <TfiReload />
            </button>
            <button className="p-4 bg-primary text-white">
              <FaCartShopping />
            </button>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
};

export default FilterProduct;
