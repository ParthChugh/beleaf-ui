import React, { useEffect, useState, useRef } from "react";
import hookImage from "../../assets/hook.png";
import plusImage from "../../assets/plus.png";
// import { MenuItem, FormControl } from "@mui/material";
// import Select from "@mui/material/Select";

export default function AppUsersModal({ visible = true, values, closeModal }) {
  console.log("values12312312", values);
  const wrapperRef = useRef(null);
  const [newUser, setNewUser] = useState(false);
  const [role, setRole] = useState("Owner");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeModal();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const COLUMS = [
    { id: 11, name: "USER ID" },
    { id: 12, name: "NAME" },
    { id: 13, name: "CONTACT NO." },
    { id: 14, name: "ROLE" },
    { id: 15, name: "APP STATUS" },
  ];
  useEffect(() => {
    if (values.length > 0) {
      setRows(
        values.map((el) => {
          return {
            id: 16,
            userId: el.id,
            name: el.user_name,
            contactNo: el.contact_number,
            role: el.role.role,
            appStatus: el.app_status.status,
          };
        })
      );
    }
  }, [values]);

  return (
    <>
      {visible ? (
        <>
          <div className="flex overflow-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/20">
            <div
              ref={wrapperRef}
              className="relative w-full mt-[10%] ml-[20%] mr-[20%] mb-[3%] bg-white"
            >
              <div className="h-full border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="border-slate-200 rounded-t p-5">
                  <div className="flex justify-between border-b-black/50 border-b-[1px]">
                    <p className="text-black font-medium pr-10 text-lg border-b-[#3EB049] border-b-[2px]">
                      App Users
                    </p>
                    <p className="text-xs bg-[#3EB049] px-3 py-1 text-white rounded-2xl mb-5">
                      Save
                    </p>
                  </div>
                  <div className="mt-10 px-5">
                    <div className="mt-2">
                      <table className="w-full">
                        <thead>
                          <tr className="sticky top-0">
                            {COLUMS.map((col) => {
                              return (
                                <td
                                  className="text-sm text-center p-[0px] m-[0px]"
                                  key={col.id}
                                >
                                  <div className="flex items-center p-3 border-gray-200 border-b-[1px]">
                                    <p className="text-sm text-[#3EB049]">
                                      {col.name}
                                    </p>
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row) => {
                            const KEYS = Object.keys(row);
                            //console.log(Object.keys(row), "=> KEYS");
                            return (
                              <tr
                                key={row.id}
                                className="border-gray-200 border-b-[1px]"
                              >
                                {KEYS.map((col, i) => {
                                  if (col === "id") {
                                    return;
                                  }
                                  if (col === "userId") {
                                    return (
                                      <td
                                        key={i}
                                        className="text-sm p-3 text-[#0090FF] underline cursor-pointer"
                                      >
                                        {row[col]}
                                      </td>
                                    );
                                  }
                                  if (col === "appStatus") {
                                    let bgColor = "bg-yellow-400";
                                    if (row[col] === "Active") {
                                      bgColor = "bg-green-400";
                                    } else if (row[col] === "Downloaded") {
                                      bgColor = "bg-blue-400";
                                    }
                                    return (
                                      <td key={i} className="p-3">
                                        <div
                                          className={`flex ${bgColor} rounded-2xl py-1 justify-center items-center`}
                                        >
                                          <img
                                            src={hookImage}
                                            className="w-[10px] h-[10px] mr-2"
                                          />
                                          <p className="text-white text-sm">
                                            {row[col]}
                                          </p>
                                        </div>
                                      </td>
                                    );
                                  } else {
                                    return (
                                      <td key={i} className="text-sm p-2">
                                        {row[col]}
                                      </td>
                                    );
                                  }
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {newUser ? (
                        <div className="flex justify-between p-2 text-sm mt-2 mb-2 items-center">
                          {Object.keys(rows[0]).map((item, i) => {
                            if (item === "name") {
                              return (
                                <div key={i}>
                                  <input
                                    className="p-2 rounded-lg h-11"
                                    style={{ border: "1px solid #E5E8E8" }}
                                    placeholder="name"
                                    onChange={(event) =>
                                      setName(event.target.value)
                                    }
                                  />
                                </div>
                              );
                            } else if (item === "role") {
                              return (
                                <div className="px-2 py-2 rounded-lg border border-[#E5E8E8]">
                                  <select
                                    name="cars"
                                    id="cars"
                                    className="outline-none border-none px-2"
                                    onChange={(e) => setRole(e.target.value)}
                                  >
                                    <option value="Owner">Owner</option>
                                    <option value="Farm Manager">
                                      Farm Manager
                                    </option>
                                    <option value="Worker">Worker</option>
                                    <option value="Beleaf Farm Manager">
                                      Beleaf Farm Manager
                                    </option>
                                  </select>
                                </div>
                              );
                            } else if (item === "contactNo") {
                              return (
                                <div key={i}>
                                  <input
                                    className="p-2 rounded-lg h-11"
                                    style={{ border: "1px solid #E5E8E8" }}
                                    placeholder="contactNo"
                                    onChange={(event) =>
                                      setContactNo(event.target.value)
                                    }
                                  />
                                </div>
                              );
                            } else if (item === "appStatus")
                              return (
                                <div key={i}>
                                  <td key={i} className="p-3">
                                    <div className="flex bg-yellow-400 rounded-2xl py-1 justify-center items-center px-4">
                                      <img
                                        src={hookImage}
                                        className="w-[10px] h-[10px] mr-2"
                                      />
                                      <p className="text-white text-sm">
                                        Not Dowmloaded
                                      </p>
                                    </div>
                                  </td>
                                </div>
                              );
                          })}
                        </div>
                      ) : null}
                      <div
                        onClick={() => setNewUser(true)}
                        className="flex justify-center items-center bg-[#C4C4C4]/20 p-3 text-[#3EB049] text-sm cursor-pointer"
                      >
                        <p>Add User</p>
                        <img
                          src={plusImage}
                          className="w-[10px] h-[10px] ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
