import React, { useState } from "react";
import hookImage from "../../assets/hook.png";
import plusImage from "../../assets/plus.png";
import { MenuItem, FormControl } from "@mui/material";
import Select from "@mui/material/Select";

export default function AppUsersModal({ visible = true }) {
  const [newUser, setNewUser] = useState(false);
  const [role, setRole] = useState("Owner");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const COLUMS = [
    { id: 11, name: "USER ID" },
    { id: 12, name: "NAME" },
    { id: 13, name: "CONTACT NO." },
    { id: 14, name: "ROLE" },
    { id: 15, name: "APP STATUS" },
  ];
  const [ROWS, setROWS] = useState([
    {
      id: 16,
      userId: "LJBABGR001",
      name: "Neal Matthews",
      contactNo: "087882233909",
      role: "Owner",
      appStatus: "active",
    },
    {
      id: 17,
      userId: "LJBABGR002",
      name: "Robert Matthews",
      contactNo: "087882233100",
      role: "Owner",
      appStatus: "active",
    },
  ]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      {visible ? (
        <>
          <div className="flex overflow-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/20">
            <div className="relative w-full mt-[10%] ml-[20%] mr-[20%] mb-[3%] bg-white">
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
                          {ROWS.map((row) => {
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
                                    return (
                                      <td key={i} className="p-3">
                                        <div className="flex bg-[#0090FF] rounded-2xl py-1 justify-center items-center">
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
                          {Object.keys(ROWS[0]).map((item, i) => {
                            if (item === "name") {
                              return (
                                <div key={i}>
                                  <input
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
                                <FormControl
                                  sx={{ m: 1, minWidth: 120 }}
                                  size="small"
                                >
                                  <Select
                                    value={role}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{
                                      "aria-label": "Without label",
                                    }}
                                  >
                                    <MenuItem value={"Owner"}>Owner</MenuItem>
                                    <MenuItem value={"Farm Manager"}>
                                      Farm Manager
                                    </MenuItem>
                                    <MenuItem value={"Worker"}>Worker</MenuItem>
                                    <MenuItem value={"Beleaf Farm Manager"}>
                                      Beleaf Farm Manager
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              );
                            } else if (item === "contactNo") {
                              return (
                                <div key={i}>
                                  <input
                                    style={{ border: "1px solid #E5E8E8" }}
                                    placeholder="contactNo"
                                    onChange={(event) =>
                                      setContactNo(event.target.value)
                                    }
                                  />
                                </div>
                              );
                            } else return <div key={i}></div>;
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
};
