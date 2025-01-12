import { useLoaderData } from '@remix-run/react';
import React, { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export const loader = async (): Promise<Employee[]> => {
  const response = await fetch('http://be:3020/employee');
  const employee = (await response.json()) as Employee[];
  return employee;
};

export default function EmployeePage() {
  const employee = useLoaderData() as Employee[];
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const onChangeSearchForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h1>Employee Page</h1>
      <form>
        <label htmlFor="employee-search">従業員検索: </label>
        <input
          type="search"
          id="employee-search"
          onChange={onChangeSearchForm}
          className="border"
        />
      </form>
      <p>検索中ワード: {searchInput}</p>
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
          {employee.map((item) => (
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
  );
}
