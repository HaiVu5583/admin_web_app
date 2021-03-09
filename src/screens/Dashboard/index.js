import React from "react";
import * as Icon from "react-icons/fi";
import VerticalTimeline from "src/components/VerticalTimeline";
import { useTable } from "react-table";
import { timelineData, tableData, tableColumns } from "./data";

const RowInfoItem = (props) => {
  const {
    title,
    content,
    IconComponent,
    iconBgClass,
    iconColor = "white",
    contentColorClass = "text-gray-800",
  } = props;
  return (
    <div className="flex p-4 items-center border-b border-gray-100 md:border-b-0">
      <div
        className={`mr-4 w-10 h-10 rounded-full flex justify-items-center items-center ${iconBgClass}`}
      >
        <div className="m-auto">
          <IconComponent size={20} color={iconColor} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-400 text-xs">{title}</div>
        <div className={`${contentColorClass} font-bold text-3xl`}>
          {content}
        </div>
      </div>
    </div>
  );
};

const CardSquareItem = (props) => {
  const {
    title,
    content,
    contentColorClass = "text-gray-600",
    borderBottomClass,
  } = props;
  return (
    <div
      className={`shadow-md bg-white rounded-md p-4 ${borderBottomClass} h-32`}
    >
      <div className="flex flex-col">
        <div className={`${contentColorClass} font-bold text-3xl`}>
          {content}
        </div>
        <div className="text-gray-400 text-sm">{title}</div>
      </div>
    </div>
  );
};

const BlockHeader = (props) => {
  const { title } = props;
  return (
    <div className="text-gray-600 p-4 border-b border-gray-200">{title}</div>
  );
};

const DashBoard = (props) => {
  console.log("Render dashboard");

  const data = React.useMemo(() => tableData, []);

  const columns = React.useMemo(() => tableColumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="shadow-md bg-white rounded-md">
        <BlockHeader title="Portfolio Performance" />
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
          <RowInfoItem
            title={"Cash Deposits"}
            content={"1.7M"}
            IconComponent={Icon.FiBookOpen}
            iconBgClass="bg-green-400"
          />
          <RowInfoItem
            title={"Invested Dividents"}
            content={"9M"}
            IconComponent={Icon.FiCoffee}
            iconBgClass="bg-red-500"
          />
          <RowInfoItem
            title={"Capital Gains"}
            content={"$563"}
            IconComponent={Icon.FiMap}
            iconBgClass="bg-yellow-400"
            contentColorClass="text-green-500"
          />
        </div>
      </div>

      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-2 mt-4">
        <CardSquareItem
          title={"sales last month"}
          content={"$874"}
          borderBottomClass="border-b-4 border-green-300"
        />
        <CardSquareItem
          title={"sales income"}
          content={"$1283"}
          borderBottomClass="border-b-4 border-red-600"
        />
        <CardSquareItem
          title={"last month sales"}
          content={"$1286"}
          borderBottomClass="border-b-4 border-yellow-300"
        />
        <CardSquareItem
          title={"total revenue"}
          content={"$564"}
          borderBottomClass="border-b-4 border-blue-600"
        />
      </div>

      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mt-4">
        <div className={"shadow-md bg-white rounded-md"}>
          <BlockHeader title="Timeline Example" />
          <div className="p-4" style={{ overflowY: "scroll", height: 300 }}>
            <VerticalTimeline data={timelineData} />
          </div>
        </div>

        <div className={"shadow-md bg-white rounded-md"}>
          <BlockHeader title="Task List" />
          <div class="p-4" style={{ overflowY: "scroll", height: 300 }}>
            <table {...getTableProps()} className="border-gray-200 border">
              <thead className="border-b-gray-200 border">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="py-2 px-2 font-semibold text-gray-600 text-left"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border-b-gray-200 border-b p-2 text-gray-400"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
