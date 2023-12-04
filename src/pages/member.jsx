import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@material-tailwind/react";

import { rankItem, compareItems } from "@tanstack/match-sorter-utils";
import { makeData } from "../datas/memberdata";
import { useEffect, useMemo, useReducer, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the itemRank info
  addMeta({ itemRank });

  return itemRank.passed;
};

const fuzzySort = (rowA, rowB, columnId) => {
  let dir = 0;

  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank,
      rowB.columnFiltersMeta[columnId]?.itemRank
    );
  }

  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("username", {
    header: "Member",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
];

export function Member() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const rerender = useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const [data, setData] = useState(() => makeData(100));
  const refreshData = () => setData((old) => makeData(100));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    data.map((item) => console.log(item.email));
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Typography variant="h3" color="gray" className="mt-8 px-2 lg:px-10">
        Member
      </Typography>
      <div className="flex-auto overflow-auto">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Member;
