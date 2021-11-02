import React from "react";
import { Table } from "antd";
// import EmployeeForm from "./employeeForm";

export default function EmployeeTable() {
  const columns = [
    {
      title: "firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "designation",
      dataIndex: "designation",
      key: "designation",
    },
  ];
  return (
    <div>
      <Table
        dataSource={JSON.parse(localStorage.getItem("values"))}
        columns={columns}
      />
      ;
    </div>
  );
}