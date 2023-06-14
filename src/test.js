// import { useEffect, useState } from 'react';
// import {
//   DataTable,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   TableCell,
//   TableContainer,
//   DataTableSkeleton,
//   Link
// } from '@carbon/react';
// import "./App.scss";

// function App() {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         if (response.status === 200) {
//           setLoading(false)
//         }
//         return response.json()
//       })
//       .then((json) => setData(json.map((item) => {
//         return {
//           ...item,
//           age: 10,
//           title: <Link href={`/posts/${item.id}`}>{item.title}</Link>
//         }
//       }
//       )))
//   }, []);

//   return (
//     loading ? <DataTableSkeleton /> : <DataTable
//       rows={data}
//       headers={[
//         { key: 'id', header: 'ID' },
//         { key: 'title', header: 'Title' },
//         { key: 'body', header: 'Body' },
//         { key: 'age', header: 'age' },
//         { key: 'userId', header: 'UserId' },
//       ]}
//     >
//       {({ rows, headers, getHeaderProps }) => (
//         <TableContainer title="Data Table">
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {headers.map((header) => (
//                   <TableHeader {...getHeaderProps({ header })}>
//                     {header.header}
//                   </TableHeader>
//                 ))}
//               </TableRow>
//             </TableHead>
//             {console.log(data)}
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.id}>
//                   {row.cells.map((cell) => (
//                     <TableCell key={cell.id}>{cell.value}</TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </DataTable>
//   );
// }

// export default App;
