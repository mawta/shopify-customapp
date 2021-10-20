import { connect } from "react-redux";
import { PriceRule } from "../../pages";
import { fetchData, postData } from "../../actions/";

const mapStateToProps = (state) => ({
    data: state.data,
    postResponse: state.postData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: (payload) => dispatch(fetchData(payload)),
    postData: (payload) => dispatch(postData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceRule);
