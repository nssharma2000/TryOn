import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import "../styles/BG.css"
import { motion } from "motion/react"
import { Link } from "react-router"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

function Analytics()
{

  const tryOnData = [
  { date: "Mon", tryOns: 120 },
  { date: "Tue", tryOns: 180 },
  { date: "Wed", tryOns: 150 },
  { date: "Thu", tryOns: 220 },
  { date: "Fri", tryOns: 300 },
  { date: "Sat", tryOns: 260 },
  { date: "Sun", tryOns: 340 }
]

const productData = [
  { name: "Black Jacket", count: 245 },
  { name: "Denim Shirt", count: 198 },
  { name: "White Tee", count: 176 },
  { name: "Blue Hoodie", count: 154 },
  { name: "Formal Blazer", count: 142 }
]

const deviceData = [
  { name: "Mobile", value: 68 },
  { name: "Desktop", value: 25 },
  { name: "Tablet", value: 7 }
]

const COLORS = [
    "#ec4899",
    "#3b82f6",
    "#14b8a6"
  ];
  
   


  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className="mx-auto w-full flex justify-start items-start">
        <div id="animated-bg" className="w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-50 flex flex-col justify-start items-center gap-6">
          <Navbar />
          <div className="w-full flex justify-center items-center text-3xl text-pink-600 font-semibold">
              Analytics
          </div>
          <div className={`max-w-[90%] backdrop-blur-[0.5px] flex flex-col justify-center items-center transform transition-all duration-800 px-12 py-16 mt-16 bg-white/60 rounded-2xl transition-all transform hover:scale-102 border-1 border-gray-200 shadow-lg/10`}>
              <div className="grid grid-cols-2 gap-6 mb-10">

                <div className="bg-white rounded-xl shadow p-6">
                  <p className="text-gray-500">
                    Total Users
                  </p>
                  <h2 className="text-3xl font-bold">
                  2,481
                  </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                  <p className="text-gray-500">
                    Total Try Ons
                  </p>
                  <h2 className="text-3xl font-bold">
                    12,450
                  </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                  <p className="text-gray-500">
                    Products
                  </p>
                  <h2 className="text-3xl font-bold">
                    10
                  </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                  <p className="text-gray-500">
                    Conversion Rate
                  </p>
                  <h2 className="text-3xl font-bold">
                    18.2%
                  </h2>
                </div>
              </div>
        </div>
        <motion.div className={`max-w-[90%] backdrop-blur-[0.5px] mb-16 flex flex-col justify-center items-center transform transition-all duration-800 px-12 py-16 mt-16 bg-white/60 rounded-2xl hover:scale-102 border-1 border-gray-200 shadow-lg/10`}
        initial={{ translateY: "-20%", opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: 0.8 }}}
        >
          <div className="flex flex-col justify-start items-center gap-8 mb-10">
              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-semibold mb-4">
                  Try-On Volume
                </h2>

                <ResponsiveContainer
                  width={500}
                  height={300}
                >
                  <LineChart data={tryOnData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="tryOns"
                      stroke="#ec4899"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>

              </div>

              
              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-semibold mb-4">
                  Device Split
                </h2>

                <ResponsiveContainer
                  width={500}
                  height={300}
                >
                  <PieChart>
                    <Pie
                      data={deviceData}
                      dataKey="value"
                      outerRadius={100}
                      label
                    >
                      {deviceData.map(
                        (_, index) => (
                          <Cell
                            key={index}
                            fill={
                              COLORS[index]
                            }
                          />
                        )
                      )}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

              </div>
            </div>


            
            <div className="bg-white p-6 rounded-xl shadow mb-10">

              <h2 className="text-xl font-semibold mb-4">
                Product Popularity
              </h2>

              <ResponsiveContainer
                width={500}
                height={300}
              >
                <BarChart data={productData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    fill="#3b82f6"
                  />
                </BarChart>
              </ResponsiveContainer>

            </div>

           
            <div className="bg-white rounded-xl shadow overflow-hidden">

              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  Product Statistics
                </h2>
              </div>

              <table className="w-full">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4">
                      Product
                    </th>

                    <th className="text-left p-4">
                      Try-Ons
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {productData.map((product) => (
                    <tr
                      key={product.name}
                      className="border-t"
                    >
                      <td className="p-4">
                        {product.name}
                      </td>

                      <td className="p-4">
                        {product.count}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default Analytics