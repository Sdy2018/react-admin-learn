import Loadable from 'react-loadable';
import {Component} from 'react' 

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


class loadingComponent extends Component {
    constructor(props) {
        super(props)
        NProgress.start()
    }
    componentDidMount() {
        NProgress.done()
    }
    render() {
        return null
    }
}


function loadable(loader,loading=loadingComponent){
    return Loadable({
        loader,
        loading
    });
}
export default loadable


