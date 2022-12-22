// // Contoh Data Dummy
// let orders = [
//     {
//       tanggal: new Date("Dec 2, 2022"),
//       merk: "Fortune",
//       jumlah: 100,
//       harga_beli: 1400000,
//       harga_jual: 1600000,
//     },
//     {
//       tanggal: new Date("Dec 5, 2022"),
//       merk: "Sunco",
//       jumlah: 100,
//       harga_beli: 1400000,
//       harga_jual: 1600000,
//     },
//     {
//       tanggal: new Date("Dec 6, 2022"),
//       merk: "Bimoli",
//       jumlah: 100,
//       harga_beli: 1400000,
//       harga_jual: 1600000,
//     },
//     {
//       tanggal: new Date("Dec 8, 2022"),
//       merk: "Sania",
//       jumlah: 100,
//       harga_beli: 1400000,
//       harga_jual: 1600000,
//     },
//   ];
  
//   // Prototype Data Report Mingguan
//   let report = {
//     minggu1: {
//       minggu: 1,
//       merk: [],
//       jumlah: 0,
//       harga_beli: 0,
//       harga_jual: 0,
//     },
//     minggu2: {
//       minggu: 2,
//       merk: [],
//       jumlah: 0,
//       harga_beli: 0,
//       harga_jual: 0,
//     },
//     minggu3: {
//       minggu: 3,
//       merk: [],
//       jumlah: 0,
//       harga_beli: 0,
//       harga_jual: 0,
//     },
//     minggu4: {
//       minggu: 4,
//       merk: [],
//       jumlah: 0,
//       harga_beli: 0,
//       harga_jual: 0,
//     },
//   };
  
//   // Untuk menempatkan data ke report tergantung minggunya pada foreach tanpa harus pakai if-else atau switch case
//   let mingguMap = {
//     minggu1: report.minggu1,
//     minggu2: report.minggu2,
//     minggu3: report.minggu3,
//     minggu4: report.minggu4,
//   };
  
//   // Mapping setiap data order ke report
//   orders.forEach((order) => {
//     // mengambil nomor minggu sesuai tanggal
//     let m = Math.ceil(order.tanggal.getDate() / 7);
    
//     // memasukkan data ke minggu ke-4 jika tanggalnya lebih dari minggu ke-4
//     m = m > 4 ? 4 : m;
    
//     // mengubahnya menjadi string "minggu" + no.minggu untuk mapping pakai object mingguMap
//     let minggu = "minggu" + m.toString();
    
//     // memasukkan merk ke array agar bisa menampung banyak merk jika terdapat merk yang berbeda
//     if (!mingguMap[minggu].merk.includes(order.merk)) {
//       mingguMap[minggu].merk.push(order.merk);
//     }
    
//     // mengakumulasi jumlah order pada setiap order per minggunya
//     mingguMap[minggu].jumlah = mingguMap[minggu].jumlah + order.jumlah;
    
//     // mengakumulasi harga beli pada setiap order per minggunya
//     mingguMap[minggu].harga_beli += order.harga_beli;
    
//     // mengakumulasi harga jual pada setiap order per minggunya
//     mingguMap[minggu].harga_jual += order.harga_jual;
    
//     // menentukan profit dari harga jual dikurangi harga beli
//     mingguMap[minggu].profit =
//       mingguMap[minggu].harga_jual - mingguMap[minggu].harga_beli;
//   });
  
//   // cetak ke layar
//   // console.log(report);
//   console.log(mingguMap)

// import React from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
// import { Toast } from "primereact/toast";

// function Item() {
//   const TambahM = (wadahAtribut) => {
//     const [merk, setMerk] = useState("");
//     const [harga, setHarga] = useState("");
//     const [tgl, setTgl] = useState("");

//     const saveItems = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.post("http://localhost:5000/items", {
//           merk,
//           harga,
//           tgl
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const [displayMaximizable, setDisplayMaximizable] = useState(false);
//     const [position, setPosition] = useState("center");
//     const dialogFuncMap = {
//       displayMaximizable: setDisplayMaximizable,
//     };
//     const onClick = (name, position) => {
//       dialogFuncMap[`${name}`](true);

//       if (position) {
//         setPosition(position);
//       }
//     };

//     const onHide = (name) => {
//       dialogFuncMap[`${name}`](false);
//     };

//     // const renderFooter = (name) => {
//     //   return (
//     //     <div>
//     //       <Button
//     //         label="Add"
//     //         icon="pi pi-plus"
//     //         onClick={() => {
//     //           wadahAtribut.setItemm(
//     //             (itemTerkini) => [...itemTerkini, mItem],
//     //             onHide(name)
//     //           );
//     //         }}
//     //         autoFocus
//     //       />
//     //     </div>
//     //   );
//     // };
//     return (
//       <div className="flex fixed bottom-4 right-3 z-50">
//         <Button
//           icon="pi pi-plus"
//           style={{
//             width: "70px",
//             height: "70px",
//             backgroundColor: "blue",
//             borderRadius: "100%",
//             color: "white",
//             border: "none",
//             boxShadow:
//               "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//           }}
//           onClick={() => onClick("displayMaximizable")}
//         />
//         <Dialog
//           header="Items Minyak"
//           visible={displayMaximizable}
//           maximizable
//           modal
//           style={{ width: "80vw" }}
//           // footer={renderFooter("displayMaximizable")}
//           onHide={() => onHide("displayMaximizable")}
//         >
//           <div className="lg:pr-56">
//             <form onSubmit={saveItems} class="lg:w-full lg:mx-24">
//               <div className="">
//                 <label className="text-xl font-bold">Merk Minyak</label>
//                 <input
//                   className="w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray"
//                   type="text"
//                   value={merk}
//                   onChange={(e) => setMerk(e.target.value)}
//                 />
//               </div>
//               <div className="">
//                 <label className="text-xl font-bold">Harga</label>
//                 <input
//                   className="w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray"
//                   type="number"
//                   value={harga}
//                   onChange={(e) => setHarga(e.target.value)}
//                 />
//               </div>
//               <div className="">
//                 <label className="text-xl font-bold">Tanggal</label>
//                 <input
//                   className="w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray"
//                   type="date"
//                   value={tgl}
//                   onChange={(e) => setTgl(e.target.value)}
//                 />
//               </div>
//               <Button type="submit" icon="pi pi-plus"></Button>
//             </form>
//           </div>
//         </Dialog>
//       </div>
//     );
//   };
//   const hostname = "192.168.1.2";
//   // const hostname = "10.200.7.212";
//   const [Items, setItems] = useState([]);
//   useEffect(() => {
//     getItems();
//   }, []);
//   const getItems = async () => {
//     try {
//       const response = await axios.get(`http://${hostname}:5000/items`);
//       setItems(response.data);
//     } catch (err) {
//       const response = await axios.get(`http://localhost:5000/items`);
//       setItems(response.data);
//     }
//   };
//   const deleteItems = async (id) => {
//     try {
//       await axios.delete(`http://${hostname}:5000/items/${id}`);
//       getItems();
//     } catch (error) {
//       await axios.delete(`http://localhost:5000/items/${id}`);
//       getItems();
//       console.log(error);
//     }
//   };
//   const toast = useRef(null);
//   const accept = (itemssid) => {
//     toast.current.show({
//       severity: "success",
//       summary: "Confirmed",
//       detail: "Delete Item Success",
//       life: 3000,
//       style: { width: "90%" },
//     });
//     deleteItems(itemssid);
//   };

//   const reject = () => {
//     toast.current.show({
//       severity: "error",
//       summary: "Rejected",
//       detail: "You have rejected",
//       life: 3000,
//       style: { width: "90%" },
//     });
//   };

//   const confirm2 = (itemssid) => {
//     confirmDialog({
//       message: "Do you want to delete this record?",
//       header: "Delete Confirmation",
//       icon: "pi pi-info-circle",
//       acceptClassName: "p-button-danger",
//       accept: () => accept(itemssid),
//       reject,
//     });
//   };
//   const TableM = (wadahAtribut) => {
//     const moment = require("moment");
//     return (
//       <div className="relative rounded-xl overflow-auto mt-2">
//         <div className="shadow-sm overflow-hidden my-8">
//           <table className="border-collapse table-auto w-full text-sm">
//             <thead>
//               <tr>
//                 <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
//                   Merk
//                 </th>
//                 <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
//                   Harga
//                 </th>
//                 <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
//                   Tanggal
//                 </th>
//                 <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {wadahAtribut.Items.map((itemss, urutanKe) => (
//                 <tr key={urutanKe}>
//                   <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
//                     {itemss.merk}
//                   </td>
//                   <td className="border-b border-slate-100 p-4 text-slate-500">
//                     {itemss.harga}
//                   </td>
//                   <td className="border-b border-slate-100 p-4 pr-8 text-slate-500">
//                     {moment(itemss.tgl).format("YYYY-MM-DD")}
//                   </td>
//                   <td className="p-4 pr-8">
//                     <Button
//                       onClick={() => {
//                         confirm2(itemss._id);
//                       }}
//                       icon="pi pi-trash"
//                       className="p-button-danger"
//                     ></Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <>
//       <Toast ref={toast} position="top-left" />
//       <ConfirmDialog />
//       <div className="flex flex-col items-center ">
//         <div className="flex flex-col mt-3">
//           <div className="flex bg-gray-200 gap-3 rounded-3xl h-12 w-screen shadow">
//             <Link to="/" className="flex text-purple-600">
//               <div className="flex justify-center items-center bg-gray-100 w-12 rounded-3xl">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="w-8 h-8"
//                 >
//                   <path
//                     strokelinecap="round"
//                     strokelinejoin="round"
//                     d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
//                   />
//                 </svg>
//               </div>
//             </Link>
//             <div className="flex items-center pt-2">
//               <h1 className=" text-2xl text-purple-600 italic ">Items</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <TambahM setItems={setItems} />
//       <TableM Items={Items} />
//     </>
//   );
// }

// export default Item;

  