<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
 /* @font-face {
    font-family: 'iconfont';  !* project id 1347499 *!
    src: url('//at.alicdn.com/t/font_1347499_cve5pctlcow.eot');
    src: url('//at.alicdn.com/t/font_1347499_cve5pctlcow.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1347499_cve5pctlcow.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1347499_cve5pctlcow.woff') format('woff'),
    url('//at.alicdn.com/t/font_1347499_cve5pctlcow.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1347499_cve5pctlcow.svg#iconfont') format('svg');
  }*/
  @font-face {
    font-family: 'iconfont';  /* project id 1347499 */
    src: url('./static/font/iconfont.eot');
    src: url('./static/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./static/font/iconfont.woff2') format('woff2'),
    url('./static/font/iconfont.woff') format('woff'),
    url('./static/font/iconfont.ttf') format('truetype'),
    url('./static/font/iconfont.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: iconfont;
  }
</style>
