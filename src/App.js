import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from './redux/action/AccountAction';

function App() {

    const account = useSelector((state) => state.account);
    const dispatch = useDispatch();

    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
    console.log(account)
    return (
        <div className="App">
            <h1>{account.count}</h1>
            <button onClick={() => depositMoney(100)}>Deposit</button>
            <button onClick={() => withdrawMoney(50)}>Withdraw</button>
        </div>
    );
}

export default App;
