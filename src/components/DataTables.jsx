import React, { useEffect, useState } from 'react'
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Link,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Button,
} from '@carbon/react'


const DataTables = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        setData(
          json.map((item) => {
            return {
              ...item,
              title: <Link href={`/posts/${item.id}`}>{item.title}</Link>,
            };
          })
        )
      );
  }, []);
  const action = (msg) => {
    console.log(msg);
  }
<div className=" "></div>
  const searchText = (e) => {
    console.log(e.target.value);
    if(e.target.value) {
      fetch("https://jsonplaceholder.typicode.com/posts?" + new URLSearchParams({
      postId: e.target.value,
    })).then(response => response.json()).then(json => setData(json))
    }else {
      fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => console.log(json))
    }
  }

  return (
    <DataTable
      rows={data}
      headers={[
        { key: "id", header: "ID" },
        { key: "title", header: "Title" },
        { key: "body", header: "Body" },
        { key: "userId", header: "UserId" },
      ]}
    >
      {({ rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getToolbarProps,
        onInputChange,
        getTableContainerProps }) => (
        <TableContainer title="Data Table" {...getTableContainerProps()}>
          <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
            <TableToolbarContent>
              <TableToolbarSearch onChange={searchText} />
              {/* <TableToolbarMenu light>
                <TableToolbarAction onClick={action('Action 1 Click')}>
                  Action 1
                </TableToolbarAction>
                <TableToolbarAction onClick={action('Action 2 Click')}>
                  Action 2
                </TableToolbarAction>
                <TableToolbarAction onClick={action('Action 3 Click')}>
                  Action 3
                </TableToolbarAction>
              </TableToolbarMenu> */}
              {/* <Button onClick={action('Button click')}>Primary Button</Button> */}
            </TableToolbarContent>
          </TableToolbar>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  );
};
export default DataTables;
