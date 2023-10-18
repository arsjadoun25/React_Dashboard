import { useNavigate } from "react-router-dom";
import { AppstoreAddOutlined, BulbFilled, CiOutlined, GatewayOutlined, HeartOutlined, HeatMapOutlined, HighlightOutlined, MoneyCollectFilled, MoneyCollectOutlined, MoneyCollectTwoTone, ReconciliationTwoTone, ShopFilled, UserAddOutlined, UserOutlined } from "@ant-design/icons" 
import { Menu } from "antd";
function SideMenu(){
    const navigate =  useNavigate();
    return <div className="SideMenu">
        <h1><ReconciliationTwoTone twoToneColor="#fffff"/> Dashboard</h1>
        <Menu
            className="Menu"
            onClick={(item) => {
                //item.key
                navigate(item.key);
            }}
            items={[
                {
                    label: "Dashboard\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>",
                    icon: <AppstoreAddOutlined />,
                    key: "/"
                },
                {
                    label: "Product\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>",
                    icon: <ShopFilled />,
                    key: "/product"
                },
                {
                    label: "Customer\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>",
                    icon: <UserOutlined />,
                    key: "/customer"
                },
                {
                    label: "Income\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>",
                    icon: <MoneyCollectOutlined />,
                    key: "/income"
                },
                {
                    label: "Promote\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>",
                    icon: <HighlightOutlined />,
                    key: "/promote"
                },
                {
                    label: "Help\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>",
                    icon: <HeartOutlined />,
                    key: "/help"
                }
            ]}
        ></Menu>
    </div>
}
export default SideMenu;
