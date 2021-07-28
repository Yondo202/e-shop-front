import React from "react"
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#008aff",
    "1.0": "#008aff"
  },
  barThickness:2,
  shadowBlur: 5,
});

const TopLoad =({Router})=> {
    const [ topLoad, setTopLoad ] = React.useState(false);
    React.useEffect(()=>{
        Router.events.on('routeChangeStart', (url)=>{
            setTopLoad(true)
        });
        Router.events.on('routeChangeComplete', (url)=>{
            setTopLoad(false);
        })
    },[])

    return (
        <div>
            {topLoad?<TopBarProgress />:null}
        </div>
    )
}
export default TopLoad;