import "./styles.css";
import "antd/dist/antd.css";
import EmployeeForm from "./components/employeeForm";
import { Layout, Menu } from "antd";
import AboutUs from "./components/aboutUs";
import { NavLink, Route, Switch } from "react-router-dom";
import uploadimg from "./components/uploadimg";
import EmployeeTable from "./components/EmployeeTable";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <NavLink to="/employee-form">Employee Form</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/about-us">About Us</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/uploadimg">Upload Image</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/EmployeeTable">Employee Table</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route exact path="/" component={EmployeeForm} />
            <Route path="/employee-form" component={EmployeeForm} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/uploadimg" component={uploadimg} />
            <Route path="/employeetable" component={EmployeeTable} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
