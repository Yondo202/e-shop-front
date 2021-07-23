import React from "react";
import App from "next/app";
import checkLanguage from "@/miscs/checkLanguage";
import { MenuStore } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import axios from "axios";
// import TagManager from "react-gtm-module";

class MyApp extends App {
    state = {
      customTheme: {},
      headerMenu: [],
      footerMenu: [],
      logo: null,
      menuTop: [],
      config: {},
    //   general: {},
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
        const config = {width: window.innerWidth, height: window.innerHeight};

        if(res.data.Header?.pages?.length){
            this.setState({
                completelyLoaded: true,
                headerMenu: menus?.data?.data?.pages,
                footerMenu: res.data.footer_menu,
                logo : res.data.logo,
                menuTop: res.data.help_menu,
                color:res?.data?.color,
                // customTheme:{...state.customTheme, state.customTheme: null},
                // general: {social: res.data.Social_links,copyright: res.data.Copyright},
                config
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
                           {this.state.completelyLoaded? <Component {...pageProps} key={router.route} /> : <h1>Loading ...............</h1> }
                           {/* <Component {...pageProps} key={router.route} />  */}
                        {/* </AnimatePresence> */}
                    </MenuStore>
                </ThemeProvider>
            );
    }
}

export default MyApp;