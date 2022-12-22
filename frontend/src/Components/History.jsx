import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import convertRupiah from "rupiah-format";
import { ordersAtom } from "../globalState";

export default function History() {
  // const hostname = "192.168.18.9";
  // const hostname = "192.168.1.7";
  const hostname = "10.200.4.144";

  const [orders, setOrders] = useAtom(ordersAtom);
  const getOrders = async () => {
    try {
      const response = await axios.get(`http://${hostname}:5000/orders/?limit=200`);
      setOrders(response.data);
    } catch (err) {
      const response = await axios.get(`http://localhost:5000/orders/?limit=200`);
      setOrders(response.data);
    }
  };
  useEffect(() => {
    getOrders([]);
  }, []);
  
  const [profittotal, setProfittotal] = useState(0);
  useEffect(() => {
    let total = 0;
    orders.map((order) => {
      order.modal = order.jumlah * order.harga_beli;
      order.penjualan = order.jumlah * order.harga_jual;
      order.profit = order.penjualan - order.modal;
      total += order.profit;
    });
    setProfittotal(total);
  }, [orders]);

  const moment = require("moment");
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="flex flex-col mt-3 mb-4">
          <div className="flex bg-gray-200 gap-3 rounded-3xl h-12 w-screen shadow">
            <Link to="/" className="flex text-red-600">
              <div className="flex justify-center items-center bg-gray-100 w-12 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
            </Link>
            <div className="flex items-center pt-2">
              <h1 className=" text-2xl text-red-600 italic ">History</h1>
            </div>
          </div>
        </div>
        <div className="flex p-2 ">
          <div className="flex justify-center items-center text-xl">
            Total Keuntungan : {convertRupiah.convert(profittotal)}
          </div>
        </div>
        {orders.map((order) => (
          <div className="w-full px-4 mt-2">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                      <span>{moment(order.tanggal).format("YYYY-MM-DD")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex justify-center items-center pt-2 pb-2 text-sm text-gray-500">
                      <div className="flex flex-col gap-4 p-2 bg-gray-200 rounded-lg w-80 shadow">
                        <div className="flex justify-between ">
                          <div>Tanggal Order : </div>
                          <div>
                            {" "}
                            {moment(order.tanggal).format("YYYY-MM-DD")}
                          </div>
                        </div>
                        <div className="flex justify-between ">
                          <div>Merk Minyak :</div>
                          <div>{order.merk}</div>
                        </div>
                        <div className="flex justify-between ">
                          <div>Jumlah Order :</div>
                          <div>{order.jumlah}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Harga Beli :</div>
                          <div>{convertRupiah.convert(order.harga_beli)}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Harga Jual :</div>
                          <div>{convertRupiah.convert(order.harga_jual)}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Modal :</div>
                          <div>{convertRupiah.convert(order.modal)}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Total Penjualan :</div>
                          <div>{convertRupiah.convert(order.penjualan)}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Keuntungan :</div>
                          <div>{convertRupiah.convert(order.profit)}</div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
