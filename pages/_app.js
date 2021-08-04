import React from "react";
import App from "next/app";
import Router from "next/router"
import checkLanguage from "@/miscs/checkLanguage";
import { MenuStore } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import axios from "axios";
// import TagManager from "react-gtm-module";
import { parseCookies } from "nookies"

{/* <TopBarProgress /> */}

class MyApp extends App {
    state = {
      customTheme: {},
      headerMenu: [],
      footerMenu: [],
      logo: null,
      menuTop: [],
    //   config: {},
      color: null,
      completelyLoaded: false,
      name: 'e-shop',
      description: 'To be continued...',
    };
    
    async componentDidMount() {
        this.setState({ customTheme : theme})
        // let res = await checkLanguage('/settings', null, true);
        let res = await axios.get(`${process.env.serverUrl}/settings`);
        let menus = await axios.post(`${process.env.serverUrl}/graphql`, {query: `query{pages{ id name slug
            category_middles{ id name slug
              category_details{ id name slug } } } }`})
        // const config = {width: window.innerWidth, height: window.innerHeight};

        if(res.data.Header?.pages?.length){
            this.setState({
                completelyLoaded: true,
                headerMenu: menus?.data?.data?.pages,
                footerMenu: res.data.footer_menu,
                logo : res.data.logo,
                menuTop: res.data.help_menu,
                color:res?.data?.color,
                // config
            });
        }
        if(res?.data?.color){
            this.setState({ customTheme: {...this.state.customTheme, mainColor: res?.data?.color} })
        }
        if(res?.data?.button_color){
            this.setState({ customTheme: {...this.state.customTheme, buttonColor: res?.data?.button_color} })
        }
        // GOOGLE TAG MANAGER
        // const tagManagerArgs = { gtmId: "GTM-5GWNX89" };
        // TagManager.initialize(tagManagerArgs);
    }

    render() {
        const { Component, pageProps, router } = this.props;
            return (
                <ThemeProvider theme={this.state.customTheme}>
                    <MenuStore value={this.state}>
                        {/* <AnimatePresence exitBeforeEnter> */}
                           {this.state.completelyLoaded? <Component {...pageProps} key={router.route} /> : <div style={{width:`100%`, height:`100vh`,display:`flex`, alignItems:"center", justifyContent:"center"}}><img src="/img/giff.gif" alt="eshop-giff" /></div>  }
                           {/* <Component {...pageProps} key={router.route} />  */}
                        {/* </AnimatePresence> */}
                    </MenuStore>
                </ThemeProvider>
            );
    }
}

function redirectUser(ctx, location){
    if(ctx.req){
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    }else{
        Router?.push(location);
    }
}


MyApp.getInitialProps = async({ Component, ctx }) =>{
    let pageProps = {}
    const { jwt } = parseCookies(ctx);

    if(jwt){
        if(ctx.pathname==="/login"){
            redirectUser(ctx, "/");
        }
    }

    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
    }

    return{
        pageProps,
    }
}

export default MyApp;