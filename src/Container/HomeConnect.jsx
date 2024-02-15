import { connect } from "react-redux";
import acceptFunc, { rejectFunc, blockFunc, undoFunc } from '../Actions/action'

import Home from "../components/Home.jsx";
import AcceptList from '../components/AcceptList.jsx'
import RejectList from '../components/RejectList.jsx'
import BlockList from '../components/BlockList.jsx'

const mapState =(state)=>(
    {
        Data:state.personStatus.Name
    }
)

const mapDispatch = (dispatch)=>(
    {
        acceptFuncHandler: (acceptData) => dispatch(acceptFunc(acceptData)),
        rejectFuncHandler: (rejectData) => dispatch(rejectFunc(rejectData)),
        blockFuncHandler: (blockData) => dispatch(blockFunc(blockData)),
        undoFuncHandler: (undoData) => dispatch(undoFunc(undoData))
    }
)

export default connect(mapState,mapDispatch)(Home)
export const ConnectAcceptList = connect(mapState, mapDispatch)(AcceptList)
export const ConnectRejectList = connect(mapState, mapDispatch)(RejectList)
export const ConnectBlockList = connect(mapState, mapDispatch)(BlockList)