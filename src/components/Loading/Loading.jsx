import './Loading.css'
import svg from '../../assets/icon.svg'
function Loading() {
    return(
        <div id='divloading'>
            <img src={svg} alt="" id='logoloading'/>
        </div>
    )
}

export default Loading;