

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Video from 'react-native-video';

export default class App extends Component {

  onBuffer = () => {
    console.log('buffering')
  }
  onLoadStart=()=>{
    console.log('onLoadStart')
  }
  onLoad=()=>{
    console.log('onLoad')
  }

  render() {
    console.log('render')
    return (
      <View style={{ width: '100%', }}>
        <Video source={{ uri: 'https://r7---sn-jtcxg-3ipz.googlevideo.com/videoplayback?expire=1592591469&ei=DbDsXratHd6Q8wSx-6OQBg&ip=45.72.59.123&id=o-ACgyvOi6BD4ikainkpsEWkEQdhOp9Z-VA_SmX4Efzwr1&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=1239.666&lmt=1581640289695268&fvip=4&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgAw1oV-BNC9pOgKSvJMG-g-hZwd5xPSyFdmjK822NgrMCIEq7H_Ial73Fwm6ApFPpL4psVT02oV6VOiSMuUnqlMWV&contentlength=166842096&video_id=5jDcLIaNcLk&title=A+Trip+to+Naran%2C+Northern+Pakistan&redirect_counter=1&rm=sn-ab5e777z&req_id=a6aa0673ffcca3ee&cms_redirect=yes&ipbypass=yes&mh=VK&mip=175.107.222.125&mm=31&mn=sn-jtcxg-3ipz&ms=au&mt=1592569774&mv=m&mvi=6&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALuJ1H4eCJm97PXJlgmoURijS-bW-qhs3hbOMwesloM3AiEA36DIvwJAsNbK-kDc_2xrOVqRCA3xmLIVjlhSt0jEmQM%3D' }}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={() => { alert('error') }}                  // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          onLoadStart={this.onLoadStart}
          onLoad={this.onLoad}
          />

        <Text style={{ backgroundColor: 'red', fontWeight: 'bold' }}>
          We here
          </Text>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '50%'
  },
});
