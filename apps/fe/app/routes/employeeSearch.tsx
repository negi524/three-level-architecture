import { useLoaderData } from '@remix-run/react';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Employee } from '~/domain/employee';

export const loader = async (): Promise<Employee[]> => {
  const response = await fetch('http://be:3020/employee');
  const employee = (await response.json()) as Employee[];
  return employee;
};

export default function EmployeePage() {
  const firstEmployees = useLoaderData() as Employee[];
  const [employees, setEmployees] = useState<Employee[]>(firstEmployees);
  const [searchInput, setSearchInput] = useState<string | null>(null);

  /**
   * 入力欄の変更を検知して検索する
   * @param event 入力欄の変更
   */
  const onChangeSearchForm = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInput(event.target.value);
    const response = await fetch(
      `/api/searchEmployee?name=${event.target.value}`,
    );
    const responseEmployees = (await response.json()) as Employee[];
    setEmployees(responseEmployees);
  };

  const debouncedOnChangeSearchForm = useDebouncedCallback(
    onChangeSearchForm,
    200,
  );

  return (
    <div>
      <h1>Employee Search Page</h1>
      <form>
        <label htmlFor="employee-search">従業員検索: </label>
        <input
          type="search"
          id="employee-search"
          onChange={debouncedOnChangeSearchForm}
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
          {employees.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
