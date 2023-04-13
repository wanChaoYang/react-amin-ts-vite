import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key: string;
  name: string;
  code: string;
  type: number;
  status: number;
}
const data: DataType[] = [
  {
    key: "1",
    name: "南瓜",
    code: "355666",
    type: 1,
    status: 1,
  },
  {
    key: "2",
    name: "西瓜",
    code: "355666",
    type: 1,
    status: 2,
  },
  {
    key: "3",
    name: "冬瓜",
    code: "355666",
    type: 1,
    status: 1,
  },
  {
    key: "4",
    name: "西红柿",
    code: "355666",
    type: 2,
    status: 1,
  },
];
const columns: ColumnsType<DataType> = [
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "商品编码",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "商品类别",
    dataIndex: "type",
    key: "type",
    render: (_, { type }) => {
      return <div>{type === 1 ? "蔬菜" : "水果"}</div>;
    },
  },
  {
    title: "状态",
    key: " status",
    dataIndex: "status",
    render: (_, { status }) => {
      let color = status === 1 ? "green" : "volcano";
      return (
        <Tag color={color} key={status}>
          {status === 1 ? "已上架" : "已下架"}
        </Tag>
      );
    },
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>上架</a>
        <a>下架</a>
        <a>删除</a>
      </Space>
    ),
  },
];
function Index() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Index;
