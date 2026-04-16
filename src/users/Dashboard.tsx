import { useLocation } from "react-router-dom"
import users from "../data/user.json"
import orders from "../data/orders.json"
import "./Dashboard.css"

export default function Dashboard (){

    //데이터가져오기
    //useLocation() :  URL의 위치(경로) 정보를 반환, 사용자 정보 추출(전달)
    const location = useLocation();
    const {username, role} = location.state || {}
    console.log(username,role);


    return(
        <div className="dashboard-container">
            <h2>관리자 페이지</h2>
            {role === 'admin' && (
                <>
                    <div className="dashboard-section">
                        <h3>회원현황</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>순번</th>
                                    <th>아이디</th>
                                    <th>권한</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user)=>(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="dashboard-section">
                        <h3>상품 주문 현황</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>주문 ID</th>
                                    <th>상품명</th>
                                    <th>주문자</th>
                                    <th>상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order)=>(
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.product}</td>
                                        <td>{users.find(user => user.id === order.userId)?.username}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    )
}