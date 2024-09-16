  "use client";
  import React from "react";
  import { Table, Badge, Menu, Dropdown, Icon } from "antd";
  import { DownOutlined } from '@ant-design/icons'; // Import the specific icon

  // Define your menu
  const menu = (
    <Menu>
      <Menu.Item>Action 1</Menu.Item>
      <Menu.Item>Action 2</Menu.Item>
    </Menu>
  );

  export function NestedTable() {
    const expandedRowRender = () => {
      const columns = [
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Name", dataIndex: "name", key: "name" },
        {
          title: "Status",
          key: "state",
          render: () => (
            <span>
              <Badge status="success" />
              Finished
            </span>
          ),
        },
        { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
        {
          title: "Action",
          key: "operation",
          render: () => (
            <span className="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <Dropdown overlay={menu}>
                <a>
                  More <DownOutlined /> {/* Use DownOutlined instead of Icon */}
                </a>
              </Dropdown>
            </span>
          ),
        },
      ];

      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: "2014-12-24 23:12:00",
          name: "This is production name",
          upgradeNum: "Upgraded: 56",
        });
      }
      return (
        <Table
         
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      );
    };

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Platform", dataIndex: "platform", key: "platform" },
      { title: "Version", dataIndex: "version", key: "version" },
      { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
      { title: "Creator", dataIndex: "creator", key: "creator" },
      { title: "Date", dataIndex: "createdAt", key: "createdAt" },
      { title: "Action", key: "operation", render: () => <a>Publish</a> },
    ];

    const data = [];
   
      data.push(
        {
          key: 1,
          name: "project1",
          platform: "Windows",
          version: "10.3.4.5654",
          upgradeNum: 500,
          creator: "Rahma",
          createdAt: "2014-12-24 23:12:00",
        },
        {
          key: 2,
          name: "project2",
          platform: "Windows",
          version: "10.3.4.5654",
          upgradeNum: 500,
          creator: "Rahma",
          createdAt: "2014-12-24 23:12:00",
        },
        {
          key: 3,
          name: "project3",
          platform: "Windows",
          version: "10.3.4.5654",
          upgradeNum: 500,
          creator: "Rahma",
          createdAt: "2014-12-24 23:12:00",
        },
        {
          key: 4,
          name: "project4",
          platform: "Windows",
          version: "10.3.4.5654",
          upgradeNum: 500,
          creator: "Rahma",
          createdAt: "2014-12-24 23:12:00",
        },
        {
          key: 5,
          name: "project5",
          platform: "Windows",
          version: "10.3.4.5654",
          upgradeNum: 500,
          creator: "Rahma",
          createdAt: "2014-12-24 23:12:00",
        },
        {
          key: 6,
          name: "project6",
          platform: "Windows",
          version: "10.3.4.5654",
          upgradeNum: 500,
          creator: "Rahma",
          createdAt: "2014-12-24 23:12:00",
        }
      );
    

    return (
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandedRowRender={expandedRowRender}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    );
  }
