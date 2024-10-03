import React from "react";
import { TbArrowsDownUp ,TbAlignBoxLeftStretch, TbMailOpened, TbLogout ,TbNotebook } from "react-icons/tb";
import { TfiEye } from "react-icons/tfi";


function Main() {
  return (
    <div className="font-Nunito ">
      <div className="relative font-Nunito  bg-slate-200 w-full font- h-full ml-18 overflow-hidden cursor-pointer mt-0">
        <div className="bg-indigo-700 min-h-4000 w-15 left-0 bottom-0 inset-y-0 mt-0 flex flex-col px-2 absolute  items-center shrink">
          <div>
            <p className="mx-4 mt-6 pt-6">
              <TbMailOpened />
            </p>
            <p className="text-sm  mt-0 py-0 p-1">Inbox</p>
          </div>
          <div>
            <p className="mx-4">< TbNotebook /></p>
            <p className="text-sm  font">Leads</p>
          </div>
          <div>
            <p className="mx-4">
              <TbLogout/>
            </p>
            <p className="text-sm">Logout</p>
          </div>
        </div>
        <h2 className="ml-20 px-6 text-blue-950 text-xl font-bold m-8">Leads</h2>
        <div className="flex font-Nunito  ml-24 m-6">
          <button className="bg-blue-400 rounded-lg px-2 py-2  ">
            In Progress
          </button>
          <button className="rounded-lg bg-white px-4 py-2 ml-3 ">
            Completed
          </button>
        </div>

        <div className="flex gap-8 h-12 w-100% ml-24 border-3 rounded-tl-lg rounded-tr-lg p-3  mr-8 bg-slate-100">
          <p className=" px-2 pl-4 border-b-2 border-collapse h-9 ml-5 font-bold border-blue-700">All</p>
          <p>Site Visit-Initiated</p>
          <p> Site Visit -Done</p>
          <p>On Hold</p>
          <p>Report Preparation</p>
        </div>
        <div className="flex gap-3  h-14 w-100% outline-2   ml-24 border-y-2 mr-8 bg-slate-100 ">
          <p className="m-2 p-1 pr-0 pl-8 font-extrabold" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg></p>
          
          <p className="py-3 m-1.7 pb-3">filter by</p>
          <select className="h-8 w-56 p-1 rounded-md my-2">
            <option className="px-4" value="TAT">TAT</option>
          </select>
          <select className="h-8 w-56 px-2 rounded-md my-2 ">
            <option value="TAT">State</option>
          </select>
          <select className="h-8 w-56 px-2  rounded-md my-2">
            <option value="TAT">District</option>
          </select> 
          <select className="h-8 w-56 px-2 rounded-md my-2 ">
            <option value="TAT">Pincode</option>
          </select>
        </div>
        <div className="Table ml-24 bg-slate-100 w-140 rounded-bl-lg rounded-br-lg h-100% mr-8 px-8">
          <div className="flex justify-between h-full  py-4">
            <p>Showing <b>1-60 results</b> </p>
            <div className="flex mr-0 mt-0">
              <p className="my-3 mx-1">
                <TbArrowsDownUp />
              </p>
              <p className="my-2.5 mx-2" >Sort by </p>
              <p>
                <select className="h-8 w-56 rounded-md my-2 mr-3">
                  <option value="TAT">TAT-High to Low</option>
                </select>
              </p>
            </div>
          </div>

         <div className="w-screen">
         <table className="py-3 border-collapse border w-160  ">
            <thead className="text-xs   border h-12 border-collapse text-justify text-gray-400 w-100%">
              <th className="pl-16">LEAD NO</th>
              <th className="pr-20 pl-5">APPLICANT DETAIL</th>
              <th className="pr-18 pl-2">INSTITUTE</th>
              <th  className="pr-20 pl-4">TAT</th>
              <th  className="pr-20 pl-8">STATUS</th>
            </thead>
            <tbody className="border">
          
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-2">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3" ><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td className="ml-0">
                   <select className="w-44 ml-0 rounded-sm p-1 bg-blue-100 text-blue-800">

                    <option value="Site Visit -Initiated">
                      Site Visit -initiated
                    </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td >
                  <select className="w-44 rounded-md p-1 text-blue-600 bg-blue-100">
                    <option value="Site Visit -Done">
                      <p >Site Visit - Done
                      </p>
                    </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td>
                   <select className="w-44 p-1 bg-gray-200 rounded-sm">
                   <option value=" Report Preparation">
                    Report Preparation                
                   </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td >
                   <select className="w-44 rounded-md p-1 text-blue-600 bg-blue-100">

                    <option value="Site Visit- Done">
                      Site Visit- Done
                    </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td>
                   <select className="w-44 p-1 bg-gray-200 rounded-sm">
                   <option value=" Report Preparation">
                    Report Preparation                
                   </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td >
                   <select className="w-44 p-1 rounded-sm bg-orange-200 text-red-600">

                    <option value="On hold">
                      On hold
                    </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td className="ml-0">
                   <select className="w-44 ml-0 rounded-sm p-1 bg-blue-100 text-blue-800">

                    <option value="Site Visit -Initiated">
                      Site Visit -initiated
                    </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td>
                   <select className="w-44 p-1 bg-gray-200 rounded-sm">
                   <option value=" Report Preparation">
                    Report Preparation                
                   </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              <tr className="border border-collapse">
                <td className="px-3 flex p-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10 p-3  py-3">
                  <p ><TbAlignBoxLeftStretch/></p>

                  </div>
                 
                  <div className="px-3">
                  <p >1509-1509-2745-1509</p>
                  <p className="text-xs ">28 sep</p>
                  </div>
                </td>
                <td className="px-5">
                  <p>Rajan Venkat</p>
                  <p className="text-xs">31Five Anand Nagar prak</p>
                </td>
                <td className="px-3">
                  <p>
                    APAC Fintech <p className="text-xs">Salem Branch</p>
                  </p>
                </td>
                <td className="px-3"><p className="max-w-12 h-8 bg-slate-200 text-red-400 p-1 rounded-lg">21:00</p></td>
                <td >
                   <select className="w-44 p-1 rounded-sm bg-orange-200 text-red-600">

                    <option value="On hold">
                      On hold
                    </option>
                  </select>
                </td>
                <td className="px-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg></td>
                <td className="w-2">
                  < TfiEye  />
                </td>
                <td className="px-3">
                  <button className="bg-blue-800 text-white px-2 py-1 rounded-md">Submit</button>
                </td>
              </tr>
              
              
              
            </tbody>
          </table>
          <div className="flex gap-2   bg-slate-100">
          <p>
            <button className="rounded-md px-4 py-1  my-6 ml-8 bg-white">previous</button>
          </p>
          <p>
            <button className="rounded-md border-2 border-blue-600 py-1 px-3 my-6 bg-white">1</button>
          </p>
          <p>
            <button className="rounded-md py-1 px-3 my-6 bg-white">2</button>
          </p>
          <p>
            <button className="rounded-md py-1 px-3 my-6 bg-white">3</button>
          </p>
          <p>
            <button className="rounded-md py-1 px-3 my-6 bg-white">4</button>
          </p>
          <p>
            <button className="rounded-md py-1 px-3 my-6 bg-white">5</button>
          </p>
          <p>
            <button className="rounded-md py-1 px-3 my-6 bg-white">6</button>
          </p>
          <p>
            <button className="rounded-md py-1 px-3 my-6 bg-white">Next</button>
          </p>
        </div>
         </div>
        </div>

       
      </div>
    </div>
  );
}

export default Main;
