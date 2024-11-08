import { useLoaderData } from "@remix-run/react";

interface Employee {
  id: number,
  name: string
  created_at: string,
  updated_at: string
}

export const loader = async (): Promise<Employee[]> => {
  const response = await fetch("http://be:3020/employee");
  const employee = await response.json() as Employee[]
  return employee;
};

export default function EmployeePage() {
  const employee = useLoaderData() as Employee[]

  return (
    <div>
      <h1>Employee Page</h1>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>created_at</th>
            <th>updated_at</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
