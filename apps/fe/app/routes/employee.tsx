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
      <ul>
        {employee.map(item => (
          <li key={item.id}>title: {item.name}</li>
        ))}
      </ul>
    </div>
  )
}
